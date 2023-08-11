(async () => {
    if (!document.getElementById(`show-the-genres-js`)) {
        const el = document.createElement("script")
        el.id = `show-the-genres-js`
        el.textContent = `${await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/show-the-genres.js`).then(res => res.json()).then(data => atob(data.content))}`
        document.head.appendChild(el)
    }
})()