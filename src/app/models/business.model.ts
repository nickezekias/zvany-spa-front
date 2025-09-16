export default class Business {
  public id: string
  public address: string
  public description: string
  public email: string
  public logo: string
  public coverImage: string // Added coverImage attribute
  public name: string
  public phone: string
  public website: string
  public userId: string
  public createdAt: string
  public updatedAt: string
  public deletedAt: string

  constructor(
    id: string,
    address: string,
    description: string,
    email: string,
    logo: string,
    coverImage: string, // Added coverImage to constructor
    name: string,
    phone: string,
    website: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: string
  ) {
    this.id = id
    this.address = address
    this.description = description
    this.email = email
    this.logo = logo
    this.coverImage = coverImage // Assign coverImage
    this.name = name
    this.phone = phone
    this.website = website
    this.userId = userId
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.deletedAt = deletedAt
  }

  static fromObject(data: {
    id: string
    address: string
    description: string
    email: string
    logo: string
    coverImage: string // Added coverImage to fromObject param
    name: string
    phone: string
    website: string
    userId: string
    createdAt: string
    updatedAt: string
    deletedAt: string
  }) {
    return new Business(
      data.id,
      data.address,
      data.description,
      data.email,
      data.logo,
      data.coverImage, // Pass coverImage to constructor
      data.name,
      data.phone,
      data.website,
      data.userId,
      data.createdAt,
      data.updatedAt,
      data.deletedAt
    )
  }

  static initEmpty(): Business {
    return new Business(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    )
  }
}