import { task } from "https://esm.sh/fp-ts"
import { createPlatFolder } from "../../shared/api.ts"
import { SettingsSection } from "../../shared/settings.tsx"
import { loadRatings } from "./ratings.ts"
import { RATINGS_FOLDER_NAME } from "./util.ts"
import { SpotifyURI } from "../../shared/util.ts"

const settings = new SettingsSection("Star Ratings", "star-ratings")
    .addToggle({ id: "hideHearts", desc: "Hide Hearts" })
    .addToggle({ id: "halfStarRatings", desc: "Half star ratings" })
    .addToggle({ id: "showInTrackLists", desc: "Show in tracklists" })
    .addToggle({ id: "nowPlayingStarsOnRight", desc: "Place the stars for now playing track on the right" })
    .addInput({ id: "heartThreshold", desc: "Threshold for liking trakcs", inputType: "text" }, task.of("3.5"))
    .addInput({ id: "skipThreshold", desc: "Threshold for skipping trakcs", inputType: "text" }, task.of("1.5"))
    .addInput(
        {
            id: "ratingsFolderUri",
            desc: "Ratings folder uri",
            inputType: "text",
            onChange: loadRatings,
        },
        async () => (await createPlatFolder(RATINGS_FOLDER_NAME)).uri,
    )

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    hideHearts: boolean
    halfStarRatings: string
    showInTrackLists: boolean
    nowPlayingStarsOnRight: boolean
    heartThreshold: string
    skipThreshold: string
    ratingsFolderUri: SpotifyURI
}
