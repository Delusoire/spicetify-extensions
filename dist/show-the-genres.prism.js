(async () => {
    if (!document.getElementById("show-the-genres")) {
        const el = document.createElement("script")
        el.id = "show-the-genres"
        el["type"] = "module"
        el.textContent = String.raw`await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/\${id}.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))`
        document.head.appendChild(el)
    }
})