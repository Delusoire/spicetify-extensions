const user_repo = "Delusoire/spicetify-extensions"

import type { BunPlugin } from "bun"
import { compile } from "sass"
import postcss from "postcss"
const autoprefixer = require("autoprefixer")

// Helper functions

const runtimeInject = (id: string, tag: string, content: string, props = {}) =>
    `(async () => {
    if (!document.getElementById("${id}"))
        document.head.insertAdjacentHTML("beforeend", <${tag}${Object.entries(props).reduce(
        (acc, [k, v]) => `${acc} ${k}="${v}"`,
        "",
    )} id="${id}">${content}</${tag}>)
})`

const wrapInCssTag = (id: string, css: string) => runtimeInject(id, "style", JSON.stringify(css))

const createPrismContent = (id: string) =>
    runtimeInject(
        id,
        "style",
        `await fetch(\`https://api.github.com/repos/${USER_REPO}/contents/dist/\${id}.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))`,
        { type: "module" },
    )

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
import fm from "front-matter"

const readdirFullPath = (path: string) => readdirSync(path).map(file => join(path, file))

const extensions = readdirFullPath("extensions")
const snippets = readdirFullPath("snippets")

const out = "dist"

mkdirSync(out, { recursive: true })

const extensionsData = extensions.map(async fullname => {
    const name = basename(fullname)
    const entry = join(fullname, "app.tsx")

    const buildOutput = await Bun.build({
        entrypoints: [entry],
        plugins: [externalGlobalPlugin, stylesPlugin],
        outdir: out,
        naming: `${name}.[ext]`,
        sourcemap: "external",
        minify: true,
    })

    if (!buildOutput.success) {
        console.error(`Build failed for ${name}`)
        console.log(buildOutput.logs)
        return
    }

    const isJsExtension = /[^(prism)].js$/
    const exportBlock = /^export\s*{[^;]+}/gm
    readdirFullPath(out).map(async fullname => {
        if (!isJsExtension.test(fullname)) return
        const file = Bun.file(fullname)
        const content = await file.text()
        Bun.write(file, content.replace(exportBlock, ""))
    })

    const prismPath = join(out, `${name}.prism.js`)
    const prismContent = createPrismContent(name)

    Bun.write(Bun.file(prismPath), prismContent)

    const assets = join(fullname, "assets")
    const readme = join(assets, "README.md")

    const readmeContent = await Bun.file(readme).text()
    const readmeFrontmatter = fm(readmeContent).attributes as {}

    return Object.assign(readmeFrontmatter, {
        name,
        preview: join(assets, "preview.png"),
        main: prismPath,
        readme,
    })
})

snippets.map(fullname => {
    const name = basename(fullname)

    const { css } = compile(fullname)
    const snippetFile = Bun.file(join(out, name.replace(".scss", ".css")))

    Bun.write(snippetFile, css)
})

const manifest = await Promise.all(extensionsData)
Bun.write(Bun.file("manifest.json"), JSON.stringify(manifest))
