(async () => {
    if (!document.getElementById(`keyboard-shortcuts-js`)) {
        const el = document.createElement("script")
        el.id = `keyboard-shortcuts-js`
        el.textContent = `${await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/keyboard-shortcuts.js`).then(res => res.json()).then(data => atob(data.content))}`
        document.head.appendChild(el)
    }
})()