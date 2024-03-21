import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";
import unocss from "unocss/astro";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  site: "https://www.astrid.sh",
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [rehypeAutolinkHeadings],
    shikiConfig: {
      theme: "vitesse-dark",
    },
  },
  integrations: [unocss(), mdx(), sitemap(), react(), prefetch()],
});
