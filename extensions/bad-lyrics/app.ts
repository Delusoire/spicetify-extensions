import { render } from "https://esm.sh/lit"

import { PermanentMutationObserver } from "../../shared/util.ts"

import { PlayerW } from "./utils/PlayerW.ts"
import { LyricsWrapper } from "./components/components.ts"

const injectLyrics = (selector: string) => () => {
    const lyricsContainer = document.querySelector<HTMLDivElement>(selector)
    if (!lyricsContainer || lyricsContainer.classList.contains("injected")) return
    lyricsContainer.classList.add("injected")
    const lyricsContainerClone = lyricsContainer.cloneNode(false) as typeof lyricsContainer
    lyricsContainer.replaceWith(lyricsContainerClone)

    const ourLyricsContainer = new LyricsWrapper(selector)
    ourLyricsContainer.song = PlayerW.getSong() ?? null
    PlayerW.songChangedSubject.subscribe(song => ourLyricsContainer.updateSong(song ?? null))
    PlayerW.scaledProgressChangedSubject.subscribe(progress => ourLyricsContainer.updateProgress(progress))
    render(ourLyricsContainer, lyricsContainerClone)
}

const injectNPVLyrics = injectLyrics("aside .main-nowPlayingView-lyricsContent")
const injectCinemaLyrics = injectLyrics(".lyrics-cinema .lyrics-lyrics-contentWrapper")
injectNPVLyrics()
injectCinemaLyrics()
new PermanentMutationObserver("aside", injectNPVLyrics)
new PermanentMutationObserver("main", injectCinemaLyrics)
