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
      const duration = (tes - tss) * track.track_length * 1e3;
      return duration > 500 && {
        tss,
        tes,
        content: [
          {
            tss,
            tes,
            duration,
            content: Filler
          }
        ]
      };
    }).zip(wordSynced).flatten().compact().value();
    l.wordSynced = wrapInContainerSyncedType(2 /* WORD_SYNCED */, wordSyncedFilled);
  }
  if (track.has_subtitles) {
    const subtitle = JSON.parse(subtitles[0].subtitle_body);
    const lineSynced = subtitle.map((sLine, i, subtitle2) => {
      const tss = sLine.time.total / track.track_length;
      const tes = subtitle2[i + 1]?.time.total / track.track_length || 1;
      return { tss, tes, content: [{ tss, tes, content: sLine.text }] };
    });
    l.lineSynced = wrapInContainerSyncedType(1 /* LINE_SYNCED */, lineSynced);
  }
  if (track.has_lyrics || track.has_lyrics_crowd) {
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

// extensions/bad-lyrics/components/components.ts
import { provide } from "https://esm.sh/@lit/context";
import { Task } from "https://esm.sh/@lit/task";
import { LitElement as LitElement2, css, html as html2 } from "https://esm.sh/lit";
import { customElement, property as property2, query, state } from "https://esm.sh/lit/decorators.js";
import { map } from "https://esm.sh/lit/directives/map.js";
import { when } from "https://esm.sh/lit/directives/when.js";

// shared/math.ts
var scalarLerp = (s, e, t) => s + (e - s) * t;
var vectorLerp = (u, v, t) => _.zip(u, v).map(([uxi, vxi]) => scalarLerp(uxi, vxi, t));
var remapScalar = (s, e, x) => (x - s) / (e - s);

// extensions/bad-lyrics/splines/monotoneNormalSpline.ts
import { MonotoneCubicHermitInterpolation } from "https://esm.sh/v135/@adaskothebeast/splines@4.0.0/es2022/splines.mjs";
var MonotoneNormalSpline = class extends MonotoneCubicHermitInterpolation {
  at(t) {
    const t0 = this.xs[0], tf = this.xs.at(-1);
    const ct = _.clamp(t, t0, tf);
    return super.interpolate(ct);
  }
};

// extensions/bad-lyrics/components/contexts.ts
import { createContext } from "https://esm.sh/@lit/context";
var scrollTimeoutCtx = createContext("scrollTimeout");
var spotifyContainerCtx = createContext("spotifyContainer");
var loadedLyricsTypeCtx = createContext("loadedLyricsType");

// extensions/bad-lyrics/components/mixins.ts
import { consume } from "https://esm.sh/@lit/context";
import { html } from "https://esm.sh/lit";
import { property, queryAssignedElements } from "https://esm.sh/lit/decorators.js";
var SyncedMixin = (superClass) => {
  class mixedClass extends superClass {
    constructor() {
      super(...arguments);
      this.content = "";
      this.tss = 0;
      this.tes = 1;
    }
    updateProgress(scaledProgress, depthToActiveAncestor) {
    }
  }
  __decorateClass([
    property()
  ], mixedClass.prototype, "content", 2);
  __decorateClass([
    property({ type: Number })
  ], mixedClass.prototype, "tss", 2);
  __decorateClass([
    property({ type: Number })
  ], mixedClass.prototype, "tes", 2);
  return mixedClass;
};
var AnimatedMixin = (superClass) => {
  class mixedClass extends superClass {
    updateProgress(scaledProgress, depthToActiveAncestor) {
      super.updateProgress(scaledProgress, depthToActiveAncestor);
      const clampedScaledProgress = _.clamp(scaledProgress, -0.5, 1.5);
      if (this.shouldAnimate(clampedScaledProgress, depthToActiveAncestor)) {
        this.csp = clampedScaledProgress;
        this.dtaa = depthToActiveAncestor;
        this.animateContent();
      }
    }
    shouldAnimate(clampedScaledProgress, depthToActiveAncestor) {
      return this.csp !== clampedScaledProgress || this.dtaa !== depthToActiveAncestor;
    }
    animateContent() {
    }
  }
  return mixedClass;
};
var ScrolledMixin = (superClass) => {
  class mixedClass extends superClass {
    constructor() {
      super(...arguments);
      this.scrollTimeout = 0;
    }
    updateProgress(scaledProgress, depthToActiveAncestor) {
      super.updateProgress(scaledProgress, depthToActiveAncestor);
      const isActive = depthToActiveAncestor === 0;
      if (isActive) {
        if (Date.now() > this.scrollTimeout && this.spotifyContainer) {
          const lineHeightHeuristic = this.offsetHeight;
          const scrollTop = this.offsetTop - this.spotifyContainer.offsetTop - lineHeightHeuristic;
          const verticalLinesToActive = Math.abs(scrollTop - this.spotifyContainer.scrollTop) / this.spotifyContainer.offsetHeight;
          if (_.inRange(verticalLinesToActive, 0.1, 0.75)) {
            console.info(scrollTop, this);
            this.spotifyContainer.scrollTo({
              top: scrollTop,
              behavior: document.visibilityState === "visible" ? "smooth" : "auto"
            });
          }
        }
      }
    }
  }
  __decorateClass([
    consume({ context: scrollTimeoutCtx, subscribe: true })
  ], mixedClass.prototype, "scrollTimeout", 2);
  __decorateClass([
    consume({ context: spotifyContainerCtx })
  ], mixedClass.prototype, "spotifyContainer", 2);
  return mixedClass;
};
var SyncedContainerMixin = (superClass) => {
  class mixedClass extends superClass {
    computeChildProgress(rp, child) {
      return rp;
    }
    updateProgress(rp, depthToActiveAncestor) {
      super.updateProgress(rp, depthToActiveAncestor);
      const childs = Array.from(this.childs);
      if (childs.length === 0)
        return;
      childs.forEach((child, i) => {
        const progress = this.computeChildProgress(rp, i);
        const isActive = _.inRange(rp, child.tss, child.tes);
        child.updateProgress(progress, depthToActiveAncestor + (isActive ? 0 : 1));
      });
    }
    render() {
      return html`<slot></slot><br />`;
    }
  }
  __decorateClass([
    queryAssignedElements()
  ], mixedClass.prototype, "childs", 2);
  return mixedClass;
};

// extensions/bad-lyrics/components/components.ts
var opacityInterpolator = new MonotoneNormalSpline([
  [0, 0],
  [0.1, 0.1],
  [0.2, 0.3],
  [0.5, 0.55],
  [0.7, 0.8],
  [1, 1],
  [1.2, 0.8],
  [1.5, 0.7]
]);
var glowRadiusInterpolator = new MonotoneNormalSpline([
  [0, 100],
  [0.2, 7],
  [0.4, 5],
  [0.6, 3],
  [0.7, 2],
  [0.9, 1],
  [1, 3],
  [1.1, 7],
  [1.25, 100]
]);
var glowAlphaInterpolator = new MonotoneNormalSpline([
  [0, 0],
  [0.1, 0.2],
  [0.2, 0.35],
  [0.5, 0.65],
  [0.7, 0.9],
  [1, 1],
  [1.2, 0.6],
  [1.5, 0]
]);
var scaleInterpolator = new MonotoneNormalSpline([
  [-0.5, 1],
  [-0.2, 0.99],
  [-0.1, 0.98],
  [0, 0.94],
  [0.1, 0.99],
  [0.2, 1],
  [0.5, 1.02],
  [0.7, 1.06],
  [0.9, 1.04],
  [1, 1.02],
  [1.2, 1.01],
  [1.5, 1]
]);
var AnimatedText = class extends AnimatedMixin(SyncedMixin(LitElement2)) {
  animateContent() {
    const nextGradientAlpha = opacityInterpolator.at(this.csp).toFixed(5);
    const nextGlowRadius = `${glowRadiusInterpolator.at(this.csp)}px`;
    const nextGlowAlpha = glowAlphaInterpolator.at(this.csp);
    const nextYOffset = `-${this.offsetHeight * 0.1 * this.csp}px`;
    const nextGradientStart = `${this.csp * 95}%`;
    const nextGradientEnd = `${this.csp * 105}%`;
    const nextScale = scaleInterpolator.at(this.csp).toFixed(5);
    this.style.setProperty("--gradient-alpha", nextGradientAlpha);
    this.style.setProperty("--glow-radius", nextGlowRadius);
    this.style.setProperty("--glow-alpha", nextGlowAlpha);
    this.style.setProperty("--gradient-start", nextGradientStart);
    this.style.setProperty("--gradient-end", nextGradientEnd);
    this.style.setProperty("--y-offset", nextYOffset);
    this.style.scale = nextScale;
  }
  onClick() {
    PlayerW.setTimestamp(this.tss);
  }
  render() {
    return html2`<span role="button" @click=${this.onClick}>${this.content}</span>`;
  }
};
AnimatedText.NAME = "animated-text";
AnimatedText.styles = css`
        :host {
            cursor: pointer;
            background-color: black;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            text-shadow: 0 0 var(--glow-radius, 0) rgba(255, 255, 255, var(--glow-alpha, 0));
            transform: translateY(var(--y-offset, 0));
            background-image: linear-gradient(
                var(--gradient-angle),
                rgba(255, 255, 255, var(--gradient-alpha)) var(--gradient-start),
                rgba(255, 255, 255, 0) var(--gradient-end)
            );
        }
    `;
__decorateClass([
  property2()
], AnimatedText.prototype, "split", 2);
AnimatedText = __decorateClass([
  customElement(AnimatedText.NAME)
], AnimatedText);
var DetailTimelineProvider = class extends SyncedContainerMixin(SyncedMixin(LitElement2)) {
  computeChildProgress(rp, child) {
    if (!this.intermediatePositions) {
      const childs = Array.from(this.childs);
      const partialWidths = childs.reduce(
        (partialWidths2, child2) => (partialWidths2.push(partialWidths2.at(-1) + child2.offsetWidth), partialWidths2),
        [0]
      );
      this.lastPosition = partialWidths.at(-1);
      this.intermediatePositions = partialWidths.map((pw) => pw / this.lastPosition);
    }
    return remapScalar(this.intermediatePositions[child], this.intermediatePositions[child + 1], rp);
  }
};
DetailTimelineProvider.NAME = "detail-timeline-provider";
DetailTimelineProvider.styles = css`
        :host {
            display: flex;
            flex-wrap: wrap;
        }
    `;
DetailTimelineProvider = __decorateClass([
  customElement(DetailTimelineProvider.NAME)
], DetailTimelineProvider);
var TimelineProvider = class extends ScrolledMixin(SyncedContainerMixin(SyncedMixin(LitElement2))) {
  computeIntermediatePosition(rsp) {
    if (!this.timelineSpline) {
      const childs = Array.from(this.childs);
      const partialWidths = childs.reduce(
        (partialWidths2, child) => (partialWidths2.push(partialWidths2.at(-1) + child.offsetWidth), partialWidths2),
        [0]
      );
      this.lastPosition = partialWidths.at(-1);
      this.intermediatePositions = partialWidths.map((pw) => pw / this.lastPosition);
      const pairs = _.zip(
        childs.map((child) => child.tss).concat(childs.at(-1).tes),
        this.intermediatePositions
      );
      const first = vectorLerp(pairs[0], pairs[1], -1);
      const last = vectorLerp(pairs.at(-2), pairs.at(-1), 2);
      this.timelineSpline = new MonotoneNormalSpline([first, ...pairs, last]);
    }
    return this.timelineSpline.at(rsp);
  }
  computeChildProgress(rp, child) {
    const sip = this.computeIntermediatePosition(rp);
    return remapScalar(this.intermediatePositions[child], this.intermediatePositions[child + 1], sip);
  }
};
TimelineProvider.NAME = "timeline-provider";
TimelineProvider.styles = css`
        :host {
            display: flex;
            flex-wrap: wrap;
        }
    `;
TimelineProvider = __decorateClass([
  customElement(TimelineProvider.NAME)
], TimelineProvider);
var LyricsContainer = class extends SyncedContainerMixin(SyncedMixin(LitElement2)) {
  render() {
    return html2`<slot></slot>`;
  }
};
LyricsContainer.NAME = "lyrics-container";
LyricsContainer = __decorateClass([
  customElement(LyricsContainer.NAME)
], LyricsContainer);
var LyricsWrapper = class extends LitElement2 {
  constructor(query2) {
    super();
    this.song = null;
    this.updateSong = (song) => {
      this.song = song;
      this.loadedLyricsType = void 0;
    };
    this.lyricsTask = new Task(this, {
      task: async ([song]) => {
        const availableLyrics = await song?.lyrics;
        const lyrics = Object.values(availableLyrics)[0];
        this.loadedLyricsType = lyrics?.__type;
        return lyrics;
      },
      args: () => [this.song]
    });
    this.scrollTimeout = 0;
    this.spotifyContainer = document.querySelector(query2) ?? void 0;
  }
  updateProgress(progress) {
    if (this.loadedLyricsType === void 0 || this.loadedLyricsType === 0 /* NOT_SYNCED */)
      return;
    this.container?.updateProgress(progress, 0);
  }
  firstUpdated(changedProperties) {
    this.spotifyContainer?.addEventListener("scroll", (e) => {
      this.scrollTimeout = Date.now() + LyricsWrapper.SCROLL_TIMEOUT_MS;
    });
  }
  render() {
    if (!this.song) {
      return html2`<div class="info">No Song Loaded</div>`;
    }
    return this.lyricsTask.render({
      pending: () => {
        return html2`<div class="loading">Fetching Lyrics...</div>`;
      },
      complete: (lyrics) => {
        if (!lyrics || lyrics.__type === 0 /* NOT_SYNCED */) {
          return html2`<div class="error">No Lyrics Found</div>`;
        }
        const isWordSync = this.loadedLyricsType === 2 /* WORD_SYNCED */;
        return html2`
                    <style>
                        * {
                            --gradient-angle: ${this.loadedLyricsType === 2 /* WORD_SYNCED */ ? 90 : 180}deg;
                        }
                    </style>
                    <lyrics-container>
                        ${when(
          isWordSync,
          () => html2`${map(
            lyrics.content,
            (l) => html2`<timeline-provider tss=${l.tss} tes=${l.tes}
                                            >${map(
              l.content,
              (w) => html2`<detail-timeline-provider tss=${w.tss} tes=${w.tes}
                                                        >${map(
                w.content.split(""),
                (c) => html2`<animated-text
                                                                    tss=${w.tss}
                                                                    content=${c === " " ? "\xA0" : c}
                                                                ></animated-text>`
              )}</detail-timeline-provider
                                                    >`
            )}</timeline-provider
                                        >`
          )}`,
          () => html2`${map(
            lyrics.content,
            (l) => html2`<timeline-provider tss=${l.tss} tes=${l.tes}
                                            >${map(
              l.content,
              (wl) => html2`<animated-text
                                                        tss=${wl.tss}
                                                        tes=${wl.tes}
                                                        content=${wl.content}
                                                    ></animated-text>`
            )}</timeline-provider
                                        >`
          )}`
        )}</lyrics-container
                    >,
                `;
      },
      error: (e) => {
        console.error(e);
        return html2`<div class="error">Error</div>`;
      }
    });
  }
};
LyricsWrapper.NAME = "lyrics-wrapper";
LyricsWrapper.SCROLL_TIMEOUT_MS = 500;
LyricsWrapper.styles = css`
        :host > animated-content-container {
            display: unset;
        }
    `;
__decorateClass([
  property2({ attribute: false })
], LyricsWrapper.prototype, "song", 2);
__decorateClass([
  provide({ context: loadedLyricsTypeCtx }),
  state()
], LyricsWrapper.prototype, "loadedLyricsType", 2);
__decorateClass([
  query(LyricsContainer.NAME)
], LyricsWrapper.prototype, "container", 2);
__decorateClass([
  provide({ context: scrollTimeoutCtx })
], LyricsWrapper.prototype, "scrollTimeout", 2);
__decorateClass([
  provide({ context: spotifyContainerCtx })
], LyricsWrapper.prototype, "spotifyContainer", 2);
LyricsWrapper = __decorateClass([
  customElement(LyricsWrapper.NAME)
], LyricsWrapper);

// extensions/bad-lyrics/app.ts
var injectLyrics = (selector) => () => {
  const lyricsContainer = document.querySelector(selector);
  if (!lyricsContainer || lyricsContainer.classList.contains("injected"))
    return;
  lyricsContainer.classList.add("injected");
  const lyricsContainerClone = lyricsContainer.cloneNode(false);
  lyricsContainer.replaceWith(lyricsContainerClone);
  const ourLyricsContainer = new LyricsWrapper(selector);
  ourLyricsContainer.song = PlayerW.getSong() ?? null;
  PlayerW.songChangedSubject.subscribe((song) => ourLyricsContainer.updateSong(song ?? null));
  PlayerW.scaledProgressChangedSubject.subscribe((progress) => ourLyricsContainer.updateProgress(progress));
  render(ourLyricsContainer, lyricsContainerClone);
};
var injectNPVLyrics = injectLyrics("aside .main-nowPlayingView-lyricsContent");
var injectCinemaLyrics = injectLyrics("#lyrics-cinema .lyrics-lyrics-contentWrapper");
injectNPVLyrics();
injectCinemaLyrics();
new PermanentMutationObserver(".Root__right-sidebar", injectNPVLyrics);
new PermanentMutationObserver(".Root__lyrics-cinema", injectCinemaLyrics);
