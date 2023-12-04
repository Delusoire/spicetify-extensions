import { task } from "https://esm.sh/fp-ts"

import { createFolder } from "../../shared/platformApi.ts"
import { SettingsSection } from "../../shared/settings.tsx"
import { SpotifyURI } from "../../shared/util.ts"

import { loadRatings } from "./ratings.ts"

const RATINGS_FOLDER_NAME = "Ratings"

const settings = new SettingsSection("Star Ratings 2", "star-ratings-2")
    .addInput({ id: "heartThreshold", desc: "Threshold for liking trakcs", inputType: "number" }, task.of("3"))
    .addInput({ id: "skipThreshold", desc: "Threshold for skipping trakcs", inputType: "number" }, task.of("1"))
    .addInput(
        {
            id: "ratingsFolderUri",
            desc: "Ratings folder uri",
            inputType: "text",
            onChange: loadRatings,
        },
        async () => (await createFolder(RATINGS_FOLDER_NAME)).uri,
    )

settings.pushSettings()

export const CONFIG = settings.toObject() as {
    heartThreshold: string
    skipThreshold: string
    ratingsFolderUri: SpotifyURI
}
