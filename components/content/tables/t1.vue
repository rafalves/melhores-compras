<template>
  <div class="w-screen">
    <table class="flex">
      <tr class="flex items-center py-0">
        <td class="flex-none padding">1°</td>
        <td>
          <nuxt-img
            fit="cover"
            src="https://m.media-amazon.com/images/I/41+D3WbmJSL./_SL110_.jpg"
            width="60"
            height="60"
          />
        </td>
        <td class="flex-1 grow">Golden Fórmula Light para Cães Adultos</td>
        <td class="flex-1 grow">
          <p class="size">
            26% proteína <br />
            7% gordura <br />
            proteína de boa qualidade <br />
            preço competitivo
          </p>
        </td>
        <td class="flex-none">botão</td>
      </tr>
    </table>
  </div>
</template>

<script></script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  border: 1px solid #dddddd;
  width: 60%;
}
table td {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 5;
  padding-right: 5;
}

td.padding {
}

td {
  text-align: left;
}
p.small {
  line-height: 1;
  text-align: left;
}

p.size {
  font-size: 12px;
}
</style>
