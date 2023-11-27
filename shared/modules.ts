import { allPass } from "https://esm.sh/fp-ts-std@0.18.0/Predicate"

// @ts-expect-error webpackChunkOpen is only defined in the browser
const require = webpackChunkopen.push([[Symbol("Dummy module to extract require method")], {}, re => re])
const cache = Object.keys(require.m).map(id => require(id))
export const modules = cache
    .filter((module): module is Object => typeof module === "object")
    .flatMap(module => Object.values(module))
export const functionModules = modules.filter((module): module is Function => typeof module === "function")

export const reactObjects = modules.filter(m => m?.$$typeof)
const reactMemoSymbol = Spicetify.React.memo().$$typeof
export const reactMemos = reactObjects.filter(m => m.$$typeof === reactMemoSymbol)

const findModuleByStrings = (modules: Array<any>, ...filters: Array<string | RegExp>) =>
    modules.find(f =>
        allPass(
            filters.map(filter =>
                typeof filter === "string" ? (s: string) => s.includes(filter) : (s: string) => filter.test(s),
            ),
        )(f.toString()),
    ) as any

export const CheckedPlaylistButtonIcon = findModuleByStrings(
    functionModules,
    "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z",
)

export const SettingSection = findModuleByStrings(
    functionModules,
    "function m(e){return(0,d.jsx)(r.k,{children:(0,d.jsx)(u,{...e})})}",
)
export const SectionTitle = findModuleByStrings(functionModules, "textToHighlight", "textBase")
export const SettingColumn = findModuleByStrings(functionModules, "setSectionFilterMatchQueryValue", "filterMatchQuery")
export const SettingText = findModuleByStrings(functionModules, "textSubdued", "viola")
export const SettingToggle = findModuleByStrings(functionModules, "condensed", "onSelected")

export const curationButtonClass = modules.find(m => m?.curationButton)!.curationButton
