import { Track } from "https://esm.sh/v135/@fostertheweb/spotify-web-api-ts-sdk@1.2.1/dist/mjs/types.js"
import { Lyrics, findLyrics } from "./LyricsProvider.ts"

export type SpotifyTrackInformation = Track

export class Song {
    readonly uri: string
    readonly name: string
    readonly artist: string
    readonly album: string
    readonly duration: number
    readonly isLocal: boolean
    readonly lyrics: Promise<Lyrics>

    isPaused: boolean
    constructor(opts: {
        uri: string
        name: string
        artist: string
        album: string
        duration: number
        isPaused: boolean
        metadata: Spicetify.Platform.PlayerAPI.TrackMetadata
    }) {
        this.uri = opts.uri
        this.name = opts.name
        this.artist = opts.artist
        this.album = opts.album
        this.duration = opts.duration
        this.isLocal = opts.metadata.is_local === "true"
        this.isPaused = opts.isPaused

        this.lyrics = findLyrics({
            uri: this.uri,
            title: this.name,
            artist: this.artist,
            album: this.album,
            durationS: this.duration / 1000,
        })
    }
}
