export default class SpaceListing {
  public static readonly DELIVERY_PREFERENCES = {
    AIRPORT_DROP_OFF: 'airportDropOff',
    HOTEL_DROP_OFF: 'hotelDropOff',
    CITY_CENTER_DROP_OFF: 'cityCenterDropOff',
    FLEXIBLE_MEETING_POINT: 'flexibleMeetingPoint',
  }

  public static readonly ITEM_RESTRICTIONS = {
    ELECTRONIC: 'electronic',
    FRAGILE: 'fragile',
    HAZARDOUS: 'hazardous',
    LIQUID: 'liquid',
    PERISHABLE: 'perishable',
  }

  public static readonly WEIGHT_UNITS = {
    KILOGRAMS: 'kg',
    GRAMS: 'g',
  }

  availableSpaceDimensions: string
  availableWeight: number
  createdAt: string
  deliveryPreferences: Array<string>
  flightAirline: string
  flightArrival: string
  flightArrivalDate: Date | string
  flightBookingReference: string
  flightDeparture: string
  flightDepartureDate: Date | string
  flightNumber: string
  id: string
  isActive: boolean
  itemRestrictions: Array<string>
  pricePerUnit: string
  specialInstructions: string
  updatedAt: string
  userId: string
  weightUnit: string

  public constructor(
    createdAt: string,
    flightAirline: string,
    flightArrival: string,
    flightArrivalDate: Date | string,
    flightBookingReference: string,
    flightDeparture: string,
    flightDepartureDate: Date | string,
    flightNumber: string,
    id: string,
    availableWeight: number,
    weightUnit: string,
    pricePerUnit: string,
    itemRestrictions: Array<string>,
    availableSpaceDimensions: string,
    deliveryPreferences: Array<string>,
    specialInstructions: string,
    isActive: boolean,
    userId: string,
    updatedAt: string,
  ) {
    this.createdAt = createdAt
    this.flightAirline = flightAirline
    this.flightArrival = flightArrival
    this.flightArrivalDate = flightArrivalDate
    this.flightBookingReference = flightBookingReference
    this.flightDeparture = flightDeparture
    this.flightDepartureDate = flightDepartureDate
    this.flightNumber = flightNumber
    this.id = id
    this.availableWeight = availableWeight
    this.weightUnit = weightUnit
    this.pricePerUnit = pricePerUnit
    this.itemRestrictions = itemRestrictions
    this.availableSpaceDimensions = availableSpaceDimensions
    this.deliveryPreferences = deliveryPreferences
    this.specialInstructions = specialInstructions
    this.isActive = isActive
    this.userId = userId
    this.updatedAt = updatedAt
  }

  static fromObject(data: {
    createdAt: string
    flightAirline: string
    flightArrival: string
    flightArrivalDate: Date | string
    flightBookingReference: string
    flightDeparture: string
    flightDepartureDate: Date | string
    flightNumber: string
    id: string
    availableWeight: number
    weightUnit: string
    pricePerUnit: string
    itemRestrictions: Array<string>
    availableSpaceDimensions: string
    deliveryPreferences: Array<string>
    specialInstructions: string
    isActive: boolean
    userId: string
    updatedAt: string
  }): SpaceListing {
    return new SpaceListing(
      data.createdAt,
      data.flightAirline,
      data.flightArrival,
      data.flightArrivalDate,
      data.flightBookingReference,
      data.flightDeparture,
      data.flightDepartureDate,
      data.flightNumber,
      data.id,
      data.availableWeight,
      data.weightUnit,
      data.pricePerUnit,
      data.itemRestrictions,
      data.availableSpaceDimensions,
      data.deliveryPreferences,
      data.specialInstructions,
      data.isActive,
      data.userId,
      data.updatedAt,
    )
  }

  static initEmpty(): SpaceListing {
    return new SpaceListing(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      SpaceListing.WEIGHT_UNITS.KILOGRAMS,
      '',
      [],
      '',
      [],
      '',
      true,
      '',
      '',
    )
  }
}
