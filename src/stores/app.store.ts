import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
  const adminHomeRoute = { name: 'admin.dashboard' }
  const appLoading = ref(false)
  const appName = 'Zvany'
  const homeRoute = { name: 'dashboard' }

  const setAppLoading = (value: boolean) => {
    appLoading.value = value
  }

  return {
    adminHomeRoute,
    appLoading,
    appName,
    homeRoute,

    setAppLoading,
  }
})
