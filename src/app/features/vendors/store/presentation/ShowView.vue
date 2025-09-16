<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAccountStore } from '@/stores/account.store'
import { useProductStore } from '@/stores/product.store'
import { useVendorStoreStore } from '@/stores/vendor/store.store'
import { useToast } from 'primevue'

import NikkToast from '@/app/utils/NikkToast'
import Obj from '@/app/models/business.model'

import type { AxiosError } from 'axios'

import DefaultProductCard from '@/components/products/DefaultCard.vue'

const accountStore = useAccountStore()
const productStore = useProductStore()
const objStore = useVendorStoreStore()
const toast = useToast()
const { t } = useI18n()
const nikkToast = new NikkToast(toast, t)

const pageLoading = ref(false)
const obj = ref(accountStore.user?.business || Obj.initEmpty())

const coverImageStyle = computed(() => {
  return {
    backgroundImage: `url('${obj.value.coverImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
})

const logoStyle = computed(() => {
  return {
    backgroundImage: `url('${obj.value.logo}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
})

onMounted(async () => {
  pageLoading.value = true
  try {
    if (objStore.obj) {
      obj.value = objStore.obj
    } else if (accountStore.user?.business) {
      obj.value = accountStore.user?.business
    }
    const filter = {
      itemsPerPage: -1,
      sortBy: ['products.name'],
    }
    await productStore.getAll(filter, obj.value.id)
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
    <div v-else class="grid grid-cols-12 gap-6 px-4 md:px-12 lg:px-24 py-16">
      <!-- CATEGORIES -->
      <div class="col-span-12 md:col-span-4 lg:col-span-3 border">
        <h3>{{ $t('labels.productCategory', 2) }}</h3>
      </div>

      <!-- STORE -->
      <div class="store-page col-span-12 md:col-span-8 lg:col-span-9">
        <div class="hero">
          <div class="bg-gray-100 dark:bg-gray-800 h-96 relative" :style="coverImageStyle">
            <div
              :style="logoStyle"
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

        <div class="store-products mt-12">
          <h4 class="text-xl font-medium mb-4 border-b text-secondary secondary-text">
            {{ $t('labels.product', 2) }}
          </h4>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6">
            <router-link
              v-for="obj in productStore.objects"
              :key="obj.id"
              class="w-full"
              :to="`/p/${obj.id}`"
            >
              <DefaultProductCard :obj="obj" />
            </router-link>
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
