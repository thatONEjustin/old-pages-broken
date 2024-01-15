import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://thatonejustin.github.io',
  integrations: [tailwind({ applyBaseStyles: false, nesting: true }), mdx(), svelte(),]
});
