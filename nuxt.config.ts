// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css", "vuetify/lib/styles/main.sass"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image-edge',
  ],
  build: {
    transpile: ["vuetify"],
  },
});
