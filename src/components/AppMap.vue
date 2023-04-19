<template>
  <MapboxMap v-bind="mapOptions" class="map">
    <MapboxGeogeometryPolygon :path="routeCoordinates">
      <MapboxGeogeometryLine
        :width="6"
        color="#754c00"
        join="round"
        cap="round"
      />
    </MapboxGeogeometryPolygon>
    <MapboxMarker
      v-for="point in store.pointsOfInterest"
      :key="point._id"
      :lngLat="[point.coordinates.lng, point.coordinates.lat]"
      @click="emit('clickMarker', point)"
    >
      <template #icon>
        <AppMapMarker
          :label="generateMarkerLabel(point)"
          :color="point.category?.color?.hex"
        />
      </template>
    </MapboxMarker>
    <AppMapCurrentLocation />
    <MapboxNavigationControl :show-compass="false" />
  </MapboxMap>
</template>

<script setup lang="ts">
import AppMapCurrentLocation from '@/components/AppMapCurrentLocation.vue'
import AppMapMarker from '@/components/AppMapMarker.vue'
import { pointsBounds, routeCenter, routeCoordinates } from '@/lib/data'
import { MAPBOX_ACCESS_TOKEN } from '@/lib/mapbox'
import { generateMarkerLabel } from '@/lib/sanity'
import { useStore } from '@/store'
import {
  MapboxGeogeometryLine,
  MapboxGeogeometryPolygon,
  MapboxMap,
  MapboxMarker,
  MapboxNavigationControl,
} from 'vue-mapbox-ts'

const emit = defineEmits<{
  (e: 'clickMarker', pointId: any): void
}>()

const store = useStore()

const mapOptions = {
  accessToken: MAPBOX_ACCESS_TOKEN,
  mapStyle: 'mapbox://styles/barokkeinfluencers/cle8r22w8001e01q1963x5wo8',
  center: routeCenter,
  zoom: 9,
  bounds: pointsBounds,
  fitBoundsOptions: {
    padding: 40,
  },
  attributionControl: false,
}
</script>

<style lang="scss" scoped>
.map {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
