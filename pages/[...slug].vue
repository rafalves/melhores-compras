<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <main class="flex font-mono">
    <div id="col-lef" class="w-1/6 flex-none hidden md:block"></div>
    <div id="col-center" class="flex-1 w-2/6">
      <ClientOnly>
        <ContentRenderer
          class="text-justify blog-link pr-7 max-w-none"
          :value="data"
        >
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </ClientOnly>
    </div>
    <div id="col-right" class="w-1/6 flex-none hidden md:block"></div>
  </main>
</template>

<style scoped></style>
