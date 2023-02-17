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

<style lang="scss" scoped>
.map-marker {
  background: #000;
  border-radius: 50%;
  box-shadow: inset 0 0 0 0.1rem rgba(#fff, 0.6),
    0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
  display: grid;
  height: 3.2rem;
  place-items: center;
  width: 3.2rem;
}

.map-marker__icon {
  display: block;
  height: 1.6rem;
  width: 1.6rem;

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
