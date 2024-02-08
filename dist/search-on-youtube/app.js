// shared/api.ts
import { SpotifyApi } from "https://esm.sh/@fostertheweb/spotify-web-api-ts-sdk";

// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;

// shared/api.ts
var { CosmosAsync } = Spicetify;
var spotifyApi = SpotifyApi.withAccessToken("client-id", {}, {
  // @ts-ignore
  fetch(url, opts) {
    const { method } = opts;
    return CosmosAsync.resolve(method, url);
  },
  deserializer: {
    deserialize(res) {
      return res.body;
    }
  }
});
var searchYoutube = async (YouTubeApiKey, searchString) => {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.append("part", "snippet");
  url.searchParams.append("maxResults", "10");
  url.searchParams.append("q", searchString);
  url.searchParams.append("type", "video");
  url.searchParams.append("key", YouTubeApiKey);
  return await fetch(url).then((res) => res.json());
};

// shared/parse.ts
var parseWebAPITrack = (track) => ({
  uri: track.uri,
  uid: void 0,
  name: track.name,
  albumUri: track.album.uri,
  albumName: track.album.name,
  artistUris: track.artists.map((artist) => artist.uri),
  artistName: track.artists[0].name,
  durationMilis: track.duration_ms,
  playcount: void 0,
  popularity: track.popularity,
  releaseDate: new Date(track.album.release_date).getTime()
});

// shared/util.ts
var { URI } = Spicetify;
var { PlayerAPI } = Spicetify.Platform;
var normalizeStr = (str) => str.normalize("NFKD").replace(/\(.*\)/g, "").replace(/\[.*\]/g, "").replace(/-_,/g, " ").replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, " ").toLowerCase().trim();
var mainElement = document.querySelector("main");
var [REACT_FIBER, REACT_PROPS] = Object.keys(mainElement);

// shared/modules.ts
var require2 = webpackChunkopen.push([[Symbol("Dummy chunk to extract require method")], {}, (require3) => require3]);
var modules = Object.keys(require2.m).map((id) => require2(id)).filter((module) => typeof module === "object");
var exportedMembers = modules.flatMap((module) => Object.values(module)).filter(Boolean);
var exportedFunctions = exportedMembers.filter((module) => typeof module === "function");
var exportedReactObjects = Object.groupBy(exportedMembers, (x) => x.$$typeof);
var exportedContexts = exportedReactObjects[Symbol.for("react.context")];
var exportedForwardRefs = exportedReactObjects[Symbol.for("react.forward_ref")];
var exportedMemos = exportedReactObjects[Symbol.for("react.memo")];
var findByStrings = (modules2, ...filters) => modules2.find(
  (f) => filters.map(
    (filter) => typeof filter === "string" ? (s) => s.includes(filter) : (s) => filter.test(s)
  ).every((filterFn) => filterFn(f.toString()))
);
var CheckedPlaylistButtonIcon = findByStrings(
  exportedFunctions,
  "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
);
var Highlight = findByStrings(exportedFunctions, "hightlightClassName", "textToHighlight");
var SettingColumn = findByStrings(exportedFunctions, "setSectionFilterMatchQueryValue", "filterMatchQuery");
var SettingText = findByStrings(exportedFunctions, "textSubdued", "dangerouslySetInnerHTML");
var SettingToggle = findByStrings(exportedFunctions, "condensed", "onSelected");
var curationButtonClass = exportedMembers.find((m) => m?.curationButton).curationButton;
var rs_w = exportedForwardRefs.filter((x) => x.render?.toString().includes("hasLeadingOrMedia"));

// shared/settings.tsx
var { React, ReactDOM, LocalStorage } = Spicetify;
var { ButtonSecondary } = Spicetify.ReactComponent;
var { History } = Spicetify.Platform;
if (!globalThis.__renderSettingSections) {
  globalThis.__settingSections = /* @__PURE__ */ new Set();
  globalThis.__renderSettingSections = () => Array.from(globalThis.__settingSections);
}
var SettingsSection = class _SettingsSection {
  constructor(name, sectionFields = {}) {
    this.name = name;
    this.sectionFields = sectionFields;
    this.pushSettings = () => {
      __settingSections.push(/* @__PURE__ */ React.createElement(this.SettingsSection, null));
    };
    this.toObject = () => new Proxy(
      {},
      {
        get: (target, prop) => _SettingsSection.getFieldValue(this.getId(prop.toString())),
        set: (target, prop, newValue) => {
          const id = this.getId(prop.toString());
          if (_SettingsSection.getFieldValue(id) === newValue)
            return false;
          _SettingsSection.setFieldValue(id, newValue);
          return true;
        }
      }
    );
    this.addButton = (props) => {
      this.addField("button" /* BUTTON */, props, this.ButtonField);
      return this;
    };
    this.addToggle = (props, defaultValue = () => false) => {
      this.addField("toggle" /* TOGGLE */, props, this.ToggleField, defaultValue);
      return this;
    };
    this.addInput = (props, defaultValue = () => "") => {
      this.addField("input" /* INPUT */, props, this.InputField, defaultValue);
      return this;
    };
    this.getId = (nameId) => ["extensions", this.id, nameId].join(":");
    this.useStateFor = (id) => {
      const [value, setValueState] = React.useState(_SettingsSection.getFieldValue(id));
      return [
        value,
        (newValue) => {
          if (newValue !== void 0) {
            setValueState(newValue);
            _SettingsSection.setFieldValue(id, newValue);
          }
        }
      ];
    };
    this.SettingsSection = () => /* @__PURE__ */ React.createElement(__SettingSection, { filterMatchQuery: this.name }, /* @__PURE__ */ React.createElement(__SectionTitle, null, this.name), Object.values(this.sectionFields));
    this.SettingField = ({ field, children }) => /* @__PURE__ */ React.createElement(SettingColumn, { filterMatchQuery: field.id }, /* @__PURE__ */ React.createElement("div", { className: "x-settings-firstColumn" }, /* @__PURE__ */ React.createElement(SettingText, { htmlFor: field.id }, field.desc)), /* @__PURE__ */ React.createElement("div", { className: "x-settings-secondColumn" }, children));
    this.ButtonField = (field) => /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(ButtonSecondary, { id: field.id, buttonSize: "sm", onClick: field.onClick, className: "x-settings-button" }, field.text));
    this.ToggleField = (field) => {
      const id = this.getId(field.id);
      const [value, setValue] = this.useStateFor(id);
      return /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(
        SettingToggle,
        {
          id: field.id,
          value: _SettingsSection.getFieldValue(id),
          onSelected: (checked) => {
            setValue(checked);
            field.onSelected?.(checked);
          },
          className: "x-settings-button"
        }
      ));
    };
    this.InputField = (field) => {
      const id = this.getId(field.id);
      const [value, setValue] = this.useStateFor(id);
      return /* @__PURE__ */ React.createElement(this.SettingField, { field }, /* @__PURE__ */ React.createElement(
        "input",
        {
          className: "x-settings-input",
          id: field.id,
          dir: "ltr",
          value: _SettingsSection.getFieldValue(id),
          type: field.inputType,
          onChange: (e) => {
            const value2 = e.currentTarget.value;
            setValue(value2);
            field.onChange?.(value2);
          }
        }
      ));
    };
    this.id = _.kebabCase(name);
  }
  addField(type, opts, fieldComponent, defaultValue) {
    if (defaultValue !== void 0) {
      const settingId = this.getId(opts.id);
      _SettingsSection.setDefaultFieldValue(settingId, defaultValue);
    }
    const field = Object.assign({}, opts, { type });
    this.sectionFields[opts.id] = fieldComponent(field);
  }
  static {
    this.getFieldValue = (id) => JSON.parse(LocalStorage.get(id) ?? "null");
  }
  static {
    this.setFieldValue = (id, newValue) => LocalStorage.set(id, JSON.stringify(newValue));
  }
  static {
    this.setDefaultFieldValue = async (id, defaultValue) => {
      if (_SettingsSection.getFieldValue(id) === null)
        _SettingsSection.setFieldValue(id, await defaultValue());
    };
  }
};

// extensions/search-on-youtube/settings.ts
var settings = new SettingsSection("Search On YouTube").addInput(
  {
    id: "YouTubeApiKey",
    desc: "YouTube API Key",
    inputType: "text"
  },
  () => "***************************************"
);
settings.pushSettings();
var CONFIG = settings.toObject();

// extensions/search-on-youtube/app.ts
var { URI: URI2, ContextMenu } = Spicetify;
var YTVidIDCache = /* @__PURE__ */ new Map();
var showOnYouTube = async (uri) => {
  const id = URI2.fromString(uri).id;
  if (!YTVidIDCache.get(id)) {
    const track = parseWebAPITrack(await spotifyApi.tracks.get(id));
    const searchString = `${track.artistName} - ${track.name} music video`;
    try {
      const videos = await searchYoutube(CONFIG.YouTubeApiKey, searchString).then((res) => res.items);
      const normalizedTrackName = normalizeStr(track.name);
      const video = videos.find((video2) => {
        normalizeStr(video2.snippet.title).includes(normalizedTrackName);
      }) ?? videos[0];
      YTVidIDCache.set(id, video.id.videoId);
      window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`);
    } catch (_2) {
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchString)}`);
    }
  }
};
new ContextMenu.Item(
  "Search on YouTube",
  ([uri]) => showOnYouTube(uri),
  ([uri]) => _.overSome([URI2.isTrack])(uri),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>`
).register();
