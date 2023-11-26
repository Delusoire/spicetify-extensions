// extensions/show-the-genres/app.ts
import { array as a3, function as f4, string as str2 } from "https://esm.sh/fp-ts";

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
var guard3 = (branches) => guard(branches);
var pMchain = (f5) => async (fa) => f5(await fa);
var is = (c) => (a4) => (field) => field[c] === a4;
var chunckify = (n) => (g) => f.flow(ar.chunksOf(n), ar.map(g), (ps) => Promise.all(ps), pMchain(ar.flatten));
var memoize2 = (fn) => f.pipe(fn, f.tupled, memoize(eq.contramap(JSON.stringify)(str.Eq)), f.untupled);

// shared/util.ts
import { function as f2 } from "https://esm.sh/fp-ts";
var SpotifyLoc = {
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
var waitForElement = (selector, timeout = 1e3, location = document.body, notEl) => new Promise((resolve) => {
  const res = (v) => {
    observer.disconnect();
    resolve(v);
  };
  const observer = new MutationObserver(() => {
    const el = document.querySelector(selector);
    if (el && (!notEl || el !== notEl))
      return res(el);
  });
  observer.observe(location, {
    childList: true,
    subtree: true
  });
  if (timeout)
    setTimeout(() => res(null), timeout);
});
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var onHistoryChanged = (toMatchTo, callback, dropDuplicates = true) => {
  const createMatchFn = (toMatchTo2) => {
    switch (typeof toMatchTo2) {
      case "string":
        return (input) => input?.startsWith(toMatchTo2) ?? false;
      case "function":
        return toMatchTo2;
      default:
        return (input) => toMatchTo2.test(input);
    }
  };
  let lastLocation = {};
  const matchFn = createMatchFn(toMatchTo);
  const historyChanged = (location) => {
    if (matchFn(location.pathname)) {
      if (dropDuplicates && Object.is(lastLocation, location)) {
      } else
        callback(Spicetify.URI.fromString(location).toString());
    }
    lastLocation = location;
  };
  historyChanged(Spicetify.Platform.History.location ?? {});
  Spicetify.Platform.History.listen(historyChanged);
};
var onSongChanged = (callback) => {
  callback(Spicetify.Player.data);
  Spicetify.Player.addEventListener("songchange", (event) => callback(event.data));
};

// shared/api.ts
import { array as a2, function as f3 } from "https://esm.sh/fp-ts";
var fetchGQLArtistRelated = async (uri) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistRelated, {
  uri,
  locale: Spicetify.Locale.getLocale()
})).data.artistUnion.relatedContent.relatedArtists.items;
var fetchWebArtistsSpot = chunckify(50)(
  async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists
);
var fetchWebPlaylistsSpot = chunckify(1)(
  // @ts-ignore chunkify will never call with empty array
  async ([id]) => [
    await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${id}`)
  ]
);
var fetchWebAlbumsSpot = chunckify(50)(
  async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${ids.join(",")}`)).albums
);
var fetchWebTracksSpot = chunckify(50)(
  async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks
);
var fetchTrackLFMAPI = async (LFMApiKey, artist, trackName, lastFmUsername = "") => {
  const url = new URL("https://ws.audioscrobbler.com/2.0/");
  url.searchParams.append("method", "track.getInfo");
  url.searchParams.append("api_key", LFMApiKey);
  url.searchParams.append("artist", artist);
  url.searchParams.append("track", trackName);
  url.searchParams.append("format", "json");
  url.searchParams.append("username", lastFmUsername);
  return await fetch(url).then((res) => res.json());
};
var fetchTrackLFMAPIMemoized = memoize2(fetchTrackLFMAPI);

// extensions/show-the-genres/settings.ts
import { task as task2 } from "https://esm.sh/fp-ts";

// shared/settings.tsx
import { task } from "https://esm.sh/fp-ts";

// shared/modules.ts
import { allPass } from "https://esm.sh/fp-ts-std@0.18.0/Predicate";
var require2 = webpackChunkopen.push([[Symbol("Dummy module to extract require method")], {}, (re) => re]);
var cache = Object.keys(require2.m).map((id) => require2(id));
var modules = cache.filter((module) => typeof module === "object").flatMap((module) => Object.values(module));
var functionModules = modules.filter((module) => typeof module === "function");
var reactObjects = modules.filter((m) => m?.$$typeof);
var reactMemoSymbol = Spicetify.React.memo().$$typeof;
var reactMemos = reactObjects.filter((m) => m.$$typeof === reactMemoSymbol);
var findModuleByStrings = (modules2, ...filters) => modules2.find(
  (f5) => allPass(
    filters.map(
      (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
    )
  )(f5.toString())
);
var CheckedPlaylistButtonIcon = findModuleByStrings(
  functionModules,
  "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
);
var SettingSection = findModuleByStrings(
  functionModules,
  "function m(e){return(0,d.jsx)(r.k,{children:(0,d.jsx)(u,{...e})})}"
);
var SectionTitle = findModuleByStrings(functionModules, "textToHighlight", "semanticColor");
var SettingColumn = findModuleByStrings(functionModules, "setSectionFilterMatchQueryValue", "filterMatchQuery");
var SettingText = findModuleByStrings(functionModules, "textSubdued", "viola");
var SettingToggle = findModuleByStrings(functionModules, "condensed", "onSelected");
var curationButtonClass = modules.find((m) => m?.curationButton).curationButton;

// shared/settings.tsx
var { React, ReactDOM } = Spicetify;
var { ButtonSecondary } = Spicetify.ReactComponent;
var SettingsSection = class _SettingsSection {
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

// extensions/show-the-genres/settings.ts
var settings = new SettingsSection("Show The Genres", "show-the-genres").addInput(
  {
    id: "LFMApiKey",
    desc: "Last.fm API Key",
    inputType: "text"
  },
  task2.of("********************************")
);
settings.pushSettings();
var CONFIG = settings.toObject();

// extensions/show-the-genres/app.ts
var fetchLastFMTags = async (uri) => {
  const uid = Spicetify.URI.fromString(uri).id;
  const res = await fetchWebTracksSpot([uid]);
  const { name, artists } = res[0];
  const artistNames = artists.map((artist) => artist.name);
  const { track } = await fetchTrackLFMAPI(CONFIG.LFMApiKey, artistNames[0], name);
  return track.toptags.tag.map((tag) => tag.name);
};
var nowPlayingGenreContainerEl = document.createElement("genre-container");
nowPlayingGenreContainerEl.fetchGenres = fetchLastFMTags;
nowPlayingGenreContainerEl.className += " ellipsis-one-line main-type-finale";
nowPlayingGenreContainerEl.style.gridArea = "genres";
onSongChanged((data) => nowPlayingGenreContainerEl.uri = data?.item.currentTrackUri);
var getArtistsGenresOrRelated = async (artistsUris) => {
  const getArtistsGenres = f4.flow(
    a3.map((uri) => Spicetify.URI.fromString(uri).id),
    fetchWebArtistsSpot,
    pMchain(a3.flatMap((artist) => artist.genres)),
    pMchain(a3.uniq(str2.Eq))
  );
  const allGenres = await getArtistsGenres(artistsUris);
  return allGenres.length ? allGenres : await f4.pipe(
    artistsUris[0],
    fetchGQLArtistRelated,
    pMchain(a3.map((a4) => a4.uri)),
    pMchain(a3.chunksOf(5)),
    pMchain(
      a3.reduce(
        Promise.resolve([]),
        async (acc, arr5uris) => (await acc).length ? await acc : await getArtistsGenres(arr5uris)
      )
    )
  );
};
var updateArtistPage = async (uri) => {
  const artistGenreContainerEl = document.createElement("genre-container");
  artistGenreContainerEl.name = "Artist Genres";
  artistGenreContainerEl.uri = uri.toString();
  artistGenreContainerEl.fetchGenres = (uri2) => getArtistsGenresOrRelated([uri2]);
  const headerTextEl = await waitForElement("div.main-entityHeader-headerText");
  const headerTextDetailsEl = await waitForElement("span.main-entityHeader-detailsText");
  headerTextEl?.insertBefore(artistGenreContainerEl, headerTextDetailsEl);
};
onHistoryChanged((uri) => Spicetify.URI.isArtist(uri), updateArtistPage);
(async () => {
    if (!document.getElementById("show-the-genres-css")) {
        const el = document.createElement("style")
        el.id = "show-the-genres-css"
        
        el.textContent = "/* extensions/show-the-genres/assets/styles.css */\n.main-nowPlayingWidget-trackInfo.main-trackInfo-container {\n  grid-template: \"title title\" \"badges subtitle\" \"genres genres\"/auto 1fr auto;\n}\n"
        document.head.appendChild(el)
    }
})()