// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;

// shared/util.ts
var { Player, URI } = Spicetify;
var { PlayerAPI, History } = Spicetify.Platform;
var SpotifyLoc = {
  before: {
    start: () => ({ before: "start" }),
    fromUri: (uri) => ({ before: { uri } }),
    fromUid: (uid) => ({ before: { uid } })
  },
  after: {
    end: () => ({ after: "end" }),
    fromUri: (uri) => ({ after: { uri } }),
    fromUid: (uid) => ({ after: { uid } })
  }
};
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// shared/platformApi.ts
var { CosmosAsync } = Spicetify;
var { LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform;
var createFolder = async (name, location = {}) => await RootlistAPI.createFolder(name, location);

// shared/settings.tsx
import { task } from "https://esm.sh/fp-ts";

// shared/modules.ts
var require2 = webpackChunkopen.push([[Symbol("Dummy module to extract require method")], {}, (re) => re]);
var cache = Object.keys(require2.m).map((id) => require2(id));
var modules = cache.filter((module) => typeof module === "object").flatMap((module) => Object.values(module));
var functionModules = modules.filter((module) => typeof module === "function");
var findModuleByStrings = (modules2, ...filters) => modules2.find(
  (f) => _.overEvery(
    filters.map(
      (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
    )
  )(f.toString())
);
var CheckedPlaylistButtonIcon = findModuleByStrings(
  functionModules,
  "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
);
var SettingSection = findModuleByStrings(
  functionModules,
  "function m(e){return(0,d.jsx)(r.k,{children:(0,d.jsx)(u,{...e})})}"
);
var SectionTitle = findModuleByStrings(functionModules, "textToHighlight", "textBase");
var SettingColumn = findModuleByStrings(functionModules, "setSectionFilterMatchQueryValue", "filterMatchQuery");
var SettingText = findModuleByStrings(functionModules, "textSubdued", "viola");
var SettingToggle = findModuleByStrings(functionModules, "condensed", "onSelected");
var curationButtonClass = modules.find((m) => m?.curationButton).curationButton;

// shared/settings.tsx
var { React, ReactDOM, LocalStorage } = Spicetify;
var { ButtonSecondary } = Spicetify.ReactComponent;
var { History: History2 } = Spicetify.Platform;
var SettingsSection = class _SettingsSection {
  constructor(name, sectionFields = {}) {
    this.name = name;
    this.sectionFields = sectionFields;
    this.pushSettings = () => {
      if (this.stopHistoryListener)
        this.stopHistoryListener();
      this.stopHistoryListener = History2.listen(() => this.render());
      this.render();
    };
    this.toObject = () => new Proxy(
      {},
      {
        get: (target, prop) => _SettingsSection.getFieldValue(this.getId(prop.toString()))
      }
    );
    this.render = async () => {
      while (!document.getElementById("desktop.settings.selectLanguage")) {
        if (History2.location.pathname !== "/preferences")
          return;
        await sleep(100);
      }
      const allSettingsContainer = document.querySelector(".x-settings-container");
      let pluginSettingsContainer = Array.from(allSettingsContainer.children).find(({ id }) => id === this.id);
      if (!pluginSettingsContainer) {
        pluginSettingsContainer = document.createElement("div");
        pluginSettingsContainer.id = this.id;
        pluginSettingsContainer.className = "settingsContainer";
        allSettingsContainer.appendChild(pluginSettingsContainer);
      }
      ReactDOM.render(/* @__PURE__ */ React.createElement(this.SettingsSection, null), pluginSettingsContainer);
    };
    this.addButton = (props) => {
      this.addField("button" /* BUTTON */, props);
      return this;
    };
    this.addToggle = (props, defaultValue = task.of(false)) => {
      this.addField("toggle" /* TOGGLE */, props, defaultValue);
      return this;
    };
    this.addInput = (props, defaultValue = task.of("")) => {
      this.addField("input" /* INPUT */, props, defaultValue);
      return this;
    };
    this.getId = (nameId) => ["extensions", this.id, nameId].join(":");
    this.useStateFor = (id) => {
      const [value, setValueState] = React.useState(_SettingsSection.getFieldValue(id));
      return [
        value,
        (newValue) => {
          if (newValue !== void 0) {
            setValueState(newValue);
            _SettingsSection.setFieldValue(id, newValue);
          }
        }
      ];
    };
    this.toReactComponent = (field) => {
      switch (field.type) {
        case "button" /* BUTTON */:
          return this.ButtonField(field);
        case "toggle" /* TOGGLE */:
          return this.ToggleField(field);
        case "input" /* INPUT */:
          return this.InputField(field);
        default:
          return /* @__PURE__ */ React.createElement(React.Fragment, null);
      }
    };
    this.SettingsSection = () => /* @__PURE__ */ React.createElement(SettingSection, { filterMatchQuery: this.name }, /* @__PURE__ */ React.createElement(SectionTitle, null, this.name), Object.values(this.sectionFields).map(this.toReactComponent));
    this.SettingField = ({ field, children }) => /* @__PURE__ */ React.createElement(SettingColumn, { filterMatchQuery: field.id }, /* @__PURE__ */ React.createElement("div", { className: "x-settings-firstColumn" }, /* @__PURE__ */ React.createElement(SettingText, { htmlFor: field.id }, field.desc)), /* @__PURE__ */ React.createElement("div", { className: "x-settings-secondColumn" }, children));
    this.ButtonField = (field) => /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(ButtonSecondary, { id: field.id, buttonSize: "sm", onClick: field.onClick, className: "x-settings-button" }, field.text));
    this.ToggleField = (field) => {
      const id = this.getId(field.id);
      const [value, setValue] = this.useStateFor(id);
      return /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(
        SettingToggle,
        {
          id: field.id,
          value: _SettingsSection.getFieldValue(id),
          onSelected: (checked) => {
            setValue(checked);
            field.onSelected?.(checked);
          },
          className: "x-settings-button"
        }
      ));
    };
    this.InputField = (field) => {
      const id = this.getId(field.id);
      const [value, setValue] = this.useStateFor(id);
      return /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(
        "input",
        {
          className: "x-settings-input",
          id: field.id,
          dir: "ltr",
          value: _SettingsSection.getFieldValue(id),
          type: field.inputType,
          onChange: (e) => {
            const value2 = e.currentTarget.value;
            setValue(value2);
            field.onChange?.(value2);
          }
        }
      ));
    };
    this.id = _.kebabCase(name);
  }
  addField(type, opts, defaultValue) {
    if (defaultValue !== void 0) {
      const settingId = this.getId(opts.id);
      _SettingsSection.setDefaultFieldValue(settingId, defaultValue);
    }
    const field = Object.assign({}, opts, { type });
    this.sectionFields[opts.id] = field;
  }
  static {
    this.getFieldValue = (id) => JSON.parse(LocalStorage.get(id) ?? "null");
  }
  static {
    this.setFieldValue = (id, newValue) => LocalStorage.set(id, JSON.stringify(newValue));
  }
  static {
    this.setDefaultFieldValue = async (id, defaultValue) => {
      if (_SettingsSection.getFieldValue(id) === null)
        _SettingsSection.setFieldValue(id, await defaultValue());
    };
  }
};

// extensions/spoqify-radios/settings.ts
var ANONIMYZED_RADIOS_FOLDER_NAME = "Anonymized Radios";
var settings = new SettingsSection("Spoqify Radios").addInput(
  {
    id: "anonymizedRadiosFolderUri",
    desc: "Anonymized Radios folder uri",
    inputType: "text"
  },
  async () => (await createFolder(ANONIMYZED_RADIOS_FOLDER_NAME)).uri
);
settings.pushSettings();
var CONFIG = settings.toObject();

// extensions/spoqify-radios/app.ts
var { URI: URI2, ContextMenu } = Spicetify;
var { History: History3, RootlistAPI: RootlistAPI2 } = Spicetify.Platform;
var createAnonRadio = (uri) => {
  const sse = new EventSource(`https://open.spoqify.com/anonymize?url=${uri.substring(8)}`);
  sse.addEventListener("done", (e) => {
    sse.close();
    const anonUri = URI2.fromString(e.data);
    History3.push(anonUri.toURLPath(true));
    RootlistAPI2.add([anonUri.toURI()], SpotifyLoc.after.fromUri(CONFIG.anonymizedRadiosFolderUri));
  });
};
new ContextMenu.Item(
  "Create anonymized radio",
  ([uri]) => createAnonRadio(uri),
  ([uri]) => _.overSome([URI2.isAlbum, URI2.isArtist, URI2.isPlaylistV1OrV2, URI2.isTrack])(uri),
  "podcasts"
).register();
