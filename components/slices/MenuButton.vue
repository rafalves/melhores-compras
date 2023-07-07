<template>
  <div class="ml-6 md:hidden">
    <button @click="isOpen = !isOpen">
      <i class="text-3xl material-icons">menu</i>
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 bg-gray-500 opacity-75 z-40 cursor-default"
    ></button>
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-2/5 h-screen bg-blue-500 z-50"
    >
      <nav class="m-4">
        <NuxtLink
          class="block"
          v-for="category in props.categories"
          :key="category.id"
          :to="`/blog/${category.attributes.categoryName}
        `"
        >
          {{ category.attributes.categoryName }}</NuxtLink
        >
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Category } from "~/types/Category";
import { PropType, ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  categories: {
    type: Array as PropType<Category[]>,
  },
});

const isOpen = ref(false);

const handleEscape = (e: any) => {
  if (e.key === "Esc" || e.key === "Escape") {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener("keydown", handleEscape));

onBeforeUnmount(() => document.removeEventListener("keydown", handleEscape));
</script>
