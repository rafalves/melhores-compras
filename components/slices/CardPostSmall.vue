<template>
  <div class="rounded-lg w-[18rem] h-[14rem]">
    <NuxtLink :to="`/posts/${article?.attributes?.category?.data.attributes.hierarchy}/${article?.attributes?.slug}`">
      <SlicesCardImageSmall :imgUrl="`${config.public.apiImageBase}${article?.attributes.imgBanner.data.attributes.url}`"
        :imgAlt="article?.attributes.imgBanner.data.attributes.alternativeText" />

      <div class="mt-2  flex justify-start gap-6 font-poppins font-semibold text-orange-600 text-xs">
        <div class="flex gap-2">
          <Icon name="material-symbols:bookmarks-outline" color="#1E293B" size="15px" />
          <p class="hover:underline"> {{ article?.attributes.category.data.attributes.label }}</p>
        </div>
        <div class="flex gap-2">
          <Icon name="material-symbols:timer-outline" color="#1E293B" size="15px" />
          <p class="hover:underline"> {{ createAt }}</p>
        </div>
      </div>

      <div class="mt-1 line-clamp-3 h-[4.5rem]">
        <h1
          class="text-neutral-800 text-md font-poppins font-semibold tracking-tight leading-6 text-left hover:underline hover:text-[#744EAA]">
          {{ article?.attributes?.title }}
        </h1>
      </div>

    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Article } from "~/types/ArticleLatest";
import { useFormatData } from "~/composables/useFormatData";

const config = useRuntimeConfig();
const props = defineProps({
  article: {
    type: Object as PropType<Article>,
  },
});

const createAt = computed(() =>
  props.article?.attributes?.createdAt
    ? useFormatData(props.article?.attributes.createdAt)
    : ""
);

</script>
 
<style scoped>
h1 {
  text-wrap: balanced;
}
</style>
