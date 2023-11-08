(async () => {
    if (!document.getElementById("play-enhanced-songs"))
        document.head.insertAdjacentHTML("beforeend", String.raw`<style type="module" id="play-enhanced-songs">await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/\${id}.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))</style>`)
})