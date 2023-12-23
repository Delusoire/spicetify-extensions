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
  const wrapInContainerSyncedType = (s, a) => ({
    __type: s,
    tsr: 0,
    ter: 1,
    part: a
  });
  if (track.has_richsync) {
    const richSync = await fetchMxmTrackRichSyncGet(track.commontrack_id, track.track_length);
    l.wordSynced = wrapInContainerSyncedType(
      3 /* WORD_SYNCED */,
      richSync.map((rsLine) => {
        const tsr = rsLine.ts / track.track_length;
        const ter = rsLine.te / track.track_length;
        const duration = rsLine.te - rsLine.ts;
        const part = rsLine.l.map((word, index, words) => {
          const part2 = word.c;
          const tsr2 = word.o / duration;
          const ter2 = words[index + 1]?.o / duration || 1;
          return { tsr: tsr2, ter: ter2, part: part2 };
        });
        return { tsr, ter, part };
      })
    );
  }
  if (track.has_subtitles) {
    const subtitle = JSON.parse(subtitles[0].subtitle_body);
    l.lineSynced = wrapInContainerSyncedType(
      2 /* LINE_SYNCED */,
      subtitle.map((sLine, index, subtitle2) => {
        const tsr = sLine.time.total / track.track_length;
        const ter = subtitle2[index + 1]?.time.total / track.track_length || 1;
        return { tsr, ter, part: sLine.text };
      })
    );
  }
  if (track.has_lyrics || track.has_lyrics_crowd) {
    l.notSynced = wrapInContainerSyncedType(
      1 /* NOT_SYNCED */,
      lyrics.lyrics_body.split("\n").map((lLine) => ({ part: lLine }))
    );
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
    let autoSyncs = 1;
    asyncScheduler.schedule(
      function(self) {
        if (self.isPaused)
          return;
        if (!PlayerAPI3._events.emitResumeSync()) {
          PlayerAPI3._contextPlayer.resume({});
        }
        autoSyncs++;
        const timeout = Math.expm1(Math.LN2 / 2 * autoSyncs);
        this.schedule(self, timeout);
      },
      Math.SQRT2 - 1,
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
import { hermite } from "https://esm.sh/@thi.ng/ramp";
import { LitElement, css, html } from "https://esm.sh/lit";
import { customElement, property, query, queryAll, state } from "https://esm.sh/lit/decorators.js";
import { map } from "https://esm.sh/lit/directives/map.js";
import { when } from "https://esm.sh/lit/directives/when.js";

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
    this.v = nextV;
    this.inEquilibrium = Math.abs(this.v) <= SLEEPING_EPSILON;
    this.p = this.inEquilibrium ? this.p_e : nextP;
    if (Number.isNaN(this.p)) {
      debugger;
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
var SCROLL_TIMEOUT_MS = 500;
var createInterpolator = (...stops) => {
  const spline = hermite(stops);
  return (t) => spline.at(t);
};
var DefaultInterpolators = {
  scale: createInterpolator([0, 0.7], [1, 1.3], [1.1, 1]),
  opacity: createInterpolator([0, 0], [0.3, 0.5], [1, 1], [1.2, 0.7]),
  yOffset: createInterpolator(
    [0, 0],
    [0.2, 0.03],
    [0.3, 0.07],
    [0.4, 0.14],
    [0.5, 0.2],
    [0.7, 0.25],
    [0.8, 0.27],
    [0.9, 0.13],
    [1, 0]
  ),
  glow: createInterpolator([0, 0.7], [1, 1.3], [1.2, 0.8])
};
var globalRSPSpringCtx = createContext("globalRSPSpring");
var scrollTimeoutCtx = createContext("scrollTimeout");
var spotifyContainerCtx = createContext("spotifyContainer");
var loadedLyricsTypeCtx = createContext("loadedLyricsType");
var LyricsContainer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.song = null;
    this.lyricsTask = new Task(this, {
      task: ([song]) => song?.lyrics,
      args: () => [this.song]
    });
    this.loadedLyricsType = 0 /* NONE */;
    this.globalRSPSpring = new Spring(0, 1, 1);
    this.scrollTimeout = 0;
    this.spotifyContainer = document.querySelector("aside div.main-nowPlayingView-lyricsContent.injected") ?? void 0;
  }
  updateProgress(progress) {
    if (this.loadedLyricsType === 0 /* NONE */ || this.loadedLyricsType === 1 /* NOT_SYNCED */)
      return;
    this.firstContainer.updateProgress(progress, 0, 0);
  }
  firstUpdated(changedProperties) {
    this.spotifyContainer?.addEventListener("scroll", (e) => {
      this.scrollTimeout = Date.now() + SCROLL_TIMEOUT_MS;
    });
  }
  render() {
    return this.song ? this.lyricsTask.render({
      pending: () => {
        this.loadedLyricsType = 0 /* NONE */;
        return html`<div class="fetching">Fetching Lyrics...</div>`;
      },
      complete: (availableLyrics) => {
        const lyrics = Object.values(availableLyrics)[0];
        if (!lyrics) {
          this.loadedLyricsType = 0 /* NONE */;
          return html`<div class="noLyrics">No Lyrics Found</div>`;
        }
        this.loadedLyricsType = lyrics.__type;
        const isSynced = this.loadedLyricsType === 3 /* WORD_SYNCED */;
        const style = [
          ["--gradient-angle", `${isSynced ? 90 : 180}deg`],
          ["--animated-text-bg-color", isSynced ? "black" : "white"],
          [""]
        ].map((a) => a.join(": ")).join("; ");
        return html`
                          <animated-text-container style=${style} .text=${lyrics.part}></animated-text-container>
                      `;
      },
      error: (e) => {
        this.loadedLyricsType = 0 /* NONE */;
        console.error(e);
        return html`<div class="error">Error</div>`;
      }
    }) : html`<div class="error">No Song Loaded</div>`;
  }
};
LyricsContainer.styles = css`
        :host > animated-text-container {
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
// @ts-expect-error only has a getter
__decorateClass([
  query("animated-text-container")
], LyricsContainer.prototype, "firstContainer", 2);
__decorateClass([
  provide({ context: globalRSPSpringCtx })
], LyricsContainer.prototype, "globalRSPSpring", 2);
__decorateClass([
  provide({ context: scrollTimeoutCtx })
], LyricsContainer.prototype, "scrollTimeout", 2);
__decorateClass([
  provide({ context: spotifyContainerCtx })
], LyricsContainer.prototype, "spotifyContainer", 2);
LyricsContainer = __decorateClass([
  customElement("lyrics-container")
], LyricsContainer);
var AnimatedTextContainer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.text = [];
    this.tsrAbsolute = 0;
    this.tsr = 0;
    this.ter = 1;
  }
  updateProgress(rsp, index, depthToActiveAncestor) {
    const calculateRSPForChild = (child) => (rsp - child.tsr) / (child.ter - child.tsr);
    const childs = Array.from(this.childs);
    const rsps = childs.map(calculateRSPForChild);
    const activeIndex = rsps.findIndex((rsp2) => Math.floor(rsp2) === 0);
    childs.forEach((child, i) => {
      index = child.updateProgress(rsps[i], index, depthToActiveAncestor + (i === activeIndex ? 0 : 1));
    });
    return index;
  }
  calculateTSRAForPart(part) {
    return this.tsrAbsolute + part.tsr * (this.ter - this.tsr);
  }
  render() {
    return html`${map(
      this.text,
      (part) => when(
        Array.isArray(part.part),
        () => html`<animated-text-container
                            .text=${part.part}
                            tsrAbsolute=${this.calculateTSRAForPart(part)}
                            tsr=${part.tsr}
                            ter=${part.ter}
                        />`,
        () => html`<animated-text
                            text=${part.part}
                            tsrAbsolute=${this.calculateTSRAForPart(part)}
                            tsr=${part.tsr}
                            ter=${part.ter}
                        />`
      )
    )}<br />`;
  }
};
AnimatedTextContainer.styles = css`
        :host {
            /* border: 0;
            background-color: transparent; */
        }
    `;
__decorateClass([
  property({ type: Array })
], AnimatedTextContainer.prototype, "text", 2);
__decorateClass([
  property({ type: Number })
], AnimatedTextContainer.prototype, "tsrAbsolute", 2);
__decorateClass([
  property({ type: Number })
], AnimatedTextContainer.prototype, "tsr", 2);
__decorateClass([
  property({ type: Number })
], AnimatedTextContainer.prototype, "ter", 2);
// @ts-expect-error only has a getter
__decorateClass([
  queryAll("animated-text-container, animated-text")
], AnimatedTextContainer.prototype, "childs", 2);
AnimatedTextContainer = __decorateClass([
  customElement("animated-text-container")
], AnimatedTextContainer);
var AnimatedText = class extends LitElement {
  constructor() {
    super(...arguments);
    this.gradientAlphaSpring = new Spring(0, 25, 1, 0);
    this.text = "";
    this.tsrAbsolute = 0;
    this.tsr = 0;
    this.ter = 1;
    this.scrollTimeout = 0;
    this.loadedLyricsType = 0 /* NONE */;
  }
  updateProgress(rsp, index, depthToActiveAncestor) {
    const crsp = _.clamp(rsp, 0, 1);
    const isActive = depthToActiveAncestor === 0;
    if (isActive) {
      this.globalRSPSpring.setEquilibrium(index + crsp);
      if (Date.now() > this.scrollTimeout && this.spotifyContainer) {
        const lineHeightHeuristic = this.offsetHeight;
        const scrollTop = this.offsetTop - this.spotifyContainer.offsetTop - lineHeightHeuristic * 2;
        const verticalLinesToActive = Math.abs(scrollTop - this.spotifyContainer.scrollTop) / lineHeightHeuristic;
        if (_.inRange(verticalLinesToActive, 1.5, 3.5)) {
          this.spotifyContainer.scrollTo({
            top: scrollTop,
            behavior: "smooth"
          });
        }
      }
    }
    const srsp = this.globalRSPSpring.compute() - index;
    this.gradientAlphaSpring.setEquilibrium(0.9 ** (1 + depthToActiveAncestor));
    this.animateText(srsp);
    return index + 1;
  }
  animateText(srsp) {
    const gradientAlpha = this.gradientAlphaSpring.compute(srsp);
    if (!this.gradientAlphaSpring.isInEquilibrium()) {
      this.style.setProperty("--gradient-alpha", gradientAlpha.toFixed(2));
    }
    this.style.backgroundImage = `linear-gradient(var(--gradient-angle), rgba(255,255,255,var(--gradient-alpha)) ${srsp * 100}%, rgba(255,255,255,0) ${srsp * 110}%)`;
  }
  render() {
    return html`<span role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tsrAbsolute)}
            >${this.text}</span
        >`;
  }
};
AnimatedText.styles = css`
        :host {
            cursor: pointer;
            background-color: black;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
    `;
__decorateClass([
  property()
], AnimatedText.prototype, "text", 2);
__decorateClass([
  property({ type: Number })
], AnimatedText.prototype, "tsrAbsolute", 2);
__decorateClass([
  property({ type: Number })
], AnimatedText.prototype, "tsr", 2);
__decorateClass([
  property({ type: Number })
], AnimatedText.prototype, "ter", 2);
__decorateClass([
  consume({ context: globalRSPSpringCtx })
], AnimatedText.prototype, "globalRSPSpring", 2);
__decorateClass([
  consume({ context: scrollTimeoutCtx, subscribe: true })
], AnimatedText.prototype, "scrollTimeout", 2);
__decorateClass([
  consume({ context: spotifyContainerCtx })
], AnimatedText.prototype, "spotifyContainer", 2);
__decorateClass([
  consume({ context: loadedLyricsTypeCtx })
], AnimatedText.prototype, "loadedLyricsType", 2);
AnimatedText = __decorateClass([
  customElement("animated-text")
], AnimatedText);

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
