(async () => {
    if (!document.getElementById("search-on-youtube"))
        document.head.insertAdjacentHTML("beforeend", String.raw`<style type="module" id="search-on-youtube">await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/\${id}.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))</style>`)
})