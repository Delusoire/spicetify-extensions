// extensions/star-ratings/app.ts
import { array as ar4, function as f6 } from "https://esm.sh/fp-ts";
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
var pMchain = (f7) => async (fa) => f7(await fa);
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
var isLiked = (uris) => Spicetify.Platform.LibraryAPI.contains(...uris);
var setLiked = (uris, liked) => Spicetify.Platform.LibraryAPI[liked ? "add" : "remove"]({ uris });
var toggleLiked = async (uris) => {
  const liked = await isLiked(uris);
  return await f2.pipe(
    uris,
    a.reduceWithIndex(
      [[], []],
      (i, acc, uri) => (acc[Number(liked[i])].push(uri), acc)
    ),
    ([toAdd, toRem]) => {
      const ps = [];
      if (toAdd.length)
        ps.push(setLiked(toAdd, true));
      if (toRem.length)
        ps.push(setLiked(toRem, false));
      return Promise.all(ps);
    }
  );
};

// shared/api.ts
var fetchGQLAlbum = async (uri, offset = 0, limit = 487) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum, {
  uri,
  locale: Spicetify.Locale.getLocale(),
  offset,
  limit
})).data.albumUnion;
var removeWebPlaylistTracks = async (playlist, tracks) => Spicetify.CosmosAsync.del(`https://api.spotify.com/v1/playlists/${playlist}/tracks`, {
  tracks: tracks.map((uri) => ({ uri }))
});
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
var fetchPlatArtistLikedTracks = async (uri, offset = 0, limit = 100) => (await Spicetify.Platform.LibraryAPI.getTracks({ uri, offset, limit })).items;
var fetchPlatPlaylistContents = async (uri) => (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items;
var createPlatFolder = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createFolder(name, location);
var createPlatPlaylist = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createPlaylist(name, location);
var setPlatPlaylistVisibility = async (playlist, visibleForAll) => await Spicetify.Platform.PlaylistPermissionsAPI.setBasePermission(playlist, visibleForAll ? "VIEWER" : "BLOCKED");
var fetchPlatFolder = async (folder) => await Spicetify.Platform.RootlistAPI.getContents({ folderUri: folder });
var addPlatPlaylistTracks = async (playlist, tracks, location = {}) => await Spicetify.Platform.PlaylistAPI.add(playlist, tracks, location);
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

// extensions/star-ratings/ratings.ts
import { array as ar3, function as f5, nonEmptyArray as nea, readonlyArray, record } from "https://esm.sh/fp-ts";

// extensions/star-ratings/settings.ts
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
  (f7) => allPass(
    filters.map(
      (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
    )
  )(f7.toString())
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
      debugger;
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

// extensions/star-ratings/util.ts
import { array as a2, function as f4 } from "https://esm.sh/fp-ts";

// extensions/star-ratings/stars.ts
import { array as ar2, function as f3, nonEmptyArray } from "https://esm.sh/fp-ts";
var { URI } = Spicetify;
var createStar = (starsId, nth, size) => {
  const xmlns = "http://www.w3.org/2000/svg";
  const star = document.createElementNS(xmlns, "svg");
  const id = `${starsId}-${nth}`;
  star.id = id;
  star.style.minHeight = `${size}px`;
  star.style.minWidth = `${size}px`;
  star.setAttributeNS(null, "width", `${size}px`);
  star.setAttributeNS(null, "height", `${size}px`);
  star.setAttributeNS(null, "viewBox", `0 0 32 32`);
  const defs = document.createElementNS(xmlns, "defs");
  star.append(defs);
  const gradient = document.createElementNS(xmlns, "linearGradient");
  defs.append(gradient);
  gradient.id = `${id}-gradient`;
  const stop1 = document.createElementNS(xmlns, "stop");
  gradient.append(stop1);
  stop1.id = `${id}-gradient-left`;
  stop1.setAttributeNS(null, "offset", "50%");
  stop1.setAttributeNS(null, "stop-color", "var(--spice-button-disabled)");
  const stop2 = document.createElementNS(xmlns, "stop");
  gradient.append(stop2);
  stop2.id = `${id}-gradient-right`;
  stop2.setAttributeNS(null, "offset", "50%");
  stop2.setAttributeNS(null, "stop-color", "var(--spice-button-disabled)");
  const path = document.createElementNS(xmlns, "path");
  star.append(path);
  path.setAttributeNS(null, "fill", `url(#${gradient.id})`);
  path.setAttributeNS(
    null,
    "d",
    "M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
  );
  return [star, [stop1, stop2]];
};
var createStars = (idSuffix, size) => {
  const id = `stars-${idSuffix}`;
  const starsContainer = document.createElement("span");
  {
    starsContainer.className = "stars";
    starsContainer.id = id;
    starsContainer.style.whiteSpace = "nowrap";
    starsContainer.style.alignItems = "center";
    starsContainer.style.display = "flex";
  }
  const starsConstructs = nonEmptyArray.range(1, 5).map((i) => createStar(id, i, size));
  f3.pipe(
    starsConstructs,
    ar2.unzip,
    ([starElements]) => starElements,
    ar2.map((starElement) => starsContainer.append(starElement))
  );
  return [starsContainer, starsConstructs];
};
var setStarsGradientByRating = (rating) => (starsSVGStops) => {
  const setHalfStarLit = (lit) => (nth) => starsSVGStops[Math.floor(nth / 2)][nth % 2].setAttributeNS(
    null,
    "stop-color",
    `var(--spice-button${lit ? "" : "-disabled"})`
  );
  f3.pipe(
    nonEmptyArray.range(0, 9),
    ar2.spanLeft((hi) => hi < rating),
    ({ init, rest }) => {
      init.map(setHalfStarLit(true));
      rest.map(setHalfStarLit(false));
    }
  );
};
var calculateRatingFromMouseEvent = (starElement, nth) => (e) => {
  const rect = starElement.getBoundingClientRect();
  const leftOffsetFromHeart = e.clientX - rect.left;
  const isHalf = CONFIG.halfStarRatings && leftOffsetFromHeart < HALF_STAR_LENGTH;
  return 2 * (nth + 1) - Number(isHalf);
};
var onStarClick = (nth, starElement, getTrackUri) => async (e) => {
  const trackUri = getTrackUri();
  const oldRating = tracksRatings[trackUri];
  let newRating = calculateRatingFromMouseEvent(starElement, nth)(e);
  const heartThreshold = starsS2N(CONFIG.heartThreshold);
  if (heartThreshold) {
    const shouldBeHearted = newRating >= heartThreshold;
    const [isHearted] = await isLiked([trackUri]);
    if (isHearted !== shouldBeHearted)
      toggleLiked([trackUri]);
  }
  if (oldRating === newRating)
    newRating = 0;
  if (oldRating)
    f3.pipe(
      playlistUris.slice(0, oldRating + 1),
      ar2.filter(Boolean),
      ar2.map((playlistUri) => URI.from(playlistUri).id),
      ar2.map((playlistId) => removeWebPlaylistTracks(playlistId, [trackUri]))
    );
  tracksRatings[trackUri] = newRating;
  if (newRating) {
    let playlistUri = playlistUris[newRating];
    if (!playlistUri) {
      playlistUri = await createPlatPlaylist(
        starsN2S(newRating),
        SpotifyLoc.after.fromUri(CONFIG.ratingsFolderUri)
      );
      setPlatPlaylistVisibility(playlistUri, false);
      playlistUris[newRating] = playlistUri;
    }
    addPlatPlaylistTracks(playlistUri, [trackUri]);
  }
  updateNowPlayingStars();
  const trackStarsContainer = getStarsContainer(`${URI.fromString(trackUri).id}`);
  if (trackStarsContainer) {
    f3.pipe(trackStarsContainer, setStarsGradientFromContainerByRating(newRating));
    trackStarsContainer.style.visibility = newRating ? "visible" : "hidden";
  }
};

// extensions/star-ratings/util.ts
var RATINGS_FOLDER_NAME = "Ratings";
var STAR_SIZE = 16;
var HALF_STAR_LENGTH = STAR_SIZE / 2;
var starsS2N = (S) => Number(S) * 2;
var starsN2S = (N) => (N / 2).toFixed(1);
var getStarsFromStarsContainer = (starsElement) => Array.from(starsElement.children);
var getStarStopsFromStar = (star) => Array.from(star.firstChild.firstChild.childNodes);
var getStarsStopsFromStarsContainer = f4.flow(getStarsFromStarsContainer, a2.map(getStarStopsFromStar));
var setStarsGradientFromContainerByRating = (rating) => f4.flow(getStarsStopsFromStarsContainer, setStarsGradientByRating(rating));
var getStarsContainer = (idSuffix) => document.getElementById(`stars-${idSuffix}`);
var getStars = f4.flow(getStarsContainer, getStarsFromStarsContainer);
var getStarsStops = f4.flow(getStarsContainer, getStarsStopsFromStarsContainer);
var getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-indexable"));
var getTrackListHeader = (trackList) => trackList.querySelector(".main-trackList-trackListHeader")?.firstChild;
var getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll("div.main-trackList-trackListRow"));
var getLastColIndex = (parent) => {
  const lastCol = parent.querySelector("div.main-trackList-rowSectionEnd");
  const lastColIndex = Number(lastCol.getAttribute("aria-colindex"));
  return [lastColIndex, lastCol];
};
var getFirstPlus = (parent) => parent.querySelector(
  ".Button-sm-16-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle, .Button-textBrightAccent-sm-16-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle"
);
var getTrackListTrackUri = (track) => (track = Object.values(track)[0].child.child.child.child, track.pendingProps.uri ?? track.child.pendingProps.uri);

// extensions/star-ratings/settings.ts
var settings = new SettingsSection("Star Ratings", "star-ratings").addToggle({ id: "hideHearts", desc: "Hide Hearts" }).addToggle({ id: "halfStarRatings", desc: "Half star ratings" }).addToggle({ id: "showInTrackLists", desc: "Show in tracklists" }).addToggle({ id: "nowPlayingStarsOnRight", desc: "Place the stars for now playing track on the right" }).addInput({ id: "heartThreshold", desc: "Threshold for liking trakcs", inputType: "text" }, task2.of("3.5")).addInput({ id: "skipThreshold", desc: "Threshold for skipping trakcs", inputType: "text" }, task2.of("1.5")).addInput(
  {
    id: "ratingsFolderUri",
    desc: "Ratings folder uri",
    inputType: "text",
    onChange: loadRatings
  },
  async () => (await createPlatFolder(RATINGS_FOLDER_NAME)).uri
);
settings.pushSettings();
var CONFIG = settings.toObject();

// extensions/star-ratings/ratings.ts
var w = (n) => Math.exp(n);
var aggregateRatings = (uris) => f5.pipe(
  uris,
  ar3.map((uri) => tracksRatings[uri]),
  ar3.filter(Boolean),
  ar3.map((r) => [r, w(r)]),
  readonlyArray.unzip,
  ([rs, wrs]) => readonlyArray.reduceWithIndex(0, (i, s, r) => s + r * wrs[i])(rs) / readonlyArray.reduce(0, (s, wr) => s + wr)(wrs) || 0
);
var addRatingsListenersToStars = ([starsContainer, starsConstructs], getTrackUri) => {
  const [starsElements, starsSVGStops] = f5.pipe(starsConstructs, readonlyArray.unzip);
  starsContainer.addEventListener(
    "mouseout",
    () => setStarsGradientByRating(tracksRatings[getTrackUri()] ?? 0)(starsSVGStops)
  );
  f5.pipe(
    starsElements,
    readonlyArray.mapWithIndex((nth, starElement) => {
      starElement.addEventListener(
        "mousemove",
        f5.flow(
          calculateRatingFromMouseEvent(starElement, nth),
          f5.flip(setStarsGradientByRating)(starsSVGStops)
        )
      );
      starElement.addEventListener("click", onStarClick(nth, starsElements[nth], getTrackUri));
    })
  );
};
var loadRatings = async () => {
  const ratingsFolder = await fetchPlatFolder(CONFIG.ratingsFolderUri);
  const starsS2Narray = f5.pipe(
    nea.range(0, 10),
    ar3.map((s) => [starsN2S(s), s]),
    record.fromEntries
  );
  playlistUris = f5.pipe(
    ratingsFolder.items,
    ar3.map((p) => [p.type, p.uri, starsS2Narray[p.name]]),
    ar3.reduce(
      [],
      (acc, [type, uri, starsN]) => (type === "playlist" && starsN ? acc[starsN] = uri : [], acc)
    )
  );
  globalThis.tracksRatings = tracksRatings = await f5.pipe(
    playlistUris,
    ar3.map(fetchPlatPlaylistContents),
    (ps) => Promise.all(ps),
    // Promise.all flips empty to undefined
    pMchain(ar3.map((tracks) => tracks ?? [])),
    pMchain(ar3.map(ar3.map((t) => t.uri))),
    pMchain(ar3.flatMap((trackUris, rating) => trackUris.map((trackUri) => [trackUri, rating]))),
    pMchain(
      ar3.reduce(
        {},
        (acc, [trackUri, rating]) => Object.assign(acc, {
          [trackUri]: Math.max(rating, acc[trackUri] ?? 0)
        })
      )
    )
  );
};
var playlistUris = [];
var tracksRatings = {};

// extensions/star-ratings/app.ts
var { URI: URI2 } = Spicetify;
var customTrackListColCss = [
  null,
  null,
  null,
  null,
  "[index] 16px [first] 4fr [var1] 2fr [var2] 1fr [last] minmax(120px,1fr)",
  "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] 2fr [last] minmax(120px,1fr)",
  "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] minmax(120px,2fr) [var3] 2fr [last] minmax(120px,1fr)"
];
loadRatings();
var updateTrackListStars = f6.flow(
  getTrackLists,
  ar4.map((trackList) => {
    const trackListTracks = getTrackListTracks(trackList);
    if (trackListTracks.length === 0)
      return;
    const hasStars = (parent) => parent.getElementsByClassName("stars").length > 0;
    const locationUri = URI2.fromString(Spicetify.Platform.History.location.pathname);
    const firstElement = URI2.isArtist(locationUri) ? trackListTracks[0] : getTrackListHeader(trackList) ?? trackListTracks[0];
    const [lastColIndex] = getLastColIndex(firstElement);
    const newTrackListColCss = customTrackListColCss[lastColIndex - f6.pipe(firstElement, hasStars, Number)];
    if (!newTrackListColCss)
      return;
    firstElement.style.gridTemplateColumns = newTrackListColCss;
    f6.pipe(
      trackListTracks,
      ar4.map((track) => {
        const heart = getFirstPlus(track);
        if (heart)
          heart.style.display = CONFIG.hideHearts ? "none" : "flex";
        if (hasStars(track))
          return;
        let ratingColumn = track.querySelector(".starRatings");
        if (!ratingColumn) {
          const lastColumn = track.querySelector(".main-trackList-rowSectionEnd");
          const colIndex = Number(lastColumn?.getAttribute("aria-colindex"));
          ratingColumn = document.createElement("div");
          ratingColumn.setAttribute("aria-colindex", String(colIndex));
          lastColumn?.setAttribute("aria-colindex", String(colIndex + 1));
          ratingColumn.role = "gridcell";
          ratingColumn.style.display = "flex";
          ratingColumn.classList.add("main-trackList-rowSectionVariable");
          ratingColumn.classList.add("starRatings");
          track.insertBefore(ratingColumn, lastColumn);
          track.style.gridTemplateColumns = newTrackListColCss;
        }
        const trackUri = getTrackListTrackUri(track);
        const uri = URI2.fromString(trackUri);
        if (!URI2.isTrack(uri))
          return;
        const [starsContainer, starsConstructs] = createStars(uri.id, STAR_SIZE);
        ratingColumn.appendChild(starsContainer);
        f6.pipe(
          starsConstructs,
          ar4.unzip,
          ([_, starsStops]) => starsStops,
          setStarsGradientByRating(tracksRatings[trackUri] ?? 0)
        );
        addRatingsListenersToStars([starsContainer, starsConstructs], () => trackUri);
        const setVisibleCond = () => starsContainer.style.visibility = tracksRatings[trackUri] ? "visible" : "hidden";
        track.addEventListener("mouseover", () => starsContainer.style.visibility = "visible");
        track.addEventListener("mouseout", setVisibleCond);
        setVisibleCond();
      })
    );
  })
);
var mainElement;
var mainElementObserver = new MutationObserver(() => CONFIG.showInTrackLists ? updateTrackListStars() : void 0);
new MutationObserver(() => {
  const oldMainElement = mainElement;
  mainElement = document.querySelector("main");
  if (mainElement && !mainElement.isEqualNode(oldMainElement)) {
    if (oldMainElement)
      mainElementObserver.disconnect();
    mainElementObserver.observe(mainElement, {
      childList: true,
      subtree: true
    });
  }
}).observe(document.body, {
  childList: true,
  subtree: true
});
var updateCollectionStars = async (pathname, starsStops) => {
  const uri = URI2.fromString(pathname);
  if (!starsStops)
    starsStops = getStarsStops("collection");
  let uris;
  if (URI2.isAlbum(uri))
    uris = f6.pipe(
      await fetchGQLAlbum(`${uri}`),
      (x) => x.tracks.items,
      ar4.map((x) => x.track.uri)
    );
  else if (URI2.isArtist(uri))
    uris = f6.pipe(
      await fetchPlatArtistLikedTracks(`${uri}`),
      ar4.map((x) => x.uri)
    );
  else if (URI2.isPlaylistV1OrV2(uri))
    uris = f6.pipe(
      await fetchPlatPlaylistContents(`${uri}`),
      ar4.map((x) => x.uri)
    );
  else
    throw "me out the window";
  setStarsGradientByRating(aggregateRatings(uris))(starsStops);
};
var lastCollectionPlayButton;
Spicetify.Platform.History.listen(async ({ pathname }) => {
  const pageHasHeart = anyPass([URI2.isAlbum, URI2.isArtist, URI2.isPlaylistV1OrV2]);
  if (!pageHasHeart(pathname))
    return;
  lastCollectionPlayButton = await waitForElement(
    ".main-actionBar-ActionBar .main-playButton-PlayButton",
    0,
    document.body,
    lastCollectionPlayButton
  );
  const [collectionStarsContainer, collectionStarsConstructs] = createStars("collection", STAR_SIZE * 2);
  getStarsContainer("collection")?.remove();
  lastCollectionPlayButton.after(collectionStarsContainer);
  const collectionStarsStops = f6.pipe(collectionStarsConstructs, ar4.unzip, ([_, starsStops]) => starsStops);
  updateCollectionStars(pathname, collectionStarsStops);
});
var createNowPlayingStars = () => {
  if (document.querySelectorAll(".stars-now-playing").length !== 0)
    return;
  const nowPlayingElementSelector = CONFIG.nowPlayingStarsOnRight ? ".main-nowPlayingBar-extraControls" : ".main-nowPlayingWidget-trackInfo";
  const nowPlayingElement = document.querySelector(nowPlayingElementSelector);
  if (!nowPlayingElement)
    return;
  const [nowPlayingStarsContainer, nowPlayingStarConstruct] = createStars("now-playing", STAR_SIZE);
  nowPlayingStarsContainer.style.display = "none";
  nowPlayingStarsContainer.style.marginLeft = "8px";
  nowPlayingStarsContainer.style.marginRight = "8px";
  if (!CONFIG.nowPlayingStarsOnRight)
    nowPlayingElement.after(nowPlayingStarsContainer);
  else
    nowPlayingElement.prepend(nowPlayingStarsContainer);
  addRatingsListenersToStars(
    [nowPlayingStarsContainer, nowPlayingStarConstruct],
    () => Spicetify.Player.data.track?.uri
  );
};
createNowPlayingStars();
var updateNowPlayingStars = () => {
  const trackUri = Spicetify.Player.data.track?.uri;
  const nowPlayingStarsContainer = getStarsContainer("now-playing");
  nowPlayingStarsContainer.style.display = Spicetify.URI.isTrack(trackUri) ? "flex" : "none";
  f6.pipe(nowPlayingStarsContainer, setStarsGradientFromContainerByRating(tracksRatings[trackUri] ?? 0));
};
Spicetify.Player.addEventListener("songchange", () => {
  const trackUri = Spicetify.Player.data.item.uri;
  if (Number(CONFIG.skipThreshold) && (tracksRatings[trackUri] || Number.MAX_SAFE_INTEGER) <= starsS2N(CONFIG.skipThreshold))
    return Spicetify.Player.next();
  updateNowPlayingStars();
});
updateNowPlayingStars();
export {
  updateNowPlayingStars
};
