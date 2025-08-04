import { ref } from 'vue'
import { defineStore } from 'pinia'
import objService from '@/app/features/vendors/store/adapters/vendor.store.service'
import Obj from '@/app/models/business.model'
import type { AxiosError } from 'axios'

export const useVendorStoreStore = defineStore('vendorStoreStore', () => {
  const errors = ref<AxiosError | Record<string, string | object | string[]>>({
    shit: 'hit the fan',
    fan: ['spread', 'the', 'shit'],
    crazy: { little: 'pumpkin' },
  })
  const obj = ref<Obj | null>(null)

  async function get(id: string) {
    const response = await objService.get(id)
    obj.value = Obj.fromObject(response.data.data)
  }

  function setErrors(newErrors: AxiosError | Record<string, string | object | string[]>) {
    errors.value = newErrors
  }

  return {
    errors,
    obj,

    get,
    setErrors,
  }
})
