(async () => {
    const id = "search-on-youtube"
    if (!document.getElementById(id)) {
        const el = document.createElement("script")
        el.id = id
        el.textContent = `(async () => {
${
        (await fetch("https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/search-on-youtube.js")
            .then(res => res.json())
            .then(data => atob(data.content))
        ).replace(/^/gm, "  ")
    }
})()`
        document.head.appendChild(el)
    }
})()