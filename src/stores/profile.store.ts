import { defineStore } from 'pinia'
import objService from '@/app/features/settings/profile/adapter/profile.service'

export const useProfileStore = defineStore('profileStore', () => {
  async function verifyIDDocument(payload: FormData) {
    const resp = await objService.verifyIDDocument(payload)
    console.log('RESP_STORE', resp.data)
  }

  return {
    verifyIDDocument,
  }
})
