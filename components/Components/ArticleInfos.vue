<template>
  <div class="flex  justify-between text-xs md:text-base my-3">
    <div class="flex">
      <span class="mt-[5px] md:mr-2">Por {{ authorName ??
        "Editorial"
      }} </span>
      <!-- <div v-if="imgAvatar !== '/img/avatar.svg'">
        <SlicesAvatarImage :imgAvatar="`${config.public.apiImageBase}${imgAvatar}`" :imgAlt="imgAlt" />
      </div>
      <div v-else>
        <Icon class="mt-[7px]  md:-mt-[4px] h-7 w-7 md:h-10 md:w-10" name="material-symbols:account-circle"
          color="#1E293B" clas />
      </div> -->
    </div>
    <p class=" mt-[5px]" v-if="publishedAt"> Publicado em {{
      useFormatData2(publishedAt) }} </p>
    <p class=" mt-[5px]" v-if="minsToRead">
      <Icon class="-mt-[4px]" name="material-symbols:timer-outline" color="#1E293B" size="25px" />
      {{ minsToRead }} {{ minsToRead === 1 ? "min" :
        "mins" }}
    </p>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const props = defineProps({
  publishedAt: {
    type: String,
  },
  authorName: {
    type: String,
  },
  minsToRead: {
    type: Number,
  },
  imgAvatar: {
    type: String,
    default: "/img/avatar.svg"
  },
  imgAlt: {
    type: String,
    default: "Imagem autor"
  },
})

</script>