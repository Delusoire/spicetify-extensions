import { task } from "fp-ts"
import React, { useState } from "react"
import { fetchWebSoundOfSpotifyPlaylist } from "../../shared/api"
import { normalizeStr, titleCase } from "../../shared/util"
import { lastFmTags, spotifyGenres } from "./app"

export const genrePopup = () => {
    Spicetify.PopupModal.display({
        title: `Genres of "${normalizeStr(Spicetify.Player.data.track?.metadata?.title!)}"`,
        content: (
            <div>
                <div className="popup-row">
                    <hr className="space"></hr>
                </div>
                <SpotifyGenresContainer />
                <LastFmTagsContainer />
            </div>
        ) as any,
    })

    // Title gets added after the rest is loaded
    // const container = document.createElement("div")
    // const titleGenresOf = document.querySelector("h1.main-type-alto")
    // if (titleGenresOf) {
    //     container.appendChild(titleGenresOf)

    //     const headerSection = document.querySelector(".main-trackCreditsModal-header")

    //     headerSection?.prepend(container)
    // }
}

// @ts-ignore
globalThis.genrePopup = genrePopup

const ButtonElement = ({ name = "", color = "", onClick = task.of(undefined) as task.Task<any> }) => (
    <button className={`login-button${color}`} onClick={onClick}>
        {name}
    </button>
)

const SpotifyGenresContainer = () => {
    let [value, setValue] = useState(spotifyGenres)

    Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(spotifyGenres), 500))

    const openSoundOfPlaylistOrSearchResults = (query: string) => async () => {
        let uri = await fetchWebSoundOfSpotifyPlaylist(query)
        if (uri === null) Spicetify.Platform.History.push(`/search/${query}/playlists`)
        else Spicetify.Platform.History.push(`/playlist/${uri.split(":")[2]}`)

        Spicetify.PopupModal.hide()
    }

    return value.map(n => <ButtonElement name={titleCase(n)} onClick={openSoundOfPlaylistOrSearchResults(n)} />)
}

const LastFmTagsContainer = () => {
    if (lastFmTags.length == 0) return <></>
    let [value, setValue] = useState(lastFmTags)

    Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(lastFmTags), 100))

    const openPlaylistSearchResults = (query: string) => async () => {
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
                <ButtonElement name={titleCase(n)} onClick={openPlaylistSearchResults(n)} />
            ))}
        </div>
    )
}
