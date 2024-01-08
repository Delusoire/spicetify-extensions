import { render } from "https://esm.sh/lit"

import { PermanentMutationObserver } from "../../shared/util.ts"

import { PlayerW } from "./utils/PlayerW.ts"
import { LyricsWrapper } from "./components/components.ts"

const injectLyrics = (insertSelector: string, scrollSelector: string) => () => {
    const lyricsContainer = document.querySelector<HTMLDivElement>(insertSelector)
    if (!lyricsContainer || lyricsContainer.classList.contains("injected")) return
    lyricsContainer.classList.add("injected")
    const lyricsContainerClone = lyricsContainer.cloneNode(false) as typeof lyricsContainer
    lyricsContainer.replaceWith(lyricsContainerClone)

    const ourLyricsContainer = new LyricsWrapper(scrollSelector)
    ourLyricsContainer.song = PlayerW.getSong() ?? null
    PlayerW.songSubject.subscribe(song => ourLyricsContainer.updateSong(song ?? null))
    PlayerW.progressPercentSubject.subscribe(progress => ourLyricsContainer.updateProgress(progress))
    render(ourLyricsContainer, lyricsContainerClone)
}

const injectNPVLyrics = injectLyrics(
    "aside .main-nowPlayingView-lyricsContent",
    "aside .main-nowPlayingView-lyricsContent",
)
const injectCinemaLyrics = injectLyrics(
    "#lyrics-cinema .lyrics-lyrics-contentWrapper",
    "#lyrics-cinema .os-viewport-native-scrollbars-invisible",
)
injectNPVLyrics()
injectCinemaLyrics()
new PermanentMutationObserver(".Root__right-sidebar", injectNPVLyrics)
new PermanentMutationObserver(".Root__lyrics-cinema", injectCinemaLyrics)
