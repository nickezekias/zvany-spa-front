<script setup lang="ts">
import { RouterView } from 'vue-router'
import PrimeToolbar from 'primevue/toolbar'
</script>

<template>
  <div class="h-screen w-screen flex-col">
    <PrimeToolbar class="py-0 rounded-none border-none border-b">
      <template #start>
        <div class="logo">LugShare</div>
      </template>

      <template #end>
        <!-- <router-link to="/register" activeClass="border-b border-primary" class="py-2">
          <PrimeButton text plain class="" :label="$t('labels.register')" />
        </router-link> -->

        <router-link to="/login" activeClass="border-b border-primary" class="ml-3 py-2">
          <PrimeButton text plain class="" :label="$t('labels.login')" />
        </router-link>
      </template>
    </PrimeToolbar>

    <main class="mt-4 md:mt-16">
      <RouterView />
    </main>
  </div>
</template>
