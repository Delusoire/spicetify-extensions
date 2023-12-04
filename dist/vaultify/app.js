var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// shared/util.ts
import { function as f } from "https://esm.sh/fp-ts";
var PlayerAPI, History, SpotifyLoc, sleep, getReactProps;
var init_util = __esm({
  "shared/util.ts"() {
    ({} = Spicetify);
    ({ PlayerAPI, History } = Spicetify.Platform);
    SpotifyLoc = {
      before: {
        start: f.constant({ before: "start" }),
        fromUri: (uri) => ({ before: { uri } }),
        fromUid: (uid) => ({ before: { uid } })
      },
      after: {
        end: f.constant({ after: "end" }),
        fromUri: (uri) => ({ after: { uri } }),
        fromUid: (uid) => ({ after: { uid } })
      }
    };
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    getReactProps = (element) => element[Object.keys(element).find((k) => k.startsWith("__reactProps$"))];
  }
});

// shared/platformApi.ts
var setTrackLiked, fetchPlaylistContents, createFolder, addPlaylist, createPlaylistFromTracks, fetchFolder, fetchRootFolder;
var init_platformApi = __esm({
  "shared/platformApi.ts"() {
    init_util();
    ({} = Spicetify);
    ({} = Spicetify.Platform);
    setTrackLiked = (uris, liked) => Spicetify.Platform.LibraryAPI[liked ? "add" : "remove"]({ uris });
    fetchPlaylistContents = async (uri) => (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items;
    createFolder = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createFolder(name, location);
    addPlaylist = async (playlist, folder) => await Spicetify.Platform.RootlistAPI.add([playlist], folder ? SpotifyLoc.after.fromUri(folder) : {});
    createPlaylistFromTracks = (name, tracks, folder) => Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist?responseFormat=protobufJson", {
      operation: "create",
      ...folder ? { after: folder } : {},
      name,
      playlist: true,
      uris: tracks
    });
    fetchFolder = async (folder) => await Spicetify.Platform.RootlistAPI.getContents({ folderUri: folder });
    fetchRootFolder = () => fetchFolder(void 0);
  }
});

// shared/fp.ts
import {
  array as ar,
  eq,
  string as str,
  record as rec,
  semigroup as sg,
  function as f2
} from "https://esm.sh/fp-ts";
import { guard, memoize } from "https://esm.sh/fp-ts-std/Function";
var guard3, is;
var init_fp = __esm({
  "shared/fp.ts"() {
    guard3 = (branches) => guard(branches);
    is = (c) => (a) => (field) => field[c] === a;
  }
});

// shared/modules.ts
import { allPass } from "https://esm.sh/fp-ts-std@0.18.0/Predicate";
var require2, cache, modules, functionModules, findModuleByStrings, CheckedPlaylistButtonIcon, SettingSection, SectionTitle, SettingColumn, SettingText, SettingToggle, curationButtonClass;
var init_modules = __esm({
  "shared/modules.ts"() {
    require2 = webpackChunkopen.push([[Symbol("Dummy module to extract require method")], {}, (re) => re]);
    cache = Object.keys(require2.m).map((id) => require2(id));
    modules = cache.filter((module) => typeof module === "object").flatMap((module) => Object.values(module));
    functionModules = modules.filter((module) => typeof module === "function");
    findModuleByStrings = (modules2, ...filters) => modules2.find(
      (f4) => allPass(
        filters.map(
          (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
        )
      )(f4.toString())
    );
    CheckedPlaylistButtonIcon = findModuleByStrings(
      functionModules,
      "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
    );
    SettingSection = findModuleByStrings(
      functionModules,
      "function m(e){return(0,d.jsx)(r.k,{children:(0,d.jsx)(u,{...e})})}"
    );
    SectionTitle = findModuleByStrings(functionModules, "textToHighlight", "textBase");
    SettingColumn = findModuleByStrings(functionModules, "setSectionFilterMatchQueryValue", "filterMatchQuery");
    SettingText = findModuleByStrings(functionModules, "textSubdued", "viola");
    SettingToggle = findModuleByStrings(functionModules, "condensed", "onSelected");
    curationButtonClass = modules.find((m) => m?.curationButton).curationButton;
  }
});

// shared/settings.tsx
import { task } from "https://esm.sh/fp-ts";
var React, ReactDOM, ButtonSecondary, SettingsSection;
var init_settings = __esm({
  "shared/settings.tsx"() {
    init_fp();
    init_util();
    init_modules();
    ({ React, ReactDOM } = Spicetify);
    ({ ButtonSecondary } = Spicetify.ReactComponent);
    SettingsSection = class _SettingsSection {
      constructor(name, id, sectionFields = {}) {
        this.name = name;
        this.id = id;
        this.sectionFields = sectionFields;
        this.pushSettings = () => {
          if (this.stopHistoryListener)
            this.stopHistoryListener();
          this.stopHistoryListener = Spicetify.Platform.History.listen(() => this.render());
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
            if (Spicetify.Platform.History.location.pathname !== "/preferences")
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
        this.SettingsSection = () => /* @__PURE__ */ React.createElement(SettingSection, { filterMatchQuery: this.name }, /* @__PURE__ */ React.createElement(SectionTitle, null, this.name), Object.values(this.sectionFields).map((field) => {
          const isType = is("type");
          return guard3([
            [isType("input" /* INPUT */), this.InputField],
            [isType("button" /* BUTTON */), this.ButtonField],
            [isType("toggle" /* TOGGLE */), this.ToggleField]
          ])(() => /* @__PURE__ */ React.createElement(React.Fragment, null))(field);
        }));
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
        this.getFieldValue = (id) => JSON.parse(Spicetify.LocalStorage.get(id) ?? "null");
      }
      static {
        this.setFieldValue = (id, newValue) => Spicetify.LocalStorage.set(id, JSON.stringify(newValue));
      }
      static {
        this.setDefaultFieldValue = async (id, defaultValue) => {
          if (_SettingsSection.getFieldValue(id) === null)
            _SettingsSection.setFieldValue(id, await defaultValue());
        };
      }
    };
  }
});

// extensions/vaultify/settings.ts
var settings_exports = {};
var settings;
var init_settings2 = __esm({
  "extensions/vaultify/settings.ts"() {
    init_settings();
    init_app();
    settings = new SettingsSection("Vaultify", "vaultify").addButton({
      id: "backup",
      desc: "Backup Library, Extensions and Settings",
      text: "Backup to clipboard",
      onClick: backup
    }).addButton({
      id: "restoreLibrary",
      desc: "Restore Library",
      text: "Restore from clipboard",
      onClick: restore("library")
    }).addButton({
      id: "restoreExtensions",
      desc: "Restore Extensions",
      text: "Restore from clipboard",
      onClick: restore("extensions")
    }).addButton({
      id: "restoreSettings",
      desc: "Restore Settings",
      text: "Restore from clipboard",
      onClick: restore("settings")
    });
    settings.pushSettings();
  }
});

// extensions/vaultify/app.ts
import { array as ar2, function as f3 } from "https://esm.sh/fp-ts";
var LocalStorage, ClipboardAPI, LibraryAPI, LocalStorageAPI, extractLikedPlaylistTreeRecur, isContentOfPersonalPlaylist, restorePlaylistseRecur, allowedExtDataRegex, backup, restore;
var init_app = __esm({
  "extensions/vaultify/app.ts"() {
    init_platformApi();
    init_util();
    ({ LocalStorage } = Spicetify);
    ({ ClipboardAPI, LibraryAPI, LocalStorageAPI } = Spicetify.Platform);
    extractLikedPlaylistTreeRecur = async (leaf) => {
      switch (leaf.type) {
        case "playlist": {
          const getPlaylistContents = (uri) => fetchPlaylistContents(uri).then((tracks) => tracks.map((track) => track.uri));
          return {
            [leaf.name]: leaf.isOwnedBySelf ? await getPlaylistContents(leaf.uri) : leaf.uri
          };
        }
        case "folder": {
          const a = leaf.items.map(extractLikedPlaylistTreeRecur);
          return {
            [leaf.name]: await Promise.all(a)
          };
        }
      }
    };
    isContentOfPersonalPlaylist = (subleaf) => typeof subleaf[0] === "string" && Spicetify.URI.isTrack(subleaf[0]);
    restorePlaylistseRecur = async (leaf, folder = "") => await Promise.all(
      Object.keys(leaf).map(async (name) => {
        const subleaf = leaf[name];
        if (!Array.isArray(subleaf))
          return void addPlaylist(subleaf, folder);
        if (subleaf.length === 0)
          return;
        if (isContentOfPersonalPlaylist(subleaf))
          return void createPlaylistFromTracks(name, subleaf, folder);
        const { success, uri } = await createFolder(name, SpotifyLoc.after.fromUri(folder));
        if (!success)
          return;
        subleaf.forEach((leaf2) => restorePlaylistseRecur(leaf2, uri));
      })
    );
    allowedExtDataRegex = /^(?:marketplace:)|(?:extensions:)|(?:spicetify)/;
    backup = async () => {
      const extractItemsUris = (a) => a.items.map((item) => item.uri);
      const rawLibraryTracks = await LibraryAPI.getTracks({
        limit: -1,
        sort: { field: "ADDED_AT", order: "ASC" }
      });
      const libraryTracks = extractItemsUris(rawLibraryTracks);
      const rawLibraryAlbums = await LibraryAPI.getAlbums({
        limit: 2 ** 30,
        sort: { field: "ADDED_AT" }
      });
      const libraryAlbums = extractItemsUris(rawLibraryAlbums);
      const rawLibraryArtists = await LibraryAPI.getArtists({
        limit: 2 ** 30,
        sort: {
          field: "ADDED_AT"
        }
      });
      const libraryArtists = extractItemsUris(rawLibraryArtists);
      const playlists = await f3.pipe(await fetchRootFolder(), extractLikedPlaylistTreeRecur);
      const localStore = Object.entries(localStorage).filter(([key]) => allowedExtDataRegex.test(key));
      const { items, namespace } = LocalStorageAPI;
      const localStoreAPI = Object.entries(items).filter(([key]) => key.startsWith(namespace)).map(([key, value]) => [key.split(":")[1], value]);
      const settings2 = f3.pipe(
        document.querySelectorAll(`[id^="settings."],[id^="desktop."],[class^="network."]`),
        Array.from,
        ar2.flatMap((setting) => {
          const id = setting.getAttribute("id");
          if (setting instanceof HTMLInputElement) {
            const type = setting.getAttribute("type");
            if (type === "checkbox")
              return [[id, "checkbox", setting.checked]];
            else if (type === "text")
              return [[id, "text", setting.value]];
          } else if (setting instanceof HTMLSelectElement)
            return [[id, "select", setting.value]];
          return [];
        })
      );
      await ClipboardAPI.copy(
        JSON.stringify({
          libraryTracks,
          libraryAlbums,
          libraryArtists,
          playlists,
          localStore,
          localStoreAPI,
          settings: settings2
        })
      );
      Spicetify.showNotification("Backed up Playlists, Extensions and Settings");
    };
    restore = (mode) => async () => {
      const vault = JSON.parse(await ClipboardAPI.paste());
      if (mode === "library") {
        setTrackLiked(vault.libraryTracks, true);
        setTrackLiked(vault.libraryAlbums, true);
        setTrackLiked(vault.libraryArtists, true);
        await restorePlaylistseRecur(vault.playlists);
        Spicetify.showNotification("Restored Library");
      }
      if (mode === "extensions") {
        f3.pipe(
          vault.localStore,
          ar2.map(([a, b]) => LocalStorage.set(a, b))
        );
        f3.pipe(
          vault.localStoreAPI,
          ar2.map(([a, b]) => LocalStorageAPI.setItem(a, b))
        );
        Spicetify.showNotification("Restored Extensions");
      }
      if (mode === "settings") {
        vault.settings.map(([id, type, value]) => {
          const setting = document.querySelector(`[id="${id}"]`);
          if (!setting)
            return console.warn(`Setting for ${id} wasn't found`);
          if (type === "text")
            setting.value = value;
          else if (type === "checkbox")
            setting.checked = value;
          else if (type === "select")
            setting.value = value;
          else
            return;
          const settingReactProps = getReactProps(setting);
          settingReactProps.onChange({ target: setting });
        });
        Spicetify.showNotification("Restored Settings");
      }
    };
    Promise.resolve().then(() => init_settings2());
  }
});
init_app();
export {
  backup,
  restore
};
