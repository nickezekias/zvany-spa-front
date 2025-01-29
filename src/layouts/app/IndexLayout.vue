<script setup lang="ts">
import TopBarComponent from './TopBarComponent.vue'
import FooterComponent from './FooterComponent.vue'
import { ref } from 'vue'
import BottomBar from './mobile/BottomBar.vue'

const darkMode = ref(false)

// Automatically switch to dark mode based on system preferences
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  darkMode.value = true
}
</script>

<template>
  <div :class="{ dark: darkMode }" class="min-h-screen flex flex-col">
    <TopBarComponent />
    <div class="flex flex-grow">
      <main class="flex-grow max-w-screen overflow-x-hidden">
        <router-view />
      </main>
    </div>
    <FooterComponent />
    <BottomBar class="md:hidden" />
  </div>
</template>
