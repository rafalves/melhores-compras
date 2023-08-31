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
import { getAllLatestPosts } from "~/composables/api/apiQuerys";
import { ArticlesData } from "~/types/ArticleLatest";
const config = useRuntimeConfig()
const contentType = 'articles'

const { data: articleData } = await useFetch<ArticlesData>(
  `${config.public.apiBase}${contentType}${getAllLatestPosts}`,
);

</script>
