export type Items<A> = {
    items: Array<A>
}
export type ItemsWithCount<A> = Items<A> & {
    totalCount: number
}

export type ItemsReleases<A> = ItemsWithCount<{
    releases: Items<A>
}>

export type ItemsReleasesWithCount<A> = ItemsWithCount<{
    releases: ItemsWithCount<A>
}>

export type Date = (
    | {
          year: number
          month?: number
          day?: number
          hour?: number
          mintue?: number
          second?: number
          precision: "YEAR"
      }
    | {
          year: number
          month: number
          day?: number
          hour?: number
          mintue?: number
          second?: number
          precision: "MONTH"
      }
    | {
          year: number
          month: number
          day: number
          hour?: number
          mintue?: number
          second?: number
          precision: "DAY"
      }
    | {
          year: number
          month: number
          day: number
          hour: number
          mintue?: number
          second?: number
          precision: "HOUR"
      }
    | {
          year: number
          month: number
          day: number
          hour: number
          mintue: number
          second?: number
          precision: "MINUTE"
      }
    | {
          year: number
          month: number
          day: number
          hour: number
          mintue: number
          second: number
          precision: "SECOND"
      }
) & {
    isoString: string
}

type Playability = {
    playable: boolean
    reason: "PLAYABLE" | string
}

export type ItemMin = {
    id: string
    uri: string
    name: string
    type: "SINGLE" | "ALBUM" | "COMPILATION" | string
    coverArt: {
        sources: Array<Spicetify.Platform.ImageSized>
    }
    sharingInfo: {
        shareId: string
        shareUrl: string
    }
}

export type ItemBase = ItemMin & {
    tracks: {
        totalCount: number
    }
    playability: Playability
}

export type Item1 = ItemBase & {
    copyright: {
        items: Array<{
            type: string
            text: string
        }>
    }
    date: Date

    label: string
}

export type Item2 = ItemBase & {
    date: {
        year: number
        isoString: string
    }
}

export type TopTracksItem = {
    uid: string
    track: {
        id: string
        uri: string
        name: string
        playcount: string
        discNumber: number
        duration: {
            totalMilliseconds: number
        }
        playability: Playability
        contentRating: {
            label: "NONE" | "EXPLICIT"
        }
        artists: Items<{
            uri: string
            profile: {
                name: string
            }
        }>
        albumOfTrack: {
            uri: string
            coverArt: {
                sources: Array<{ url: string }>
            }
        }
    }
}
