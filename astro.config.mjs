// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/*
  Ținta de deploy se dă din variabile de mediu, ca proiectul să nu fie legat
  de un singur host.

  - Implicit (Vercel, Cloudflare Pages, domeniu propriu): site-ul stă în
    rădăcină, deci `base` rămâne gol.
  - Pe GitHub Pages, unde adresa e `user.github.io/frq-site/`, workflow-ul
    setează PUBLIC_BASE_PATH=/frq-site și PUBLIC_SITE_URL.

  Fără asta, toate căile absolute (logo, favicon, CSS) ar cădea pe Pages.
*/
const site = process.env.PUBLIC_SITE_URL || "https://www.frqshowcar.com";
const base = process.env.PUBLIC_BASE_PATH || "";

export default defineConfig({
  site,
  base,
  // Ieșire statică: fără server, fără CMS.
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
