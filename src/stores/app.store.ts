import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config'
import { en } from 'primelocale/en.json'
import { fr } from 'primelocale/fr.json'

export const useAppStore = defineStore('appStore', () => {
  const { locale: i18nLocale } = useI18n()
  // Define the PrimeVue locales
  const primeLocales = {
    en: en,
    fr: fr,
    // Add more locales as needed
  }

  const adminHomeRoute = { name: 'admin.dashboard' }
  const appLoading = ref(false)
  const appName = 'Zvany'
  const homeRoute = { name: 'home' }
  const locale = ref(import.meta.env.VUE_I18N_LOCALE ?? 'en')

  const changeLocale = (language: string) => {
    appLoading.value = true
    // Change locale for Vue-i18n
    i18nLocale.value = language

    //@ts-expect-error locale type differences
    PrimeVue.locale = primeLocales[language]

    setLocale(language)
    window.setTimeout(() => {
      appLoading.value = false
    }, 1000)
  }

  const getPersistedLocale = () => {
    return localStorage.getItem('locale') ?? ''
  }

  const persistLocale = () => {
    localStorage.setItem('locale', locale.value)
  }

  const setAppLoading = (value: boolean) => {
    appLoading.value = value
  }

  const setLocale = (value: string) => {
    locale.value = value
    persistLocale()
  }

  const setLocaleFromBrowser = () => {
    const browserLocale = navigator.language.split('-')[0]
    if (locale.value !== browserLocale) {
      changeLocale(browserLocale)
    }
  }

  return {
    adminHomeRoute,
    appLoading,
    appName,
    homeRoute,
    locale,

    changeLocale,
    getPersistedLocale,
    setAppLoading,
    setLocale,
    setLocaleFromBrowser,
  }
})
