(async () => {
    if (!document.getElementById("star-ratings")) {
        const el = document.createElement("script")
        el.id = "star-ratings"
        el["type"] = "module"
        el.textContent = await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/star-ratings/app.js`)
            .then(res => res.json())
            .then(data => atob(data.content))
        document.head.appendChild(el)
    }
})()