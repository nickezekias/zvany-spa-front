import type SpaceListing from '@/app/models/spaceListing.model'
import axios from '@/lib/axios'

const createSpaceOfferListing = async function (payload: SpaceListing) {
  return axios.post('/api/v1/listings', payload)
}

export default {
  createSpaceOfferListing,
}
