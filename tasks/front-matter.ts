import parser from "npm:js-yaml"

const optionalByteOrderMark = "\\ufeff?"
const pattern =
    "^(" +
    optionalByteOrderMark +
    "(= yaml =|---)" +
    "$([\\s\\S]*?)" +
    "^(?:\\2|\\.\\.\\.)\\s*" +
    "$" +
    (Deno.build.os === "windows" ? "\\r?" : "") +
    "(?:\\n)?)"
// NOTE: If this pattern uses the 'g' flag the `regex` constiable definition will
// need to be moved down into the functions that use it.
const regex = new RegExp(pattern, "m")

export const extractor = (str: string) => {
    str = str || ""
    const lines = str.split(/(\r?\n)/)
    if (lines[0] && /= yaml =|---/.test(lines[0])) {
        return parse(str)
    } else {
        return {
            attributes: {},
            body: str,
            bodyBegin: 1,
        }
    }
}

function computeLocation(match: RegExpExecArray, body: string) {
    let line = 1
    let pos = body.indexOf("\n")
    const offset = match.index + match[0].length

    while (pos !== -1) {
        if (pos >= offset) {
            return line
        }
        line++
        pos = body.indexOf("\n", pos + 1)
    }

    return line
}

const parse = (str: string) => {
    const match = regex.exec(str)
    if (!match) {
        return {
            attributes: {},
            body: str,
            bodyBegin: 1,
        }
    }

    const yaml = match[match.length - 1].replace(/^\s+|\s+$/g, "")
    const attributes = parser.load(yaml) || {}
    const body = str.replace(match[0], "")
    const line = computeLocation(match, str)

    return {
        attributes: attributes,
        body: body,
        bodyBegin: line,
        frontmatter: yaml,
    }
}
