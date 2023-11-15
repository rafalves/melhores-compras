<template>
  <div class="mt-10">
    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<script setup>

const id = useRoute().params.id
console.log(id)

const { data, status } = await useFetch(`https://www.melhores-compras.online/dev/api/offers/${id}?populate=*`)


const img = computed(() => data.value.data.attributes.image.data[0].attributes.url ? `https://www.melhores-compras.online/dev${data.value.data.attributes.image.data[0].attributes.url}` : '')

console.log('img: ' + img.value)

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
  twitterImage: () => 'https://melhores-compras.online/dev/uploads/Untitled_a9fca56a59.jpg?1',
  twitterImageAlt: () => data.value.data.attributes.name,
})


// if (status.value === 'success') {
//   await navigateTo(data.value.data.attributes.prod_link, { external: true })

//   console.log(JSON.stringify(data.value.data.attributes.prod_link, null, 2))
// }
</script>