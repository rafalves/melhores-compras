<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7">
    <nav
      class="hidden md:flex justify-center md:col-start-2 md:col-span-3 md:justify-around lg:col-start-2 lg:col-span-5"
    >
      <NuxtLink
        v-for="category in props.categories"
        :key="category.id"
        :to="`/blog/${category.attributes.categoryName}
        `"
      >
        {{ category.attributes.categoryName }}</NuxtLink
      >
    </nav>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { Category } from "~/types/Category";
import { PropType } from "vue";

const props = defineProps({
  categories: {
    type: Array as PropType<Category[]>,
  },
});
</script>
