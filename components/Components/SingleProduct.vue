<template>
  <div class="w-full ">

    <div :id="`produto${table.order}`"
      class="bg-white flex flex-col items-center  rounded-lg my-4 md:flex-col shadow-xl hover:bg-slate-50">

      <div class="flex flex-col items-center text-center  mt-2 w-full">
        <NuxtLink :to="table.ShopButton?.[0]?.link" target="_blank" class="font-semibold text-xl hover:underline"> {{table.title }}
        </NuxtLink>

      </div>

      <div class="font-extrabold flex justify-center my-2 md:justify-start">
        <div class="w-[200px] flex justify-center">
          <nuxt-img :src="useGetImageUrl(table)" :alt="table.image?.data.attributes.alternativeText" width="150" />
        </div>
      </div>

      <SlicesRatingStars class="my-4" v-if="table.rating" :rate="table.rating" />

      <ComponentsContent v-if="table.content" :content="table.content" class="p-2" />

      <ComponentsOEmbed v-if="table.oEmbed" :oembed="table.oEmbed" />

      <ComponentsProsCons :pros="table.pros" :cons="table.cons" />

    </div>
  </div>
</template> 

<script setup lang="ts">
import { useGetImageUrl } from '~/composables/componentsUtils'
import { TableRow } from '~/types/components/blocks/ProductRow';

defineProps<{
  table: TableRow,
}>();




</script>