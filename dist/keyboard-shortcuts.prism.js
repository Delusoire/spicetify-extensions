(async () => {
    const id = "keyboard-shortcuts"
    if (!document.getElementById(id)) {
        const el = document.createElement("script")
        el.id = id
        el.textContent = `(async () => {
${
        (await fetch("https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/keyboard-shortcuts.js")
            .then(res => res.json())
            .then(data => atob(data.content))
        ).replace(/^/gm, "  ")
    }
})()`
        document.head.appendChild(el)
    }
})()