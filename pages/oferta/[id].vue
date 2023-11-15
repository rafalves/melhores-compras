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

const { data, status } = await useFetch(`https://www.melhores-compras.online/dev/api/offers/404?populate=*`)


const img = computed(() => data.value.data.attributes.image.data[0].attributes.url ? `https://www.melhores-compras.online/dev${data.value.data.attributes.image.data[0].attributes.url}` : '')

console.log(img)

useHead({
  title: data.value.data.attributes.name,
  titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | Melhores Compras Online` : 'Melhores Compras Online',
  meta: [
    { name: 'description', content: data.value.data.attributes.name }
  ]
})

useSeoMeta({
  twitterCard: () => 'summary',
  twitterTitle: () => data.value.data.attributes.name,
  twitterDescription: () => data.value.data.attributes.name,
  twitterImage: () => img,
  twitterImageAlt: () => data.value.data.attributes.name,
  twitterSite: () => '@melhorescomprs',
  twitterCreator: () => '@melhorescomprs',
  themeColor: () => '#38BDF8',
  ogUrl: 'https://www.melhores-compras.online',
  ogTitle: () => data.value.data.attributes.name,
  ogDescription: () => data.value.data.attributes.name,
  ogImage: () => img,
  ogImageAlt: () => data.value.data.attributes.name,
  ogType: 'article',
})


// if (status.value === 'success') {
//   await navigateTo(data.value.data.attributes.prod_link, { external: true })

//   console.log(JSON.stringify(data.value.data.attributes.prod_link, null, 2))
// }
</script>