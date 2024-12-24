import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: "https://lanrebd.github.io",
  //base: "/minimalist-portfolio-json",
});
