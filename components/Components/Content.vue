<template>
  <div>
    <div v-if="content" class="prose prose-stone max-w-none" v-html="html" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'
import { useRuntimeConfig } from 'nuxt/app';
const config = useRuntimeConfig()
const md = new MarkdownIt()


const props = defineProps<{
  content: string,
}>()

const parsed = props.content.replaceAll(
  "/uploads",
  `${config.public.apiImageBase}/uploads`
)

const html = md.render(parsed) 
</script>