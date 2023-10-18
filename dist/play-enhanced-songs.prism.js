(async () => {
    if (!document.getElementById(`play-enhanced-songs`)) {
        const el = document.createElement("script")
        el.id = `play-enhanced-songs`
        el.textContent = `${await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/play-enhanced-songs.js`).then(res => res.json()).then(data => atob(data.content))}`
        document.head.appendChild(el)
    }
})()