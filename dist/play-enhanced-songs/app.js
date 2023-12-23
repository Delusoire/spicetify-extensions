// shared/util.ts
var { URI } = Spicetify;
var { PlayerAPI } = Spicetify.Platform;
var mainElement = document.querySelector("main");
var [REACT_FIBER, REACT_PROPS] = Object.keys(mainElement);

// shared/platformApi.ts
var { CosmosAsync } = Spicetify;
var { LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform;
var fetchPlaylistEnhancedSongs300 = async (uri, offset = 0, limit = 300) => (await EnhanceAPI.getPage(
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
var { URI: URI2, ContextMenu } = Spicetify;
var { PlayerAPI: PlayerAPI2 } = Spicetify.Platform;
var playEnhancedSongs = async (uri) => {
  const queue = await fetchPlaylistEnhancedSongs(uri);
  PlayerAPI2.clearQueue();
  PlayerAPI2.addToQueue(queue);
};
new ContextMenu.Item(
  "Play enhanced songs",
  ([uri]) => playEnhancedSongs(uri),
  ([uri]) => URI2.isPlaylistV1OrV2(uri),
  "enhance"
).register();
