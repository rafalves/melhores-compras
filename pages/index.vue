<template>
  <main class="flex">
    <div id="col-lef" class="w-1/6 flex-none hidden md:block"></div>
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
        <div v-if="pending"></div>
        <div v-for="article in articles.data" :key="article.id">
          <CardHome
            :title="article.attributes.title"
            :alt="
              article.attributes.image_cover.data.attributes.alternativeText
            "
            :image="`
              ${config.public.apiBase}${article.attributes.image_cover.data.attributes.formats.small.url}
              `"
            :description="article.attributes.meta_description"
            :createdAt="article.attributes.createdAt"
          />
          <!-- :_path="
              article.attributes.category.data.attributes.category.data
                .attributes.categoryName
            " -->
        </div>
      </section>
    </div>
    <div id="col-right" class="w-1/6 flex-none hidden md:block"></div>
  </main>
</template>

<script setup>
import qs from "qs";

const config = useRuntimeConfig();
const collection = "/api/articles?";
const query = qs.stringify(
  {
    populate: "*",
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
);
const { data: articles, pending } = await useFetch(
  `${config.public.apiBase}${collection}${query}`
  //{ pick: ["data", "meta"] }
);

const checkPending = watch(pending.value, (newVale) => {
  if (!pending.value) {
    console.log(JSON.stringify(pending.value));
  } else {
    console.log(JSON.stringify(pending.value));
  }
});

console.log(
  JSON.stringify(
    articles._rawValue.data[0].attributes.category.data.attributes.categoryName
  )
);

//console.log(JSON.stringify(articles));
</script>
