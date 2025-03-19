<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'
import UserAvatarMenu from '@/components/user/UserAvatarMenu.vue'

const appStore = useAppStore()
</script>
<template>
  <PrimeToolbar class="py-0 px-[3rem] border-0 border-b rounded-none">
    <template #start>
      <div class="logo">
        <router-link to="/">
          <span class="font-bold text-xl">{{ appStore.appName }}</span>
        </router-link>
      </div>
    </template>

    <template #center>
      <router-link
        :to="{ name: 'vendors.products.index' }"
        exactActiveClass="border-b border-primary"
        class="hidden md:flex py-2"
      >
        <PrimeButton text plain :label="$t('labels.product', 2)" />
      </router-link>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2">
        <UserAvatarMenu />
      </div>
    </template>
  </PrimeToolbar>
</template>
