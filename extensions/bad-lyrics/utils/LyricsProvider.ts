import { _ } from "../../../shared/deps.ts"

const headers = {
    authority: "apic-desktop.musixmatch.com",
    cookie: "x-mxm-token-guid=",
}

const CONFIG = {
    musixmatchToken: undefined as unknown as string,
}

// if (!CONFIG.musixmatchToken) {
const url = new URL("https://apic-desktop.musixmatch.com/ws/1.1/token.get")
url.searchParams.append("app_id", "web-desktop-app-v1.0")
Spicetify.CosmosAsync.get(url.toString(), undefined, _.omit(headers, "cookie")).then(res => {
    if (res.message.header.status_code === 200 && res.message.body.user_token) {
        CONFIG.musixmatchToken = res.message.body.user_token
    }
})
// }

export type Lyrics = {
    wordSynced?: WordSynced
    lineSynced?: LineSynced
    nonSynced?: NonSynced
}

export type SyncedPart = {
    tsr: number
    ter: number
    part: Array<SyncedPart> | string
}

export type Synced<A> = {
    tsr: number
    ter: number
    part: A
}

export type NonSynced = Synced<Array<{ part: string }>> & { __type: "NonSynced" }
export type LineSynced = Synced<Array<Synced<string>>> & { __type: "LineSynced" }
export type WordSynced = Synced<Array<Synced<Array<Synced<string>>>>> & { __type: "WordSynced" }

export const findLyrics = async (info: {
    uri: string
    title: string
    artist: string
    album: string
    durationS: number
}) => {
    const { lyrics, subtitles, track } = await fetchMxmMacroSubtitlesGet(
        info.uri,
        info.title,
        info.artist,
        info.album,
        info.durationS,
    )

    const l: Lyrics = {}

    const w = <T extends string, P>(s: T, a: P) => ({
        __type: s,
        tsr: 0,
        ter: 1,
        part: a,
    })

    if (track.has_richsync) {
        const richSync = await fetchMxmTrackRichSyncGet(track.commontrack_id, track.track_length)
        l.wordSynced = w(
            "WordSynced",
            richSync.map(rsLine => {
                const tsr = rsLine.ts / track.track_length
                const ter = rsLine.te / track.track_length
                const duration = rsLine.te - rsLine.ts

                const part = rsLine.l.map((word, index, words) => {
                    const part = word.c
                    const tsr = word.o / duration
                    const ter = words[index + 1]?.o / duration || 1

                    return { tsr, ter, part }
                })

                return { tsr, ter, part }
            }),
        )
    }

    if (track.has_subtitles) {
        const subtitle = JSON.parse(subtitles[0].subtitle_body) as Array<{
            text: string
            time: { total: number; minutes: number; seconds: number; hundredths: number }
        }>
        l.lineSynced = w(
            "LineSynced",
            subtitle.map((sLine, index, subtitle) => {
                const tsr = sLine.time.total / track.track_length
                const ter = subtitle[index + 1]?.time.total / track.track_length || 1
                return { tsr, ter, part: sLine.text }
            }),
        )
    }

    if (track.has_lyrics || track.has_lyrics_crowd) {
        l.nonSynced = w(
            "NonSynced",
            lyrics.lyrics_body.split("\n").map(lLine => ({ part: lLine })),
        )
    }

    return l
}

const getTranslation = async (trackId: string, lang = "en") => {
    const res = await fetchMxmCrowdTrackTranslationsGet(trackId, lang)
    return res.map(translation => ({
        translation: translation.description,
        matchedLine: translation.matched_line,
    }))
}

type MusicGenreList = Array<{
    music_genre: {
        music_genre_id: number
        music_genre_parent_id: number
        music_genre_name: string
        music_genre_name_extended: string
        music_genre_vanity: string
    }
}>
const fetchMxmMacroSubtitlesGet = async (
    uri: string,
    title: string,
    artist: string,
    album: string,
    durationS: number,
) => {
    const url = new URL("https://apic-desktop.musixmatch.com/ws/1.1/macro.subtitles.get")
    url.searchParams.append("format", "json")
    url.searchParams.append("namespace", "lyrics_richsynched")
    url.searchParams.append("subtitle_format", "mxm")
    url.searchParams.append("app_id", "web-desktop-app-v1.0")
    url.searchParams.append("q_album", album)
    url.searchParams.append("q_artist", artist)
    url.searchParams.append("q_artists", artist)
    url.searchParams.append("q_track", title)
    url.searchParams.append("track_spotify_id", uri)
    url.searchParams.append("q_duration", encodeURIComponent(durationS))
    url.searchParams.append("f_subtitle_length", encodeURIComponent(Math.floor(durationS)))
    url.searchParams.append("usertoken", CONFIG.musixmatchToken)

    const res = await Spicetify.CosmosAsync.get(url.toString(), undefined, headers)
    const {
        "track.lyrics.get": trackLyricsGet,
        "track.snippet.get": trackSnippetGet,
        "track.subtitles.get": trackSubtitlesGet,
        "userblob.get": userblobGet,
        "matcher.track.get": matcherTrackGet,
    } = res.message.body.macro_calls

    return {
        lyrics: trackLyricsGet.message.body.lyrics as {
            lyrics_id: number
            can_edit: 0 | 1
            locked: 0 | 1
            published_status: 0 | 1
            action_requested: string
            verified: 0 | 1
            restricted: 0 | 1
            instrumental: 0 | 1
            explicit: 0 | 1
            lyrics_body: string
            lyrics_language: string
            lyrics_language_description: string
            script_tracking_url: string
            pixel_tracking_url: string
            html_tracking_url: string
            lyrics_copyright: string
            writer_list: string[]
            publisher_list: string[]
            backlink_url: string
            updated_time: string
        },
        snippet: trackSnippetGet.message.body.snippet as {
            snippet_id: number
            snippet_language: string
            restricted: 0 | 1
            instrumental: 0 | 1
            snippet_body: string
            script_tracking_url: string
            pixel_tracking_url: string
            html_tracking_url: string
            updated_time: string
        },
        subtitles: trackSubtitlesGet.message.body.subtitle_list.map(
            (subtitle_element: any) => subtitle_element.subtitle,
        ) as Array<{
            subtitle_id: number
            restricted: 0 | 1
            published_status: number
            subtitle_body: string
            subtitle_avg_count: number
            lyrics_copyright: string
            subtitle_length: number
            subtitle_language: string
            subtitle_language_description: string
            script_tracking_url: string
            pixel_tracking_url: string
            html_tracking_url: string
            writer_list: string[]
            publisher_list: string[]
            updated_time: string
        }>,
        track: matcherTrackGet.message.body.track as {
            track_id: number
            track_mbid: string
            track_isrc: string
            commontrack_isrcs: Array<string[]>
            track_spotify_id: string
            commontrack_spotify_ids: string[]
            commontrack_itunes_ids: number[]
            track_soundcloud_id: number
            track_xboxmusic_id: string
            track_name: string
            track_name_translation_list: any[]
            track_rating: number
            track_length: number
            commontrack_id: number
            instrumental: 0 | 1
            explicit: 0 | 1
            has_lyrics: 0 | 1
            has_lyrics_crowd: 0 | 1
            has_subtitles: 0 | 1
            has_richsync: 0 | 1
            has_track_structure: 0 | 1
            num_favorite: number
            lyrics_id: number
            subtitle_id: number
            album_id: number
            album_name: string
            album_vanity_id: string
            artist_id: number
            artist_mbid: string
            artist_name: string
            album_coverart_100x100: string
            album_coverart_350x350: string
            album_coverart_500x500: string
            album_coverart_800x800: string
            track_share_url: string
            track_edit_url: string
            commontrack_vanity_id: string
            restricted: 0 | 1
            first_release_date: string
            updated_time: string
            primary_genres: {
                music_genre_list: MusicGenreList
            }
            secondary_genres: {
                music_genre_list: MusicGenreList
            }
        },
    }
}

const fetchMxmTrackRichSyncGet = async (commonTrackId: number, trackLength: number) => {
    const url = new URL("https://apic-desktop.musixmatch.com/ws/1.1/track.richsync.get")
    url.searchParams.append("format", "json")
    url.searchParams.append("subtitle_format", "mxm")
    url.searchParams.append("app_id", "web-desktop-app-v1.0")
    url.searchParams.append("f_subtitle_length", encodeURIComponent(trackLength))
    url.searchParams.append("q_duration", encodeURIComponent(trackLength))
    url.searchParams.append("commontrack_id", encodeURIComponent(commonTrackId))
    url.searchParams.append("usertoken", CONFIG.musixmatchToken)

    const res = await Spicetify.CosmosAsync.get(url.toString(), undefined, headers)

    return JSON.parse(res.message.body.richsync.richsync_body) as Array<{
        ts: number
        te: number
        l: Array<{
            c: string
            o: number
        }>
        x: string
    }>
}

const fetchMxmCrowdTrackTranslationsGet = async (trackId: string, lang = "en") => {
    const url = new URL("https://apic-desktop.musixmatch.com/ws/1.1/crowd.track.translations.get")
    url.searchParams.append("translation_fields_set", "minimal")
    url.searchParams.append("selected_language", lang)
    url.searchParams.append("comment_format", "text")
    url.searchParams.append("format", "json")
    url.searchParams.append("app_id", "web-desktop-app-v1.0")
    url.searchParams.append("track_id", trackId)
    url.searchParams.append("usertoken", CONFIG.musixmatchToken)

    const res = await Spicetify.CosmosAsync.get(url.toString(), undefined, headers)

    return res.message.body.translations_list.map(
        (translation_element: any) => translation_element.translation,
    ) as Array<any>
}