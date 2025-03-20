<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useI18n } from 'vue-i18n'
import { useProductStore } from '@/stores/product.store'
import { useToast } from 'primevue'

import NikkToast from '@/app/utils/NikkToast'

import type { AxiosError } from 'axios'

import DefaultProductCard from '@/components/products/DefaultCard.vue'

import { useAccountStore } from '@/stores/account.store'

const accountStore = useAccountStore()
const objStore = useProductStore()
const { t } = useI18n()
const toast = useToast()

const nikkToast = new NikkToast(toast, t)
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    await objStore.getAll()
  } catch (error) {
    nikkToast.httpError(error as AxiosError)
  } finally {
    loading.value = false
  }
})
</script>
<template>
  <div class="flex flex-col gap-8">
    <!-- HERO COMPONENT -->
    <div class="hero h-64 bg-primary flex justify-center items-center">
      <div class="hero-content text-center text-white">
        <div class="max-w-md">
          <p class="py-6">Best iPhone Deals</p>
          <h1 class="text-5xl font-bold">60% Off</h1>
        </div>
      </div>
    </div>

    <section class="px-4">
      <div
        v-if="!accountStore.isAuthenticated"
        class="account border border-primary p-2 border-dashed text-center"
      >
        <h3 class="font-semibold text-lg uppercase">
          {{ $t('features.products.index.signInForBestExperience') }}
        </h3>
        <div class="flex flex-col mt-2 gap-4">
          <router-link to="/login">
            <PrimeButton class="" fluid :label="$t('labels.login')" />
          </router-link>

          <router-link to="/register">
            <PrimeButton text class="" fluid :label="$t('labels.register')" />
          </router-link>
        </div>
      </div>

      <div v-else class="account border border-primary p-2 border-dashed text-center">
        <h3 class="font-semibold text-lg uppercase">
          {{ $t('features.products.index.welcomeVendor', { name: accountStore.user?.fullName }) }}
        </h3>
        <div class="flex justify-center">
          <router-link to="/vendors">
            <PrimeButton
              icon="pi pi-th-large"
              text
              fluid
              rounded
              class=""
              :label="$t('labels.vendorDashboard')"
            />
          </router-link>
        </div>
      </div>
    </section>

    <section class="px-4">
      <h3 class="font-semibold mb-4">{{ $t('labels.moreToLove') }}</h3>
      <div class="grid grid-cols-2 gap-2">
        <router-link
          v-for="obj in objStore.objects"
          :key="obj.id"
          class="w-full"
          :to="`/p?id=${obj.id}`"
        >
          <DefaultProductCard :obj="obj" />
        </router-link>
      </div>
    </section>
  </div>
</template>
