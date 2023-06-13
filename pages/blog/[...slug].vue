<template>
  <main class="flex font-mono">
    <div id="col-lef" class="w-1/6 flex-none hidden md:block">left col</div>
    <div id="col-center" class="flex-1 w-2/6">
      <div v-if="!error">
        <div
          class="prose max-w-none ck-content shadow-lg rounded-xl p-6 mt-2 bg-white"
        >
          <div v-html="content"></div>
        </div>
      </div>
      <div id="col-right" class="w-1/6 flex-none hidden md:block">
        right col
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Article } from "~/types/ArticlePage";
const route = useRoute();
const config = useRuntimeConfig();
const slug = route.params.slug;

const { data: response, error } = await useFetch<Article>(
  `/api/articles/${slug}`
);

const content = computed(() =>
  response.value?.data?.attributes.content_ckeditor != null
    ? response.value?.data?.attributes.content_ckeditor.replaceAll(
        "/uploads",
        `${config.public.apiBase}/uploads`
      )
    : "erro ao carregar conteúdo"
);

// console.log(JSON.stringify(response.value?.data?.id));

// const { data: response } = (await useFetch)<Article>`/api/articles/${slug}`;
</script>

<style scoped></style>
