import { task } from "fp-ts"
import React, { useState } from "react"
import { fetchSoundOfSpotifyPlaylist } from "./api"
import { lastFmTags, spotifyGenres } from "./app"
import { normalizeStr, titleCase } from "./util"
import "./popup.css"

export const genrePopup = () => {
    Spicetify.PopupModal.display({
        title: `Genres of "${normalizeStr(
            Spicetify.Player.data.track?.metadata?.title ?? "undefined",
        )}"`,
        //<style>{css}</style>
        content: (
            <div>
                <div className="popup-row">
                    <hr className="space"></hr>
                </div>
                <GenreItem />
                <LastFmTagItem />
            </div>
        ) as any,
        isLarge: true,
    })

    // Title gets added after the rest is loaded
    const container = document.createElement("div")
    const titleGenresOf = document.querySelector("h1.main-type-alto")
    if (titleGenresOf) {
        container.appendChild(titleGenresOf)

        const headerSection = document.querySelector(
            ".main-trackCreditsModal-header",
        )

        headerSection?.prepend(container)
    }
}

// @ts-ignore
window.genrePopup = genrePopup

const ButtonElement = ({
    name = "",
    color = "",
    onClick = task.of(undefined) as task.Task<any>,
}) => (
    <button className={`login-button${color}`} onClick={onClick}>
        {name}
    </button>
)

const GenreItem = () => {
    let [value, setValue] = useState(spotifyGenres)

    Spicetify.Player.addEventListener("songchange", () => {
        setTimeout(() => {
            setValue(spotifyGenres)
        }, 500)
    })

    const onClick = (query: string) => async () => {
        let uri = await fetchSoundOfSpotifyPlaylist(query)
        if (uri === null)
            Spicetify.Platform.History.push(`/search/${query}/playlists`)
        else Spicetify.Platform.History.push(`/playlist/${uri.split(":")[2]}`)

        Spicetify.PopupModal.hide()
    }

    return value.map(n => (
        <ButtonElement name={titleCase(n)} onClick={onClick(n)} />
    ))
}

const LastFmTagItem = () => {
    if (lastFmTags.length == 0) return <div />
    let [value, setValue] = useState(lastFmTags)

    Spicetify.Player.addEventListener("songchange", () => {
        setTimeout(() => {
            setValue(lastFmTags)
        }, 100)
    })

    const onClick = (query: string) => async () => {
        Spicetify.Platform.History.push(`/search/${query}/playlists`)
        Spicetify.PopupModal.hide()
    }

    return (
        <div>
            <div className="popup-row">
                <hr className="space" />
            </div>
            <div className="popup-row">
                <h1 className="div-title">Last FM Tags</h1>
            </div>
            {value.map(n => (
                <ButtonElement name={titleCase(n)} onClick={onClick(n)} />
            ))}
        </div>
    )
}
