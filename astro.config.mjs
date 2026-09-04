// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.frqshowcar.com",
  // Static output: no server, no CMS. Deploys as plain files to
  // Cloudflare Pages or Vercel.
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
