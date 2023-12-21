(async () => {
    if (!document.getElementById("bad-lyrics")) {
        const el = document.createElement("script")
        el.id = "bad-lyrics"
        el["type"] = "module"
        el.textContent = await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/bad-lyrics/app.js`)
            .then(res => res.json())
            .then(data => atob(data.content))
        document.head.appendChild(el)
    }
})()