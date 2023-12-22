import { render } from "https://esm.sh/lit"

import { PermanentMutationObserver } from "../../shared/util.ts"

import { PlayerW } from "./utils/PlayerW.ts"
import { LyricsContainer } from "./components.ts"

debugger

new PermanentMutationObserver("aside", () => {
    const lyricsContainer = document.querySelector<HTMLDivElement>(".main-nowPlayingView-lyricsContent")
    if (!lyricsContainer || lyricsContainer.classList.contains("injected")) return
    lyricsContainer.classList.add("injected")
    lyricsContainer.replaceWith(lyricsContainer.cloneNode(false))

    const ourLyricsContainer = new LyricsContainer()
    ourLyricsContainer.song = PlayerW.GetSong() ?? null
    PlayerW.songChangedSubject.subscribe(song => (ourLyricsContainer.song = song ?? null))
    PlayerW.scaledProgressChangedSubject.subscribe(progress => ourLyricsContainer.updateProgress(progress))
    render(ourLyricsContainer, lyricsContainer)
})
