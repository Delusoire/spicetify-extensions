import esbuild from "esbuild"
import _externalGlobalPlugin from "esbuild-plugin-external-global"
const { externalGlobalPlugin } = _externalGlobalPlugin
import fs from "fs"
import path from "path"
import _postCssPlugin from "esbuild-style-plugin"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

const postCssPlugin = _postCssPlugin({
    postcss: {
        plugins: [tailwindcss, autoprefixer],
    },
})

const buildExtension = async name => {
    const wrapInTag = (id, tag, content) =>
        `(async () => {
    if (!document.getElementById(\`${id}\`)) {
        const el = document.createElement("${tag}")
        el.id = \`${id}\`
        el.textContent = \`${content}\`
        document.head.appendChild(el)
    }
})()`

    const toScript = (id, url) =>
        `if (!document.getElementById(\`${id}\`)) {
    const script = document.createElement("script")
    script.id = \`${id}\`
    script.src = \`${url}\`
    script.defer = true
    document.head.appendChild(script)
}`

    const entryJs = path.join("extensions", name, `entry.tsx`),
        outJs = path.join("dist", `${name}.js`),
        outCss = path.join("dist", `${name}.css`),
        prism = path.join("dist", `${name}.prism.js`)

    const bundleCss = () => {
        if (fs.existsSync(outCss)) {
            const css = fs.readFileSync(outCss, "utf-8")
            fs.rmSync(outCss)

            fs.appendFileSync(outJs, wrapInTag(`${name}-css`, "style", String.raw`${css}`.trim()))
        }

        fs.writeFileSync(
            prism,
            // wrapInTag(
            //     `${name}-js`,
            //     "script",
            //     `\${await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/${name}.js\`).then(res => res.json()).then(data => atob(data.content))}`,
            // ),
            toScript(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/${name}.js`),
        )
    }

    await esbuild.build({
        entryPoints: [entryJs],
        minify: false,
        outfile: outJs,
        target: "es2022",
        external: ["react", "react-dom"],
        bundle: true,
        globalName: name.replaceAll("-", "."),
        plugins: [
            externalGlobalPlugin({
                react: "Spicetify.React",
                "react-dom": "Spicetify.ReactDOM",
            }),
            postCssPlugin,
        ],
    })

    bundleCss()
}

const buildSnippet = async name => {
    const entryCss = path.join("snippets", name)
    const outJs = path.join("dist", name)

    const removeJs = () => {
        if (fs.existsSync(outJs)) fs.rmSync(outJs)
    }

    await esbuild.build({
        entryPoints: [entryCss],
        minify: false,
        outfile: outJs,
        target: "es2022",
        bundle: true,
        globalName: name.replaceAll("-", "."),
        plugins: [postCssPlugin],
    })

    removeJs()
}

fs.readdirSync("extensions").map(buildExtension)
fs.readdirSync("snippets").map(buildSnippet)
