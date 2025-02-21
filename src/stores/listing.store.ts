import { defineStore } from 'pinia'
import { ref } from 'vue'

import SpaceListing from '@/app/models/spaceListing.model'
import objService from '@/app/features/listing/adapters/listing.service'

import type { DBGetQueryFilter } from '@/app/@types/common.interface'

export const useListingStore = defineStore('listingStore', () => {
  const spaceListing = ref<SpaceListing>(SpaceListing.initEmpty())
  const spaceListings = ref<SpaceListing[]>([])

  function setSpaceListing(data: SpaceListing) {
    spaceListing.value = data
  }

  async function createSpaceOfferListing(data: SpaceListing) {
    return await objService.createSpaceOfferListing(data)
  }

  async function getAllSpaceOfferListings(filter?: DBGetQueryFilter) {
    const response = await objService.getAllSpaceOfferListings(filter)
    spaceListings.value = response.data.data
  }

  return {
    spaceListing,
    spaceListings,
    createSpaceOfferListing,
    getAllSpaceOfferListings,
    setSpaceListing,
  }
})
