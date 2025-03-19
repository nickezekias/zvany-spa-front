<script setup lang="ts">
import PrimeToast from 'primevue/toast'
import TopBar from '@/layouts/vendors/TopBar.vue'
</script>

<template>
  <div class="flex">
    <PrimeToast />
    <div id="app" class="w-full">
      <div class="flex bg-surface-50 dark:bg-[#121212] w-screen overflow-hidden">
        <!-- Content -->
        <div class="main-content">
          <div class="flex flex-col h-screen">
            <!-- Top Bar -->
            <TopBar />

            <div class="flex-1 overflow-y-auto">
              <RouterView />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .main-content {
    width: 100%;
  }
}
</style>
