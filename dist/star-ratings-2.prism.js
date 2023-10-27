(async () => {
    const id = "star-ratings-2"
    if (!document.getElementById(id)) {
        const el = document.createElement("script")
        el.id = id
        el.textContent = `(async () => {
${
        (await fetch("https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/star-ratings-2.js")
            .then(res => res.json())
            .then(data => atob(data.content))
        ).replace(/^/gm, "  ")
    }
})()`
        document.head.appendChild(el)
    }
})()