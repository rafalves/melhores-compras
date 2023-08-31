<template>
  <div>
    <nuxt-img :src="imgAvatar" :alt="imgAlt" class="h-9 w-9  rounded-full" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imgAvatar: {
    type: String,
    default: "/img/avatar.png"
  },
  imgAlt: {
    type: String,
    default: "Imagem autor"
  },
}) 
</script>