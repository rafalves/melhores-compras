<template>
  <div>
    <div v-if="content" class="prose prose-stone max-w-none" v-html="parsed" />
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from 'nuxt/app';
const config = useRuntimeConfig() 


const props = defineProps<{
  content: string,
}>()

const parsed = props.content.replaceAll(
        "/uploads",
        `${config.public.apiImageBase}/uploads`
)
 
</script>