(async () => {
    if (!document.getElementById(`play-enhanced-songs-js`)) {
        const el = document.createElement("script")
        el.id = `play-enhanced-songs-js`
        el.textContent = `${await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/play-enhanced-songs.js`).then(res => res.json()).then(data => atob(data.content))}`
        document.head.appendChild(el)
    }
})()