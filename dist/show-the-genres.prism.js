(async () => {
    if (!document.getElementById("show-the-genres"))
        document.head.insertAdjacentHTML("beforeend", String.raw`<style type="module" id="show-the-genres">await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/\${id}.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))</style>`)
})