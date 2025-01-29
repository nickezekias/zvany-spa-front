<script setup lang="ts">
import UserAvatar from '@/components/user/UserAvatar.vue'
import { useAccountStore } from '@/stores/account.store'
import IndexContent from '../IndexContent.vue'

const accountStore = useAccountStore()
</script>

<template>
  <div class="flex flex-col">
    <div
      class="hero h-64 w-full bg-gray-50 dark:bg-surface-950 flex flex-col items-center justify-center"
    >
      <UserAvatar class="w-16 md:w-24 h-16 md:h-24 text-2xl md:text-5xl" />
      <span class="text-xl font-medium mt-2">{{ accountStore.userModel?.fullName }}</span>
      <span class="text-sm text-gray-500">{{ accountStore.userModel?.email }}</span>
    </div>

    <div class="nikk-container !pt-0">
      <IndexContent />
    </div>
  </div>
</template>
