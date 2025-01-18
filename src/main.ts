import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18n from './locales/i18n'

import PrimeVue from 'primevue/config'
import primevueConfig from './lib/primevue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue, primevueConfig)

app.mount('#app')
