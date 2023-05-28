<template>
  <div class="card hover:opacity-90 rounded">
    <NuxtLink :to="_path">
      <img
        class="rounded rounded-b-none"
        :src="image"
        :alt="alt"
        style="width: 50%"
      />
      <div class="p-2 pt-1">
        <h4>
          <b>{{ title }}</b>
        </h4>
        <p class="text-justify">{{ description }}</p>
        <p class="text-xs text-right">
          <i>publicado em {{ createdAt }}</i>
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
    },
    alt: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    createdAt: {
      type: String,
    },
    _path: {
      type: String,
    },
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
