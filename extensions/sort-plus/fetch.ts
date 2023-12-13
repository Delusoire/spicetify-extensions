import { fetchAlbum } from "../../shared/GraphQL/fetchAlbum.ts"
import { fetchArtistDiscography } from "../../shared/GraphQL/fetchArtistDiscography.ts"
import { fetchArtistOverview } from "../../shared/GraphQL/fetchArtistOveriew.ts"
import { ItemMin, ItemsReleases, ItemsReleasesWithCount, ItemsWithCount } from "../../shared/GraphQL/sharedTypes.ts"
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
    const albumRes = await fetchAlbum(uri)
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

    const itemsWithCountAr = new Array<ItemsWithCount<ItemMin>>()
    const itemsReleasesAr = new Array<ItemsReleases<ItemMin>>()
    const appearsOnAr = new Array<ItemsReleasesWithCount<ItemMin>>()

    if (CONFIG.artistAllDiscography) {
        const items = await fetchArtistDiscography(uri)
        itemsReleasesAr.push({ items, totalCount: Infinity })
    } else {
        const { discography, relatedContent } = await fetchArtistOverview(uri)

        CONFIG.artistLikedTracks && allTracks.push(...(await fetchArtistLikedTracks(uri)).map(parseArtistLikedTrack))
        CONFIG.artistTopTracks && allTracks.push(...discography.topTracks.items.map(parseTopTrackFromArtist))
        CONFIG.artistPopularReleases && itemsWithCountAr.push(discography.popularReleasesAlbums)
        CONFIG.artistSingles && itemsReleasesAr.push(discography.singles)
        CONFIG.artistAlbums && itemsReleasesAr.push(discography.albums)
        CONFIG.artistCompilations && itemsReleasesAr.push(discography.compilations)
        CONFIG.artistAppearsOn && appearsOnAr.push(relatedContent.appearsOn)
    }

    const items1 = itemsWithCountAr.flatMap(iwc => iwc.items)
    const items2 = itemsReleasesAr.flatMap(ir => ir.items.flatMap(i => i.releases.items))
    const albumLikeUris = items1.concat(items2).map(item => item.uri)
    const albumsTracks = await Promise.all(albumLikeUris.map(getTracksFromAlbum))

    const appearsOnUris = appearsOnAr.flatMap(ir => ir.items.flatMap(i => i.releases.items)).map(item => item.uri)
    const appearsOnTracks = await Promise.all(appearsOnUris.map(getTracksFromAlbum))

    allTracks.push(...albumsTracks.flat(), ...appearsOnTracks.flat().filter(track => track.artistUris.includes(uri)))
    return await Promise.all(allTracks)
}
