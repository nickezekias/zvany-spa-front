import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
  const adminHomeRoute = { name: 'admin.dashboard' }
  const appLoading = ref(false)
  const appName = 'Zvany'
  const homeRoute = { name: 'home' }
  const locale = ref(import.meta.env.VUE_I18N_LOCALE ?? 'en')

  const setAppLoading = (value: boolean) => {
    appLoading.value = value
  }

  const setLocale = (value: string) => {
    locale.value = value
  }

  return {
    adminHomeRoute,
    appLoading,
    appName,
    homeRoute,
    locale,

    setAppLoading,
    setLocale,
  }
})
