(async () => {
    if (!document.getElementById("redacted")) {
        const el = document.createElement("script")
        el.id = "redacted"
        el["type"] = "module"
        el.textContent = await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/redacted/app.js`)
            .then(res => res.json())
            .then(data => atob(data.content))
        document.head.appendChild(el)
    }
})()