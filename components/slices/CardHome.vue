<template>
  <div class="rounded-lg w-[18rem] h-[22rem] hover:shadow-2xl bg-white">
    <NuxtLink :to="`/blog/${article?.attributes?.category?.data.attributes.hierarchy}/${article?.attributes?.slug}`">
      <SlicesCardImage :imgUrl="`${config.public.apiImageBase}${article?.attributes.imgBanner.data.attributes.url}`"
        :imgAlt="article?.attributes.imgBanner.data.attributes.alternativeText" />

      <div class="mt-3 px-2 flex justify-around font-poppins font-semibold text-orange-600 text-xs">
        <Icon class="mt-[5px]" name="tabler:point-filled" color="#CCCFD5" />
        <p class="hover:underline"> {{ article?.attributes.category.data.attributes.label }}</p>
        <Icon class="mt-[5px]" name="tabler:point-filled" color="#CCCFD5" />
        <p class="hover:underline"> {{ createAt }}</p>
        <Icon class="mt-[5px]" name="tabler:point-filled" color="#CCCFD5" />
      </div>

      <div class="mt-3 px-3 line-clamp-3 h-[4.5rem]">
        <h1
          class="text-neutral-800 text-md font-poppins font-semibold tracking-tight leading-6 text-left hover:underline hover:text-[#744EAA]">
          {{ article?.attributes?.title }}
        </h1>
      </div>
      <p class="mt-2 px-3 text-justify text-sm font-medium line-clamp-3 text-slate-500">
        {{ article?.attributes?.lead }}
      </p>
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
