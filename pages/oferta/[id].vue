<template>
  <div class="mt-10">
    <div class="flex flex-col justify-center items-center gap-3">
      <p class="font-poppins text-base font-semibold mx-5">{{ data.data.attributes.image.data[0].attributes.name }}</p>
      <div>
        <img class="object-scale-down h-52" :src="`${baseURL}${data.data.attributes.image.data[0].attributes.url}`"
          :alt="`${data.data.attributes.image.data[0].attributes.name}`">
      </div>
      <div class="mt-5">
        <p>Redirecionando...</p>
        <p class="-m-20 -z-1">
          <Icon name="eos-icons:three-dots-loading" color="gray" size="300" />
        </p>
      </div>
    </div>
    <div class="tablet:h-52" />
  </div>
</template>

<script setup>
const baseURL = 'https://www.melhores-compras.online/dev'

const id = useRoute().params.id
// console.log(id)

const { data, status } = await useFetch(`https://www.melhores-compras.online/dev/api/offers/${id}?populate=*`)


const img = computed(() => data.value.data.attributes.image.data[0].attributes.url ? `https://www.melhores-compras.online/dev${data.value.data.attributes.image.data[0].attributes.url}` : '')

// console.log('img: ' + img.value)

useHead({
  title: data.value.data.attributes.name,
  titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | Melhores Compras Online` : 'Melhores Compras Online',
  meta: [
    { name: 'description', content: data.value.data.attributes.name },
  ]
})

useSeoMeta({
  twitterCard: () => 'summary_large_image',
  twitterSite: () => '@melhorescomprs',
  twitterCreator: () => '@melhorescomprs',
  twitterTitle: () => data.value.data.attributes.name,
  twitterDescription: () => data.value.data.attributes.name,
  twitterImage: () => 'https://www.melhores-compras.online/dev/uploads/Untitled_a9fca56a59.jpg?12345',
  twitterImageAlt: () => data.value.data.attributes.name,
})

setTimeout(async () => {
  await navigateTo(data.value.data.attributes.prod_link, { external: true })
}, 2000)

// console.log(JSON.stringify(data.value.data.attribute, null, 2))

</script>