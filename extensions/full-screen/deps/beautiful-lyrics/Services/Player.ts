import { Signal } from "../Packages/Signal"
import { GlobalMaid, Maid } from "../Packages/Maid"

import { ProvidedMetadata, Song } from "./Player/Song"

export default new (class {
    private maid: Maid = GlobalMaid.subordinate()

    private song?: Song

    private readonly SongChangedSignal = this.maid.handle(new Signal<(Song?: Song) => void>())
    public readonly SongChanged = this.SongChangedSignal.asEvent()

    public getSong(): Song | undefined {
        return this.song
    }

    private handleSongChange = (event?: Event & { data: Spicetify.PlayerState }) => {
        this.maid.disposeEntry("Song")

        if (event?.data?.track === undefined) {
            this.song = undefined
            this.SongChangedSignal.fire()
            return
        }

        const { metadata, uri } = event.data.track

        this.song = this.maid.handle(
            new Song(
                {
                    trackId: Spicetify.URI.fromString(uri)!.id,
                    duration: event.data.duration / 1000,
                    isLocal: metadata.is_local === "true",
                    isPlaying: !event.data.is_paused,
                    metadata: metadata as ProvidedMetadata,
                },
                (song: Song) => this.SongChangedSignal.fire(song),
            ),
            "Song",
        )
    }

    constructor() {
        const handleSongChange = this.handleSongChange.bind(this)

        Spicetify.Player.addEventListener("songchange", handleSongChange)
        this.maid.handle(() => Spicetify.Player.removeEventListener("songchange", handleSongChange as any))

        handleSongChange({ data: Spicetify.Player.data } as any)
    }
})()
