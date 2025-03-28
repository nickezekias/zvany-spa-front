import { ref } from 'vue'
import { defineStore } from 'pinia'
import objService from '@/app/features/vendors/store/adapters/vendor.store.service'
import Obj from '@/app/models/business.model'

export const useVendorStoreStore = defineStore('vendorStoreStore', () => {
  const obj = ref<Obj | null>(null)

  async function get(id: string) {
    const response = await objService.get(id)
    obj.value = Obj.fromObject(response.data.data)
  }

  return {
    obj,

    get,
  }
})
