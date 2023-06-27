<template>
  <div>
    <div>
      <h1 class="lg:text-2xl text-2xl leading-9 font-semibold text-center pt-5">
        Veja nossos ultimos posts...
      </h1>
      <div class="flex flex-wrap justify-center 2xl:justify-normal">
        <div class="" v-for="article in response?.data" :key="article.id">
          <CardHome :article="article" /> <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { APIResponse } from "~/types/APIResponse";

const { data: response } = await useFetch<APIResponse>(
  "/api/articles/articlesHomePage"
);
</script>
