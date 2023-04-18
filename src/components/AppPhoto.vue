<template>
  <div v-if="src" class="photo">
    <img class="photo__image" :src="src" alt="" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src?: string
}>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.photo {
  background-color: $color-beige;
  display: block;
  margin: 0 -2.4rem;

  &:first-child {
    margin-top: -2.4rem;
  }
}

.photo__image {
  display: block;
  height: 100%;
  max-height: 90vw;
  object-fit: cover;
  width: 100%;
}
</style>
