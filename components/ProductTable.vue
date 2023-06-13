<template>
  <div class="w-screen">
    <table
      v-for="(produto, index) in produtos"
      :key="produto.id"
      class="flex w-2/3 flex-col border"
    >
      <tr class="px-4 flex items-center py-0 border-b hover:bg-slate-100">
        <td class="flex-none font-extrabold">{{ index + 1 }}°</td>
        <td>
          <img fit="cover" :src="produto.imageUrl" width="60" height="60" />
        </td>
        <td class="flex-1 grow text-left">
          {{ produto.title }}
        </td>
        <td class="flex-1 grow ml-5">
          <p v-for="(pro, index) in row.pros" class="size">{{ pro }}<br /></p>
        </td>
        <td class="flex-none">
          <NuxtLink
            :to="row.prodLink"
            target="_blank"
            class="flex gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            ><i class="material-icons">shopping_cart</i>
            VER PREÇO
          </NuxtLink>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup lang="ts">
import { Component } from "~/types/Article";

const props = defineProps({
  produtos: {
    type: Array as PropType<Component[]>,
  },
});
</script>

<style scoped>
p.size {
  font-size: 12px;
}
</style>
