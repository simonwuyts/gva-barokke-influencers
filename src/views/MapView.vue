<template>
  <AppHeader />
  <AppContent>
    <AppMap @click-marker="handleClick($event)" />
    <div class="location-button">
      <AppButton
        type="default"
        icon="my_location"
        inline
        @click="store.triggerGeolocation"
      >
        {{ store.contentLanguage === 'en' ? 'My location' : 'Mijn locatie' }}
      </AppButton>
    </div>
  </AppContent>
  <AppOverlay
    :visible="store.selectedPointOfInterestId !== null"
    @close="handleClose"
    v-slot="{ close }"
  >
    <AppStack
      direction="vertical"
      :key="store.selectedPointOfInterestId || 'idle'"
    >
      <AppPhoto :src="store.selectedPointOfInterest?.image" />
      <AppRichText>
        <h1>
          {{ generateMarkerLabel(store.selectedPointOfInterest) }}.
          {{ store.selectedPointOfInterestContent?.title }}
        </h1>
        <div
          v-html="
            exportToHtml(store.selectedPointOfInterestContent?.description)
          "
        />
      </AppRichText>
      <AppAudioPlayer :src="store.selectedPointOfInterestContent?.audio" />
      <AppButton @click="close">
        {{ store.contentLanguage === 'en' ? 'Close' : 'Sluiten' }}
      </AppButton>
    </AppStack>
  </AppOverlay>
</template>

<script setup lang="ts">
import AppAudioPlayer from '@/components/AppAudioPlayer.vue'
import AppButton from '@/components/AppButton.vue'
import AppContent from '@/components/AppContent.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppMap from '@/components/AppMap.vue'
import AppOverlay from '@/components/AppOverlay.vue'
import AppPhoto from '@/components/AppPhoto.vue'
import AppRichText from '@/components/AppRichText.vue'
import AppStack from '@/components/AppStack.vue'
import { exportToHtml, generateMarkerLabel } from '@/lib/sanity'
import { useStore } from '@/store'
import type { PointOfInterest } from '@/types'
import 'mapbox-gl/dist/mapbox-gl.css'
import { onMounted } from 'vue'

const store = useStore()

onMounted(async () => {
  await store.getPointsOfInterest()
})

function handleClick(point: PointOfInterest) {
  store.selectPointOfInterest(point._id)
}

function handleClose() {
  store.unselectPointOfInterest()
}
</script>

<style lang="scss" scoped>
.location-button {
  bottom: 0.8rem;
  position: fixed;
  right: 0.8rem;
}
</style>
