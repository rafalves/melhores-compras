<template>
  <section>
    <div class="justify-items-center shadow-lg bg-white p-2 md:p-5 rounded-xl font-montserrat prose max-w-none">
      <h1 class="font-bold text-2xl">Contato</h1>
      <p>Você pode entrar em contato com o site <span class="font-bold">Melhores Compras Online</span> pelo e-mail <span
          class="font-bold">melhorescomprasonline.acc@gmail.com</span>.</p>
      <p>Ou se preferir preencha o furmulário abaixo.</p>

      <div class="not-prose rounded-md bg-slate-100 p-3 text-slate-900">
        <h2 class="font-bold text-xl ">Preencha o formulário:</h2>

        <form @submit.prevent="submitForm">
          <div class="mt-2">
            <label class="font-bold" for="name">Nome</label><br />
            <input class="w-full border border-slate-400 bg-white px-2 shadow-lg rounded-md outline-[#744EAA]" type="text"
              v-model="formData.name" id="name" placeholder="digite seu nome" />
          </div>

          <div class="mt-2">
            <label class="font-bold" for="email">Email</label><br />
            <input class="w-full border border-slate-400 bg-white px-2 shadow-lg rounded-md outline-[#744EAA]"
              type="email" v-model="formData.email" id="email" placeholder="seuemail@example.com" />
          </div>

          <div class="mt-2">
            <label class="font-bold" for="message">Message</label><br />
            <textarea class="w-full border border-slate-400 bg-white px-2 shadow-lg rounded-md outline-[#744EAA] h-28"
              id="message" v-model="formData.message" placeholder="Escreva sua mensagem..." />
          </div>

          <div>
            <button class="rounded-md bg-amber-600 p-2 mt-2 cursor-not-allowed text-white font-semibold" type="submit"
              disabled>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const submitForm = async () => {
  const { data: responseData } = await useFetch('http://localhost:8888/tutorial-form-handler/index.php', {
    method: 'post',
    body: {
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
    }
  })

  console.log(responseData.value)
}

useSeoMeta({
  title: 'Políticas de Privacidade  | Melhores Compras Online',
  description: 'Conheça nossas políticas de privacidade.',
  twitterCard: () => 'summary',
  twitterTitle: () => 'Política de Privacidade',
  twitterDescription: () => 'Conheça nossas políticas de privacidade.',
  twitterImage: () => 'https://www.melhores-compras.online/img/banner.jpg',
  twitterImageAlt: () => 'Banner Melhores Compras Online',
  twitterSite: () => '@melhorescomprs',
  twitterCreator: () => '@melhorescomprs',
  themeColor: () => '#38BDF8',
  ogUrl: 'https://www.melhores-compras.online',
  ogTitle: () => 'Política de Privacidade',
  ogDescription: () => 'Conheça nossas políticas de privacidade.',
  ogImage: () => 'https://www.melhores-compras.online/img/banner.jpg',
  ogImageAlt: () => 'Banner Melhores Compras Online',
  ogType: 'article',
})

// nuxt-jsonld
useJsonld({
  "@context": "http://schema.org",
  "@graph":
    [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": "https://www.melhores-compras.online",
            "name": "Melhores Compras Online"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": "https://www.melhores-compras.online/policitica-de-privacidade",
            "name": "Melhores Compras Online"
          }
        ]
      },
    ]
})
</script>
 
