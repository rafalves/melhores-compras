<template>
  <div>
    <div v-if="content" class="prose prose-stone max-w-none" v-html="html" />
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

const props = defineProps<{
  content: string,
}>()

const html = md.render(props.content) 
</script>