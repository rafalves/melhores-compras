<template>
  <div
    id="header"
    class="flex-none bg-sky-400 w-full py-2 shadow-xl fixed z-50 items-center"
  >
    <div class="w-full grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7">
      <header
        class="flex justify-center md:col-start-2 md:col-span-3 md:justify-center lg:col-start-2 lg:col-span-5 lg:justify-start"
      >
        <SlicesMenuButton :categories="categories" />
        <div class="flex w-full justify-center items-center">
          <HeaderLogo />
          <!-- social links -->
        </div>
      </header>
    </div>
    <HeaderCategories :categories="categories" />
  </div>
</template>

<script setup lang="ts">
import { Category } from "~/types/Category";

let categories: Category[] = await fetchCategories();
</script>
