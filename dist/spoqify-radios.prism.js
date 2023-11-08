(async () => {
    if (!document.getElementById("spoqify-radios"))
        document.head.insertAdjacentHTML("beforeend", String.raw`<style type="module" id="spoqify-radios">await fetch(\`https://api.github.com/repos/Delusoire/spicetify-extensions/contents/dist/\${id}.js\`)
    .then(res => res.json())
    .then(data => atob(data.content))</style>`)
})