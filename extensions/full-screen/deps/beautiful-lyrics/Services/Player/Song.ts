// Packages
import { Signal } from "../../Packages/Signal"
import { Maid, Disposable } from "../../Packages/Maid"
import { OnNextFrame, Timeout } from "../../Packages/Scheduler"

// Modules
import { Cache, ExpirationSettings } from "../Cache"
import { ParseLyrics, ParsedLyrics, LyricsResult } from "./LyricsParser"
import Spotify from "./Spotify"

// Types
namespace SpotifyTrackInformationSpace {
    type ExternalUrls = {
        spotify: string
    }

    type ExternalIds = {
        isrc: string
    }

    type Image = {
        height: number
        url: string
        width: number
    }

    type Artist = {
        external_urls: ExternalUrls
        href: string
        id: string
        name: string
        type: string
        uri: string
    }

    type Album = {
        album_type: string
        artists: Artist[]
        available_markets: string[]
        external_urls: ExternalUrls
        href: string
        id: string
        images: Image[]
        name: string
        release_date: string
        release_date_precision: string
        total_tracks: number
        type: string
        uri: string
    }

    type TrackInformation = {
        album: Album
        artists: Artist[]
        available_markets: string[]
        disc_number: number
        duration_ms: number
        explicit: boolean
        external_ids: ExternalIds
        external_urls: ExternalUrls
        href: string
        id: string
        is_local: boolean
        name: string
        popularity: number
        preview_url: string
        track_number: number
        type: string
        uri: string
    }

    export type Self = TrackInformation
}
export type SpotifyTrackInformation = SpotifyTrackInformationSpace.Self

export type ProvidedMetadata = {
    album_artist_name: string
    album_disc_count: string
    album_disc_number: string
    album_title: string
    album_track_count: string
    album_track_number: string
    album_uri: string

    artist_name: string
    artist_uri: string

    "canvas.artist.avatar": string
    "canvas.artist.name": string
    "canvas.artist.uri": string
    "canvas.canvasUri": string
    "canvas.entityUri": string
    "canvas.explicit": string
    "canvas.fileId": string
    "canvas.id": string
    "canvas.type": string
    "canvas.uploadedBy": string
    "canvas.url": string

    "collection.can_add": string
    "collection.can_ban": string
    "collection.in_collection": string
    "collection.is_banned": string

    is_local?: string
    local_file_path?: string
    local_file_size?: string

    context_uri: string
    duration: string
    entity_uri: string
    has_lyrics: string

    image_large_url: string
    image_small_url: string
    image_url: string
    image_xlarge_url: string

    interaction_id: string
    iteration: string
    marked_for_download: string
    page_instance_id: string
    popularity: string
    title: string
    track_player: string
}
type CoverArt = {
    Large: string
    Big: string
    Default: string
    Small: string
}
type Details = {
    // Metadata
    ISRC: string

    // Dynamic
    Lyrics?: ParsedLyrics
}

type SpotifyLyric = {
    Type: Spotify.LyricSyncType
    Content: Spotify.LyricLines
}
type SpotifyLyrics = Map<string, SpotifyLyric>

type BackendLyric = {
    Source: "AppleMusic"
    IsSynced: boolean
    Content: string
}

const TrackInformationExpiration: ExpirationSettings = {
    Duration: 2,
    Unit: "Weeks",
}
const ProviderLyricsExpiration: ExpirationSettings = {
    Duration: 1,
    Unit: "Months",
}
const ParsedLyricsExpiration: ExpirationSettings = {
    Duration: 1,
    Unit: "Months",
}

const SyncTimeouts = [0, 0.05, 0.1, 0.15, 0.75, 2.5, 5, 10, 30]

let FirstSongLoaded = false

export class Song implements Disposable {
    // Private Properties
    private Maid: Maid = new Maid()

    private FireChangedSignal?: (song: Song) => void

    // Private Song Metadata
    private readonly Id: string
    private readonly Duration: number
    private readonly CoverArt: CoverArt
    private readonly IsLocal: boolean
    private Details?: Details

    // Private Song State
    private Playing: boolean
    private Timestamp: number = 0
    private DeltaTime: number = 1 / 60
    private AutomatedSyncsExecuted = 0

    private LoadedDetails?: true

    // Signals
    private readonly TimeSteppedSignal = this.Maid.handle(
        new Signal<(timestamp: number, deltaTime: number, skipped?: true) => void>(),
    )
    private readonly IsPlayingChangedSignal = this.Maid.handle(new Signal<(isPlaying: boolean) => void>())
    private readonly DetailsLoadedSignal = this.Maid.handle(new Signal<() => void>())

    public readonly TimeStepped = this.TimeSteppedSignal.asEvent()
    public readonly IsPlayingChanged = this.IsPlayingChangedSignal.asEvent()

    // Constructor
    constructor(
        {
            trackId,
            duration,
            isLocal,
            isPlaying,
            metadata,
        }: { trackId: string; duration: number; isLocal: boolean; isPlaying: boolean; metadata: ProvidedMetadata },
        fireChangedSignal: (song: Song) => void,
    ) {
        {
            this.FireChangedSignal = fireChangedSignal

            this.Id = trackId
            this.Duration = duration
            this.IsLocal = isLocal

            this.CoverArt = {
                Large: metadata.image_xlarge_url,
                Big: metadata.image_large_url,
                Default: metadata.image_url,
                Small: metadata.image_small_url,
            }

            this.Playing = isPlaying
        }

        this.HandleEvents()

        this.LoadDetails()
    }

    private HandleEvents() {
        const startSpotifyTimestamp = Spicetify.Player.getProgress()

        // Watch for when we complete a full song-change (progress resets)
        const onProgress = (event?: Event & { data: number }) => {
            if (event === undefined) return

            // Now check to see if our timestamp changed (if it has we've fully changed)
            if (FirstSongLoaded === false || startSpotifyTimestamp !== event.data) {
                FirstSongLoaded = true
                this.Maid.disposeEntry("WaitForSongStart")
                this.StartNaturalTimestepping()
            }
        }

        const onPlayPause = (event?: Event & { data: Spicetify.PlayerState }) => {
            if (event === undefined) return

            if (this.Playing === event.data.isPaused) {
                this.Playing = !this.Playing
                this.IsPlayingChangedSignal.fire(this.Playing)

                // If we pause we should stop AutomaticSync since we will be resynced on play
                if (this.Playing === false) this.Maid.disposeEntry("AutomaticSync")
            }
        }

        Spicetify.Player.addEventListener("onprogress", onProgress)
        this.Maid.handle(
            () => Spicetify.Player.removeEventListener("onprogress", onProgress as any),
            "WaitForSongStart",
        )

        Spicetify.Player.addEventListener("onplaypause", onPlayPause)
        this.Maid.handle(() => Spicetify.Player.removeEventListener("onplaypause", onPlayPause as any))
    }

    private GetLyricsFromSpotify(recordCode: string, ourPopularity: number) {
        return Spicetify.CosmosAsync.request("GET", `https://api.spotify.com/v1/search?q=isrc:${recordCode}&type=track`)
            .catch(error => {
                console.warn(error)
                throw error
            })
            .then(response => {
                if (response.status < 200 || 300 <= response.status)
                    throw `Failed to get Requests for RecordCode (${recordCode})`

                return response.body as Spotify.RecordReleases
            })
            .then(async releases => {
                // Store our ids/attributes for sorting later
                const releaseIds: string[] = []
                const releaseAttributeScores: Record<string, number> = {}

                for (const release of releases.tracks.items) {
                    // Now store ourselves
                    releaseIds.push(release.id)
                    releaseAttributeScores[release.id] = release.popularity
                }

                // Add ourselves to the release-ids
                if (releaseIds.includes(this.Id) === false) {
                    releaseIds.push(this.Id)
                    releaseAttributeScores[this.Id] = ourPopularity
                }

                // Now sort our releases
                releaseIds.sort((a, b) => {
                    return releaseAttributeScores[b] - releaseAttributeScores[a]
                })

                // Now grab our releases for all the songs
                const lyrics: SpotifyLyrics = new Map()
                const lyricsPromises: Promise<void>[] = []

                for (const releaseId of releaseIds) {
                    lyricsPromises.push(
                        Spicetify.CosmosAsync.request(
                            "GET",
                            `https://spclient.wg.spotify.com/color-lyrics/v2/track/${releaseId}?format=json&vocalRemoval=false`,
                        )
                            .catch(error => {
                                console.warn(error)
                                return undefined
                            })
                            .then((response?: Spicetify.CosmosAsync.Response) => {
                                if (response === undefined) {
                                    return // Also means no lyrics
                                }

                                if (response.status < 200 || response.status > 299) {
                                    // This means no lyrics
                                    return
                                }

                                const retrievedLyrics = response.body as Spotify.RetrievedLyrics

                                lyrics.set(releaseId, {
                                    Type: retrievedLyrics.lyrics.syncType,
                                    Content: retrievedLyrics.lyrics.lines,
                                })
                            }),
                    )
                }

                return Promise.all(lyricsPromises).then(() => lyrics)
            })
            .then(lyrics => {
                // Find our best-lyric (only line-synced no static since static lyrics are often wrong)
                for (const lyric of lyrics.values()) {
                    if (lyric.Type === "LINE_SYNCED") {
                        return lyric
                    }
                }

                return undefined
            })
    }

    private GetLyricsFromBackendProvider = (recordCode: string) =>
        fetch(`https://beautiful-lyrics.socalifornian.live/lyrics/${recordCode}`)
            .then(res => {
                if (res.ok === false)
                    throw `Failed to load Lyrics for Track (${this.Id}), Error: ${res.status} ${res.statusText}`

                return res.text()
            })
            .then(text => (text === "" ? undefined : (JSON.parse(text) as BackendLyric)))

    private LoadDetails() {
        if (this.IsLocal) {
            this.Details = { ISRC: "", Lyrics: undefined }
            this.LoadedDetails = true
            this.DetailsLoadedSignal.fire()
            return
        }

        Cache.GetFromExpireCache("TrackInformation", this.Id)
            .then(trackInformation => {
                if (trackInformation === undefined) {
                    return Spicetify.CosmosAsync.request("GET", `https://api.spotify.com/v1/tracks/${this.Id}`) // Uncaught on purpose - it should rarely ever fail
                        .catch(error => {
                            console.warn(error)
                            throw error
                        })
                        .then(response => {
                            if (response.status < 200 || response.status > 299) {
                                throw `Failed to load Track (${this.Id}) Information`
                            }

                            // Extract our information
                            const trackInformation = response.body as SpotifyTrackInformation

                            // Save our information
                            Cache.SetExpireCacheItem(
                                "TrackInformation",
                                this.Id,
                                trackInformation,
                                TrackInformationExpiration,
                            )

                            // Now send our track-information out
                            return trackInformation
                        })
                } else {
                    return trackInformation
                }
            })
            .then((trackInformation): Promise<[SpotifyTrackInformation, LyricsResult | false | undefined]> => {
                return Cache.GetFromExpireCache("ProviderLyrics", trackInformation.external_ids.isrc).then(
                    storedProviderLyrics => [trackInformation, storedProviderLyrics],
                )
            })
            .then(
                ([trackInformation, storedProviderLyrics]): Promise<
                    [SpotifyTrackInformation, LyricsResult | false]
                > => {
                    // Now determine if we have any provider lyrics at all
                    const recordCode = trackInformation.external_ids.isrc
                    if (storedProviderLyrics === undefined) {
                        return this.GetLyricsFromBackendProvider(recordCode)
                            .then((backendLyric): Promise<[BackendLyric | SpotifyLyric | undefined, boolean]> => {
                                if (backendLyric === undefined || backendLyric.IsSynced === false) {
                                    return this.GetLyricsFromSpotify(recordCode, trackInformation.popularity).then(
                                        spotifyLyric => {
                                            if (spotifyLyric === undefined) {
                                                return [backendLyric, false]
                                            } else {
                                                return [spotifyLyric, true]
                                            }
                                        },
                                    )
                                } else {
                                    return Promise.resolve([backendLyric, false])
                                }
                            })
                            .then(([lyric, isSpotifyLyric]) => {
                                // If we don't have either lyric then we clearly dont have any
                                if (lyric === undefined) {
                                    return undefined
                                }

                                // Determine our format
                                return (
                                    isSpotifyLyric
                                        ? {
                                              Source: "Spotify",
                                              Content: (lyric as SpotifyLyric).Content,
                                          }
                                        : {
                                              Source: "AppleMusic",
                                              Content: (lyric as BackendLyric).Content,
                                          }
                                ) as LyricsResult
                            })
                            .then(providerLyrics => {
                                // Determine our final value
                                const lyrics = providerLyrics ?? false

                                // Save our information
                                Cache.SetExpireCacheItem("ProviderLyrics", recordCode, lyrics, ProviderLyricsExpiration)

                                // Finally, return back our information
                                return [trackInformation, lyrics]
                            })
                    } else {
                        return Promise.resolve([trackInformation, storedProviderLyrics])
                    }
                },
            )
            .then(
                ([trackInformation, storedProviderLyrics]): Promise<
                    [SpotifyTrackInformation, LyricsResult | false, ParsedLyrics | false | undefined]
                > => {
                    return Cache.GetFromExpireCache("ISRCLyrics", trackInformation.external_ids.isrc).then(
                        storedParsedLyrics => [trackInformation, storedProviderLyrics, storedParsedLyrics],
                    )
                },
            )
            .then(
                ([trackInformation, storedProviderLyrics, storedParsedLyrics]): Promise<
                    [SpotifyTrackInformation, ParsedLyrics | undefined]
                > => {
                    // If we do not have anything stored for our parsed-lyrics then we need to generate it
                    if (storedParsedLyrics === undefined) {
                        // Set our parsed-lyrics as having failed by default
                        let parsedLyrics: ParsedLyrics | false = false

                        // If we DO have provider lyrics then we can parse them
                        if (storedProviderLyrics !== false) {
                            parsedLyrics = ParseLyrics(storedProviderLyrics)
                        }

                        // Save our information
                        Cache.SetExpireCacheItem(
                            "ISRCLyrics",
                            trackInformation.external_ids.isrc,
                            parsedLyrics,
                            ParsedLyricsExpiration,
                        )

                        // Now return our information
                        return Promise.resolve([trackInformation, parsedLyrics || undefined])
                    } else {
                        return Promise.resolve([trackInformation, storedParsedLyrics || undefined])
                    }
                },
            )
            .then(([trackInformation, parsedLyrics]) => {
                // Set our details
                this.Details = {
                    ISRC: trackInformation.external_ids.isrc,

                    Lyrics: parsedLyrics,
                }

                // Now mark that our details are loaded and fire our event
                this.LoadedDetails = true
                this.DetailsLoadedSignal.fire()
            })
    }

    private TriggerAutomatedSync() {
        if (this.Playing === false || this.AutomatedSyncsExecuted >= SyncTimeouts.length) return

        /*
			So first off, I discovered that you only need to call play/resume to force a resync of the
			timestamp.

			However, if you try to call Spicetify.Player.play() you'll find the console produces errors.
			Now these errors in a try/catch block mean nothing but they still appear. We know it's not
			a problem so why should we pollute the console with stuff no one cares about?

			Well, I discovered that the Spicetify.Player.play() function is actually a wrapper for the
			internal resume method that Spotify has. When I looked at that code I then discovered that
			the resume() method uses things we have direct access to thanks to Spicetify directly
			exposing that internal class (which is what .origin is).

			So, all I had to do was gut out the internal resume() method code and get rid of all the
			async/await crap and what we get is the code below. This is the same as calling Spicetify.Player.play()
			but without the dumb errors in the console.
		*/
        const spotifyPlayerOrigin = Spicetify.Player.origin
        if (!spotifyPlayerOrigin._events.emitResumeSync()) {
            spotifyPlayerOrigin._contextPlayer
                .resume({})
                .catch((error: Error) => console.warn("BeautifulLyrics: Failed to force resync", error))
        }

        this.AutomatedSyncsExecuted++

        this.Maid.handle(
            Timeout(SyncTimeouts[this.AutomatedSyncsExecuted], this.TriggerAutomatedSync.bind(this)),
            "AutomaticSync",
        )
    }

    private StartNaturalTimestepping() {
        let lastTime = Date.now()
        let lastUpdatedPlaybackTimestamp = -1

        const step = () => {
            const timeNow = Date.now()
            const deltaTime = (timeNow - lastTime) / 1000

            /*
				The idea here is that we use Spotifys internal timestamp (which is set on every play/pause/seek)
				to determine how long time has passed since then.

				We then add that delta-time to the last known playback-timestamp to get our current timestamp.

				Both of these provided timestamps are extremely accurate. Whenever corrections are made
				we also automatically correct to that timestamp. Meaning that this whole system is enclosed
				and requires no external input/correction.

				The logic for when we are paused is simply so that we have can have an initial timestamp
				update for when the song actually loads/plays (this allows us to fire that loaded signal).
			*/
            const lastActionTimestamp = Spicetify.Platform.PlayerAPI._state.timestamp
            const lastPlaybackTimestamp = Spicetify.Platform.PlayerAPI._state.positionAsOfTimestamp

            if (this.Playing) {
                const timeSinceLastAction = timeNow - lastActionTimestamp
                const timestamp = (lastPlaybackTimestamp + timeSinceLastAction) / 1000

                lastUpdatedPlaybackTimestamp = lastPlaybackTimestamp

                this.UpdateTimestamp(Math.min(timestamp, this.Duration), deltaTime)
            } else if (lastUpdatedPlaybackTimestamp !== lastPlaybackTimestamp) {
                lastUpdatedPlaybackTimestamp = lastPlaybackTimestamp
                this.UpdateTimestamp(lastPlaybackTimestamp / 1000, 0)
            }

            lastTime = timeNow

            this.Maid.handle(OnNextFrame(step), "NaturalTimestepping")
        }

        this.TriggerAutomatedSync()

        step()
    }

    private UpdateTimestamp(timestamp: number, deltaTime: number, skipped?: true) {
        this.Timestamp = timestamp

        if (this.FireChangedSignal !== undefined) {
            this.FireChangedSignal(this)
            this.FireChangedSignal = undefined
        }

        this.TimeSteppedSignal.fire(timestamp, deltaTime, skipped)
    }

    public GetDetails(): Promise<Details | undefined> {
        if (this.LoadedDetails === true) return Promise.resolve(this.Details)
        else return new Promise(resolve => this.DetailsLoadedSignal.connect(() => resolve(this.Details)))
    }

    public GetTimestamp = () => this.Timestamp

    public SetTimestamp = (timestamp: number) => Spicetify.Player.seek(timestamp * 1000)

    public dispose = () => this.Maid.dispose()
}
