import { ensureDir } from "https://deno.land/std/fs/ensure_dir.ts"
import { dirname, join, relative, resolve } from "https://deno.land/std/path/mod.ts"
import sass from "https://deno.land/x/denosass/mod.ts"
import postcss, { Message, AcceptedPlugin as PostCSSPlugin } from "https://esm.sh/postcss"
import postcssModules from "https://esm.sh/postcss-modules"

interface PostCSSPluginOptions {
    plugins: PostCSSPlugin[]
    modules: boolean | any
    rootDir: string
    writeToFile: boolean
    fileIsModule: (filename: string) => boolean
}

interface CSSModule {
    path: string
    map: {
        [key: string]: string
    }
}

export const defaultOptions: PostCSSPluginOptions = {
    plugins: [],
    modules: true,
    rootDir: Deno.cwd(),
    writeToFile: true,
    fileIsModule: filename => /\.module\.[^\.]+$/.test(filename),
}

const encoder = new TextEncoder()
const decoder = new TextDecoder()

export const postCSSPlugin = (opts?: Partial<PostCSSPluginOptions>) => ({
    name: "postcss",
    setup(build: any) {
        const { plugins, modules, rootDir, writeToFile, fileIsModule } = Object.assign(defaultOptions, opts ?? {})

        const modulesMap = new Map<string, CSSModule>()
        const modulesPlugin = postcssModules({
            generateScopedName: "[name]__[local]___[hash:base64:5]",
            ...(modules === !!modules ? {} : modules),
            getJSON(filepath: any, json: any, outpath: any) {
                modulesMap.set(filepath, json)
                if (typeof modules.getJSON === "function") return modules.getJSON(filepath, json, outpath)
            },
        })

        build.onLoad({ filter: /.*/, namespace: "postcss-module" }, (args: any) => {
            const modmap = modulesMap.get(args?.pluginData?.originalPath) ?? {},
                resolveDir = dirname(args.path),
                css = args?.pluginData?.css || ""

            return {
                resolveDir,
                contents: [
                    writeToFile ? `import ${JSON.stringify(args.path)};` : null,
                    `export default ${JSON.stringify(modmap)};`,
                    writeToFile ? null : `export const stylesheet=${JSON.stringify(css)};`,
                ]
                    .filter(Boolean)
                    .join("\n"),
            }
        })

        build.onLoad({ filter: /.*/, namespace: "postcss-text" }, (args: any) => {
            const css = args?.pluginData?.css || ""
            return {
                contents: `export default ${css};`,
            }
        })

        build.onResolve({ filter: /\.scss$/ }, async (args: any) => {
            const sourceFullPath = resolve(args.resolveDir, args.path)

            const isModule = fileIsModule(sourceFullPath)

            const tmpDirPath = await Deno.makeTempDir()

            const sourceRelDir = relative(dirname(rootDir), dirname(sourceFullPath))
            const tmpFilePath = resolve(tmpDirPath, sourceRelDir, sourceFullPath.replace(/\.scss$/, ".css"))

            await ensureDir(dirname(tmpFilePath))
            const content = decoder.decode(await Deno.readFile(sourceFullPath))
            const css_int = sass(content).to_string("compressed")

            const result = await postcss(isModule ? [modulesPlugin, ...plugins] : plugins).process(css_int, {
                from: sourceFullPath,
                to: tmpFilePath,
            })

            if (writeToFile) {
                const data = encoder.encode(result.css)
                await Deno.writeFileSync(tmpFilePath, data)
            }

            return {
                namespace: isModule ? "postcss-module" : writeToFile ? "file" : "postcss-text",
                path: tmpFilePath,
                watchFiles: [result.opts.from].concat(getPostCssDependencies(result.messages)),
                pluginData: {
                    originalPath: sourceFullPath,
                    css: result.css,
                },
            }
        })
    },
})

const getFilesRecursive = (directory: string): string[] =>
    Array.from(Deno.readDirSync(directory)).reduce((filepaths, file) => {
        const filepath = join(directory, file.name)
        const newFiles = file.isDirectory ? getFilesRecursive(filepath) : [filepath]
        return filepaths.concat(newFiles)
    }, [] as string[])

let idCounter = 0

/**
 * Generates an id that is guaranteed to be unique for the Node.JS instance.
 */
// function uniqueId(): string {
//     return Date.now().toString(16) + (idCounter++).toString(16)
// }

function getPostCssDependencies(messages: Message[]): string[] {
    const dependencies = []
    for (const message of messages) {
        if (message.type == "dir-dependency") {
            dependencies.push(...getFilesRecursive(message.dir))
        } else if (message.type == "dependency") {
            dependencies.push(message.file)
        }
    }
    return dependencies
}
