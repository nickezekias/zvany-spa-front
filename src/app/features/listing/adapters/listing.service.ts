import type SpaceListing from '@/app/models/spaceListing.model'
import axios from '@/lib/axios'

import type { DBGetQueryFilter } from '@/app/@types/common.interface'
import { getQueryFromFilter } from '@/app/utils/helpers'

const createSpaceOfferListing = async function (payload: SpaceListing) {
  // format payload to match api format
  const apiPayload = payload
  apiPayload.deliveryPreferences = `${apiPayload.deliveryPreferences}`.split(' ')
  const flightArrivalDate = new Date(apiPayload.flightArrivalDate)
  apiPayload.flightArrivalDate = flightArrivalDate
    .toISOString()
    .slice(0, flightArrivalDate.toISOString().indexOf('T'))
  apiPayload.itemRestrictions = `${apiPayload.itemRestrictions}`.split(' ')
  const flightDepartureDate = new Date(apiPayload.flightDepartureDate)
  apiPayload.flightDepartureDate = flightDepartureDate
    .toISOString()
    .slice(0, flightDepartureDate.toISOString().indexOf('T'))

  // @ts-expect-error userId is not defined in SpaceListing is just needed for api, too lazy to fix this 👀👀
  apiPayload['userId'] = apiPayload.user
  return axios.post('/api/v1/listings/space-offers', apiPayload)
}

async function getAllSpaceOfferListings(filter?: DBGetQueryFilter) {
  if (!filter) {
    filter = {
      itemsPerPage: -1,
      sortBy: ['space_offer_listings.flight_arrival_date'],
      sortDesc: ['true'],
    }
  }
  const query = getQueryFromFilter(filter)
  return axios.get(`/api/v1/listings/space-offers${query}`)
}

export default {
  createSpaceOfferListing,
  getAllSpaceOfferListings,
}
