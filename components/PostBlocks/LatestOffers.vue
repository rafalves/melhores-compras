<template>
  <section class="flex flex-col tablet:mx-2">
    <div class="flex justify-between">
      <p class="flex justify-center md:justify-normal pt-5 pb-2 text-2xl font-poppins font-semibold">Últimas
        Ofertas
      </p>

    </div>

    <div>
      <div class="flex gap-3 tablet:gap-3 flex-wrap tablet:justify-start  2xl:justify-normal tablet:max-w-[1000px]">
        <OffersProductCard v-if="data" v-for="offer in data" :data="offer" />
      </div>

    </div>
    <div ref="infinityScroll" />

    <div class="mx-auto flex justify-center mt-10">
      <Icon v-if="fetchingData" name="line-md:loading-alt-loop" color="#ff731d" width="100" height="100" />
    </div>

  </section>
</template> 

<script setup>
const OFFSET = 50
const infinityScroll = ref()

const data = ref([])
const total = ref(50)
const start = ref(50)
const limit = ref(OFFSET)
const fetchingData = ref(false)

const { data: res, error, status } = await useFetch('https://www.melhores-compras.online/dev/api/offers?sort[0]=updatedAt:desc&populate[0]=image&pagination[start]=0&pagination[limit]=50')
// const { data: res, error, status } = await useFetch(`https://www.melhores-compras.online/dev/api/offers?sort[0]=updatedAt:desc&populate[0]=image&pagination[start]=0&pagination[limit]=16`)
if (status.value === 'success') {
  data.value.push(...res.value.data)
  total.value = res.value.meta.pagination.total
}


async function loadData() {
  if (start.value + limit.value < total.value) {
    start.value += OFFSET
    limit.value += OFFSET

    const { data: response, status } = await useFetch(`https://www.melhores-compras.online/dev/api/offers?sort[0]=updatedAt:desc&populate[0]=image&pagination[start]=${start.value}&pagination[limit]=${limit.value}`
      // ,
      // {
      //   query: {
      //     "pagination[start]": start.value,
      //     "pagination[limit]": limit.value
      //   },
      // }
    )

    if (status.value === 'success') {
      // console.log(JSON.stringify(response.value.data, null, 2))
      data.value.push(...response.value.data)
      total.value = response.value.meta.pagination.total
    }
  }
  fetchingData.value = false
}

function observeLoadMore() {
  const observer = new IntersectionObserver(
    (entries) => {
      fetchingData.value = true
      if (entries[0].isIntersecting) {
        loadData()
      }
    },
    {
      threshold: 1,
    }
  )
  observer.observe(infinityScroll.value)
}

onMounted(() => observeLoadMore())

</script>
