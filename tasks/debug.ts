/// <reference lib="deno.ns" />

import { join } from "https://deno.land/std/path/join.ts"

const PORT = 9229

const command = new Deno.Command(join(Deno.env.get("APPDATA")!, "Spotify", "Spotify.exe"), {
    args: ["--remote-debugging-port=" + PORT],
})

const process = command.spawn()
console.log(await process.status)
