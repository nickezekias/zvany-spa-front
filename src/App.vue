<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app.store'
import { RouterView } from 'vue-router'
import PrimeToast from 'primevue/toast'
import PrimeProgressBar from 'primevue/progressbar'

const appStore = useAppStore()

onMounted(() => {
  const persistedLocale = appStore.getPersistedLocale()
  console.log('persiste locale', persistedLocale)
  if (persistedLocale) {
    appStore.changeLocale(persistedLocale)
  } else {
    appStore.setLocaleFromBrowser()
  }
})
</script>

<template>
  <div class="main">
    <PrimeProgressBar
      v-if="appStore.appLoading"
      mode="indeterminate"
      class="app-progress-bar"
    ></PrimeProgressBar>

    <PrimeToast />

    <RouterView />
  </div>
</template>

<style scoped>
.app-progress-bar {
  height: 3px;
  width: 100%;
  border-radius: 0;
  /* stub comment - to remove */
}
</style>
