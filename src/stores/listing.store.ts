import { defineStore } from 'pinia'
import { ref } from 'vue'

import SpaceListing from '@/app/models/spaceListing.model'
import objService from '@/app/features/listing/adapters/listing.service'
import { useDataTableUtil } from '@/app/composables/useDataTableUtil'

import type { DBGetQueryFilter } from '@/app/@types/common.interface'

export const useListingStore = defineStore('listingStore', () => {
  const spaceListing = ref<SpaceListing>(SpaceListing.initEmpty())
  const spaceListings = ref<SpaceListing[]>([])

  const { updateObjectsList } = useDataTableUtil()

  function setSpaceListing(data: SpaceListing) {
    spaceListing.value = data
  }

  async function createSpaceOfferListing(data: SpaceListing) {
    return await objService.createSpaceOfferListing(data)
  }

  async function getSpaceOfferListing(id: string) {
    const response = await objService.getSpaceOfferListing(id)
    return response.data.data
  }

  async function getAllSpaceOfferListings(filter?: DBGetQueryFilter) {
    const response = await objService.getAllSpaceOfferListings(filter)
    spaceListings.value = response.data.data
  }

  async function updateSpaceOfferListing(data: SpaceListing) {
    const response = await objService.updateSpaceOfferListing(data)
    return response.data.data
  }

  async function destroySpaceOfferListing(id: string) {
    const response = await objService.deleteSpaceOfferListing(id)
    updateObjectsList({ deleteId: ref(id), objects: spaceListings })
    return response
  }

  return {
    spaceListing,
    spaceListings,
    createSpaceOfferListing,
    getSpaceOfferListing,
    getAllSpaceOfferListings,
    updateSpaceOfferListing,
    destroySpaceOfferListing,
    setSpaceListing,
  }
})
