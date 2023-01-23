<template>
  <div class="w-screen">
    <table class="flex w-2/3 flex-col border">
      <tr class="px-4 flex items-center py-0 border-b hover:bg-slate-100">
        <td class="flex-none font-extrabold">1°</td>
        <td>
          <nuxt-img
            fit="cover"
            src="https://m.media-amazon.com/images/I/41+D3WbmJSL./_SL110_.jpg"
            width="60"
            height="60"
          />
        </td>
        <td class="flex-1 grow text-left">
          Golden Fórmula Light para Cães Adultos
        </td>
        <td class="flex-1 grow ml-5">
          <p class="size">
            26% proteína <br />
            7% gordura <br />
            proteína de boa qualidade <br />
            preço competitivo
          </p>
        </td>
        <td class="flex-none">
          <NuxtLink
            to="https://amzn.to/3Hq6yEd"
            target="_blank"
            class="flex gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            ><i class="material-icons">shopping_cart</i>
            COMPRAR
          </NuxtLink>
        </td>
      </tr>
      <tr class="px-4 flex items-center py-0 border-b hover:bg-slate-100">
        <td class="flex-none font-extrabold">1°</td>
        <td>
          <nuxt-img
            fit="cover"
            src="https://m.media-amazon.com/images/I/41+D3WbmJSL./_SL110_.jpg"
            width="60"
            height="60"
          />
        </td>
        <td class="flex-1 grow text-left">
          {{ two[0] }}
        </td>
        <td class="flex-1 grow ml-5">
          <p class="size">
            {{ two[2] }}
          </p>
        </td>
        <td class="flex-none">
          <NuxtLink
            to="https://amzn.to/3Hq6yEd"
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

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "Golden Fórmula Light para Cães Adultos",
          imageLink:
            "https://m.media-amazon.com/images/I/41+D3WbmJSL./_SL110_.jpg",
          pros: [
            "26% proteína",
            "7% gordura",
            "proteína de boa qualidade preço competitivo",
          ],
        },
        {
          name: "Testeeee",
          imageLink:
            "https://m.media-amazon.com/images/I/41+D3WbmJSL./_SL110_.jpg",
          pros: ["gostosa, boa, nutritiva"],
        },
      ],
    };
  },
};
</script>

<style scoped>
p.size {
  font-size: 12px;
}
</style>
