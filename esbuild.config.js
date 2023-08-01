import esbuild from "esbuild"
import _externalGlobalPlugin from "esbuild-plugin-external-global"
const { externalGlobalPlugin } = _externalGlobalPlugin
import fs from "fs"
import path from "path"
import _name from "./package.json" assert { type: "json" }

const buildExtension = async name => {
    const entryJs = path.join("extensions", name, `entry.tsx`),
        outJs = path.join("dist", `${name}.js`),
        outCss = path.join("dist", `${name}.css`)

    const bundleCss = () => {
        if (fs.existsSync(outCss)) {
            console.log("Bundling css with js...")

            const css = fs.readFileSync(outCss, "utf-8")
            fs.rmSync(outCss)

            fs.appendFileSync(
                outJs,
                `(async () => {
                    if (!document.getElementById(\`${name}\`)) {
                        var el = document.createElement("style")
                        el.id = \`${name}\`
                        el.textContent = String.raw\`${css}\`.trim()
                        document.head.appendChild(el)
                    }
                })()`,
            )
        }
    }

    await esbuild.build({
        entryPoints: [entryJs],
        minify: false,
        outfile: outJs,
        target: "es6",
        external: ["react", "react-dom"],
        bundle: true,
        globalName: name.replaceAll("-", "."),
        plugins: [
            externalGlobalPlugin({
                react: "Spicetify.React",
                "react-dom": "Spicetify.ReactDOM",
            }),
        ],
    })

    bundleCss()
}

fs.readdirSync("extensions").map(buildExtension)
