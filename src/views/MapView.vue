<template>
  <AppMap />
</template>

<script setup lang="ts">
import AppMap from '@/components/AppMap.vue'
import { useStore } from '@/store'
import 'mapbox-gl/dist/mapbox-gl.css'
import { onMounted } from 'vue'

const store = useStore()

onMounted(async () => {
  await store.getPointsOfInterest()
})
</script>

<style lang="scss" scoped></style>
