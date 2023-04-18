import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/HomeView.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('./views/MapView.vue'),
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import('./views/ResetView.vue'),
    },
  ],
})

export default router
