var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// extensions/bad-lyrics/app.ts
import { render } from "https://esm.sh/lit";

// shared/util.ts
var { URI } = Spicetify;
var { PlayerAPI } = Spicetify.Platform;
var PermanentMutationObserver = class extends MutationObserver {
  constructor(targetSelector, callback, opts = {
    childList: true,
    subtree: true
  }) {
    super(callback);
    this.target = null;
    new MutationObserver(() => {
      const nextTarget = document.querySelector(targetSelector);
      if (nextTarget && !nextTarget.isEqualNode(this.target)) {
        this.target && this.disconnect();
        this.target = nextTarget;
        this.observe(this.target, opts);
      }
    }).observe(document.body, {
      childList: true,
      subtree: true
    });
  }
};
var mainElement = document.querySelector("main");
var [REACT_FIBER, REACT_PROPS] = Object.keys(mainElement);

// extensions/bad-lyrics/utils/PlayerW.ts
import { Subject, animationFrameScheduler, asyncScheduler } from "https://esm.sh/rxjs";

// extensions/star-ratings-2/util.ts
var getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-trackList.main-trackList-indexable"));
var getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll(".main-trackList-trackListRow"));

// shared/listeners.ts
var { Player, URI: URI2 } = Spicetify;
var { PlayerAPI: PlayerAPI2, History } = Spicetify.Platform;
var onSongChanged = (callback) => {
  callback(PlayerAPI2._state);
  Player.addEventListener("songchange", (event) => callback(event.data));
};
var onPlayedPaused = (callback) => {
  callback(PlayerAPI2._state);
  Player.addEventListener("onplaypause", (event) => callback(event.data));
};
var onTrackListMutationListeners = new Array();
var _onTrackListMutation = (trackList, record, observer) => {
  const tracks = getTrackListTracks(trackList.presentation);
  const reactFiber = trackList.presentation[REACT_FIBER].alternate;
  const reactTracks = reactFiber.pendingProps.children;
  const tracksProps = reactTracks.map((child) => child.props);
  tracks.forEach((track, i) => track.props = tracksProps[i]);
  const fullyRenderedTracks = tracks.filter((track) => track.props?.uri);
  onTrackListMutationListeners.map((listener) => listener(trackList, fullyRenderedTracks));
};
new PermanentMutationObserver("main", () => {
  const trackLists = getTrackLists();
  trackLists.filter((trackList) => !trackList.presentation).forEach((trackList) => {
    trackList.presentation = trackList.lastElementChild.firstElementChild.nextElementSibling;
    new MutationObserver(
      (record, observer) => _onTrackListMutation(trackList, record, observer)
    ).observe(trackList.presentation, { childList: true });
  });
});

// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;

// shared/fp.ts
var { Snackbar } = Spicetify;
var zip_n_uplets = (n) => (a) => a.map((_2, i, a2) => a2.slice(i, i + n)).slice(0, 1 - n);

// extensions/bad-lyrics/utils/LyricsProvider.ts
var headers = {
  authority: "apic-desktop.musixmatch.com",
  cookie: "x-mxm-token-guid="
};
var CONFIG = {
  musixmatchToken: void 0
};
var url = new URL("https://apic-desktop.musixmatch.com/ws/1.1/token.get");
url.searchParams.append("app_id", "web-desktop-app-v1.0");
Spicetify.CosmosAsync.get(url.toString(), void 0, _.omit(headers, "cookie")).then((res) => {
  if (res.message.header.status_code === 200 && res.message.body.user_token) {
    CONFIG.musixmatchToken = res.message.body.user_token;
  }
});
var Filler = "\u266A";
var findLyrics = async (info) => {
  const { lyrics, subtitles, track } = await fetchMxmMacroSubtitlesGet(
    info.uri,
    info.title,
    info.artist,
    info.album,
    info.durationS
  );
  const l = {};
  if (!lyrics)
    return l;
  const wrapInContainerSyncedType = (__type, content) => ({
    __type,
    tss: 0,
    tes: 1,
    content
  });
  if (track.has_richsync) {
    const richSync = await fetchMxmTrackRichSyncGet(track.commontrack_id, track.track_length);
    const wordSynced = richSync.map((rsLine) => {
      const tss = rsLine.ts / track.track_length;
      const tes = rsLine.te / track.track_length;
      const content = rsLine.l.map((word, index, words) => {
        return {
          tss: tss + word.o / track.track_length,
          tes: tss + words[index + 1]?.o / track.track_length || tes,
          content: word.c
        };
      });
      return { tss, tes, content };
    });
    const wordSyncedFilled = _(
      zip_n_uplets(2)([{ tes: 0 }, ...wordSynced, { tss: 1 }])
    ).map(([prev, next]) => {
      const tss = prev.tes;
      const tes = next.tss;
      const dr = tes - tss;
      return dr && {
        tss,
        tes,
        content: [
          {
            tss,
            tes,
            duration: dr * track.track_length * 1e3,
            content: Filler
          }
        ]
      };
    }).zip(wordSynced).flatten().compact().value();
    l.wordSynced = wrapInContainerSyncedType(3 /* WORD_SYNCED */, wordSyncedFilled);
  }
  if (track.has_subtitles) {
    const subtitle = JSON.parse(subtitles[0].subtitle_body);
    const lineSynced = subtitle.map((sLine, i, subtitle2) => {
      const tss = sLine.time.total / track.track_length;
      const tes = subtitle2[i + 1]?.time.total / track.track_length || 1;
      return { tss, tes, content: [{ tss, tes, content: sLine.text }] };
    });
    l.lineSynced = wrapInContainerSyncedType(2 /* LINE_SYNCED */, lineSynced);
  }
  if (track.has_lyrics || track.has_lyrics_crowd) {
    l.notSynced = wrapInContainerSyncedType(1 /* NOT_SYNCED */, lyrics.lyrics_body);
  }
  return l;
};
var fetchMxmMacroSubtitlesGet = async (uri, title, artist, album, durationS, renewsLeft = 1) => {
  const url2 = new URL("https://apic-desktop.musixmatch.com/ws/1.1/macro.subtitles.get");
  url2.searchParams.append("format", "json");
  url2.searchParams.append("namespace", "lyrics_richsynched");
  url2.searchParams.append("subtitle_format", "mxm");
  url2.searchParams.append("app_id", "web-desktop-app-v1.0");
  url2.searchParams.append("q_album", album);
  url2.searchParams.append("q_artist", artist);
  url2.searchParams.append("q_artists", artist);
  url2.searchParams.append("q_track", title);
  url2.searchParams.append("track_spotify_id", uri);
  url2.searchParams.append("q_duration", encodeURIComponent(durationS));
  url2.searchParams.append("f_subtitle_length", encodeURIComponent(Math.floor(durationS)));
  url2.searchParams.append("usertoken", CONFIG.musixmatchToken);
  const res = await Spicetify.CosmosAsync.get(url2.toString(), void 0, headers);
  if (res.message.header.hint === "renew") {
    return renewsLeft > 0 ? fetchMxmMacroSubtitlesGet(uri, title, artist, album, durationS, 0) : Promise.resolve({});
  }
  const {
    "track.lyrics.get": trackLyricsGet,
    "track.snippet.get": trackSnippetGet,
    "track.subtitles.get": trackSubtitlesGet,
    "userblob.get": userblobGet,
    "matcher.track.get": matcherTrackGet
  } = res.message.body.macro_calls;
  return {
    lyrics: trackLyricsGet.message.body.lyrics,
    snippet: trackSnippetGet.message.body.snippet,
    subtitles: trackSubtitlesGet.message.body.subtitle_list.map(
      (subtitle_element) => subtitle_element.subtitle
    ),
    track: matcherTrackGet.message.body.track
  };
};
var fetchMxmTrackRichSyncGet = async (commonTrackId, trackLength) => {
  const url2 = new URL("https://apic-desktop.musixmatch.com/ws/1.1/track.richsync.get");
  url2.searchParams.append("format", "json");
  url2.searchParams.append("subtitle_format", "mxm");
  url2.searchParams.append("app_id", "web-desktop-app-v1.0");
  url2.searchParams.append("f_subtitle_length", encodeURIComponent(trackLength));
  url2.searchParams.append("q_duration", encodeURIComponent(trackLength));
  url2.searchParams.append("commontrack_id", encodeURIComponent(commonTrackId));
  url2.searchParams.append("usertoken", CONFIG.musixmatchToken);
  const res = await Spicetify.CosmosAsync.get(url2.toString(), void 0, headers);
  return JSON.parse(res.message.body.richsync.richsync_body);
};

// extensions/bad-lyrics/utils/Song.ts
var Song = class {
  constructor(opts) {
    this.uri = opts.uri;
    this.name = opts.name;
    this.artist = opts.artist;
    this.album = opts.album;
    this.duration = opts.duration;
    this.isLocal = opts.metadata.is_local === "true";
    this.isPaused = opts.isPaused;
    this.lyrics = findLyrics({
      uri: this.uri,
      title: this.name,
      artist: this.artist,
      album: this.album,
      durationS: this.duration / 1e3
    });
  }
};

// extensions/bad-lyrics/utils/PlayerW.ts
var { PlayerAPI: PlayerAPI3 } = Spicetify.Platform;
var PlayerW = new class {
  constructor() {
    this.isPaused = PlayerAPI3._state.isPaused;
    this.scaledProgress = 0;
    this.songChangedSubject = new Subject();
    this.isPausedChangedSubject = new Subject();
    this.scaledProgressChangedSubject = new Subject();
    this.getSong = () => this.Song;
    this.setTimestamp = (timestamp) => Spicetify.Player.seek(timestamp);
    onSongChanged((state2) => {
      const { item } = state2;
      if (item && item.type === "track") {
        const uri = item.uri;
        const name = item.name;
        const artist = item.metadata.artist_name;
        const album = item.album.name;
        const duration = item.duration.milliseconds;
        const isPaused = state2.isPaused;
        const metadata = item.metadata;
        this.Song = new Song({ uri, name, artist, album, duration, isPaused, metadata });
      } else {
        this.Song = void 0;
      }
      this.songChangedSubject.next(this.Song);
    });
    onPlayedPaused((state2) => {
      const isPausedNext = state2.isPaused ?? true;
      if (this.isPaused !== isPausedNext) {
        if (!isPausedNext) {
          this.startTimestepping();
        }
        this.isPaused = !this.isPaused;
        this.isPausedChangedSubject.next(this.isPaused);
      }
    });
  }
  triggerTimestampSync() {
    let autoSyncs = 0;
    const timeoutFn = () => 1e3 * autoSyncs++;
    asyncScheduler.schedule(
      function(self) {
        if (self.isPaused)
          return;
        if (!PlayerAPI3._events.emitResumeSync()) {
          PlayerAPI3._contextPlayer.resume({});
        }
        this.schedule(self, timeoutFn());
      },
      timeoutFn(),
      this
    );
  }
  startTimestepping() {
    let oldScaledProgress = Spicetify.Player.getProgressPercent();
    animationFrameScheduler.schedule(
      function(self) {
        if (self.isPaused)
          return;
        self.scaledProgress = Spicetify.Player.getProgressPercent();
        if (self.scaledProgress !== oldScaledProgress) {
          self.scaledProgressChangedSubject.next(self.scaledProgress);
        }
        oldScaledProgress = self.scaledProgress;
        this.schedule(self);
      },
      void 0,
      this
    );
    this.triggerTimestampSync();
  }
  // ms or percent
}();

// extensions/bad-lyrics/components.ts
import { consume, createContext, provide } from "https://esm.sh/@lit/context";
import { Task } from "https://esm.sh/@lit/task";
import { LitElement, css, html } from "https://esm.sh/lit";
import { customElement, property, query, queryAll, state } from "https://esm.sh/lit/decorators.js";
import { map } from "https://esm.sh/lit/directives/map.js";

// extensions/bad-lyrics/splines/monotoneNormalSpline.ts
import { MonotoneCubicHermitInterpolation } from "https://esm.sh/v135/@adaskothebeast/splines@4.0.0/es2022/splines.mjs";
var MonotoneNormalSpline = class extends MonotoneCubicHermitInterpolation {
  at(t) {
    const t0 = this.xs[0], tf = this.xs.at(-1);
    const ct = _.clamp(t, t0, tf);
    return super.interpolate(ct);
  }
};

// shared/math.ts
var remapScalar = (s, e, x) => (x - s) / (e - s);

// extensions/bad-lyrics/components.ts
var scrollTimeoutCtx = createContext("scrollTimeout");
var spotifyContainerCtx = createContext("spotifyContainer");
var loadedLyricsTypeCtx = createContext("loadedLyricsType");
var AnimatedContentContainer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.content = new Array();
    this.tss = 0;
    this.tes = 1;
  }
  updateProgress(rsp, index, depthToActiveAncestor) {
    const childs = Array.from(this.childs);
    if (childs.length === 0)
      return index;
    if (!this.relativePartialWidths || !this.sharedRelativePartialWidthSpline) {
      const partialWidths = childs.reduce(
        (partialWidths2, child) => [...partialWidths2, partialWidths2.at(-1) + child.offsetWidth],
        [0]
      );
      const totalWidth = partialWidths.at(-1);
      this.relativePartialWidths = partialWidths.map((pw) => pw / totalWidth);
      const pairs = _.zip(childs.map((child) => child.tss).concat(childs.at(-1).tes), this.relativePartialWidths);
      this.sharedRelativePartialWidthSpline = new MonotoneNormalSpline(pairs);
    }
    childs.forEach((child, i) => {
      const progress = child instanceof AnimatedContentContainer ? rsp : _.clamp(
        remapScalar(
          this.relativePartialWidths[i],
          this.relativePartialWidths[i + 1],
          this.sharedRelativePartialWidthSpline.at(rsp)
        ),
        0,
        1
      );
      index = child.updateProgress(
        progress,
        index,
        depthToActiveAncestor + Number(!_.inRange(rsp, child.tss, child.tes))
      );
    });
    return index;
  }
  render() {
    return html`${map(this.content, (part) => {
      if (Array.isArray(part.content)) {
        return html`<animated-content-container .content=${part.content} tss=${part.tss} tes=${part.tes} />`;
      }
      if (part.content === Filler) {
        const filler = part;
        return html`<animated-filler
                        content=${filler.content}
                        tss=${filler.tss}
                        tes=${filler.tes}
                        duration=${filler.duration}
                    />`;
      }
      return html` <animated-content content=${part.content} tss=${part.tss} tes=${part.tes} />`;
    })}<br />`;
  }
};
AnimatedContentContainer.NAME = "animated-content-container";
AnimatedContentContainer.styles = css`
        :host {
            display: flex;
            flex-wrap: wrap;
        }
    `;
__decorateClass([
  property({ type: Array })
], AnimatedContentContainer.prototype, "content", 2);
__decorateClass([
  property({ type: Number })
], AnimatedContentContainer.prototype, "tss", 2);
__decorateClass([
  property({ type: Number })
], AnimatedContentContainer.prototype, "tes", 2);
__decorateClass([
  queryAll("*:not(br)")
], AnimatedContentContainer.prototype, "childs", 2);
AnimatedContentContainer = __decorateClass([
  customElement(AnimatedContentContainer.NAME)
], AnimatedContentContainer);
var SyncedScrolledContent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.content = "";
    this.tss = 0;
    this.tes = 1;
    this.scrollTimeout = 0;
  }
  updateProgress(scaledProgress, index, depthToActiveAncestor) {
    const isActive = depthToActiveAncestor === 0;
    if (isActive) {
      if (Date.now() > this.scrollTimeout && this.spotifyContainer) {
        const lineHeightHeuristic = this.offsetHeight;
        const scrollTop = this.offsetTop - this.spotifyContainer.offsetTop - lineHeightHeuristic;
        const verticalLinesToActive = Math.abs(scrollTop - this.spotifyContainer.scrollTop) / this.spotifyContainer.offsetHeight;
        if (_.inRange(verticalLinesToActive, 0.1, 0.75)) {
          this.spotifyContainer.scrollTo({
            top: scrollTop,
            behavior: document.visibilityState === "visible" ? "smooth" : "auto"
          });
        }
      }
    }
    const csp = _.clamp(scaledProgress, AnimatedContent.MIN_SCALED_PROGRESS, AnimatedContent.MAX_SCALED_PROGRESS);
    this.animateContent(csp, depthToActiveAncestor);
    return index + 1;
  }
};
__decorateClass([
  property()
], SyncedScrolledContent.prototype, "content", 2);
__decorateClass([
  property({ type: Number })
], SyncedScrolledContent.prototype, "tss", 2);
__decorateClass([
  property({ type: Number })
], SyncedScrolledContent.prototype, "tes", 2);
__decorateClass([
  consume({ context: scrollTimeoutCtx, subscribe: true })
], SyncedScrolledContent.prototype, "scrollTimeout", 2);
__decorateClass([
  consume({ context: spotifyContainerCtx })
], SyncedScrolledContent.prototype, "spotifyContainer", 2);
var AnimatedContent = class extends SyncedScrolledContent {
  constructor() {
    super(...arguments);
    this.loadedLyricsType = 0 /* NONE */;
    this.opacityInterpolator = new MonotoneNormalSpline([
      [0, 0],
      [0.1, 0.1],
      [0.2, 0.3],
      [0.5, 0.55],
      [0.7, 0.8],
      [1, 1],
      [1.2, 0.8],
      [1.5, 0.7]
    ]);
    this.glowAlphaInterpolator = new MonotoneNormalSpline([
      [0, 0],
      [0.1, 0.2],
      [0.2, 0.35],
      [0.5, 0.65],
      [0.7, 0.9],
      [1, 1],
      [1.2, 0.6],
      [1.5, 0]
    ]);
  }
  animateContent(scaledProgress, depthToActiveAncestor) {
    if (this.sp === scaledProgress)
      return;
    this.sp = scaledProgress;
    const nextGradientOpacity = this.opacityInterpolator.at(scaledProgress) * 0.9 ** depthToActiveAncestor;
    const nextGlowRadius = `${(1 - scaledProgress) * 3}px`;
    const nextGlowAlpha = this.glowAlphaInterpolator.at(scaledProgress);
    const nextYOffset = `-${this.offsetHeight * 0.07 * scaledProgress}px`;
    const nextGradientStart = `${scaledProgress * 95}%`;
    const nextGradientEnd = `${scaledProgress * 105}%`;
    this.style.setProperty("--gradient-alpha", nextGradientOpacity.toFixed(3));
    this.style.setProperty("--glow-radius", nextGlowRadius);
    this.style.setProperty("--glow-alpha", nextGlowAlpha);
    this.style.setProperty("--gradient-start", nextGradientStart);
    this.style.setProperty("--gradient-end", nextGradientEnd);
    this.style.transform = `translateY(${nextYOffset})`;
  }
  render() {
    return html`<span role="button" @click=${() => PlayerW.setTimestamp(this.tss)}
            >${this.content.replaceAll(" ", "\xA0")}</span
        >`;
  }
};
AnimatedContent.NAME = "animated-content";
AnimatedContent.MIN_SCALED_PROGRESS = -0.5;
AnimatedContent.MAX_SCALED_PROGRESS = 1.5;
AnimatedContent.styles = css`
        :host {
            cursor: pointer;
            background-color: black;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            text-shadow: 0 0 var(--glow-radius, 0) rgba(255, 255, 255, var(--glow-alpha, 0));
            background-image: linear-gradient(
                var(--gradient-angle),
                rgba(255, 255, 255, var(--gradient-alpha)) var(--gradient-start),
                rgba(255, 255, 255, 0) var(--gradient-end)
            );
        }
    `;
__decorateClass([
  consume({ context: loadedLyricsTypeCtx })
], AnimatedContent.prototype, "loadedLyricsType", 2);
AnimatedContent = __decorateClass([
  customElement(AnimatedContent.NAME)
], AnimatedContent);
var AnimatedFiller = class extends AnimatedContent {
  constructor() {
    super(...arguments);
    this.duration = 0;
  }
  render() {
    if (this.duration < LyricsContainer.MINIMUM_FILL_DURATION_MS)
      return;
    return super.render();
  }
};
AnimatedFiller.NAME = "animated-filler";
__decorateClass([
  property({ type: Number })
], AnimatedFiller.prototype, "duration", 2);
AnimatedFiller = __decorateClass([
  customElement(AnimatedFiller.NAME)
], AnimatedFiller);
var LyricsContainer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.song = null;
    this.loadedLyricsType = 0 /* NONE */;
    this.updateSong = (song) => {
      this.song = song;
      this.loadedLyricsType = 0 /* NONE */;
    };
    this.lyricsTask = new Task(this, {
      task: async ([song]) => {
        const availableLyrics = await song?.lyrics;
        const lyrics = Object.values(availableLyrics)[0];
        this.loadedLyricsType = lyrics ? lyrics.__type : 0 /* NONE */;
        return lyrics;
      },
      args: () => [this.song]
    });
    this.scrollTimeout = 0;
    this.spotifyContainer = document.querySelector("aside div.main-nowPlayingView-lyricsContent.injected") ?? void 0;
  }
  updateProgress(progress) {
    if (this.loadedLyricsType === 0 /* NONE */ || this.loadedLyricsType === 1 /* NOT_SYNCED */)
      return;
    this.firstContainer?.updateProgress(progress, 0, 0);
  }
  firstUpdated(changedProperties) {
    this.spotifyContainer?.addEventListener("scroll", (e) => {
      this.scrollTimeout = Date.now() + LyricsContainer.SCROLL_TIMEOUT_MS;
    });
  }
  render() {
    return this.song ? this.lyricsTask.render({
      pending: () => {
        return html`<div class="fetching">Fetching Lyrics...</div>`;
      },
      complete: (lyrics) => {
        if (!lyrics) {
          return html`<div class="noLyrics">No Lyrics Found</div>`;
        }
        const isWordSynced = this.loadedLyricsType === 3 /* WORD_SYNCED */;
        const style = [
          ["--gradient-angle", `${isWordSynced ? 90 : 180}deg`],
          ["--animated-text-bg-color", isWordSynced ? "black" : "white"],
          [""]
        ].map((a) => a.join(": ")).join("; ");
        return html`
                          <animated-content-container
                              style=${style}
                              .content=${lyrics.content}
                          ></animated-content-container>
                      `;
      },
      error: (e) => {
        console.error(e);
        return html`<div class="error">Error</div>`;
      }
    }) : html`<div class="error">No Song Loaded</div>`;
  }
};
LyricsContainer.NAME = "lyrics-container";
LyricsContainer.MINIMUM_FILL_DURATION_MS = 300;
LyricsContainer.SCROLL_TIMEOUT_MS = 500;
LyricsContainer.styles = css`
        :host > animated-content-container {
            display: unset;
        }
    `;
__decorateClass([
  property({ attribute: false })
], LyricsContainer.prototype, "song", 2);
__decorateClass([
  provide({ context: loadedLyricsTypeCtx }),
  state()
], LyricsContainer.prototype, "loadedLyricsType", 2);
__decorateClass([
  query(AnimatedContentContainer.NAME)
], LyricsContainer.prototype, "firstContainer", 2);
__decorateClass([
  provide({ context: scrollTimeoutCtx })
], LyricsContainer.prototype, "scrollTimeout", 2);
__decorateClass([
  provide({ context: spotifyContainerCtx })
], LyricsContainer.prototype, "spotifyContainer", 2);
LyricsContainer = __decorateClass([
  customElement(LyricsContainer.NAME)
], LyricsContainer);

// extensions/bad-lyrics/app.ts
var injectNPVLyrics = () => {
  const lyricsContainer = document.querySelector(".main-nowPlayingView-lyricsContent");
  if (!lyricsContainer || lyricsContainer.classList.contains("injected"))
    return;
  lyricsContainer.classList.add("injected");
  const lyricsContainerClone = lyricsContainer.cloneNode(false);
  lyricsContainer.replaceWith(lyricsContainerClone);
  const ourLyricsContainer = new LyricsContainer();
  ourLyricsContainer.song = PlayerW.getSong() ?? null;
  PlayerW.songChangedSubject.subscribe((song) => ourLyricsContainer.song = song ?? null);
  PlayerW.scaledProgressChangedSubject.subscribe((progress) => ourLyricsContainer.updateProgress(progress));
  render(ourLyricsContainer, lyricsContainerClone);
};
injectNPVLyrics();
new PermanentMutationObserver("aside", injectNPVLyrics);
