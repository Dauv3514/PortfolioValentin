import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:'https://Dauv3514.github.io',
  base: 'PortfolioValentin',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
