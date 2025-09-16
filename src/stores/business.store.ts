import { defineStore } from 'pinia'

import objService from '@/app/features/business/adapters/business.service'
import Obj from '@/app/models/business.model'

export const useBusinessStore = defineStore('businessStore', () => {
  async function updateCoverImage(payload: Obj) {
    await objService.updateCoverImage(payload)
  }

  async function updateLogo(payload: Obj) {
    await objService.updateLogo(payload)
  }

  return {
    updateCoverImage,
    updateLogo,
  }
})
