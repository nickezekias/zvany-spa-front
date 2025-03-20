<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app.store'

import MobileSearchInput from '@/components/forms/MobileSearchInput.vue'

const appStore = useAppStore()
const search = ref('')
</script>

<template>
  <div class="py-1 px-4 bg-primary text-white">
    <div class="flex justify-between items-center">
      <router-link :to="appStore.homeRoute">
        <div class="logo font-black cursor-pointer">{{ appStore.appName }}</div>
      </router-link>

      <PrimeButton
        size="small"
        rounded
        severity="contrast"
        class="p-1 text-white"
        text
        plain
        aria-label="Favorites"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
            <path
              d="M12 5.5C7.5.826 2 4.275 2 9.138s4.02 7.454 6.962 9.774C10 19.729 11 20.5 12 20.5"
            />
            <path
              d="M12 5.5C16.5.826 22 4.275 22 9.138s-4.02 7.454-6.962 9.774C14 19.729 13 20.5 12 20.5"
              opacity="0.5"
            />
          </g>
        </svg>
      </PrimeButton>
    </div>

    <div class="mt-1">
      <MobileSearchInput v-model="search" class="w-full text-white" />
    </div>
  </div>
</template>
