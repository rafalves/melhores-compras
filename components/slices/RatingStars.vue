<template>
  <div class="flex">
    <Icon v-for="(star, index) in useGetStarRating(rate)" :key="index" :name="star" color="#FFB315" size="35px" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  rate: { type: Number, default: 5 }
})


const useGetStarRating = (rating: number): string[] => {
  const roundedValue: number = Math.round(rating * 2) / 2;
  const icons: string[] = [];
  for (let i = 1; i <= 5; i++) {
    if (roundedValue >= i) {
      icons.push('material-symbols:star');
    } else if (roundedValue === i - 0.5) {
      icons.push('material-symbols:star-half');
    } else {
      icons.push('material-symbols:star-outline');
    }
  }
  return icons;
}
</script>