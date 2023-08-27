(async () => {
    if (!document.getElementById(`sort-plus-js`)) {
        const el = document.createElement("script")
        el.id = `sort-plus-js`
        el.textContent = `${await fetch(`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/sort-plus.js`).then(res => res.json()).then(data => atob(data.content))}`
        document.head.appendChild(el)
    }
})()