const { Locale, GraphQL } = Spicetify

type fetchArtistRelatedRes = Array<{
    id: string
    uri: string
    profile: {
        name: string
    }
    visuals: {
        avatarImage: {
            sources: Array<Spicetify.Platform.ImageSized>
        }
    }
}>
export const fetchArtistRelated = async (uri: string) => {
    const res = await GraphQL.Request(GraphQL.Definitions.queryArtistRelated, {
        uri,
        locale: Locale.getLocale(),
    })

    return res.data.artistUnion.relatedContent.relatedArtists.items as fetchArtistRelatedRes
}
