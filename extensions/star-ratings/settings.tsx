import { SettingsSection } from "../../shared/settings"

const settings = new SettingsSection("Star ratings", "star-ratings").addInput(
    "LFMApiKey",
    "Last.fm API Key",
    "44654ea047786d90338c17331a5f5d95",
)

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    halfStarRatings: string
    heartThreshold: any
    ratedFolderUri: string
    hideHearts: boolean
    showInTrackList: boolean
    skipThreshold: string
    nowPlayingStarsOnRight: boolean
}
