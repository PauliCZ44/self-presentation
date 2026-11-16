import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  // English lives at "/", Czech at "/cs/".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cs"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
