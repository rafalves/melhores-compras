// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: ["@nuxtjs/tailwindcss"],
  content: {
    navigation: {
      fields: [
        "article",
        "createdAt",
        "updatedAt",
        "image",
        "alt",
        "tags",
        "description",
      ],
    },
  },
  app: {
    head: {
      title: "Melhores-Compras.Online",
      meta: [
        {
          name: "description",
          content: "Análise, Promoção e Informação",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "icon",
          type: "image/icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
});
