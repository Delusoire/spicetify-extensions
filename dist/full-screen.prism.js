(async () => {
    if (!document.getElementById(`full-screen-js`)) {
        const el = document.createElement("script")
        el.id = `full-screen-js`
        el.textContent = `${await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/full-screen.js`).then(res => res.json()).then(data => atob(data.content))}`
        document.head.appendChild(el)
    }
})()