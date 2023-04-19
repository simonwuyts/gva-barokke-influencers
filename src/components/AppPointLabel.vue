<template>
  <div class="point-label">
    <div
      v-if="label"
      class="point-label__label"
      :style="{ backgroundColor: color }"
    >
      {{ label }}
    </div>
    <div v-if="title" class="point-label__title">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  title?: string
  color?: string
}>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.point-label {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 0.8rem;
}

.point-label__label {
  background-color: $color-red;
  border-radius: 50%;
  color: #fff;
  display: grid;
  flex: none;
  font-family: $font-family-sans-serif;
  font-weight: bold;
  height: 2.7rem;
  line-height: 2rem;
  place-items: center;
  width: 2.7rem;
}
</style>
