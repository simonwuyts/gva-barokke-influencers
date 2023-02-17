<template>
  <MapboxMap v-bind="mapOptions" class="map">
    <MapboxGeogeometryPolygon :path="routeCoordinates">
      <MapboxGeogeometryLine
        :width="6"
        color="#3c4f78"
        join="round"
        cap="round"
      />
    </MapboxGeogeometryPolygon>
    <MapboxMarker
      v-for="point in store.pointsOfInterest"
      :key="point._id"
      :lngLat="[point.coordinates.lng, point.coordinates.lat]"
    >
      <template #icon>
        <AppMapMarker
          :icon="point.category?.icon"
          :color="point.category?.color?.hex"
        />
      </template>
    </MapboxMarker>
  </MapboxMap>
</template>

<script setup lang="ts">
import AppMapMarker from '@/components/AppMapMarker.vue'
import { routeBounds, routeCenter, routeCoordinates } from '@/lib/data'
import { MAPBOX_ACCESS_TOKEN } from '@/lib/mapbox'
import { useStore } from '@/store'
import {
  MapboxGeogeometryLine,
  MapboxGeogeometryPolygon,
  MapboxMap,
  MapboxMarker,
} from 'vue-mapbox-ts'

const store = useStore()

const mapOptions = {
  accessToken: MAPBOX_ACCESS_TOKEN,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: routeCenter,
  zoom: 9,
  bounds: routeBounds,
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
