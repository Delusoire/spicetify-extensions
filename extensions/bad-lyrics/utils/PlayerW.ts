import { Subject, animationFrameScheduler, asyncScheduler } from "https://esm.sh/rxjs"

import { onPlayedPaused, onSongChanged } from "../../../shared/listeners.ts"

import { Song } from "./Song.ts"

const { PlayerAPI } = Spicetify.Platform

export const PlayerW = new (class {
    private Song?: Song
    isPaused = PlayerAPI._state.isPaused
    scaledProgress = 0

    songChangedSubject = new Subject<Song | void>()
    isPausedChangedSubject = new Subject<boolean>()
    scaledProgressChangedSubject = new Subject<number>()

    getSong = () => this.Song

    constructor() {
        onSongChanged(state => {
            const { item } = state

            if (item && item.type === "track") {
                const uri = item.uri
                const name = item.name
                const artist = item.metadata.artist_name
                const album = item.album.name
                const duration = item.duration.milliseconds
                const isPaused = state.isPaused
                const metadata = item.metadata
                this.Song = new Song({ uri, name, artist, album, duration, isPaused, metadata })
            } else {
                this.Song = undefined
            }

            this.songChangedSubject.next(this.Song)
        })

        onPlayedPaused(state => {
            const isPausedNext = state.isPaused ?? true
            if (this.isPaused !== isPausedNext) {
                if (!isPausedNext) {
                    this.startTimestepping()
                }
                this.isPaused = !this.isPaused
                this.isPausedChangedSubject.next(this.isPaused)
            }
        })
    }

    private triggerTimestampSync() {
        let autoSyncs = 0

        const timeoutFn = () => 1000 * autoSyncs++

        asyncScheduler.schedule(
            function (self) {
                if (self!.isPaused) return

                if (!PlayerAPI._events.emitResumeSync()) {
                    PlayerAPI._contextPlayer.resume({})
                }

                this.schedule(self, timeoutFn())
            },
            timeoutFn(),
            this,
        )
    }

    private tryUpdateScaledProgress(scaledProgress: number) {
        if (this.scaledProgress === scaledProgress) return
        this.scaledProgress = scaledProgress
        this.scaledProgressChangedSubject.next(scaledProgress)
    }

    private startTimestepping() {
        animationFrameScheduler.schedule(
            function (self) {
                if (self!.isPaused) return
                self!.tryUpdateScaledProgress(Spicetify.Player.getProgressPercent())
                this.schedule(self)
            },
            undefined,
            this,
        )

        this.triggerTimestampSync()
    }

    setTimestamp = (timestamp: number) => {
        Spicetify.Player.seek(timestamp) // ms or percent
        this.tryUpdateScaledProgress(timestamp)
    }
})()
