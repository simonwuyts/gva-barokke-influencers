<template>
  <div class="header">
    <AppLogo />
    <div class="header__actions">
      <AppIcon
        name="info"
        class="header__action"
        @click="colofonIsVisible = true"
      />
    </div>
  </div>
  <AppOverlay v-model:visible="colofonIsVisible" v-slot="{ close }">
    <AppStack direction="vertical">
      <AppRichText :html="exportToHtml(store.currentSettings?.colofon)" />
      <AppButton @click="close">Sluiten</AppButton>
    </AppStack>
  </AppOverlay>
</template>

<script setup lang="ts">
import { exportToHtml } from '@/lib/sanity'
import { useStore } from '@/store'
import { ref } from 'vue'
import AppButton from './AppButton.vue'
import AppIcon from './AppIcon.vue'
import AppLogo from './AppLogo.vue'
import AppOverlay from './AppOverlay.vue'
import AppRichText from './AppRichText.vue'
import AppStack from './AppStack.vue'

const store = useStore()

const colofonIsVisible = ref(false)
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.header {
  align-items: center;
  background: $color-brown;
  color: #fff;
  display: flex;
  flex: none;
  justify-content: space-between;
  padding: 0.8rem;
}

.header__actions {
  align-items: center;
  display: flex;
  gap: 0.8rem;
  padding: 0 0.8rem;
}

.header__action {
  color: $color-beige;
}
</style>
