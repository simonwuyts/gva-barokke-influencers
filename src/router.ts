import { createRouter, createWebHashHistory } from 'vue-router'
import LanguageView from './views/LanguageView.vue'
import MapView from './views/MapView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'language',
      component: LanguageView,
    },
    {
      path: '/map',
      name: 'map',
      component: MapView,
    },
  ],
})

export default router
