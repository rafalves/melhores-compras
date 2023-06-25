<template>
  <!-- left column -->
  <div
    class="p-4 max-w-screen grid gap-4 place-items-center grid-cols-1 lg:grid-cols-3"
  >
    <div class="sm:hidden lg:block">left</div>
    <!-- main div -->
    <div>
      <h1>Veja nossos ultimos posts...</h1>
      sdsdf
      <div
        class="w-[800px]"
        v-for="article in response?.data"
        :key="article.id"
      >
        <CardHome :article="article" />
        <CardHome :article="article" />
      </div>
    </div>
    <!-- right column -->
    <div class="sm:hidden lg:block">right</div>
  </div>
</template>

<script setup lang="ts">
import { APIResponse } from "~/types/APIResponse";

const { data: response } = await useFetch<APIResponse>(
  "/api/articles/articlesHomePage"
);
</script>
