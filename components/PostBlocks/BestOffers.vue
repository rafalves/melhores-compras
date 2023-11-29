<template>
  <section class="flex flex-col tablet:mx-2">
    <div class="flex justify-between">
      <p class="flex justify-center md:justify-normal pt-5 pb-2 text-2xl font-poppins font-semibold">Ofertas em Destaques
      </p>

    </div>

    <div>
      <div class="flex gap-3 tablet:gap-3 flex-wrap tablet:justify-start  2xl:justify-normal ">
        <OffersBestProduct v-if="data" v-for="offer in data" :data="offer" />
      </div>

    </div>
    <div ref="infinityScroll" />

    <div class="mx-auto flex justify-center mt-10">
      <Icon v-if="fetchingData" name="line-md:loading-alt-loop" color="#ff731d" width="100" height="100" />
    </div>

  </section>
</template> 

<script setup>
const OFFSET = 16
const infinityScroll = ref()

const data = ref([])
const total = ref(0)
const fetchingData = ref(false)

const { data: res, status } = await useFetch(`https://www.melhores-compras.online/dev/api/offers?sort[0]=updatedAt:desc&populate[0]=image&pagination[start]=0&pagination[limit]=5`)
if (status.value === 'success') {
  data.value.push(...res.value.data)
  total.value = res.value.meta.pagination.total
}



</script>
