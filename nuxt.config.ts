// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
        '@nuxt/image-edge',
    ],
    css: [
        '@/assets/css/main.css',
    ]
})
