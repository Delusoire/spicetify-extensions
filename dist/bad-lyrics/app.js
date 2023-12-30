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
  const fullyRenderedTracks = tracks.filter((track) => track.props.uri);
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
var flattenLyrics = (lyrics) => Array.isArray(lyrics.content) ? lyrics.content.flatMap(flattenLyrics) : [lyrics];
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
    tsr: 0,
    ter: 1,
    content
  });
  if (track.has_richsync) {
    const richSync = await fetchMxmTrackRichSyncGet(track.commontrack_id, track.track_length);
    const wordSynced = richSync.map((rsLine) => {
      const tsr = rsLine.ts / track.track_length;
      const ter = rsLine.te / track.track_length;
      const content = rsLine.l.map((word, index, words) => {
        return {
          tsr: tsr + word.o / track.track_length,
          ter: tsr + words[index + 1]?.o / track.track_length || ter,
          content: word.c
        };
      });
      return { tsr, ter, content };
    });
    const wordSyncedFilled = wordSynced.flatMap((rsLine, i, wordSynced2) => {
      const nextRsLine = wordSynced2[i + 1];
      const tsr = rsLine.ter;
      const ter = nextRsLine?.tsr;
      const dr = ter - tsr;
      if (!dr)
        return rsLine;
      return [
        rsLine,
        {
          tsr,
          ter,
          duration: dr * track.track_length * 1e3,
          content: Filler
        }
      ];
    });
    l.wordSynced = wrapInContainerSyncedType(3 /* WORD_SYNCED */, wordSyncedFilled);
  }
  if (track.has_subtitles) {
    const subtitle = JSON.parse(subtitles[0].subtitle_body);
    const lineSynced = subtitle.map((sLine, i, subtitle2) => {
      const tsr = sLine.time.total / track.track_length;
      const ter = subtitle2[i + 1]?.time.total / track.track_length || 1;
      return { tsr, ter, content: [{ tsr, ter, content: sLine.text }] };
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
    this.timestamp = 0;
    this.getTimestamp = () => this.timestamp;
    this.setTimestamp = (timestampMs) => Spicetify.Player.seek(timestampMs);
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
    this.GetSong = () => this.Song;
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
}();

// extensions/bad-lyrics/components.ts
import { consume, createContext, provide } from "https://esm.sh/@lit/context";
import { Task } from "https://esm.sh/@lit/task";
import { LitElement, css, html } from "https://esm.sh/lit";
import { customElement, property, query, queryAll, state } from "https://esm.sh/lit/decorators.js";
import { map } from "https://esm.sh/lit/directives/map.js";

// extensions/bad-lyrics/pkgs/catmullRomSpline.ts
var scalarLerp = (s, e, t) => s + (e - s) * t;
var vectorLerp = (u, v, t) => _.zip(u, v).map(([xiu, xiv]) => scalarLerp(xiu, xiv, t));
var remapScalar = (s, e, x) => (x - s) / (e - s);
var slidingWindow = (array, slidingWindowSize) => _.range(slidingWindowSize, array.length + 1).map((i) => array.slice(i - slidingWindowSize, i));
var CatmullRomCurve = class {
  constructor(points) {
    ;
    [this.T, this.P] = _.unzip(points);
  }
  at(t) {
    t = _.clamp(t, this.T[1], this.T[2]);
    const vectorLerpWithRemapedScalar = (u, v, s, e, x) => vectorLerp(u, v, remapScalar(s, e, x));
    const X = (A2, j) => (i) => vectorLerpWithRemapedScalar(A2[i], A2[i + 1], this.T[i], this.T[i + j], t);
    const A = [
      vectorLerpWithRemapedScalar(this.P[0], this.P[1], this.T[0], this.T[1], t),
      vectorLerpWithRemapedScalar(this.P[1], this.P[2], this.T[1], this.T[2], t),
      vectorLerpWithRemapedScalar(this.P[2], this.P[3], this.T[2], this.T[3], t)
    ];
    const B = [
      vectorLerpWithRemapedScalar(A[0], A[1], this.T[0], this.T[2], t),
      vectorLerpWithRemapedScalar(A[1], A[2], this.T[1], this.T[3], t)
    ];
    return vectorLerpWithRemapedScalar(B[0], B[1], this.T[1], this.T[2], t);
  }
};
var CatmullRollSpline = class _CatmullRollSpline {
  constructor(points) {
    this.points = _.sortBy(points, (p) => p[0]);
    this.catnumRollCurves = slidingWindow(this.points, 4).map(
      (P) => new CatmullRomCurve(P)
    );
  }
  at(t) {
    const point = [t, []];
    const i = _.clamp(_.sortedLastIndexBy(this.points, point, (p) => p[0]) - 2, 0, this.catnumRollCurves.length - 1);
    return this.catnumRollCurves[i].at(t);
  }
  static fromPoints(points) {
    if (points.length < 4)
      return null;
    return new _CatmullRollSpline(points);
  }
  static fromPointsClamped(points) {
    if (points.length < 2)
      return null;
    const [P1, P2] = _.take(points, 2);
    const [P3, P4] = _.takeRight(points, 2);
    const P0 = [scalarLerp(P1[0], P2[0], -1), vectorLerp(P1[1], P2[1], -1)];
    const P5 = [scalarLerp(P3[0], P4[0], 2), vectorLerp(P3[1], P4[1], 2)];
    return this.fromPoints([P0, ...points, P5]);
  }
};

// extensions/bad-lyrics/pkgs/spring.ts
var TAU = Math.PI * 2;
var SLEEPING_EPSILON = 1e-7;
var Spring = class {
  constructor(p, dampingRatio, frequency, lastUpdateTime = Date.now()) {
    this.p = p;
    this.dampingRatio = dampingRatio;
    this.lastUpdateTime = lastUpdateTime;
    this.inEquilibrium = true;
    this.isInEquilibrium = () => this.inEquilibrium;
    if (dampingRatio * frequency < 0) {
      throw new Error("Spring does not converge.");
    }
    this.v = 0;
    this.p_e = p;
    this.W0 = frequency * TAU;
  }
  // We allow consumers to specify their own timescales
  compute(time = Date.now()) {
    const current = this.inEquilibrium ? this.p : this.solve(time - this.lastUpdateTime);
    this.lastUpdateTime = time;
    return current;
  }
  solve(dt) {
    const offset = this.p - this.p_e;
    const dp = this.v * dt;
    const A = this.dampingRatio * this.W0;
    const Adt = A * dt;
    const decay = Math.exp(-Adt);
    let nextP, nextV;
    if (this.dampingRatio == 1) {
      nextP = this.p_e + (offset * (1 + Adt) + dp) * decay;
      nextV = (this.v * (1 - Adt) - offset * (A * Adt)) * decay;
    } else if (this.dampingRatio < 1) {
      const W_W0 = Math.sqrt(1 - this.dampingRatio * this.dampingRatio);
      const W = this.W0 * W_W0;
      const i = Math.cos(W * dt);
      const j = Math.sin(W * dt);
      nextP = this.p_e + (offset * i + (dp + Adt * offset) * (j / (W * dt))) * decay;
      nextV = (this.v * (i - A / W * j) - offset * j * (this.W0 / W_W0)) * decay;
    } else if (this.dampingRatio > 1) {
      const W_W0 = Math.sqrt(this.dampingRatio ** 2 - 1);
      const W = this.W0 * W_W0;
      const r_average = -this.W0 * this.dampingRatio;
      const r_1 = r_average + W;
      const r_2 = r_average - W;
      const c_2 = (offset * r_1 - this.v) / (r_1 - r_2);
      const c_1 = offset - c_2;
      const e_1 = c_1 * Math.exp(r_1 * dt);
      const e_2 = c_2 * Math.exp(r_2 * dt);
      nextP = this.p_e + e_1 + e_2;
      nextV = r_1 * e_1 + r_2 * e_2;
    } else {
      throw "Solar flare detected.";
    }
    if (Math.abs(nextV) > SLEEPING_EPSILON) {
      this.p = nextP;
      this.v = nextV;
    } else {
      this.reset(this.p_e);
    }
    return nextP;
  }
  setEquilibrium(position) {
    if (this.p_e != position) {
      this.p_e = position;
      this.inEquilibrium = false;
    }
    return this.p_e;
  }
  reset(position) {
    this.v = 0;
    this.p = this.p_e = position;
    this.inEquilibrium = true;
  }
};

// extensions/bad-lyrics/components.ts
var scrollTimeoutCtx = createContext("scrollTimeout");
var spotifyContainerCtx = createContext("spotifyContainer");
var loadedLyricsTypeCtx = createContext("loadedLyricsType");
var AnimatedContentContainer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.content = [];
    this.tsr = 0;
    this.ter = 1;
  }
  updateProgress(rsp, index, depthToActiveAncestor) {
    const childs = Array.from(this.childs);
    const tsrs = childs.map((child) => child.tsr);
    const activeIndex = _.sortedIndexOf(tsrs, rsp) - 1;
    childs.forEach((child, i) => {
      index = child.updateProgress(rsp, index, depthToActiveAncestor + (i === activeIndex ? 0 : 1));
    });
    return index;
  }
  render() {
    return html`${map(this.content, (part) => {
      if (Array.isArray(part.content)) {
        return html`<animated-content-container .content=${part.content} tsr=${part.tsr} ter=${part.ter} />`;
      }
      if (part.content === Filler) {
        const filler = part;
        return html`<animated-filler
                        content=${filler.content}
                        tsr=${filler.tsr}
                        ter=${filler.ter}
                        duration=${filler.duration}
                    />`;
      }
      return html` <animated-content content=${part.content} tsr=${part.tsr} ter=${part.ter} />`;
    })}<br />`;
  }
};
AnimatedContentContainer.NAME = "animated-content-container";
AnimatedContentContainer.styles = css`
        :host {
            /* border: 0;
            background-color: transparent; */
        }
    `;
__decorateClass([
  property({ type: Array })
], AnimatedContentContainer.prototype, "content", 2);
__decorateClass([
  property({ type: Number })
], AnimatedContentContainer.prototype, "tsr", 2);
__decorateClass([
  property({ type: Number })
], AnimatedContentContainer.prototype, "ter", 2);
// @ts-expect-error only has a getter
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
    this.tsr = 0;
    this.ter = 1;
    this.scrollTimeout = 0;
  }
  updateProgress(rsp, index, depthToActiveAncestor) {
    const isActive = depthToActiveAncestor === 0;
    if (isActive) {
      if (Date.now() > this.scrollTimeout && this.spotifyContainer) {
        const lineHeightHeuristic = this.offsetHeight;
        const scrollTop = this.offsetTop - this.spotifyContainer.offsetTop - lineHeightHeuristic;
        const verticalLinesToActive = Math.abs(scrollTop - this.spotifyContainer.scrollTop) / this.spotifyContainer.offsetHeight;
        if (_.inRange(verticalLinesToActive, 0.1, 0.75)) {
          this.spotifyContainer.scrollTo({
            top: scrollTop,
            behavior: "smooth"
          });
        }
      }
    }
    const crsp = _.clamp(remapScalar(this.tsr, this.ter, rsp), -0.5, 1.5);
    this.animateContent(crsp, depthToActiveAncestor);
    return index + 1;
  }
};
__decorateClass([
  property()
], SyncedScrolledContent.prototype, "content", 2);
__decorateClass([
  property({ type: Number })
], SyncedScrolledContent.prototype, "tsr", 2);
__decorateClass([
  property({ type: Number })
], SyncedScrolledContent.prototype, "ter", 2);
__decorateClass([
  consume({ context: scrollTimeoutCtx, subscribe: true })
], SyncedScrolledContent.prototype, "scrollTimeout", 2);
__decorateClass([
  consume({ context: spotifyContainerCtx })
], SyncedScrolledContent.prototype, "spotifyContainer", 2);
var AnimatedFiller = class extends SyncedScrolledContent {
  constructor() {
    super(...arguments);
    this.duration = 0;
    this.springsInitialized = false;
  }
  tryInitializeSprings(srsp) {
    if (this.springsInitialized)
      return;
    this.gradientAlphaSpring = new Spring(0, 1, 1, srsp);
    this.springsInitialized = true;
  }
  animateContent(srsp, depthToActiveAncestor) {
    this.tryInitializeSprings(srsp);
    this.gradientAlphaSpring.setEquilibrium(0.9 ** (1 + depthToActiveAncestor));
    const gradientAlpha = this.gradientAlphaSpring.compute(srsp);
    if (!this.gradientAlphaSpring.isInEquilibrium()) {
      this.style.setProperty("--gradient-alpha", gradientAlpha.toFixed(2));
    }
    this.style.backgroundImage = `linear-gradient(var(--gradient-angle), rgba(255,255,255,var(--gradient-alpha)) ${srsp * 100}%, rgba(255,255,255,0) ${srsp * 110}%)`;
  }
  render() {
    if (this.duration < LyricsContainer.MINIMUM_FILL_DURATION_MS)
      return;
    return html`
            <span role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tsr)}>${this.content}</span><br />
        `;
  }
};
AnimatedFiller.NAME = "animated-filler";
AnimatedFiller.styles = css`
        :host {
            cursor: pointer;
            background-color: black;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
    `;
__decorateClass([
  property({ type: Number })
], AnimatedFiller.prototype, "duration", 2);
AnimatedFiller = __decorateClass([
  customElement(AnimatedFiller.NAME)
], AnimatedFiller);
var AnimatedContent = class extends SyncedScrolledContent {
  constructor() {
    super(...arguments);
    this.loadedLyricsType = 0 /* NONE */;
    this.springsInitialized = false;
  }
  tryInitializeSprings(srsp) {
    if (this.springsInitialized)
      return;
    this.gradientAlphaSpring = new Spring(0, 1, 1, srsp);
    this.springsInitialized = true;
  }
  animateContent(srsp, depthToActiveAncestor) {
    this.tryInitializeSprings(srsp);
    this.gradientAlphaSpring.setEquilibrium(0.9 ** (1 + depthToActiveAncestor));
    const gradientAlpha = this.gradientAlphaSpring.compute(srsp);
    if (!this.gradientAlphaSpring.isInEquilibrium()) {
      this.style.setProperty("--gradient-alpha", gradientAlpha.toFixed(2));
    }
    this.style.backgroundImage = `linear-gradient(var(--gradient-angle), rgba(255,255,255,var(--gradient-alpha)) ${srsp * 100}%, rgba(255,255,255,0) ${srsp * 110}%)`;
  }
  render() {
    return html`<span role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tsr)}
            >${this.content}</span
        >`;
  }
};
AnimatedContent.NAME = "animated-content";
AnimatedContent.styles = css`
        :host {
            cursor: pointer;
            background-color: black;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
    `;
__decorateClass([
  consume({ context: loadedLyricsTypeCtx })
], AnimatedContent.prototype, "loadedLyricsType", 2);
AnimatedContent = __decorateClass([
  customElement(AnimatedContent.NAME)
], AnimatedContent);
var LyricsContainer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.song = null;
    this.globalRSPSpline = null;
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
        if (this.loadedLyricsType === 2 /* LINE_SYNCED */ || this.loadedLyricsType === 3 /* WORD_SYNCED */) {
          this.globalRSPSpline = CatmullRollSpline.fromPointsClamped(
            flattenLyrics(lyrics).map((l) => [l.tsr, [l.tsr]])
          );
        } else {
          this.globalRSPSpline = null;
        }
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
    this.firstContainer.updateProgress(this.globalRSPSpline?.at(progress)[0] ?? 0, 0, 0);
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
  state()
], LyricsContainer.prototype, "globalRSPSpline", 2);
__decorateClass([
  provide({ context: loadedLyricsTypeCtx }),
  state()
], LyricsContainer.prototype, "loadedLyricsType", 2);
// @ts-expect-error only has a getter
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
new PermanentMutationObserver("aside", () => {
  const lyricsContainer = document.querySelector(".main-nowPlayingView-lyricsContent");
  if (!lyricsContainer || lyricsContainer.classList.contains("injected"))
    return;
  lyricsContainer.classList.add("injected");
  const lyricsContainerClone = lyricsContainer.cloneNode(false);
  lyricsContainer.replaceWith(lyricsContainerClone);
  const ourLyricsContainer = new LyricsContainer();
  ourLyricsContainer.song = PlayerW.GetSong() ?? null;
  PlayerW.songChangedSubject.subscribe((song) => ourLyricsContainer.song = song ?? null);
  PlayerW.scaledProgressChangedSubject.subscribe((progress) => ourLyricsContainer.updateProgress(progress));
  render(ourLyricsContainer, lyricsContainerClone);
});
