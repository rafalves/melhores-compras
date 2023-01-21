<template>
  <div id="box" class="flex flex-col height">
    <div id="header" class="flex-none bg-sky-400 w-full h-18 py-4 shadow-xl">
      <div class="w-2/3 mx-auto">
        <header>
          <nav class="mx-auto flex justify-between items-center">
            <NuxtLink to="/" class="flex hover:text-purple-900">
              <i class="material-icons">workspace_premium</i
              >Melhores-Compras.Online
            </NuxtLink>
            <div>
              <ul class="flex gap-4 uppercase text-xs font-semibold">
                <li
                  class="hover:text-purple-900 cursor-pointer hover:underline hover:underline-offset-4"
                >
                  iPhone
                </li>
                <li
                  class="hover:text-purple-900 cursor-pointer hover:underline hover:underline-offset-4"
                >
                  android
                </li>
                <li
                  class="hover:text-purple-900 cursor-pointer hover:underline hover:underline-offset-4"
                >
                  eletrônicos
                </li>
                <li
                  class="hover:text-purple-900 cursor-pointer hover:underline hover:underline-offset-4"
                >
                  eletrodomésticos
                </li>
                <li
                  class="hover:text-purple-900 cursor-pointer hover:underline hover:underline-offset-4"
                >
                  coisas da china
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>

    <div id="content" class="flex-1 my-5">
      <!-- content goes here -->
      <slot />
    </div>

    <div
      id="footer"
      class="flex-none flex shrink-0 bg-sky-400 bottom-0 w-full h-28 items-center"
    >
      <footer class="w-2/3 mx-auto text-center">
        <p class="font-thin">
          Somos um site especializado em reviews e recomendações de produtos,
          aqui vocês encontrarão boas promoções. Caso comprem algum produto
          através do site, nós podemos ganhar uma pequena comissão ;)
        </p>
        <span class="text-xs font-semibold">
          &copy; Copyright 2023 | Melhores-Compras.Online
        </span>
      </footer>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.height {
  min-height: 100vh;
}
</style>
