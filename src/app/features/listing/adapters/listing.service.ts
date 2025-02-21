import type SpaceListing from '@/app/models/spaceListing.model'
import axios from '@/lib/axios'

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

export default {
  createSpaceOfferListing,
}
