import Atomico from "@atomico/astro";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    Atomico({
      cssLiterals: {
        minify: true,
        postcss: true,
      },
    }),
    react(),
  ],
});
