<script setup lang="ts">
import { useAccountStore } from '@/stores/account.store'

const accountStore = useAccountStore()

const items = [
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m16.1 13.359l.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67c-1.192.111-3.645.051-6.539-1.643zm-5.91-5.876l.287-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.065 1.14.453 3.22 2.149 5.776z" clip-rule="evenodd"/><path fill="currentColor" d="M12.063 11.497c-2.946-2.929-1.88-4.008-1.873-4.015l-4.039 4.04c.667 1.004 1.535 2.081 2.664 3.204c1.14 1.134 2.26 1.975 3.322 2.596L16.1 13.36s-1.082 1.076-4.037-1.862" opacity="0.6"/></svg>
    `,
    label: 'labels.phone',
    isVerified: false,
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z" opacity="0.5"/><path fill="currentColor" d="M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"/></svg> 
    `,
    label: 'labels.email',
    isVerified: true,
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4" opacity="0.5"/><path fill="currentColor" d="M13.25 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M9 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"/></svg>
    `,
    label: 'labels.userID',
    isVerified: false,
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12c0-.442-.002-1.608-.004-2H2c-.002.392 0 1.558 0 2c0 3.771 0 5.657 1.171 6.828S6.23 20 10 20" opacity="0.5"/><path fill="currentColor" d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4M12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5zm-6.5 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"/></svg>
    `,
    label: 'labels.payment',
    isVerified: false,
  },
]
</script>

<template>
  <div class="flex gap-4 md:gap-6">
    <div class="flex flex-col w-full md:w-1/3 gap-4">
      <PrimeCard class="border w-full">
        <template #title>
          <span>{{ $t('labels.verification', 2) }}</span>
        </template>

        <template #content>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="item in items"
              :key="item.label"
              :class="item.isVerified ? 'text-primary' : 'text-gray-300'"
              class="h-8 w-8"
              :title="$t(`${item.label}`)"
              :aria-label="$t(`${item.label}`)"
            >
              <span v-html="item.icon"></span>
            </span>
          </div>
        </template>
      </PrimeCard>

      <PrimeCard class="border w-full">
        <template #title>
          <span>{{ $t('labels.about') }}</span>
        </template>

        <template #content>
          <div class="flex flex-col gap-2">
            <div class="flex">
              <span class="text-gray-500 me-3">{{ $t('labels.age') }}:</span>
              <span class="text-gray-800 flex-grow">--</span>
            </div>
            <div class="flex">
              <span class="text-gray-500 me-3">{{ $t('labels.city') }}:</span>
              <span class="text-gray-800 flex-grow">--</span>
            </div>
            <div class="flex">
              <span class="text-gray-500 me-3">{{ $t('labels.state') }}:</span>
              <span class="text-gray-800 flex-grow">--</span>
            </div>
            <div class="flex">
              <span class="text-gray-500 me-3">{{ $t('labels.country') }}:</span>
              <span class="text-gray-800 flex-grow">--</span>
            </div>
            <div class="flex">
              <span class="text-gray-500 me-3">{{ $t('labels.email') }}:</span>
              <span class="text-gray-800 flex-grow">{{ accountStore.userModel?.email }}</span>
            </div>
            <div class="flex">
              <span class="text-gray-500 me-3">{{ $t('labels.phone') }}:</span>
              <span class="text-gray-800 flex-grow">{{ accountStore.userModel?.phone }}</span>
            </div>
          </div>
        </template>
      </PrimeCard>
    </div>

    <div class="flex flex-grow">
      <div class="flex flex-col gap-4 w-full">
        <PrimeCard class="border">
          <template #title>
            <span>{{ $t('labels.recentSpaceListings') }}</span>
          </template>

          <template #content>
            <div class="flex items-center justify-center h-24">
              <span>{{ $t('hints.noSpaceListings') }}</span>
            </div>
          </template>
        </PrimeCard>

        <PrimeCard class="border">
          <template #title>
            <span>{{ $t('labels.recentSpaceRequests') }}</span>
          </template>

          <template #content>
            <div class="flex items-center justify-center h-24">
              <span>{{ $t('hints.noSpaceRequests') }}</span>
            </div>
          </template>
        </PrimeCard>
      </div>
    </div>
  </div>
</template>
