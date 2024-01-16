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

// shared/GraphQL/Definitions/searchTracks.ts
var Sa = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "searchImageURLAndSize"
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "ImageSource"
        }
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "url"
            }
          },
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "width"
            }
          },
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "height"
            }
          }
        ]
      }
    }
  ]
};
var Na = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "searchImageSources"
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "Image"
        }
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "sources"
            },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: {
                    kind: "Name",
                    value: "searchImageURLAndSize"
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "extractedColors"
            },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "colorDark"
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "hex"
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "isFallback"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
var ja = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "searchTrackDesktop"
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "TrackResponseWrapper"
        }
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "data"
            },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  }
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "Track"
                    }
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "uri"
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "id"
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "name"
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "albumOfTrack"
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "uri"
                              }
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "name"
                              }
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "coverArt"
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "searchImageSources"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "id"
                              }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "artists"
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "items"
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "uri"
                                    }
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "profile"
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "name"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "contentRating"
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "duration"
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "totalMilliseconds"
                              }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "playability"
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "playable"
                              }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "associations"
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "associatedVideos"
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "totalCount"
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
var searchTracksDefinition = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: {
        kind: "Name",
        value: "searchTracks"
      },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "searchTerm"
            }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "limit"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "offset"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "searchV2"
            },
            arguments: [
              {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "query"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "searchTerm"
                  }
                }
              },
              {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
                  }
                }
              },
              {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "offset"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "offset"
                  }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "query"
                  }
                },
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tracksV2"
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "totalCount"
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "items"
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "matchedFields"
                              }
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "item"
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "searchTrackDesktop"
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "pagingInfo"
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "nextOffset"
                              }
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "limit"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...ja.definitions,
    ...Na.definitions,
    ...Sa.definitions
  ]
};

// shared/GraphQL/searchTracks.ts
var { GraphQL } = Spicetify;
var searchTracks = async (q, offset = 0, limit = 50, topResultsNum = 20, includeAudiobooks = true) => {
  const res = await GraphQL.Request(searchTracksDefinition, {
    searchTerm: q,
    offset,
    limit,
    numberOfTopResults: topResultsNum,
    includeAudiobooks
  });
  return res.data.searchV2.tracksV2.items;
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
    super("library-data");
    this.version(1).stores({
      tracks: "&uri, albumReleaseDate, isrc, popularity",
      isrcs: "&isrc, uri"
    });
  }
}();
var { URI: URI3 } = Spicetify;
var getFirstUriFromISRC = async (isrc) => {
  const track = await db.isrcs.get(isrc);
  if (!track) {
    try {
      const results = await searchTracks(`isrc:${isrc}`);
      const topResult = results[0];
      const { uri } = topResult.item.data;
      db.isrcs.put({ isrc, uri });
      return uri;
    } catch (_2) {
      return null;
    }
  }
  return track.uri;
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
  const candidate = await getFirstUriFromISRC(track.isrc);
  if (!candidate)
    return null;
  return uri !== candidate;
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
