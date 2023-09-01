<template>
  <div class="flex flex-col h-full antialiased">

    <Body>
      <header>
        <LayoutsHeader />
        <div class="h-14" />
      </header>

      <div class="grow">
        <div class="flex h-full grow">

          <aside class="flex-1" />

          <main class="flex-auto max-w-[55rem]">
            <slot />
          </main>

          <!-- create aside menus later  -->
          <aside class="flex-1" />
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
  @apply bg-slate-200 h-full;
}
</style>
