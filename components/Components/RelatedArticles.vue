<template>
  <div class="flex flex-col items-center ">
    <!-- <ul class="list-disc">
      <li v-for="article in articles">
        <p class="text-purple-800 font-medium hover:text-purple-950">
          <NuxtLink
            :to="`/blog/${article.category}/${article.url}`">{{ }}
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
    </ul> -->
  </div>
</template>

<script setup lang="ts">
import { RelatedArticles } from '~/types/components/blocks/RelatedArticles';
import { fetchCategoryHierarchy } from '~/composables/componentsUtils';
const props = defineProps<{
  relatedArticles: RelatedArticles
}>()

const articles: { url: string, category: string }[] = []

if (props.relatedArticles) {
  console.log('1');
  const articlePromises = (props.relatedArticles.articles || []).map(async (el) => {
    if (el.attributes.slug) {
      const category = fetchCategoryHierarchy(el.attributes.slug);
      return {
        url: el.attributes.slug, category: category ||
          ''
      };
    }
  });

  const resolvedArticles = await Promise.all(articlePromises);

  // articles.push(...resolvedArticles);
  console.log(articles);
}



</script>