<script setup lang="ts">
import { Article } from "~/types/ArticlePage";
import { Product } from "~/types/ProductPage";
const route = useRoute();
const config = useRuntimeConfig();
const slug = route.params.slug;

const { data: response, error } = await useFetch<Article>(
  `/api/articles/${slug}`
);
const content = computed(() =>
  response.value?.data?.attributes.content_ckeditor != null
    ? response.value?.data?.attributes.content_ckeditor.replaceAll(
        "/uploads",
        `${config.public.apiBase}/uploads`
      )
    : "ops... algo deu errado..."
);

const productsIds = response.value?.data?.attributes.products?.data;
let products: Product[] = [];

if (productsIds) {
  productsIds.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

  for (const element of productsIds) {
    if (typeof element.id !== "number" || element.id === undefined) continue;

    {
      const { data } = await useFetch<Product>(
        `/api/findProduct?id=${element.id}`
      );

      console.log("passei aqui ");
      console.log(new Date().toLocaleTimeString());
      // console.log(JSON.stringify(data.value.data));
      // console.log(Object.keys(data._value.data.attributes.pros[0].pros));

      if (data) products.push(data.value as Product);
    }
  }
}
// console.log(Object.keys(products));
</script>
<template>
  <div class="flex font-mono pt-5 py-11">
    <div id="col-center" class="flex-1 w-2/6">
      <div v-if="!error">
        <div
          class="prose max-w-none ck-content shadow-lg rounded-xl p-6 mt-2 bg-white"
        >
          <div v-for="product in products" :key="product.data?.id"></div>
          <ProductTable :products="products" />
          <div v-html="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
