import { fetchPointsOfInterest } from '@/lib/sanity'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PointOfInterest } from './types'

export const useStore = defineStore('global', () => {
  const pointsOfInterest = ref<PointOfInterest[]>([])

  async function getPointsOfInterest() {
    pointsOfInterest.value = await fetchPointsOfInterest()
  }

  return { pointsOfInterest, getPointsOfInterest }
})
