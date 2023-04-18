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

<style lang="scss">
@import '@/assets/styles/variables';

.mapboxgl-user-location-dot,
.mapboxgl-user-location-dot:before {
  background-color: $color-red;
}

.mapboxgl-user-location-show-heading .mapboxgl-user-location-heading:after,
.mapboxgl-user-location-show-heading .mapboxgl-user-location-heading:before {
  border-bottom-color: $color-red;
}

.mapboxgl-user-location-accuracy-circle {
  background-color: rgba($color-red, 0.2);
}
</style>
