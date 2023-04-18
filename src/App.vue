<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from './store'

const store = useStore()

onMounted(async () => {
  await store.getSettings()
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600&family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
