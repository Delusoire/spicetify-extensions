import { array as a, array, readonlyArray, record } from "fp-ts"
import { flap } from "fp-ts/Array"
import { identity, pipe as p } from "fp-ts/function"
import { fetchGQLAlbumRes, fetchPlatPlaylistContents, movePlatPlaylistTracks } from "../../shared/api"
import { SpotifyLoc, SpotifyURI } from "../../shared/util"
import { groupBy } from "fp-ts/lib/NonEmptyArray"
import { tracksRatings } from "./app"

const w = (n: number) => Math.exp(n)
export const getAlbumRating = (album: fetchGQLAlbumRes) =>
    p(
        album.tracks.items,
        a.map(i => tracksRatings[i.track.uri]),
        x => x,
        a.filter(Boolean),
        x => x,
        a.map(r => [r, w(r)] as const),
        readonlyArray.unzip<number, number>,
        ([rs, wrs]) =>
            readonlyArray.reduceWithIndex(0, (i, s, r: number) => s + r * wrs[i])(rs) /
                readonlyArray.reduce(0, (s, wr: number) => s + wr)(wrs) || 0,
    )

export const sortPlaylistByRating = async (playlist: SpotifyURI) => {
    const items = await fetchPlatPlaylistContents(playlist)

    if (items.length === 0) return

    const urisGroupedByRating = p(
        items,
        a.map(t => t.uri),
        groupBy(uri => String(tracksRatings[uri] ?? 0)),
    )

    p(
        a.makeBy(11, identity),
        a.map(i => urisGroupedByRating[i] ?? []),
        a.reduce(["first" as SpotifyURI], (lastUris, currUris) => {
            if (currUris.length) movePlatPlaylistTracks(playlist, currUris, SpotifyLoc.before(lastUris[0]))
            return currUris
        }),
    )
}
