<template>
  <div>
    <div class="flex flex-col">

      <header class="flex-1">
        <Header />
        <div class="h-14" />
      </header>

      <div class="h-full ">

        <aside class="flex-1" />

        <!-- <main class="flex-1 mx-auto max-w-[58rem] p-1 py-3"> -->
        <main class="flex-1 mx-auto py-3 w-full max-w-[1270px]">
          <slot />
        </main>

        <!-- create aside menus later  -->
        <aside class="flex-1" />
      </div>

      <footer class="flex-1">
        <Footer />
      </footer>
    </div>
  </div>
</template>


<style>
html {
  @apply bg-sky-400 antialiased;
}

#__nuxt {
  @apply bg-slate-200 antialiased;
}
</style>
