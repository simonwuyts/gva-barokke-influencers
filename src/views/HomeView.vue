<template>
  <AppHeader />
  <AppContent :align-y="store.contentLanguage === null ? 'center' : 'top'">
    <template v-if="!store.contentLanguage">
      <AppStack direction="vertical">
        <AppButton @click="store.setContentLanguage('nl')">
          Nederlands
        </AppButton>
        <AppButton @click="store.setContentLanguage('en')">English</AppButton>
      </AppStack>
    </template>

    <template v-else>
      <AppStack direction="vertical">
        <AppRichText
          :html="exportToHtml(store.currentSettings?.introduction)"
        />
        <AppButton @click="goToMap">{{
          store.contentLanguage === 'nl' ? 'Ga naar de kaart' : 'Go to the map'
        }}</AppButton>
      </AppStack>
    </template>
  </AppContent>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppContent from '@/components/AppContent.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppRichText from '@/components/AppRichText.vue'
import AppStack from '@/components/AppStack.vue'
import { exportToHtml } from '@/lib/sanity'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

function goToMap() {
  router.push({ name: 'map' })
}
</script>
