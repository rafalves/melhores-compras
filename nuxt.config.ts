// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", '@nuxt/image'],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Melhores Compras Online",
      meta: [
        {
          name: "description", content: "Melhores Compras Online | Análise, Promoção e Informação de Produtos Encontrados na Internet",
        },
        {
          name: "lomadee-verification", content: "23174711",
        },
        {
          property: "og:locale", content: "pt_BR",
        },
        {
          property: "og:type", content: "website",
        },
        {
          property: "og:url", content: "https://www.melhores-compras.online",
        },
        {
          property: "og:site_name", content: "Melhores Compras Online",
        },
        {
          property: "og:title", content: "Melhores Compras Online",
        },
        {
          property: "og:description", content: "Melhores Compras Online | Análise, Promoção e Informação de produtos encontrados na internet",
        },
        {
          property: "og:image", content: "https://www.melhores-compras.online/img/banner.jpg",
        },
        {
          property: "og:image:alt", content: "Banner do Site Escrito Melhores Compras Online",
        },
        {
          name: "twitter:card", content: "summary_large_image",
        },
        {
          name: "twitter:title", content: "Melhores Compras Online",
        },
        {
          name: "twitter:description", content: "Melhores Compras Online | Análise, Promoção e Informação de Produtos Encontrados na Internet",
        },
        {
          name: "twitter:site", content: "@melhorescomprs",
        },
        {
          name: "twitter:creator", content: "@melhorescomprs",
        },
        {
          name: "twitter:image", content: "https://www.melhores-compras.online/img/banner.jpg",
        },
        {
          name: "twitter:image:alt", content:
            "Banner do Site Escrito Melhores Compras Online",
        },

      ],
      link: [
        {
          rel: "canocical",
          href: "https://www.melhores-compras.online",
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
      apiBase: "https://www.melhores-compras.online/dev/api/", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      apiImageBase: "https://www.melhores-compras.online/dev", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
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
