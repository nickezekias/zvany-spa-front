import { WEIGHT_UNITS_LIST } from '@/app/constants'

interface ListingOwner {
  firstName: string
  id: string
  initials: string
  lastName: string
}

export type { ListingOwner }

export default class SpaceRequestListing {
  public static readonly SHIPMENT_DATE_FLEXIBILITY_LIST = {
    STRICT_DATES: 'strictDates',
    MORE_OR_LESS_ONE_WEEK: 'moreOrLessOneWeek',
    MORE_OR_LESS_ONE_MONTH: 'moreOrLessOneMonth',
  }

  public static readonly ITEM_TYPES_LIST = {
    ELECTRONIC: 'electronic',
    FRAGILE: 'fragile',
    HAZARDOUS: 'hazardous',
    LIQUID: 'liquid',
    PERISHABLE: 'perishable',
  }

  public static readonly SHIPPER_TYPES_LIST = {
    INDIVIDUAL: 'individual',
    SMALL_BUSINESS: 'smallBusiness',
    INTERNATIONAL_SHOPPER: 'internationalShopper',
  }

  public static readonly WEIGHT_UNITS = WEIGHT_UNITS_LIST

  createdAt: string
  description: string
  flightArrival: string
  flightDeparture: string
  id: string
  isActive: boolean
  itemTypes: string
  shipmentDate: string | Date
  shipmentDateFlexibility: string
  shipperType: string
  specialInstructions: string
  updatedAt: string
  userId: string
  user: ListingOwner | null
  weight: string
  weightUnit: string

  public constructor(
    createdAt: string,
    description: string,
    flightArrival: string,
    flightDeparture: string,
    id: string,
    isActive: boolean,
    itemTypes: string,
    shipmentDate: string | Date,
    shipmentDateFlexibility: string,
    shipperType: string,
    specialInstructions: string,
    updatedAt: string,
    userId: string,
    user: ListingOwner | null,
    weight: string,
    weightUnit: string,
  ) {
    this.createdAt = createdAt
    this.description = description
    this.flightArrival = flightArrival
    this.flightDeparture = flightDeparture
    this.id = id
    this.isActive = isActive
    this.itemTypes = itemTypes
    this.shipmentDate = shipmentDate
    this.shipmentDateFlexibility = shipmentDateFlexibility
    this.shipperType = shipperType
    this.specialInstructions = specialInstructions
    this.updatedAt = updatedAt
    this.userId = userId
    this.user = user
    this.weight = weight
    this.weightUnit = weightUnit
  }

  static fromObject(data: {
    createdAt: string
    description: string
    flightArrival: string
    flightDeparture: string
    id: string
    isActive: boolean
    itemTypes: string
    shipmentDate: string | Date
    shipmentDateFlexibility: string
    shipperType: string
    specialInstructions: string
    updatedAt: string
    userId: string
    user: ListingOwner | null
    weight: string
    weightUnit: string
  }): SpaceRequestListing {
    return new SpaceRequestListing(
      data['createdAt'],
      data['description'],
      data['flightArrival'],
      data['flightDeparture'],
      data['id'],
      data['isActive'],
      data['itemTypes'],
      data['shipmentDate'],
      data['shipmentDateFlexibility'],
      data['shipperType'],
      data['specialInstructions'],
      data['updatedAt'],
      data['userId'],
      data['user'],
      data['weight'],
      data['weightUnit'],
    )
  }

  static initEmpty(): SpaceRequestListing {
    const data: SpaceRequestListing = {
      createdAt: '',
      description: '',
      flightArrival: '',
      flightDeparture: '',
      id: '',
      isActive: true,
      itemTypes: '',
      shipmentDate: '',
      shipmentDateFlexibility: '',
      shipperType: SpaceRequestListing.SHIPPER_TYPES_LIST['INDIVIDUAL'],
      specialInstructions: '',
      updatedAt: '',
      userId: '',
      user: null,
      weight: '',
      weightUnit: SpaceRequestListing.WEIGHT_UNITS.KILOGRAMS,
    }

    return this.fromObject(data)
  }
}
