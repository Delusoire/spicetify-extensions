declare namespace Spicetify.Platform {
    type WithTimeData<A> = A & { addedAt: string }
    type Pinnable<A> = A & {
        pinned: boolean
        canPin: number
    }

    type Image = ImageLabeled | ImageSized

    type ImageLabeled = {
        label: "standard" | "small" | "large" | "xlarge"
        url: string
    }

    type ImageSized = {
        url: string
        width: number
        height: number
    }

    type ArtistMin = {
        type: "artist"
        uri: string
        name: string
    }

    type Artist = Pinnable<
        WithTimeData<
            ArtistMin & {
                images: Array<ImageSized>
                lastPlayedAt: string | null
            }
        >
    >

    type AlbumMin<I extends Image> = {
        type: "album"
        uri: string
        name: string
        artist: ArtistMin
        images: Array<I>
    }

    type Album = Pinnable<
        WithTimeData<
            Omit<AlbumMin<ImageSized>, "artist"> & {
                artists: Array<ArtistMin>
                lastPlayedAt: string | null
            }
        >
    >

    type Track = WithTimeData<{
        type: "track"
        uri: string
        name: string
        album: AlbumMin<ImageLabeled>
        artists: Array<ArtistMin>
        discNumber: number
        duration: { milliseconds: number }
        is19PlusOnly: boolean
        isLocal: boolean
        isPlayable: boolean
    }>

    namespace PlaylistAPI {
        type Track = Platform.Track & {
            addedBy: any
            formatListAttributes: any
            isExplicit: boolean
            playIndex: number | null
            trackNumber: number
            uid: string
        }

        type Sort = {
            field: "TITLE" | "ADDED_AT" | "ADDED_BY" | "ALBUM" | "ARTIST" | "DURATION"
            order: "ASC" | "DESC"
        }

        type Query = {
            includeRecommendations?: boolean
            filter?: string
            sort?: Sort
            offset?: number
            limit?: number
        }

        type Paged<A> = {
            items: Array<A>
            offest: number
            limit: number
            totalLength: number
        }

        function getContents(uri: string, query?: Query): Paged<Track>

        function add(uri: string, uris: string[], location: RootlistAPI.Location, silent?: boolean): Promise<void>
        function remove(uri: string, uidsOrUris: Array<{ uid: string }> | Array<{ uri: string }>): Promise<void>
        function move(uri: string, uids: Array<{ uid: string }>, location: RootlistAPI.Location): Promise<void>
    }

    namespace PlayerAPI {
        type TrackRef = {
            uri: string
            uid?: string
        }

        //! Not complete
        type TrackMetadata = {
            [key: string]: string | undefined
            album_artist_name: string
            album_disc_count: string
            album_disc_number: string
            album_title: string
            album_track_count: string
            album_track_number: string
            album_uri: string

            artist_name: string
            artist_uri: string

            "canvas.artist.avatar": string
            "canvas.artist.name": string
            "canvas.artist.uri": string
            "canvas.canvasUri": string
            "canvas.entityUri": string
            "canvas.explicit": string
            "canvas.fileId": string
            "canvas.id": string
            "canvas.type": string
            "canvas.uploadedBy": string
            "canvas.url": string

            "collection.can_add": string
            "collection.can_ban": string
            "collection.in_collection": string
            "collection.is_banned": string

            is_local?: string
            local_file_path?: string
            local_file_size?: string

            context_uri: string
            duration: string
            entity_uri: string
            has_lyrics: string

            image_large_url: string
            image_small_url: string
            image_url: string
            image_xlarge_url: string

            interaction_id: string
            iteration: string
            marked_for_download: string
            page_instance_id: string
            popularity: string
            title: string
            track_player: string
        }

        type InternalQueueTrack = {
            contextTrack: {
                uri: string
                uid: string
                metadata: TrackMetadata
            }
            removed: any[]
            blocked: any[]
            provider: "queue" | "context"
        }

        type InternalQueue = {
            queueRevision: string
            track: InternalQueueTrack
            nextTracks: Array<InternalQueueTrack>
            prevTracks: Array<InternalQueueTrack>
        }

        type Queue = {
            _queue: InternalQueue
            _client: {
                setQueue(queue: Omit<InternalQueue, "track">): Promise<{ error: number; reasons: string }>
                //...
            }
            //...
        }

        type TrackItem = {
            type: "track" | string
            uri: string
            uid: string
            name: string
            mediaType: "audio" | string
            duration: {
                milliseconds: number
            }
            album: {
                type: "album"
                uri: string
                name: string
                images: Array<ImageLabeled>
            }
            artists: Array<{
                type: "artist"
                uri: string
                name: string
            }>
            isLocal: boolean
            isExplicit: boolean
            is19PlusOnly: boolean
            provider: "queue" | "context"
            metadata: TrackMetadata
            images: Array<ImageLabeled>
        }

        type PlayerState = {
            timestamp: number
            context: {
                uri: string
                url: string
                metadata: {
                    "player.arch": string
                }
            }
            index: {
                pageUri: any | null
                pageIndex: any | null
                itemIndex: any | null
            }
            item: TrackItem
            shuffle: boolean
            repeat: number
            speed: number
            positionAsOfTimestamp: number
            duration: number
            hasContext: boolean
            isPaused: boolean
            isBuffering: boolean
            restrictions: {
                canPause: boolean
                canResume: boolean
                canSeek: boolean
                canSkipPrevious: boolean
                canSkipNext: boolean
                canToggleRepeatContext: boolean
                canToggleRepeatTrack: boolean
                canToggleShuffle: boolean
                disallowPausingReasons: string[]
                disallowResumingReasons: string[]
                disallowSeekingReasons: string[]
                disallowSkippingPreviousReasons: string[]
                disallowSkippingNextReasons: string[]
                disallowTogglingRepeatContextReasons: string[]
                disallowTogglingRepeatTrackReasons: string[]
                disallowTogglingShuffleReasons: string[]
                disallowTransferringPlaybackReasons: string[]
            }
            previousItems: Array<TrackItem>
            nextItems: Array<TrackItem>
            playbackQuality: {
                bitrateLevel: number
                strategy: number
                targetBitrateLevel: number
                targetBitrateAvailable: boolean
                hifiStatus: number
            }
            playbackId: string
            sessionId: string
            signals: any[]
            track: {}
        }

        const _queue: Queue
        const _state: PlayerState

        function skipToNext(next?: TrackRef): Promise<void>
        function updateContext(
            sessionId: string,
            context: any,
            options?: { loggingParams?: { interactionId?: any; pageInstanceId?: any } },
        ): Promise<void>

        function clearQueue(): Promise<void>
        function addToQueue(queue: Array<{ uri: string }>): Promise<void>
    }

    namespace RootlistAPI {
        type Playlist = {
            type: "playlist"
            addedAt: Date
            uri: string
            name: string
            description: string
            images: Array<ImageLabeled>
            madeFor: any | null
            owner: any
            totalLength: number
            unfilteredTotalLength: number
            totalLikes: number | null
            duration: any | null
            isCollaborative: boolean
            isLoaded: boolean
            isOwnedBySelf: boolean
            isPublished: boolean
            hasEpisodes: any | null
            hasSpotifyTracks: any | null
            hasSpotifyAudiobooks: any | null
            canAdd: boolean
            canRemove: boolean
            canPlay: boolean
            formatListData: any
            canReportAnnotationAbuse: boolean
            hasDateAdded: boolean
            permissions: any | null
            collaborators: {
                count: number
                items: any[]
            }
        }

        type Folder = {
            type: "folder"
            addedAt: Date
            uri: string
            name: string
            items: Array<Folder | Playlist>
            totalItemCount: number
        }

        type Options = {
            folderUri?: string
            sort?: {
                field: "ADDED_AT" | "AVAILABLE_OFFLINE" | "NAME" | "RECENTLY_PLAYED" | "RELEVANCE"
                order?: "ASC" | "DESC"
            }
            filter?: string
            offset?: number
            limit?: number
            flatten?: boolean
        }

        function getContents(options?: Options): Folder

        type Location = {
            before?: "start" | { uri: string } | { uid: string }
            after?: "end" | { uri: string } | { uid: string }
        }

        function createFolder(name: string, location: Location): Promise<{ success: true; uri: string }> // Never managed to make this fail
        function createPlaylist(name: string, location: Location, idk?: any): Promise<string | null>

        function setPublishedState(uri: string, published: boolean): Promise<void>

        function add(uris: string[], location: Location): Promise<void>
    }

    namespace LocalStorageAPI {
        const items: Record<string, any>
        const namespace: string

        function setItem(key: string, value: any): void
    }

    namespace ClipboardAPI {
        function copy(content: string): Promise<void>
        function paste(): Promise<string>
    }

    namespace LibraryAPI {
        type Sort = {
            field: "NAME" | "ARTIST_NAME" | "ALBUM_NAME" | "ADDED_AT"
            order?: "ASC" | "DESC"
        }

        type Options = Partial<{
            sort: Sort
            filter: string
            offset: number
            limit: number
            uri: string
        }>

        type Paged<A> = {
            items: Array<A>
            offset: number
            limit: number
            totalLength: number
            unfilteredTotalLength: number
        }

        function getTracks(options: Options): Promise<Paged<Track>>
        function getArtists(options: Options): Promise<Paged<Artist>>
        function getAlbums(options: Options): Promise<Paged<Album>>

        function contains(...uris: string[]): Promise<boolean[]>
        function add(options: { uris: string[]; silent?: boolean }): Promise<void>
        function remove(options: { uris: string[]; silent?: boolean }): Promise<void>
    }

    namespace History {
        type Action = "PUSH" | "POP"

        type Location = {
            pathname: string
            search: string
            hash: string
            state: {
                pageId: any | undefined
                referrer: string
                navigationalRoot: string
            }
            key: string
        }

        const location: Location
        const entries: Array<Location>

        function listen(callback: (location: Location, action: Action) => void): () => void
        function push(location: Partial<Location> | string): void
        function replace(location: Partial<Location> | string): void

        function goBack(): void
        function goForward(): void
    }

    namespace EnhanceAPI {
        type EnhanceItem = {
            uri: string
            itemId: string
            itemAttributes: {
                addedBy: string
                isRecommendation: boolean
                playerContextPage: number
                isAddable: boolean
                addedAt: string
            }
        }

        type EnhancePage = {
            sessionId: string
            metadata: {
                interactivity_enabled: boolean
            }
            numTotalItems: number
            contextRevision: string
            dspContentUri: string
            pageItems: Array<EnhanceItem>
            numTotalRecs: string
            enhancedRevision: string
        }

        function getPage(
            uri: string,
            iteration: number,
            sessionId: number,
            offset?: number,
            limit?: number,
        ): Promise<{ enhancePage: EnhancePage; status: number }>
    }

    namespace LocalFilesAPI {
        type Sort = {
            field: "TITLE" | "ADDED_AT" | "ALBUM" | "ARTIST" | "DURATION"
            order: "ASC" | "DESC"
        }

        type Item<Type> = {
            type: Type
            uri: string
            name: string
        }

        type ArtistItem = Item<"artist">

        type AlbumItem = Item<"album"> & {
            images: Array<ImageLabeled>
        }

        type TrackItem = Item<"track"> & {
            uid: string
            addedAt: string
            album: AlbumItem
            artists: Array<ArtistItem>
            discNumber: number
            trackNumber: number
            duration: {
                milliseconds: number
            }
            isExplicit: boolean
            isLocal: boolean
            isPlayable: boolean
            is19PlusOnly: boolean
        }

        function getTracks(sort?: Sort, textFilter?: string): Promise<TrackItem>
    }

    namespace PlaylistPermissionsAPI {
        function setBasePermission(
            uri: string,
            permissionLevel: "BLOCKED" | "UNKNOWN" | "VIEWER" | "CONTRIBUTOR",
        ): Promise<void>
    }

    namespace UserAPI {
        const _product_state_service: {
            putValues(pairsObj: { pairs: Record<string, string> }, signalsObj?: { signals: any }): Promise<{}>
        }
    }

    namespace UpdateAPI {
        function applyUpdate(): Promise<never>
    }
}
