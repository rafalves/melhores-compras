<template>
  <main class="flex">
    <div id="col-lef" class="w-1/6 flex-none bg-slate-400 hidden md:block">
      test
    </div>
    <div id="col-center" class="flex-1 w-2/6">
      <section class="lg:px-[15%] px-[5%]">
        <h1 class="lg:text-2xl text-2xl leading-9 font-semibold text-center">
          Veja nossos ultimos posts...
        </h1>
        <p
          class="text-center uppercase font-medium tracking-wider my-5 text-gray-500"
        >
          Blog Posts
        </p>
        <div>
          <Card
            :title="data[0].children[0].children[0].title"
            :alt="data[0].children[0].children[0].alt"
            :image="data[0].children[0].children[0].image"
            :description="data[0].children[0].children[0].description"
            :createdAt="data[0].children[0].children[0].createdAt"
            :_path="data[0].children[0].children[0]._path"
          />
        </div>
      </section>
    </div>
    <div id="col-right" class="w-1/6 flex-none bg-slate-400 hidden md:block">
      test
    </div>
  </main>
</template>

<script setup>
const { data } = await useAsyncData("artigos", () => {
  return fetchContentNavigation(queryContent("artigos/pets/"));
});
</script>
