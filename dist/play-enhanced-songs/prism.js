(async () => {
    if (!document.getElementById("play-enhanced-songs")) {
        const el = document.createElement("script")
        el.id = "play-enhanced-songs"
        el["type"] = "module"
        el.textContent = String.raw`await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/\${id}/app.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))`
        document.head.appendChild(el)
    }
})