// extensions/sort-plus/app.ts
import { function as f2 } from "https://esm.sh/fp-ts";

// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;
var fp = ld_fp;

// shared/util.ts
var { Player, URI } = Spicetify;
var { PlayerAPI, History } = Spicetify.Platform;
var SpotifyLoc = {
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
var setQueue = async (nextTracks, contextUri) => {
  const { _queue, _client } = PlayerAPI._queue;
  const { prevTracks, queueRevision } = _queue;
  const res = _client.setQueue({
    nextTracks,
    prevTracks,
    queueRevision
  });
  contextUri && await setPlayingContext(contextUri);
  return res;
};
var setPlayingContext = (uri) => {
  const { sessionId } = PlayerAPI._state;
  return PlayerAPI.updateContext(sessionId, { uri, url: "context://" + uri });
};

// shared/api.ts
import { SpotifyApi } from "https://esm.sh/@fostertheweb/spotify-web-api-ts-sdk";
var { Locale, GraphQL, CosmosAsync } = Spicetify;
var spotifyApi = SpotifyApi.withAccessToken("client-id", {}, {
  // @ts-ignore
  fetch(url, opts) {
    const { method } = opts;
    return CosmosAsync.resolve(method, url);
  },
  deserializer: {
    deserialize(res) {
      return res.body;
    }
  }
});
var fetchGQLAlbum = async (uri, offset = 0, limit = 487) => (await GraphQL.Request(GraphQL.Definitions.getAlbum, {
  uri,
  locale: Locale.getLocale(),
  offset,
  limit
})).data.albumUnion;
var fetchGQLArtistOverview = async (uri) => (await GraphQL.Request(GraphQL.Definitions.queryArtistOverview, {
  uri,
  locale: Locale.getLocale(),
  includePrerelease: true
})).data.artistUnion;
var fetchGQLArtistDiscography = async (uri, offset = 0, limit = 116) => (await GraphQL.Request(GraphQL.Definitions.queryArtistDiscographyAll, {
  uri,
  offset,
  limit
})).data.artistUnion;
var fetchLastFMTrack = async (LFMApiKey, artist, trackName, lastFmUsername = "") => {
  const url = new URL("https://ws.audioscrobbler.com/2.0/");
  url.searchParams.append("method", "track.getInfo");
  url.searchParams.append("api_key", LFMApiKey);
  url.searchParams.append("artist", artist);
  url.searchParams.append("track", trackName);
  url.searchParams.append("format", "json");
  url.searchParams.append("username", lastFmUsername);
  const res = await fetch(url).then((res2) => res2.json());
  return res.track;
};

// shared/fp.ts
import { array as ar, function as f, record as rec, semigroup as sg } from "https://esm.sh/fp-ts";
var { Snackbar } = Spicetify;
var pMchain = (f3) => async (fa) => f3(await fa);
var progressify = (f3, n) => {
  let i = n, lastProgress = 0;
  return async function(..._2) {
    const res = await f3(arguments), progress = Math.round((1 - --i / n) * 100);
    if (progress > lastProgress) {
      Snackbar.updater.enqueueSetState(Snackbar, () => ({
        snacks: [],
        queue: []
      }));
      Snackbar.enqueueSnackbar(`Loading: ${progress}%`, {
        variant: "default",
        autoHideDuration: 200,
        transitionDuration: {
          enter: 0,
          exit: 0
        }
      });
    }
    lastProgress = progress;
    return res;
  };
};

// shared/parse.ts
var parseTopTrackFromArtist = ({ track }) => ({
  uri: track.uri,
  uid: void 0,
  name: track.name,
  albumUri: track.albumOfTrack.uri,
  albumName: void 0,
  artistUri: track.artists.items[0].uri,
  artistName: track.artists.items[0].profile.name,
  durationMilis: track.duration.totalMilliseconds,
  playcount: Number(track.playcount),
  popularity: void 0,
  releaseDate: void 0
});
var parseArtistLikedTrack = (track) => ({
  uri: track.uri,
  uid: void 0,
  name: track.name,
  albumUri: track.album.uri,
  albumName: track.album.name,
  artistUri: track.artists[0].uri,
  artistName: track.artists[0].name,
  durationMilis: track.duration.milliseconds,
  playcount: void 0,
  popularity: void 0,
  releaseDate: void 0
});
var parseAlbumTrack = ({ track }) => ({
  uri: track.uri,
  uid: void 0,
  name: track.name,
  albumUri: "",
  // gets filled in later
  albumName: "",
  // gets filled in later
  artistUri: track.artists.items[0].uri,
  artistName: track.artists.items[0].profile.name,
  durationMilis: track.duration.totalMilliseconds,
  playcount: Number(track.playcount),
  popularity: void 0,
  releaseDate: -1
  // gets filled in later
});
var parsePlaylistAPITrack = (track) => ({
  uri: track.uri,
  uid: track.uid,
  name: track.name,
  albumUri: track.album.uri,
  albumName: track.album.name,
  artistUri: track.artists[0].uri,
  artistName: track.artists[0].name,
  durationMilis: track.duration.milliseconds,
  playcount: void 0,
  popularity: void 0,
  releaseDate: void 0
});
var parseWebAPITrack = (track) => ({
  uri: track.uri,
  uid: void 0,
  name: track.name,
  albumUri: track.album.uri,
  albumName: track.album.name,
  artistUri: track.artists[0].uri,
  artistName: track.artists[0].name,
  durationMilis: track.duration_ms,
  playcount: void 0,
  popularity: track.popularity,
  releaseDate: new Date(track.album.release_date).getTime()
});
var parseLibraryAPILikedTracks = (track) => ({
  uri: track.uri,
  uid: void 0,
  name: track.name,
  albumUri: track.album.uri,
  albumName: track.album.name,
  artistUri: track.artists[0].uri,
  artistName: track.artists[0].name,
  durationMilis: track.duration.milliseconds,
  playcount: void 0,
  popularity: void 0,
  releaseDate: void 0
});

// shared/platformApi.ts
var { CosmosAsync: CosmosAsync2 } = Spicetify;
var { LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform;
var fetchLikedTracks = async () => (await LibraryAPI.getTracks({
  limit: Number.MAX_SAFE_INTEGER
})).items;
var fetchArtistLikedTracks = async (uri, offset = 0, limit = 100) => (await LibraryAPI.getTracks({ uri, offset, limit })).items;
var fetchPlaylistContents = async (uri) => (await PlaylistAPI.getContents(uri)).items;
var createFolder = async (name, location = {}) => await RootlistAPI.createFolder(name, location);
var createPlaylistFromTracks = (name, tracks, folder) => CosmosAsync2.post("sp://core-playlist/v1/rootlist?responseFormat=protobufJson", {
  operation: "create",
  ...folder ? { after: folder } : {},
  name,
  playlist: true,
  uris: tracks
});
var setPlaylistVisibility = async (playlist, visibleForAll) => await PlaylistPermissionsAPI.setBasePermission(playlist, visibleForAll ? "VIEWER" : "BLOCKED");
var fetchFolder = async (folder) => await RootlistAPI.getContents({ folderUri: folder });
var fetchRootFolder = () => fetchFolder(void 0);
var movePlaylistTracks = async (playlist, uids, location = {}) => await PlaylistAPI.move(
  playlist,
  uids.map((uid) => ({ uid })),
  location
);

// extensions/sort-plus/settings.ts
import { task as task2 } from "https://esm.sh/fp-ts";

// shared/settings.tsx
import { task } from "https://esm.sh/fp-ts";

// shared/modules.ts
var require2 = webpackChunkopen.push([[Symbol("Dummy module to extract require method")], {}, (re) => re]);
var cache = Object.keys(require2.m).map((id) => require2(id));
var modules = cache.filter((module) => typeof module === "object").flatMap((module) => Object.values(module));
var functionModules = modules.filter((module) => typeof module === "function");
var findModuleByStrings = (modules2, ...filters) => modules2.find(
  (f3) => _.overEvery(
    filters.map(
      (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
    )
  )(f3.toString())
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
var { React, ReactDOM, LocalStorage } = Spicetify;
var { ButtonSecondary } = Spicetify.ReactComponent;
var { History: History2 } = Spicetify.Platform;
var SettingsSection = class _SettingsSection {
  constructor(name, id, sectionFields = {}) {
    this.name = name;
    this.id = id;
    this.sectionFields = sectionFields;
    this.pushSettings = () => {
      if (this.stopHistoryListener)
        this.stopHistoryListener();
      this.stopHistoryListener = History2.listen(() => this.render());
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
        if (History2.location.pathname !== "/preferences")
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
  async () => (await createFolder(SORTED_PLAYLISTS_FOLDER_NAME)).uri
);
settings.pushSettings();
var CONFIG = settings.toObject();

// extensions/sort-plus/fetch.ts
var getTracksFromAlbum = async (uri) => {
  const albumRes = await fetchGQLAlbum(uri);
  const releaseDate = new Date(albumRes.date.isoString).getTime();
  const filler = {
    albumUri: albumRes.uri,
    albumName: albumRes.name,
    releaseDate
  };
  return Promise.all(
    albumRes.tracks.items.map(async (track) => {
      const parsedTrack = await parseAlbumTrack(track);
      return Object.assign(parsedTrack, filler);
    })
  );
};
var getLikedTracks = _.flow(fetchLikedTracks, pMchain(fp.map(parseLibraryAPILikedTracks)));
var getTracksFromPlaylist = _.flow(fetchPlaylistContents, pMchain(fp.map(parsePlaylistAPITrack)));
var getTracksFromArtist = async (uri) => {
  const allTracks = new Array();
  const itemsWithCountAr = new Array();
  const itemsReleasesAr = new Array();
  if (CONFIG.artistAllDiscography) {
    const { discography } = await fetchGQLArtistDiscography(uri);
    itemsReleasesAr.push(discography.all);
  } else {
    const { discography } = await fetchGQLArtistOverview(uri);
    CONFIG.artistLikedTracks && allTracks.push(...(await fetchArtistLikedTracks(uri)).map(parseArtistLikedTrack));
    CONFIG.artistTopTracks && allTracks.push(...discography.topTracks.items.map(parseTopTrackFromArtist));
    CONFIG.artistPopularReleases && itemsWithCountAr.push(discography.popularReleasesAlbums);
    CONFIG.artistSingles && itemsReleasesAr.push(discography.singles);
    CONFIG.artistAlbums && itemsReleasesAr.push(discography.albums);
    CONFIG.artistCompilations && itemsReleasesAr.push(discography.compilations);
  }
  const items1 = itemsWithCountAr.flatMap((iwc) => iwc.items);
  const items2 = itemsReleasesAr.flatMap((ir) => ir.items.flatMap((i) => i.releases.items));
  const albumLikeUris = items1.concat(items2).map((item) => item.uri);
  const albumsTracks = await Promise.all(albumLikeUris.map(getTracksFromAlbum));
  allTracks.push(...albumsTracks.flat());
  return await Promise.all(allTracks);
};

// extensions/sort-plus/util.ts
var { URI: URI2 } = Spicetify;
var SEPARATOR_URI = "spotify:separator";
var SortAction = /* @__PURE__ */ ((SortAction2) => {
  SortAction2["SPOTIFY_PLAYCOUNT"] = "Spotify - Play Count";
  SortAction2["SPOTIFY_POPULARITY"] = "Spotify - Popularity";
  SortAction2["SPOTIFY_RELEASEDATE"] = "Spotify - Release Date";
  SortAction2["LASTFM_SCROBBLES"] = "LastFM - Scrobbles";
  SortAction2["LASTFM_PERSONALSCROBBLES"] = "LastFM - My Scrobbles";
  SortAction2["LASTFM_PLAYCOUNT"] = "LastFM - Play Count";
  return SortAction2;
})(SortAction || {});
var SortActionProp = /* @__PURE__ */ ((SortActionProp2) => {
  SortActionProp2["Spotify - Play Count"] = "playcount";
  SortActionProp2["Spotify - Popularity"] = "popularity";
  SortActionProp2["Spotify - Release Date"] = "releaseDate";
  SortActionProp2["LastFM - Scrobbles"] = "scrobbles";
  SortActionProp2["LastFM - My Scrobbles"] = "personalScrobbles";
  SortActionProp2["LastFM - Play Count"] = "lastfmPlaycount";
  return SortActionProp2;
})(SortActionProp || {});
var joinByUri = (...trackss) => {
  const tracks = [...trackss].flat();
  const uriTrackPairs = tracks.map((track) => [track.uri, track]);
  return Array.from(new Map(uriTrackPairs).values());
};
var URI_isLikedTracks = (uri) => {
  const uriObj = URI2.fromString(uri);
  return uriObj.type === URI2.Type.COLLECTION && uriObj.category === "tracks";
};
var getNameFromUri = async (uri) => {
  switch (uri.type) {
    case URI2.Type.ALBUM: {
      const album = await spotifyApi.albums.get(uri.id);
      return album.name;
    }
    case URI2.Type.ARTIST: {
      const artist = await spotifyApi.artists.get(uri.id);
      return artist.name;
    }
    case URI2.Type.COLLECTION:
      if (uri.category === "tracks")
        return "Liked Tracks";
      else
        break;
    case URI2.Type.PLAYLIST:
    case URI2.Type.PLAYLIST_V2: {
      const playlist = await spotifyApi.playlists.getPlaylist(uri.id);
      return playlist.name;
    }
  }
};

// extensions/sort-plus/playlistsInterop.ts
var { URI: URI3 } = Spicetify;
var createPlaylistFromLastSortedQueue = async () => {
  if (lastSortedQueue.length === 0) {
    Spicetify.showNotification("Must sort to queue beforehand" /* LAST_SORTED_QUEUE_EMPTY */);
    return;
  }
  const sortedPlaylistsFolder = await fetchFolder(CONFIG.sortedPlaylistsFolderUri).catch(fetchRootFolder);
  const uri = URI3.fromString(lastFetchedUri);
  const playlistName = `${getNameFromUri(uri)} - ${lastSortAction}`;
  const { palylistUri } = await createPlaylistFromTracks(
    playlistName,
    lastSortedQueue.map((t) => t.uri),
    sortedPlaylistsFolder.uri
  );
  setPlaylistVisibility(palylistUri, false);
  Spicetify.showNotification(`Playlist ${playlistName} created`);
};
var reordedPlaylistLikeSortedQueue = async () => {
  if (lastSortedQueue.length === 0) {
    Spicetify.showNotification("Must sort to queue beforehand" /* LAST_SORTED_QUEUE_EMPTY */);
    return;
  }
  if (!URI3.isPlaylistV1OrV2(lastFetchedUri)) {
    Spicetify.showNotification("Last sorted queue must be a playlist" /* LAST_SORTED_QUEUE_NOT_A_PLAYLIST */);
    return;
  }
  const fn = (uid) => movePlaylistTracks(lastFetchedUri, [uid], SpotifyLoc.after.end());
  await Promise.all(lastSortedQueue.map((track) => track.uid).map(fn));
};

// extensions/sort-plus/populate.ts
var { URI: URI4 } = Spicetify;
var fillTracksFromWebAPI = async (tracks) => {
  const ids = tracks.map((track) => URI4.fromString(track.uri).id);
  const fetchedTracks = (await spotifyApi.tracks.get(ids)).map(parseWebAPITrack);
  return joinByUri(tracks, fetchedTracks);
};
var fillTracksFromAlbumTracks = async (tracks) => {
  const tracksByAlbumUri = Object.groupBy(tracks, (track) => track.albumUri);
  const passes = Object.keys(tracksByAlbumUri).length;
  const fn = progressify(async (tracks2, albumUri) => {
    const albumTracks = await getTracksFromAlbum(albumUri);
    return _.intersectionBy(tracks2, albumTracks, (track) => track.uri);
  }, passes);
  const albumsTracks = await Promise.all(Object.values(_.mapValues(tracksByAlbumUri, fn)));
  return albumsTracks.flat();
};
var fillTracksFromSpotify = (propName) => async (tracks) => {
  const tracksMissing = tracks.filter((track) => track[SortActionProp[propName]] == null);
  const tracksPopulater = _.cond([
    [fp.startsWith("Spotify - Play Count" /* SPOTIFY_PLAYCOUNT */), () => fillTracksFromAlbumTracks],
    [_.stubTrue, () => fillTracksFromWebAPI]
  ])(propName);
  const filledTracks = await tracksPopulater(tracksMissing);
  return joinByUri(tracks, filledTracks);
};
var fillTrackFromLastFM = async (track) => {
  const lastfmTrack = await fetchLastFMTrack(CONFIG.LFMApiKey, track.artistName, track.name, CONFIG.lastFmUsername);
  track.lastfmPlaycount = Number(lastfmTrack.listeners);
  track.scrobbles = Number(lastfmTrack.playcount);
  track.personalScrobbles = Number(lastfmTrack.userplaycount);
  return track;
};
var fillTracksFromLastFM = (tracks) => {
  const fn = progressify(fillTrackFromLastFM, tracks.length);
  return Promise.all(tracks.map(fn));
};

// extensions/sort-plus/app.ts
debugger;
var { URI: URI5, ContextMenu, Topbar } = Spicetify;
var { PlayerAPI: PlayerAPI2 } = Spicetify.Platform;
var lastFetchedUri;
var lastSortAction;
var lastSortedQueue2 = [];
var invertOrder = 0;
addEventListener("keydown", (event) => {
  if (!event.repeat && event.key === "Control")
    invertOrder = 1;
});
addEventListener("keyup", (event) => {
  if (!event.repeat && event.key === "Control")
    invertOrder = 0;
});
var getTracksFromUri = _.flow(
  fp.tap((uri) => lastFetchedUri = uri),
  _.cond([
    [URI5.isAlbum, getTracksFromAlbum],
    [URI5.isArtist, getTracksFromArtist],
    [URI_isLikedTracks, getLikedTracks],
    [URI5.isPlaylistV1OrV2, getTracksFromPlaylist]
  ])
);
var populateTracks = _.cond([
  [fp.startsWith("Spotify"), fillTracksFromSpotify],
  [fp.startsWith("LastFM"), () => fillTracksFromLastFM]
]);
var _setQueue = (reverse) => async (tracks) => {
  if (PlayerAPI2?._state?.item?.uid == void 0)
    return void Spicetify.showNotification("Queue is null!", true);
  const dedupedQueue = _.uniqBy(tracks, (track) => track.uri);
  reverse && dedupedQueue.reverse();
  global.lastSortedQueue = lastSortedQueue2 = dedupedQueue;
  const isLikedTracks = URI_isLikedTracks(lastFetchedUri);
  const queue = _(lastSortedQueue2).map((track) => track.uri).concat([SEPARATOR_URI]).map(createQueueItem(isLikedTracks)).value();
  if (!isLikedTracks)
    await setPlayingContext(lastFetchedUri);
  setQueue(queue);
  return await PlayerAPI2.skipToNext();
};
var sortTracksBy = (sortAction, sortFn) => async (uri) => {
  lastSortAction = sortAction;
  const descending = invertOrder ^ Number(CONFIG.descending);
  const tracks = await getTracksFromUri(uri);
  const sortedTracks = await sortFn(tracks);
  return await _setQueue(!!descending)(sortedTracks);
};
var shuffle = (array, l = array.length) => l == 0 ? [] : [array.splice(Math.floor(Math.random() * l), 1)[0], ...shuffle(array)];
var sortTracksByShuffle = sortTracksBy("True Shuffle", shuffle);
var shuffleSubmenu = new ContextMenu.Item(
  "True Shuffle",
  ([uri]) => sortTracksByShuffle(uri),
  f2.constTrue,
  "shuffle",
  false
);
var sortTracksByStars = sortTracksBy(
  "Stars",
  fp.sortBy((track) => tracksRatings[track.uri] ?? 0)
);
var starsSubmenu = new ContextMenu.Item(
  "Stars",
  ([uri]) => sortTracksByStars(uri),
  () => tracksRatings !== void 0,
  "heart-active",
  false
);
var createSubMenuForSortProp = (name, icon) => new ContextMenu.Item(
  name,
  ([uri]) => {
    const sortActionProp = SortActionProp[name];
    const sortFn = async (tracks) => {
      const filledTracks = await populateTracks(name)(tracks);
      const filteredTracks = filledTracks.filter((track) => track[sortActionProp] != null);
      return _.sortBy(filteredTracks, sortActionProp);
    };
    sortTracksBy(name, sortFn)(uri);
  },
  _.stubTrue,
  icon,
  false
);
new ContextMenu.SubMenu(
  "Sort by",
  _.zipWith(
    Object.values(SortAction),
    ["play", "heart", "list-view", "volume", "artist", "subtitles"],
    createSubMenuForSortProp
  ).concat([shuffleSubmenu, starsSubmenu]),
  ([uri]) => _.overSome([URI5.isAlbum, URI5.isArtist, URI_isLikedTracks, URI5.isTrack, URI5.isPlaylistV1OrV2])(uri)
).register();
new Topbar.Button("Create a Playlist from Sorted Queue", "plus2px", createPlaylistFromLastSortedQueue);
new Topbar.Button("Reorder current Playlist like Sorted Queue", "chart-down", reordedPlaylistLikeSortedQueue);
export {
  lastFetchedUri,
  lastSortAction,
  lastSortedQueue2 as lastSortedQueue
};
