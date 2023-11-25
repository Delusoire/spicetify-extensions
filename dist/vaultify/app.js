var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// shared/fp.ts
import {
  array as ar,
  eq,
  string as str,
  record as rec,
  semigroup as sg,
  function as f
} from "https://esm.sh/fp-ts";
import { guard, memoize } from "https://esm.sh/fp-ts-std/Function";
var guard2, guard3, pMchain, is, chunckify, memoize2;
var init_fp = __esm({
  "shared/fp.ts"() {
    guard2 = (branches) => guard(branches);
    guard3 = (branches) => guard(branches);
    pMchain = (f4) => async (fa) => f4(await fa);
    is = (c) => (a2) => (field) => field[c] === a2;
    chunckify = (n) => (g) => f.flow(ar.chunksOf(n), ar.map(g), (ps) => Promise.all(ps), pMchain(ar.flatten));
    memoize2 = (fn) => f.pipe(fn, f.tupled, memoize(eq.contramap(JSON.stringify)(str.Eq)), f.untupled);
  }
});

// shared/util.ts
import { array as a, function as f2 } from "https://esm.sh/fp-ts";
var SpotifyLoc, sleep, getReactProps, setLiked;
var init_util = __esm({
  "shared/util.ts"() {
    SpotifyLoc = {
      before: {
        start: f2.constant({ before: "start" }),
        fromUri: (uri) => ({ before: { uri } }),
        fromUid: (uid) => ({ before: { uid } })
      },
      after: {
        end: f2.constant({ after: "end" }),
        fromUri: (uri) => ({ after: { uri } }),
        fromUid: (uid) => ({ after: { uid } })
      }
    };
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    getReactProps = (element) => element[Object.keys(element).find((k) => k.startsWith("__reactProps$"))];
    setLiked = (uris, liked) => Spicetify.Platform.LibraryAPI[liked ? "add" : "remove"](...uris);
  }
});

// shared/api.ts
var fetchWebArtistsSpot, fetchWebPlaylistsSpot, fetchWebAlbumsSpot, fetchWebTracksSpot, fetchPlatPlaylistContents, createPlatFolder, likePlatPlaylist, createSPPlaylistFromTracks, fetchPlatFolder, fetchPlatRootFolder, fetchTrackLFMAPI, fetchTrackLFMAPIMemoized;
var init_api = __esm({
  "shared/api.ts"() {
    init_fp();
    init_util();
    fetchWebArtistsSpot = chunckify(50)(
      async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists
    );
    fetchWebPlaylistsSpot = chunckify(1)(
      // @ts-ignore chunkify will never call with empty array
      async ([id]) => [
        await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${id}`)
      ]
    );
    fetchWebAlbumsSpot = chunckify(50)(
      async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${ids.join(",")}`)).albums
    );
    fetchWebTracksSpot = chunckify(50)(
      async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks
    );
    fetchPlatPlaylistContents = async (uri) => (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items;
    createPlatFolder = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createFolder(name, location);
    likePlatPlaylist = async (uri) => await Spicetify.Platform.RootlistAPI.add([uri]);
    createSPPlaylistFromTracks = (name, tracks, folder) => Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist?responseFormat=protobufJson", {
      operation: "create",
      ...folder ? { after: folder } : {},
      name,
      playlist: true,
      uris: tracks
    });
    fetchPlatFolder = async (folder) => await Spicetify.Platform.RootlistAPI.getContents({ folderUri: folder });
    fetchPlatRootFolder = () => fetchPlatFolder(void 0);
    fetchTrackLFMAPI = async (LFMApiKey, artist, trackName, lastFmUsername = "") => {
      const url = new URL("https://ws.audioscrobbler.com/2.0/");
      url.searchParams.append("method", "track.getInfo");
      url.searchParams.append("api_key", LFMApiKey);
      url.searchParams.append("artist", artist);
      url.searchParams.append("track", trackName);
      url.searchParams.append("format", "json");
      url.searchParams.append("username", lastFmUsername);
      return await fetch(url).then((res) => res.json());
    };
    fetchTrackLFMAPIMemoized = memoize2(fetchTrackLFMAPI);
  }
});

// shared/modules.ts
import { allPass } from "https://esm.sh/fp-ts-std@0.18.0/Predicate";
var require2, cache, modules, functionModules, reactObjects, reactMemoSymbol, reactMemos, findModuleByStrings, CheckedPlaylistButtonIcon, SettingSection, SectionTitle, SettingColumn, SettingText, SettingToggle, curationButtonClass;
var init_modules = __esm({
  "shared/modules.ts"() {
    require2 = webpackChunkopen.push([[Symbol("Dummy module to extract require method")], {}, (re) => re]);
    cache = Object.keys(require2.m).map((id) => require2(id));
    modules = cache.filter((module) => typeof module === "object").flatMap((module) => Object.values(module));
    functionModules = modules.filter((module) => typeof module === "function");
    reactObjects = modules.filter((m) => m?.$$typeof);
    reactMemoSymbol = Spicetify.React.memo().$$typeof;
    reactMemos = reactObjects.filter((m) => m.$$typeof === reactMemoSymbol);
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
    SectionTitle = findModuleByStrings(functionModules, "textToHighlight", "semanticColor");
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
          const isType2 = is("type");
          return guard3([
            [isType2("input" /* INPUT */), this.InputField],
            [isType2("button" /* BUTTON */), this.ButtonField],
            [isType2("toggle" /* TOGGLE */), this.ToggleField]
          ])(() => /* @__PURE__ */ React.createElement(React.Fragment, null))(field);
        }));
        this.SettingField = ({ field, children }) => /* @__PURE__ */ React.createElement(SettingColumn, { filterMatchQuery: field.id }, /* @__PURE__ */ React.createElement("div", { className: "x-settings-firstColumn" }, /* @__PURE__ */ React.createElement(SettingText, { htmlFor: field.id }, field.desc)), /* @__PURE__ */ React.createElement("div", { className: "x-settings-secondColumn" }, children));
        this.ButtonField = (field) => /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(ButtonSecondary, { id: field.id, buttonSize: "sm", onClick: field.onClick, className: "x-settings-button" }, field.text));
        this.ToggleField = (field) => {
          const id = this.getId(field.id);
          return /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(
            SettingToggle,
            {
              id: field.id,
              value: _SettingsSection.getFieldValue(id),
              onSelected: (checked) => {
                _SettingsSection.setFieldValue(id, checked);
                field.onSelected?.(checked);
              },
              className: "x-settings-button"
            }
          ));
        };
        this.InputField = (field) => {
          const id = this.getId(field.id);
          return /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(
            "input",
            {
              className: "x-settings-input",
              id: field.id,
              dir: "ltr",
              value: _SettingsSection.getFieldValue(id),
              type: field.inputType,
              onChange: (e) => {
                const value = e.currentTarget.value;
                SettingSection.setFieldValue(id, value);
                field.onChange?.(value);
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
import { array as ar2, function as f3, record as rec2, task as task2 } from "https://esm.sh/fp-ts";
var isType, extractLikedPlaylistTreeRecur, isContentOfPersonalPlaylist, restorePlaylistseRecur, allowedExtDataRegex, backup, restore;
var init_app = __esm({
  "extensions/vaultify/app.ts"() {
    init_api();
    init_fp();
    init_util();
    debugger;
    isType = is("type");
    extractLikedPlaylistTreeRecur = (leaf) => guard2([
      [
        isType("playlist"),
        async (playlist) => ({
          [playlist.name]: playlist.isOwnedBySelf ? await f3.pipe(playlist.uri, fetchPlatPlaylistContents, pMchain(ar2.map((x) => x.uri))) : playlist.uri
        })
      ],
      [
        isType("folder"),
        async (folder) => ({
          [folder.name]: await f3.pipe(folder.items, ar2.map(extractLikedPlaylistTreeRecur), (ps) => Promise.all(ps))
        })
      ]
    ])(task2.of({}))(leaf);
    isContentOfPersonalPlaylist = (subleaf) => typeof subleaf[0] === "string" && Spicetify.URI.isTrack(subleaf[0]);
    restorePlaylistseRecur = async (leaf) => {
      Object.keys(leaf).forEach((name) => {
        const subleaf = leaf[name];
        if (!Array.isArray(subleaf))
          return void likePlatPlaylist(subleaf);
        if (subleaf.length === 0)
          return;
        if (isContentOfPersonalPlaylist(subleaf))
          return void createSPPlaylistFromTracks(name, subleaf);
        createPlatFolder(name);
        subleaf.forEach(restorePlaylistseRecur);
      });
    };
    allowedExtDataRegex = /^(?:marketplace:)|(?:extensions:)|(?:spicetify)/;
    backup = async () => {
      const extractItemsUris = (a2) => a2.items.map((item) => item.uri);
      const rawLibraryTracks = await Spicetify.Platform.LibraryAPI.getTracks({
        limit: -1,
        sort: { field: "ADDED_AT", order: "ASC" }
      });
      const libraryTracks = extractItemsUris(rawLibraryTracks);
      const rawLibraryAlbums = await Spicetify.Platform.LibraryAPI.getAlbums({
        limit: 2 ** 30,
        sort: { field: "ADDED_AT" }
      });
      const libraryAlbums = extractItemsUris(rawLibraryAlbums);
      const rawLibraryArtists = await Spicetify.Platform.LibraryAPI.getArtists({
        limit: 2 ** 30,
        sort: {
          field: "ADDED_AT"
        }
      });
      const libraryArtists = extractItemsUris(rawLibraryArtists);
      const playlists = await f3.pipe(await fetchPlatRootFolder(), extractLikedPlaylistTreeRecur);
      const localStore = f3.pipe(
        localStorage,
        rec2.toUnfoldable(ar2),
        ar2.filter(([key]) => allowedExtDataRegex.test(key))
      );
      const { items, namespace } = Spicetify.Platform.LocalStorageAPI;
      const localStoreAPI = f3.pipe(
        items,
        rec2.toUnfoldable(ar2),
        ar2.filter(([key]) => key.startsWith(namespace)),
        ar2.map(([key, value]) => [key.split(":")[1], value])
      );
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
      await Spicetify.Platform.ClipboardAPI.copy(
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
      let vault = JSON.parse(await Spicetify.Platform.ClipboardAPI.paste());
      if (mode === "library") {
        setLiked(vault.libraryTracks, true);
        debugger;
        setLiked(vault.libraryAlbums, true);
        debugger;
        setLiked(vault.libraryArtists, true);
        debugger;
        await restorePlaylistseRecur(vault.playlists);
        debugger;
        Spicetify.showNotification("Restored Library");
      }
      if (mode === "extensions") {
        ar2.map(f3.tupled(Spicetify.LocalStorage.set))(vault.localStore);
        ar2.map(f3.tupled(Spicetify.Platform.LocalStorageAPI.setItem))(vault.localStoreAPI);
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
