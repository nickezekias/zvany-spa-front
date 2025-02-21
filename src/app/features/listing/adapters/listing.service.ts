import type SpaceListing from '@/app/models/spaceListing.model'
import axios from '@/lib/axios'

import type { DBGetQueryFilter } from '@/app/@types/common.interface'
import { getQueryFromFilter } from '@/app/utils/helpers'

const createSpaceOfferListing = async function (payload: SpaceListing) {
  // format payload to match api format
  payload.deliveryPreferences = `${payload.deliveryPreferences}`.split(' ')
  const flightArrivalDate = payload.flightArrivalDate as Date
  payload.flightArrivalDate = flightArrivalDate
    .toISOString()
    .slice(0, flightArrivalDate.toISOString().indexOf('T'))
  payload.itemRestrictions = `${payload.itemRestrictions}`.split(' ')
  const flightDepartureDate = payload.flightDepartureDate as Date
  payload.flightDepartureDate = flightDepartureDate
    .toISOString()
    .slice(0, flightDepartureDate.toISOString().indexOf('T'))

  return axios.post('/api/v1/listings/space-offers', payload)
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
