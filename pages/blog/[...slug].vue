<script setup>
const { path } = useRoute().params;

console.log(path.slug);
</script>

<template>
  teste
  <main class="flex font-mono">
    <div id="col-lef" class="w-1/6 flex-none hidden md:block"></div>
    <div id="col-center" class="flex-1 w-2/6"></div>
    <div id="col-right" class="w-1/6 flex-none hidden md:block"></div>
  </main>
</template>

<style scoped></style>
