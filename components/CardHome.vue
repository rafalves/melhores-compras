<template>
  <div class="m-2 w-[320px] h-[350px] card hover:opacity-80 relative bg-white">
    <NuxtLink
      :to="`/blog/${categoryUrl}/${article?.attributes?.slug}?category=${categories}`"
    >
      <span
        class="absolute top-0 bg-sky-500 px-5 text-neutral-100 font-medium uppercase opacity-80"
        >{{ categoryUrl }}</span
      >
      <img
        class="rounded rounded-b-none h-[180px] w-[380px]"
        :src="imgUrl"
        :alt="
          article?.attributes?.image_cover?.data?.attributes.alternativeText
        "
      />
      <p
        class="text-xs text-right mr-2 absolute top-[165px] -right-2 bg-slate-100 px-3 opacity-80"
      >
        <i>publicado em {{ createAt }}</i>
      </p>
      <div class="px-2 pb-2 mx-2 my-2">
        <h1>
          <p class="text-neutral-900 text-xl font-semibold">
            {{ article?.attributes?.title }}
          </p>
        </h1>
        <p class="text-justify pt-2 text-base line-clamp-3">
          {{ article?.attributes?.meta_description }}
        </p>
        <p
          v-if="article?.attributes?.author?.data?.attributes?.name"
          class="text-xs pt-1 absolute bottom-1 right-3"
        >
          por
          <img
            class="inline-block h-5 w-5 rounded-full"
            :src="authorImg"
            alt=""
          />
          {{ article?.attributes.author?.data.attributes.name }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Article } from "~/types/Article";
import { Author } from "~/types/Author";
import { useFormatData } from "~/composables/useFormatData";

const config = useRuntimeConfig();

const categoryUrl = computed(() =>
  props.article?.attributes?.category?.data?.attributes?.categoryName != null
    ? props.article?.attributes.category?.data?.attributes?.categoryName
    : "diversos"
);
const imgUrl = computed(() =>
  props.article?.attributes?.image_cover?.data?.attributes.formats.small?.url !=
  null
    ? `${config.public.apiImageBase}${props.article?.attributes.image_cover.data?.attributes.formats.small?.url}`
    : "https://via.placeholder.com/300x500"
);

const createAt = computed(() =>
  props.article?.attributes?.createdAt
    ? useFormatData(props.article?.attributes.createdAt)
    : "teste"
);

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
  },
});

const id = computed(() =>
  props.article?.attributes?.author?.data?.id != null
    ? props.article?.attributes.author?.data.id
    : (1 as number)
);
const { data: author, error } = await useFetch<Author>(
  `/api/findAuthor?id=${id.value}`
);

if (error.value != null) {
  console.log(error.value);
}
// console.log(JSON.stringify(data));

const authorImg = computed(() =>
  author.value?.data?.attributes?.photo?.data?.attributes?.formats?.thumbnail
    ?.url != null
    ? `${config.public.apiImageBase}${author.value?.data.attributes?.photo?.data?.attributes?.formats?.thumbnail?.url}`
    : "image not loaded"
);

const categoryState = useCategoryState();
const categories = categoryState.value; //
</script>
<style scoped>
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
