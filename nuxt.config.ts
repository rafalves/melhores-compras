// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/devtools", "@nuxtjs/markdownit"],
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: {
      name: "fade",
      mode: "out-in", // default
    },
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
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: "", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
});
