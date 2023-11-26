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

// shared/fp.ts
import {
  array as ar,
  eq,
  string as str,
  record as rec,
  semigroup as sg,
  function as f
} from "https://esm.sh/fp-ts";
import { guard, memoize } from "https://esm.sh/fp-ts-std/Function";
var pMchain = (f6) => async (fa) => f6(await fa);
var chunckify = (n2) => (g) => f.flow(ar.chunksOf(n2), ar.map(g), (ps) => Promise.all(ps), pMchain(ar.flatten));
var memoize2 = (fn) => f.pipe(fn, f.tupled, memoize(eq.contramap(JSON.stringify)(str.Eq)), f.untupled);

// shared/util.ts
import { function as f2 } from "https://esm.sh/fp-ts";
var SpotifyLoc = {
  before: {
    start: f2.constant({ before: "start" }),
    fromUri: (uri) => ({ before: { uri } }),
    fromUid: (uid) => ({ before: { uid } })
  },
  after: {
    end: f2.constant({ after: "end" }),
    fromUri: (uri) => ({ after: { uri } }),
    fromUid: (uid) => ({ after: { uid } })
  }
};

// shared/api.ts
import { array as a2, function as f3 } from "https://esm.sh/fp-ts";
var fetchWebArtistsSpot = chunckify(50)(
  async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${ids.join(",")}`)).artists
);
var fetchWebPlaylistsSpot = chunckify(1)(
  // @ts-ignore chunkify will never call with empty array
  async ([id]) => [
    await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${id}`)
  ]
);
var fetchWebAlbumsSpot = chunckify(50)(
  async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${ids.join(",")}`)).albums
);
var fetchWebTracksSpot = chunckify(50)(
  async (ids) => (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks
);
var isPlatTrackLiked = (uris) => Spicetify.Platform.LibraryAPI.contains(...uris);
var setPlatTrackLiked = (uris, liked) => Spicetify.Platform.LibraryAPI[liked ? "add" : "remove"]({ uris });
var togglePlatTrackLiked = async (uris) => {
  const liked = await isPlatTrackLiked(uris);
  return await f3.pipe(
    uris,
    a2.reduceWithIndex(
      [[], []],
      (i, acc, uri) => (acc[Number(liked[i])].push(uri), acc)
    ),
    ([toAdd, toRem]) => {
      const ps = [];
      if (toAdd.length)
        ps.push(setPlatTrackLiked(toAdd, true));
      if (toRem.length)
        ps.push(setPlatTrackLiked(toRem, false));
      return Promise.all(ps);
    }
  );
};
var fetchTrackLFMAPI = async (LFMApiKey, artist, trackName, lastFmUsername = "") => {
  const url = new URL("https://ws.audioscrobbler.com/2.0/");
  url.searchParams.append("method", "track.getInfo");
  url.searchParams.append("api_key", LFMApiKey);
  url.searchParams.append("artist", artist);
  url.searchParams.append("track", trackName);
  url.searchParams.append("format", "json");
  url.searchParams.append("username", lastFmUsername);
  return await fetch(url).then((res) => res.json());
};
var fetchTrackLFMAPIMemoized = memoize2(fetchTrackLFMAPI);

// extensions/keyboard-shortcuts/sneak.ts
import { array as a3, function as f5 } from "https://esm.sh/fp-ts";
import { LitElement, css, html } from "https://esm.sh/lit";
import { customElement, property } from "https://esm.sh/lit/decorators.js";
import { map } from "https://esm.sh/lit/directives/map.js";
import { styleMap } from "https://esm.sh/lit/directives/style-map.js";

// extensions/keyboard-shortcuts/util.ts
import { function as f4, number as n, ord } from "https://esm.sh/fp-ts";
import { mean } from "https://esm.sh/fp-ts-std/Array";
import { mod } from "https://esm.sh/fp-ts-std/Number";
var SCROLL_STEP = 25;
var focusOnApp = () => document.querySelector(".Root__main-view .os-viewport");
var appScroll = (s) => {
  const app = focusOnApp();
  const scrollIntervalId = setInterval(() => app.scrollTop += s * SCROLL_STEP, 10);
  document.addEventListener("keyup", () => clearInterval(scrollIntervalId));
};
var appScrollY = (y) => focusOnApp().scroll(0, y);
var openPage = (page) => Spicetify.Platform.History.push({ pathname: page });
var rotateSidebar = (offset) => {
  const navLinks = Array.from(
    Array.from(document.querySelectorAll(".main-yourLibraryX-navLink")).values()
  );
  f4.pipe(
    document.querySelector(".main-yourLibraryX-navLinkActive"),
    (active) => navLinks.findIndex((e) => e === active),
    (curr) => mod(navLinks.length)(curr === -1 && offset <= 0 ? offset : curr + offset),
    (target) => navLinks[target].click()
  );
};
var Bind = class {
  constructor(key, callback) {
    this.key = key;
    this.callback = callback;
    this.ctrl = false;
    this.shift = false;
    this.alt = false;
    this.setCtrl = (required) => (this.ctrl = required, this);
    this.setShift = (required) => (this.shift = required, this);
    this.setAlt = (required) => (this.alt = required, this);
    this.register = () => Spicetify.Keyboard.registerShortcut(
      { key: this.key, ctrl: this.ctrl, shift: this.shift, alt: this.alt },
      (event) => void (!listeningToSneakBinds && this.callback(event))
    );
  }
};
var isElementVisible = (e) => e.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true });
var isElementInViewPort = (e) => {
  const c = document.body;
  const bound = e.getBoundingClientRect();
  const within = (m, M) => (x) => x === ord.clamp(n.Ord)(m, M)(x);
  return f4.pipe(mean([bound.top, bound.bottom]), within(0, c.clientHeight)) && f4.pipe(mean([bound.left, bound.right]), within(0, c.clientWidth));
};
var CLICKABLE_ELMENT_SELECTOR = `.Root__top-container [href]:not(link),.Root__top-container button,.Root__top-container [role="button"]`;

// extensions/keyboard-shortcuts/sneak.ts
var mousetrapInst = Spicetify.Mousetrap();
var KEY_LIST = "abcdefghijklmnopqrstuvwxyz".split("");
var listeningToSneakBinds = false;
var _SneakKey = class extends LitElement {
  constructor() {
    super(...arguments);
    this.key = "None";
    this.target = document.body;
  }
  render() {
    const { x, y } = this.target.getBoundingClientRect();
    const styles = {
      position: "fixed",
      padding: "3px 6px",
      backgroundColor: "black",
      borderRadius: "3px",
      border: "solid 2px white",
      color: "white",
      textTransform: "lowercase",
      lineHeight: "normal",
      fontSize: "14px",
      fontWeight: "500",
      top: y + "px",
      left: x + "px"
    };
    return html`<span style=${styleMap(styles)}>${this.key}</span>`;
  }
};
__decorateClass([
  property()
], _SneakKey.prototype, "key", 2);
__decorateClass([
  property()
], _SneakKey.prototype, "target", 2);
_SneakKey = __decorateClass([
  customElement("sneak-key")
], _SneakKey);
var _SneakOverlay = class extends LitElement {
  constructor() {
    super();
    this.props = [];
    requestAnimationFrame(() => {
      let k1 = 0, k2 = 0;
      this.props = f5.pipe(
        Array.from(document.querySelectorAll(CLICKABLE_ELMENT_SELECTOR)),
        a3.filter(isElementVisible),
        a3.filter(isElementInViewPort),
        a3.map((target) => {
          const key = KEY_LIST[k1] + KEY_LIST[k2++];
          if (k2 >= KEY_LIST.length)
            k1++, k2 = 0;
          return { target, key };
        })
      );
      if (k1 + k2 === 0)
        this.remove();
      else
        listeningToSneakBinds = true;
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    listeningToSneakBinds = false;
  }
  updateProps(key) {
    if (!listeningToSneakBinds)
      return;
    this.props = this.props.filter((prop) => {
      const [k1, ...ks] = prop.key.toLowerCase();
      if (k1 !== key)
        return false;
      prop.key = ks.join("");
      return true;
    });
    if (this.props.length === 1)
      this.props[0].target.click();
    if (this.props.length < 2)
      this.remove();
  }
  render() {
    return html`${map(this.props, (i) => html`<sneak-key key=${i.key} .target=${i.target} />`)}`;
  }
};
_SneakOverlay.styles = css`:host {
        z-index: 1e5
        position: absolute
        width: 100%
        height: 100%
        display: block
    }`;
__decorateClass([
  property()
], _SneakOverlay.prototype, "props", 2);
_SneakOverlay = __decorateClass([
  customElement("sneak-overlay")
], _SneakOverlay);

// extensions/keyboard-shortcuts/app.ts
var { KEYS } = Spicetify.Keyboard;
var sneakOverlay;
var binds = [
  new Bind("s", () => {
    sneakOverlay = document.createElement("sneak-overlay");
    document.body.append(sneakOverlay);
  }),
  new Bind("s", async () => {
    const productState = Spicetify.Platform.UserAPI._product_state || Spicetify.Platform.UserAPI._product_state_service;
    await productState.putValues({ pairs: { "app-developer": "2" } });
    Spicetify.Platform.UpdateAPI.applyUpdate();
  }).setShift(true),
  new Bind("tab", () => rotateSidebar(1)),
  new Bind("tab", () => rotateSidebar(-1)).setShift(true),
  new Bind("h", Spicetify.Platform.History.goBack).setShift(true),
  new Bind("l", Spicetify.Platform.History.goForward).setShift(true),
  new Bind("j", () => appScroll(1)),
  new Bind("k", () => appScroll(-1)),
  new Bind("g", () => appScrollY(0)),
  new Bind("g", () => appScrollY(Number.MAX_SAFE_INTEGER)).setShift(true),
  new Bind(
    "m",
    () => Spicetify.Player.data?.item.currentTrackUri && togglePlatTrackLiked([Spicetify.Player.data?.item.currentTrackUri])
  ),
  new Bind("/", (e) => {
    e.preventDefault();
    openPage("/search");
  })
];
binds.map((bind) => bind.register());
mousetrapInst.bind(KEY_LIST, (e) => sneakOverlay.updateProps(e.key), "keypress");
mousetrapInst.bind(KEYS.ESCAPE, () => sneakOverlay?.remove());
(async () => {
    if (!document.getElementById("keyboard-shortcuts-css")) {
        const el = document.createElement("style")
        el.id = "keyboard-shortcuts-css"
        
        el.textContent = "#sneak-overlay{z-index:100000;position:absolute;width:100%;height:100%;display:none}#sneak-overlay>.sneak-key{position:fixed;padding:3px 6px;background-color:#000;border-radius:3px;border:solid 2px white;color:#fff;text-transform:lowercase;line-height:normal;font-size:14px;font-weight:500}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vZXh0ZW5zaW9ucy9rZXlib2FyZC1zaG9ydGN1dHMvYXNzZXRzL3N0eWxlcy5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiNzbmVhay1vdmVybGF5e3otaW5kZXg6MTAwMDAwO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpub25lfSNzbmVhay1vdmVybGF5Pi5zbmVhay1rZXl7cG9zaXRpb246Zml4ZWQ7cGFkZGluZzozcHggNnB4O2JhY2tncm91bmQtY29sb3I6YmxhY2s7Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOnNvbGlkIDJweCB3aGl0ZTtjb2xvcjp3aGl0ZTt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2U7bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0iXSwKICAibWFwcGluZ3MiOiAiQUFBQSxDQUFDLGNBQWMsUUFBUSxPQUFPLFNBQVMsU0FBUyxNQUFNLEtBQUssT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQW5GLGFBQWlHLENBQUMsQ0FBQyxVQUFVLFNBQVMsTUFBdkgsUUFBcUksSUFBSSxJQUFJLGlCQUFpQixLQUE5SixjQUFrTCxJQUFJLE9BQU8sTUFBTSxJQUFJLE1BQU0sTUFBTSxLQUFNLGVBQWUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksR0FBRyIsCiAgIm5hbWVzIjogW10KfQo= */\n"
        document.head.appendChild(el)
    }
})()