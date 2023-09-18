<template>
  <div>

    <!-- <PostBlocksLatestArticles /> -->
    <PostBlocksMoreArticles />
    <div class="h-10" />
  </div>
</template>

<script setup lang="ts">

// SEO
useSeoMeta({
  title: 'Políticas de Privacidade  | Melhores Compras Online',
  description: 'Conheça nossas políticas de privacidade.',
  twitterCard: () => 'summary',
  twitterTitle: () => 'Política de Privacidade',
  twitterDescription: () => 'Conheça nossas políticas de privacidade.',
  twitterImage: () => 'https://www.melhores-compras.online/img/banner.jpg',
  twitterImageAlt: () => 'Banner Melhores Compras Online',
  twitterSite: () => '@melhorescomprs',
  twitterCreator: () => '@melhorescomprs',
  themeColor: () => '#38BDF8',
  ogUrl: 'https://www.melhores-compras.online',
  ogTitle: () => 'Política de Privacidade',
  ogDescription: () => 'Conheça nossas políticas de privacidade.',
  ogImage: () => 'https://www.melhores-compras.online/img/banner.jpg',
  ogImageAlt: () => 'Banner Melhores Compras Online',
  ogType: 'article',
})

// nuxt-schema-org 
useSchemaOrg([
  defineOrganization({
    name: 'Melhores Compras Online',
    logo: 'https://www.melhores-compras.online/img/banner.jpg',
    inLanguage: 'pt_BR',
    tagPosition: 'head',
    url: 'https://melhores-compras.online',
    description: 'Melhores Compras Online | Análise, Promoção e Informação de Produtos Encontrados na Internet',
  }),
  defineWebPage({
    '@type': 'WebPage',
    name: 'Política de Privacidade',
    image: 'https://www.melhores-compras.online/img/banner.jpg',
    description: 'Conheça nossas políticas de privacidade.',
    url: 'https://www.melhores-compras.online/politica-de-privacidade'
  })
])


</script>