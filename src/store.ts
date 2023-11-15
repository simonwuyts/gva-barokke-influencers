import { fetchPointsOfInterest, fetchSettings } from '@/lib/sanity'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { PointOfInterest, Settings } from './types'

export const useStore = defineStore('global', () => {
  // Geolocation

  const geolocationControl = ref<any>()
  const geolocationIsActive = ref(false)

  function triggerGeolocation() {
    console.log(geolocationControl.value)
    geolocationControl.value.trigger()
  }

  // Language

  const contentLanguage = useStorage<string | null>('contentLanguage', null)

  function setContentLanguage(language: 'nl' | 'en') {
    contentLanguage.value = language
  }

  function switchContentLanguage() {
    switch (contentLanguage.value) {
      case 'en':
        contentLanguage.value = 'nl'
        break
      case 'nl':
        contentLanguage.value = 'en'
        break
      default:
        contentLanguage.value = 'nl'
        break
    }
  }

  // Settings

  const settings = ref<Settings>()

  const currentSettings = computed(() => {
    switch (contentLanguage.value) {
      case 'nl':
        return settings.value?.settingsNl
      case 'en':
        return settings.value?.settingsEn
      default:
        return undefined
    }
  })

  async function getSettings() {
    settings.value = await fetchSettings()
  }

  // Points of interest

  const pointsOfInterest = ref<PointOfInterest[]>([])
  const selectedPointOfInterestId = ref<null | string>(null)

  const sortedPointsOfInterest = computed(() => {
    const regulars = pointsOfInterest.value
      .filter((point) => !point.sattelite)
      .sort((a, b) => {
        const numberA = parseInt(a.number.replace(/[^\d]/g, ''))
        const numberB = parseInt(b.number.replace(/[^\d]/g, ''))
        return numberA - numberB
      })

    const sattelites = pointsOfInterest.value
      .filter((point) => point.sattelite)
      .sort((a, b) => {
        const numberA = parseInt(a.number.replace(/[^\d]/g, ''))
        const numberB = parseInt(b.number.replace(/[^\d]/g, ''))
        return numberA - numberB
      })
    return [...regulars, ...sattelites]
  })

  const selectedPointOfInterest = computed(() => {
    if (selectedPointOfInterestId.value !== null) {
      return pointsOfInterest.value.find(
        (point) => point._id === selectedPointOfInterestId.value
      )
    } else {
      return null
    }
  })

  const selectedPointOfInterestContent = computed(() => {
    switch (contentLanguage.value) {
      case 'en':
        return selectedPointOfInterest.value?.contentEn
      default:
        return selectedPointOfInterest.value?.contentNl
    }
  })

  function selectPointOfInterest(pointId: string) {
    selectedPointOfInterestId.value = pointId
  }

  function unselectPointOfInterest() {
    selectedPointOfInterestId.value = null
  }

  async function getPointsOfInterest() {
    pointsOfInterest.value = await fetchPointsOfInterest()
  }

  // Reset

  function reset() {
    contentLanguage.value = null
  }

  return {
    geolocationControl,
    geolocationIsActive,
    triggerGeolocation,
    contentLanguage,
    setContentLanguage,
    switchContentLanguage,
    settings,
    currentSettings,
    getSettings,
    pointsOfInterest,
    sortedPointsOfInterest,
    selectedPointOfInterestId,
    selectedPointOfInterest,
    selectedPointOfInterestContent,
    selectPointOfInterest,
    unselectPointOfInterest,
    getPointsOfInterest,
    reset,
  }
})
