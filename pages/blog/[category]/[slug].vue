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

          <div v-for="(component, index) in contentComponents" :key="component.order">

            <component v-if="component.__component === 'blocks.content' && component.order"
              :is="getComponentName(component.__component)" :content="getProps(component.order)" />

            <component v-else-if="component.__component === 'blocks.product-table' && component.order"
              :is="getComponentName(component.__component)" :table="getProps(component.order)" />

            <component v-else-if="component.__component === 'blocks.product-detais' && component.order"
              :is="getComponentName(component.__component)" :table="getProps(component.order)" />

            <component v-else-if="component.__component === 'blocks.row-table' && component.order"
              :is="getComponentName(component.__component)" :table="getProps(component.order)" />

            <component v-else-if="component.__component === 'blocks.oembed' && component.order"
              :is="getComponentName(component.__component)" :oembed="getProps(component.order)" />

            <component v-else-if="component.__component === 'blocks.content-ck-editor' && component.order"
              :is="getComponentName(component.__component)" :content="getProps(component.order)" />

            <component v-else-if="component.__component === 'adsense.ad-block' && component.order"
              :is="getComponentName(component.__component)" />


            <div v-else class="bg-red-400 w-full">{{ component.__component }}</div>
          </div>

          <!-- TODO: finish relatedArticles -->
          <!-- <ComponentsRelatedArticles v-if="relatedArticles" :related-articles="relatedArticles" /> -->

        </div>
      </article>
    </div>
    <div v-else>Erro ao carregar conteúdo</div>
  </div>
</template>
 

<script setup lang="ts">
import { Ref, ref, computed, resolveComponent } from 'vue'
import { useFetch, useRoute, useRuntimeConfig } from 'nuxt/app';
import { ContentComponent, StructureComponent } from "~/types/components/UnionComponents"
import { Content } from "~/types/components/blocks/Content";
import { ArticleData } from '~/types/ArticlePage';
import { getPostBySlug } from "~/composables/api/apiQuerys"
import { ProductTable } from "~/types/components/blocks/ProductTable";
import { TableRow } from '~/types/components/blocks/ProductRow';
import { ContentCKEditor } from '~/types/components/blocks/ContentCKEditor';
import { Oembed } from '~/types/components/blocks/Oembed';
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

function getComponentName(__component: string): any {
  switch (__component) {
    case 'blocks.content':
      return resolveComponent('Components/Content')
    case 'blocks.product-table':
      return resolveComponent('Components/ProductTable')
    case 'blocks.product-detais':
      return resolveComponent('Components/ProductDescription')
    case 'blocks.row-table':
      return resolveComponent('Components/SingleProduct')
    case 'blocks.oembed':
      return resolveComponent('Components/OEmbed')
    case 'blocks.content-ck-editor':
      return resolveComponent('Components/ContentCKEditor')
    case 'adsense.ad-block':
      return resolveComponent('Components/AdBlock')
    default:
      return '';
  }
}

function getProps(order: number): ContentComponent | string | undefined {
  const contentBlock = contentComponents.value.find(el => el.order === order)
  switch (contentBlock?.__component) {
    case 'blocks.content':
      return (contentBlock as Content).content
    case 'blocks.product-table':
      return contentBlock as ProductTable
    case 'blocks.product-detais':
      // product detais (type error, should be details) is just a placeholder for
      // the rendering every product of product-table in a more complete way
      return contentComponents.value.find(el => el.__component === 'blocks.product-table') as ProductTable
    case 'blocks.row-table':
      return contentBlock as TableRow
    case 'blocks.oembed':
      return (contentBlock as Oembed).oEmbed ?? ""
    case 'blocks.content-ck-editor':
      return (contentBlock as ContentCKEditor).contentCKEditor ?? ""
    case 'adsense.ad-block':
      return
    default:
      return '';
  }
}

const imgBanner = computed(() => articleData.value?.data?.attributes.imgBanner?.data.attributes.url ? `${config.public.apiImageBase}${articleData.value?.data.attributes.imgBanner.data.attributes.url}` : '/img/banner.jpg')

const imgBannerAlt = computed(() => articleData.value?.data?.attributes.imgBanner?.data.attributes.alternativeText ? articleData.value?.data.attributes.imgBanner.data.attributes.alternativeText : "Imagem banner")

let dataTable: ProductTable | null = null;
let dataRow: TableRow | null = null;
let contentCKEditor: string = "";
let oembed: string = "";

const foundComponent3 = contentComponents.value.find(el => {
  if (el?.__component === 'blocks.content-ck-editor') {
    contentCKEditor = (el as ContentCKEditor).contentCKEditor;
    return true; // Encerrar a iteração assim que encontrar o componente
  }
});

</script>

