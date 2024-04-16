import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from "@astrojs/vercel/serverless";

const LINK_GITHUB_ORG = "https://github.com/LiterateInk";
const LINK_DISCORD = "https://discord.gg/f5KNCnMWzB";
const LINK_PAWNOTE_DOCS = "https://pawnote.js.org";
// NOTE: Still no documentation website for Pawdirecte, so we link to the GitHub meanwhile.
const LINK_PAWDIRECTE_DOCS = `${LINK_GITHUB_ORG}/Pawdirecte`;

/** Cute helper to prevent building the object every time. */
const createRedirection = url => ({
  status: 302,
  destination: url
});

export default defineConfig({
  integrations: [starlight({
    title: 'Documentation',
    social: {
      // GitHub for the app itself.
      github: `${LINK_GITHUB_ORG}/Literate`
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
  
  redirects: {
    '/pawnote': createRedirection(LINK_PAWNOTE_DOCS),
    '/pawdirecte': createRedirection(LINK_PAWDIRECTE_DOCS),
    '/github': createRedirection(LINK_GITHUB_ORG),
    '/discord': createRedirection(LINK_DISCORD)
  },

  output: "server",
  adapter: vercel()
});