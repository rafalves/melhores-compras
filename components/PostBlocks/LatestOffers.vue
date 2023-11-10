<template>
  <section class="flex flex-col tablet:mx-2">
    <div class="flex justify-between">
      <p class="flex justify-center md:justify-normal pt-5 pb-2 text-2xl font-poppins font-semibold">Últimas
        Ofertas
      </p>

    </div>

    <div>
      <div class="flex gap-3 tablet:gap-3 flex-wrap justify-center  2xl:justify-normal">

        <OffersProductCard v-if="data" v-for="offer in data.data" :data="offer" />

      </div>
    </div>
  </section>
</template> 

<script setup>

const { data, error } = await useFetch('https://www.melhores-compras.online/dev/api/offers?sort[0]=publishedAt%3Adesc&populate[0]=image')
// const { data, error } = await useFetch('https://www.melhores-compras.online/dev/api/offers/9?populate=*')

// console.log(JSON.stringify(data.value, null, 2))

if (error.value) error.value

</script>
