import { render } from "https://esm.sh/lit"

import { PermanentMutationObserver } from "../../shared/util.ts"

import { PlayerW } from "./utils/PlayerW.ts"
import { LyricsContainer } from "./components.ts"

const injectNPVLyrics = () => {
    const lyricsContainer = document.querySelector<HTMLDivElement>(".main-nowPlayingView-lyricsContent")
    if (!lyricsContainer || lyricsContainer.classList.contains("injected")) return
    lyricsContainer.classList.add("injected")
    const lyricsContainerClone = lyricsContainer.cloneNode(false) as typeof lyricsContainer
    lyricsContainer.replaceWith(lyricsContainerClone)

    const ourLyricsContainer = new LyricsContainer()
    ourLyricsContainer.song = PlayerW.getSong() ?? null
    PlayerW.songChangedSubject.subscribe(song => ourLyricsContainer.updateSong(song ?? null))
    PlayerW.scaledProgressChangedSubject.subscribe(progress => ourLyricsContainer.updateProgress(progress))
    render(ourLyricsContainer, lyricsContainerClone)
}
injectNPVLyrics()
new PermanentMutationObserver("aside", injectNPVLyrics)
