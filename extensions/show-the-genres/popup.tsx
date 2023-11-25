import { task } from "https://esm.sh/fp-ts"
import { fetchWebSoundOfSpotifyPlaylist } from "../../shared/api.ts"
import { titleCase } from "../../shared/util.ts"
import { lastFmTags, spotifyGenres } from "./app.ts"

const { React } = Spicetify

// @ts-ignore
export const genrePopup = (globalThis.genrePopup = () => {
    Spicetify.PopupModal.display({
        title: `Genres of: ${Spicetify.Player?.data.item?.metadata?.title}`,
        content: (
            <div className="genres-popup">
                {spotifyGenres.length === 0 ? <></> : <SpotifyGenresContainer />}
                {lastFmTags.length === 0 ? <></> : <LastFmTagsContainer />}
            </div>
        ),
        isLarge: true,
    })
})

const ButtonElement = ({ name = "", color = "", onClick = task.of(undefined) as task.Task<void> }) => (
    <button className={`login-button${color}`} onClick={onClick}>
        {name}
    </button>
)

const SpotifyGenresContainer = () => {
    const [value, setValue] = React.useState(spotifyGenres)

    Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(spotifyGenres), 500))

    const openSoundOfPlaylistOrSearchResults = (query: string) => async () => {
        const uri = await fetchWebSoundOfSpotifyPlaylist(query)
        if (uri === null) Spicetify.Platform.History.push(`/search/${query}/playlists`)
        else Spicetify.Platform.History.push(`/playlist/${uri.split(":")[2]}`)

        Spicetify.PopupModal.hide()
    }

    return (
        <div className="spaced-down">
            <h1 className="title">Spotify Genres</h1>
            {value.map(n => (
                <ButtonElement name={titleCase(n)} onClick={openSoundOfPlaylistOrSearchResults(n)} />
            ))}
        </div>
    )
}

const LastFmTagsContainer = () => {
    if (lastFmTags.length == 0) return <></>
    const [value, setValue] = React.useState(lastFmTags)

    Spicetify.Player.addEventListener("songchange", () => setTimeout(() => setValue(lastFmTags), 100))

    const openPlaylistSearchResults = (query: string) => async () => {
        Spicetify.Platform.History.push(`/search/${query}/playlists`)
        Spicetify.PopupModal.hide()
    }

    return (
        <div className="spaced-down">
            <h1 className="title">Last FM Tags</h1>
            {value.map(n => (
                <ButtonElement name={titleCase(n)} onClick={openPlaylistSearchResults(n)} />
            ))}
        </div>
    )
}
