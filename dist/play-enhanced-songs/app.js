// extensions/play-enhanced-songs/app.ts
import { anyPass } from "https://esm.sh/fp-ts-std/Predicate";
import { tupled } from "https://esm.sh/fp-ts/function";

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
var pMchain = (f4) => async (fa) => f4(await fa);
var chunckify = (n) => (g) => f.flow(ar.chunksOf(n), ar.map(g), (ps) => Promise.all(ps), pMchain(ar.flatten));
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

// shared/api.ts
import { array as a2, function as f3 } from "https://esm.sh/fp-ts";
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
var fetchPlatPlaylistEnhancedSongs300 = async (uri, offset = 0, limit = 300) => (await Spicetify.Platform.EnhanceAPI.getPage(
  uri,
  /* iteration */
  0,
  /* sessionId */
  0,
  offset,
  limit
)).enhancePage.pageItems;
var fetchPlatPlaylistEnhancedSongs = async (uri, offset = 0) => {
  const nextPageItems = await fetchPlatPlaylistEnhancedSongs300(uri, offset);
  if (nextPageItems?.length < 300)
    return nextPageItems;
  else
    return nextPageItems.concat(fetchPlatPlaylistEnhancedSongs(uri, offset + 300));
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

// extensions/play-enhanced-songs/app.ts
var { URI } = Spicetify;
var queue = new Array();
var playEnhancedSongs = async (uri) => {
  queue = await fetchPlatPlaylistEnhancedSongs(uri);
  Spicetify.Platform.PlayerAPI.clearQueue();
  Spicetify.Platform.PlayerAPI.addToQueue(queue);
};
new Spicetify.ContextMenu.Item(
  "Play enhanced songs",
  tupled(playEnhancedSongs),
  tupled(anyPass([URI.isPlaylistV1OrV2])),
  "enhance"
).register();
