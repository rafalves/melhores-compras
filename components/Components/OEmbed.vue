<template>
  <div class="mb-5">
    <div v-if="!enable" class="relative max-w-350 max-h-250 flex">
      <span class="absolute  text-white p-2 font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"> {{ embedParsed.title }}</span>
      <nuxt-img :src="embedParsed.thumbnail" class="flex-1"/>
      <div  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer">
      <Icon @click="enable = !enable" name="logos:youtube-icon" size="60px" color="#FF000" />
      </div>  
    </div>
    <iframe class="w-full aspect-video"
    v-else="!enable" 
    title="Creatina Dux Nutrition é boa? Análise [Creapure, Monohidratada]" 
    width="500" 
    height="300"
    :src="src" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen data-rocket-lazyload="fitvidscompatible"
    data-ll-status="loaded" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { OembedParsed } from '~/types/components/blocks/Oembed';

const enable = ref(false)

const props = defineProps<{
  oembed: string
}>()

const embedParsed: OembedParsed = JSON.parse(props.oembed)

const src = ref("")

const getSrc = (src: string): string => {
  const match = src.match(/v=([A-Za-z0-9_-]+)/);
  let embedUrl = ""
  if (match) {
    const videoCode = match[1]
    embedUrl = `https://www.youtube.com/embed/${videoCode}?feature=oembed&autoplay=1`;
  }
  return embedUrl
}

onBeforeMount(async () => src.value = await getSrc(embedParsed.url))

// src.value = await getSrc(embedParsed.url)
</script>

