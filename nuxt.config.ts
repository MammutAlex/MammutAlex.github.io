// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
    ],
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
        '@nuxt/image-edge',
    ],
    ssr: false
})
