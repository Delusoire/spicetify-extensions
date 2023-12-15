// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;
var fp = ld_fp;

// shared/util.ts
var { URI } = Spicetify;
var { PlayerAPI } = Spicetify.Platform;
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
var mainElement = document.querySelector("main");
var [REACT_FIBER, REACT_PROPS] = Object.keys(mainElement);
var createQueueItem = (queued) => ({ uri, uid = "" }) => ({
  contextTrack: {
    uri,
    uid,
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
  const res = await _client.setQueue({
    nextTracks,
    prevTracks,
    queueRevision
  });
  await PlayerAPI.skipToNext();
  if (contextUri) {
    await new Promise((resolve) => {
      PlayerAPI._events.addListener("queue_update", () => resolve(), { once: true });
    });
    await setPlayingContext(contextUri);
  }
  return res;
};
var setPlayingContext = (uri) => {
  const { sessionId } = PlayerAPI._state;
  return PlayerAPI.updateContext(sessionId, { uri, url: "context://" + uri });
};

// shared/platformApi.ts
var { CosmosAsync } = Spicetify;
var { LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform;
var fetchLikedTracks = async () => (await LibraryAPI.getTracks({
  limit: Number.MAX_SAFE_INTEGER
})).items;
var fetchArtistLikedTracks = async (uri, offset = 0, limit = 100) => (await LibraryAPI.getTracks({ uri, offset, limit })).items;
var fetchPlaylistContents = async (uri) => (await PlaylistAPI.getContents(uri)).items;
var createFolder = async (name, location = {}) => await RootlistAPI.createFolder(name, location);
var createPlaylistFromTracks = (name, tracks, folder) => CosmosAsync.post("sp://core-playlist/v1/rootlist?responseFormat=protobufJson", {
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
  (f) => _.overEvery(
    filters.map(
      (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
    )
  )(f.toString())
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
var { History } = Spicetify.Platform;
var SettingsSection = class _SettingsSection {
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
        get: (target, prop) => _SettingsSection.getFieldValue(this.getId(prop.toString()))
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

// extensions/sort-plus/settings.ts
var SORTED_PLAYLISTS_FOLDER_NAME = "Sorted Playlists";
var settings = new SettingsSection("Sort Plus").addToggle({ id: "preventDuplicates", desc: "Prevent Duplicates" }, task2.of(true)).addToggle({ id: "descending", desc: "Descending" }, task2.of(true)).addToggle({ id: "artistAllDiscography", desc: "All of the artist's Discography" }).addToggle({ id: "artistTopTracks", desc: "Top Tracks" }, task2.of(true)).addToggle({ id: "artistPopularReleases", desc: "Popular Releases" }, task2.of(true)).addToggle({ id: "artistSingles", desc: "Singles" }).addToggle({ id: "artistAlbums", desc: "Albums" }).addToggle({ id: "artistCompilations", desc: "Compilations" }).addToggle({ id: "artistLikedTracks", desc: "Liked Tracks" }, task2.of(true)).addToggle({ id: "artistAppearsOn", desc: "Appears On" }, task2.of(false)).addInput({ id: "lastFmUsername", desc: "Last.fm Username", inputType: "text" }, task2.of("Username")).addInput(
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

// shared/api.ts
import { SpotifyApi } from "https://esm.sh/@fostertheweb/spotify-web-api-ts-sdk";
var { CosmosAsync: CosmosAsync2 } = Spicetify;
var spotifyApi = SpotifyApi.withAccessToken("client-id", {}, {
  // @ts-ignore
  fetch(url, opts) {
    const { method } = opts;
    return CosmosAsync2.resolve(method, url);
  },
  deserializer: {
    deserialize(res) {
      return res.body;
    }
  }
});
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

// shared/GraphQL/fetchAlbum.ts
var { Locale, GraphQL } = Spicetify;
var queue = new Array();
var fetchAlbum = async (uri, offset = 0, limit = 450) => {
  let resolveOwn;
  await new Promise((resolve) => {
    queue.push(resolveOwn = resolve);
    if (queue.length < 1e3) {
      resolve();
    }
  });
  const res = await GraphQL.Request(GraphQL.Definitions.getAlbum, {
    uri,
    locale: Locale.getLocale(),
    offset,
    limit
  });
  const index = queue.findIndex((r) => r === resolveOwn);
  if (index != -1) {
    queue.splice(index, 1);
  }
  queue[0]?.();
  return res.data.albumUnion;
};

// shared/GraphQL/fetchArtistDiscography.ts
var { GraphQL: GraphQL2 } = Spicetify;
var fetchArtistDiscography = (uri, offset = 0, limit = 100) => {
  const _fetchArtistDiscography = async (offset2, limit2) => {
    const res = await GraphQL2.Request(GraphQL2.Definitions.queryArtistDiscographyAll, {
      uri,
      offset: offset2,
      limit: limit2
    });
    const { discography } = res.data.artistUnion;
    const { totalCount, items } = discography.all;
    if (offset2 + limit2 < totalCount)
      items.push(...await _fetchArtistDiscography(offset2 + limit2, limit2));
    return items;
  };
  return _fetchArtistDiscography(offset, limit);
};

// shared/GraphQL/fetchArtistOveriew.ts
var { Locale: Locale2, GraphQL: GraphQL3 } = Spicetify;
var fetchArtistOverview = async (uri) => {
  const res = await GraphQL3.Request(GraphQL3.Definitions.queryArtistOverview, {
    uri,
    locale: Locale2.getLocale(),
    includePrerelease: true
  });
  return res.data.artistUnion;
};

// shared/fp.ts
var { Snackbar } = Spicetify;
var pMchain = (f) => async (fa) => f(await fa);
var chunkify50 = (fn) => async (args) => {
  const a = await Promise.all(_.chunk(args, 50).map(fn));
  return a.flat();
};
var progressify = (f, n) => {
  let i = n, lastProgress = 0;
  return async function(..._2) {
    const res = await f(...arguments), progress = Math.round((1 - --i / n) * 100);
    if (progress > lastProgress) {
      ;
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
  artistUris: track.artists.items.map((artist) => artist.uri),
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
  artistUris: track.artists.map((artist) => artist.uri),
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
  artistUris: track.artists.items.map((artist) => artist.uri),
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
  artistUris: track.artists.map((artist) => artist.uri),
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
  artistUris: track.artists.map((artist) => artist.uri),
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
  artistUris: track.artists.map((artist) => artist.uri),
  artistName: track.artists[0].name,
  durationMilis: track.duration.milliseconds,
  playcount: void 0,
  popularity: void 0,
  releaseDate: void 0
});

// extensions/sort-plus/fetch.ts
var { URI: URI2 } = Spicetify;
var getTracksFromAlbum = async (uri) => {
  const albumRes = await fetchAlbum(uri);
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
var getTracksFromPlaylist = _.flow(
  fetchPlaylistContents,
  pMchain(fp.map(parsePlaylistAPITrack)),
  pMchain(fp.filter((track) => !URI2.isLocalTrack(track.uri)))
);
var getTracksFromArtist = async (uri) => {
  const allTracks = new Array();
  const itemsWithCountAr = new Array();
  const itemsReleasesAr = new Array();
  const appearsOnAr = new Array();
  if (CONFIG.artistAllDiscography) {
    const items = await fetchArtistDiscography(uri);
    itemsReleasesAr.push({ items, totalCount: Infinity });
  } else {
    const { discography, relatedContent } = await fetchArtistOverview(uri);
    CONFIG.artistLikedTracks && allTracks.push(...(await fetchArtistLikedTracks(uri)).map(parseArtistLikedTrack));
    CONFIG.artistTopTracks && allTracks.push(...discography.topTracks.items.map(parseTopTrackFromArtist));
    CONFIG.artistPopularReleases && itemsWithCountAr.push(discography.popularReleasesAlbums);
    CONFIG.artistSingles && itemsReleasesAr.push(discography.singles);
    CONFIG.artistAlbums && itemsReleasesAr.push(discography.albums);
    CONFIG.artistCompilations && itemsReleasesAr.push(discography.compilations);
    CONFIG.artistAppearsOn && appearsOnAr.push(relatedContent.appearsOn);
  }
  const items1 = itemsWithCountAr.flatMap((iwc) => iwc.items);
  const items2 = itemsReleasesAr.flatMap((ir) => ir.items.flatMap((i) => i.releases.items));
  const albumLikeUris = items1.concat(items2).map((item) => item.uri);
  const albumsTracks = await Promise.all(albumLikeUris.map(getTracksFromAlbum));
  const appearsOnUris = appearsOnAr.flatMap((ir) => ir.items.flatMap((i) => i.releases.items)).map((item) => item.uri);
  const appearsOnTracks = await Promise.all(appearsOnUris.map(getTracksFromAlbum));
  allTracks.push(...albumsTracks.flat(), ...appearsOnTracks.flat().filter((track) => track.artistUris.includes(uri)));
  return await Promise.all(allTracks);
};

// extensions/sort-plus/util.ts
var { URI: URI3 } = Spicetify;
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
var SortActionIcon = /* @__PURE__ */ ((SortActionIcon2) => {
  SortActionIcon2["Spotify - Play Count"] = "play";
  SortActionIcon2["Spotify - Popularity"] = "heart";
  SortActionIcon2["Spotify - Release Date"] = "list-view";
  SortActionIcon2["LastFM - Scrobbles"] = "volume";
  SortActionIcon2["LastFM - My Scrobbles"] = "artist";
  SortActionIcon2["LastFM - Play Count"] = "subtitles";
  return SortActionIcon2;
})(SortActionIcon || {});
var SortActionProp = /* @__PURE__ */ ((SortActionProp2) => {
  SortActionProp2["Spotify - Play Count"] = "playcount";
  SortActionProp2["Spotify - Popularity"] = "popularity";
  SortActionProp2["Spotify - Release Date"] = "releaseDate";
  SortActionProp2["LastFM - Scrobbles"] = "scrobbles";
  SortActionProp2["LastFM - My Scrobbles"] = "personalScrobbles";
  SortActionProp2["LastFM - Play Count"] = "lastfmPlaycount";
  return SortActionProp2;
})(SortActionProp || {});
var joinByUri = (...trackss) => _(trackss).flatten().map(fp.omitBy(_.isNil)).groupBy("uri").mapValues((sameUriTracks) => Object.assign({}, ...sameUriTracks)).values().value();
var URI_isLikedTracks = (uri) => {
  const uriObj = URI3.fromString(uri);
  return uriObj.type === URI3.Type.COLLECTION && uriObj.category === "tracks";
};
var getNameFromUri = async (uri) => {
  switch (uri.type) {
    case URI3.Type.ALBUM: {
      const album = await spotifyApi.albums.get(uri.id);
      return album.name;
    }
    case URI3.Type.ARTIST: {
      const artist = await spotifyApi.artists.get(uri.id);
      return artist.name;
    }
    case URI3.Type.COLLECTION:
      if (uri.category === "tracks")
        return "Liked Tracks";
      else
        break;
    case URI3.Type.PLAYLIST:
    case URI3.Type.PLAYLIST_V2: {
      const playlist = await spotifyApi.playlists.getPlaylist(uri.id);
      return playlist.name;
    }
  }
};
var getTracksFromUri = _.cond([
  [URI3.isAlbum, getTracksFromAlbum],
  [URI3.isArtist, getTracksFromArtist],
  [URI_isLikedTracks, getLikedTracks],
  [URI3.isPlaylistV1OrV2, getTracksFromPlaylist]
]);

// extensions/sort-plus/playlistsInterop.ts
var { URI: URI4 } = Spicetify;
var createPlaylistFromLastSortedQueue = async () => {
  if (lastSortedQueue.length === 0) {
    Spicetify.showNotification("Must sort to queue beforehand" /* LAST_SORTED_QUEUE_EMPTY */);
    return;
  }
  const sortedPlaylistsFolder = await fetchFolder(CONFIG.sortedPlaylistsFolderUri).catch(fetchRootFolder);
  const uri = URI4.fromString(lastFetchedUri);
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
  if (!URI4.isPlaylistV1OrV2(lastFetchedUri)) {
    Spicetify.showNotification("Last sorted queue must be a playlist" /* LAST_SORTED_QUEUE_NOT_A_PLAYLIST */);
    return;
  }
  const fn = (uid) => movePlaylistTracks(lastFetchedUri, [uid], SpotifyLoc.after.end());
  await Promise.all(lastSortedQueue.map((track) => track.uid).map(fn));
};

// extensions/sort-plus/populate.ts
var { URI: URI5 } = Spicetify;
var fillTracksFromWebAPI = async (tracks) => {
  const ids = tracks.map((track) => URI5.fromString(track.uri).id);
  const fetchedTracks = await chunkify50((is) => spotifyApi.tracks.get(is))(ids);
  return joinByUri(tracks, fetchedTracks.map(parseWebAPITrack));
};
var fillTracksFromAlbumTracks = async (tracks) => {
  const tracksByAlbumUri = Object.groupBy(tracks, (track) => track.albumUri);
  const passes = Object.keys(tracksByAlbumUri).length;
  const fn = progressify(async (tracks2) => {
    const albumTracks = await getTracksFromAlbum(tracks2[0].albumUri);
    const newTracks = _.intersectionBy(albumTracks, tracks2, (track) => track.uri);
    return joinByUri(tracks2, newTracks);
  }, passes);
  const sameAlbumTracksArray = Object.values(tracksByAlbumUri);
  const albumsTracks = await Promise.all(sameAlbumTracksArray.map(fn));
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
var { URI: URI6, ContextMenu, Topbar } = Spicetify;
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
var populateTracks = _.cond([
  [fp.startsWith("Spotify"), fillTracksFromSpotify],
  [fp.startsWith("LastFM"), () => fillTracksFromLastFM]
]);
var setQueue2 = (tracks) => {
  if (PlayerAPI2._state.item?.uid == null)
    return void Spicetify.showNotification("Queue is null!", true);
  const dedupedQueue = _.uniqBy(tracks, "uri");
  global.lastSortedQueue = lastSortedQueue2 = dedupedQueue;
  const isLikedTracks = URI_isLikedTracks(lastFetchedUri);
  const queue2 = lastSortedQueue2.concat({ uri: SEPARATOR_URI }).map(createQueueItem(isLikedTracks));
  return setQueue(queue2, isLikedTracks ? void 0 : lastFetchedUri);
};
var sortTracksBy = (sortAction, sortFn) => async (uri) => {
  lastSortAction = sortAction;
  const descending = invertOrder ^ Number(CONFIG.descending);
  lastFetchedUri = uri;
  const tracks = await getTracksFromUri(uri);
  let sortedTracks = await sortFn(tracks);
  if (CONFIG.preventDuplicates) {
    sortedTracks = _.uniqBy(sortedTracks, "name");
  }
  descending && sortedTracks.reverse();
  return await setQueue2(sortedTracks);
};
var createSubMenuForSortProp = (sortAction) => new ContextMenu.Item(
  sortAction,
  ([uri]) => {
    const sortActionProp = SortActionProp[sortAction];
    const sortFn = async (tracks) => {
      const filledTracks = await populateTracks(sortAction)(tracks);
      const filteredTracks = filledTracks.filter((track) => track[sortActionProp] != null);
      return _.sortBy(filteredTracks, sortActionProp);
    };
    sortTracksBy(sortAction, sortFn)(uri);
  },
  _.stubTrue,
  SortActionIcon[sortAction],
  false
);
var sortTracksByShuffle = sortTracksBy("True Shuffle", _.shuffle);
var sortTracksByStars = sortTracksBy(
  "Stars",
  fp.sortBy((track) => tracksRatings[track.uri] ?? 0)
);
var SubMenuItems = Object.values(SortAction).map(createSubMenuForSortProp);
var SubMenuItemShuffle = new ContextMenu.Item(
  "True Shuffle",
  ([uri]) => sortTracksByShuffle(uri),
  _.stubTrue,
  "shuffle",
  false
);
var SubMenuItemStars = new ContextMenu.Item(
  "Stars",
  ([uri]) => sortTracksByStars(uri),
  () => global.tracksRatings !== void 0,
  "heart-active",
  false
);
SubMenuItems.push(SubMenuItemShuffle, SubMenuItemStars);
var SortBySubMenu = new ContextMenu.SubMenu(
  "Sort by",
  SubMenuItems,
  ([uri]) => _.overSome([URI6.isAlbum, URI6.isArtist, URI_isLikedTracks, URI6.isTrack, URI6.isPlaylistV1OrV2])(uri)
);
SortBySubMenu.register();
new Topbar.Button("Create a Playlist from Sorted Queue", "plus2px", createPlaylistFromLastSortedQueue);
new Topbar.Button("Reorder current Playlist like Sorted Queue", "chart-down", reordedPlaylistLikeSortedQueue);
export {
  lastFetchedUri,
  lastSortAction,
  lastSortedQueue2 as lastSortedQueue
};
