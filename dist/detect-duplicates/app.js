// shared/util.ts
var { Player, URI } = Spicetify;
var { PlayerAPI, History } = Spicetify.Platform;
var getReactFiber = (element) => element[Object.keys(element).find((k) => k.startsWith("__reactFiber$"))];
var getReactProps = (element) => element[Object.keys(element).find((k) => k.startsWith("__reactProps$"))];

// extensions/star-ratings-2/util.ts
var getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-trackList.main-trackList-indexable"));
var getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll(".main-trackList-trackListRow"));
var getTrackListTrackUri = (track) => {
  const rowSectionEnd = track.querySelector(".main-trackList-rowSectionEnd");
  const reactProps = getReactProps(rowSectionEnd);
  const { props } = (
    // artist & local tracks & albums
    reactProps.children.at(-1).props.menu || // playlists
    reactProps.children.props.children.at(-1).props.menu
  );
  return props.uri;
};

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

// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;

// shared/fp.ts
var { Snackbar } = Spicetify;
var chunkify50 = (fn) => async (args) => {
  const a = await Promise.all(_.chunk(args, 50).map(fn));
  return a.flat();
};

// extensions/detect-duplicates/util.ts
var { URI: URI2 } = Spicetify;
var SEP = ":";
var LS_PREFIX = ["extensions", "detect-duplicates"];
var LS_KEY_INDEX = LS_PREFIX.join(SEP).length + 1;
var uriToISRC = new Map(
  Object.values(localStorage).filter(([key]) => key.startsWith(LS_PREFIX.join(SEP))).flatMap(([key, value]) => {
    const isrc = key.slice(LS_KEY_INDEX);
    const uris = JSON.parse(value);
    return uris.map((uri) => [uri, isrc]);
  })
);
var getLSKey = (isrc) => [...LS_PREFIX, isrc].join(SEP);
var getISRCUris = (isrc) => {
  const key = getLSKey(isrc);
  const urisAsJson = localStorage.getItem(key);
  return urisAsJson ? JSON.parse(urisAsJson) : null;
};
var setISRCUris = async (isrc, uris) => {
  const getTrackReleaseDate = (a) => new Date(a.album.release_date);
  const sortHeuristic = (a, b) => {
    const deltaTime = getTrackReleaseDate(b) - getTrackReleaseDate(a);
    return deltaTime || b.popularity - a.popularity;
  };
  const key = getLSKey(isrc);
  const ids = uris.map((uri) => URI2.fromString(uri).id);
  const tracks = await spotifyApi.tracks.get(ids);
  const sortedTracks = tracks.sort(sortHeuristic);
  const sortedUris = sortedTracks.map((track) => track.uri);
  const value = JSON.stringify(sortedUris);
  localStorage.setItem(key, value);
  return sortedUris;
};
var getUrisFromISRC = async (isrc) => {
  const cachedUris = getISRCUris(isrc);
  if (!cachedUris) {
    try {
      const results = await searchModalResults(`isrc:${isrc}`);
      const uris = results.map((i) => i.item.data.uri);
      return await setISRCUris(isrc, uris);
    } catch (_2) {
      return null;
    }
  }
  return cachedUris;
};
var getISRCsForUris = async (uris) => {
  const indicesForCacheMiss = new Array();
  const isrcs = uris.map((uri, i) => uriToISRC.has(uri) ? uriToISRC.get(uri) : void indicesForCacheMiss.push(i));
  const urisForCacheMiss = indicesForCacheMiss.map((i) => uris[i]);
  const idsForCacheMiss = urisForCacheMiss.map((uri) => URI2.fromString(uri).id);
  const tracksForCacheMiss = await chunkify50((is) => spotifyApi.tracks.get(is))(idsForCacheMiss);
  const isrcsForCacheMiss = tracksForCacheMiss.map((track) => track.external_ids.isrc);
  urisForCacheMiss.forEach((uri, i) => {
    const isrc = isrcsForCacheMiss[i];
    uriToISRC.set(uri, isrc);
    isrcs[indicesForCacheMiss[i]] = isrc;
  });
  return isrcs;
};
var isUriOutdatedDuplicate = async (uri) => {
  const isrc = uriToISRC.get(uri);
  if (!isrc)
    return null;
  const uris = await getUrisFromISRC(isrc);
  if (!uris)
    return null;
  return uri !== uris[0];
};

// extensions/detect-duplicates/app.ts
var { URI: URI3 } = Spicetify;
var greyOutTrack = (track) => {
  track.style.backgroundColor = "gray";
  track.style.opacity = "0.3";
};
var onMutation = async () => {
  const trackLists = getTrackLists();
  const tracksByTrackLists = trackLists.map((trackList) => {
    const tracks = getTrackListTracks(trackList);
    if (!trackList.presentation) {
      trackList.presentation = trackList.lastElementChild.firstElementChild.nextElementSibling;
      const tracksProps = getReactFiber(trackList.presentation).pendingProps.children.map(
        (child) => child.props
      );
      tracks.forEach((track, i) => track.props = tracksProps[i]);
    }
    return tracks;
  });
  const allUris = tracksByTrackLists.flatMap((tracks) => tracks.map((track) => track.props.uri));
  await getISRCsForUris(allUris);
  tracksByTrackLists.map((tracks) => {
    tracks.map(async (track) => {
      const uri = URI3.fromString(getTrackListTrackUri(track)).toURI();
      const isDuplicate = await isUriOutdatedDuplicate(uri);
      isDuplicate && greyOutTrack(track);
    });
  });
};
var mainElement;
var mainElementObserver = new MutationObserver(() => onMutation());
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
