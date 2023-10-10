<template>
  <section>
    <div class="justify-items-center shadow-lg bg-white p-2 md:p-5 rounded-xl font-montserrat prose max-w-none">
      <h1 class="font-bold text-2xl">Diretrizes da Comunidade para Comentadores</h1>

      <p>O Melhores-Compras.Online valoriza a discussão e diferentes pontos de vista, mas, acima de tudo, prezamos pela
        correspondência respeitosa e construtiva com outros leitores e nossos jornalistas.</p>
      <p>Temos tolerância zero para comentários que consideramos inapropriados ou insultantes, exibam comportamento de
        troll ou tenham implicações legais.</p>
      <p>Os comentadores podem sinalizar comentários potencialmente inadequados para revisão, por preocupação com os
        outros ou devido a ofensa pessoal.</p>
      <p>Você pode sinalizar preocupações através do menu próximo a um comentário potencialmente ofensivo ou nos enviar um
        e-mail através de nossa página de contato.</p>

      <h2 class="font-bold text-xl">Como comentar:</h2>

      <p>Nossos comentários são feitos na plataforma de terceiros Disqus, que exige que os usuários criem uma conta.</p>
      <p>Você pode registrar um perfil no Disqus diretamente com o Disqus ou usando suas contas do Facebook, Twitter ou
        Google.</p>
      <p>Ao contrário das políticas iniciais do Facebook e do Google, o Disqus não exige que você use seu nome real.</p>
      <p>No entanto, preferimos que os comentadores usem seus nomes reais, pois são mais propensos a se comportar de
        maneira mais madura, em vez de se esconderem atrás de um pseudônimo.</p>

      <h2 class="font-bold text-xl">Vamos mantê-lo amigável:</h2>

      <p>Nós o convidamos para o nosso ambiente de trabalho, para se juntar a um grupo de pessoas que gostam de falar
        sobre carros e automobilismo.</p>
      <p>Esperamos que nossos fóruns de comentários nos ajudem, assim como a outros, a ampliar nosso conhecimento,
        compreensão e paixão por carros e pelas regras que os governam.</p>
      <p>A discussão e o debate são bem-vindos, mas comentários que incluam ataques pessoais a outro leitor ou jornalista
        não são aceitáveis.</p>
      <p>Embora apreciemos que haverá, às vezes, pontos de vista diferentes, reservamos o direito de advertir comentadores
        abertamente, excluir, editar ou modificar uma discussão que viole nossas diretrizes e suspender ou banir
        infratores reincidentes.</p>
      <p>Além disso, não toleraremos racismo, sexismo, homofobia ou outras formas de discurso de ódio, ou contribuições
        que possam ser interpretadas como tal.</p>

      <h2 class="font-bold text-xl">Clareza e intenção:</h2>

      <p>O tom da palavra escrita nem sempre é óbvio, então pare e pense duas vezes antes de publicar seu comentário.</p>
      <p>"Gritar" - letras, palavras ou frases em maiúsculas - e o uso de emojis, outros símbolos e linguagem inadequada
        são desaprovados, pois são projetados para destacar um comentário em relação aos outros.</p>
      <p>O uso dessas e técnicas semelhantes pode levar à exclusão, edição ou modificação do comentário a critério de
        nossa equipe de moderação. Infratores reincidentes podem enfrentar suspensão ou banimento permanente.</p>


      <h2 class="font-bold text-xl">Imagens do usuário (avatars):</h2>

      <p>Imagens de mau gosto nos perfis de fotos/imagens de usuário do Disqus (também conhecidas como avatares) são
        proibidas no Melhores-Compras.Online.</p>
      <p>Exemplos de conteúdo proibido incluem imagens sexualmente explícitas, sugestivas ou reveladoras; representações
        de violência ou gore; imagens grosseiras; celebração ou representação de criminosos ou atividades criminosas;
        propaganda.</p>


      <h2 class="font-bold text-xl">Perfis de backup:</h2>

      <p>Pedimos aos comentadores que mantenham apenas um perfil, e nossos moderadores monitoram os endereços IP de
        infratores reincidentes.</p>
      <p>Infratores reincidentes com múltiplas contas serão banidos da seção de comentários.</p>


      <h2 class="font-bold text-xl">Links:</h2>

      <p>Os links para todos os sites foram desativados para proteger nosso site e visitantes contra spam e malware.</p>
      <p>Links para outras histórias do Melhores-Compras.Online são permitidos, no entanto, comentários que incluam esses
        links serão
        inicialmente retidos para revisão antes de serem postados.</p>

      <h2 class="font-bold text-xl">Quem modera o Melhores-Compras.Online?</h2>

      <h2 class="font-bold text-xl">A monitoração e moderação da discussão na seção de comentários do
        Melhores-Compras.Online são
        realizadas por nossa equipe editorial e uma equipe de moderação dedicada.</h2>

      <p class="italic"><span class="font-bold">Nota de rodapé:</span> Estas diretrizes podem ser revisadas ou atualizadas
        a qualquer momento, sem aviso
        prévio.</p>
    </div>
  </section>
</template>

<script setup>

useSeoMeta({
  title: 'Políticas de Privacidade | Melhores Compras Online',
  description: 'Conheça nossas políticas de privacidade.',
  twitterCard: () => 'summary',
  twitterTitle: () => 'Política de Privacidade',
  twitterDescription: () => 'Conheça nossas políticas de privacidade.',
  twitterImage: () => 'https://www.melhores-compras.online/img/banner.jpg',
  twitterImageAlt: () => 'Banner Melhores Compras Online',
  twitterSite: () => '@melhorescomprs',
  twitterCreator: () => '@melhorescomprs',
  themeColor: () => '#38BDF8',
  ogUrl: 'https://www.melhores-compras.online/policitica-de-privacidade',
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
            "name": "Política de Privacidade"
          }
        ]
      },
    ]
})
</script>

<style scoped></style>
