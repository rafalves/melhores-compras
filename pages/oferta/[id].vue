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
    { property: 'og:image', itemprop: "image", content: "https://www.melhores-compras.online/dev/uploads/711eymr_SAML_AC_SL_1000_eb65a226bd.jpg?ims=600x" },
    { name: 'thumbnail', content: "https://www.melhores-compras.online/dev/uploads/711eymr_SAML_AC_SL_1000_eb65a226bd.jpg" }
  ]
})

useSeoMeta({
  twitterCard: () => 'summary_large_image',
  twitterTitle: () => data.value.data.attributes.name,
  twitterDescription: () => data.value.data.attributes.name,
  twitterImage: () => img.value,
  twitterImageAlt: () => data.value.data.attributes.name,
  twitterSite: () => '@melhorescomprs',
  twitterCreator: () => '@melhorescomprs',
})


// if (status.value === 'success') {
//   await navigateTo(data.value.data.attributes.prod_link, { external: true })

//   console.log(JSON.stringify(data.value.data.attributes.prod_link, null, 2))
// }
</script>