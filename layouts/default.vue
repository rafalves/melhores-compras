<template>
  <div class="bg-fuchsia-300 h-screen">
    <header class="shadow-sm">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <div>
          <NuxtLink class="block">Melhores-Compras.Online</NuxtLink>
          <p></p>
        </div>
        <div>
          <ul class="flex gap-4 uppercase text-xs font-semibold">
            <li class="hover:font-bold hover:text-purple-900 cursor-pointer">
              iPhone
            </li>
            <li class="hover:font-bold">android</li>
            <li class="hover:font-bold">eletrônicos</li>
            <li class="hover:font-bold">eletrodomésticos</li>
            <li class="hover:font-bold">coisas da china</li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="container mx-auto"></div>
    <!-- content goes here -->
    <slot />
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
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
