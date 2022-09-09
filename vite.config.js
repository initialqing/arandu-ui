import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
}
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        }
    },
    plugins: [
        vue(),
        Unocss(),
        vueJsx({}),
    ],
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "AranduUI",
            fileName: "arandu-ui",
            formats: ['es']
        },
        cssCodeSplit: true
    }
})