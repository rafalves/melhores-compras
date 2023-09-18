<template>
  <section>
    <div class="flex flex-col ">
      <p class="flex justify-center md:justify-normal pt-2 pb-2 text-2xl font-poppins font-semibold">Últimos Posts</p>

      <div class="flex w-full md:max-w-[40rem] lg:max-w-[60rem]">
        <div class="flex gap-6 flex-wrap justify-start 2xl:justify-normal">
          <div v-for="article in articleData?.data" :key="article.id">
            <SlicesCardHome :article="article" />
            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRuntimeConfig, useFetch } from "#imports";
import { get3LatestPosts } from "~/composables/api/apiQuerys";
import { ArticlesData } from "~/types/ArticleLatest";
const config = useRuntimeConfig()
const contentType = 'articles'

const { data: articleData } = await useFetch<ArticlesData>(
  `${config.public.apiBase}${contentType}${get3LatestPosts}`,
);

</script>
