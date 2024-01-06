import { _ } from "../../../shared/deps.ts"
import { OneUplet, TwoUplet, zip_n_uplets } from "../../../shared/fp.ts"

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
    notSynced?: NotSynced
    lineSynced?: LineSynced
    wordSynced?: WordSynced
}

export type SyncedContent = {
    tss: number
    tes: number
    content: Array<SyncedContent> | string
}

type SW<A> = {
    tss: 0
    tes: 1
    content: A
}

export type S<A> = {
    tss: number
    tes: number
    content: A
}

export enum LyricsType {
    NOT_SYNCED,
    LINE_SYNCED,
    WORD_SYNCED,
}

export const Filler = "♪"

export type NotSynced = SW<string> & { __type: LyricsType.NOT_SYNCED }
export type LineSynced = SW<Array<S<OneUplet<S<string>>>>> & { __type: LyricsType.LINE_SYNCED }
export type WordSynced = SW<Array<S<Array<S<string>>>>> & {
    __type: LyricsType.WORD_SYNCED
}

export const flattenLyrics = (lyrics: SyncedContent): Array<S<string>> =>
    Array.isArray(lyrics.content) ? lyrics.content.flatMap(flattenLyrics) : [lyrics as S<string>]

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
    if (!lyrics) return l

    const wrapInContainerSyncedType = <T extends LyricsType, P>(__type: T, content: P) => ({
        __type,
        tss: 0 as const,
        tes: 1 as const,
        content,
    })

    if (track.has_richsync) {
        const richSync = await fetchMxmTrackRichSyncGet(track.commontrack_id, track.track_length)
        const wordSynced = richSync.map(rsLine => {
            const tss = rsLine.ts / track.track_length
            const tes = rsLine.te / track.track_length

            const content = rsLine.l.map((word, index, words) => {
                return {
                    tss: tss + word.o / track.track_length,
                    tes: tss + words[index + 1]?.o / track.track_length || tes,
                    content: word.c,
                }
            })

            return { tss, tes, content }
        })

        const wordSyncedFilled = _(
            zip_n_uplets<TwoUplet<S<Array<S<string>>>>>(2)([{ tes: 0 }, ...wordSynced, { tss: 1 }]),
        )
            .map(([prev, next]) => {
                const tss = prev.tes
                const tes = next.tss
                const duration = (tes - tss) * track.track_length * 1000

                return (
                    duration > 500 && {
                        tss,
                        tes,
                        content: [
                            {
                                tss,
                                tes,
                                duration,
                                content: Filler,
                            },
                        ],
                    }
                )
            })
            .zip(wordSynced)
            .flatten()
            .compact()
            .value()

        l.wordSynced = wrapInContainerSyncedType(LyricsType.WORD_SYNCED, wordSyncedFilled)
    }

    if (track.has_subtitles) {
        const subtitle = JSON.parse(subtitles[0].subtitle_body) as Array<{
            text: string
            time: { total: number; minutes: number; seconds: number; hundredths: number }
        }>
        const lineSynced = subtitle.map((sLine, i, subtitle) => {
            const tss = sLine.time.total / track.track_length
            const tes = subtitle[i + 1]?.time.total / track.track_length || 1
            return { tss, tes, content: [{ tss, tes, content: sLine.text }] as OneUplet<S<string>> }
        })
        l.lineSynced = wrapInContainerSyncedType(LyricsType.LINE_SYNCED, lineSynced)
    }

    if (track.has_lyrics || track.has_lyrics_crowd) {
        //l.notSynced = wrapInContainerSyncedType(LyricsType.NOT_SYNCED, lyrics.lyrics_body)
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
type MxMLyrics = {
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
}
type MxMSnippet = {
    snippet_id: number
    snippet_language: string
    restricted: 0 | 1
    instrumental: 0 | 1
    snippet_body: string
    script_tracking_url: string
    pixel_tracking_url: string
    html_tracking_url: string
    updated_time: string
}
type MxMSubtitle = {
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
}
type MxMTrack = {
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
}
type MxMMacroSubtitles = {
    lyrics: MxMLyrics
    snippet: MxMSnippet
    subtitles: Array<MxMSubtitle>
    track: MxMTrack
}
type None<A> = { [k in keyof A]: undefined }
const fetchMxmMacroSubtitlesGet = async (
    uri: string,
    title: string,
    artist: string,
    album: string,
    durationS: number,
    renewsLeft = 1,
): Promise<MxMMacroSubtitles | None<MxMMacroSubtitles>> => {
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
    if (res.message.header.hint === "renew") {
        return renewsLeft > 0
            ? fetchMxmMacroSubtitlesGet(uri, title, artist, album, durationS, 0)
            : Promise.resolve({} as None<MxMMacroSubtitles>)
    }
    const {
        "track.lyrics.get": trackLyricsGet,
        "track.snippet.get": trackSnippetGet,
        "track.subtitles.get": trackSubtitlesGet,
        "userblob.get": userblobGet,
        "matcher.track.get": matcherTrackGet,
    } = res.message.body.macro_calls
    return {
        lyrics: trackLyricsGet.message.body.lyrics as MxMLyrics,
        snippet: trackSnippetGet.message.body.snippet as MxMSnippet,
        subtitles: trackSubtitlesGet.message.body.subtitle_list.map(
            (subtitle_element: any) => subtitle_element.subtitle,
        ) as Array<MxMSubtitle>,
        track: matcherTrackGet.message.body.track as MxMTrack,
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
