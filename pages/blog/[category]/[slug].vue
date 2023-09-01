<template>
  <div class="my-5 w-full bg-slate-200">

    <div v-if="!error">
      <article>
        <div class="justify-items-center shadow-lg bg-white p-2 md:p-5 rounded-xl font-poppins">

          <SlicesBreadcrumbs />

          <ComponentsArticleInfos
            v-if="articleData?.data.attributes.publishedAt && articleData?.data.attributes.authors.data[0].attributes.name && articleData?.data.attributes.minsToRead"
            :publishedAt="articleData?.data.attributes.publishedAt"
            :authorName="articleData?.data.attributes.authors.data[0].attributes.name"
            :minsToRead="articleData?.data.attributes.minsToRead"
            :imgAvatar="articleData?.data.attributes.authors.data[0].attributes.photo.data.attributes.formats?.thumbnail?.url"
            :imgAlt="articleData?.data.attributes.authors.data[0].attributes.photo.data.attributes.alternativeText" />

          <div class="mb-3" />


          <h1 class="font-bold text-xl md:text-3xl font-poppins text-slate-800 text-justify">
            {{ articleData?.data?.attributes.title ?? 'Missing Title' }}</h1>

          <p class="text-sm italic text-slate-800 text-justify py-3">
            {{ articleData?.data.attributes.lead }}</p>

          <nuxt-img fit="cover" class="rounded-2xl  h-[10rem] md:h-[18rem] w-full" :src=imgBanner :alt="imgBannerAlt"
            loading="lazy" />


          <div class="h-4" />

          <!-- contents starts here -->

          <ComponentsProductDescription :table="dataTable" />

          #######
          <ComponentsProductTable :table="dataTable" />

          <ComponentsContent v-for="content in contentComponents" :key="content.id"
            :content="getContentContent(content)" />

        </div>
      </article>
    </div>
    <div v-else>Erro ao carregar conteúdo</div>
  </div>
</template>
 

<script setup lang="ts">
import { ContentComponent, StructureComponent } from "~/types/components/UnionComponents"
import { Content } from "~/types/components/blocks/Content";
import { ArticleData } from '~/types/ArticlePage';
import { getPostBySlug } from "~/composables/api/apiQuerys"
import { ProductTable } from "~/types/components/blocks/ProductTable";
const route = useRoute();
const config = useRuntimeConfig();
const slug = route.params.slug;
const contentType = `articles/find-by-slug/${slug}`

const { data: articleData, error } = await useFetch<ArticleData>(
  `${config.public.apiBase}${contentType}${getPostBySlug}`
);

const contentComponents: Ref<(ContentComponent)[]> = ref([])
const structureComponents: Ref<(StructureComponent)[]> = ref([])

if (!error.value) {
  contentComponents.value = articleData.value!.data.attributes.components
    .filter((obj): obj is ContentComponent => 'order' in obj)
    .slice()
    .sort((a, b) => (a.order || 0) - (b.order || 0));
  structureComponents.value = articleData.value!.data.attributes.components
    .filter((obj): obj is StructureComponent => !('order' in obj))
}


const imgBanner = computed(() => articleData.value?.data.attributes.imgBanner.data.attributes.url ? `${config.public.apiImageBase}${articleData.value?.data.attributes.imgBanner.data.attributes.url}` : '/img/banner.jpg')

const imgBannerAlt = computed(() => articleData.value?.data.attributes.imgBanner.data.attributes.alternativeText ? articleData.value?.data.attributes.imgBanner.data.attributes.alternativeText : "Imagem banner")

const getContentContent = (content: ContentComponent): string => {
  if (content.__component === 'blocks.content') {
    const contentWithType = content as Content; // Type assertion to Content
    return contentWithType.content;
  }
  return "";
}

let dataTable: ProductTable | null = null;

const foundComponent = contentComponents.value.find(el => {
  // console.log(JSON.stringify(el.__component));
  if (el.__component === 'blocks.product-table') {
    dataTable = el as ProductTable;
    return true; // Encerrar a iteração assim que encontrar o componente
  }
});

if (!foundComponent) {
  // Trate o caso quando o componente não é encontrado
}

</script>

