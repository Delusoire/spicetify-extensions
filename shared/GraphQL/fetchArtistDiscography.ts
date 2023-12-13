import { Item2, ItemsReleases } from "./sharedTypes.ts"

const { GraphQL } = Spicetify

export type fetchArtistDiscographyRes = {
    __typename: "artist"
    discography: {
        all: ItemsReleases<Item2>
    }
}
export const fetchArtistDiscography = async (uri: string, offset = 0, limit = 115) => {
    const res = await GraphQL.Request(GraphQL.Definitions.queryArtistDiscographyAll, {
        uri,
        offset,
        limit,
    })

    return res.data.artistUnion as fetchArtistDiscographyRes
}
