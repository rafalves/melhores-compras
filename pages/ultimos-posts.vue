<template>
  <section class="flex flex-col mx-2 md:mx-0">
    <div class="flex justify-between">
      <p class="flex justify-center md:justify-normal pt-2 pb-2 text-2xl font-poppins font-semibold text-[#DD2E44]">Últimos
        Posts
      </p>
    </div>

    <div class="flex w-full md:max-w-[40rem] lg:max-w-[60rem]">
      <div class="flex gap-6 flex-wrap justify-center md:justify-start 2xl:justify-normal">
        <div v-for="article in articleData?.data" :key="article.id">
          <SlicesCardPostSmall :article="article" />
          <br />
        </div>
      </div>
    </div>
    <div class="h-5" />

    <div class="justify-items-center shadow-lg bg-white p-2 md:px-5 rounded-xl font-montserrat">
      <p class="flex justify-center md:justify-normal pt-2 pb-2 text-2xl font-poppins font-semibold text-[#744EAA]">Lista
      </p>
      <div v-for="article in articleData?.data"> 
        <p class="font-poppins hover:text-[#744EAA] hover:font-semibold hover:underline">
          <NuxtLink :to="`/posts/${article.attributes.category.data.attributes.hierarchy}/${article.attributes.slug}`" target="_blank">{{ useFormatData2(article.attributes.publishedAt) }} - {{ article.attributes.title }} </NuxtLink>
        </p>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRuntimeConfig, useFetch } from "#imports";
import { CategoryData } from '~/types/CategoryIndex';
import { getAllLatestPosts } from "~/composables/api/apiQuerys";
import { ArticlesData } from "~/types/ArticleLatest";
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