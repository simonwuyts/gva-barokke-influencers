import { createPinia } from 'pinia'
import { createApp } from 'vue'

import router from '@/router'
import App from './App.vue'

import '@/assets/styles/main.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
