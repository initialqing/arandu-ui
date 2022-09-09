import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetWebFonts,
    // transformerDirectives,
    // transformerVariantGroup,
} from 'unocss'
const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
];
const safelist = [
    ...colors.map((v) => `bg-${v}-100`),
    ...colors.map((v) => `bg-${v}-400`),
    ...colors.map((v) => `bg-${v}-500`),
    ...colors.map((v) => `hover:bg-${v}-100`),
    ...colors.map((v) => `hover:bg-${v}-300`),
    ...colors.map((v) => `hover:bg-${v}-400`),
    ...colors.map((v) => `hover:bg-${v}-500`),
    ...colors.map(v => `border-${v}-400`),
    ...colors.map(v => `border-${v}-500`),
    ...colors.map(v => `text-${v}-500`),
    ...colors.map(v => `hover:text-${v}-500`),
    `text-white`,
    ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
    ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
    ...['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'].map(v => `text-${v}`),
    ...['rounded-full', 'rounded-lg'],
    ...['search', 'edit', 'checkmark', 'message-queue', 'incomplete-cancel'].map(v => `i-carbon-${v}`)
];
export default defineConfig({
    shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetWebFonts({
            fonts: {
                sans: 'DM Sans',
                serif: 'DM Serif Display',
                mono: 'DM Mono',
            },
        }),
    ],
    safelist,
    // transformers: [
    //   transformerDirectives(),
    //   transformerVariantGroup(),
    // ],
})
