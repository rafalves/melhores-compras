<template>
  <div class="text-sm flex text-slate-500 not-prose pb-5">
    <ul
      class="list-none mx-3"
      v-for="(link, index) in breadcrumbs"
      :key="index"
    >
      <li>
        <NuxtLink
          class="underline underline-offset-4"
          :to="getLink(index)"
          v-if="index != breadcrumbs.length - 1"
        >
          {{ link }} >
        </NuxtLink>
        <span v-else>{{ link }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute();
const breadcrumbs = route.fullPath.split("/");
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

console.log(route.fullPath);
console.log(breadcrumbs);
</script>
