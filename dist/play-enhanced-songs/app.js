// shared/util.ts
var {} = Spicetify;
var { PlayerAPI, History } = Spicetify.Platform;

// shared/platformApi.ts
var {} = Spicetify;
var {} = Spicetify.Platform;
var fetchPlaylistEnhancedSongs300 = async (uri, offset = 0, limit = 300) => (await Spicetify.Platform.EnhanceAPI.getPage(
  uri,
  /* iteration */
  0,
  /* sessionId */
  0,
  offset,
  limit
)).enhancePage.pageItems;
var fetchPlaylistEnhancedSongs = async (uri, offset = 0) => {
  const nextPageItems = await fetchPlaylistEnhancedSongs300(uri, offset);
  if (nextPageItems?.length < 300)
    return nextPageItems;
  else
    return nextPageItems.concat(await fetchPlaylistEnhancedSongs(uri, offset + 300));
};

// extensions/play-enhanced-songs/app.ts
var { URI } = Spicetify;
var playEnhancedSongs = async (uri) => {
  const queue = await fetchPlaylistEnhancedSongs(uri);
  Spicetify.Platform.PlayerAPI.clearQueue();
  Spicetify.Platform.PlayerAPI.addToQueue(queue);
};
new Spicetify.ContextMenu.Item(
  "Play enhanced songs",
  ([uri]) => playEnhancedSongs(uri),
  ([uri]) => URI.isPlaylistV1OrV2(uri),
  "enhance"
).register();
