// shared/util.ts
var { URI } = Spicetify;
var { PlayerAPI } = Spicetify.Platform;
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

// extensions/star-ratings-2/util.ts
var getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-trackList.main-trackList-indexable"));
var getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll(".main-trackList-trackListRow"));

// shared/listeners.ts
var { Player, URI: URI2 } = Spicetify;
var { PlayerAPI: PlayerAPI2, History } = Spicetify.Platform;
var onTrackListMutationListeners = new Array();
var _onTrackListMutation = (trackList, record, observer) => {
  const tracks = getTrackListTracks(trackList.presentation);
  const reactFiber = trackList.presentation[REACT_FIBER].alternate;
  const reactTracks = reactFiber.pendingProps.children;
  const tracksProps = reactTracks.map((child) => child.props);
  tracks.forEach((track, i) => track.props = tracksProps[i]);
  const fullyRenderedTracks = tracks.filter((track) => track.props?.uri);
  onTrackListMutationListeners.map((listener) => listener(trackList, fullyRenderedTracks));
};
new PermanentMutationObserver("main", () => {
  const trackLists = getTrackLists();
  trackLists.filter((trackList) => !trackList.presentation).forEach((trackList) => {
    trackList.presentation = trackList.lastElementChild.firstElementChild.nextElementSibling;
    new MutationObserver(
      (record, observer) => _onTrackListMutation(trackList, record, observer)
    ).observe(trackList.presentation, { childList: true });
  });
});

// extensions/detect-duplicates/util.ts
import Dexie from "https://esm.sh/dexie";

// shared/GraphQL/searchModalResults.ts
var { GraphQL } = Spicetify;
var searchModalResults = async (q, offset = 0, limit = 10, topResultsNum = 20, includeAudiobooks = true) => {
  const res = await GraphQL.Request(GraphQL.Definitions.searchModalResults, {
    searchTerm: q,
    offset,
    limit,
    numberOfTopResults: topResultsNum,
    includeAudiobooks
  });
  return res.data.searchV2.topResults.itemsV2;
};

// shared/api.ts
import { SpotifyApi } from "https://esm.sh/@fostertheweb/spotify-web-api-ts-sdk";

// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;

// shared/api.ts
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

// shared/fp.ts
var { Snackbar } = Spicetify;
var chunkify50 = (fn) => async (args) => {
  const a = await Promise.all(_.chunk(args, 50).map(fn));
  return a.flat();
};

// extensions/detect-duplicates/util.ts
var db = new class extends Dexie {
  constructor() {
    super("isrc-objects");
    this.version(1).stores({
      tracks: "&uri, albumReleaseDate, isrc, popularity"
    });
  }
}();
var { URI: URI3 } = Spicetify;
var getUrisFromISRC = async (isrc) => {
  let tracks = await db.tracks.where({ isrc }).toArray();
  if (!tracks) {
    try {
      const results = await searchModalResults(`isrc:${isrc}`);
      const ts = results.map((i) => i.item.data);
      tracks = ts.map((t) => ({ uri: t.uri, albumReleaseDate: void 0, isrc, popularity: void 0 }));
      db.tracks.bulkPut(tracks);
      return tracks.map((track) => track.uri);
    } catch (_2) {
      return null;
    }
  }
  {
    const sortHeuristic = (a, b) => {
      const getTrackReleaseDate = (a2) => new Date(a2.albumReleaseDate);
      const deltaTime = getTrackReleaseDate(b) - getTrackReleaseDate(a);
      return deltaTime || b.popularity - a.popularity || 0;
    };
    return tracks.sort(sortHeuristic).map((track) => track.uri);
  }
};
var getISRCsForUris = async (uris) => {
  const tracks = (await db.tracks.bulkGet(uris)).map(
    (track, i) => track ?? { uri: uris[i], isrc: void 0, albumReleaseDate: void 0, popularity: void 0 }
  );
  const missedTracks = tracks.filter((track) => !track.isrc);
  if (missedTracks.length) {
    const missedIds = missedTracks.map((track) => URI3.fromString(track.uri).id);
    const fillerTracks = await chunkify50((is) => spotifyApi.tracks.get(is))(missedIds);
    missedTracks.forEach((missedTrack, i) => {
      const fillerTrack = fillerTracks[i];
      missedTrack.albumReleaseDate = fillerTrack.album.release_date;
      missedTrack.isrc = fillerTrack.external_ids.isrc;
      missedTrack.popularity = fillerTrack.popularity;
    });
    db.tracks.bulkAdd(missedTracks);
  }
  return tracks.map((track) => track.isrc);
};
var isUriOutdatedDuplicate = async (uri) => {
  const track = await db.tracks.get(uri);
  if (!track?.isrc)
    return null;
  const uris = await getUrisFromISRC(track.isrc);
  if (!uris)
    return null;
  return uri !== uris[0];
};

// extensions/detect-duplicates/app.ts
var greyOutTrack = (track) => {
  track.style.backgroundColor = "gray";
  track.style.opacity = "0.3";
};
onTrackListMutationListeners.push(async (_2, tracks) => {
  const trackUris = tracks.map((track) => track.props.uri);
  await getISRCsForUris(trackUris);
  tracks.map(async (track) => {
    const isDuplicate = await isUriOutdatedDuplicate(track.props.uri);
    isDuplicate && greyOutTrack(track);
  });
});
