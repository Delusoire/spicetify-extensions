(async () => {
    if (!document.getElementById("keyboard-shortcuts"))
        document.head.insertAdjacentHTML("beforeend", String.raw`<style type="module" id="keyboard-shortcuts">await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/\${id}.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))</style>`)
})