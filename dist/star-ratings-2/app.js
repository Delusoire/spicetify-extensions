// extensions/star-ratings-2/app.ts
import { anyPass } from "https://esm.sh/fp-ts-std/Predicate";

// extensions/star-ratings-2/controls.tsx
import { array as ar3, function as f4 } from "https://esm.sh/fp-ts";

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
var is = (c) => (a2) => (field) => field[c] === a2;
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
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// shared/api.ts
var fetchGQLAlbum = async (uri, offset = 0, limit = 487) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum, {
  uri,
  locale: Spicetify.Locale.getLocale(),
  offset,
  limit
})).data.albumUnion;
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
var removePlatPlaylistTracks = async (playlist, tracks) => Spicetify.Platform.PlaylistAPI.remove(playlist, tracks);
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

// extensions/star-ratings-2/dropdown.tsx
import { range } from "https://esm.sh/fp-ts/lib/ReadonlyNonEmptyArray";

// extensions/star-ratings-2/ratings.ts
import { array as ar2, function as f3 } from "https://esm.sh/fp-ts";

// extensions/star-ratings-2/settings.ts
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
var findModuleByItsString = (modules2, ...filters) => modules2.find(
  (f5) => allPass(
    filters.map(
      (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
    )
  )(f5.toString())
);
var CheckedPlaylistButtonIcon = findModuleByItsString(
  functionModules,
  "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
);
var SectionWrapper = findModuleByItsString(functionModules, /^function .\(.\)\{return\(0,.\.jsx\)\(/);
var SectionTitle = findModuleByItsString(functionModules, "textToHighlight");
var SettingColumn = findModuleByItsString(
  functionModules,
  "setSectionFilterMatchQueryValue",
  "filterMatchQuery"
);
var SettingText = findModuleByItsString(functionModules, "textSubdued", "viola");
var SettingToggle = findModuleByItsString(functionModules, "condensed", "onSelected");
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
    this.FieldsContainer = () => /* @__PURE__ */ React.createElement(SectionWrapper, { filterMatchQuery: this.name }, /* @__PURE__ */ React.createElement(SectionTitle, null, this.name), Object.values(this.sectionFields).map((field) => {
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

// extensions/star-ratings-2/settings.ts
var RATINGS_FOLDER_NAME = "Ratings";
var settings = new SettingsSection("Star Ratings 2", "star-ratings-2").addInput({ id: "heartThreshold", desc: "Threshold for liking trakcs", inputType: "number" }, task2.of("3")).addInput({ id: "skipThreshold", desc: "Threshold for skipping trakcs", inputType: "number" }, task2.of("1")).addInput(
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

// extensions/star-ratings-2/util.ts
var getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-indexable"));
var getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll("div.main-trackList-trackListRow"));
var getTrackListTrackUri = (track) => (track = Object.values(track)[0].child.child.child.child, track.pendingProps.uri ?? track.child.pendingProps.uri);
var getNowPlayingBar = () => document.querySelector("div.main-nowPlayingBar-nowPlayingBar");
var getCollectionActionBarRow = () => document.querySelector(`div.main-actionBar-ActionBarRow`);
var playlistButtonSelector = `button[aria-label="Add to Liked Songs"], button[aria-label="Add to playlist"], button[aria-label="Remove recommendation"]`;
var getPlaylistButton = (parent) => parent.querySelector(playlistButtonSelector);
var getCollectionPlaylistButton = () => {
  const ab = getCollectionActionBarRow();
  return ab.querySelector(
    `button[aria-label="Remove from Your Library"], button[aria-label="Save to Your Library"]`
  );
};

// extensions/star-ratings-2/ratings.ts
var loadRatings = async () => {
  const ratingsFolder = await fetchPlatFolder(CONFIG.ratingsFolderUri);
  playlistUris = f3.pipe(
    ratingsFolder.items,
    ar2.map((p) => [p.uri, Number(p.name)]),
    ar2.reduce([], (uris, [uri, rating]) => (uris[rating] = uri, uris))
  );
  globalThis.tracksRatings = tracksRatings = await f3.pipe(
    playlistUris,
    ar2.map(fetchPlatPlaylistContents),
    (ps) => Promise.all(ps),
    // Promise.all flips empty to undefined
    pMchain(ar2.map((tracks) => tracks ?? [])),
    pMchain(ar2.map(ar2.map((t) => t.uri))),
    pMchain(ar2.flatMap((trackUris, rating) => trackUris.map((trackUri) => [trackUri, rating]))),
    pMchain(
      ar2.reduce(
        {},
        (acc, [trackUri, rating]) => Object.assign(acc, {
          [trackUri]: Math.max(rating, acc[trackUri] ?? 0)
        })
      )
    )
  );
};
var toggleRating = async (uri, rating) => {
  const currentRating = tracksRatings[uri];
  if (currentRating === rating)
    rating = 0;
  if (currentRating) {
    f3.pipe(
      playlistUris.slice(0, currentRating + 1),
      ar2.filter(Boolean),
      ar2.map((playlistUri) => Spicetify.URI.fromString(playlistUri).id),
      ar2.map((playlistId) => removePlatPlaylistTracks(playlistId, [{ uri, uid: "" }]))
    );
  }
  tracksRatings[uri] = rating;
  if (rating > 0) {
    let playlistUri = playlistUris[rating];
    if (!playlistUri) {
      playlistUri = await createPlatPlaylist(rating.toFixed(0), SpotifyLoc.after.fromUri(CONFIG.ratingsFolderUri));
      setPlatPlaylistVisibility(playlistUri, false);
      playlistUris[rating] = playlistUri;
    }
    addPlatPlaylistTracks(playlistUri, [uri]);
  }
  const npTrack = Spicetify.Player.data.track?.uri;
  if (npTrack === uri) {
    updateNowPlayingControls(npTrack, false);
    {
      const npTrack2 = Spicetify.Player.data.track?.uri;
      const nowPlaylingControlsObserver = new MutationObserver(() => {
        if (npTrack2 === uri) {
          nowPlaylingControlsObserver.disconnect();
        }
        updateNowPlayingControls(npTrack2, false);
      });
      nowPlaylingControlsObserver.observe(getNowPlayingBar(), {
        subtree: true
      });
    }
  }
  updateTrackListControls();
  const { pathname } = Spicetify.Platform.History.location;
  updateCollectionControls(Spicetify.URI.fromString(pathname));
};
var playlistUris = [];
var tracksRatings = {};

// extensions/star-ratings-2/dropdown.tsx
var { React: React2 } = Spicetify;
var { ButtonTertiary } = Spicetify.ReactComponent;
var RatingButton = ({ i, uri }) => /* @__PURE__ */ React2.createElement(
  ButtonTertiary,
  {
    size: "small",
    className: `${curationButtonClass} rating-${i}`,
    "aria-checked": "true",
    "aria-label": "",
    condensed: "true",
    iconOnly: CheckedPlaylistButtonIcon,
    semanticColor: "textBrightAccent",
    onClick: (e) => toggleRating(uri, i)
  }
);
var Dropdown = ({ uri }) => /* @__PURE__ */ React2.createElement("div", { className: "rating-dropdown" }, range(1, 5).map((i) => /* @__PURE__ */ React2.createElement(RatingButton, { i, uri })));

// extensions/star-ratings-2/controls.tsx
var { URI } = Spicetify;
var { React: React3, ReactDOM: ReactDOM2 } = Spicetify;
var UNSET_CSS = "invalid";
var colorByRating = [UNSET_CSS, "#ED5564", "#FFCE54", "A0D568", "#4FC1E8", "#AC92EB"];
var colorizePlaylistButton = (btn, rating) => {
  if (btn.style.fill === colorByRating[rating])
    return;
  btn.style.opacity = rating > 0 ? "1" : UNSET_CSS;
  const svg = btn.querySelector("svg");
  svg.style.fill = colorByRating[rating];
};
var lastNPTippyInstance;
var wrapDropdownInsidePlaylistButton = (pb, uri, forced = false) => {
  if (pb.hasAttribute("dropdown-enabled")) {
    if (!forced)
      return;
  } else
    pb.setAttribute("dropdown-enabled", "");
  const div = document.createElement("div");
  pb.appendChild(div);
  ReactDOM2.render(/* @__PURE__ */ React3.createElement(Dropdown, { uri }), div);
  const tippyInstance = Spicetify.Tippy(pb, {
    content: div,
    interactive: true,
    animateFill: false,
    //offset: [0, 7],
    placement: "left",
    animation: "fade",
    //trigger: "mouseenter focus",
    zIndex: 1e4,
    delay: [200, 0],
    render(instance) {
      const popper = document.createElement("div");
      const box = document.createElement("div");
      popper.id = "context-menu";
      popper.appendChild(box);
      box.className = "main-contextMenu-tippy";
      box.appendChild(instance.props.content);
      return { popper, onUpdate: f4.constVoid };
    },
    onShow(instance) {
      instance.popper.firstChild.classList.add("main-contextMenu-tippyEnter");
      const children = instance.reference.parentElement.children;
      const element = children.item(children.length - 1);
      element.style.marginRight = "0px";
    },
    onMount(instance) {
      requestAnimationFrame(() => {
        instance.popper.firstChild.classList.remove("main-contextMenu-tippyEnter");
        instance.popper.firstChild.classList.add("main-contextMenu-tippyEnterActive");
      });
    },
    onHide(instance) {
      requestAnimationFrame(() => {
        instance.popper.firstChild.classList.remove("main-contextMenu-tippyEnterActive");
        const children = instance.reference.parentElement.children;
        const element = children.item(children.length - 2);
        element.style.marginRight = "unset";
        instance.unmount();
      });
    }
  });
  if (forced) {
    lastNPTippyInstance?.destroy();
    lastNPTippyInstance = tippyInstance;
  }
};
var updateNowPlayingControls = (newTrack, updateDropdown = true) => {
  const npb = getNowPlayingBar();
  const pb = getPlaylistButton(npb);
  colorizePlaylistButton(pb, tracksRatings[newTrack]);
  if (updateDropdown)
    wrapDropdownInsidePlaylistButton(pb, newTrack, true);
};
var updateTrackListControls = (updateDropdown = true) => {
  const trackLists = getTrackLists();
  f4.pipe(
    trackLists,
    ar3.map((trackList) => {
      const trackListTracks = getTrackListTracks(trackList);
      trackListTracks.map((track) => {
        const uri = URI.fromString(getTrackListTrackUri(track)).toURI();
        if (!URI.isTrack(uri))
          return;
        const r = tracksRatings[uri];
        const pb = getPlaylistButton(track);
        colorizePlaylistButton(pb, r);
        if (updateDropdown)
          wrapDropdownInsidePlaylistButton(pb, uri);
      });
    })
  );
};
var updateCollectionControls = async (uri) => {
  let uris;
  if (URI.isAlbum(uri))
    uris = f4.pipe(
      await fetchGQLAlbum(`${uri}`),
      (x) => x.tracks.items,
      ar3.map((x) => x.track.uri)
    );
  else if (URI.isArtist(uri))
    uris = f4.pipe(
      await fetchPlatArtistLikedTracks(`${uri}`),
      ar3.map((x) => x.uri)
    );
  else if (URI.isPlaylistV1OrV2(uri))
    uris = f4.pipe(
      await fetchPlatPlaylistContents(`${uri}`),
      ar3.map((x) => x.uri)
    );
  else
    throw "me out the window";
  const ratings = uris.map((uri2) => tracksRatings[uri2]).filter(Boolean);
  const rating = Math.round(ratings.reduce((psum, r) => psum + r, 0) / ratings.length);
  const pb = getCollectionPlaylistButton();
  colorizePlaylistButton(pb, rating);
};

// extensions/star-ratings-2/app.ts
var { URI: URI2 } = Spicetify;
loadRatings();
Spicetify.Player.addEventListener("songchange", () => {
  const npTrack = Spicetify.Player.data.track?.uri;
  if (Number(CONFIG.skipThreshold) && (tracksRatings[npTrack] || Number.MAX_SAFE_INTEGER) <= Number(CONFIG.skipThreshold))
    return void Spicetify.Player.next();
  updateNowPlayingControls(npTrack);
});
updateNowPlayingControls(Spicetify.Player.data.track?.uri);
var mainElement;
var mainElementObserver = new MutationObserver(() => updateTrackListControls());
new MutationObserver(() => {
  const nextMainElement = document.querySelector("main");
  if (nextMainElement && !nextMainElement.isEqualNode(mainElement)) {
    if (mainElement)
      mainElementObserver.disconnect();
    mainElement = nextMainElement;
    mainElementObserver.observe(mainElement, {
      childList: true,
      subtree: true
    });
  }
}).observe(document.body, {
  childList: true,
  subtree: true
});
Spicetify.Platform.History.listen(({ pathname }) => {
  const pageHasHeart = anyPass([URI2.isAlbum, URI2.isArtist, URI2.isPlaylistV1OrV2]);
  if (!pageHasHeart(pathname))
    return;
  updateCollectionControls(URI2.fromString(pathname));
});
(async () => {
    if (!document.getElementById("star-ratings-2-css")) {
        const el = document.createElement("style")
        el.id = "star-ratings-2-css"
        
        el.textContent = "/* extensions/star-ratings-2/assets/styles.css */\nbutton.rating-1 svg {\n  fill: #ed5564 !important;\n}\nbutton.rating-2 svg {\n  fill: #ffce54 !important;\n}\nbutton.rating-3 svg {\n  fill: #a0d568 !important;\n}\nbutton.rating-4 svg {\n  fill: #4fc1e8 !important;\n}\nbutton.rating-5 svg {\n  fill: #ac92eb !important;\n}\n"
        document.head.appendChild(el)
    }
})()