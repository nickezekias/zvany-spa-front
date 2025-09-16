<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app.store'
import { RouterView } from 'vue-router'
import PrimeProgressBar from 'primevue/progressbar'

const appStore = useAppStore()

onMounted(() => {
  const persistedLocale = appStore.getPersistedLocale()
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
    <PrimeSkeleton v-if="appStore.appLoading" height="100vh" width="100%" />
    <RouterView v-else />
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
