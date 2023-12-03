// extensions/sort-plus/app.ts
import {
  array as ar2,
  eq as eq2,
  function as f4,
  nonEmptyArray as nea,
  number as num,
  option as o,
  ord,
  record as rec2,
  string as str2,
  task as task3
} from "https://esm.sh/fp-ts";
import { guard as guard2 } from "https://esm.sh/fp-ts-std/Function";
import { anyPass } from "https://esm.sh/fp-ts-std/Predicate";
import { values } from "https://esm.sh/fp-ts-std/Record";

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
var objConcat2 = () => rec.getUnionSemigroup(sg.first()).concat;
var objConcat = () => ar.reduce({}, objConcat2());
var pMchain = (f5) => async (fa) => f5(await fa);
var is = (c) => (a3) => (field) => field[c] === a3;
var tapAny = (f5) => (fa) => {
  f5(fa);
  return fa;
};
var chunckify = (n) => (g) => f.flow(ar.chunksOf(n), ar.map(g), (ps) => Promise.all(ps), pMchain(ar.flatten));
var withProgress = (map) => (f5) => (fa) => {
  let i = 0;
  let lastProgress = 0;
  return map(async (...a3) => {
    const ret = await f5(...a3);
    const progress = Math.round(i++ / Object.values(fa).length * 100);
    if (progress > lastProgress) {
      Spicetify.Snackbar.updater.enqueueSetState(Spicetify.Snackbar, () => ({
        snacks: [],
        queue: []
      }));
      Spicetify.Snackbar.enqueueSnackbar(`Loading: ${progress}%`, {
        variant: "default",
        autoHideDuration: 200,
        transitionDuration: {
          enter: 0,
          exit: 0
        }
      });
    }
    lastProgress = progress;
    return ret;
  })(fa);
};
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
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var createQueueItem = (queued) => (uri) => ({
  contextTrack: {
    uri,
    uid: "",
    metadata: {
      is_queued: queued.toString()
    }
  },
  removed: [],
  blocked: [],
  provider: queued ? "queue" : "context"
});
var setQueue = async (nextTracks) => {
  const { _queue, _client } = Spicetify.Platform.PlayerAPI._queue;
  const { prevTracks, queueRevision } = _queue;
  return _client.setQueue({
    nextTracks,
    prevTracks,
    queueRevision
  });
};
var setPlayingContext = (uri) => {
  const { sessionId } = Spicetify.Platform.PlayerAPI.getState();
  return Spicetify.Platform.PlayerAPI.updateContext(sessionId, { uri, url: "context://" + uri });
};

// shared/api.ts
import { array as a2, function as f3 } from "https://esm.sh/fp-ts";
var fetchGQLAlbum = async (uri, offset = 0, limit = 487) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum, {
  uri,
  locale: Spicetify.Locale.getLocale(),
  offset,
  limit
})).data.albumUnion;
var fetchGQLArtistOverview = async (uri) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistOverview, {
  uri,
  locale: Spicetify.Locale.getLocale(),
  includePrerelease: true
})).data.artistUnion;
var fetchGQLArtistDiscography = async (uri, offset = 0, limit = 116) => (await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistDiscographyAll, {
  uri,
  offset,
  limit
})).data.artistUnion.discography.all.items;
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
var fetchPlatLikedTracks = async () => (await Spicetify.Platform.LibraryAPI.getTracks({
  limit: Number.MAX_SAFE_INTEGER
})).items;
var fetchPlatArtistLikedTracks = async (uri, offset = 0, limit = 100) => (await Spicetify.Platform.LibraryAPI.getTracks({ uri, offset, limit })).items;
var fetchPlatPlaylistContents = async (uri) => (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items;
var createPlatFolder = async (name, location = {}) => await Spicetify.Platform.RootlistAPI.createFolder(name, location);
var createSPPlaylistFromTracks = (name, tracks, folder) => Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist?responseFormat=protobufJson", {
  operation: "create",
  ...folder ? { after: folder } : {},
  name,
  playlist: true,
  uris: tracks
});
var setPlatPlaylistVisibility = async (playlist, visibleForAll) => await Spicetify.Platform.PlaylistPermissionsAPI.setBasePermission(playlist, visibleForAll ? "VIEWER" : "BLOCKED");
var fetchPlatFolder = async (folder) => await Spicetify.Platform.RootlistAPI.getContents({ folderUri: folder });
var fetchPlatRootFolder = () => fetchPlatFolder(void 0);
var movePlatPlaylistTracks = async (playlist, tracks, location = {}) => await Spicetify.Platform.PlaylistAPI.move(playlist, tracks, location);
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

// shared/parse.ts
var parseTrackFromAlbum = ({ track }) => ({
  albumName: "",
  // gets filled in later
  albumUri: "",
  // gets filled in later
  artistName: track.artists.items[0].profile.name,
  artistUri: track.artists.items[0].uri,
  durationMilis: track.duration.totalMilliseconds,
  name: track.name,
  playcount: Number(track.playcount),
  popularity: void 0,
  releaseDate: -1,
  // gets filled in later
  uri: track.uri
});
var parseTopTrackFromArtist = (track) => ({
  albumName: void 0,
  albumUri: track.albumOfTrack.uri,
  artistName: track.artists.items[0].profile.name,
  artistUri: track.artists.items[0].uri,
  durationMilis: track.duration.totalMilliseconds,
  name: track.name,
  playcount: Number(track.playcount),
  popularity: void 0,
  releaseDate: void 0,
  uri: track.uri
});
var parsePlatTrackFromArtistLikedTracks = (track) => ({
  albumName: track.album.name,
  albumUri: track.album.uri,
  artistName: track.artists[0].name,
  artistUri: track.artists[0].uri,
  durationMilis: track.duration.milliseconds,
  name: track.name,
  playcount: void 0,
  popularity: void 0,
  releaseDate: void 0,
  uri: track.uri
});
var parseAPITrackFromPlaylist = (track) => ({
  albumName: track.album?.name,
  albumUri: track.album?.uri,
  artistName: track.artists[0].name,
  artistUri: track.artists[0].uri,
  durationMilis: track.duration.milliseconds,
  name: track.name,
  playcount: void 0,
  popularity: void 0,
  releaseDate: void 0,
  uid: track.uid,
  uri: track.uri
});
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
var parsePlatLikedTracks = (track) => ({
  albumName: track.album.name,
  albumUri: track.album.uri,
  artistName: track.artists[0].name,
  artistUri: track.artists[0].uri,
  durationMilis: track.duration.milliseconds,
  name: track.name,
  playcount: void 0,
  popularity: void 0,
  releaseDate: void 0,
  uri: track.uri
});

// extensions/sort-plus/settings.ts
import { task as task2 } from "https://esm.sh/fp-ts";

// shared/settings.tsx
import { task } from "https://esm.sh/fp-ts";

// shared/modules.ts
import { allPass } from "https://esm.sh/fp-ts-std@0.18.0/Predicate";
var require2 = webpackChunkopen.push([[Symbol("Dummy module to extract require method")], {}, (re) => re]);
var cache = Object.keys(require2.m).map((id) => require2(id));
var modules = cache.filter((module) => typeof module === "object").flatMap((module) => Object.values(module));
var functionModules = modules.filter((module) => typeof module === "function");
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
var SectionTitle = findModuleByStrings(functionModules, "textToHighlight", "textBase");
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

// extensions/sort-plus/settings.ts
var SORTED_PLAYLISTS_FOLDER_NAME = "Sorted Playlists";
var settings = new SettingsSection("Sort+", "sort-plus").addToggle({ id: "descending", desc: "Descending" }, task2.of(true)).addToggle({ id: "artistAllDiscography", desc: "All of the artist's Discography" }).addToggle({ id: "artistTopTracks", desc: "Top Tracks" }, task2.of(true)).addToggle({ id: "artistPopularReleases", desc: "Popular Releases" }, task2.of(true)).addToggle({ id: "artistSingles", desc: "Singles" }).addToggle({ id: "artistAlbums", desc: "Albums" }).addToggle({ id: "artistCompilations", desc: "Compilations" }).addToggle({ id: "artistLikedTracks", desc: "Liked Tracks" }, task2.of(true)).addInput({ id: "lastFmUsername", desc: "Last.fm Username", inputType: "text" }, task2.of("Username")).addInput(
  { id: "LFMApiKey", desc: "Last.fm API Key", inputType: "text" },
  task2.of("********************************")
).addInput(
  {
    id: "sortedPlaylistsFolderUri",
    desc: "Sorted Playlists folder uri",
    inputType: "text"
  },
  async () => (await createPlatFolder(SORTED_PLAYLISTS_FOLDER_NAME)).uri
);
settings.pushSettings();
var CONFIG = settings.toObject();

// extensions/sort-plus/app.ts
debugger;
var { URI } = Spicetify;
var SortBy = /* @__PURE__ */ ((SortBy2) => {
  SortBy2["SPOTIFY_PLAYCOUNT"] = "Spotify - Play Count";
  SortBy2["SPOTIFY_POPULARITY"] = "Spotify - Popularity";
  SortBy2["SPOTIFY_RELEASEDATE"] = "Spotify - Release Date";
  SortBy2["LASTFM_SCROBBLES"] = "LastFM - Scrobbles";
  SortBy2["LASTFM_PERSONALSCROBBLES"] = "LastFM - My Scrobbles";
  SortBy2["LASTFM_PLAYCOUNT"] = "LastFM - Play Count";
  return SortBy2;
})(SortBy || {});
var SortProp = /* @__PURE__ */ ((SortProp2) => {
  SortProp2["Spotify - Play Count"] = "playcount";
  SortProp2["Spotify - Popularity"] = "popularity";
  SortProp2["Spotify - Release Date"] = "releaseDate";
  SortProp2["LastFM - Scrobbles"] = "scrobbles";
  SortProp2["LastFM - My Scrobbles"] = "personalScrobbles";
  SortProp2["LastFM - Play Count"] = "lastfmPlaycount";
  return SortProp2;
})(SortProp || {});
var getAlbumTracks = async (uri) => {
  const albumRes = await fetchGQLAlbum(uri);
  const releaseDate = new Date(albumRes.date.isoString).getTime();
  const filler = {
    albumUri: albumRes.uri,
    albumName: albumRes.name,
    releaseDate
  };
  return f4.pipe(albumRes.tracks.items, ar2.map(f4.flow(parseTrackFromAlbum, (track) => Object.assign(track, filler))));
};
var getPlaylistTracks = f4.flow(fetchPlatPlaylistContents, pMchain(ar2.map(parseAPITrackFromPlaylist)));
async function getArtistTracks(uri) {
  const extractUriFromReleases = (x) => x.releases.items[0].uri;
  const getTracksFromAlbums = f4.flow(ar2.map(getAlbumTracks), (ps) => Promise.all(ps), pMchain(ar2.flatten));
  const allTracks = new Array();
  const add = (tracks) => {
    allTracks.push(...tracks);
  };
  const albumsLike = [];
  const albumsLikeReleases = [];
  if (CONFIG.artistAllDiscography) {
    const disc = await fetchGQLArtistDiscography(uri);
    albumsLikeReleases.push(...disc);
  } else {
    const disc = (await fetchGQLArtistOverview(uri)).discography;
    if (CONFIG.artistLikedTracks) {
      const likedTracks = await fetchPlatArtistLikedTracks(uri);
      f4.pipe(likedTracks, ar2.map(parsePlatTrackFromArtistLikedTracks), add);
    }
    if (CONFIG.artistTopTracks)
      f4.pipe(
        disc.topTracks.items,
        ar2.map((i) => i.track),
        ar2.map(parseTopTrackFromArtist),
        add
      );
    if (CONFIG.artistPopularReleases)
      albumsLike.push(...disc.popularReleasesAlbums.items.map((r) => r.uri));
    if (CONFIG.artistSingles)
      albumsLikeReleases.push(...disc.singles.items);
    if (CONFIG.artistAlbums)
      albumsLikeReleases.push(...disc.albums.items);
    if (CONFIG.artistCompilations)
      albumsLikeReleases.push(...disc.compilations.items);
  }
  albumsLike.push(...albumsLikeReleases.map(extractUriFromReleases));
  await f4.pipe(albumsLike, getTracksFromAlbums, pMchain(add));
  return await Promise.all(allTracks);
}
var fetchAPITracksFromTracks = f4.flow(
  ar2.map(({ uri }) => URI.fromString(uri).id),
  fetchWebTracksSpot,
  pMchain(ar2.map(parseAPITrackFromSpotify))
);
var fetchAlbumTracksFromTracks = f4.flow(
  nea.groupBy((track) => track.albumUri),
  withProgress(rec2.mapWithIndex)(async (albumUri, tracks) => {
    const uriEq = f4.pipe(
      str2.Eq,
      eq2.contramap((t) => t.uri)
    );
    const albumTracks = await getAlbumTracks(albumUri);
    return ar2.intersection(uriEq)(albumTracks, tracks);
  }),
  (o2) => Promise.all(Object.values(o2)),
  pMchain(ar2.flatten)
);
var populateTracksSpot = (propName) => (tracks) => f4.pipe(
  tracks,
  ar2.filter((x) => x[SortProp[propName]] == null),
  guard2([[str2.startsWith("Spotify - Play Count" /* SPOTIFY_PLAYCOUNT */), f4.constant(fetchAlbumTracksFromTracks)]])(
    f4.constant(fetchAPITracksFromTracks)
  )(propName),
  pMchain(ar2.concat(tracks)),
  pMchain(nea.groupBy((x) => x.uri)),
  pMchain(values),
  pMchain(ar2.map(objConcat()))
);
var populateTrackLastFM = async (track) => {
  const lastfmTrack = (await fetchTrackLFMAPI(CONFIG.LFMApiKey, track.artistName, track.name, CONFIG.lastFmUsername)).track;
  track.lastfmPlaycount = Number(lastfmTrack.listeners);
  track.scrobbles = Number(lastfmTrack.playcount);
  track.personalScrobbles = Number(lastfmTrack.userplaycount);
  return track;
};
var fetchTracks = f4.flow(
  tapAny((uri) => void (lastFetchedUri = uri)),
  guard2([
    [URI.isAlbum, getAlbumTracks],
    [URI.isArtist, getArtistTracks],
    [URI.isPlaylistV1OrV2, getPlaylistTracks],
    [URI.isCollection, f4.flow(fetchPlatLikedTracks, pMchain(ar2.map(parsePlatLikedTracks)))]
  ])(task3.of([]))
);
var populateTracks = guard2([
  [str2.startsWith("Spotify"), populateTracksSpot],
  [
    str2.startsWith("LastFM"),
    f4.constant(
      f4.flow(
        f4.pipe(withProgress(ar2.map)(populateTrackLastFM)),
        (ps) => Promise.all(ps)
      )
    )
  ]
])(f4.constant(task3.of([])));
var lastSortedQueue = [];
var _setQueue = (inverted) => async (queue) => {
  if (Spicetify.Platform.PlayerAPI._queue._queue === null)
    return void Spicetify.showNotification("Queue is null!", true);
  const uriOrd = f4.pipe(
    str2.Ord,
    ord.contramap((t) => t.uri)
  );
  lastSortedQueue = f4.pipe(queue, ar2.uniq(uriOrd), inverted ? ar2.reverse : f4.identity);
  globalThis.lastSortedQueue = lastSortedQueue;
  const isQueued = URI.isCollection(lastFetchedUri);
  await f4.pipe(
    lastSortedQueue,
    ar2.map((t) => t.uri),
    ar2.concat(["spotify:separator"]),
    ar2.map(createQueueItem(isQueued)),
    setQueue
  );
  if (!isQueued)
    await setPlayingContext(lastFetchedUri);
  await Spicetify.Platform.PlayerAPI.skipToNext();
};
var lastFetchedUri;
var lastActionName;
var sortByProp = (name) => async (uri) => {
  lastActionName = name;
  const descending = invertOrder ^ Number(CONFIG.descending);
  const propOrd = f4.pipe(
    num.Ord,
    ord.contramap((t) => t[SortProp[name]])
  );
  f4.pipe(
    uri,
    fetchTracks,
    pMchain(populateTracks(name)),
    pMchain(ar2.map((x) => x[SortProp[name]] != null ? o.some(x) : o.none)),
    pMchain(ar2.sequence(o.Applicative)),
    pMchain(o.map(ar2.sort(propOrd))),
    pMchain(o.map(_setQueue(!!descending)))
  );
};
var invertOrder = 0;
addEventListener("keydown", (event) => {
  if (!event.repeat && event.key === "Control")
    invertOrder = 1;
});
addEventListener("keyup", (event) => {
  if (!event.repeat && event.key === "Control")
    invertOrder = 0;
});
var sortTracksWith = (name, sortFn) => (uri) => {
  lastActionName = name;
  const descending = invertOrder ^ Number(CONFIG.descending);
  f4.pipe(uri, fetchTracks, pMchain(sortFn), pMchain(_setQueue(!!descending)));
};
var shuffle = (array, l = array.length) => l == 0 ? [] : [array.splice(Math.floor(Math.random() * l), 1)[0], ...shuffle(array)];
var shuffleSubmenu = new Spicetify.ContextMenu.Item(
  "True Shuffle",
  ([uri]) => sortTracksWith("True Shuffle", shuffle)(uri),
  f4.constTrue,
  "shuffle",
  false
);
var starsOrd = f4.pipe(
  num.Ord,
  ord.contramap((t) => globalThis.tracksRatings[t.uri] ?? 0)
);
var starsSubmenu = new Spicetify.ContextMenu.Item(
  "Stars",
  ([uri]) => sortTracksWith("Stars", ar2.sort(starsOrd))(uri),
  () => globalThis.tracksRatings !== void 0,
  "heart-active",
  false
);
var createSortByPropSubmenu = (name, icon) => new Spicetify.ContextMenu.Item(name, ([uri]) => sortByProp(name)(uri), f4.constTrue, icon, false);
new Spicetify.ContextMenu.SubMenu(
  "Sort by",
  ar2.zipWith(
    values(SortBy),
    ["play", "heart", "list-view", "volume", "artist", "subtitles"],
    createSortByPropSubmenu
  ).concat([shuffleSubmenu, starsSubmenu]),
  ([uri]) => anyPass([URI.isAlbum, URI.isArtist, URI.isPlaylistV1OrV2, URI.isCollection])(uri)
).register();
var generatePlaylistName = async () => {
  const uri = URI.fromString(lastFetchedUri);
  const id = uri.id;
  let res = [];
  switch (uri.type) {
    case URI.Type.ALBUM:
      res = await fetchWebAlbumsSpot([id]);
      break;
    case URI.Type.ARTIST:
      res = await fetchWebArtistsSpot([id]);
      break;
    case URI.Type.COLLECTION:
      res = [{ name: "Liked Tracks" }];
      break;
    case URI.Type.PLAYLIST:
    case URI.Type.PLAYLIST_V2:
      res = await fetchWebPlaylistsSpot([id]);
      break;
  }
  return `${res[0]?.name ?? "Error"} - ${lastActionName}`;
};
new Spicetify.Topbar.Button("Add Sorted Queue to Sorted Playlists", "plus2px", async () => {
  if (lastSortedQueue.length === 0) {
    Spicetify.showNotification("Must sort to queue beforehand");
    return;
  }
  const sortedPlaylistsFolder = await fetchPlatFolder(CONFIG.sortedPlaylistsFolderUri).catch(fetchPlatRootFolder);
  const playlistName = await generatePlaylistName();
  const { uri } = await createSPPlaylistFromTracks(
    playlistName,
    lastSortedQueue.map((t) => t.uri),
    sortedPlaylistsFolder.uri
  );
  setPlatPlaylistVisibility(uri, false);
  Spicetify.showNotification(`Playlist ${playlistName} created`);
});
new Spicetify.Topbar.Button("Reorder Playlist with Sorted Queue", "chart-down", async () => {
  if (lastSortedQueue.length === 0) {
    Spicetify.showNotification("Must sort to queue beforehand");
    return;
  }
  if (!URI.isPlaylistV1OrV2(lastFetchedUri)) {
    Spicetify.showNotification("Last sorted queue must be a playlist");
    return;
  }
  f4.pipe(
    lastSortedQueue.map((t) => ({ uid: t.uid })),
    withProgress(ar2.map)(
      (t) => void movePlatPlaylistTracks(lastFetchedUri, [t], SpotifyLoc.after.end())
    )
  );
});
