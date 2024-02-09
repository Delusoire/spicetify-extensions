// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;

// shared/util.ts
var { URI } = Spicetify;
var { PlayerAPI } = Spicetify.Platform;
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
var mainElement = document.querySelector("main");
var [REACT_FIBER, REACT_PROPS] = Object.keys(mainElement);

// shared/platformApi.ts
var { CosmosAsync } = Spicetify;
var { LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform;
var createFolder = async (name, location = {}) => await RootlistAPI.createFolder(name, location);

// shared/modules.ts
var require2 = webpackChunkopen.push([[Symbol("Dummy chunk to extract require method")], {}, (require3) => require3]);
var modules = Object.keys(require2.m).map((id) => require2(id)).filter((module) => typeof module === "object");
var exportedMembers = modules.flatMap((module) => Object.values(module)).filter(Boolean);
var exportedFunctions = exportedMembers.filter((module) => typeof module === "function");
var exportedReactObjects = Object.groupBy(exportedMembers, (x) => x.$$typeof);
var exportedContexts = exportedReactObjects[Symbol.for("react.context")];
var exportedForwardRefs = exportedReactObjects[Symbol.for("react.forward_ref")];
var exportedMemos = exportedReactObjects[Symbol.for("react.memo")];
var findByStrings = (modules2, ...filters) => modules2.find(
  (f) => filters.map(
    (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
  ).every((filterFn) => filterFn(f.toString()))
);
var CheckedPlaylistButtonIcon = findByStrings(
  exportedFunctions,
  "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
);
var Highlight = findByStrings(exportedFunctions, "hightlightClassName", "textToHighlight");
var SettingColumn = findByStrings(exportedFunctions, "setSectionFilterMatchQueryValue", "filterMatchQuery");
var SettingText = findByStrings(exportedFunctions, "textSubdued", "dangerouslySetInnerHTML");
var SettingToggle = findByStrings(exportedFunctions, "condensed", "onSelected");
var curationButtonClass = exportedMembers.find((m) => m?.curationButton).curationButton;
var rs_w = exportedForwardRefs.filter((x) => x.render?.toString().includes("hasLeadingOrMedia"));

// shared/settings.tsx
var { React, ReactDOM, LocalStorage } = Spicetify;
var { ButtonSecondary } = Spicetify.ReactComponent;
var { History } = Spicetify.Platform;
if (!globalThis.__renderSettingSections) {
  globalThis.__settingSections = /* @__PURE__ */ new Set();
  globalThis.__renderSettingSections = () => Array.from(globalThis.__settingSections);
}
var SettingsSection = class _SettingsSection {
  constructor(name, sectionFields = {}) {
    this.name = name;
    this.sectionFields = sectionFields;
    this.pushSettings = () => {
      __settingSections.add(/* @__PURE__ */ React.createElement(this.SettingsSection, null));
    };
    this.toObject = () => new Proxy(
      {},
      {
        get: (target, prop) => _SettingsSection.getFieldValue(this.getId(prop.toString())),
        set: (target, prop, newValue) => {
          const id = this.getId(prop.toString());
          if (_SettingsSection.getFieldValue(id) === newValue)
            return false;
          _SettingsSection.setFieldValue(id, newValue);
          return true;
        }
      }
    );
    this.addButton = (props) => {
      this.addField("button" /* BUTTON */, props, this.ButtonField);
      return this;
    };
    this.addToggle = (props, defaultValue = () => false) => {
      this.addField("toggle" /* TOGGLE */, props, this.ToggleField, defaultValue);
      return this;
    };
    this.addInput = (props, defaultValue = () => "") => {
      this.addField("input" /* INPUT */, props, this.InputField, defaultValue);
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
    this.SettingsSection = () => /* @__PURE__ */ React.createElement(__SettingSection, { filterMatchQuery: this.name }, /* @__PURE__ */ React.createElement(__SectionTitle, null, this.name), Object.values(this.sectionFields));
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
  addField(type, opts, fieldComponent, defaultValue) {
    if (defaultValue !== void 0) {
      const settingId = this.getId(opts.id);
      _SettingsSection.setDefaultFieldValue(settingId, defaultValue);
    }
    const field = Object.assign({}, opts, { type });
    this.sectionFields[opts.id] = React.createElement(fieldComponent, field);
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
var { History: History2, RootlistAPI: RootlistAPI2 } = Spicetify.Platform;
var createAnonRadio = (uri) => {
  const sse = new EventSource(`https://open.spoqify.com/anonymize?url=${uri.substring(8)}`);
  sse.addEventListener("done", (e) => {
    sse.close();
    const anonUri = URI2.fromString(e.data);
    History2.push(anonUri.toURLPath(true));
    RootlistAPI2.add([anonUri.toURI()], SpotifyLoc.after.fromUri(CONFIG.anonymizedRadiosFolderUri));
  });
};
new ContextMenu.Item(
  "Create anonymized radio",
  ([uri]) => createAnonRadio(uri),
  ([uri]) => _.overSome([URI2.isAlbum, URI2.isArtist, URI2.isPlaylistV1OrV2, URI2.isTrack])(uri),
  "podcasts"
).register();
new ContextMenu.Item(
  "Choose for Anonymized Radios",
  ([uri]) => CONFIG.anonymizedRadiosFolderUri = uri,
  ([uri]) => URI2.isFolder(uri),
  "playlist-folder"
).register();
