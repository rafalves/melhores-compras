// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/devtools"],
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
          content:
            "Análise, Promoção e Informação de produtos encontrados na internet",
        },
        {
          name: "robots",
          content: "index, max-image-preview:large",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:locale",
          content: "pt_BR",
        },
        {
          property: "og:title",
          content: "Melhores-Compras.Online",
        },
        {
          property: "og:description",
          content:
            "Análise, Promoção e Informação de produtos encontrados na internet",
        },
        {
          property: "og:url",
          content: "https://melhores-compras.online",
        },
        {
          property: "og:site_name",
          content: "Melhores-Compras.Online",
        },
        {
          name: "twitter:card",
          content: "melhores-comprasonline-low-resolution-color-logo.png",
        },
      ],
      link: [
        {
          rel: "canocical",
          href: "https://melhores-compras.online",
        },
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
      apiBase: "http://191.96.251.66:1337", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
});
