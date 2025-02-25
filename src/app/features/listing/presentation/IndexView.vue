<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useListingStore } from '@/stores/listing.store'
import { useI18n } from 'vue-i18n'
import { useToast } from 'primevue'

import NikkToast from '@/app/utils/NikkToast'
import Obj from '@/app/models/spaceListing.model'

import type { AxiosError } from 'axios'

import SearchBarComponent from '@/components/listings/SearchBarComponent.vue'
import SpaceOfferItemCard from '@/components/listings/SpaceOfferItemCard.vue'
import SpaceRequestItemCard from '@/components/listings/SpaceRequestItemCard.vue'

const objStore = useListingStore()
const { t } = useI18n()
const toast = useToast()

const nikkToast = new NikkToast(toast, t)

const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    await objStore.getAllSpaceOfferListings()
    loading.value = false
  } catch (error) {
    nikkToast.httpError(error as AxiosError)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <div
      class="hero min-h-96 bg-primary dark:bg-surface-950 flex flex-col p-6 md:px-32 lg:px-64 gap-4 items-center justify-center"
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
        <div class="w-full flex flex-col gap-6">
          <div class="flex gap-4">
            <PrimeTag severity="success" :value="$t('labels.offer', 2)" />

            <h3 class="text-xl md:text-3xl font-bold">
              {{ $t('features.listings.index.offers') }}
            </h3>
          </div>
          <div v-if="loading" class="flex flex-col gap-4">
            <PrimeSkeleton v-for="i in 3" :key="i" width="100%" height="18rem" />
          </div>
          <SpaceOfferItemCard
            v-else
            class=""
            v-for="obj in objStore.spaceListings"
            :key="obj.id"
            :data="Obj.fromObject(obj)"
          />
        </div>

        <div class="w-full flex flex-col gap-6">
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
