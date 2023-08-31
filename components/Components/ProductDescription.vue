
<template>
  <div class="w-full bg-yellow-200">
    teste
    <div v-for="row in table?.tableRows" :key="row.id"
      class="bg-white flex flex-col items-center  rounded-lg my-4 md:flex-row shadow-xl hover:bg-slate-50">

      <div class="flex flex-col items-center text-center md:text-start md:items-start mt-2 w-full">
        <NuxtLink :to="`#${row.order}`" target="_blank" class="font-semibold text-xl hover:underline"> {{ row.order + "º "
          + row.title }}
        </NuxtLink>
        <p class="prose mt-3"> {{ row.description }}
        </p>
      </div>

      <div class="font-extrabold flex justify-center my-2 md:justify-start">
        <div class="w-[200px] flex justify-center">
          <nuxt-img :src="useGetImageUrl(row)" :alt="row.image?.data.attributes.alternativeText" width="150" />
        </div>
      </div>
      <!-- <div class="flex">
        <Icon v-if="row.rating" v-for="(icon, index) in 5" :key="index" class="-mt-[4px]" :name="icon[index]"
          color="#FFB315" size="25px" />
      </div> -->
    </div>
  </div>
</template> 

<script setup lang="ts">
import { ProductTable } from '~/types/components/blocks/ProductTable';
import { useGetImageUrl, useGetStarRating } from '~/composables/apiUtils'

defineProps<{
  table: ProductTable | null,
}>();




</script>