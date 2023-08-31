<template>
  <div class="flex flex-col h-full antialiased">

    <Body>
      <header>
        <LayoutsHeader />
        <div class="h-14" />
      </header>

      <div class="grow">
        <div class="flex h-full w-auto grow">
          <!-- create aside menus later  -->
          <aside
            class="w-full hidden md:shrink bg-yellow-100 md:flex md:max-w-[12rem] lg:max-w-[15rem] xl:max-w-[19rem] 2xl:max-w-sm " />

          <main class="flex w-full grow md:max-w-[40rem] lg:max-w-[55rem]">
            <slot />
          </main>

          <!-- create aside menus later  -->
          <aside
            class="w-full hidden grow bg-yellow-100 md:flex md:max-w-[12rem] lg:max-w-[15rem] xl:max-w-[19rem] 2xl:max-w-sm " />
        </div>
      </div>

      <footer>
        <LayoutsFooter />
      </footer>
    </Body>
  </div>
</template>


<style>
#__nuxt {
  @apply bg-slate-200;
}
</style>
