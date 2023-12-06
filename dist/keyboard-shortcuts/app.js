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

// shared/util.ts
var { Player, URI } = Spicetify;
var { PlayerAPI, History } = Spicetify.Platform;

// shared/platformApi.ts
var { CosmosAsync } = Spicetify;
var { LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform;
var areTracksLiked = (uris) => LibraryAPI.contains(...uris);
var setTracksLiked = (uris, liked) => LibraryAPI[liked ? "add" : "remove"]({ uris });
var toggleTracksLiked = async (uris) => {
  const liked = await areTracksLiked(uris);
  const urisByLiked = Object.groupBy(uris, (_2, index) => liked[index] ? "liked" : "notLiked");
  const ps = [];
  urisByLiked.liked?.length && ps.push(setTracksLiked(urisByLiked.liked, false));
  urisByLiked.notLiked?.length && ps.push(setTracksLiked(urisByLiked.notLiked, true));
  return Promise.all(ps);
};

// extensions/keyboard-shortcuts/sneak.ts
import { array as a, function as f2 } from "https://esm.sh/fp-ts";
import { LitElement, css, html } from "https://esm.sh/lit";
import { customElement, property } from "https://esm.sh/lit/decorators.js";
import { map } from "https://esm.sh/lit/directives/map.js";
import { styleMap } from "https://esm.sh/lit/directives/style-map.js";

// extensions/keyboard-shortcuts/util.ts
import { function as f, number as n, ord } from "https://esm.sh/fp-ts";

// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;

// extensions/keyboard-shortcuts/util.ts
var { Keyboard } = Spicetify;
var { History: History2 } = Spicetify.Platform;
var SCROLL_STEP = 25;
var focusOnApp = () => document.querySelector(".Root__main-view .os-viewport");
var appScroll = (s) => {
  const app = focusOnApp();
  const scrollIntervalId = setInterval(() => app.scrollTop += s * SCROLL_STEP, 10);
  document.addEventListener("keyup", () => clearInterval(scrollIntervalId));
};
var appScrollY = (y) => focusOnApp().scroll(0, y);
var openPage = (page) => History2.push({ pathname: page });
var rotateSidebar = (offset) => {
  if (offset === 0)
    return;
  const navLinks = Array.from(
    Array.from(document.querySelectorAll(".main-yourLibraryX-navLink")).values()
  );
  if (navLinks.length === 0)
    return;
  f.pipe(
    document.querySelector(".main-yourLibraryX-navLinkActive"),
    (active) => navLinks.findIndex((e) => e === active),
    (curr) => {
      if (curr === -1 && offset < 0)
        curr = navLinks.length;
      let target = curr + offset % navLinks.length;
      if (target < 0)
        target += navLinks.length;
      return target;
    },
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
    this.register = () => Keyboard.registerShortcut(
      { key: this.key, ctrl: this.ctrl, shift: this.shift, alt: this.alt },
      (event) => void (!listeningToSneakBinds && this.callback(event))
    );
  }
};
var isElementInViewPort = (e) => {
  const c = document.body;
  const bound = e.getBoundingClientRect();
  const within = (m, M) => (x) => x === ord.clamp(n.Ord)(m, M)(x);
  return f.pipe(_.mean([bound.top, bound.bottom]), within(0, c.clientHeight)) && f.pipe(_.mean([bound.left, bound.right]), within(0, c.clientWidth));
};
var CLICKABLE_ELEMENT_SELECTOR = `.Root__top-container [href]:not(link),.Root__top-container button,.Root__top-container [role="button"]`;

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
      this.props = f2.pipe(
        Array.from(document.querySelectorAll(CLICKABLE_ELEMENT_SELECTOR)),
        // a.filter(isElementVisible),
        a.filter(isElementInViewPort),
        a.map((target) => {
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
_SneakOverlay.styles = css`
        :host {
            z-index: 1e5;
            position: absolute;
            width: 100%;
            height: 100%;
            display: block;
        }
    `;
__decorateClass([
  property()
], _SneakOverlay.prototype, "props", 2);
_SneakOverlay = __decorateClass([
  customElement("sneak-overlay")
], _SneakOverlay);

// extensions/keyboard-shortcuts/app.ts
var { Keyboard: Keyboard2, Player: Player2 } = Spicetify;
var { UserAPI, UpdateAPI, History: History3 } = Spicetify.Platform;
var sneakOverlay;
var binds = [
  new Bind("s", () => {
    sneakOverlay = document.createElement("sneak-overlay");
    document.body.append(sneakOverlay);
  }),
  new Bind("s", async () => {
    await UserAPI._product_state_service.putValues({ pairs: { "app-developer": "2" } });
    UpdateAPI.applyUpdate();
  }).setShift(true),
  new Bind("tab", () => rotateSidebar(1)),
  new Bind("tab", () => rotateSidebar(-1)).setShift(true),
  new Bind("h", History3.goBack).setShift(true),
  new Bind("l", History3.goForward).setShift(true),
  new Bind("j", () => appScroll(1)),
  new Bind("k", () => appScroll(-1)),
  new Bind("g", () => appScrollY(0)),
  new Bind("g", () => appScrollY(Number.MAX_SAFE_INTEGER)).setShift(true),
  new Bind("m", () => Player2.data?.item.uri && toggleTracksLiked([Player2.data?.item.uri])),
  new Bind("/", (e) => {
    e.preventDefault();
    openPage("/search");
  })
];
binds.map((bind) => bind.register());
mousetrapInst.bind(KEY_LIST, (e) => sneakOverlay.updateProps(e.key), "keypress");
mousetrapInst.bind(Keyboard2.KEYS.ESCAPE, () => sneakOverlay?.remove());
(async () => {
    if (!document.getElementById("keyboard-shortcuts-css")) {
        const el = document.createElement("style")
        el.id = "keyboard-shortcuts-css"
        
        el.textContent = "#sneak-overlay{z-index:100000;position:absolute;width:100%;height:100%;display:none}#sneak-overlay>.sneak-key{position:fixed;padding:3px 6px;background-color:#000;border-radius:3px;border:solid 2px white;color:#fff;text-transform:lowercase;line-height:normal;font-size:14px;font-weight:500}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vZXh0ZW5zaW9ucy9rZXlib2FyZC1zaG9ydGN1dHMvYXNzZXRzL3N0eWxlcy5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiNzbmVhay1vdmVybGF5e3otaW5kZXg6MTAwMDAwO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpub25lfSNzbmVhay1vdmVybGF5Pi5zbmVhay1rZXl7cG9zaXRpb246Zml4ZWQ7cGFkZGluZzozcHggNnB4O2JhY2tncm91bmQtY29sb3I6YmxhY2s7Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOnNvbGlkIDJweCB3aGl0ZTtjb2xvcjp3aGl0ZTt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2U7bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0iXSwKICAibWFwcGluZ3MiOiAiQUFBQSxDQUFDLGNBQWMsUUFBUSxPQUFPLFNBQVMsU0FBUyxNQUFNLEtBQUssT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQW5GLGFBQWlHLENBQUMsQ0FBQyxVQUFVLFNBQVMsTUFBdkgsUUFBcUksSUFBSSxJQUFJLGlCQUFpQixLQUE5SixjQUFrTCxJQUFJLE9BQU8sTUFBTSxJQUFJLE1BQU0sTUFBTSxLQUFNLGVBQWUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksR0FBRyIsCiAgIm5hbWVzIjogW10KfQo= */\n"
        document.head.appendChild(el)
    }
})()