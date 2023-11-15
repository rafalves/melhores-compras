// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image", "nuxt-schema-org", "nuxt-jsonld"],
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
          // name: "twitter:image", content: "https://www.melhores-compras.online/img/banner.jpg",
          name: "twitter:image", content: "https://www.melhores-compras.online/dev/uploads/711eymr_SAML_AC_SL_1000_eb65a226bd.jpg",
        },
        {
          name: "twitter:image:alt", content:
            "Banner do Site Escrito Melhores Compras Online",
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
          property: "og:description", content: "Melhores Compras Online | Análise, Promoção e Informação de Produtos Encontrados na Internet",
        },
        {
          property: "og:image", content: "https://www.melhores-compras.online/img/banner.jpg",
        },
        {
          property: "og:image:alt", content: "Banner do Site Escrito Melhores Compras Online",
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
    public: {
      apiBase: "https://www.melhores-compras.online/dev/api/",
      apiImageBase: "https://www.melhores-compras.online/dev",
      urlBase: "https://www.melhores-compras.online",
    },
  },
  //@nuxt-image
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
  // nuxt-schema-org
  // default config
  site: {
    host: 'https://melhores-compras.online',
    url: 'https://melhores-compras.online',
    name: 'Melhores Compras Online',
    inLanguage: 'pt_BR',
    tagPosition: 'head',
    image: '/img/banner.jpg',
    escription: 'Melhores Compras Online | Análise, Promoção e Informação de Produtos Encontrados na Internet',
  },
  devServer: {
    port: 3000
  }
});
