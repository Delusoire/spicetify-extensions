import { _ } from "./deps.ts"

// @ts-expect-error webpackChunkOpen is only defined in the browser
const require = webpackChunkopen.push([[Symbol("Dummy chunk to extract require method")], {}, require => require])
const modules = Object.keys(require.m)
    .map(id => require(id))
    .filter((module): module is Object => typeof module === "object")
export const exportedMembers = _.compact(modules.flatMap(module => Object.values(module)))
export const exportedFunctions = exportedMembers.filter((module): module is Function => typeof module === "function")

const findByStrings = (modules: Array<any>, ...filters: Array<string | RegExp>) =>
    modules.find(f =>
        _.overEvery(
            filters.map(filter =>
                typeof filter === "string" ? (s: string) => s.includes(filter) : (s: string) => filter.test(s),
            ),
        )(f.toString()),
    )

export const CheckedPlaylistButtonIcon = findByStrings(
    exportedFunctions,
    "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z",
)

export const SettingSection = findByStrings(
    exportedFunctions,
    "function m(e){return(0,d.jsx)(r.k,{children:(0,d.jsx)(u,{...e})})}",
)
export const SectionTitle = findByStrings(exportedFunctions, "textToHighlight", "textBase")
export const SettingColumn = findByStrings(exportedFunctions, "setSectionFilterMatchQueryValue", "filterMatchQuery")
export const SettingText = findByStrings(exportedFunctions, "textSubdued", "dangerouslySetInnerHTML")
export const SettingToggle = findByStrings(exportedFunctions, "condensed", "onSelected")

export const curationButtonClass = exportedMembers.find(m => m?.curationButton)!.curationButton

const reactObjects = modules.filter(m => m?.$$typeof)
const reactForwardRefs = reactObjects.filter(m => m.$$typeof === Symbol.for("react.forward_ref"))
const reactMemos = reactObjects.filter(m => m.$$typeof === Symbol.for("react.memo"))

export const rs_w = reactForwardRefs.filter(x => x.render?.toString().includes("hasLeadingOrMedia"))
