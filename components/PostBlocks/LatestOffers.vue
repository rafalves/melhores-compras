<template>
  <section class="flex flex-col tablet:mx-2">
    <div class="flex justify-between">
      <p class="flex justify-center md:justify-normal pt-5 pb-2 text-2xl font-poppins font-semibold">Últimas
        Ofertas
      </p>

    </div>

    <div>
      <div class="flex gap-3 tablet:gap-3 flex-wrap tablet::justify-start  2xl:justify-normal">

        <ClientOnly>
          <OffersProductCard v-if="data" v-for="offer in data.data" :data="offer" />
        </ClientOnly>
        <div>

        </div>
      </div>

    </div>
    <div ref="infinityScroll" />

    <div class="mx-auto flex justify-center mt-10">
      <Icon v-if="fetchingData" name="line-md:loading-alt-loop" color="#ff731d" width="100" height="100" />
    </div>

  </section>
</template> 

<script setup>

const infinityScroll = ref()
const fetchingData = ref(false)
const allDataFetched = ref(false)
const start = ref(0)
const limit = ref(16)
const offset = ref(16)
const data = ref(null)
const total = ref()

function observeLoadMore() {
  const observer = new IntersectionObserver(
    (entries) => {
      fetchingData.value = true

      if (entries[0].isIntersecting) {
        fetchSolutions()
      }
    },
    { threshold: 0.1, root: null, rootMargin: '200px' }
  )

  observer.observe(infinityScroll.value)
}

onMounted(() => observeLoadMore())

async function fetchSolutions() {
  if (!allDataFetched.value) {
    try {
      // Init loading 
      const { data: response, status } = await useFetch(`https://www.melhores-compras.online/dev/api/offers?sort[0]=updatedAt%3Adesc&populate[0]=image&pagination[start]=${start.value}&pagination[limit]=${limit.value}`)

      if (status.value === 'success') {
        if (!data.value) {
          data.value = response.value
        }
        fetchingData.value = false
        data.value.data.push(...response.value.data)
        total.value = data.value.meta.pagination.total
        if (limit.value + offset >= total.value) {
          allDataFetched.value = true
        }
        limit.value += offset.value
        start.value += offset.value
      }
    } catch (error) {
      fetchingData.value = false
      console.log(error)
    }
  }
}

await fetchSolutions()


// const { data, error } = await useFetch('https://www.melhores-compras.online/dev/api/offers?sort[0]=publishedAt%3Adesc&populate[0]=image')

// console.log(JSON.stringify(data.value, null, 2))


</script>
