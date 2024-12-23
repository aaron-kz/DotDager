import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://dotdager.pages.dev",
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind(), sitemap()],
});
