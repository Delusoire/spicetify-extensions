(async () => {
    if (!document.getElementById("star-ratings-2")) {
        const el = document.createElement("script")
        el.id = "star-ratings-2"
        el["type"] = "module"
        el.textContent = await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/${id}/app.js`)
            .then(res => res.json())
            .then(data => atob(data.content))
        document.head.appendChild(el)
    }
})