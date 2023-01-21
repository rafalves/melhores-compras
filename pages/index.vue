<template>
  <main>
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
        <template
          v-for="(article, index) in articles[0].children"
          :key="`blogArticle-${article}-${index}`"
        >
          <div>
            <ContentDoc
              class="prose-lg"
              path="/artigos/animais/melhores-racoes-para-cachorro-2023"
            />
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<script setup>
const { data: articles } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("artigos"));
});
</script>
