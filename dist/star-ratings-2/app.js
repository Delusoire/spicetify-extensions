// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;
var fp = ld_fp;

// shared/api.ts
import { SpotifyApi } from "https://esm.sh/@fostertheweb/spotify-web-api-ts-sdk";
var { CosmosAsync } = Spicetify;
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

// shared/GraphQL/fetchAlbum.ts
var { Locale, GraphQL } = Spicetify;
var queue = new Array();
var fetchAlbum = async (uri, offset = 0, limit = 415) => {
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
var PermanentMutationObserver = class extends MutationObserver {
  constructor(targetSelector, callback, opts = {
    childList: true,
    subtree: true
  }) {
    super(callback);
    this.target = null;
    new MutationObserver(() => {
      const nextTarget = document.querySelector(targetSelector);
      if (nextTarget && !nextTarget.isEqualNode(this.target)) {
        this.target && this.disconnect();
        this.target = nextTarget;
        this.observe(this.target, opts);
      }
    }).observe(document.body, {
      childList: true,
      subtree: true
    });
  }
};
var mainElement = document.querySelector("main");
var [REACT_FIBER, REACT_PROPS] = Object.keys(mainElement);

// shared/platformApi.ts
var { CosmosAsync: CosmosAsync2 } = Spicetify;
var { LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform;
var setTracksLiked = (uris, liked) => LibraryAPI[liked ? "add" : "remove"]({ uris });
var fetchLikedTracks = async () => (await LibraryAPI.getTracks({
  limit: Number.MAX_SAFE_INTEGER
})).items;
var fetchArtistLikedTracks = async (uri, offset = 0, limit = 100) => (await LibraryAPI.getTracks({ uri, offset, limit })).items;
var fetchPlaylistContents = async (uri) => (await PlaylistAPI.getContents(uri)).items;
var createFolder = async (name, location = {}) => await RootlistAPI.createFolder(name, location);
var createPlaylist = async (name, location = {}) => await RootlistAPI.createPlaylist(name, location);
var setPlaylistVisibility = async (playlist, visibleForAll) => await PlaylistPermissionsAPI.setBasePermission(playlist, visibleForAll ? "VIEWER" : "BLOCKED");
var fetchFolder = async (folder) => await RootlistAPI.getContents({ folderUri: folder });
var addPlaylistTracks = async (playlist, tracks, location = {}) => await PlaylistAPI.add(playlist, tracks, location);
var removePlaylistTracks = (playlist, tracks) => PlaylistAPI.remove(playlist, tracks);

// shared/modules.ts
var require2 = webpackChunkopen.push([[Symbol("Dummy chunk to extract require method")], {}, (require3) => require3]);
var modules = Object.keys(require2.m).map((id) => require2(id)).filter((module) => typeof module === "object");
var exportedMembers = modules.flatMap((module) => Object.values(module)).filter(Boolean);
var exportedFunctions = exportedMembers.filter((module) => typeof module === "function");
var exportedReactObjects = Object.groupBy(exportedMembers, (x) => x.$$typeof);
var exportedContexts = exportedReactObjects[Symbol.for("react.context")];
var exportedForwardRefs = exportedReactObjects[Symbol.for("react.forward_ref")];
var exportedMemos = exportedReactObjects[Symbol.for("react.memo")];
var findByStrings = (modules2, ...filters) => modules2.find(
  (f) => filters.map(
    (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
  ).every((filterFn) => filterFn(f.toString()))
);
var CheckedPlaylistButtonIcon = findByStrings(
  exportedFunctions,
  "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
);
var Highlight = findByStrings(exportedFunctions, "hightlightClassName", "textToHighlight");
var SettingColumn = findByStrings(exportedFunctions, "setSectionFilterMatchQueryValue", "filterMatchQuery");
var SettingText = findByStrings(exportedFunctions, "textSubdued", "dangerouslySetInnerHTML");
var SettingToggle = findByStrings(exportedFunctions, "condensed", "onSelected");
var curationButtonClass = exportedMembers.find((m) => m?.curationButton).curationButton;
var rs_w = exportedForwardRefs.filter((x) => x.render?.toString().includes("hasLeadingOrMedia"));

// shared/settings.tsx
var { React, ReactDOM, LocalStorage } = Spicetify;
var { ButtonSecondary } = Spicetify.ReactComponent;
var { History } = Spicetify.Platform;
if (!globalThis.__renderSettingSections) {
  globalThis.__settingSections = /* @__PURE__ */ new Map();
  globalThis.__renderSettingSections = () => Array.from(globalThis.__settingSections.values());
}
var SettingsSection = class _SettingsSection {
  constructor(name, sectionFields = {}) {
    this.name = name;
    this.sectionFields = sectionFields;
    this.pushSettings = () => {
      __settingSections.set(this.id, /* @__PURE__ */ React.createElement(this.SettingsSection, null));
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
    this.addButton = (props) => {
      this.addField("button" /* BUTTON */, props, this.ButtonField);
      return this;
    };
    this.addToggle = (props, defaultValue = () => false) => {
      this.addField("toggle" /* TOGGLE */, props, this.ToggleField, defaultValue);
      return this;
    };
    this.addInput = (props, defaultValue = () => "") => {
      this.addField("input" /* INPUT */, props, this.InputField, defaultValue);
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
    this.SettingsSection = () => /* @__PURE__ */ React.createElement(__SettingSection, { filterMatchQuery: this.name }, /* @__PURE__ */ React.createElement(__SectionTitle, null, this.name), Object.values(this.sectionFields));
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
  addField(type, opts, fieldComponent, defaultValue) {
    if (defaultValue !== void 0) {
      const settingId = this.getId(opts.id);
      _SettingsSection.setDefaultFieldValue(settingId, defaultValue);
    }
    const field = Object.assign({}, opts, { type });
    this.sectionFields[opts.id] = React.createElement(fieldComponent, field);
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
var SORTED_PLAYLISTS_FOLDER_NAME = "\u{1F4C0} Sorted Playlists";
var settings = new SettingsSection("Sort Plus").addToggle({ id: "preventDuplicates", desc: "Prevent Duplicates" }, () => true).addToggle({ id: "descending", desc: "Descending" }, () => true).addToggle({ id: "artistAllDiscography", desc: "All of the artist's Discography" }).addToggle({ id: "artistTopTracks", desc: "Top Tracks" }, () => true).addToggle({ id: "artistPopularReleases", desc: "Popular Releases" }, () => true).addToggle({ id: "artistSingles", desc: "Singles" }).addToggle({ id: "artistAlbums", desc: "Albums" }).addToggle({ id: "artistCompilations", desc: "Compilations" }).addToggle({ id: "artistLikedTracks", desc: "Liked Tracks" }, () => true).addToggle({ id: "artistAppearsOn", desc: "Appears On" }).addInput({ id: "lastFmUsername", desc: "Last.fm Username", inputType: "text" }, () => "Username").addInput({ id: "LFMApiKey", desc: "Last.fm API Key", inputType: "text" }, () => "********************************").addInput(
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
var URI_isLikedTracks = (uri) => {
  const uriObj = URI3.fromString(uri);
  return uriObj.type === URI3.Type.COLLECTION && uriObj.category === "tracks";
};
var getTracksFromUri = _.cond([
  [URI3.isAlbum, getTracksFromAlbum],
  [URI3.isArtist, getTracksFromArtist],
  [URI_isLikedTracks, getLikedTracks],
  [URI3.isPlaylistV1OrV2, getTracksFromPlaylist]
]);

// extensions/star-ratings-2/settings.ts
var RATINGS_FOLDER_NAME = "Ratings";
var settings2 = new SettingsSection("Star Ratings 2").addInput({ id: "heartThreshold", desc: "Threshold for liking trakcs", inputType: "number" }, () => "3").addInput({ id: "skipThreshold", desc: "Threshold for skipping trakcs", inputType: "number" }, () => "1").addInput(
  {
    id: "ratingsFolderUri",
    desc: "Ratings folder uri",
    inputType: "text",
    onChange: loadRatings
  },
  async () => (await createFolder(RATINGS_FOLDER_NAME)).uri
);
settings2.pushSettings();
var CONFIG2 = settings2.toObject();

// extensions/star-ratings-2/util.ts
var getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-trackList.main-trackList-indexable"));
var getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll(".main-trackList-trackListRow"));
var getTrackListTrackUri = (track) => {
  const rowSectionEnd = track.querySelector(".main-trackList-rowSectionEnd");
  const reactProps = rowSectionEnd[REACT_PROPS];
  const { props } = (
    // artist & local tracks & albums
    reactProps.children.at?.(-1).props.menu ?? // playlists
    reactProps.children.props.children.at(-1).props.menu
  );
  return props.uri;
};
var getNowPlayingBar = () => document.querySelector("div.main-nowPlayingBar-nowPlayingBar");
var getCollectionActionBarRow = () => document.querySelector(`div.main-actionBar-ActionBarRow`);
var playlistButtonSelector = `button[aria-label="Add to Liked Songs"], button[aria-label="Add to playlist"], button[aria-label="Remove recommendation"]`;
var getPlaylistButton = (parent) => parent.querySelector(playlistButtonSelector);
var getCollectionPlaylistButton = () => {
  const ab = getCollectionActionBarRow();
  return ab?.querySelector(
    `button[aria-label="Remove from Your Library"], button[aria-label="Save to Your Library"]`
  );
};

// extensions/star-ratings-2/ratings.ts
var { URI: URI4 } = Spicetify;
var { History: History2, PlayerAPI: PlayerAPI2 } = Spicetify.Platform;
var loadRatings = async () => {
  const ratingsFolder = await fetchFolder(CONFIG2.ratingsFolderUri);
  playlistUris = ratingsFolder.items.map((p) => [p.uri, Number(p.name)]).reduce((uris, [uri, rating]) => {
    uris[rating] = uri;
    return uris;
  }, []);
  const playlists = await Promise.all(playlistUris.map(fetchPlaylistContents));
  global.tracksRatings = tracksRatings = playlists.flatMap((tracks, rating) => tracks?.map((t) => [t.uri, rating]) ?? []).reduce(
    (acc, [trackUri, rating]) => Object.assign(acc, {
      [trackUri]: Math.max(rating, acc[trackUri] ?? 0)
    }),
    {}
  );
};
var toggleRating = async (uri, rating) => {
  const currentRating = tracksRatings[uri];
  if (currentRating === rating)
    rating = 0;
  if (currentRating) {
    const playlistIds = _.compact(playlistUris.slice(0, currentRating + 1)).map(
      (playlistUri) => URI4.fromString(playlistUri).id
    );
    for (const playlistId of playlistIds) {
      removePlaylistTracks(playlistId, [{ uri, uid: "" }]);
    }
  }
  tracksRatings[uri] = rating;
  if (rating > 0) {
    let playlistUri = playlistUris[rating];
    if (!playlistUri) {
      playlistUri = await createPlaylist(
        rating.toFixed(0),
        SpotifyLoc.after.fromUri(CONFIG2.ratingsFolderUri)
      );
      setPlaylistVisibility(playlistUri, false);
      playlistUris[rating] = playlistUri;
    }
    addPlaylistTracks(playlistUri, [uri]);
    if (rating >= Number(CONFIG2.heartThreshold)) {
      setTracksLiked([uri], true);
    }
  }
  const npTrack = PlayerAPI2._state.item?.uri;
  if (npTrack === uri) {
    updateNowPlayingControls(npTrack, false);
    {
      new MutationObserver((_2, observer) => {
        observer.disconnect();
        if (npTrack !== uri)
          return;
        updateNowPlayingControls(npTrack, false);
      }).observe(getNowPlayingBar(), {
        subtree: true
      });
    }
  }
  updateTrackListControls();
  const { pathname } = History2.location;
  updateCollectionControls(URI4.fromString(pathname).toString());
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
    onClick: () => toggleRating(uri, i)
  }
);
var Dropdown = ({ uri }) => /* @__PURE__ */ React2.createElement("div", { className: "rating-dropdown" }, _.range(1, 6).map((i) => /* @__PURE__ */ React2.createElement(RatingButton, { i, uri })));

// extensions/star-ratings-2/controls.tsx
var { URI: URI5, Tippy } = Spicetify;
var { React: React3, ReactDOM: ReactDOM2 } = Spicetify;
var UNSET_CSS = "invalid";
var colorByRating = [UNSET_CSS, "#ED5564", "#FFCE54", "A0D568", "#4FC1E8", "#AC92EB"];
var colorizePlaylistButton = (btn, rating) => {
  if (btn.style.fill === colorByRating[rating])
    return;
  btn.style.opacity = rating > 0 ? "1" : UNSET_CSS;
  const svg = btn.querySelector("svg");
  if (!svg)
    return;
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
  const tippyInstance = Tippy(pb, {
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
      return { popper, onUpdate: () => void 0 };
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
var updateTrackControls = (track, uri, updateDropdown = true) => {
  if (!URI5.isTrack(uri))
    return;
  const r = tracksRatings[uri];
  const pb = getPlaylistButton(track);
  colorizePlaylistButton(pb, r);
  updateDropdown && wrapDropdownInsidePlaylistButton(pb, uri);
};
var updateTrackListControls = (updateDropdown = true) => getTrackLists().map(getTrackListTracks).map(
  fp.map((track) => {
    const uri = getTrackListTrackUri(track);
    updateTrackControls(track, uri, updateDropdown);
  })
);
var updateCollectionControls = async (uri) => {
  const tracks = await getTracksFromUri(uri);
  const ratings = _.compact(tracks.map((track) => tracksRatings[track.uri]));
  const rating = Math.round(ratings.reduce((psum, r) => psum + r, 0) / ratings.length);
  const pb = getCollectionPlaylistButton();
  pb && colorizePlaylistButton(pb, rating);
};

// shared/listeners.ts
var { Player, URI: URI6 } = Spicetify;
var { PlayerAPI: PlayerAPI3, History: History3 } = Spicetify.Platform;
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
  let lastPathname = "";
  const matchFn = createMatchFn(toMatchTo);
  const historyChanged = ({ pathname }) => {
    if (matchFn(pathname)) {
      if (dropDuplicates && lastPathname === pathname) {
      } else
        callback(URI6.fromString(pathname).toURI());
    }
    lastPathname = pathname;
  };
  historyChanged(History3.location ?? {});
  return History3.listen(historyChanged);
};
var onSongChanged = (callback) => {
  callback(PlayerAPI3._state);
  Player.addEventListener("songchange", (event) => callback(event.data));
};
var PRESENTATION_KEY = Symbol("presentation");
var onTrackListMutationListeners = new Array();
var _onTrackListMutation = (trackList, record, observer) => {
  const tracks = getTrackListTracks(trackList[PRESENTATION_KEY]);
  const reactFiber = trackList[PRESENTATION_KEY][REACT_FIBER].alternate;
  const reactTracks = reactFiber.pendingProps.children;
  const tracksProps = reactTracks.map((child) => child.props);
  tracks.forEach((track, i) => track.props = tracksProps[i]);
  const fullyRenderedTracks = tracks.filter((track) => track.props?.uri);
  onTrackListMutationListeners.map((listener) => listener(trackList, fullyRenderedTracks));
};
new PermanentMutationObserver("main", () => {
  const trackLists = getTrackLists();
  trackLists.filter((trackList) => !trackList[PRESENTATION_KEY]).forEach((trackList) => {
    trackList[PRESENTATION_KEY] = trackList.lastElementChild.firstElementChild.nextElementSibling;
    new MutationObserver(
      (record, observer) => _onTrackListMutation(trackList, record, observer)
    ).observe(trackList[PRESENTATION_KEY], { childList: true });
  });
});

// extensions/star-ratings-2/app.ts
var { URI: URI7, Player: Player2, ContextMenu } = Spicetify;
loadRatings();
onSongChanged((state) => {
  if (!state)
    return;
  const { uri } = state.item ?? {};
  if (!uri)
    return;
  if (Number(CONFIG2.skipThreshold)) {
    const currentTrackRating = tracksRatings[uri] ?? Number.MAX_SAFE_INTEGER;
    if (currentTrackRating <= Number(CONFIG2.skipThreshold))
      return void Player2.next();
  }
  updateNowPlayingControls(uri);
});
onTrackListMutationListeners.push(async (_2, tracks) => {
  for (const track of tracks)
    updateTrackControls(track, track.props.uri);
});
onHistoryChanged(_.overSome([URI7.isAlbum, URI7.isArtist, URI7.isPlaylistV1OrV2]), (uri) => updateCollectionControls(uri));
new ContextMenu.Item(
  "Choose for Ratings Playlists",
  ([uri]) => CONFIG2.ratingsFolderUri = uri,
  ([uri]) => URI7.isFolder(uri),
  "playlist-folder"
).register();
(async () => {
    if (!document.getElementById("star-ratings-2-css")) {
        const el = document.createElement("style")
        el.id = "star-ratings-2-css"
        el.textContent = "/* extensions/star-ratings-2/assets/styles.css */\nbutton.rating-1 svg {\n  fill: #ed5564 !important;\n}\nbutton.rating-2 svg {\n  fill: #ffce54 !important;\n}\nbutton.rating-3 svg {\n  fill: #a0d568 !important;\n}\nbutton.rating-4 svg {\n  fill: #4fc1e8 !important;\n}\nbutton.rating-5 svg {\n  fill: #ac92eb !important;\n}\n"
        document.head.appendChild(el)
    }
})()