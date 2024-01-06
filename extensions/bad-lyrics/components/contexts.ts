import { createContext } from "https://esm.sh/@lit/context"

import { LyricsType } from "../utils/LyricsProvider.ts"

export const scrollTimeoutCtx = createContext<number>("scrollTimeout")
export const spotifyContainerCtx = createContext<HTMLElement | undefined>("spotifyContainer")
export const loadedLyricsTypeCtx = createContext<LyricsType | undefined>("loadedLyricsType")
