import esbuild from "esbuild"
import _externalGlobalPlugin from "esbuild-plugin-external-global"
const { externalGlobalPlugin } = _externalGlobalPlugin
import fs from "fs"
import path from "path"
import postCssPlugin from "esbuild-style-plugin"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

const wrapInTag = (id, tag, content) =>
    `(async () => {
    if (!document.getElementById(\`${id}\`)) {
        const el = document.createElement("${tag}")
        el.id = \`${id}\`
        el.textContent = \`${content}\`
        document.head.appendChild(el)
    }
})()`

const buildExtension = async name => {
    const entryJs = path.join("extensions", name, `entry.tsx`),
        outJs = path.join("dist", `${name}.js`),
        outCss = path.join("dist", `${name}.css`),
        prism = path.join("dist", `${name}.prism.js`)

    const bundleCss = () => {
        if (fs.existsSync(outCss)) {
            console.log("Bundling css with js...")

            const css = fs.readFileSync(outCss, "utf-8")
            fs.rmSync(outCss)

            fs.appendFileSync(outJs, wrapInTag(`${name}-css`, "style", String.raw`${css}`.trim()))
        }

        fs.writeFileSync(
            prism,
            wrapInTag(
                `${name}-js`,
                "script",
                `\${await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/${name}.js\`).then(res => res.json()).then(data => atob(data.content))}`,
            ),
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
            postCssPlugin({
                postcss: {
                    plugins: [tailwindcss, autoprefixer],
                },
            }),
        ],
    })

    bundleCss()
}

fs.readdirSync("extensions").map(buildExtension)
