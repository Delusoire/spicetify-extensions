// shared/util.ts
var { URI } = Spicetify;
var { PlayerAPI } = Spicetify.Platform;
var PermanentMutationObserver = class extends MutationObserver {
  constructor(targetSelector, callback, opts = {
    childList: true,
    subtree: true
  }) {
    super(callback);
    this.target = null;
    new MutationObserver(() => {
      const nextTarget = document.querySelector(targetSelector);
      if (nextTarget && !nextTarget.isEqualNode(this.target)) {
        this.target && this.disconnect();
        this.target = nextTarget;
        this.observe(this.target, opts);
      }
    }).observe(document.body, {
      childList: true,
      subtree: true
    });
  }
};
var mainElement = document.querySelector("main");
var [REACT_FIBER, REACT_PROPS] = Object.keys(mainElement);

// shared/platformApi.ts
var { CosmosAsync } = Spicetify;
var { LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform;
var fetchPlaylistContents = async (uri) => (await PlaylistAPI.getContents(uri)).items;
var createFolder = async (name, location = {}) => await RootlistAPI.createFolder(name, location);
var fetchFolder = async (folder) => await RootlistAPI.getContents({ folderUri: folder });

// extensions/star-ratings-2/util.ts
var getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-trackList.main-trackList-indexable"));
var getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll(".main-trackList-trackListRow"));

// shared/listeners.ts
var { Player, URI: URI2 } = Spicetify;
var { PlayerAPI: PlayerAPI2, History } = Spicetify.Platform;
var onSongChanged = (callback) => {
  callback(PlayerAPI2._state);
  Player.addEventListener("songchange", (event) => callback(event.data));
};
var PRESENTATION_KEY = Symbol("presentation");
var onTrackListMutationListeners = new Array();
var _onTrackListMutation = (trackList, record, observer) => {
  const tracks = getTrackListTracks(trackList[PRESENTATION_KEY]);
  const reactFiber = trackList[PRESENTATION_KEY][REACT_FIBER].alternate;
  const reactTracks = reactFiber.pendingProps.children;
  const tracksProps = reactTracks.map((child) => child.props);
  tracks.forEach((track, i) => track.props = tracksProps[i]);
  const fullyRenderedTracks = tracks.filter((track) => track.props?.uri);
  onTrackListMutationListeners.map((listener) => listener(trackList, fullyRenderedTracks));
};
new PermanentMutationObserver("main", () => {
  const trackLists = getTrackLists();
  trackLists.filter((trackList) => !trackList[PRESENTATION_KEY]).forEach((trackList) => {
    trackList[PRESENTATION_KEY] = trackList.lastElementChild.firstElementChild.nextElementSibling;
    new MutationObserver(
      (record, observer) => _onTrackListMutation(trackList, record, observer)
    ).observe(trackList[PRESENTATION_KEY], { childList: true });
  });
});

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

// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;

// shared/settings.tsx
var { React, ReactDOM, LocalStorage } = Spicetify;
var { ButtonSecondary } = Spicetify.ReactComponent;
var { History: History2 } = Spicetify.Platform;
if (!globalThis.__renderSettingSections) {
  globalThis.__settingSections = /* @__PURE__ */ new Map();
  globalThis.__renderSettingSections = () => Array.from(globalThis.__settingSections.values());
}
var SettingsSection = class _SettingsSection {
  constructor(name, sectionFields = {}) {
    this.name = name;
    this.sectionFields = sectionFields;
    this.pushSettings = () => {
      __settingSections.set(this.id, /* @__PURE__ */ React.createElement(this.SettingsSection, null));
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

// extensions/corbeille/settings.ts
var TRASH_FOLDER_NAME = "\u{1F5D1}\uFE0F Trash";
var settings = new SettingsSection("Sort Plus").addInput(
  {
    id: "trashFolderUri",
    desc: "Trash folder uri",
    inputType: "text"
  },
  async () => (await createFolder(TRASH_FOLDER_NAME)).uri
);
settings.pushSettings();
var CONFIG = settings.toObject();

// extensions/corbeille/app.ts
var trashedTrackUris = [];
global.trashedTrackUris = trashedTrackUris;
var loadTrash = async () => {
  const trashFolder = await fetchFolder(CONFIG.trashFolderUri);
  const playlistUris = trashFolder.items.map((p) => [p.uri, Number(p.name)]).reduce((uris, [uri, rating]) => {
    uris[rating] = uri;
    return uris;
  }, []);
  const playlists = await Promise.all(playlistUris.map(fetchPlaylistContents));
  trashedTrackUris.concat(playlists.flatMap((tracks) => tracks.map((t) => t.uri)));
};
loadTrash();
onSongChanged((state) => {
  trashedTrackUris.includes(state.item.uri) && Spicetify.Platform.PlayerAPI.skipToNext();
});
export {
  trashedTrackUris
};
