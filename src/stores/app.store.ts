import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
  const appLoading = ref(false)

  const setAppLoading = (value: boolean) => {
    appLoading.value = value
  }

  return {
    appLoading,

    setAppLoading,
  }
})
