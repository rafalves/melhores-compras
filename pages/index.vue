<template>
  <main class="flex">
    <div id="col-lef" class="w-1/6 flex-none hidden md:block"></div>
    <div id="col-center" class="flex-1 w-2/6">
      <section class="lg:px-[15%] px-[5%]">
        <h1 class="lg:text-2xl text-2xl leading-9 font-semibold text-center">
          Veja nossos ultimos posts...
        </h1>
        <p
          class="text-center uppercase font-medium tracking-wider my-5 text-gray-500"
        >
          Blog Posts
        </p>
        <div v-for="article in response?.data" :key="article.id">
        <CardHome :article="article" />
          
        </div>
      </section>
    </div>
    <div id="col-right" class="w-1/6 flex-none hidden md:block"></div>
  </main>
</template>

<script setup lang="ts">
import { APIResponse } from "~/types/APIResponse";

const { data: response } = await useFetch<APIResponse>("/api/articles/articlesHomePage");


// console.log(JSON.stringify(response?.value));
</script>
