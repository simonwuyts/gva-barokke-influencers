<template>
  <button type="button" class="map-marker" :style="{ background: color }">
    <div class="map-marker__icon" v-html="icon"></div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  color?: string
  icon?: string
}>()
</script>

<style lang="scss">
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
</style>
