<template>
  <div>

    <div v-if="!error">
      <article>
        <div class="justify-items-center shadow-lg bg-white p-2 md:p-5 rounded-xl font-poppins">

          <SlicesBreadcrumbs />

          <ComponentsArticleInfos
            v-if="articleData?.data.attributes.publishedAt && articleData?.data.attributes.authors?.data?.[0].attributes.name && articleData?.data.attributes.minsToRead"
            :publishedAt="articleData?.data?.attributes.publishedAt"
            :authorName="articleData?.data?.attributes.authors.data[0].attributes.name"
            :minsToRead="articleData?.data.attributes.minsToRead" />

          <div class="mb-3" />


          <h1 class="font-bold text-xl md:text-3xl font-poppins text-slate-800 text-justify">
            {{ articleData?.data?.attributes.title ?? 'Missing Title' }}</h1>

          <p class="text-sm italic text-slate-800 text-justify py-3">
            {{ articleData?.data.attributes.lead }}</p>

          <nuxt-img fit="cover" class="rounded-2xl  h-[10rem] md:h-[18rem] w-full" :src=imgBanner :alt="imgBannerAlt"
            loading="lazy" />

          <div class="h-4" />

          <!-- contents starts here -->

          <ComponentsRelatedArticles :related-articles="relatedArticles" />

          <ComponentsContentCKEditor :content="contentCKEditor" />

          <ComponentsProductTable :table="dataTable" />

          <ComponentsProductDescription :table="dataTable" />


          <ComponentsContent v-for="content in contentComponents" :key="content.id"
            :content="getContentContent(content)" />

          <ComponentsAdBlock />


          <ComponentsSingleProduct v-if="dataRow" :table="dataRow" />

        </div>
      </article>
    </div>
    <div v-else>Erro ao carregar conteúdo</div>
  </div>
</template>
 

<script setup lang="ts">
import { Ref, ref, computed } from 'vue'
import { useFetch, useRoute, useRuntimeConfig } from 'nuxt/app';
import { ContentComponent, StructureComponent } from "~/types/components/UnionComponents"
import { Content } from "~/types/components/blocks/Content";
import { ArticleData } from '~/types/ArticlePage';
import { getPostBySlug } from "~/composables/api/apiQuerys"
import { ProductTable } from "~/types/components/blocks/ProductTable";
import { TableRow } from '~/types/components/blocks/ProductRow';
import { ContentCKEditor } from '~/types/components/blocks/ContentCKEditor';
import { RelatedArticles } from '~/types/components/blocks/RelatedArticles';
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
  const components = articleData.value?.data.attributes.components;

  if (Array.isArray(components)) {
    contentComponents.value = Array.from(components)
      .filter((obj): obj is ContentComponent => 'order' in obj)
      .sort((a, b) => (a.order || 0) - (b.order || 0));

    structureComponents.value = components
      .filter((obj): obj is StructureComponent => !('order' in obj));
  }
}


const imgBanner = computed(() => articleData.value?.data?.attributes.imgBanner?.data.attributes.url ? `${config.public.apiImageBase}${articleData.value?.data.attributes.imgBanner.data.attributes.url}` : '/img/banner.jpg')

const imgBannerAlt = computed(() => articleData.value?.data?.attributes.imgBanner?.data.attributes.alternativeText ? articleData.value?.data.attributes.imgBanner.data.attributes.alternativeText : "Imagem banner")

const getContentContent = (content: ContentComponent): string => {
  if (content?.__component === 'blocks.content') {
    const contentWithType = content as Content; // Type assertion to Content
    return contentWithType.content;
  }
  return "";
}

let dataTable: ProductTable | null = null;
let dataRow: TableRow | null = null;
let contentCKEditor: string = "";
let relatedArticles: RelatedArticles | null = null

const foundComponent = contentComponents.value.find(el => {
  if (el?.__component === 'blocks.product-table') {
    dataTable = el as ProductTable;
    return true; // Encerrar a iteração assim que encontrar o componente
  }
});
const foundComponent2 = contentComponents.value.find(el => {
  if (el?.__component === 'blocks.row-table') {
    dataRow = el as TableRow;
    return true; // Encerrar a iteração assim que encontrar o componente
  }
});

const foundComponent3 = contentComponents.value.find(el => {
  if (el?.__component === 'blocks.content-ck-editor') {
    contentCKEditor = (el as ContentCKEditor).contentCKEditor;
    return true; // Encerrar a iteração assim que encontrar o componente
  }
});

const foundComponent4 = structureComponents.value.find(el => {
  if (el?.__component === 'blocks.related-articles') {
    relatedArticles = el as RelatedArticles;
    return true; // Encerrar a iteração assim que encontrar o componente
  }
});

// console.log(JSON.stringify(relatedArticles, null, 2))


if (!foundComponent) {
  // Trate o caso quando o componente não é encontrado
}


</script>

