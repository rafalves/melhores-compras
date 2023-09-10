<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
const e = useError();
</script>

<template>
  <NuxtLayout>
    <p class="text-center text-xs font-medium">Erro: {{ error?.statusCode }}</p>
    <div class="text-center mx-auto max-w-md h-fit">
      <p class=" text-7xl font-bold">Ops...</p>
      <p class="mt-10 text-2xl font-medium">Página não encontrada</p>
      <p class="mt-10">ir para a página de</p>
      <button class="my-6 px-7 py-2 bg-orange-600 text-3xl text-white font-bold rounded-md"
        @click="handleError">Início</button>
    </div>
  </NuxtLayout>
</template>
 