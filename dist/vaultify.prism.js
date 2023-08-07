(async () => {
    if (!document.getElementById(`vaultify-js`)) {
        const el = document.createElement("script")
        el.id = `vaultify-js`
        el.textContent = `${await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/vaultify.js`).then(res => res.json()).then(data => atob(data.content))}`
        document.head.appendChild(el)
    }
})()