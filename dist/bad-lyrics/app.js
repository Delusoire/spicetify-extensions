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
  const w = (s, a) => ({
    __type: s,
    tsr: 0,
    ter: 1,
    part: a
  });
  if (track.has_richsync) {
    const richSync = await fetchMxmTrackRichSyncGet(track.commontrack_id, track.track_length);
    l.wordSynced = w(
      "WordSynced",
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
    l.lineSynced = w(
      "LineSynced",
      subtitle.map((sLine, index, subtitle2) => {
        const tsr = sLine.time.total / track.track_length;
        const ter = subtitle2[index + 1]?.time.total / track.track_length || 1;
        return { tsr, ter, part: sLine.text };
      })
    );
  }
  if (track.has_lyrics || track.has_lyrics_crowd) {
    l.nonSynced = w(
      "NonSynced",
      lyrics.lyrics_body.split("\n").map((lLine) => ({ part: lLine }))
    );
  }
  return l;
};
var fetchMxmMacroSubtitlesGet = async (uri, title, artist, album, durationS) => {
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
import { createContext, provide, consume } from "https://esm.sh/@lit/context";
import { Task } from "https://esm.sh/@lit/task";
import { hermite } from "https://esm.sh/@thi.ng/ramp";
import { LitElement, css, html } from "https://esm.sh/lit";
import { customElement, property, query, queryAll, state } from "https://esm.sh/lit/decorators.js";
import { map } from "https://esm.sh/lit/directives/map.js";
import { when } from "https://esm.sh/lit/directives/when.js";

// extensions/bad-lyrics/pkgs/spring.ts
var TAU = Math.PI * 2;
var SLEEPING_EPSILON = 1e-3;
var Spring = class {
  constructor(p, dampingRatio, frequency) {
    this.p = p;
    this.dampingRatio = dampingRatio;
    this.sleeping = true;
    this.updatedTime = Date.now();
    this.isInEquilibrium = () => this.sleeping;
    if (dampingRatio * frequency < 0) {
      throw new Error("Spring does not converge.");
    }
    this.v = 0;
    this.p_e = p;
    this.W0 = frequency * TAU;
  }
  get current() {
    const nextUpdatedTime = Date.now();
    const current = this.update(nextUpdatedTime - this.updatedTime);
    this.updatedTime = nextUpdatedTime;
    return current;
  }
  update(dt) {
    const offset = this.p - this.p_e;
    const dp = this.v * dt;
    const A = this.dampingRatio * this.W0;
    const Adt = A * dt;
    const decay = Math.exp(-Adt);
    let newPosition, newVelocity;
    if (this.dampingRatio == 1) {
      newPosition = this.p_e + (offset * (1 + Adt) + dp) * decay;
      newVelocity = (this.v * (1 - Adt) - offset * (A * Adt)) * decay;
    } else if (this.dampingRatio < 1) {
      const W_W0 = Math.sqrt(1 - this.dampingRatio * this.dampingRatio);
      const W = this.W0 * W_W0;
      const i = Math.cos(W * dt);
      const j = Math.sin(W * dt);
      newPosition = this.p_e + (offset * i + (dp + Adt * offset) * (j / (W * dt))) * decay;
      newVelocity = (this.v * (i - A / W * j) - offset * j * (this.W0 / W_W0)) * decay;
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
      newPosition = this.p_e + e_1 + e_2;
      newVelocity = r_1 * e_1 + r_2 * e_2;
    } else {
      throw "Solar flare detected.";
    }
    this.p = newPosition;
    this.v = newVelocity;
    this.sleeping = Math.abs(this.v) <= SLEEPING_EPSILON;
    return newPosition;
  }
  setEquilibrium(position) {
    if (this.p_e != position) {
      this.p_e = position;
      this.sleeping = false;
    }
    return this.p_e;
  }
  reset(position) {
    this.v = 0;
    this.p = this.p_e = position;
    this.sleeping = true;
  }
};

// extensions/bad-lyrics/components.ts
var SCROLL_TIMEOUT_MS = 3e3;
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
var globalRSPSpringCtx = createContext("grsp");
var scrollTimeoutCtx = createContext("scrollTimeout");
var spotifyContainerCtx = createContext("spotifyContainer");
var LyricsContainer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.song = null;
    this.lyricsTask = new Task(this, {
      task: ([song]) => song?.lyrics,
      args: () => [this.song]
    });
    this.hasLyrics = false;
    this.globalRSPSpring = new Spring(0, 1, 1);
    this.scrollTimeout = 0;
    this.spotifyContainer = document.querySelector("aside div.main-nowPlayingView-lyricsContent.injected") ?? void 0;
  }
  updateProgress(progress) {
    if (!this.hasLyrics)
      return;
    this.firstContainer.updateProgress(progress, 0, 0);
  }
  firstUpdated(changedProperties) {
    this.spotifyContainer?.addEventListener("scroll", (e) => {
      if (!e.isTrusted)
        return;
      this.scrollTimeout = Date.now() + SCROLL_TIMEOUT_MS;
    });
  }
  render() {
    return this.lyricsTask.render({
      pending: () => {
        this.hasLyrics = false;
        return html`<div class="fetching">Fetching Lyrics...</div>`;
      },
      complete: (lyrics) => {
        const wordSynced = lyrics?.wordSynced;
        if (!wordSynced) {
          this.hasLyrics = false;
          return html`<div class="noLyrics">No Lyrics</div>`;
        }
        this.hasLyrics = true;
        return html`
                    <animated-text-container style="display: unset;" .text=${wordSynced.part}></animated-text-container>
                `;
      },
      error: () => {
        this.hasLyrics = false;
        return html`<div class="error">Error</div>`;
      }
    });
  }
};
LyricsContainer.styles = css`
        :host {
        }
    `;
__decorateClass([
  property({ attribute: false })
], LyricsContainer.prototype, "song", 2);
__decorateClass([
  state()
], LyricsContainer.prototype, "hasLyrics", 2);
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
    this.text = "";
    this.tsrAbsolute = 0;
    this.tsr = 0;
    this.ter = 1;
    this.scrollTimeout = 0;
  }
  updateProgress(rsp, index, depthToActiveAncestor) {
    rsp = _.clamp(rsp, 0, 1);
    const isActive = depthToActiveAncestor === 0;
    if (isActive) {
      if (this.globalRSPSpring) {
        this.globalRSPSpring.setEquilibrium(index + rsp);
        rsp = this.globalRSPSpring.current - index;
      }
      if (Date.now() > this.scrollTimeout && this.spotifyContainer) {
        const lineHeight = this.offsetHeight;
        const scrollTop = this.offsetTop - this.spotifyContainer.offsetTop - lineHeight;
        const verticalLinesToActive = Math.abs(scrollTop - this.spotifyContainer.scrollTop) / lineHeight;
        if (1 <= verticalLinesToActive && verticalLinesToActive <= 4)
          this.spotifyContainer.scrollTo({
            top: this.offsetTop - this.spotifyContainer.offsetTop - 20,
            behavior: "smooth"
          });
      }
    }
    if (rsp <= 0) {
      this.style.textShadow = "0 0 var(3.75px,0) rgba(255,255,255,0.5)";
      this.style.backgroundColor = "black";
      this.style.backgroundImage = "unset";
    } else {
      if (rsp >= 1) {
        this.style.textShadow = "0 0 var(1.25px,0) rgba(255,255,255,0.85)";
      } else {
        const textShadowBlurRadiusPx = rsp * 5;
        const textShadowOpacityPercent = rsp * 100;
        this.style.textShadow = `0 0 ${textShadowBlurRadiusPx}px ${textShadowOpacityPercent}%}`;
      }
      this.style.backgroundImage = `linear-gradient(90deg, rgba(255,255,255,0.85) ${rsp * 100}%, rgba(255,255,255,0) ${rsp * 100}%)`;
    }
    return index + 1;
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
  consume({ context: scrollTimeoutCtx })
], AnimatedText.prototype, "scrollTimeout", 2);
__decorateClass([
  consume({ context: spotifyContainerCtx })
], AnimatedText.prototype, "spotifyContainer", 2);
AnimatedText = __decorateClass([
  customElement("animated-text")
], AnimatedText);

// extensions/bad-lyrics/app.ts
debugger;
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
//! this doesn't differentiate human scroll and scrollTo
