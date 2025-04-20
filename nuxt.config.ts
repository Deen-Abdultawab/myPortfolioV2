// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', 'motion-v/nuxt'],
   vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      link: [
        // or for PNG
        { rel: 'icon', type: 'image/png', href: '/profilePicture.png' }
      ]
    }
  }
})