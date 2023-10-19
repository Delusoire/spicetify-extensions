const user_repo = "Delusoire/spicetify-extensions"

import type { BunPlugin } from "bun"
import { compile } from "sass"
import postcss from "postcss"
const autoprefixer = require("autoprefixer")

// Helper functions

const wrapInTag = (id: string, tag: string, content: string) =>
    `(async () => {
    const id = "${id}"
    if (!document.getElementById(id)) {
        const el = document.createElement("${tag}")
        el.id = id
        el.textContent = ${content}
        document.head.appendChild(el)
    }
})()`

const createPrismContent = (pkgname: string) => {
    const content = `(await fetch(\`https://api.github.com/repos/${user_repo}/contents/dist/${pkgname}.js\`).then(res => res.json()).then(data => atob(data.content)))`

    return wrapInTag(pkgname, "script", `"{" + ${content} + "}"`)
}

// Build plugins

const externals: Record<string, string> = {
    react: "Spicetify.React",
    "react-dom": "Spicetify.ReactDOM",
}

const externalGlobalPlugin: BunPlugin = {
    name: "external-global-plugin",
    setup(build) {
        const namespace = externalGlobalPlugin.name

        build.onResolve({ filter: new RegExp("^(" + Object.keys(externals).join("|") + ")$") }, args => {
            return { path: args.path, namespace }
        })

        build.onLoad({ filter: /.*/, namespace }, args => ({
            contents: `module.exports = ${externals[args.path]}`,
        }))
    },
}

const stylesPlugin: BunPlugin = {
    name: "styles-plugin",
    async setup(build) {
        const { resolve } = await import("node:path")
        const { createHash } = await import("node:crypto")
        const PostCSSProcessor = await postcss([autoprefixer])
        const namespace = stylesPlugin.name

        build.onResolve({ filter: /.\.(scss)$/ }, args => ({
            path: resolve(args.importer, "..", args.path),
            namespace,
        }))

        build.onLoad({ filter: /.*/, namespace }, args => {
            const compiledCss = compile(args.path).css
            const processedCss = PostCSSProcessor.process(compiledCss, { from: args.path }).css
            const css = String.raw`${processedCss}`.trim()
            const hash = createHash("sha256").update(css).digest("base64url")

            return {
                contents: wrapInTag(hash, "style", JSON.stringify(css)),
            }
        })
    },
}

// Build

import { basename } from "node:path"
import { readdirSync, mkdirSync } from "node:fs"
import { join } from "node:path"

const readdirFullPath = (path: string) => readdirSync(path).map(file => join(path, file))

const extensions = readdirFullPath("extensions")
const snippets = readdirFullPath("snippets")

const out = "dist"

mkdirSync(out, { recursive: true })

extensions.map(async fullname => {
    const name = basename(fullname)

    const buildOutput = await Bun.build({
        entrypoints: [join(fullname, "entry.tsx")],
        plugins: [externalGlobalPlugin, stylesPlugin],
        outdir: out,
        naming: `${name}.[ext]`,
    })

    if (!buildOutput.success) {
        console.error(`Build failed for ${name}`)
        console.log(buildOutput.logs)
        return
    }

    const prismFile = Bun.file(join(out, `${name}.prism.js`))
    const prismContent = createPrismContent(name)

    Bun.write(prismFile, prismContent)
})

snippets.map(fullname => {
    const name = basename(fullname)

    const { css } = compile(fullname)
    const snippetFile = Bun.file(join(out, name.replace(".scss", ".css")))

    Bun.write(snippetFile, css)
})