(async () => {
    if (!document.getElementById(`star-ratings-js`)) {
        const el = document.createElement("script")
        el.id = `star-ratings-js`
        el.textContent = `${await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/star-ratings.js`).then(res => res.json()).then(data => atob(data.content))}`
        document.head.appendChild(el)
    }
})()