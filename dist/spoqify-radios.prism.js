(async () => {
    if (!document.getElementById("spoqify-radios")) {
        const el = document.createElement("script")
        el.id = "spoqify-radios"
        el["type"] = "module"
        el.textContent = String.raw`await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/\${id}.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))`
        document.head.appendChild(el)
    }
})