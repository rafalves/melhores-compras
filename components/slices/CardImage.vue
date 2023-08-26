<template>
  <nuxt-img fit="cover" class="rounded-t-3xl h-[10rem] w-full" :src="imgUrl" :alt="imgAlt" />
</template>

<script setup lang="ts">
defineProps({
  imgUrl: {
    type: String,
    default: "http://191.96.251.66:1337/uploads/small_img_Placeholder_aca00da346.jpg?2023-08-24T18:52:16.271Z"
  },
  imgAlt: {
    type: String,
    default: "Imagem banner"
  },
})

</script>