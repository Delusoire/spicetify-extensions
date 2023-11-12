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

const findModuleByItsString = (modules: Array<any>, ...filters: Array<string | RegExp>) =>
    modules.find(f =>
        allPass(
            filters.map(filter =>
                typeof filter === "string" ? (s: string) => s.includes(filter) : (s: string) => filter.test(s),
            ),
        )(f.toString()),
    ) as any

export const CheckedPlaylistButtonIcon = findModuleByItsString(
    functionModules,
    "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z",
)

export const SectionWrapper = findModuleByItsString(functionModules, /^function .\(.\)\{return\(0,.\.jsx\)\(/)
export const SectionTitle = findModuleByItsString(functionModules, "textToHighlight")
export const SettingColumn = findModuleByItsString(
    functionModules,
    "setSectionFilterMatchQueryValue",
    "filterMatchQuery",
)
export const SettingText = findModuleByItsString(functionModules, "textSubdued", "viola")
export const SettingToggle = findModuleByItsString(functionModules, "condensed", "onSelected")

export const curationButtonClass = modules.find(m => m?.curationButton)!.curationButton
