import { task } from "fp-ts"
import { createPlatFolder } from "../../shared/api"
import { SettingsSection } from "../../shared/settings"
import { loadRatings } from "./ratings"
import { RATINGS_FOLDER_NAME } from "./util"

const settings = new SettingsSection("Star Ratings", "star-ratings")
    .addToggle("hideHearts", "Hide Hearts")
    .addToggle("halfStarRatings", "Half star ratings")
    .addToggle("showInTrackLists", "Show in tracklists")
    .addToggle("nowPlayingStarsOnRight", "Place the stars for now playing track on the right")
    .addInput("heartThreshold", "Threshold for liking trakcs", task.of("3.5"))
    .addInput("skipThreshold", "Threshold for skipping trakcs", task.of("1.5"))
    .addInput(
        "ratingsFolderUri",
        "Ratings folder uri",
        async () => (await createPlatFolder(RATINGS_FOLDER_NAME)).uri,
        loadRatings,
    )

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
