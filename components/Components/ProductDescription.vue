<template>
  <div class="w-full ">

    <div v-for="row in table?.tableRows" :key="row.id" :id="`produto${row.order}`"
      class="bg-white flex flex-col items-center  rounded-lg my-4 md:flex-col shadow-xl hover:bg-slate-50">

      <div class="flex flex-col items-center text-center  mt-2 w-full">
        <NuxtLink :to="row.ShopButton?.[0]?.link" target="_blank" class="font-semibold text-xl hover:underline"> {{
          row.order + "º "
          + row.title }}
        </NuxtLink>

      </div>

      <div class="font-extrabold flex justify-center my-2 md:justify-start">
        <div class="w-[200px] flex justify-center">
          <nuxt-img :src="useGetImageUrl(row)" :alt="row.image?.data.attributes.alternativeText" width="150" />
        </div>
      </div>

      <SlicesRatingStars class="my-4" v-if="row.rating" :rate="row.rating" />

      <ComponentsContent v-if="row.content" :content="row.content" class="p-2" />

      <ComponentsOEmbed v-if="row.oEmbed" :oembed="row.oEmbed" />

      <ComponentsProsCons :pros="row.pros" :cons="row.cons" />

      

    </div>
  </div>
</template> 

<script setup lang="ts">
import { ProductTable } from '~/types/components/blocks/ProductTable';
import { useGetImageUrl } from '~/composables/componentsUtils'

defineProps<{
  table: ProductTable | null,
}>();




</script>