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
import Divider from 'primevue/divider'
import { Form } from '@primevue/forms'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import Message from 'primevue/message'
import Rating from 'primevue/rating'
import Ripple from 'primevue/ripple'
import Skeleton from 'primevue/skeleton'
import Tag from 'primevue/tag'
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
app.component('PrimeDivider', Divider)
app.component('PrimeForm', Form)
app.component('PrimeInputText', InputText)
app.component('PrimeMenu', Menu)
app.component('PrimeMessage', Message)
app.component('PrimeRating', Rating)
app.component('PrimeSkeleton', Skeleton)
app.component('PrimeTag', Tag)
app.component('PrimeToolbar', Toolbar)

app.directive('ripple', Ripple)

app.mount('#app')
