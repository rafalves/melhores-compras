<script>
export default {
  data() {
    return {
      productsData: [
        //1
        {
          name: "Golden Fórmula Light para Cães Adultos",
          imageLink:
            "https://m.media-amazon.com/images/I/41+D3WbmJSL./_SL110_.jpg",
          prodLink: "https://amzn.to/3Hq6yEd",
          pros: [
            "26% proteína",
            "7% gordura",
            "proteína de boa qualidade",
            "preço competitivo",
          ],
        },
        //2
        {
          name: "Premier Fórmula para Cães Adultos de Raças Médias Sabor Frango",
          imageLink:
            "https://m.media-amazon.com/images/I/41QRyWcxltL._SL110_.jpg",
          prodLink: "https://amzn.to/3QWPj0l",
          pros: [
            "diversidade de proteínas",
            "26% de proteínas",
            "altamente nutritiva",
            "variedade de ingredientes",
          ],
        },
        //3
        {
          name: "Golden Special para Cães Adultos Sabor Frango e Carne",
          imageLink:
            "https://m.media-amazon.com/images/I/41rc0TT+scS._SL110_.jpg",
          prodLink: "https://amzn.to/3kq9G9R",
          pros: ["22% de proteína", "proteínas de boa qualidade", "bom preço"],
        },
        //4
        {
          name: "GranPlus Choice Cães Adultos Frango Carne",
          imageLink:
            "https://m.media-amazon.com/images/I/41D7ysablnL._SL110_.jpg",
          prodLink: "https://amzn.to/3D7v7Df",
          pros: ["22% de proteína", "proteínas de boa qualidade", "bom preço"],
        },
        {
          name: "Special Dog Carne",
          imageLink:
            "https://m.media-amazon.com/images/I/517p8Eb9pBL._SL110_.jpg",
          prodLink: "https://amzn.to/3j2p5wP",
          pros: [
            "baixo preço",
            "boa qualidade dos ingredientes",
            "melhor opção de entrada",
          ],
        },
        {
          name: "Guabi Natural Cão Adulto Médio Frango e Arroz",
          imageLink:
            "https://m.media-amazon.com/images/I/41pf0nGkLSL._SL110_.jpg",
          prodLink: "https://amzn.to/3D5wXog",
          pros: [
            "ingredientes de altíssmima qualidade",
            "28% de proteínas",
            "17% de gorduras",
            "9% de fibras",
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <div class="w-screen">
    <table
      v-for="(row, index) in productsData"
      :key="row.index"
      class="flex w-2/3 flex-col border"
    >
      <tr class="px-4 flex items-center py-0 border-b hover:bg-slate-100">
        <td class="flex-none font-extrabold">{{ index + 1 }}°</td>
        <td>
          <nuxt-img fit="cover" :src="row.imageLink" width="60" height="60" />
        </td>
        <td class="flex-1 grow text-left">
          {{ row.name }}
        </td>
        <td class="flex-1 grow ml-5">
          <p v-for="(pro, index) in row.pros" class="size">{{ pro }}<br /></p>
        </td>
        <td class="flex-none">
          <NuxtLink
            :to="row.prodLink"
            target="_blank"
            class="flex gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            ><i class="material-icons">shopping_cart</i>
            COMPRAR
          </NuxtLink>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
p.size {
  font-size: 12px;
}
</style>
