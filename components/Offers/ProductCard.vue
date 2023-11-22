<template>
  <div
    class=" flex flex-wrap  tablet:flex-col tablet:w-60 w-[calc(100%-10px)] h-[245px] tablet:h-[405px] rounded-md shadow-md bg-white font-poppins relative">

    <div class="order-1 flex flex-col h-[170px] tablet:h-fit">

      <div class=" flex mx-2 gap-1 w-[150px] tablet:w-56">
        <Icon name="mdi:tag" class="mt-1 text-slate-600" />
        <span
          class="font-medium text-slate-600 line-clamp-1 overflow-visible tablet:overflow-hidden whitespace-nowrap tablet:whitespace-normal">{{
            category(props.data.attributes.category)
          }}</span>
      </div>
      <div class="flex justify-center overflow-hidden hover:opacity-80 relative flex-1">
        <span class="absolute top-0 left-0  ml-2 mt-2 px-1 rounded text-white text-sm bg-orange-600 z-10">{{
          props.data.attributes.headline
        }}</span>
        <NuxtLink :to="props.data.attributes.prod_link" target="_blank" class="flex items-center">
          <img :src="`${baseUrlUploads}${props.data.attributes.image.data[0].attributes.url}`" :srcset="imgSrcset"
            class="h-[120px] w-[120px] tablet:h-[176px] tablet:w-[176px] rounded-md hover:scale-125 transition duration-300 ease-in-out object-scale-down"
            loading="lazy" :alt="imgAlt">
        </NuxtLink>
      </div>
      <div class="bg-slate-200 h-[1px] mx-2 mt-2 mb-1 hidden tablet:block" />

    </div>

    <div class="order-3 tablet:order-2 w-screen tablet:w-full my-1 tablet:my-0">

      <div v-if="tags" class="flex gap-2 mx-1 flex-wrap">
        <span v-for="tag in tags"
          class="rounded-full bg-slate-300 px-2 font-light text-xs h-fit w-fit whitespace-nowrap">{{
            tag }}</span>
      </div>

    </div>


    <div class="flex-1 order-2 tablet:order-3">


      <div class="mx-2 my-0 flex-1 flex flex-col justify-center h-full ">
        <p v-if="props.data.attributes.old_price" class="font-normal text-sm my-0 text-slate-500 line-through">{{
          (props.data.attributes.old_price).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }) }}</p>
        <div class="flex justify-start gap-3 items-baseline">
          <span class="text-orange-600 font-semibold text-xl my-0">{{
            (props.data.attributes.price).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }) }}</span> <span v-if="props.data.attributes.discount" class=" bg-black text-white px-2 rounded h-[21px]">{{
    props.data.attributes.discount }} %</span>
        </div>
        <NuxtLink :to="props.data.attributes.prod_link" target="_blank">
          <p class="text-slate-800 font-semibold my-0 hover:text-black line-clamp-3 h-[75px]">
            {{
              props.data.attributes.name
            }}</p>
        </NuxtLink>
      </div>

    </div>

    <div class="order-4 w-full">

      <div class="bg-slate-200  h-[1px] my-0 mx-2" />

      <div class="flex justify-between pt-1 mx-2 my-0 ">
        <p class="my-0 text-slate-600 font-medium text-sm">{{ props.data.attributes.seller }}</p>
        <div class="flex">
          <div @click="increaseLike" class="hover:cursor-pointer">
            <Icon name="iconamoon:heart-duotone" @mouseover="" color="#4D5765" class="-mt-1 mr-1 animate-pulse"
              size="20px" />
          </div>
          <span class="font-semibold">{{ likes }}</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true },
})

// console.log(JSON.stringify(props.data, null, 2))

const baseUrlUploads = 'https://www.melhores-compras.online/dev'
const imgAlt = computed(() => props.data.attributes.image.data[0].attributes.alternativeText ? props.data.attributes.image.data[0].attributes.alternativeText : props.data.attributes.image.data[0].attributes.name)

const likes = ref()
likes.value = props.data.attributes.likes ?? 0

async function increaseLike() {
  const { data: res, error, status } = await useFetch(`https://melhores-compras.online/dev/api/offers/increase-likes/${props.data.id}`)

  if (status.value === 'success') {
    likes.value++
  }
  if (error.value) return props.data.attributes.likes ?? 0
}

const imgSrcset = computed(() => {
  let srcset = ""
  if (props.data.attributes.image.data[0].attributes.formats && props.data.attributes.image.data[0].attributes.formats.hasOwnProperty('thumbnail')) {
    srcset += `${baseUrlUploads}${props.data.attributes.image.data[0].attributes.formats.thumbnail.url} ${props.data.attributes.image.data[0].attributes.formats.thumbnail.width}w, `
  }
  if (props.data.attributes.image.data[0].attributes.formats && props.data.attributes.image.data[0].attributes.formats.hasOwnProperty('small')) {
    srcset += `${baseUrlUploads}${props.data.attributes.image.data[0].attributes.formats.small.url} ${props.data.attributes.image.data[0].attributes.formats.small.width}w, `
  }
  if (props.data.attributes.image.data[0].attributes.formats && props.data.attributes.image.data[0].attributes.formats.hasOwnProperty('medium')) {
    srcset += `${baseUrlUploads}${props.data.attributes.image.data[0].attributes.formats.medium.url} ${props.data.attributes.image.data[0].attributes.formats.medium.width}w, `
  }
  if (!props.data.attributes.image.data[0].attributes.formats) {
    srcset += `${baseUrlUploads}${props.data.attributes.image.data[0].attributes.url} ${props.data.attributes.image.data[0].attributes.width}w, `
  }
  return srcset
})

const category = (category) => {
  if (!category) return 'diversos';
  const categoryArray = category.split(/[>\/]/);
  const lastPart = categoryArray[categoryArray.length - 1].trim();
  return lastPart;
};

const tags = computed(() => props.data.attributes.tags ? props.data.attributes.tags.split(', ') : null)

// console.log(imgSrcset.value)

// console.log(props.data.attributes.image.data.attributes.formats)

// console.log(JSON.stringify(props.data.attributes.image.data[0].attributes.formats, null, 2))
</script>