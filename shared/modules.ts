// @ts-expect-error webpackChunkOpen is only defined in the browser
const require = webpackChunkopen.push([[Symbol("Dummy chunk to extract require method")], {}, require => require])
const modules = Object.keys(require.m)
    .map(id => require(id))
    .filter((module): module is Object => typeof module === "object")
export const exportedMembers = modules.flatMap(module => Object.values(module)).filter(Boolean)
export const exportedFunctions = exportedMembers.filter((module): module is Function => typeof module === "function")

const exportedReactObjects = Object.groupBy(exportedMembers, x => x.$$typeof)
const exportedContexts = exportedReactObjects[Symbol.for("react.context")]!
const exportedForwardRefs = exportedReactObjects[Symbol.for("react.forward_ref")]!
const exportedMemos = exportedReactObjects[Symbol.for("react.memo")]!

const findByStrings = (modules: Array<any>, ...filters: Array<string | RegExp>) =>
    modules.find(f =>
        filters
            .map(filter =>
                typeof filter === "string" ? (s: string) => s.includes(filter) : (s: string) => filter.test(s),
            )
            .every(filterFn => filterFn(f.toString())),
    )

export const CheckedPlaylistButtonIcon = findByStrings(
    exportedFunctions,
    "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z",
)

export const Highlight = findByStrings(exportedFunctions, "hightlightClassName", "textToHighlight")

export const SettingColumn = findByStrings(exportedFunctions, "setSectionFilterMatchQueryValue", "filterMatchQuery")
export const SettingText = findByStrings(exportedFunctions, "textSubdued", "dangerouslySetInnerHTML")
export const SettingToggle = findByStrings(exportedFunctions, "condensed", "onSelected")

export const curationButtonClass = exportedMembers.find(m => m?.curationButton)!.curationButton

export const rs_w = exportedForwardRefs.filter(x => x.render?.toString().includes("hasLeadingOrMedia"))
