// extensions/search-on-youtube/app.ts
import { array as a2 } from "https://esm.sh/fp-ts";
import { flip, pipe as p, tupled } from "https://esm.sh/fp-ts/function";
import { startsWith } from "https://esm.sh/fp-ts/string";
import { anyPass } from "https://esm.sh/fp-ts-std/Predicate";

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
var pMchain = (f3) => async (fa) => f3(await fa);
var is = (c) => (a3) => (field) => field[c] === a3;
var chunckify = (n) => (g) => f.flow(ar.chunksOf(n), ar.map(g), (ps) => Promise.all(ps), pMchain(ar.flatten));
var memoize2 = (fn) => f.pipe(fn, f.tupled, memoize(eq.contramap(JSON.stringify)(str.Eq)), f.untupled);

// shared/util.ts
import { array as a, function as f2 } from "https://esm.sh/fp-ts";
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
var normalizeStr = (str2) => str2.normalize("NFKD").replace(/\(.*\)/g, "").replace(/\[.*\]/g, "").replace(/-_,/g, " ").replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, " ").toLowerCase().trim();
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// shared/api.ts
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
var searchYoutube = async (YouTubeApiKey, searchString) => {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.append("part", "snippet");
  url.searchParams.append("maxResults", "10");
  url.searchParams.append("q", searchString);
  url.searchParams.append("type", "video");
  url.searchParams.append("key", YouTubeApiKey);
  return await fetch(url).then((res) => res.json());
};

// shared/parse.ts
var parseAPITrackFromSpotify = (track) => ({
  albumName: track.album.name,
  albumUri: track.album.uri,
  artistName: track.artists[0].name,
  artistUri: track.artists[0].uri,
  durationMilis: track.duration_ms,
  name: track.name,
  playcount: void 0,
  popularity: track.popularity,
  releaseDate: new Date(track.album.release_date).getTime(),
  uri: track.uri
});

// extensions/search-on-youtube/settings.ts
import { task as task2 } from "https://esm.sh/fp-ts";

// shared/settings.tsx
import { task } from "https://esm.sh/fp-ts";
var { React, ReactDOM } = Spicetify;
var { ButtonSecondary } = Spicetify.ReactComponent;
var require2 = webpackChunkopen.push([[Symbol()], {}, (re) => re]);
var cache = Object.keys(require2.m).map((id) => require2(id));
var modules = cache.filter((module) => typeof module === "object").map((module) => {
  try {
    return Object.values(module);
  } catch {
  }
}).flat();
var functionModules = modules.filter((module) => typeof module === "function");
var SettingColumn = functionModules.find((m) => m.toString().includes("setSectionFilterMatchQueryValue"));
var SettingText = functionModules.find((m) => m.toString().includes("textSubdued") && m.toString().includes("viola"));
var SettingToggle = functionModules.find(
  (m) => m.toString().includes("condensed") && m.toString().includes("onSelected")
);
var SettingsSection = class _SettingsSection {
  constructor(name, sectionId, sectionFields = {}) {
    this.name = name;
    this.sectionId = sectionId;
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
      let pluginSettingsContainer = Array.from(allSettingsContainer.children).find(({ id }) => id === this.sectionId);
      if (!pluginSettingsContainer) {
        pluginSettingsContainer = document.createElement("div");
        pluginSettingsContainer.id = this.sectionId;
        pluginSettingsContainer.className = "settingsContainer";
        allSettingsContainer.appendChild(pluginSettingsContainer);
      }
      ReactDOM.render(/* @__PURE__ */ React.createElement(this.FieldsContainer, null), pluginSettingsContainer);
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
    this.getId = (nameId) => `extensions:${this.sectionId}:${nameId}`;
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
    this.FieldsContainer = () => /* @__PURE__ */ React.createElement("div", { className: "x-settings-section" }, /* @__PURE__ */ React.createElement("h2", { className: "Type__TypeElement-sc-goli3j-0 TypeElement-cello-textBase-type" }, this.name), Object.entries(this.sectionFields).map(([nameId, field]) => {
      return /* @__PURE__ */ React.createElement(this.Field, { field });
    }));
    this.Field = ({ field }) => {
      const isType = is("type");
      return guard3([
        [isType("input" /* INPUT */), this.InputField],
        [isType("button" /* BUTTON */), this.ButtonField],
        [isType("toggle" /* TOGGLE */), this.ToggleField]
      ])(() => /* @__PURE__ */ React.createElement(React.Fragment, null))(field);
    };
    this.SettingField = ({ field, children }) => /* @__PURE__ */ React.createElement(SettingColumn, { filterMatchQuery: field.id }, /* @__PURE__ */ React.createElement("div", { className: "x-settings-firstColumn" }, /* @__PURE__ */ React.createElement(SettingText, { htmlFor: field.id }, field.desc)), /* @__PURE__ */ React.createElement("div", { className: "x-settings-secondColumn" }, children));
    this.ButtonField = (field) => /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(ButtonSecondary, { id: field.id, buttonSize: "sm", onClick: field.onClick, className: "x-settings-button" }, field.text));
    this.ToggleField = (field) => {
      const [value, setValue] = this.useStateFor(field.id);
      return /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(
        SettingToggle,
        {
          id: field.id,
          checked: _SettingsSection.getFieldValue(this.getId(field.id)),
          onSelected: (checked) => {
            setValue(checked);
            field.onSelected?.(checked);
          },
          className: "x-settings-button"
        }
      ));
    };
    this.InputField = (field) => {
      const [value, setValue] = this.useStateFor(field.id);
      return /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(
        "input",
        {
          className: "x-settings-input",
          id: field.id,
          dir: "ltr",
          value: _SettingsSection.getFieldValue(this.getId(field.id)),
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

// extensions/search-on-youtube/settings.ts
var settings = new SettingsSection("Search On YouTube", "search-on-youtube").addInput(
  {
    id: "YouTubeApiKey",
    desc: "YouTube API Key",
    inputType: "text"
  },
  task2.of("***************************************")
);
settings.pushSettings();
var CONFIG = settings.toObject();

// extensions/search-on-youtube/app.ts
var { URI } = Spicetify;
var YTVidIDCache = /* @__PURE__ */ new Map();
var showOnYouTube = async (uri) => {
  const id = URI.fromString(uri).id;
  if (!YTVidIDCache.get(id)) {
    const track = parseAPITrackFromSpotify((await fetchWebTracksSpot([id]))[0]);
    const searchString = `${track.artistName} - ${track.name} music video`;
    let videos = [];
    if (CONFIG.YouTubeApiKey)
      try {
        videos = await searchYoutube(CONFIG.YouTubeApiKey, searchString);
      } catch (_) {
      }
    if (!videos?.length)
      return void window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchString)}`);
    const normalizedTrackName = normalizeStr(track.name);
    YTVidIDCache.set(
      id,
      videos.find((video) => {
        normalizeStr(video.snippet.title).includes(normalizedTrackName);
      })?.id.videoId ?? videos[0].id.videoId
    );
  }
  window.open(`https://www.youtube.com/watch?v=${YTVidIDCache.get(id)}`);
};
new Spicetify.ContextMenu.Item(
  "Search on YouTube",
  tupled(showOnYouTube),
  tupled(anyPass([URI.isTrack])),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>`
).register();
//! Does location actually point to document.body?
