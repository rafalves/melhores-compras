<template>
  <div class="card hover:opacity-90 rounded">
    <NuxtLink :to="`/blog/${categoryUrl}/${article?.attributes.slug}`">
      <img
        class="rounded rounded-b-none"
        :src="imgUrl"
        :alt="article?.attributes.image_cover.data?.attributes.alternativeText"
        style="width: 50%, height: 50%;"
      />
      <div class="p-2 pt-1">
        <h4>
          <b>{{ article?.attributes.title }}</b>
        </h4>
        <p class="text-justify">{{ article?.attributes.meta_description }}</p>
        <p class="text-xs text-right">
          <i>publicado em {{ article?.attributes.createdAt }}</i>
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Article } from "~/types/Article";

const config = useRuntimeConfig();

const categoryUrl = computed(() =>
  props.article?.attributes.category?.data?.attributes?.categoryName != null
    ? props.article?.attributes.category?.data?.attributes?.categoryName
    : "diversos"
);
const imgUrl = computed(() =>
  props.article?.attributes.image_cover.data?.attributes.formats.small?.url !=
  null
    ? `${config.public.apiImageBase}${props.article?.attributes.image_cover.data?.attributes.formats.small?.url}`
    : "https://via.placeholder.com/300x500"
);

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
  },
});
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
