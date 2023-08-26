<template>
  <div>
    <p class="flex justify-center md:justify-normal pt-6 pb-2 text-2xl font-poppins font-semibold">Últimos Posts</p>

    <div class="flex w-full md:max-w-[40rem] lg:max-w-[53rem]">
      <div class="flex gap-6 flex-wrap justify-center 2xl:justify-normal">
        <div class=" " v-for="article in articleData?.data" :key="article.id">
          <CardHome :article="article" />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig, useFetch } from "#imports";
import { ArticlesData } from "~/types/ArticleLatest";
const config = useRuntimeConfig()


const { data: articleData } = await useFetch<ArticlesData>(
  `${config.public.apiBase}/api/articles?sort[0]=publishedAt%3Adesc&populate[0]=category&populate[1]=category.parent&populate[2]=category.children&populate[3]=authors&populate[4]=imgBanner&pagination[start]=0&pagination[limit]=20`,
);

// console.log(JSON.stringify(articleData.value))
</script>
