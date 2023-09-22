<template>
  <section>
    <div class="justify-items-center shadow-lg bg-white p-2 md:p-5 rounded-xl font-montserrat prose max-w-none">

      <nuxt-img fit="inside" class="w-full md:h-[350px]" src="/img/banner.jpg" />

      <h1 class="font-bold text-2xl">Sobre</h1>
      <p>O site Melhores Compras Online é um site brasileiro voltado para a publicação de posts relacionados a informação,
        análises e recomendações de produtos encontrados na internet, por isso o nome Melhors Compras Online.</p>
      <h2 class="font-bold text-xl">Criação</h2>
      <p>Melhores Compras Online foi criado em 2023 pelo programador Rafael Alves, devido a sua vontade de aprender mais
        sobre marketing, SEO, publicação de sites e editorial, juntando tudo isso veio a ideia de criar o site e aprender
        mais deste mercado.
      </p>
      <h2 class="font-bold text-lg">Diferencial</h2>
      <p>Nos diferenciamos dos demais concorrentes devido as tecnologias modernas utilizadas na criação da plataforma,
        como: frontend em Nuxt e backend em Strapi, o que nos possibilitando maior versatilidade na hora de escrever
        posts, como por exemplo, estruturas de página variadas e componentes dinâmicos, resultando em cada página podendo
        ter sua própria identidade visual, e cada post sua própria estrutura dando a liberdade do autor de escrever o post
        da forma que ele achar melhor, utilizando blocos de texto, tabelas, quadros de reviews, adicionando vídeos e até
        personalizar seus próprios componentes, fugindo do modelo WordPress em que todos os posts tem a mesma cara (bloco
        de text, algumas imagens, e publicidade).</p>
      <h2 class="font-bold text-lg">Futuro</h2>
      <p>Pretendemos continuar inovando no Melhores Compras Online, criar uma sessão de promoções, em que postamos os
        produtos com melhor preço, e também uma versão mobile feita com a tecnologia Flutter que nos possibilita ter um
        aplicativo próprio, com notificação de promoções, lista de favoritos, assim nossos leitores nunca perderão uma
        promoção.</p>
    </div>
  </section>
</template>

<script setup>

useSeoMeta({
  title: 'Sobre | Melhores Compras Online',
  twitterCard: () => 'summary',
  twitterTitle: () => 'Sobre',
  ogUrl: 'https://www.melhores-compras.online/sobre',
  ogTitle: () => 'Sobre',
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
            "item": "https://www.melhores-compras.online/sobre",
            "name": "Sobre"
          }
        ]
      },
    ]
})
</script>

<style scoped></style>
