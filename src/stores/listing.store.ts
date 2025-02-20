import { defineStore } from 'pinia'
import { ref } from 'vue'

import SpaceListing from '@/app/models/spaceListing.model'
import objService from '@/app/features/listing/adapters/listing.service'

export const useListingStore = defineStore('listingStore', () => {
  const spaceListing = ref<SpaceListing>(SpaceListing.initEmpty())

  function setSpaceListing(data: SpaceListing) {
    spaceListing.value = data
  }

  async function createSpaceOfferListing(data: SpaceListing) {
    return await objService.createSpaceOfferListing(data)
  }

  return {
    spaceListing,
    createSpaceOfferListing,
    setSpaceListing,
  }
})
