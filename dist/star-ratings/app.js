// extensions/star-ratings/app.ts
import { html, render } from "https://esm.sh/lit";

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

// extensions/star-ratings-2/util.ts
var getTrackLists = () => Array.from(document.querySelectorAll(".main-trackList-trackList.main-trackList-indexable"));
var getTrackListTracks = (trackList) => Array.from(trackList.querySelectorAll(".main-trackList-trackListRow"));

// shared/listeners.ts
var { Player, URI: URI2 } = Spicetify;
var { PlayerAPI: PlayerAPI2, History } = Spicetify.Platform;
var PRESENTATION_KEY = Symbol("presentation");
var onTrackListMutationListeners = new Array();
var _onTrackListMutation = (trackList, record, observer) => {
  const tracks = getTrackListTracks(trackList[PRESENTATION_KEY]);
  const reactFiber = trackList[PRESENTATION_KEY][REACT_FIBER].alternate;
  const reactTracks = reactFiber.pendingProps.children;
  const tracksProps = reactTracks.map((child) => child.props);
  tracks.forEach((track, i) => track.props = tracksProps[i]);
  const fullyRenderedTracks = tracks.filter((track) => track.props?.uri);
  onTrackListMutationListeners.map((listener) => listener(trackList, fullyRenderedTracks));
};
new PermanentMutationObserver("main", () => {
  const trackLists = getTrackLists();
  trackLists.filter((trackList) => !trackList[PRESENTATION_KEY]).forEach((trackList) => {
    trackList[PRESENTATION_KEY] = trackList.lastElementChild.firstElementChild.nextElementSibling;
    new MutationObserver(
      (record, observer) => _onTrackListMutation(trackList, record, observer)
    ).observe(trackList[PRESENTATION_KEY], { childList: true });
  });
});

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

// shared/deps.ts
import { default as ld } from "https://esm.sh/lodash";
import { default as ld_fp } from "https://esm.sh/lodash/fp";
var _ = ld;

// shared/settings.tsx
var { React, ReactDOM, LocalStorage } = Spicetify;
var { ButtonSecondary } = Spicetify.ReactComponent;
var { History: History2 } = Spicetify.Platform;
if (!globalThis.__renderSettingSections) {
  globalThis.__settingSections = /* @__PURE__ */ new Set();
  globalThis.__renderSettingSections = () => Array.from(globalThis.__settingSections);
}
var SettingsSection = class _SettingsSection {
  constructor(name, sectionFields = {}) {
    this.name = name;
    this.sectionFields = sectionFields;
    this.pushSettings = () => {
      __settingSections.add(/* @__PURE__ */ React.createElement(this.SettingsSection, null));
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
    this.sectionFields[opts.id] = React.createElement(fieldComponent, field);
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

// extensions/star-ratings/settings.ts
var settings = new SettingsSection("Star Ratings").addToggle({ id: "showInTrackLists", desc: "Show in tracklists" });
settings.pushSettings();
var CONFIG = settings.toObject();

// shared/platformApi.ts
var { CosmosAsync } = Spicetify;
var { LibraryAPI, PlaylistAPI, RootlistAPI, PlaylistPermissionsAPI, EnhanceAPI, LocalFilesAPI } = Spicetify.Platform;
var fetchFolder = async (folder) => await RootlistAPI.getContents({ folderUri: folder });
var fetchRootFolder = () => fetchFolder(void 0);

// extensions/star-ratings/util.ts
var { PlaylistAPI: PlaylistAPI2 } = Spicetify.Platform;
var getTrackListHeader = (trackList) => trackList.querySelector(".main-trackList-trackListHeader")?.firstChild;
var getLastCol = (parent) => {
  const lastCol = parent.querySelector("div.main-trackList-rowSectionEnd");
  const lastColIndex = Number(lastCol.getAttribute("aria-colindex"));
  return [lastColIndex, lastCol];
};
var getOwnedPlaylists = async () => {
  const rootFolder = await fetchRootFolder();
  const traverse = (item) => {
    switch (item.type) {
      case "folder":
        return item.items.flatMap(traverse);
      case "playlist":
        return item.isOwnedBySelf ? [item] : [];
    }
  };
  return traverse(rootFolder);
};
var getTracksPlaylists = async () => {
  const ownedPlaylists = await getOwnedPlaylists();
  const tracks = await Promise.all(ownedPlaylists.map((playlist) => PlaylistAPI2.getContents(playlist.uri)));
  const [playlists, uris] = _.unzip(
    tracks.flatMap((tracks2, i) => tracks2.items.map((track) => [ownedPlaylists[i], track.uri]))
  );
  return Object.groupBy(playlists, (_2, i) => uris[i]);
};

// extensions/star-ratings/app.ts
var customTrackListColCss = [
  null,
  null,
  null,
  null,
  "[index] 16px [first] 4fr [var1] 2fr [var2] 1fr [last] minmax(120px,1fr)",
  "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] 2fr [last] minmax(120px,1fr)",
  "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [var3] minmax(120px,2fr) [var3] 2fr [last] minmax(120px,1fr)"
];
onTrackListMutationListeners.push((tracklist, tracks) => {
  if (!CONFIG.showInTrackLists)
    return;
  if (tracks.length === 0)
    return;
  const hasStars = (parent) => parent.getElementsByClassName("stars").length > 0;
  const trackListHeader = getTrackListHeader(tracklist);
  const firstElement = trackListHeader ?? tracks[0];
  const [lastColIndex] = getLastCol(firstElement);
  const lastColOffset = hasStars(firstElement) ? 1 : 0;
  const newTrackListColCss = customTrackListColCss[lastColIndex - lastColOffset];
  if (!newTrackListColCss)
    return;
  if (trackListHeader) {
    trackListHeader.style.gridTemplateColumns = newTrackListColCss;
  }
  tracks.map((track) => {
    if (hasStars(track))
      return;
    let addedColumnWrapper = track.querySelector("div.ratings-column-wrapper");
    if (!addedColumnWrapper) {
      const [colIndex, lastColumn] = getLastCol(track);
      lastColumn?.setAttribute("aria-colindex", String(colIndex + 1));
      addedColumnWrapper = document.createElement("div");
      addedColumnWrapper.setAttribute("aria-colindex", String(colIndex));
      addedColumnWrapper.role = "gridcell";
      addedColumnWrapper.style.display = "flex";
      addedColumnWrapper.classList.add("ratings-column-wrapper", "main-trackList-rowSectionVariable");
      track.insertBefore(addedColumnWrapper, lastColumn);
      track.style.gridTemplateColumns = newTrackListColCss;
      const trackUri = track.props.uri;
      render(html`<label-container .playlists=${TRACK_PLAYLISTS[trackUri] ?? []} />`, addedColumnWrapper);
    }
  });
});
var TRACK_PLAYLISTS = await getTracksPlaylists();
