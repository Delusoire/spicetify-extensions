/// <reference lib="deno.ns" />

import { appendFileSync } from "node:fs"
import { basename } from "https://deno.land/std@0.201.0/path/basename.ts"
import { join } from "https://deno.land/std@0.201.0/path/join.ts"
import * as esbuild from "https://deno.land/x/esbuild@v0.19.4/mod.js"
// import { denoResolverPlugin, denoLoaderPlugin } from "https://deno.land/x/esbuild_deno_loader@0.8.2/mod.ts"

import autoprefixer from "https://deno.land/x/postcss_autoprefixer@0.2.8/mod.js"
import { postCSSPlugin } from "./esbuild-plugin-postcss.ts"

import { extractor } from "./front-matter.ts"
import { sass } from "https://deno.land/x/denosass@1.0.6/src/mod.ts"

// Utils

const USER_REPO = "Delusoire/spicetify-extensions"

// const rawest = (str: string) => "String.raw`" + str.replace(/(\$\{|\`)/gm, "\\$1") + "`"

const runtimeInject = (id: string, tag: string, content: string, props = {}) =>
    `(async () => {
    if (!document.getElementById("${id}")) {
        const el = document.createElement("${tag}")
        el.id = "${id}"
        ${Object.entries(props)
            .map(([k, v]) => `el["${k}"] = "${v}"`)
            .join(";")}
        el.textContent = ${content}
        document.head.appendChild(el)
    }
})()`

const wrapInCssTag = (id: string, css: string) => runtimeInject(id, "style", JSON.stringify(css))

const generatePrismContent = (name: string) =>
    runtimeInject(
        name,
        "script",
        `await fetch(\`https://api.github.com/repos/${USER_REPO}/contents/dist/${name}/app.js\`)
            .then(res => res.json())
            .then(data => atob(data.content))`,
        { type: "module" },
    )

const readDirFullPath = (path: string) => Array.from(Deno.readDirSync(path)).map(file => join(path, file.name))

// Build

const OUT = "dist"

const encoder = new TextEncoder()
const decoder = new TextDecoder()

const extensions = readDirFullPath("extensions")
const snippets = readDirFullPath("snippets")

const extensionsData = extensions.map(async fullname => {
    const name = basename(fullname)
    const entry = join(fullname, "app.ts")

    await esbuild.build({
        platform: "browser",
        plugins: [
            // denoResolverPlugin(),
            postCSSPlugin({
                plugins: [autoprefixer()],
                modules: {
                    generateScopedName: `[name]__[local]___[hash:base64:5]_${name}`,
                },
            }),
            // denoLoaderPlugin({ nodeModulesDir: true }),
        ],
        entryPoints: [entry],
        outdir: join(OUT, name),
        bundle: true,
        format: "esm",
        external: ["https://esm.sh/*"],
        minify: true,
        sourcemap: "inline",
        tsconfigRaw: `{
          "compilerOptions": {
            "experimentalDecorators": true,
            "useDefineForClassFields": false,
          }
        }`,
    })

    const s = join(OUT, name)
    const jsPath = join(s, "app.js")
    const cssPath = join(s, "app.css")
    const prismPath = join(s, "prism.js")

    try {
        const cssContent = decoder.decode(await Deno.readFile(cssPath))
        appendFileSync(jsPath, wrapInCssTag(name + "-css", cssContent))
    } catch (_) {}

    const prismContent = generatePrismContent(name)
    Deno.writeFile(prismPath, encoder.encode(prismContent))

    const assets = join(fullname, "assets")
    const readme = join(assets, "README.md")
    const preview = join(assets, "preview.png")

    const readmeContent = decoder.decode(await Deno.readFile(readme))
    const readmeFrontmatter = extractor(readmeContent).attributes

    return Object.assign(readmeFrontmatter, {
        name,
        preview,
        main: prismPath,
        readme,
    })
})

snippets.map(fullname => {
    const css = sass(fullname).to_string("compressed").toString()
    const snippetFile = join(OUT, fullname.replace(/\.scss$/, ".css"))
    Deno.writeFile(snippetFile, encoder.encode(css))
})

const manifest = await Promise.all(extensionsData)
Deno.writeFile("manifest.json", encoder.encode(JSON.stringify(manifest)))

esbuild.stop()
