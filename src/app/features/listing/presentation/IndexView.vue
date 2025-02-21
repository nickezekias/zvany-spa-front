<script setup lang="ts">
import SearchBarComponent from '@/components/listings/SearchBarComponent.vue'
import SpaceOfferItemCard from '@/components/listings/SpaceOfferItemCard.vue'
import SpaceRequestItemCard from '@/components/listings/SpaceRequestItemCard.vue'
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

    <div class="nikk-container md:px-60 flex">
      <div class="flex w-full gap-8">
        <div class="w-full grid grid-cols-1 gap-6">
          <div class="flex gap-4">
            <PrimeTag severity="success" :value="$t('labels.offer', 2)" />
            <h3 class="text-xl md:text-3xl font-bold">
              {{ $t('features.listings.index.offers') }}
            </h3>
          </div>
          <SpaceOfferItemCard class="" v-for="i in 4" :key="i" />
        </div>

        <div class="w-full grid grid-cols-1 gap-6">
          <div class="flex gap-4">
            <PrimeTag severity="info" :value="$t('labels.request', 2)" />
            <h3 class="text-xl md:text-3xl font-bold">
              {{ $t('features.listings.index.requests') }}
            </h3>
          </div>
          <SpaceRequestItemCard class="" v-for="i in 4" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>
