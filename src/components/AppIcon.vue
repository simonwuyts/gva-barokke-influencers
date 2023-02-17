<template>
  <span class="material-symbols-sharp">{{ name }}</span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
  }>(),
  {
    name: 'person',
  }
)
</script>

<style>
.material-symbols-sharp {
  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 20;
}
</style>
