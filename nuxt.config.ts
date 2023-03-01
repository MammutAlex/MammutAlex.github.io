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
        'nuxt-schema-org',
    ],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://alex-kovalchuk.pro',
        }
    },
    schemaOrg: {
        host: 'https://alex-kovalchuk.pro',
    },
    ssr: true
})
