<template>
  <main class="flex font-mono">
    <div id="col-lef" class="w-1/6 flex-none hidden md:block">teste</div>
    <div id="col-center" class="flex-1 w-2/6">
      {{ response?.data.attributes.content }}
    </div>
    <div id="col-right" class="w-1/6 flex-none hidden md:block">teste</div>
  </main>
</template>
<script setup lang="ts">
import { Article } from "~/types/ArticlePage";
const route = useRoute();
const config = useRuntimeConfig();
const slug = route.params.slug;

const { data: response } = await useFetch<Article>(`/api/articles/${slug}`);

// console.log("slug " + slug);
</script>

<style scoped></style>
