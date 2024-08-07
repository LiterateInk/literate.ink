import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [starlight({
    title: 'Literate',
    social: {
      github: "https://github.com/LiterateInk"
    },

    components: {
      Sidebar: "./src/components/Sidebar.astro",
      SiteTitle: "./src/components/SiteTitle.astro",
    },

    sidebar: [
      // Main documentation entries.
      {
        label: 'Guides',
        
        items: [
          {
            label: 'Example Guide',
            link: '/docs/guides/example/'
          }
        ]
      },
      
      // Pawnote documentation entries
      {
        label: 'Installation',
        link: '/pawnote/installation'
      },
      {
        label: 'Guides',
        autogenerate: {
          directory: 'pawnote/guides',
        }
      },
      {
        label: 'Tips and tricks: JS/TS',
        autogenerate: {
          directory: 'pawnote/js-tips',
        }
      },
      {
        label: 'Pronote Internals',
        autogenerate: {
          directory: 'pawnote/pronote-internals',
        }
      },

      // Crowous documentation entries
      {
        label: 'Installation',
        link: '/crowous/installation'
      },
      {
        label: 'Guides',
        autogenerate: {
          directory: 'crowous/guides',
        }
      }
    ]
  })],

  output: "server",
  adapter: netlify()
});
