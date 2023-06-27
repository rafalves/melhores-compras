<template>
  <div
    class="w-full grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 bg-slate-100"
  >
    <!-- header -->
    <div class="col-span-7">
      <LayoutsHeader />
    </div>
    <!-- menu  -->
    <div class="hidden md:block"></div>
    <!-- content  -->
    <div
      class="min-h-18/20 col-span-1 md:col-span-3 lg:col-span-5 grid place-items-center"
    >
      <slot />
    </div>
    <!-- aside  -->
    <div class="hidden md:block"></div>
    <!-- footer -->
    <div class="col-span-7 grid place-content-center bg-pink-300">
      <LayoutsFooter />
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.height {
  min-height: 100vh;
}
</style>
