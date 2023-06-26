<template>
  <!-- left column -->
  <div class="">
    <!-- main div -->
    <div class="">
      <h1>Veja nossos ultimos posts...</h1>
      <div class="flex">
        <div class="" v-for="article in response?.data" :key="article.id">
          <CardHome :article="article" /> <br />
        </div>
      </div>
    </div>
    <!-- right column -->
  </div>
</template>

<script setup lang="ts">
import { APIResponse } from "~/types/APIResponse";

const { data: response } = await useFetch<APIResponse>(
  "/api/articles/articlesHomePage"
);
</script>
