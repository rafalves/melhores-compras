<template>
  <div>

    <div class="prose prose-stone max-w-none" v-html="html" />
  </div>
</template>

<script setup lang="ts">
// import { marked } from 'marked';
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

const props = defineProps<{
  content: string,
}>()

const html = md.render(props.content)
// const html = marked.parse(props.content!)
</script>