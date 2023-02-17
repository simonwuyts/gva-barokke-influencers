import { bbox, centroid, polygon } from '@turf/turf'

export const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiYmFyb2trZWluZmx1ZW5jZXJzIiwiYSI6ImNsZTQ1aGo4cDBmb2MzcGx4b2ZiYnZlZTAifQ.oydFz-mErMMXBOuqJY093Q'

export function getDistance(
  startLat: number,
  startLng: number,
  destLat: number,
  destLng: number
) {
  const latDelta = Math.abs(startLat - destLat)
  const lngDelta = Math.abs(startLng - destLng)
  return Math.sqrt(Math.pow(latDelta, 2) + Math.pow(lngDelta, 2))
}

export function getCenterOfCoordinates(coordinates: number[][]) {
  return centroid(polygon([coordinates])).geometry.coordinates as [
    number,
    number
  ]
}

export function getBoundsOfCoordinates(coordinates: number[][]) {
  return bbox(polygon([coordinates])) as [number, number, number, number]
}
