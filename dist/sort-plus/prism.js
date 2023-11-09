(async () => {
    if (!document.getElementById("sort-plus")) {
        const el = document.createElement("script")
        el.id = "sort-plus"
        el["type"] = "module"
        el.textContent = await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/sort-plus/app.js`)
            .then(res => res.json())
            .then(data => atob(data.content))
        document.head.appendChild(el)
    }
})()