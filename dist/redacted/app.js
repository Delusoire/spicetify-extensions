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

// extensions/redacted/app.ts
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
        console.log("nextTarget:", nextTarget);
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

// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;

// extensions/redacted/Services/LyricsProvider.ts
var headers = {
  authority: "apic-desktop.musixmatch.com",
  cookie: "x-mxm-token-guid="
};
var CONFIG = {
  musixmatchToken: ""
};
{
  const url = new URL("https://apic-desktop.musixmatch.com/ws/1.1/token.get");
  url.searchParams.append("app_id", "web-desktop-app-v1.0");
  Spicetify.CosmosAsync.get(url.toString(), void 0, _.omit(headers, "cookie")).then((res) => {
    if (res.message.header.status_code === 200 && res.message.body.user_token) {
      CONFIG.musixmatchToken = res.message.body.user_token;
    } else {
      debugger;
    }
  });
}
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
          const ter2 = words[index + 1]?.o / 1e3;
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
        const ter = subtitle2[index + 1]?.time.total / track.track_length;
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
  const url = new URL("https://apic-desktop.musixmatch.com/ws/1.1/macro.subtitles.get");
  url.searchParams.append("format", "json");
  url.searchParams.append("namespace", "lyrics_richsynched");
  url.searchParams.append("subtitle_format", "mxm");
  url.searchParams.append("app_id", "web-desktop-app-v1.0");
  url.searchParams.append("q_album", album);
  url.searchParams.append("q_artist", artist);
  url.searchParams.append("q_artists", artist);
  url.searchParams.append("q_track", title);
  url.searchParams.append("track_spotify_id", uri);
  url.searchParams.append("q_duration", encodeURIComponent(durationS));
  url.searchParams.append("f_subtitle_length", encodeURIComponent(Math.floor(durationS)));
  url.searchParams.append("usertoken", CONFIG.musixmatchToken);
  const res = await Spicetify.CosmosAsync.get(url.toString(), void 0, headers);
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
  const url = new URL("https://apic-desktop.musixmatch.com/ws/1.1/track.richsync.get");
  url.searchParams.append("format", "json");
  url.searchParams.append("subtitle_format", "mxm");
  url.searchParams.append("app_id", "web-desktop-app-v1.0");
  url.searchParams.append("f_subtitle_length", encodeURIComponent(trackLength));
  url.searchParams.append("q_duration", encodeURIComponent(trackLength));
  url.searchParams.append("commontrack_id", encodeURIComponent(commonTrackId));
  url.searchParams.append("usertoken", CONFIG.musixmatchToken);
  const res = await Spicetify.CosmosAsync.get(url.toString(), void 0, headers);
  return JSON.parse(res.message.body.richsync.richsync_body);
};

// extensions/redacted/Services/Song.ts
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

// extensions/redacted/Services/PlayerW.ts
import { Subject, animationFrameScheduler, asyncScheduler } from "https://esm.sh/rxjs";
var { Player: Player2 } = Spicetify;
var { PlayerAPI: PlayerAPI3 } = Spicetify.Platform;
var PlayerW = new class {
  constructor() {
    this.isPaused = PlayerAPI3._state.isPaused;
    this.scaledProgress = 0;
    this.songChangedSubject = new Subject();
    this.isPausedChangedSubject = new Subject();
    this.scaledProgressChangedSubject = new Subject();
    this.GetSong = () => this.Song;
    {
      const callback = (state2) => {
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
      };
      onSongChanged(callback);
    }
    {
      const callback = () => {
        const isPausedNext = Player2.data?.isPaused ?? true;
        if (this.isPaused !== isPausedNext) {
          if (!isPausedNext) {
            this.startTimestepping();
          }
          this.isPaused = !this.isPaused;
          this.isPausedChangedSubject.next(this.isPaused);
        }
      };
      Player2.addEventListener("onplaypause", callback);
    }
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
    animationFrameScheduler.schedule(
      function(self) {
        self.scaledProgress = Spicetify.Player.getProgressPercent();
        self.scaledProgressChangedSubject.next(self.scaledProgress);
        this.schedule(self);
      },
      void 0,
      this
    );
    this.triggerTimestampSync();
  }
}();

// extensions/redacted/components.ts
import { LitElement, html } from "https://esm.sh/lit";
import { customElement, property, state } from "https://esm.sh/lit/decorators.js";

// extensions/redacted/Packages/Spring.ts
var TAU = Math.PI * 2;
var SLEEPING_EPSILON = 1e-3;
var Spring = class {
  constructor(p, dampingRatio, frequency) {
    this.p = p;
    this.dampingRatio = dampingRatio;
    this.sleeping = true;
    this.isInEquilibrium = () => this.sleeping;
    if (dampingRatio * frequency < 0) {
      throw new Error("Spring does not converge.");
    }
    this.v = 0;
    this.p_e = p;
    this.W0 = frequency * TAU;
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

// extensions/redacted/Packages/Sprine.ts
var Sprine = class extends Spring {
  constructor(position, dampingRatio, frequency, interpolate) {
    super(position, dampingRatio, frequency);
    this.interpolate = interpolate;
    this.updatedTime = Date.now();
  }
  updateEquilibrium(relativeTime) {
    const interpolatedPosition = this.interpolate(relativeTime);
    this.setEquilibrium(interpolatedPosition);
  }
  get current() {
    const nextUpdatedTime = Date.now();
    const current = this.update(nextUpdatedTime - this.updatedTime);
    this.updatedTime = nextUpdatedTime;
    return current;
  }
};

// extensions/redacted/components.ts
import { Task } from "https://esm.sh/@lit/task";
import { map } from "https://esm.sh/lit/directives/map.js";
import { when } from "https://esm.sh/lit/directives/when.js";
import UnitBezier from "https://esm.sh/@mapbox/unitbezier";
var sprineState = { hasChanged: (s) => !s.isInEquilibrium() };
var bezierToInterpolator = (p1x, p1y, p2x, p2y) => {
  const bezier = new UnitBezier(p1x, p1y, p2x, p2y);
  return (x) => bezier.solve(x);
};
var DefaultInterpolators = {
  scale: bezierToInterpolator(0.37, 0, 0.47, 1.4),
  opacity: bezierToInterpolator(0.37, 0, 0.47, 1.4),
  yOffset: bezierToInterpolator(0.37, 0, 0.47, 1.4),
  glow: bezierToInterpolator(0, 1.7, 0.07, 1)
};
var LyricsContainer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.song = null;
    this.lyricsTask = new Task(this, {
      task: ([song]) => song?.lyrics,
      args: () => [this.song]
    });
    this.scaledProgress = 0;
    this.hasLyrics = false;
  }
  render() {
    return this.lyricsTask.render({
      pending: () => {
        this.hasLyrics = false;
        return html`<div class="lyrics_++-container-fetching">Fetching Lyrics...</div>`;
      },
      complete: (lyrics) => {
        const wordSynced = lyrics?.wordSynced;
        if (!wordSynced) {
          this.hasLyrics = false;
          return html`<div class="lyrics_++-container-no_lyrics">No Lyrics</div>`;
        }
        this.hasLyrics = true;
        return html`<div class="lyrics_++-container">
                    <animated-text-container
                        relativeScaledProgress=${this.scaledProgress}
                        .text=${wordSynced.part}
                    ></animated-text-container>
                </div>`;
      },
      error: () => {
        this.hasLyrics = false;
        return html`<div class="lyrics_++-container-error">Error</div>`;
      }
    });
  }
};
__decorateClass([
  property({ attribute: false })
], LyricsContainer.prototype, "song", 2);
__decorateClass([
  state()
], LyricsContainer.prototype, "scaledProgress", 2);
__decorateClass([
  state()
], LyricsContainer.prototype, "hasLyrics", 2);
LyricsContainer = __decorateClass([
  customElement("lyrics-container")
], LyricsContainer);
var AnimatedTextContainer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.relativeScaledProgress = 0;
    this.text = [];
    this.tsr = 0;
    this.ter = 1;
  }
  render() {
    return html`<div class="animated-text-container">
            ${map(
      this.text,
      (part) => when(
        Array.isArray(part.part),
        () => html`<animated-text-container
                            relativeScaledProgress=${this.relativeScaledProgress / (part.ter - part.tsr)}
                            .text=${part.part}
                            tsr=${part.tsr}
                            ter=${part.ter}
                        />`,
        () => html`<animated-text
                            relativeScaledProgress=${this.relativeScaledProgress / (part.ter - part.tsr)}
                            text=${part.part}
                            tsr=${part.tsr}
                            ter=${part.ter}
                        />`
      )
    )}
        </div>`;
  }
};
__decorateClass([
  property({ type: Number })
], AnimatedTextContainer.prototype, "relativeScaledProgress", 2);
__decorateClass([
  property({ type: Array })
], AnimatedTextContainer.prototype, "text", 2);
__decorateClass([
  property({ type: Number })
], AnimatedTextContainer.prototype, "tsr", 2);
__decorateClass([
  property({ type: Number })
], AnimatedTextContainer.prototype, "ter", 2);
AnimatedTextContainer = __decorateClass([
  customElement("animated-text-container")
], AnimatedTextContainer);
var AnimatedText = class extends LitElement {
  constructor(interpolators = DefaultInterpolators) {
    super();
    this.relativeScaledProgress = 0;
    this.text = "";
    this.tsr = 0;
    this.ter = 1;
    this.scaleSprine = new Sprine(0, 0.6, 0.7, interpolators.scale);
    this.opacitySprine = new Sprine(0, 0.5, 1, interpolators.opacity);
    this.yOffsetSprine = new Sprine(0, 0.4, 1.25, interpolators.yOffset);
    this.glowSprine = new Sprine(0, 0.5, 1, interpolators.glow);
  }
  shouldUpdate(changedProperties) {
    if (changedProperties.has("relativeScaledProgress")) {
      const relativeTime = this.relativeScaledProgress;
      this.scaleSprine.updateEquilibrium(relativeTime);
      this.opacitySprine.updateEquilibrium(relativeTime);
      this.yOffsetSprine.updateEquilibrium(relativeTime);
      this.glowSprine.updateEquilibrium(relativeTime);
      this.style.setProperty("--gradient-progress", `${100 * relativeTime}%`);
      changedProperties.delete("relativeScaledProgress");
    }
    if (changedProperties.has("scaleSprine")) {
      const scale = this.scaleSprine.current;
      this.style.scale = scale.toString();
      changedProperties.delete("scaleSprine");
    }
    if (changedProperties.has("opacitySprine")) {
      const opacity = this.opacitySprine.current;
      this.style.opacity = opacity.toString();
      changedProperties.delete("opacitySprine");
    }
    if (changedProperties.has("yOffsetSprine")) {
      const yOffset = this.yOffsetSprine.current;
      this.style.transform = `translateY(calc(0.25rem *${yOffset}))`;
      changedProperties.delete("yOffsetSprine");
    }
    if (changedProperties.has("glowSprine")) {
      const glow = this.glowSprine.current;
      this.style.setProperty("--text-shadow-opacity", `${100 * glow}%`);
      this.style.setProperty("--text-shadow-blur-radius", `${glow}px`);
      changedProperties.delete("glowSprine");
    }
    return Boolean(changedProperties.size);
  }
  render() {
    return html`<span class="animated-text" role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tsr)}
            >${this.text}</span
        >`;
  }
};
__decorateClass([
  state(sprineState)
], AnimatedText.prototype, "scaleSprine", 2);
__decorateClass([
  state(sprineState)
], AnimatedText.prototype, "opacitySprine", 2);
__decorateClass([
  state(sprineState)
], AnimatedText.prototype, "yOffsetSprine", 2);
__decorateClass([
  state(sprineState)
], AnimatedText.prototype, "glowSprine", 2);
__decorateClass([
  property({ type: Number })
], AnimatedText.prototype, "relativeScaledProgress", 2);
__decorateClass([
  property()
], AnimatedText.prototype, "text", 2);
__decorateClass([
  property({ type: Number })
], AnimatedText.prototype, "tsr", 2);
__decorateClass([
  property({ type: Number })
], AnimatedText.prototype, "ter", 2);
AnimatedText = __decorateClass([
  customElement("animated-text")
], AnimatedText);

// extensions/redacted/app.ts
debugger;
new PermanentMutationObserver("main", () => {
  const lyricsContainer = document.querySelector(".main-nowPlayingView-lyricsContent");
  if (!lyricsContainer || lyricsContainer.classList.contains("injected"))
    return;
  lyricsContainer.classList.add("injected");
  const ourLyricsContainer = new LyricsContainer();
  ourLyricsContainer.song = PlayerW.GetSong() ?? null;
  PlayerW.songChangedSubject.subscribe((song) => ourLyricsContainer.song = song ?? null);
  PlayerW.scaledProgressChangedSubject.subscribe(
    (scaledProgress) => ourLyricsContainer.scaledProgress = scaledProgress
  );
  lyricsContainer.innerHTML = "";
  render(ourLyricsContainer, lyricsContainer);
});
debugger;
