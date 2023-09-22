<template>
  <section class="flex flex-col mx-2 md:mx-0">
    <div class="flex justify-between">
      <p class="flex justify-center md:justify-normal pt-2 pb-2 text-2xl font-poppins font-semibold">Últimos
        Posts
      </p>
      <NuxtLink to="/ultimos-posts"
        class="flex justify-center md:justify-normal pt-2 pb-2 mr-2 text-2xl font-poppins font-semibold hover:text-[#744EAA]">
        ver +
      </NuxtLink>
    </div>

    <div class="flex w-full md:max-w-[40rem] lg:max-w-[60rem]">
      <div class="flex gap-6 flex-wrap justify-center md:justify-start 2xl:justify-normal">
        <div v-for="article in articleData?.data" :key="article.id">
          <SlicesCardPostSmall :article="article" />
          <br />
        </div>
      </div>
    </div>
    <div class="h-10" />
  </section>
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
