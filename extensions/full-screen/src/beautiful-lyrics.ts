export default {}

import { trapElement } from "../../../shared/util"
import LyricsRenderer from "../deps/beautiful-lyrics/Modules/LyricsRenderer"
import Player from "../deps/beautiful-lyrics/Services/Player"
import { Song } from "../deps/beautiful-lyrics/Services/Player/Song"

let closePrevConn: () => boolean | undefined
trapElement("#BeautifulLyrics", lyricsContainer => {
    closePrevConn?.()

    if (!lyricsContainer) return

    lyricsContainer.innerHTML = ""
    const lyrics = document.createElement("div")
    lyrics.classList.add("RootContainer")
    lyricsContainer.append(lyrics)

    let lastSong: Song | undefined
    let lyricsRenderer: HTMLElement | undefined
    const HandlePageView = async () => {
        const song = Player.getSong()
        if (lastSong === song) return

        lyricsRenderer?.remove()

        if (!song) return
        const details = await song.GetDetails()

        if (details?.Lyrics) {
            lyricsRenderer = LyricsRenderer(song, details.Lyrics)
            lyrics?.appendChild(lyricsRenderer)
        }

        lastSong = song
    }

    closePrevConn = Player.SongChanged.connect(HandlePageView)
    HandlePageView()
})
