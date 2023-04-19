<template>
  <button type="button" class="map-marker" :style="{ background: color }">
    <div v-if="icon" class="map-marker__icon" v-html="icon"></div>
    <div v-if="label" class="map-marker__label">{{ label }}</div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  color?: string
  icon?: string
  label?: string
}>()
</script>

<style lang="scss">
@import '@/assets/styles/variables';

.map-marker {
  background: #000;
  border-radius: 50%;
  box-shadow: inset 0 0 0 0.1rem rgba(#000, 0.1), 0 0 0 0.1rem rgba(#fff, 0.5);
  color: #fff;
  cursor: pointer;
  display: grid;
  height: 3.2rem;
  place-items: center;
  width: 3.2rem;
}

.map-marker__icon {
  display: block;
  height: 2rem;
  width: 2rem;

  & > * {
    display: block;
    height: 100%;
    width: 100%;
  }

  svg * {
    stroke: #fff;
  }
}

.map-marker__label {
  font-family: $font-family-sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
}
</style>
