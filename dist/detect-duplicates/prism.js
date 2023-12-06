(async () => {
    if (!document.getElementById("detect-duplicates")) {
        const el = document.createElement("script")
        el.id = "detect-duplicates"
        el["type"] = "module"
        el.textContent = await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/detect-duplicates/app.js`)
            .then(res => res.json())
            .then(data => atob(data.content))
        document.head.appendChild(el)
    }
})()