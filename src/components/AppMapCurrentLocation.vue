<template>
  <div />
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import mapboxgl, { Map } from 'mapbox-gl'
import type Deferred from 'my-deferred'
import { inject, onMounted, onUnmounted } from 'vue'

const store = useStore()

const vmb_map = inject('vmb_map', null) as Deferred<Map> | null
const options = {
  positionOptions: {
    enableHighAccuracy: true,
  },
  trackUserLocation: true,
  showUserHeading: true,
}

store.geolocationControl = new mapboxgl.GeolocateControl(options)

store.geolocationControl.on('trackuserlocationstart', () => {
  store.geolocationIsActive = true
})

store.geolocationControl.on('trackuserlocationend', () => {
  store.geolocationIsActive = false
})

onMounted(async () => {
  if (vmb_map) {
    const map = await vmb_map.promise
    map.addControl(store.geolocationControl)
  }
})

onUnmounted(async () => {
  if (vmb_map) {
    const map = await vmb_map.promise
    map.removeControl(store.geolocationControl)
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

.mapboxgl-ctrl-geolocate {
  display: none !important;
}
</style>
