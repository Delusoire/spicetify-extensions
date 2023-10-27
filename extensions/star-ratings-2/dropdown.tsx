import { range } from "fp-ts/lib/ReadonlyNonEmptyArray"
import React from "react"
import { SpotifyURI } from "../../shared/util"
import { toggleRating } from "./ratings"
import { playlistButtonSelector } from "./util"

const RatingButton = ({ i, uri }: { i: number; uri: SpotifyURI }) => (
    <button
        className="Button-sc-1dqy6lx-0 Button-textBrightAccent-sm-16-buttonTertiary-iconOnly-condensed-isUsingKeyboard-useBrowserDefaultFocusStyle rating-button"
        onClick={() => toggleRating(uri, i)}
    >
        <svg
            role="img"
            height={16}
            width={16}
            viewBox="0 0 16 16"
            className={`Svg-sc-ytk21e-0 Svg-img-icon rating-${i}`}
        >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z" />
        </svg>
    </button>
)

export const Dropdown = ({ uri }: { uri: SpotifyURI }) => (
    <div className="rating-dropdown">
        {range(1, 5).map(i => (
            <RatingButton i={i} uri={uri} />
        ))}
    </div>
)

Spicetify.Tippy(playlistButtonSelector, {
    content(ref: HTMLButtonElement) {
        const dropdown = ref.querySelector("div.rating-dropdown")
        return dropdown?.innerHTML
    },
    interactive: true,
    animateFill: false,
    offset: [0, 7],
    placement: "top",
    animation: "fade",
    trigger: "mouseenter focus",
})
