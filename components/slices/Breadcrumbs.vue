<template>
  <div class="leading-loose text-xs flex flex-wrap text-slate-500 not-prose  ">
    <ul class="list-none mx-1" v-for="(link, index) in breadcrumbs" :key="index">
      <li class="">
        <NuxtLink class="underline underline-offset-4 hover:decoration-2 hover:font-semibold" :to="getLink(index)"
          v-if="index != breadcrumbs.length - 1">
          {{ link }} >
        </NuxtLink>
        <span v-else>{{ link }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute();
const breadcrumbs = route.fullPath.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("/");
breadcrumbs[0] = "home";

function getLink(index) {
  if (index === 0) {
    return "/";
  }
  if (index === 2) {
    return `/${breadcrumbs[1]}/${breadcrumbs[2]}`;
  }

  return `/${breadcrumbs[index]}`;
}

// console.log(route.fullPath)
</script>
