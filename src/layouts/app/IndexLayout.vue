<script setup lang="ts">
import TopBarComponent from './TopBarComponent.vue'
import MobileTopBar from '@/layouts/app/mobile/TopBar.vue'
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
    <TopBarComponent class="hidden md:block" />
    <MobileTopBar class="md:hidden" />

    <div class="flex flex-grow">
      <main class="flex-grow max-w-screen pb-[100vh] md:pb-32 overflow-x-hidden">
        <router-view />
      </main>
    </div>

    <FooterComponent class="mb-32 md:mb-0" />

    <BottomBar class="md:hidden" />
  </div>
</template>
