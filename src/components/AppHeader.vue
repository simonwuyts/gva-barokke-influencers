<template>
  <div class="header">
    <AppLogo />
    <div class="header__actions">
      <AppIcon
        v-if="store.contentLanguage"
        name="format_list_bulleted"
        class="header__action"
        @click="listIsVisible = true"
      />
      <AppIcon
        v-if="store.contentLanguage"
        name="info"
        class="header__action"
        @click="colofonIsVisible = true"
      />
    </div>
  </div>
  <AppOverlay v-model:visible="colofonIsVisible" v-slot="{ close }">
    <AppStack direction="vertical">
      <AppButton type="default" @click="store.switchContentLanguage">
        {{
          store.contentLanguage === 'en'
            ? 'Nederlandse versie'
            : 'English version'
        }}
      </AppButton>
      <AppRichText :html="exportToHtml(store.currentSettings?.colofon)" />
      <AppButton @click="close">
        {{ store.contentLanguage === 'en' ? 'Close' : 'Sluiten' }}
      </AppButton>
    </AppStack>
  </AppOverlay>
  <AppOverlay v-model:visible="listIsVisible" v-slot="{ close }">
    <AppStack direction="vertical">
      <AppRichText>
        <h2>Route</h2>
        <AppPointLabel
          v-for="point in store.sortedPointsOfInterest"
          :key="point._id"
          :label="generateMarkerLabel(point)"
          :title="
            store.contentLanguage === 'en'
              ? point.contentEn.title
              : point.contentNl.title
          "
        />
      </AppRichText>
      <AppButton @click="close">
        {{ store.contentLanguage === 'en' ? 'Close' : 'Sluiten' }}
      </AppButton>
    </AppStack>
  </AppOverlay>
</template>

<script setup lang="ts">
import { exportToHtml, generateMarkerLabel } from '@/lib/sanity'
import { useStore } from '@/store'
import { ref } from 'vue'
import AppButton from './AppButton.vue'
import AppIcon from './AppIcon.vue'
import AppLogo from './AppLogo.vue'
import AppOverlay from './AppOverlay.vue'
import AppPointLabel from './AppPointLabel.vue'
import AppRichText from './AppRichText.vue'
import AppStack from './AppStack.vue'

const store = useStore()

const colofonIsVisible = ref(false)
const listIsVisible = ref(false)
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.header {
  align-items: center;
  background: $color-brown url('/header-bg.svg') no-repeat 0 0 / contain;
  color: #fff;
  display: flex;
  flex: none;
  justify-content: space-between;
  padding: 0.8rem;
}

.header__actions {
  align-items: center;
  display: flex;
  gap: 1.6rem;
  padding: 0 0.8rem;
}

.header__action {
  color: $color-beige;
  cursor: pointer;
}
</style>
