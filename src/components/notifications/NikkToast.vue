<script setup lang="ts">
import { getApiErrors } from '@/app/utils/helpers'
import { useVendorStoreStore } from '@/stores/vendor/store.store'
import type { AxiosError } from 'axios'

import PrimeToast from 'primevue/toast'
import { computed } from 'vue'

interface Props {
  position?:
    | 'top-right'
    | 'top-left'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'center'
    | undefined
}

const vendorStore = useVendorStoreStore()

const computedErrors = computed(() => {
  return getApiErrors(vendorStore.errors as AxiosError)
})

const errorKeys = (errors: string | object) => {
  if (errors) {
    if (typeof errors === 'string') {
      return null
    } else if (typeof errors === 'object') {
      return Object.keys(errors)
    } else {
      return null
    }
  } else {
    return null
  }
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top-right',
})

function getErrors(key: string) {
  return computedErrors.value[key]
}

function getType(obj: object) {
  const typeRes = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
  return typeRes
}
</script>
<template>
  <PrimeToast :position="props.position">
    <template #message="slotProps">
      <div class="flex flex-col items-start flex-auto">
        <!-- <div class="flex items-center gap-2">
          <img
            src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            class="rounded-full h-8 w-8"
          />
          <span class="font-bold">Amy Elsner</span>
        </div> -->
        <div class="font-medium text-lg" v-text="$t(`${slotProps.message.summary}`)"></div>
        <div class="text-color">
          <div v-if="getType(computedErrors) === 'string'">{{ vendorStore.errors }}</div>
          <div v-else-if="typeof computedErrors == 'object'">
            <div v-for="key in errorKeys(computedErrors)" :key="key" class="text-sm text-red-600">
              <span v-text="$t(`${getErrors(key)}`)"></span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PrimeToast>
</template>
