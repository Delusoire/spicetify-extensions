import { SpotifyTrackInformation } from "./Player/Song"
import { ParsedLyrics, LyricsResult } from "./Player/LyricsParser"
import { nonEmptyArray } from "fp-ts"

export type ExpirationSettings = {
    Duration: number
    Unit: "Weeks" | "Months"
}

type ExpireItem<C> = {
    ExpiresAt: number
    CacheVersion: number

    Content: C
}

type ExpireCachesItemTypes = {
    TrackInformation: SpotifyTrackInformation
    ProviderLyrics: LyricsResult | false // This is for storing lyrics from the provider
    ISRCLyrics: ParsedLyrics | false // This is for storing the processed lyrics
}
type ExpireCacheName = keyof ExpireCachesItemTypes
type Store = {
    Analytics: {
        LastVisitedAt?: number
    }

    LyricViews: {
        CardLyricsVisible: boolean
        PlaybarDetailsHidden: boolean
    }
}
type StoreItemName = keyof Store

const StoreTemplates: Store = {
    Analytics: {},

    LyricViews: {
        CardLyricsVisible: false,
        PlaybarDetailsHidden: false,
    },
}

const ExpireCacheStoreItemVersions: Map<ExpireCacheName, number> = new Map()
ExpireCacheStoreItemVersions.set("TrackInformation", 2)
ExpireCacheStoreItemVersions.set("ProviderLyrics", 1)
ExpireCacheStoreItemVersions.set("ISRCLyrics", 6)

const StoreItemVersions: Map<StoreItemName, number> = new Map()
StoreItemVersions.set("Analytics", 1)
StoreItemVersions.set("LyricViews", 1)

export const Cache = new (class {
    private readonly Store: Store

    constructor() {
        const generalStore = this.LoadStore()

        this.Store = generalStore

        // Remove our old ExpireCache store items
        const OldExpireCacheStoreItemVersions: Map<string, number> = new Map()
        OldExpireCacheStoreItemVersions.set("TrackInformation", 1)
        OldExpireCacheStoreItemVersions.set("ISRCLyrics", 11)

        for (const [itemName, version] of OldExpireCacheStoreItemVersions) {
            localStorage.removeItem(`BeautifulLyrics:ExpireCache_${itemName}`)
            nonEmptyArray
                .range(1, version)
                .map(oldVersion => localStorage.removeItem(`BeautifulLyrics:ExpireCache_${itemName}_V${oldVersion}`))
        }

        // Remove our old General store items (if it exists)
        for (const [itemName, version] of StoreItemVersions) {
            localStorage.removeItem(this.GetItemLocation(itemName, false))
            nonEmptyArray
                .range(1, version)
                .map(oldVersion => localStorage.removeItem(this.GetItemLocation(itemName, oldVersion)))
        }
    }

    private LoadStore() {
        const templates = StoreTemplates

        const temporaryStore: any = {}
        const missingItems: Record<string, any> = {}

        Object.keys(templates).map(key => {
            const serializedValue = localStorage.getItem(this.GetItemLocation(key as StoreItemName))

            if (serializedValue === null) missingItems[key] = templates[key as StoreItemName]
            else temporaryStore[key] = JSON.parse(serializedValue)
        })

        return {
            ...temporaryStore,
            // Deep-clone and ensures we are JSON-serializable
            ...JSON.parse(JSON.stringify(missingItems)),
        }
    }

    private GetItemLocation(itemName: StoreItemName, versionOverride?: number | false) {
        const versionNumber =
            versionOverride === undefined
                ? StoreItemVersions.get(itemName as StoreItemName)
                : versionOverride === false
                ? undefined
                : versionOverride

        return `BeautifulLyrics:General_${itemName}${versionNumber ? `_V${versionNumber}` : ""}`
    }

    private SaveChanges(itemName: StoreItemName, item: string) {
        localStorage.setItem(this.GetItemLocation(itemName), item)
    }

    private GetFromCacheAPI<C>(cacheName: string, itemName: string): Promise<C | undefined> {
        return caches
            .open("BeautifulLyrics")
            .then(cache => cache.match(`/${cacheName}/${itemName}`))
            .then(response => response?.json())
    }

    private UpdateCacheAPI(cacheName: string, itemName: string, content: any) {
        return caches
            .open("BeautifulLyrics")
            .then(cache =>
                cache.put(
                    `/${cacheName}/${itemName}`,
                    new Response(JSON.stringify(content), {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }),
                ),
            )
            .catch(error => {
                console.warn(`Failed to Update Cache API (${cacheName}/${itemName})`)
                console.error(error)
            })
    }

    public GetDynamicItem<I>(itemName: string): I | undefined {
        return (localStorage.getItem(itemName) as unknown as I) ?? undefined
    }

    public SetDynamicItem(itemName: string, item: string) {
        localStorage.setItem(`BeautifulLyrics:Dynamic_${itemName}`, item)
    }

    public GetItem<K extends StoreItemName>(itemName: K): Store[K] {
        return this.Store[itemName]
    }

    public SaveItemChanges<K extends StoreItemName>(itemName: K) {
        this.SaveChanges(itemName, JSON.stringify(this.Store[itemName]))
    }

    public GetFromExpireCache = <N extends ExpireCacheName>(expireCacheName: N, itemName: string) =>
        this.GetFromCacheAPI<ExpireItem<ExpireCachesItemTypes[N]>>(`ExpireCache/${expireCacheName}`, itemName).then(
            expireItem => {
                if (expireItem === undefined) return
                // Are we on the same version
                if (expireItem.CacheVersion !== ExpireCacheStoreItemVersions.get(expireCacheName)) return
                if (expireItem.ExpiresAt < Date.now()) return

                return expireItem.Content
            },
        )

    public SetExpireCacheItem<N extends ExpireCacheName>(
        expireCacheName: N,
        itemName: string,
        content: ExpireCachesItemTypes[N],
        expiration: ExpirationSettings,
    ) {
        // Determine when we expire
        const expireAtDate = new Date()
        expireAtDate.setHours(0, 0, 0, 0)
        if (expiration.Unit == "Weeks") expireAtDate.setDate(expireAtDate.getDate() + expiration.Duration * 7)
        else {
            expireAtDate.setMonth(expireAtDate.getMonth() + expiration.Duration)
            expireAtDate.setDate(0)
        }
        const expireAt = expireAtDate.getTime()

        const expireItem: ExpireItem<ExpireCachesItemTypes[N]> = {
            ExpiresAt: expireAt,
            CacheVersion: ExpireCacheStoreItemVersions.get(expireCacheName)!,

            Content: content,
        }

        return this.UpdateCacheAPI(`ExpireCache/${expireCacheName}`, itemName, expireItem)
    }
})()
