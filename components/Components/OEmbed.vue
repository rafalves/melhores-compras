<template>
  <div>
    <iframe loading="lazy" title="Creatina Dux Nutrition é boa? Análise [Creapure, Monohidratada]" width="840"
      height="473" src="" data-src="https://www.youtube.com/embed/yJoYN-WVKO8?feature=oembed" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen data-rocket-lazyload="fitvidscompatible" class="lazyloaded" data-ll-status="loaded"></iframe>
    <!-- <div v-html="embedParsed.rawData.html" /> -->
  </div>
  <!-- <script type="text/javascript">
    function load_iframes() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i=0; i<vidDefer.length; i++) {
    if(vidDefer[i].getAttribute('data-src')) {
    vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
    } } }
          document.addEventListener("DOMContentLoaded", function(event) {
             load_iframes();
          });
  </script> -->
</template>

<script setup lang="ts">
import { OembedParsed } from '~/types/components/blocks/Oembed';

const props = defineProps<{
  oembed: string
}>()

const embedParsed: OembedParsed = JSON.parse(props.oembed)
console.log(embedParsed)
</script>

