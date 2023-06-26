<template>
  <!-- left column -->
  <div class="p-4 grid gap-4 place-items-center grid-cols-1 lg:grid-cols-3">
    <div class="w-64 h-full sm:hidden lg:block shrink bg-orange-200">left</div>
    <!-- main div -->
    <div class="w-[1fr]">
      <h1>Veja nossos ultimos posts...</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div
          class="inline-block"
          v-for="article in response?.data"
          :key="article.id"
        >
          <CardHome :article="article" />
          <CardHome :article="article" />
          <CardHome :article="article" />
          <CardHome :article="article" />
        </div>
      </div>
    </div>
    <!-- right column -->
    <div class="w-64 h-full sm:hidden lg:block shrink bg-orange-200">right</div>
  </div>
</template>

<script setup lang="ts">
import { APIResponse } from "~/types/APIResponse";

const { data: response } = await useFetch<APIResponse>(
  "/api/articles/articlesHomePage"
);
</script>
