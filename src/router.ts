import { createRouter, createWebHashHistory } from 'vue-router'
import LanguageView from './views/LanguageView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'language',
      component: LanguageView,
    },
  ],
})

export default router
