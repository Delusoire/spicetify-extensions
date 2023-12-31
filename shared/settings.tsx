import { task } from "https://esm.sh/fp-ts"
import { SectionTitle, SettingColumn, SettingSection, SettingText, SettingToggle } from "./modules.ts"
import { sleep } from "./util.ts"
import { _ } from "./deps.ts"

const { React, ReactDOM, LocalStorage } = Spicetify
const { ButtonSecondary } = Spicetify.ReactComponent
const { History } = Spicetify.Platform

type FieldToProps<A> = Omit<A, "type">

export const enum FieldType {
    BUTTON = "button",
    TOGGLE = "toggle",
    INPUT = "input",
    HIDDEN = "hidden",
}

export interface BaseField {
    id: string
    type: FieldType
    desc: string
}

export type SettingsField = HiddenField | InputField | ButtonField | ToggleField

export interface ButtonField extends BaseField {
    type: FieldType.BUTTON
    text: string
    onClick?: () => void
}
export interface ToggleField extends BaseField {
    type: FieldType.TOGGLE
    onSelected?: (checked: boolean) => void
}

export interface InputField extends BaseField {
    type: FieldType.INPUT
    inputType: string
    onChange?: (value: string) => void
}

export interface HiddenField extends BaseField {
    type: FieldType.HIDDEN
}

export class SettingsSection {
    private stopHistoryListener: any
    public id: string

    constructor(public name: string, public sectionFields: { [key: string]: SettingsField } = {}) {
        this.id = _.kebabCase(name)
    }

    pushSettings = () => {
        if (this.stopHistoryListener) this.stopHistoryListener()

        this.stopHistoryListener = History.listen(() => this.render())
        this.render()
    }

    toObject = () =>
        new Proxy(
            {},
            {
                get: (target, prop) => SettingsSection.getFieldValue(this.getId(prop.toString())),
                set: (target, prop, newValue) => {
                    const id = this.getId(prop.toString())
                    if (SettingsSection.getFieldValue(id) === newValue) return false
                    SettingsSection.setFieldValue(id, newValue)
                    return true
                },
            },
        )

    private render = async () => {
        while (!document.getElementById("desktop.settings.selectLanguage")) {
            if (History.location.pathname !== "/preferences") return
            await sleep(100)
        }

        const allSettingsContainer = document.querySelector(".x-settings-container")!

        let pluginSettingsContainer = Array.from(allSettingsContainer.children).find(({ id }) => id === this.id)

        if (!pluginSettingsContainer) {
            pluginSettingsContainer = document.createElement("div")
            pluginSettingsContainer.id = this.id
            pluginSettingsContainer.className = "settingsContainer"
            allSettingsContainer.appendChild(pluginSettingsContainer)
        }

        ReactDOM.render(<this.SettingsSection />, pluginSettingsContainer)
    }

    addButton = (props: FieldToProps<ButtonField>) => {
        this.addField(FieldType.BUTTON, props)
        return this
    }

    addToggle = (props: FieldToProps<ToggleField>, defaultValue = task.of(false)) => {
        this.addField(FieldType.TOGGLE, props, defaultValue)
        return this
    }

    addInput = (props: FieldToProps<InputField>, defaultValue = task.of("")) => {
        this.addField(FieldType.INPUT, props, defaultValue)
        return this
    }

    private addField(type: FieldType, opts: FieldToProps<SettingsField>, defaultValue?: any) {
        if (defaultValue !== undefined) {
            const settingId = this.getId(opts.id)
            SettingsSection.setDefaultFieldValue(settingId, defaultValue)
        }
        const field = Object.assign({}, opts, { type }) as SettingsField
        this.sectionFields[opts.id] = field
    }

    getId = (nameId: string) => ["extensions", this.id, nameId].join(":")

    private useStateFor = <A,>(id: string) => {
        const [value, setValueState] = React.useState(SettingsSection.getFieldValue<A>(id))

        return [
            value,
            (newValue: A) => {
                if (newValue !== undefined) {
                    setValueState(newValue)
                    SettingsSection.setFieldValue(id!, newValue)
                }
            },
        ] as const
    }

    static getFieldValue = <R,>(id: string): R => JSON.parse(LocalStorage.get(id) ?? "null")

    static setFieldValue = (id: string, newValue: any) => LocalStorage.set(id, JSON.stringify(newValue))

    private static setDefaultFieldValue = async (id: string, defaultValue: task.Task<any>) => {
        if (SettingsSection.getFieldValue(id) === null) SettingsSection.setFieldValue(id, await defaultValue())
    }

    private toReactComponent = (field: SettingsField) => {
        switch (field.type) {
            case FieldType.BUTTON:
                return this.ButtonField(field)
            case FieldType.TOGGLE:
                return this.ToggleField(field)
            case FieldType.INPUT:
                return this.InputField(field)
            default:
                return <></>
        }
    }

    private SettingsSection = () => (
        <SettingSection filterMatchQuery={this.name}>
            <SectionTitle>{this.name}</SectionTitle>
            {Object.values(this.sectionFields).map(this.toReactComponent)}
        </SettingSection>
    )

    SettingField = ({ field, children }: { field: SettingsField; children?: any }) => (
        <SettingColumn filterMatchQuery={field.id}>
            <div className="x-settings-firstColumn">
                <SettingText htmlFor={field.id}>{field.desc}</SettingText>
            </div>
            <div className="x-settings-secondColumn">{children}</div>
        </SettingColumn>
    )

    ButtonField = (field: ButtonField) => (
        <this.SettingField field={field}>
            <ButtonSecondary id={field.id} buttonSize="sm" onClick={field.onClick} className="x-settings-button">
                {field.text}
            </ButtonSecondary>
        </this.SettingField>
    )

    ToggleField = (field: ToggleField) => {
        const id = this.getId(field.id)
        const [value, setValue] = this.useStateFor<boolean>(id)
        return (
            <this.SettingField field={field}>
                <SettingToggle
                    id={field.id}
                    value={SettingsSection.getFieldValue(id)}
                    onSelected={(checked: boolean) => {
                        setValue(checked)
                        field.onSelected?.(checked)
                    }}
                    className="x-settings-button"
                />
            </this.SettingField>
        )
    }

    InputField = (field: InputField) => {
        const id = this.getId(field.id)
        const [value, setValue] = this.useStateFor<string>(id)
        return (
            <this.SettingField field={field}>
                <input
                    className="x-settings-input"
                    id={field.id}
                    dir="ltr"
                    value={SettingsSection.getFieldValue(id)}
                    type={field.inputType}
                    onChange={e => {
                        const value = e.currentTarget.value
                        setValue(value)
                        field.onChange?.(value)
                    }}
                />
            </this.SettingField>
        )
    }
}
