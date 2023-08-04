import { constVoid } from "fp-ts/lib/function"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { guard4, is } from "./fp"
import { sleep } from "./util"
import { flow as f } from "fp-ts/function"

export class SettingsSection {
    private stopHistoryListener: any
    private setRerender: Function | null = null

    constructor(
        public name: string,
        public sectionId: string,
        public sectionFields: { [key: string]: SettingsField } = {},
    ) {}

    static waitForReact = async () => {
        while (!(Spicetify.React && Spicetify.ReactDOM)) sleep(100)
        return this
    }

    pushSettings = async () => {
        while (!Spicetify?.Platform?.History?.listen) await sleep(100)

        if (this.stopHistoryListener) this.stopHistoryListener()

        this.stopHistoryListener = Spicetify.Platform.History.listen(
            ({ pathname = "" }) => {
                if (pathname === "/preferences") this.render()
            },
        )

        if (Spicetify.Platform.History.location.pathname === "/preferences")
            await this.render()
    }

    toObject = () =>
        new Proxy(
            {},
            {
                get: (target, prop) => this.getFieldValue(prop.toString()),
            },
        )

    rerender = () => {
        if (this.setRerender) this.setRerender(Math.random())
    }

    private render = async () => {
        while (!document.getElementById("desktop.settings.selectLanguage")) {
            if (Spicetify.Platform.History.location.pathname !== "/preferences")
                return
            await sleep(100)
        }

        const allSettingsContainer = document.querySelector(
            ".main-view-container__scroll-node-child main div",
        )
        if (!allSettingsContainer)
            return console.error("[spcr-settings] settings container not found")

        let pluginSettingsContainer = Array.from(
            allSettingsContainer.children,
        ).find(({ id }) => id === this.sectionId)

        if (!pluginSettingsContainer) {
            pluginSettingsContainer = document.createElement("div")
            pluginSettingsContainer.id = this.sectionId
            pluginSettingsContainer.className = "settingsContainer"

            allSettingsContainer.appendChild(pluginSettingsContainer)
        }

        ReactDOM.render(<this.FieldsContainer />, pluginSettingsContainer)
    }

    addButton = (
        nameId: string,
        description: string,
        text: string,
        onClick: (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        ) => void = constVoid,
        events: ButtonField["events"] = {},
    ) => {
        const id = this.getId(nameId)

        events.onClick = onClick

        this.sectionFields[nameId] = {
            id,
            type: FieldType.BUTTON,
            description,
            text,
            events,
        }
        return this
    }

    addToggle = (
        nameId: string,
        description: string,
        defaultValue: boolean,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void = constVoid,
        events: ToggleField["events"] = {},
    ) => {
        const id = this.getId(nameId)

        this.setDefaultFieldValue(id, defaultValue)

        events.onChange = onChange
        this.sectionFields[nameId] = {
            id,
            type: FieldType.TOGGLE,
            description,
            events,
        }
        return this
    }

    addInput = (
        nameId: string,
        description: string,
        defaultValue: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void = constVoid,
        inputType = "text",
        events: InputField["events"] = {},
    ) => {
        const id = this.getId(nameId)

        this.setDefaultFieldValue(id, defaultValue)

        events.onChange = onChange
        this.sectionFields[nameId] = {
            id,
            type: FieldType.INPUT,
            description,
            inputType,
            events,
        }

        return this
    }

    addDropDown = (
        nameId: string,
        description: string,
        options: string[],
        defaultValue = 0,
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void = constVoid,
        events: DropdownField["events"] = {},
    ) => {
        const id = this.getId(nameId)

        this.setDefaultFieldValue(id, defaultValue)

        events.onChange = onChange
        this.sectionFields[nameId] = {
            id,
            type: FieldType.DROPDOWN,
            description,
            options,
            events,
        }
        return this
    }

    addHidden = (nameId: string, defaultValue: any) => {
        const id = this.getId(nameId)

        this.setDefaultFieldValue(id, defaultValue)

        this.sectionFields[nameId] = {
            id,
            type: FieldType.HIDDEN,
            description: "",
        }
        return this
    }

    getId = (nameId: string) => `extensions:${this.sectionId}:${nameId}`

    private useStateFor = <A,>(id: string) => {
        const [value, setValueState] = useState(this.getFieldValue<A>(id))

        return [
            value,
            (newValue: A) => {
                if (newValue !== undefined) {
                    setValueState(newValue)
                    this.setFieldValue(id!, newValue)
                }
            },
        ] as [A, (newValue: A) => void]
    }

    getFieldValue = <R,>(id: string): R => {
        return JSON.parse(Spicetify.LocalStorage.get(id) ?? "{}")?.value
    }

    setFieldValue = (id: string, newValue: any) => {
        Spicetify.LocalStorage.set(id, JSON.stringify({ value: newValue }))
    }

    private setDefaultFieldValue = (id: string, defaultValue: any) => {
        if (this.getFieldValue(id) === undefined)
            this.setFieldValue(id, defaultValue)
    }

    private FieldsContainer = () => {
        const [rerender, setRerender] = useState<number>(0)
        this.setRerender = setRerender

        return (
            <div className="x-settings-section" key={rerender}>
                <h2 className="Type__TypeElement-sc-goli3j-0 TypeElement-cello-textBase-type">
                    {this.name}
                </h2>
                {Object.entries(this.sectionFields).map(([nameId, field]) => {
                    return <this.Field field={field} />
                })}
            </div>
        )
    }

    private Field = ({ field }: { field: SettingsField }) => {
        const isType = is<SettingsField>("type")

        return (
            <div className="x-settings-row">
                <this.SettingDescription
                    id={field.id}
                    description={field.description}
                />
                <div className="x-settings-secondColumn">
                    {guard4([
                        [
                            isType<InputField>(FieldType.INPUT),
                            this.SettingInputField,
                        ],
                        [isType(FieldType.BUTTON), this.SettingButtonField],
                        [isType(FieldType.TOGGLE), this.SettingToggleField],
                        [isType(FieldType.DROPDOWN), this.SettingDropdownField],
                    ])(this.SettingHidden)(field)}
                </div>
            </div>
        )
    }

    private SettingDescription = ({
        id,
        description,
    }: {
        id: string
        description: string
    }) => (
        <div className="x-settings-firstColumn">
            <label
                className="Type__TypeElement-sc-goli3j-0 TypeElement-viola-textSubdued-type"
                htmlFor={id}
            >
                {description}
            </label>
        </div>
    )

    private SettingButtonField = (field: ButtonField) => (
        <span className="">
            <button
                id={field.id}
                className="Button-sc-y0gtbx-0 Button-sm-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button"
                {...field.events}
                type={field.type}
            >
                {field.text}
            </button>
        </span>
    )

    private SettingToggleField = (field: ToggleField) => {
        const [value, setValue] = this.useStateFor<boolean>(field.id)

        return (
            <label className="x-settings-secondColumn x-toggle-wrapper">
                <input
                    id={field.id}
                    className="x-toggle-input"
                    type="checkbox"
                    checked={this.getFieldValue(field.id)}
                    {...field.events}
                    onChange={e => {
                        setValue(e.currentTarget.checked)
                        field.events.onChange?.(e)
                    }}
                />
                <span className="x-toggle-indicatorWrapper">
                    <span className="x-toggle-indicator"></span>
                </span>
            </label>
        )
    }

    private SettingInputField = (field: InputField) => {
        const [value, setValue] = this.useStateFor<string>(field.id)

        return (
            <input
                className="x-settings-input"
                id={field.id}
                dir="ltr"
                value={this.getFieldValue(field.id)}
                type={field.inputType}
                {...field.events}
                onChange={e => {
                    setValue(e.currentTarget.value)
                    field.events.onChange?.(e)
                }}
            />
        )
    }
    private SettingDropdownField = (field: DropdownField) => {
        const [value, setValue] = this.useStateFor<number>(field.id)

        return (
            <select
                className="main-dropDown-dropDown"
                id={field.id}
                {...field.events}
                onChange={e => {
                    setValue(e.currentTarget.selectedIndex)
                    field.events.onChange?.(e)
                }}
            >
                {field.options.map((option, i) => (
                    <option
                        selected={i === this.getFieldValue(field.id)}
                        value={i + 1}
                    >
                        {option}
                    </option>
                ))}
            </select>
        )
    }

    private SettingHidden = () => <></>
}

export const enum FieldType {
    HIDDEN = "hidden",
    INPUT = "input",
    DROPDOWN = "dropdown",
    BUTTON = "button",
    TOGGLE = "toggle",
}

export interface BaseField<A> {
    id: string
    type: FieldType
    description: string
}

export interface ButtonField extends BaseField<never> {
    type: FieldType.BUTTON
    text: string
    events: Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>
}

export interface ToggleField extends BaseField<boolean> {
    type: FieldType.TOGGLE
    events: Partial<React.InputHTMLAttributes<HTMLInputElement>>
}

export interface InputField extends BaseField<string> {
    type: FieldType.INPUT
    inputType: string
    events: Partial<React.InputHTMLAttributes<HTMLInputElement>>
}

export interface DropdownField extends BaseField<number> {
    type: FieldType.DROPDOWN
    options: string[]
    events: Partial<React.SelectHTMLAttributes<HTMLSelectElement>>
}

export interface HiddenField extends BaseField<any> {
    type: FieldType.HIDDEN
}

export type SettingsField =
    | HiddenField
    | DropdownField
    | InputField
    | ButtonField
    | ToggleField
