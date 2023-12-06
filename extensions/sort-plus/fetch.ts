import {
    ItemBase,
    ItemsReleases,
    ItemsWithCount,
    fetchGQLAlbum,
    fetchGQLArtistDiscography,
    fetchGQLArtistOverview,
} from "../../shared/api.ts"
import { _, fp } from "../../shared/deps.ts"
import { pMchain } from "../../shared/fp.ts"
import {
    TrackData,
    parseAlbumTrack,
    parseArtistLikedTrack,
    parseLibraryAPILikedTracks,
    parsePlaylistAPITrack,
    parseTopTrackFromArtist,
} from "../../shared/parse.ts"
import { fetchArtistLikedTracks, fetchLikedTracks, fetchPlaylistContents } from "../../shared/platformApi.ts"
import { SpotifyURI } from "../../shared/util.ts"

import { CONFIG } from "./settings.ts"

export const getTracksFromAlbum = async (uri: string) => {
    const albumRes = await fetchGQLAlbum(uri)
    const releaseDate = new Date(albumRes.date.isoString).getTime()

    const filler = {
        albumUri: albumRes.uri,
        albumName: albumRes.name,
        releaseDate,
    }

    return Promise.all(
        albumRes.tracks.items.map(async track => {
            const parsedTrack = await parseAlbumTrack(track)
            return Object.assign(parsedTrack, filler) as TrackData
        }),
    )
}

export const getLikedTracks = _.flow(fetchLikedTracks, pMchain(fp.map(parseLibraryAPILikedTracks)))

export const getTracksFromPlaylist = _.flow(fetchPlaylistContents, pMchain(fp.map(parsePlaylistAPITrack)))

export const getTracksFromArtist = async (uri: SpotifyURI) => {
    const allTracks = new Array<TrackData>()

    const itemsWithCountAr = new Array<ItemsWithCount<ItemBase>>()
    const itemsReleasesAr = new Array<ItemsReleases<ItemBase>>()

    if (CONFIG.artistAllDiscography) {
        const { discography } = await fetchGQLArtistDiscography(uri)
        itemsReleasesAr.push(discography.all)
    } else {
        const { discography } = await fetchGQLArtistOverview(uri)

        CONFIG.artistLikedTracks && allTracks.push(...(await fetchArtistLikedTracks(uri)).map(parseArtistLikedTrack))
        CONFIG.artistTopTracks && allTracks.push(...discography.topTracks.items.map(parseTopTrackFromArtist))
        CONFIG.artistPopularReleases && itemsWithCountAr.push(discography.popularReleasesAlbums)
        CONFIG.artistSingles && itemsReleasesAr.push(discography.singles)
        CONFIG.artistAlbums && itemsReleasesAr.push(discography.albums)
        CONFIG.artistCompilations && itemsReleasesAr.push(discography.compilations)
    }

    const items1 = itemsWithCountAr.flatMap(iwc => iwc.items)
    const items2 = itemsReleasesAr.flatMap(ir => ir.items.flatMap(i => i.releases.items))
    const albumLikeUris = items1.concat(items2).map(item => item.uri)
    const albumsTracks = await Promise.all(albumLikeUris.map(getTracksFromAlbum))
    allTracks.push(...albumsTracks.flat())
    return await Promise.all(allTracks)
}
