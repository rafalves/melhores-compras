<template>
  <div class="card hover:opacity-90">
    <NuxtLink :to="_path">
      <img class="" :src="image" :alt="alt" style="width: 100%" />
      <div class="container">
        <h4>
          <b>{{ title }}</b>
        </h4>
        <p>{{ description }}</p>
        <i>publicado em {{ createdAt }}</i>
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

.container {
  padding: 2px 16px;
}
</style>
