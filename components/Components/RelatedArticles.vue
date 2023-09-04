<template>
  <div class="flex flex-col items-center ">
    <ul class="list-disc">
      <li v-for="article in relatedArticles.articles">
        <p class="text-purple-800 font-medium hover:text-purple-950">
          <NuxtLink
            :to="`/blog/${article?.attributes?.category?.data.attributes.hierarchy}/${article?.attributes?.slug}`">{{ }}
          </NuxtLink>
        </p>
      </li>
      <li>
        <p class="text-purple-800 font-medium hover:text-purple-950">
          <NuxtLink to="#">5 Melhores Batedeiras Planetárias de Entrada</NuxtLink>
        </p>
      </li>
      <li>
        <p class="text-purple-800 font-medium hover:text-purple-950">
          <NuxtLink to="#">Os 6 Melhores Desumidificadores de Ar de 2023</NuxtLink>
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RelatedArticles } from '~/types/components/blocks/RelatedArticles';
import { fetchCategoryHierarchy } from '~/composables/componentsUtils';
const props = defineProps<{
  relatedArticles: RelatedArticles
}>()

// console.log(JSON.stringify(props.relatedArticles, null, 1))


</script>