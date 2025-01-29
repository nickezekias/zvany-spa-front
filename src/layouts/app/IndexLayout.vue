<script setup lang="ts">
import TopBarComponent from './TopBarComponent.vue'
import FooterComponent from './FooterComponent.vue'
import { ref } from 'vue'

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
      <main class="flex-grow p-4 pb-8">
        <router-view />
      </main>
    </div>
    <FooterComponent />
  </div>
</template>
