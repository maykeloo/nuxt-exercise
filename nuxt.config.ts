// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/tailwind.css"],
  app: {
    head: {
      title: "Online shop"
    }
  }
});
