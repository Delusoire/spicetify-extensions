(async () => {
    if (!document.getElementById("star-ratings-2"))
        document.head.insertAdjacentHTML("beforeend", String.raw`<style type="module" id="star-ratings-2">await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/\${id}.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))</style>`)
})