<template>
  <div class="flex justify-center">
    <NuxtLink
      :to="link"
      target="_blank"
      class="flex gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      ><i class="material-icons">shopping_cart</i>
      VER PREÇO
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
