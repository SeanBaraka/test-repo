// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL
        }
    }
})
