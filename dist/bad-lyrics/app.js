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
var fp = ld_fp;

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
    const wordSyncedFilled = wordSynced.flatMap((rsLine, i, wordSynced2) => {
      const nextRsLine = wordSynced2[i + 1];
      const tss = rsLine.tes;
      const tes = nextRsLine?.tss;
      const dr = tes - tss;
      if (!dr)
        return rsLine;
      return [
        rsLine,
        {
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
        }
      ];
    });
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
var remapScalar = (s, e, x) => (x - s) / (e - s);

// extensions/bad-lyrics/pkgs/kochanekBartels.ts
var oppositeVector = (u) => scalarMultVector(-1, u);
var vectorAddVector = (u, v) => _.zip(u, v).map(([uxi, vxi]) => uxi + vxi);
var vectorMultVector = (u, v) => _.zip(u, v).map(([uix, vix]) => uix * vix);
var vectorDotVector = (u, v) => fp.sum(vectorMultVector(u, v));
var vectorSubVector = (u, v) => vectorAddVector(u, oppositeVector(v));
var scalarMultVector = (x, u) => u.map((uxi) => x * uxi);
var vectorDivScalar = (u, x) => scalarMultVector(1 / x, u);
var scalarAddVector = (x, u) => u.map((uxi) => x + uxi);
var vectorDist = (u, v) => Math.hypot(...vectorSubVector(v, u));
var remapScalar2 = (s, e, x) => (x - s) / (e - s);
var vectorCartesianVector = (u, v) => u.map((ux) => v.map((vx) => [ux, vx]));
function matrixMultMatrix(m1, m2) {
  if (!m1.length !== !m2[0].length) {
    throw "Arguments should be compatible";
  }
  const atColumn = (m, column) => m.map((row) => row[column]);
  const ijs = vectorCartesianVector(_.range(m1.length), _.range(m2[0].length));
  return ijs.map(fp.map(([i, j]) => vectorDotVector(m1[i], atColumn(m2, j))));
}
var Monomial = class {
  constructor(segments, grid = _.range(segments.length + 1)) {
    this.segments = segments;
    this.grid = grid;
  }
  at(t, n = 0) {
    t = _.clamp(t, this.grid[0], this.grid.at(-1) - 1e-7);
    const i = _.sortedLastIndex(this.grid, t) - 1;
    const [t0, t1] = this.grid.slice(i, i + 2);
    t = remapScalar2(t0, t1, t);
    const coefficients = this.segments[i].slice(0, -n || void 0);
    const powers = _.range(coefficients.length).reverse();
    const weights = vectorDivScalar(
      _.range(n).map((i2) => scalarAddVector(i2 + 1, powers)).reduce((u, v) => u.map((_2, i2) => u[i2] * v[i2]), new Array(powers.length).fill(1)),
      (t1 - t0) ** n
    );
    const tps = powers.map((power) => t ** power);
    return matrixMultMatrix([vectorMultVector(tps, weights)], coefficients)[0];
  }
};
var CubicHermite = class _CubicHermite extends Monomial {
  static {
    this.matrix = [
      [2, -2, 1, 1],
      [-3, 3, -2, -1],
      [0, 0, 1, 0],
      [1, 0, 0, 0]
    ];
  }
  constructor(vertices, tangents, grid = _.range(vertices.length)) {
    if (vertices.length < 2)
      throw "At least 2 vertices are needed";
    if (tangents.length !== 2 * (vertices.length - 1))
      throw "Exactly 2 tangents per segment needed";
    if (vertices.length !== grid.length)
      throw "As many grid items as vertices are needed";
    const zip_vertices = zip_n_uplets(2)(vertices);
    const zip_grid = zip_n_uplets(2)(grid);
    const segments = _.zip(zip_vertices, zip_grid).map(([[x0, x1], [t0, t1]], i) => {
      const [v0, v1] = tangents.slice(i * 2, i * 2 + 2);
      const control_values = [x0, x1, scalarMultVector(t1 - t0, v0), scalarMultVector(t1 - t0, v1)];
      return matrixMultMatrix(_CubicHermite.matrix, control_values);
    });
    super(segments, grid);
  }
};
var KochanekBartels = class _KochanekBartels extends CubicHermite {
  static _calculate_tangents(points, times, tcb) {
    const [x_1, x0, x1] = points;
    const [t_1, t0, t1] = times;
    const [T, C, B] = tcb;
    const a = (1 - T) * (1 + C) * (1 + B);
    const b = (1 - T) * (1 - C) * (1 - B);
    const c = (1 - T) * (1 - C) * (1 + B);
    const d = (1 - T) * (1 + C) * (1 - B);
    const delta_1 = t0 - t_1;
    const delta0 = t1 - t0;
    const v_1 = vectorDivScalar(vectorSubVector(x0, x_1), delta_1);
    const v0 = vectorDivScalar(vectorSubVector(x1, x0), delta0);
    const incoming = vectorDivScalar(
      vectorAddVector(scalarMultVector(c * delta0, v_1), scalarMultVector(d * delta_1, v0)),
      delta_1 + delta0
    );
    const outgoing = vectorDivScalar(
      vectorAddVector(scalarMultVector(a * delta0, v_1), scalarMultVector(b * delta_1, v0)),
      delta_1 + delta0
    );
    return [incoming, outgoing];
  }
  static fromAlpha(vertices, tcb, alpha = 0, endconditions = [0 /* NATURAL */, 0 /* NATURAL */]) {
    const deltas = zip_n_uplets(2)(vertices).map(([x0, x1]) => vectorDist(x0, x1) ** alpha);
    const grid = deltas.reduce((partialSums, delta) => [...partialSums, partialSums.at(-1) + delta], [0]);
    return _KochanekBartels.fromGrid(vertices, tcb, grid, endconditions);
  }
  static fromGrid(vertices, tcb, grid, endconditions = [0 /* NATURAL */, 0 /* NATURAL */]) {
    const closed = endconditions === 1 /* CLOSED */;
    const tcb_slots = vertices.length - (closed ? 0 : 2);
    return new _KochanekBartels(vertices, new Array(tcb_slots).fill(tcb), grid, endconditions);
  }
  constructor(vertices, tcb, grid, endconditions) {
    if (vertices.length < 2)
      throw "At least two vertices are required";
    if (vertices.length !== grid.length)
      throw "Number of grid values must be same as vertices";
    const closed = endconditions === 1 /* CLOSED */;
    if (closed) {
      vertices.push(vertices[0], vertices[1]);
      tcb = [...tcb.slice(1), tcb[0]];
      const first_interval = grid[1] - grid[0];
      grid.push(grid.at(-1) + first_interval);
    }
    const zip_vertices = zip_n_uplets(3)(vertices);
    const zip_grid = zip_n_uplets(3)(grid);
    let tangents = _.zip(zip_vertices, zip_grid, tcb).flatMap(
      ([points, times, tcb2]) => _KochanekBartels._calculate_tangents(points, times, tcb2)
    );
    if (closed) {
      tangents = [tangents.at(-1), ...tangents.slice(0, -1)];
    } else if (!tangents.length) {
      const tangent = scalarMultVector(grid[1] - grid[0], vectorSubVector(vertices[1], vertices[0]));
      tangents = [tangent, tangent];
    } else {
      const [start, end] = endconditions;
      tangents = [
        _end_tangent(start, vertices.slice(0, 2), grid.slice(0, 2), tangents[0]),
        ...tangents,
        _end_tangent(end, vertices.slice(-2), grid.slice(-2), tangents.at(-1))
      ];
    }
    super(vertices, tangents, grid);
  }
};
var zip_n_uplets = (n) => (a) => a.map((_2, i, a2) => a2.slice(i, i + n)).slice(0, 1 - n);
function _end_tangent(condition, vertices, times, other_tangent) {
  return condition === 0 /* NATURAL */ ? _natural_tangent(vertices, times, other_tangent) : condition;
}
function _natural_tangent(vertices, times, tangent) {
  const [x0, x1] = vertices;
  const [t0, t1] = times;
  const delta = t1 - t0;
  return vectorSubVector(scalarMultVector(3 / (2 * delta), vectorSubVector(x1, x0)), vectorDivScalar(tangent, 2));
}

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
        (partialWidths2, child) => [...partialWidths2, partialWidths2.at(-1) + child.offsetWidth || 4],
        // 4 is the width for " "
        [0]
      );
      const totalWidth = partialWidths.at(-1);
      this.relativePartialWidths = partialWidths.map((pw) => pw / totalWidth);
      this.sharedRelativePartialWidthSpline = KochanekBartels.fromGrid(
        this.relativePartialWidths.map((rpw) => [rpw]),
        [0, 0, 0],
        childs.map((child) => child.tss).concat(childs.at(-1).tes),
        [[0], [0]]
      );
    }
    childs.forEach((child, i) => {
      const progress = child instanceof AnimatedContentContainer ? rsp : remapScalar(
        this.relativePartialWidths[i],
        this.relativePartialWidths[i + 1],
        _.clamp(
          this.sharedRelativePartialWidthSpline.at(rsp)[0],
          this.relativePartialWidths[i],
          this.relativePartialWidths[i + 1]
        )
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
            /* border: 0;
            background-color: transparent; */
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
            behavior: "smooth"
          });
        }
      }
    }
    const csp = _.clamp(scaledProgress, -0.5, 1.5);
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
var AnimatedFiller = class extends SyncedScrolledContent {
  constructor() {
    super(...arguments);
    this.duration = 0;
    this.springsInitialized = false;
  }
  tryInitializeSprings(scaledProgress) {
    if (this.springsInitialized)
      return;
    this.springsInitialized = true;
  }
  animateContent(scaledProgress, depthToActiveAncestor) {
    this.tryInitializeSprings(scaledProgress);
    this.style.setProperty("--gradient-alpha", scaledProgress.toFixed(2));
    this.style.backgroundImage = `linear-gradient(var(--gradient-angle), rgba(255,255,255,var(--gradient-alpha)) ${scaledProgress * 100}%, rgba(255,255,255,0) ${scaledProgress * 110}%)`;
  }
  render() {
    if (this.duration < LyricsContainer.MINIMUM_FILL_DURATION_MS)
      return;
    return html`
            <span role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tss)}>${this.content}</span>
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
  tryInitializeSprings(scaledProgress) {
    if (this.springsInitialized)
      return;
    this.springsInitialized = true;
  }
  animateContent(scaledProgress, depthToActiveAncestor) {
    this.tryInitializeSprings(scaledProgress);
    this.style.setProperty("--gradient-alpha", scaledProgress.toFixed(2));
    this.style.backgroundImage = `linear-gradient(var(--gradient-angle), rgba(255,255,255,var(--gradient-alpha)) ${scaledProgress * 100}%, rgba(255,255,255,0) ${scaledProgress * 110}%)`;
  }
  render() {
    return html`<span role="button" @click=${() => PlayerW.GetSong()?.setTimestamp(this.tss)}
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
    this.firstContainer.updateProgress(progress, 0, 0);
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
