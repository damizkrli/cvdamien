import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://damizkrli.github.io",
  base: "cvdamien",
  trailingSlash: "always",
  integrations: [tailwind()],
});
