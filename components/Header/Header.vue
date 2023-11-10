<template>
  <div class="flex flex-col bg-sky-400 w-full pt-2 shadow-xl fixed z-50">
    <div class="flex justify-center ">
      <header class="flex w-full max-w-[1270px]">
        <div class="flex-1 flex justify-start">
          <HeaderLogo />
        </div>
        <div class="flex-none mr-3">
          <NuxtLink to="https://twitter.com/melhorescomprs" target="_blank">
            <Icon class="hover:scale-125 mt-1" name="fa6-brands:x-twitter" size="28px" />
          </NuxtLink>
        </div>
      </header>
    </div>
    <div class="h-[1px] w-screen bg-white opacity-20" />

    <div class="flex justify-center my-1">
      <div class="flex w-full max-w-[1270px] gap-3 tablet:pl-8 lg:pl-2">
        <span class="font-poppins font-semibold">Ofertas</span>
        <span class="font-poppins font-semibold">Blog</span>
      </div>
    </div>
  </div>
</template>

 