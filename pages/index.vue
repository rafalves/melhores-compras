<template>
  <div>
    <div>
      <h1 class="lg:text-2xl text-2xl leading-9 font-semibold text-center pt-5">
        Veja nossos ultimos posts...
      </h1>
      <div class="flex flex-wrap justify-center 2xl:justify-normal">
        <div class="" v-for="article in articleData?.data" :key="article.id">
          <CardHome v-if="!pending" :article="article" />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArticlesData } from "~/types/Article";
import { findAuthorById } from "~/composables/findAuthor";

const { data: articleData, pending } = await useFetch<ArticlesData>(
  "/api/article/articlesHomePage"
);
</script>
