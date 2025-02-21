<script setup lang="ts">
import SearchBarComponent from '@/components/listings/SearchBarComponent.vue'
</script>

<template>
  <div>
    <div
      class="hero min-h-96 bg-primary flex flex-col p-6 md:px-32 lg:px-64 gap-4 items-center justify-center"
    >
      <div class="text-center">
        <h1 class="text-xl md:text-4xl font-bold text-white">
          {{ $t('features.listings.index.hero.title') }}
        </h1>
        <p class="text-sm md:text-lg text-white">
          {{ $t('features.listings.index.hero.subtitle') }}
        </p>
      </div>
      <SearchBarComponent />
    </div>
  </div>
</template>
