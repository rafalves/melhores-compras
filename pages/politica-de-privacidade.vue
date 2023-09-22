<template>
  <section>
    <div class="justify-items-center shadow-lg bg-white p-2 md:p-5 rounded-xl font-montserrat prose max-w-none">
      <h1 class="font-bold text-2xl">Política de privacidade</h1>
      <p>A privacidade dos visitantes do Melhores Compras Online é extremamente importante para nós.</p>
      <p>No Melhores Compras Online, reconhecemos a importância da privacidade. Nunca venderemos a sua informação para
        terceiros, sejam eles particulares ou empresas.</p>
      <h2 class="font-bold text-xl">Informações que coletamos e como as utilizamos</h2>
      <p>Oferecemos vários serviços que não exigem que você se registre em uma conta ou forneça informações pessoais. Para
        oferecer nossa ampla variedade de serviços, podemos coletar os seguintes tipos de informações:</p>
      <h3 class="font-bold text-lg">Informações fornecidas por você</h3>
      <p>Quando você se inscreve em uma Melhores Compras Online ou em outro serviço ou promoção que precise de registro,
        solicitamos suas informações pessoais (como o seu nome, endereço de e-mail e uma senha da conta). Podemos combinar
        as informações enviadas da sua conta com informações de outros serviços do Melhores Compras Online ou de terceiros
        para lhe
        proporcionar uma experiência melhor e aprimorar a qualidade dos nossos serviços. Para alguns serviços, podemos dar
        a você a oportunidade de desativar a combinação dessas informações.</p>
      <h3 class="font-bold text-lg">Os registros</h3>
      <p>Tal como outros web sites, coletados e utilizamos informação contida nos registros. A informação contida nos
        registros, inclui o seu endereço IP (internet protocol), o seu ISP, o browser que utilizou ao visitar o nosso
        website (como o Internet Explorer ou o Firefox), o tempo da sua visita e que páginas visitou dentro do nosso
        website. </p>
      <h3 class="font-bold text-lg">Os Cookies</h3>
      <p>Utilizamos cookies para armazenar informação, tais como as suas preferências pessoas quando visita o nosso
        website. Isto poderá inclui um simples popup, ou uma ligação em vários serviços que providenciamos, tais como
        fóruns.</p>
      <p>Em adição também utilizamos publicidade de terceiros no nosso website www.melhores-compras.online para suportar
        os
        custos de manutenção. Alguns destes publicitários, poderão utilizar tecnologias como os cookies e/ou web beacons
        quando publicitam no nosso website, o que fará com que esses publicitários (como o Google através do Google
        AdSense) também recebam a sua informação pessoal, como o endereço IP, o seu ISP , o seu browser, etc. Esta função
        geralmente utilizada para geotargeting (mostrar publicidade de São Paulo apenas aos leitores oriundos de São Paulo
        por ex.) ou apresentar publicidade direccionada a um tipo de utilizador (como mostrar publicidade de restaurante a
        um utilizador que visita sites de culinária regularmente, por ex.).</p>
      <p>Você detém o poder de desligar os seus cookies, nas opções do seu browser, ou efetuado alterações nas ferramentas
        de programas Anti­vírus. No entanto, isso poderá alterar a forma como interage com o nosso website, ou outros
        websites. Isso poderá afeta ou não permitir que faça logins em programas, sites ou fóruns da nossa e de outras
        redes.</p>
      <h2 class="font-bold text-xl">Segurança das informações</h2>
      <p>Tomamos medidas de segurança adequadas para nos proteger contra acesso, alteração, divulgação ou destruição não
        autorizada dos dados. Essas medidas incluem análises internas de nossas práticas de coleta, armazenamento e
        processamento de dados e medidas de segurança, bem como medidas de segurança física para nos proteger contra o
        acesso não autorizado de sistemas onde armazenamos os dados pessoais.</p>
      <p>Limitamos o acesso às informações pessoais aos funcionários, contratantes e agentes do Melhores Compras Online
        que
        precisam
        ter conhecimento dessas informações para operar, desenvolver ou melhorar os nossos serviços. Essas pessoas
        assumiram obrigações de confidencialidade e podem ser submetidas a punições, incluindo rescisão e litígio
        criminal, caso não cumpram essas obrigações.</p>
      <h3 class="font-bold text-lg">Exclusão dos dados</h3>
      <p>Se for do interesse do usuário, ele poderá solicitar a exclusão de seus dados em nossa base, ou retificação dos
        mesmos. Para isso precisará entrar com seu login e senha, selecionar a opção "excluir meu perfil". Atenção: esta
        operação é irreversível e o usuário não poderá recuperar seus dados.</p>
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
