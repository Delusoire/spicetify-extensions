import { SettingColumn, SettingText, SettingToggle } from "./modules.ts"
import { sleep } from "./util.ts"
import { _ } from "./deps.ts"

type Task<A> = (() => Awaited<A>) | (() => Promise<Awaited<A>>)

const { React, ReactDOM, LocalStorage } = Spicetify
const { ButtonSecondary } = Spicetify.ReactComponent
const { History } = Spicetify.Platform

type FieldToProps<A> = Omit<A, "type">

export enum FieldType {
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

if (!__renderSettingSections) {
    globalThis.__settingSections = new Set()
    globalThis.__renderSettingSections = () => Array.from(globalThis.__settingSections)
}

export class SettingsSection {
    public id: string

    constructor(public name: string, public sectionFields: { [key: string]: React.JSX.Element } = {}) {
        this.id = _.kebabCase(name)
    }

    pushSettings = () => {
        globalThis.__settingSections.push(<this.SettingsSection />)
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

    addButton = (props: FieldToProps<ButtonField>) => {
        this.addField(FieldType.BUTTON, props, this.ButtonField)
        return this
    }

    addToggle = (props: FieldToProps<ToggleField>, defaultValue: Task<boolean> = () => false) => {
        this.addField(FieldType.TOGGLE, props, this.ToggleField, defaultValue)
        return this
    }

    addInput = (props: FieldToProps<InputField>, defaultValue: Task<string> = () => "") => {
        this.addField(FieldType.INPUT, props, this.InputField, defaultValue)
        return this
    }

    private addField<SF extends SettingsField>(
        type: SF["type"],
        opts: FieldToProps<SF>,
        fieldComponent: (field: SF) => React.JSX.Element,
        defaultValue?: any,
    ) {
        if (defaultValue !== undefined) {
            const settingId = this.getId(opts.id)
            SettingsSection.setDefaultFieldValue(settingId, defaultValue)
        }
        const field = Object.assign({}, opts, { type }) as SF
        this.sectionFields[opts.id] = fieldComponent(field)
    }

    getId = (nameId: string) => ["extensions", this.id, nameId].join(":")

    private useStateFor = <A,>(id: string) => {
        const [value, setValueState] = React.useState(SettingsSection.getFieldValue<A>(id))

        return [
            value,
            (newValue: A) => {
                if (newValue !== undefined) {
                    setValueState(newValue)
                    SettingsSection.setFieldValue(id, newValue)
                }
            },
        ] as const
    }

    static getFieldValue = <R,>(id: string): R => JSON.parse(LocalStorage.get(id) ?? "null")

    static setFieldValue = (id: string, newValue: any) => LocalStorage.set(id, JSON.stringify(newValue))

    private static setDefaultFieldValue = async (id: string, defaultValue: Task<any>) => {
        if (SettingsSection.getFieldValue(id) === null) SettingsSection.setFieldValue(id, await defaultValue())
    }

    private SettingsSection = () => (
        <__SettingSection filterMatchQuery={this.name}>
            <__SectionTitle>{this.name}</__SectionTitle>
            {Object.values(this.sectionFields)}
        </__SettingSection>
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
