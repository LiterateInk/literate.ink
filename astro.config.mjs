import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [starlight({
    title: 'Documentation',
    social: {
      // GitHub for the app itself.
      github: "https://github.com/LiterateInk/Literate"
    },
    sidebar: [{
      label: 'Guides',
      items: [{
        label: 'Example Guide',
        link: '/docs/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  })],

  output: "server",
  adapter: vercel()
});