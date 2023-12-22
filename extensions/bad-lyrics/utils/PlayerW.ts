import { Song } from "./Song.ts"
import { onSongChanged } from "../../../shared/listeners.ts"
import { Subject, animationFrameScheduler, asyncScheduler } from "https://esm.sh/rxjs"

const { Player } = Spicetify
const { PlayerAPI } = Spicetify.Platform

export const PlayerW = new (class {
    private Song?: Song
    isPaused = PlayerAPI._state.isPaused
    scaledProgress = 0

    songChangedSubject = new Subject<Song | void>()
    isPausedChangedSubject = new Subject<boolean>()
    scaledProgressChangedSubject = new Subject<number>()

    GetSong = () => this.Song

    constructor() {
        {
            const callback = (state: Spicetify.Platform.PlayerAPI.PlayerState) => {
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
            }
            onSongChanged(callback)
        }

        {
            const callback = () => {
                const isPausedNext = Player.data?.isPaused ?? true
                if (this.isPaused !== isPausedNext) {
                    if (!isPausedNext) {
                        this.startTimestepping()
                    }
                    this.isPaused = !this.isPaused
                    this.isPausedChangedSubject.next(this.isPaused)
                }
            }
            Player.addEventListener("onplaypause", callback)
        }
    }

    private triggerTimestampSync() {
        let autoSyncs = 1
        asyncScheduler.schedule(
            function (self) {
                if (self!.isPaused) return

                if (!PlayerAPI._events.emitResumeSync()) {
                    PlayerAPI._contextPlayer.resume({})
                }

                autoSyncs++

                const timeout = Math.expm1((Math.LN2 / 2) * autoSyncs)

                this.schedule(self, timeout)
            },
            Math.SQRT2 - 1,
            this,
        )
    }

    private startTimestepping() {
        let oldScaledProgress = Spicetify.Player.getProgressPercent()
        animationFrameScheduler.schedule(
            function (self) {
                if (self!.isPaused) return

                self!.scaledProgress = Spicetify.Player.getProgressPercent()
                if (self!.scaledProgress !== oldScaledProgress) {
                    self!.scaledProgressChangedSubject.next(self!.scaledProgress)
                }
                oldScaledProgress = self!.scaledProgress
                this.schedule(self)
            },
            undefined,
            this,
        )

        this.triggerTimestampSync()
    }
})()