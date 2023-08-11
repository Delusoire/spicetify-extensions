import { task } from "fp-ts"
import { createPlatFolder } from "../../shared/api"
import { SettingsSection } from "../../shared/settings"
import { RATINGS_FOLDER_NAME } from "./app"
import { loadRatings } from "./app"

const settings = new SettingsSection("Star ratings", "star-ratings")
    .addToggle("hideHearts", "Hide Hearts")
    .addToggle("halfStarRatings", "Half star ratings")
    .addToggle("showInTrackLists", "Show in tracklists")
    .addToggle("nowPlayingStarsOnRight", "Place the stars for now playing track on the right")
    .addInput("heartThreshold", "Threshold for liking trakcs", task.of("3.5"))
    .addInput("skipThreshold", "Threshold for skipping trakcs", task.of("1.5"))
    .addInput("ratingsFolderUri", "Rarings folder uri", () => createPlatFolder(RATINGS_FOLDER_NAME), loadRatings)

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    hideHearts: boolean
    halfStarRatings: string
    showInTrackLists: boolean
    nowPlayingStarsOnRight: boolean
    heartThreshold: string
    skipThreshold: string
    ratingsFolderUri: string
}
