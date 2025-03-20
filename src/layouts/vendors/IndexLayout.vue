<script setup lang="ts">
import PrimeToast from 'primevue/toast'
import TopBar from '@/layouts/vendors/TopBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface-50 dark:bg-[#121212]">
    <PrimeToast />
    <TopBar />

    <div class="flex flex-grow">
      <main class="flex-grow max-w-screen pb-[100vh] md:pb-32 overflow-x-hidden">
        <router-view />
      </main>
    </div>

    <!-- <div id="app" class="w-full">
      <div class="flex bg-surface-50 dark:bg-[#121212] w-screen overflow-y-auto">
        Content
        <div class="main-content">
          <div class="h-full">
           Top Bar

            <div class="flex-1">
              <RouterView />
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped></style>
