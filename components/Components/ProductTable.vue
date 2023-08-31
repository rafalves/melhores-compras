
<template>
  <div class="flex justify-center">

    <table class="w-full">
      <tbody>
        <tr v-for="row in table?.tableRows" :key="row.id"
          class="bg-white flex flex-col items-center  rounded-lg relative my-4 md:flex-row shadow-xl hover:bg-slate-50">

          <td class=" font-extrabold flex justify-center my-2 md:justify-start  ">
            <div class="w-[200px] flex justify-center">
              <nuxt-img :src="useGetImageUrl(row)" :alt="row.image?.data.attributes.alternativeText" width="60" />
            </div>
            <div
              class="flex justify-center items-center absolute top-0 left-0 bg-slate-300 w-[2rem] h-[2rem] m-2 rounded-md prose">
              {{ row.order }}º
            </div>
          </td>

          <td class="flex flex-col items-center text-center md:text-start md:items-start mt-2 w-full">
            <NuxtLink :to="`#${row.order}`" target="_blank" class="font-semibold text-xl hover:underline"> {{ row.title }}
            </NuxtLink>
            <p class="prose mt-3">{{ row.description }}
            </p>
          </td>

          <td class="mb-5 mt-3">
            <div class="md:w-[120px]">
              <NuxtLink :to="row.ShopButton?.[0]?.link ?? 'https://amzn.to/3stFApX'" target="_blank"
                class=" rounded-md prose text-white font-medium bg-amber-600 hover:bg-amber-700 py-2 px-4 ">
                {{ row.ShopButton?.[0]?.label ?? "Ver Preço" }}</NuxtLink>
            </div>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template> 

<script setup lang="ts">
import { ProductTable } from '~/types/components/blocks/ProductTable';
import { useGetImageUrl } from '~/composables/apiUtils'

defineProps<{
  table: ProductTable | null,
}>();




</script>