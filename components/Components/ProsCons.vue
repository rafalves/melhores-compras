<template>
  <div class="flex w-full gap-3">
        <div class="flex flex-col basis-1/2">
          <div class=" bg-green-500 text-white font-semibold text-lg p-2 ml-2 rounded">Prós</div>
          <p class="pl-1 my-1" v-for="pro in pros">
            <Icon name="material-symbols:fitbit-check-small" size="35px" color="#22C55E" /> {{ pro.pros }}</p>
        </div>
        <div class="flex flex-col  basis-1/2">
          <div class=" bg-red-500 text-white font-semibold text-lg p-2 mr-2 rounded">Cons
          </div>
          <p class="my-1" v-for="con in cons">
            <Icon name="ic:round-close" size="25px" color="#EF4444" /> {{ con.cons }}</p>
        </div>
      </div>
</template>

<script setup lang="ts">
import { Cons, Pros } from '~/types/components/blocks/ProductRow';

defineProps<{
  pros: Pros[],
  cons: Cons[],
}>();
</script>