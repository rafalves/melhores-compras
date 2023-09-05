// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", '@nuxt/image'],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
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
          name: "lomadee-verification",
          content: "23174711",
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
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: "https://www.melhores-compras.online/", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      apiImageBase: "https://www.melhores-compras.online", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  image: {
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  // experimental: {
  //   componentIslands: true
  // }

});
