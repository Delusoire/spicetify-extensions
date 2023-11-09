(async () => {
    if (!document.getElementById("spoqify-radios")) {
        const el = document.createElement("script")
        el.id = "spoqify-radios"
        el["type"] = "module"
        el.textContent = await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/spoqify-radios/app.js`)
            .then(res => res.json())
            .then(data => atob(data.content))
        document.head.appendChild(el)
    }
})