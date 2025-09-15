<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAccountStore } from '@/stores/account.store'
import { useI18n } from 'vue-i18n'
import { useToast } from 'primevue'
import { useVendorStoreStore } from '@/stores/vendor/store.store'

import NikkToast from '@/app/utils/NikkToast'
import Obj from '@/app/models/business.model'

import type { AxiosError } from 'axios'

import AppPageTitle from '@/components/pages/AppPageTitle.vue'

const accountStore = useAccountStore()
const objStore = useVendorStoreStore()
const toast = useToast()
const { t } = useI18n()
const nikkToast = new NikkToast(toast, t)

const pageLoading = ref(false)
const obj = ref(Obj.initEmpty())

onMounted(async () => {
  pageLoading.value = true
  try {
    if (objStore.obj) {
      obj.value = objStore.obj
    } else if (accountStore.user?.business) {
      obj.value = accountStore.user?.business
    }
  } catch (e) {
    nikkToast.httpError(e as AxiosError)
  } finally {
    pageLoading.value = false
  }
})
</script>

<template>
  <div>
    <PrimeSkeleton v-if="pageLoading" width="100%" height="80%" />
    <div v-else class="nikk-container">
      <AppPageTitle
        title="features.businesses.businessSettings"
        subtitle="features.businesses.businessSettingsDesc"
      />

      <div class="content">
        <div class="hero">
          <div class="bg-gray-100 dark:bg-gray-800 h-96 relative">
            <div
              class="store-logo bg-gray-300 dark:bg-gray-950 border h-36 w-36 rounded-full absolute left-2/4 bottom-0"
            ></div>
          </div>
          <div class="store-details mt-24 text-center">
            <h2 class="text-xl md:text-2xl font-semibold">{{ obj.name }}</h2>
            <div class="flex flex-col md:flex-row gap-2 md:gap-4 md:justify-around">
              <span>
                <i class="pi pi-map me-2"></i>
                {{ obj.address }}
              </span>
              <span>
                <i class="pi pi-envelope me-2"></i>
                {{ obj.email }}
              </span>
              <span>
                <i class="pi pi-phone me-2"></i>
                {{ obj.phone }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.store-logo {
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
}
</style>
