import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";

// import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://thatonejustin.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true
    }),
    mdx(),
    alpinejs({
      entrypoint: '/src/js/main'
    }),
    // db()
  ]
});
