var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// shared/util.ts
var URI, PlayerAPI, SpotifyLoc, sleep, mainElement, REACT_FIBER, REACT_PROPS;
var init_util = __esm({
  "shared/util.ts"() {
    ({ URI } = Spicetify);
    ({ PlayerAPI } = Spicetify.Platform);
    SpotifyLoc = {
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
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    mainElement = document.querySelector("main");
    [REACT_FIBER, REACT_PROPS] = Object.keys(mainElement);
  }
});

// shared/platformApi.ts
var CosmosAsync, LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI, setTracksLiked, fetchPlaylistContents, createFolder, addPlaylist, createPlaylistFromTracks, fetchFolder, fetchRootFolder;
var init_platformApi = __esm({
  "shared/platformApi.ts"() {
    init_util();
    ({ CosmosAsync } = Spicetify);
    ({ LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform);
    setTracksLiked = (uris, liked) => LibraryAPI[liked ? "add" : "remove"]({ uris });
    fetchPlaylistContents = async (uri) => (await PlaylistAPI.getContents(uri)).items;
    createFolder = async (name, location = {}) => await RootlistAPI.createFolder(name, location);
    addPlaylist = async (playlist, folder) => await RootlistAPI.add([playlist], folder ? SpotifyLoc.after.fromUri(folder) : {});
    createPlaylistFromTracks = (name, tracks, folder) => CosmosAsync.post("sp://core-playlist/v1/rootlist?responseFormat=protobufJson", {
      operation: "create",
      ...folder ? { after: folder } : {},
      name,
      playlist: true,
      uris: tracks
    });
    fetchFolder = async (folder) => await RootlistAPI.getContents({ folderUri: folder });
    fetchRootFolder = () => fetchFolder(void 0);
  }
});

// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _;
var init_deps = __esm({
  "shared/deps.ts"() {
    _ = ld;
  }
});

// extensions/vaultify/util.ts
var URI2, extractUrisWrapper, isContentOfPersonalPlaylist;
var init_util2 = __esm({
  "extensions/vaultify/util.ts"() {
    ({ URI: URI2 } = Spicetify);
    extractUrisWrapper = (fetcher) => () => fetcher().then(({ items }) => items.map((item) => item.uri));
    isContentOfPersonalPlaylist = (subleaf) => typeof subleaf[0] === "string" && URI2.isTrack(subleaf[0]);
  }
});

// extensions/vaultify/backup.ts
var LibraryAPI2, LocalStorageAPI, getLibraryTracks, getLibraryAlbums, getLibraryArtists, getLibraryTrackUris, getLibraryAlbumUris, getLibraryArtistUris, getSettings, getLocalStorage, getLocalStoreAPI, extractLikedPlaylistTreeRecur;
var init_backup = __esm({
  "extensions/vaultify/backup.ts"() {
    init_deps();
    init_platformApi();
    init_util2();
    ({ LibraryAPI: LibraryAPI2, LocalStorageAPI } = Spicetify.Platform);
    getLibraryTracks = () => LibraryAPI2.getTracks({
      limit: -1,
      sort: { field: "ADDED_AT", order: "ASC" }
    });
    getLibraryAlbums = () => LibraryAPI2.getAlbums({
      limit: 2 ** 30,
      sort: { field: "ADDED_AT" }
    });
    getLibraryArtists = () => LibraryAPI2.getArtists({
      limit: 2 ** 30,
      sort: {
        field: "ADDED_AT"
      }
    });
    getLibraryTrackUris = extractUrisWrapper(getLibraryTracks);
    getLibraryAlbumUris = extractUrisWrapper(getLibraryAlbums);
    getLibraryArtistUris = extractUrisWrapper(getLibraryArtists);
    getSettings = () => {
      const SETTINGS_EL_SEL = `[id^="settings."],[id^="desktop."],[class^="network."]`;
      const settingsEls = Array.from(document.querySelectorAll(SETTINGS_EL_SEL));
      const settings2 = settingsEls.map((settingEl) => {
        const id = settingEl.getAttribute("id");
        if (!id)
          return null;
        if (settingEl instanceof HTMLInputElement) {
          switch (settingEl.getAttribute("type")) {
            case "checkbox":
              return [id, "checkbox" /* CHECKBOX */, settingEl.checked];
            case "text":
              return [id, "text" /* TEXT */, settingEl.value];
          }
        } else if (settingEl instanceof HTMLSelectElement) {
          return [id, "select" /* SELECT */, settingEl.value];
        }
        return null;
      });
      return _.compact(settings2);
    };
    getLocalStorage = () => {
      const LS_ALLOW_REGEX = /^(?:marketplace:)|(?:extensions:)|(?:spicetify)/;
      return Object.entries(localStorage).filter(([key]) => LS_ALLOW_REGEX.test(key));
    };
    getLocalStoreAPI = () => {
      return Object.entries(LocalStorageAPI.items).filter(([key]) => key.startsWith(LocalStorageAPI.namespace)).map(([key, value]) => [key.split(":")[1], value]);
    };
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
  }
});

// extensions/vaultify/restore.ts
var LocalStorageAPI2, restoreLibrary, restoreExtensions, restoreSettings, restorePlaylistseRecur;
var init_restore = __esm({
  "extensions/vaultify/restore.ts"() {
    init_platformApi();
    init_util();
    init_util2();
    ({ LocalStorageAPI: LocalStorageAPI2 } = Spicetify.Platform);
    restoreLibrary = async (data, silent = true) => {
      setTracksLiked(data.libraryTracks, true);
      setTracksLiked(data.libraryAlbums, true);
      setTracksLiked(data.libraryArtists, true);
      await restorePlaylistseRecur(data.playlists);
      !silent && Spicetify.showNotification("Restored Library");
    };
    restoreExtensions = (vault, silent = true) => {
      vault.localStore.forEach(([k, v]) => localStorage.setItem(k, v));
      vault.localStoreAPI.forEach(([k, v]) => LocalStorageAPI2.setItem(k, v));
      !silent && Spicetify.showNotification("Restored Extensions");
    };
    restoreSettings = (data, silent = true) => {
      data.settings.map(([id, type, value]) => {
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
        const settingReactProps = setting[REACT_PROPS];
        settingReactProps.onChange({ target: setting });
      });
      !silent && Spicetify.showNotification("Restored Settings");
    };
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
  }
});

// shared/modules.ts
var require2, cache, modules, functionModules, findModuleByStrings, CheckedPlaylistButtonIcon, SettingSection, SectionTitle, SettingColumn, SettingText, SettingToggle, curationButtonClass;
var init_modules = __esm({
  "shared/modules.ts"() {
    init_deps();
    require2 = webpackChunkopen.push([[Symbol("Dummy module to extract require method")], {}, (re) => re]);
    cache = Object.keys(require2.m).map((id) => require2(id));
    modules = cache.filter((module) => typeof module === "object").flatMap((module) => Object.values(module));
    functionModules = modules.filter((module) => typeof module === "function");
    findModuleByStrings = (modules2, ...filters) => modules2.find(
      (f) => _.overEvery(
        filters.map(
          (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
        )
      )(f.toString())
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
var React, ReactDOM, LocalStorage, ButtonSecondary, History, SettingsSection;
var init_settings = __esm({
  "shared/settings.tsx"() {
    init_modules();
    init_util();
    init_deps();
    ({ React, ReactDOM, LocalStorage } = Spicetify);
    ({ ButtonSecondary } = Spicetify.ReactComponent);
    ({ History } = Spicetify.Platform);
    SettingsSection = class _SettingsSection {
      constructor(name, sectionFields = {}) {
        this.name = name;
        this.sectionFields = sectionFields;
        this.pushSettings = () => {
          if (this.stopHistoryListener)
            this.stopHistoryListener();
          this.stopHistoryListener = History.listen(() => this.render());
          this.render();
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
        this.render = async () => {
          while (!document.getElementById("desktop.settings.selectLanguage")) {
            if (History.location.pathname !== "/preferences")
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
  }
});

// extensions/vaultify/settings.ts
var settings_exports = {};
var settings;
var init_settings2 = __esm({
  "extensions/vaultify/settings.ts"() {
    init_settings();
    init_app();
    settings = new SettingsSection("Vaultify").addButton({
      id: "backup",
      desc: "Backup Library, Extensions and Settings",
      text: "Backup to clipboard",
      onClick: backup
    }).addButton({
      id: "restoreLibrary",
      desc: "Restore Library",
      text: "Restore from clipboard",
      onClick: restoreFactory("library" /* LIBRARY */)
    }).addButton({
      id: "restoreExtensions",
      desc: "Restore Extensions",
      text: "Restore from clipboard",
      onClick: restoreFactory("extensions" /* EXTENSIONS */)
    }).addButton({
      id: "restoreSettings",
      desc: "Restore Settings",
      text: "Restore from clipboard",
      onClick: restoreFactory("settings" /* SETTINGS */)
    });
    settings.pushSettings();
  }
});

// extensions/vaultify/app.ts
var ClipboardAPI, backup, RestoreScope, restoreFactory;
var init_app = __esm({
  "extensions/vaultify/app.ts"() {
    init_platformApi();
    init_backup();
    init_restore();
    ({ ClipboardAPI } = Spicetify.Platform);
    backup = async (silent = false) => {
      const libraryTracks = await getLibraryTrackUris();
      const libraryAlbums = await getLibraryAlbumUris();
      const libraryArtists = await getLibraryArtistUris();
      const playlists = await fetchRootFolder().then(extractLikedPlaylistTreeRecur);
      const localStore = getLocalStorage();
      const localStoreAPI = getLocalStoreAPI();
      const settings2 = getSettings();
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
      !silent && Spicetify.showNotification("Backed up Playlists, Extensions and Settings");
    };
    RestoreScope = /* @__PURE__ */ ((RestoreScope2) => {
      RestoreScope2["LIBRARY"] = "library";
      RestoreScope2["EXTENSIONS"] = "extensions";
      RestoreScope2["SETTINGS"] = "settings";
      return RestoreScope2;
    })(RestoreScope || {});
    restoreFactory = (mode) => async () => {
      const vault = JSON.parse(await ClipboardAPI.paste());
      switch (mode) {
        case "library" /* LIBRARY */:
          return restoreLibrary(vault, true);
        case "extensions" /* EXTENSIONS */:
          return restoreExtensions(vault, true);
        case "settings" /* SETTINGS */:
          return restoreSettings(vault, true);
      }
    };
    Promise.resolve().then(() => init_settings2());
  }
});
init_app();
export {
  RestoreScope,
  backup,
  restoreFactory
};
