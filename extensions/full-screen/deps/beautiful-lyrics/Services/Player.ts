// Packages
import { Signal } from "../Packages/Signal"
import { Maid } from "../Packages/Maid"

// Modules
import { GlobalMaid, SpotifyPlayer } from "./Session"
import { Song, ProvidedMetadata } from "./Player/Song"

// Behavior Constants
const SpicetifyTrackId = /^spotify:track:([\w\d]+)$/
const SpicetifyLocalTrackId = /^spotify:local:(.+)$/

// Class
class Player {
    // Private Properties
    private Maid: Maid = GlobalMaid.give(new Maid())

    private Song?: Song
    private SongJustChanged?: true // Used to determine when we initially fire our SongChanged event

    private Started?: true

    // Signals
    private readonly SongChangedSignal = this.Maid.give(new Signal<(Song?: Song) => void>())

    public readonly SongChanged = this.SongChangedSignal.getEvent()

    // Private Methods

    // Public Methods
    public GetSong(): Song | undefined {
        if (this.SongJustChanged) {
            // We don't want to give away a Song that isn't ready yet
            return undefined
        }

        return this.Song
    }

    public Start() {
        if (this.Started === undefined) {
            // Flip our state preventing this method from being called again
            this.Started = true

            // Handle when our song changes
            {
                const callback = (event?: Event & { data: Spicetify.PlayerState }) => {
                    // Remove our previous song
                    this.Maid.cleanEntry("Song")

                    // Determine if we even have a song
                    if (event === undefined || event.data.track === undefined) {
                        // Make sure we don't have our information any longer
                        this.Song = undefined
                        this.SongJustChanged = undefined

                        // Now fire our event
                        this.SongChangedSignal.fire()
                    } else {
                        // Store our track for ease-of-access
                        const track = event.data.track

                        // Grab track details
                        const metadata: ProvidedMetadata = track.metadata as any
                        const isLocal = metadata.is_local === "true"
                        const trackId = track.uri.match(isLocal ? SpicetifyLocalTrackId : SpicetifyTrackId)![1]
                        const duration = event.data.duration / 1000

                        // Load our information
                        this.Song = this.Maid.give(
                            new Song(duration, !event.data.is_paused, trackId, metadata, isLocal, (song: Song) =>
                                this.SongChangedSignal.fire(song),
                            ),
                            "Song",
                        )
                    }
                }

                SpotifyPlayer.addEventListener("songchange", callback)
                this.Maid.give(() => SpotifyPlayer.removeEventListener("songchange", callback as any))

                if (SpotifyPlayer.data !== undefined) {
                    callback({ data: SpotifyPlayer.data } as any)
                }
            }
        }
    }
}

export default new Player()
