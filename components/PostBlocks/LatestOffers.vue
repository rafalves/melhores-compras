<template>
  <section class="flex flex-col mx-2 md:mx-0">
    <div class="flex justify-between">
      <p class="flex justify-center md:justify-normal pt-2 pb-2 text-2xl font-poppins font-semibold">Últimas
        Ofertas
      </p>
      <NuxtLink to="/ultimos-posts"
        class="flex justify-center md:justify-normal pt-2 pb-2 mr-2 text-2xl font-poppins font-semibold hover:text-[#744EAA]">
        ver +
      </NuxtLink>
    </div>

    <div class="flex w-full ">
      <div class="flex gap-6 flex-wrap justify-center md:justify-start 2xl:justify-normal">


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
