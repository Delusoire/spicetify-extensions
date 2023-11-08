(async () => {
    if (!document.getElementById("search-on-youtube")) {
        const el = document.createElement("script")
        el.id = "search-on-youtube"
        el["type"] = "module"
        el.textContent = String.raw`await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/\${id}.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))`
        document.head.appendChild(el)
    }
})