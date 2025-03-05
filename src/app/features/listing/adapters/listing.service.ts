import type SpaceListing from '@/app/models/spaceListing.model'
import axios from '@/lib/axios'

import type { DBGetQueryFilter } from '@/app/@types/common.interface'
import { getQueryFromFilter } from '@/app/utils/helpers'
import type SpaceRequestListing from '@/app/models/spaceRequestListing.model'

const spaceOfferURL = '/api/v1/listings/space-offers'
const spaceRequestURL = '/api/v1/listings/space-requests'

function formatSpaceOfferStorePayload(payload: SpaceListing) {
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
  return apiPayload
}

const createSpaceOfferListing = async function (payload: SpaceListing) {
  // format payload to match api format
  const apiPayload = formatSpaceOfferStorePayload(payload)

  return axios.post(spaceOfferURL, apiPayload)
}

const createSpaceRequestListing = async function (payload: SpaceRequestListing) {
  const shipmentDate = new Date(payload.shipmentDate)
  payload.shipmentDate = shipmentDate
    .toISOString()
    .slice(0, shipmentDate.toISOString().indexOf('T'))
  return axios.post(spaceRequestURL, payload)
}

const getSpaceOfferListing = async function (id: string) {
  return axios.get(`${spaceOfferURL}/${id}`)
}

const getSpaceRequestListing = async function (id: string) {
  return axios.get(`${spaceRequestURL}/${id}`)
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
  return axios.get(`${spaceOfferURL}${query}`)
}

async function getAllSpaceRequestListings(filter?: DBGetQueryFilter) {
  if (!filter) {
    filter = {
      itemsPerPage: -1,
      sortBy: ['space_request_listings.shipment_date'],
      sortDesc: ['true'],
    }
  }
  const query = getQueryFromFilter(filter)
  return axios.get(`${spaceRequestURL}${query}`)
}

const updateSpaceOfferListing = async function (payload: SpaceListing) {
  // format payload to match api format
  const apiPayload = formatSpaceOfferStorePayload(payload)
  return axios.post(`${spaceOfferURL}/${apiPayload.id}?_method=PUT`, apiPayload)
}

const updateSpaceRequestListing = async function (payload: SpaceRequestListing) {
  // format payload to match api format
  return axios.post(`${spaceRequestURL}/${payload.id}?_method=PUT`, payload)
}

const deleteSpaceOfferListing = function (id: string) {
  return axios.delete(`${spaceOfferURL}/${id}`)
}

const deleteSpaceRequestListing = function (id: string) {
  return axios.delete(`${spaceRequestURL}/${id}`)
}

export default {
  createSpaceOfferListing,
  getSpaceOfferListing,
  getAllSpaceOfferListings,
  updateSpaceOfferListing,
  deleteSpaceOfferListing,

  createSpaceRequestListing,
  getSpaceRequestListing,
  getAllSpaceRequestListings,
  updateSpaceRequestListing,
  deleteSpaceRequestListing,
}
