// extensions/show-the-genres/app.ts
import { array as a3, function as f4, string as str3 } from "https://esm.sh/fp-ts";

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
var escapeRegex = (str4) => str4.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
var titleCase = (str4) => str4.replace(/\b\w/g, (l) => l.toUpperCase());
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

// shared/api.ts
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
var searchWebItemSpot = async (q, type) => Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=${type.join(",")}`);
var fetchWebSoundOfSpotifyPlaylist = async (genre) => {
  const name = `The Sound Of ${genre}`;
  const re = new RegExp(`^${escapeRegex(name)}$`, "i");
  const res = await searchWebItemSpot(name, ["playlist"]);
  const item = res.playlists.items[0];
  return item?.owner.id === "thesoundsofspotify" && re.test(item.name) ? item.uri : null;
};
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

// extensions/show-the-genres/artistPage.ts
import { array as a2, function as f3, string as str2 } from "https://esm.sh/fp-ts";
import { prepend } from "https://esm.sh/fp-ts-std/String";
var { URI } = Spicetify;
var updateArtistPage = async ({ pathname }) => {
  const uri = URI.fromString(pathname);
  if (!URI.isArtist(uri))
    return;
  const genreContainer2 = document.createElement("div");
  genreContainer2.className = "main-entityHeader-detailsText genre-container";
  genreContainer2.innerHTML = await f3.pipe(
    await getArtistsGenresOrRelated([`${uri}`]),
    a2.takeLeft(5),
    a2.map(async (genre) => {
      const uri2 = await fetchWebSoundOfSpotifyPlaylist(genre);
      return `<a class="main-entityHeader-genreLink" ${uri2 === null ? `href="#" data-value="${genre}" onclick="searchPlaylist(this.getAttribute('data-value'))` : `href="${uri2}"`} style="color: var(--spice-subtext); font-size: 1rem">${titleCase(genre)}</a>`;
    }),
    (ps) => Promise.all(ps),
    pMchain(a2.intercalate(str2.Monoid)(`<span>, </span>`)),
    pMchain(prepend(`<span>Artist Genres : </span>`))
  );
  document.querySelector(".genre-container")?.remove();
  const entityHeaderText = await waitForElement("div.main-entityHeader-headerText");
  entityHeaderText?.insertBefore(genreContainer2, await waitForElement("span.main-entityHeader-detailsText"));
};
var getArtistsGenresOrRelated = async (artistsUris, src = null) => {
  const getArtistsGenres = f3.flow(
    a2.map((uri) => URI.fromString(uri).id),
    fetchWebArtistsSpot,
    pMchain(a2.flatMap((artist) => artist.genres)),
    pMchain(a2.uniq(str2.Eq))
  );
  const allGenres = await getArtistsGenres(artistsUris);
  return allGenres.length ? allGenres : await f3.pipe(
    artistsUris[0],
    fetchGQLArtistRelated,
    pMchain(a2.map((a4) => a4.uri)),
    pMchain(a2.chunksOf(5)),
    pMchain(
      a2.reduce(
        Promise.resolve([]),
        async (acc, arr5uris) => (await acc).length ? await acc : await getArtistsGenres(arr5uris)
      )
    )
  );
};

// extensions/show-the-genres/popup.tsx
import { task } from "https://esm.sh/fp-ts";
var { React } = Spicetify;
var genrePopup = globalThis.genrePopup = () => {
  Spicetify.PopupModal.display({
    title: `Genres of: ${Spicetify.Player.data.item?.metadata?.title}`,
    content: /* @__PURE__ */ React.createElement("div", { className: "genres-popup" }, spotifyGenres.length === 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null) : /* @__PURE__ */ React.createElement(SpotifyGenresContainer, null), lastFmTags.length === 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null) : /* @__PURE__ */ React.createElement(LastFmTagsContainer, null)),
    isLarge: true
  });
};
var ButtonElement = ({ name = "", color = "", onClick = task.of(void 0) }) => /* @__PURE__ */ React.createElement("button", { className: `login-button${color}`, onClick }, name);
var SpotifyGenresContainer = () => {
  const [value, setValue] = React.useState(spotifyGenres);
  Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(spotifyGenres), 500));
  const openSoundOfPlaylistOrSearchResults = (query) => async () => {
    const uri = await fetchWebSoundOfSpotifyPlaylist(query);
    if (uri === null)
      Spicetify.Platform.History.push(`/search/${query}/playlists`);
    else
      Spicetify.Platform.History.push(`/playlist/${uri.split(":")[2]}`);
    Spicetify.PopupModal.hide();
  };
  return /* @__PURE__ */ React.createElement("div", { className: "spaced-down" }, /* @__PURE__ */ React.createElement("h1", { className: "title" }, "Spotify Genres"), value.map((n) => /* @__PURE__ */ React.createElement(ButtonElement, { name: titleCase(n), onClick: openSoundOfPlaylistOrSearchResults(n) })));
};
var LastFmTagsContainer = () => {
  if (lastFmTags.length == 0)
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  const [value, setValue] = React.useState(lastFmTags);
  Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(lastFmTags), 100));
  const openPlaylistSearchResults = (query) => async () => {
    Spicetify.Platform.History.push(`/search/${query}/playlists`);
    Spicetify.PopupModal.hide();
  };
  return /* @__PURE__ */ React.createElement("div", { className: "spaced-down" }, /* @__PURE__ */ React.createElement("h1", { className: "title" }, "Last FM Tags"), value.map((n) => /* @__PURE__ */ React.createElement(ButtonElement, { name: titleCase(n), onClick: openPlaylistSearchResults(n) })));
};

// extensions/show-the-genres/settings.ts
import { task as task3 } from "https://esm.sh/fp-ts";

// shared/settings.tsx
import { task as task2 } from "https://esm.sh/fp-ts";

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
var { React: React2, ReactDOM } = Spicetify;
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
      ReactDOM.render(/* @__PURE__ */ React2.createElement(this.SettingsSection, null), pluginSettingsContainer);
    };
    this.addButton = (props) => {
      this.addField("button" /* BUTTON */, props);
      return this;
    };
    this.addToggle = (props, defaultValue = task2.of(false)) => {
      this.addField("toggle" /* TOGGLE */, props, defaultValue);
      return this;
    };
    this.addInput = (props, defaultValue = task2.of("")) => {
      this.addField("input" /* INPUT */, props, defaultValue);
      return this;
    };
    this.getId = (nameId) => ["extensions", this.id, nameId].join(":");
    this.useStateFor = (id) => {
      const [value, setValueState] = React2.useState(_SettingsSection.getFieldValue(id));
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
    this.SettingsSection = () => /* @__PURE__ */ React2.createElement(SettingSection, { filterMatchQuery: this.name }, /* @__PURE__ */ React2.createElement(SectionTitle, null, this.name), Object.values(this.sectionFields).map((field) => {
      const isType = is("type");
      return guard3([
        [isType("input" /* INPUT */), this.InputField],
        [isType("button" /* BUTTON */), this.ButtonField],
        [isType("toggle" /* TOGGLE */), this.ToggleField]
      ])(() => /* @__PURE__ */ React2.createElement(React2.Fragment, null))(field);
    }));
    this.SettingField = ({ field, children }) => /* @__PURE__ */ React2.createElement(SettingColumn, { filterMatchQuery: field.id }, /* @__PURE__ */ React2.createElement("div", { className: "x-settings-firstColumn" }, /* @__PURE__ */ React2.createElement(SettingText, { htmlFor: field.id }, field.desc)), /* @__PURE__ */ React2.createElement("div", { className: "x-settings-secondColumn" }, children));
    this.ButtonField = (field) => /* @__PURE__ */ React2.createElement(this.SettingField, { field }, /* @__PURE__ */ React2.createElement(ButtonSecondary, { id: field.id, buttonSize: "sm", onClick: field.onClick, className: "x-settings-button" }, field.text));
    this.ToggleField = (field) => {
      const id = this.getId(field.id);
      return /* @__PURE__ */ React2.createElement(this.SettingField, { field }, /* @__PURE__ */ React2.createElement(
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
      return /* @__PURE__ */ React2.createElement(this.SettingField, { field }, /* @__PURE__ */ React2.createElement(
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

// extensions/show-the-genres/settings.ts
var settings = new SettingsSection("Show The Genres", "show-the-genres").addInput(
  {
    id: "LFMApiKey",
    desc: "Last.fm API Key",
    inputType: "text"
  },
  task3.of("********************************")
);
settings.pushSettings();
var CONFIG = settings.toObject();

// extensions/show-the-genres/app.ts
var searchPlaylist = globalThis.searchPlaylist = (query) => Spicetify.Platform.History.push(`/search/${query}/playlists`);
var spotifyGenres = new Array();
var lastFmTags = new Array();
var updateGenreContainer = async (genres) => {
  genreContainer.innerHTML = await f4.pipe(
    genres,
    a3.map(async (genre) => {
      const uri = await fetchWebSoundOfSpotifyPlaylist(genre) ?? "#";
      return `<a href="${uri}" style="color: var(--spice-subtext); font-size: 12px">${titleCase(genre)}</a>`;
    }),
    (ps) => Promise.all(ps),
    pMchain(a3.intercalate(str3.Monoid)(`<span>, </span>`))
  );
  return genreContainer;
};
var updateGenresUI = async (genres) => {
  const trackInfoContainer = await waitForElement("div.main-trackInfo-container");
  const { uri, metadata } = Spicetify.Player.data.track;
  if (metadata && Spicetify.URI.isTrack(uri) && genres.length) {
    trackInfoContainer?.appendChild(await updateGenreContainer(genres));
    lastFmTags = f4.pipe(
      await fetchTrackLFMAPI(CONFIG.LFMApiKey, metadata.artist_name, metadata.title),
      ({ track }) => track.toptags.tag,
      a3.map(({ name }) => name)
    );
  } else
    trackInfoContainer?.removeChild(genreContainer);
};
var getArtistUrisFromCurrentTrack = () => {
  const metadata = Spicetify.Player.data?.item.metadata ?? {};
  return [...Array(10).keys()].map((k) => metadata["artist_uri" + (k ? `:${k}` : "")]).filter(Boolean);
};
var updateGenres = async () => {
  const artistUris = getArtistUrisFromCurrentTrack();
  spotifyGenres = await getArtistsGenresOrRelated(artistUris);
  await updateGenresUI(spotifyGenres.slice(0, 5));
};
var genreContainer = document.createElement("div");
genreContainer.className = "main-trackInfo-genres ellipsis-one-line main-type-finale";
genreContainer.style.gridArea = "genres";
genreContainer.addEventListener("contextmenu", genrePopup);
Spicetify.Player.addEventListener("songchange", updateGenres);
updateGenres();
Spicetify.Platform.History.listen(updateArtistPage);
updateArtistPage(Spicetify.Platform.History.location);
export {
  lastFmTags,
  spotifyGenres
};
(async () => {
    if (!document.getElementById("show-the-genres-css")) {
        const el = document.createElement("style")
        el.id = "show-the-genres-css"
        
        el.textContent = "/* extensions/show-the-genres/assets/styles.css */\n.genres-popup::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.genres-popup .title {\n  color: var(--spice-text);\n}\n.genres-popup .spaced-down {\n  margin-bottom: 20px;\n}\n.genres-popup .login-button {\n  background-color: var(--spice-button);\n  border-radius: 8px;\n  border-style: none;\n  color: var(--spice-text);\n  cursor: pointer;\n  font-size: 14px;\n  height: 40px;\n  margin: 10px;\n  padding: 5px 10px;\n  text-align: center;\n}\n.genres-popup .login-button:hover {\n  background-color: var(--spice-button-active);\n}\n.main-nowPlayingWidget-trackInfo.main-trackInfo-container {\n  grid-template: \"title title\" \"badges subtitle\" \"genres genres\"/auto 1fr auto;\n}\n"
        document.head.appendChild(el)
    }
})()