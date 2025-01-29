import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18n from './locales/i18n'

import PrimeVue from 'primevue/config'
import primevueConfig from './lib/primevue'

import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Badge from 'primevue/badge'
import Card from 'primevue/card'
import Menu from 'primevue/menu'
import Message from 'primevue/message'
import Ripple from 'primevue/ripple'
import Toolbar from 'primevue/toolbar'

import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue, primevueConfig)
app.use(ToastService)

app.component('PrimeAvatar', Avatar)
app.component('PrimeBadge', Badge)
app.component('PrimeButton', Button)
app.component('PrimeCard', Card)
app.component('PrimeMenu', Menu)
app.component('PrimeMessage', Message)
app.component('PrimeToolbar', Toolbar)

app.directive('ripple', Ripple)

app.mount('#app')
