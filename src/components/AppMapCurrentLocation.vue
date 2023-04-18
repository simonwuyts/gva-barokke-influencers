<template>
  <div />
</template>

<script setup lang="ts">
import mapboxgl, { Map } from 'mapbox-gl'
import type Deferred from 'my-deferred'
import { inject, onMounted, onUnmounted } from 'vue'

const vmb_map = inject('vmb_map', null) as Deferred<Map> | null
const options = {
  positionOptions: {
    enableHighAccuracy: true,
  },
  trackUserLocation: true,
  showUserHeading: true,
}
const vmb_geolocationControl = new mapboxgl.GeolocateControl(options)

onMounted(async () => {
  if (vmb_map) {
    const map = await vmb_map.promise
    map.addControl(vmb_geolocationControl)
  }
})

onUnmounted(async () => {
  if (vmb_map) {
    const map = await vmb_map.promise
    map.removeControl(vmb_geolocationControl)
  }
})
</script>
