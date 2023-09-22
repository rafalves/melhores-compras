<template>
  <section>
    <div class="justify-items-center shadow-lg bg-white p-2 md:p-5 rounded-xl font-montserrat">
      <p class="flex justify-center md:justify-normal pt-2 pb-2 text-2xl font-poppins font-semibold mb-5">Categorias</p>
      <div v-for="category in categoryData?.data">
       <p v-if="category.attributes.articles.data?.length" class="flex justify-center font-poppins font-bold text-xl text-[#744EAA] my-2">{{ category.attributes.label }}</p>
        <p v-for="article in category.attributes.articles.data" class="font-poppins hover:text-[#744EAA] hover:font-semibold hover:underline">
          <NuxtLink :to="`/posts/${category.attributes.hierarchy}/${article.attributes.slug}`" target="_blank">{{ useFormatData2(article.attributes.publishedAt) }} - {{ article.attributes.title }} </NuxtLink>
        </p>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">  
import { CategoryData } from '~/types/CategoryIndex';
const config = useRuntimeConfig()
const contentType =  'categories'
const contentQuery = '?sort[0]=label&populate[articles][sort][0]=publishedAt:desc'
const { data: categoryData } = await useFetch<CategoryData>(
  `${config.public.apiBase}${contentType}${contentQuery}`,
);
 
console.log(JSON.stringify(categoryData.value, null, 2)) 
</script>