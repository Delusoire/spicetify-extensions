(async () => {
    if (!document.getElementById("keyboard-shortcuts")) {
        const el = document.createElement("script")
        el.id = "keyboard-shortcuts"
        el["type"] = "module"
        el.textContent = await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/${id}/app.js`)
            .then(res => res.json())
            .then(data => atob(data.content))
        document.head.appendChild(el)
    }
})