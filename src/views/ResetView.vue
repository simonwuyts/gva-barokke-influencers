<template>
  <AppContent align-y="center">
    <AppButton @click="goHome">Terug naar startscherm</AppButton>
  </AppContent>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppContent from '@/components/AppContent.vue'
import { useStore } from '@/store'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

function goHome() {
  router.push({ name: 'home' })
}

onMounted(() => {
  store.reset()
})
</script>
