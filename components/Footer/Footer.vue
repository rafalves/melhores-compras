<template>
  <footer class="bg-sky-400 pt-5">
    <div class="flex flex-col items-center">
      <NuxtLink class="mr-2 block" to="https://twitter.com/melhorescomprs" target="_blank">
        <Icon class="hover:scale-125 mt-1" name="fa6-brands:x-twitter" size="28px" />
      </NuxtLink>
      <HeaderLogo />
      <nav class="flex flex-wrap justify-center text-slate-800 font-bold font-mono gap-4 leading-3">
        <NuxtLink class="hover:text-[#744EAA]" to="/sobre">SOBRE</NuxtLink>
        <NuxtLink class="hover:text-[#744EAA]" to="/contato">CONTATO</NuxtLink>
        <NuxtLink class="hover:text-[#744EAA]" to="/politica-de-privacidade">POLÍTICA DE PRIVACIDADE</NuxtLink>
        <NuxtLink class="hover:text-[#744EAA]" to="/politica-de-comentarios">POLÍTICA DE COMENTÁRIOS</NuxtLink>
      </nav>
      <span class="text-xs font-semibold font-mono mt-2">
        &copy; Copyright 2023 | Melhores-Compras.Online - Todos os direitos reservados
      </span>
    </div>
    <div class="flex bottom-0 items-center py-5 font-mono">
      <div class="max-w-2/3 mx-auto text-center">
        <p class="font-thin text-xs px-4">
          Somos um site especializado em reviews e recomendações de produtos, aqui
          vocês encontrarão boas promoções. Caso comprem algum produto através dos links em nosso site nós podemos ganhar
          uma pequena comissão ;)
        </p>
      </div>
    </div>
  </footer>
</template>
