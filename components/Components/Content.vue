<template>
  <section class="mt-8">
    <div v-if="content" class="prose max-w-none font-montserrat" v-html="html" />
  </section>
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

const html = md.render(props.content)


</script>