import {
    Item1,
    ItemMin,
    Items,
    ItemsReleases,
    ItemsReleasesWithCount,
    ItemsWithCount,
    TopTracksItem,
} from "./sharedTypes.ts"

const { Locale, GraphQL } = Spicetify

export type fetchArtistOverviewRes = {
    __typename: "Artist"
    id: string
    uri: string
    saved: boolean
    stats: {
        followers: number
        monthlyListeners: number
        worldRank: number
        topCities: {
            items: Array<{
                numberOfListeners: number
                city: string
                country: string
                region: string
            }>
        }
    }
    profile: {
        name: string
        verified: boolean
        pinnedItem: {
            comment: string
            type: string
            backgroundImage: {
                sources: Array<{ url: string }>
            }
            itemV2: {}
            item: {
                uri: string
                name: string
                images: {
                    items: Array<{
                        sources: Array<{
                            url: string
                            width: null
                            height: null
                        }>
                    }>
                }
            }
        }
        biography: {
            type: string
            text: string
        }
        externalLinks: {
            items: Array<{
                name: string
                url: string
            }>
        }
        playlistV2: {
            totalCount: number
            items: Array<{
                data: {
                    __typename: "Playlist"
                    uri: string
                    name: string
                    description: string
                    ownerV2: {
                        data: {
                            __typename: "User"
                            name: string
                        }
                    }
                    images: {
                        items: Array<{
                            sources: Array<Spicetify.Platform.ImageSized>
                        }>
                    }
                }
            }>
        }
    }
    visuals: {
        gallery: {
            items: Array<{
                sources: Array<Spicetify.Platform.ImageSized>
            }>
        }
        avatarImage: {
            sources: Array<Spicetify.Platform.ImageSized>
            extractedColors: {
                colorRaw: {
                    hex: string
                }
            }
        }
        headerImage: {
            sources: Array<Spicetify.Platform.ImageSized>
            extractedColors: {
                colorRaw: {
                    hex: string
                }
            }
        }
    }
    discography: {
        latest: Item1
        popularReleasesAlbums: ItemsWithCount<Item1>
        singles: ItemsReleases<Item1>
        albums: ItemsReleases<Item1>
        compilations: ItemsReleases<Item1>
        topTracks: Items<TopTracksItem>
    }
    preRelease: any | null
    relatedContent: {
        appearsOn: ItemsReleasesWithCount<
            ItemMin & {
                artists: Items<{
                    uri: string
                    profile: {
                        name: string
                    }
                }>
                date: {
                    year: number
                }
            }
        >
        featuringV2: {
            totalCount: number
            items: any[]
        }
        discoveredOnV2: {
            totalCount: number
            items: any[]
        }
        relatedArtists: {
            totalCount: number
            items: any[]
        }
    }
    sharingInfo: {
        shareUrl: string
        shareId: string
    }
    goods: {
        events: {
            userLocation: {
                name: string
            }
            concerts: ItemsWithCount<{
                uri: string
                id: string
                title: string
                category: "CONCERT"
                festival: boolean
                nearUser: boolean
                venue: {
                    name: string
                    location: { name: string }
                    coordinates: {
                        latitude: number
                        longitude: number
                    }
                }
                partnerLinks: Items<{
                    partnerName: string
                    url: string
                }>

                date: Date
            }> & {
                pagingInfo: {
                    limit: number
                }
            }
        }
        merch: Items<{
            image: {
                sources: Array<{ url: string }>
            }
            name: string
            description: string
            price: string
            uri: string
            url: string
        }>
    }
}
export const fetchArtistOverview = async (uri: string) => {
    const res = await GraphQL.Request(GraphQL.Definitions.queryArtistOverview, {
        uri,
        locale: Locale.getLocale(),
        includePrerelease: true,
    })

    return res.data.artistUnion as fetchArtistOverviewRes
}
