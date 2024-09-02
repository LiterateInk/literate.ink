import { defineConfig } from 'vite'

import solid from 'vite-plugin-solid'
import unocss from "unocss/vite";

import icons from "unplugin-icons/vite"
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  plugins: [
    icons({
      compiler: "solid",
      customCollections: {
        "literate": FileSystemIconLoader("./src/assets/icons")
      }
    }),
    unocss(),
    solid()
  ],
})
