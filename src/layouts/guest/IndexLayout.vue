<script setup lang="ts">
import { RouterView } from 'vue-router'
import PrimeToolbar from 'primevue/toolbar'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <PrimeToolbar class="py-0 rounded-none border-0 border-b">
      <template #start>
        <router-link to="/login">
          <div class="logo font-black cursor-pointer">LugShare</div>
        </router-link>
      </template>

      <template #end>
        <router-link to="/login" activeClass="border-b border-primary" class="ml-3 py-2">
          <PrimeButton text plain class="" :label="$t('labels.login')" />
        </router-link>

        <router-link to="/register" activeClass="border-b border-primary" class="py-2">
          <PrimeButton text plain class="" :label="$t('labels.register')" />
        </router-link>
      </template>
    </PrimeToolbar>

    <main class="flex flex-grow pt-4 md:pt-16 pb-8">
      <RouterView />
    </main>
  </div>
</template>
