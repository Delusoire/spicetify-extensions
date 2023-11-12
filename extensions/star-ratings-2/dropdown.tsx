import { range } from "https://esm.sh/fp-ts/lib/ReadonlyNonEmptyArray"
import { SpotifyURI } from "../../shared/util.ts"
import { toggleRating } from "./ratings.ts"
import { CheckedPlaylistButtonIcon, curationButtonClass } from "../../shared/modules.ts"

const { React } = Spicetify

const { ButtonTertiary } = Spicetify.ReactComponent as any

const RatingButton = ({ i, uri }: { i: number; uri: SpotifyURI }) => (
    <ButtonTertiary
        size="small"
        className={curationButtonClass}
        aria-checked="true"
        aria-label=""
        condensed="true"
        iconOnly={CheckedPlaylistButtonIcon}
        semanticColor="textBrightAccent"
        // ref=
        onClick={(e: any) => toggleRating(uri, i)}
    />
)

export const Dropdown = ({ uri }: { uri: SpotifyURI }) => (
    <div className="rating-dropdown">
        {range(1, 5).map(i => (
            <RatingButton i={i} uri={uri} />
        ))}
    </div>
)
