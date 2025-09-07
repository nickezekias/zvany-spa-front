<script setup lang="ts">
import { useAccountStore } from '@/stores/account.store'

const accountStore = useAccountStore()
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- HERO COMPONENT -->
    <div class="hero h-48 bg-primary flex justify-center items-center">
      <div class="hero-content text-center text-white">
        <div class="w-full md:max-w-md">
          <p class="py-2">{{ $t('labels.welcome') }},</p>
          <h1 class="text-xl font-bold mb-6">{{ accountStore.userModel?.fullName }}</h1>
          <router-link fluid class="mx-3" :to="{ name: 'vendors.index' }">
            <PrimeButton rounded severity="contrast" :label="$t('labels.vendorDashboard')" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- ORDERS -->
    <div class="px-2">
      <PrimeCard>
        <!-- <template #title>
          <h6>{{ $t('labels.myOrders') }}</h6>
        </template> -->
        <template #content>
          <div class="flex items-center justify-between">
            <!-- <PrimeButton
              size="small"
              text
              icon="pi pi-gift"
              iconPos="bottom"
              :label="$t('labels.toShip')"
              severity="secondary"
            /> -->

            <PrimeButton
              size="small"
              text
              icon="pi pi-shop"
              iconPos="bottom"
              :label="$t('labels.visitFrontStore')"
              severity="secondary"
            />

            <PrimeButton
              size="small"
              text
              icon="pi pi-cog"
              iconPos="bottom"
              :label="$t('labels.setting', 2)"
              severity="secondary"
            />

            <PrimeButton
              size="small"
              text
              icon="pi pi-power-off"
              iconPos="bottom"
              :label="$t('labels.logout')"
              severity="danger"
            />
          </div>
        </template>
      </PrimeCard>
    </div>
  </div>
</template>
