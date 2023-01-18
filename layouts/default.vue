<template>
  <div class="bg-sky-400 w-screen h-18 py-4 shadow-xl flex align-items-center">
    <div class="w-2/3 mx-auto">
      <header>
        <nav class="mx-auto flex justify-between items-center">
          <div class="">
            <NuxtLink to="/" class="flex hover:text-purple-900">
              <i class="material-icons">workspace_premium</i
              >Melhores-Compras.Online</NuxtLink
            >
            <p></p>
          </div>
          <div>
            <ul class="flex gap-4 uppercase text-xs font-semibold">
              <li class="hover:text-purple-900 cursor-pointer">iPhone</li>
              <li class="hover:text-purple-900 cursor-pointer">android</li>
              <li class="hover:text-purple-900 cursor-pointer">eletrônicos</li>
              <li class="hover:text-purple-900 cursor-pointer">
                eletrodomésticos
              </li>
              <li class="hover:text-purple-900 cursor-pointer">
                coisas da china
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  </div>

  <div class="my-10">
    <!-- content goes here -->
    <slot />
  </div>
  <div class="bg-sky-400 fixed bottom-0 w-full h-20">
    <footer class="w-2/3 mx-auto flex justify-between shadow-inner">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped></style>
