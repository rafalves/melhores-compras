<template>
  <section class="prose mt-8 max-w-none font-montserrat">
    <h2>FAQ - Perguntas Frequentes</h2>
    <div v-for="question in qa.Faq">

      <h3>{{ question?.question }}</h3>
      <p>{{ question?.answer }}</p>

      <SchemaOrgQuestion :name=question.question :accepted-answer=question.answer />
    </div>
  </section>
</template>

<script setup lang="ts">
import { QA } from '~/types/components/blocks/Faq';

defineProps<{
  qa: QA;
}>();
</script>