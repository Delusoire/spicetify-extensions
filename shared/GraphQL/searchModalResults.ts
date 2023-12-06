import { Items } from "../api.ts"

const { GraphQL } = Spicetify

type Track = {
    __typename: "Track"
    uri: string
    name: string
    albumOfTrack: {
        coverArt: {
            extractedColors: {
                colorDark: {
                    hex: string
                    isFallback: boolean
                }
            }
            sources: Array<Spicetify.Platform.ImageSized>
        }
    }
    artists: Items<{
        profile: {
            name: string
        }
    }>
}

type TrackResponseWrapper = {
    __typename: "TrackResponseWrapper"
    data: Track
}

type searchGQLRes = Array<{
    matchedFields: string[]
    item: TrackResponseWrapper
}>
export const searchGQL = async (q: string, offset = 0, limit = 10, topResultsNum = 20, includeAudiobooks = true) => {
    const res = await GraphQL.Request(GraphQL.Definitions.searchModalResults, {
        searchTerm: q,
        offset,
        limit,
        numberOfTopResults: topResultsNum,
        includeAudiobooks,
    })

    return res.data.searchV2.topResults.itemsV2 as searchGQLRes
}
