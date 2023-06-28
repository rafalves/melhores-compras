<script setup lang="ts">
import { Product } from "~/types/ProductPage";

const props = defineProps({
  products: {
    type: Object as PropType<Product[]>,
  },
});
</script>

<template>
  <table
    v-for="(product, index) in products"
    :key="product.data?.id"
    class="not-prose"
  >
    <tr class="px-10 flex items-center border-b hover:bg-slate-100">
      <td class="font-extrabold">{{ index + 1 }}°</td>
      <td>
        <img
          fit="cover"
          :src="product.data?.attributes?.imageUrl"
          width="60"
          height="60"
        />
      </td>
      <td class="flex-1 text-left">
        {{ product.data?.attributes?.name }}
      </td>
      <td class="hidden md:block flex-1 grow ml-5">
        <p v-for="pro in product.data?.attributes?.pros" :key="pro.id" class="">
          {{ pro.pros }}<br />
        </p>
      </td>
      <td class="flex-none">
        <NuxtLink
          :to="product.data?.attributes?.seller?.[0]?.prod_link"
          target="_blank"
          class="flex gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          ><i class="material-icons">shopping_cart</i>
          {{ product.data?.attributes?.shopButton?.[0].label }}
        </NuxtLink>
      </td>
    </tr>
  </table>
</template>

<style scoped></style>
