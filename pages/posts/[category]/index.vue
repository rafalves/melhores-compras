<template>
  <div>
    {{ route.params }}
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig, useFetch } from "#imports";
import { CategoryData } from '~/types/CategoryIndex';
import { getAllLatestPosts } from "~/composables/api/apiQuerys";
import { ArticlesData } from "~/types/ArticleLatest";
const route = useRoute();
const config = useRuntimeConfig()
const contentType = 'articles'  
const contentQuery = '?sort[0]=publishedAt%3Adesc&populate[0]=category&populate[1]=category.parent&populate[2]=category.children&pagination[start]=0&pagination[limit]=100'

const { data: articleData } = await useFetch<ArticlesData>(
  `${config.public.apiBase}${contentType}${getAllLatestPosts}`,
); 
const { data: articleData2 } = await useFetch<ArticlesData>(
  `${config.public.apiBase}${contentType}${contentQuery}`,
); 



useSeoMeta({
  title: 'Últimos Posts | Melhores Compras Online',
  description: 'Veja nossos últimos posts',
  twitterCard: () => 'summary',
  twitterTitle: () => 'Último Posts',
  twitterDescription: () => 'Veja nossos últimos posts',
  twitterImage: () => 'https://www.melhores-compras.online/img/banner.jpg',
  twitterImageAlt: () => 'Banner Melhores Compras Online',
  twitterSite: () => '@melhorescomprs',
  twitterCreator: () => '@melhorescomprs',
  themeColor: () => '#38BDF8',
  ogUrl: 'https://www.melhores-compras.online/ultimos-posts',
  ogTitle: () => 'Últimos posts',
  ogDescription: () => 'Veja nossos últimos posts',
  ogImage: () => 'https://www.melhores-compras.online/img/banner.jpg',
  ogImageAlt: () => 'Banner Melhores Compras Online',
  ogType: 'article',
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Últimos Posts', item: '/ultimos-posts'},
    ]
  }),
])
 
</script>