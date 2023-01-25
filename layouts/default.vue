<template>
  <div id="box" class="flex flex-col height">
    <div id="header" class="flex-none bg-sky-400 w-full py-4 shadow-xl">
      <div class="w-2/3 mx-auto">
        <header>
          <nav class="mx-auto flex justify-center items-center">
            <NuxtLink to="/" class="flex hover:text-purple-900">
              <i class="material-icons">workspace_premium</i
              >Melhores-Compras.Online
            </NuxtLink>
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
      class="flex-none flex bg-sky-400 bottom-0 w-full items-center py-5"
    >
      <footer class="w-2/3 mx-auto text-center">
        <p class="font-thin text-xs">
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
