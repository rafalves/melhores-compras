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
import { CategoryData, Category } from "~/types/Category";
import { useCategoryState, fetchCategoryState } from "~/composables/states";

const { data: response } = await useFetch<APIResponse>(
  "/api/articles/articlesHomePage"
);

const { data: categoriesRes, error } = await useFetch<CategoryData>(
  "/api/findCategory/"
);

const categoryState = useCategoryState();
const categories = categoryState.value; //

if (!error.value) {
  fetchCategoryState(categoriesRes.value?.data as Category[]);
}

console.log(categoryState.value);
console.log(categories); //
</script>
