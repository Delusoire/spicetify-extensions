import { task } from "fp-ts"
import { createPlatFolder } from "../../shared/api"
import { SettingsSection } from "../../shared/settings"
import { SpotifyURI } from "../../shared/util"
import { loadRatings } from "./ratings"

const RATINGS_FOLDER_NAME = "Ratings"

const settings = new SettingsSection("Star Ratings 2", "star-ratings-2")
    .addInput("heartThreshold", "Threshold for liking trakcs", task.of("3"))
    .addInput("skipThreshold", "Threshold for skipping trakcs", task.of("1"))
    .addInput(
        "ratingsFolderUri",
        "Ratings folder uri",
        async () => (await createPlatFolder(RATINGS_FOLDER_NAME)).uri,
        loadRatings,
    )

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    heartThreshold: string
    skipThreshold: string
    ratingsFolderUri: SpotifyURI
}
