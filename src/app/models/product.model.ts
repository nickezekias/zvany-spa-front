export default class Product {
  id: string
  barcode: string
  brand: string
  categories: Array<string>
  cost: number
  description: string
  images: string | File
  name: string
  publishedAt: string | null
  price: number
  quantity: number
  sku: string
  status: string
  stockTracked: boolean
  type: string
  businessId: string
  createdAt: string
  updatedAt: string
  deletedAt: string

  public static readonly STATUSES = {
    IN_STOCK: 'in stock',
    OUT_OF_STOCK: 'out of stock',
  }

  constructor(
    id: string,
    barcode: string,
    brand: string,
    categories: Array<string>,
    cost: number,
    description: string,
    images: string | File,
    name: string,
    publishedAt: string | null,
    price: number,
    quantity: number,
    sku: string,
    status: string,
    stockTracked: boolean,
    type: string,
    businessId: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: string,
  ) {
    this.id = id
    this.barcode = barcode
    this.brand = brand
    this.categories = categories
    this.cost = cost
    this.description = description
    this.images = images
    this.name = name
    this.publishedAt = publishedAt
    this.price = price
    this.quantity = quantity
    this.sku = sku
    this.status = status
    this.stockTracked = stockTracked
    this.type = type
    this.businessId = businessId
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.deletedAt = deletedAt
  }

  static fromObject(data: {
    id: string
    barcode: string
    brand: string
    categories: Array<string>
    cost: number
    description: string
    images: string | File
    name: string
    publishedAt: string | null
    price: number
    quantity: number
    sku: string
    status: string
    stockTracked: boolean
    type: string
    businessId: string
    createdAt: string
    updatedAt: string
    deletedAt: string
  }) {
    return new Product(
      data.id,
      data.barcode,
      data.brand,
      data.categories,
      data.cost,
      data.description,
      data.images,
      data.name,
      data.publishedAt,
      data.price,
      data.quantity,
      data.sku,
      data.status,
      data.stockTracked,
      data.type,
      data.businessId,
      data.createdAt,
      data.updatedAt,
      data.deletedAt,
    )
  }

  static initEmpty(): Product {
    return new Product('', '', '', [], 0, '', '', '', null, 0, 0, '', '', true, '', '', '', '', '')
  }

  public toFormData(): FormData {
    const formData = new FormData()

    formData.append('id', this.id)
    formData.append('barcode', this.barcode)
    formData.append('brand', this.brand)
    formData.append('categories', this.categories.toString())
    formData.append('cost', `${this.cost}`)
    formData.append('description', this.description)
    formData.append('images', this.images)
    formData.append('name', this.name)
    formData.append('publishedAt', this.publishedAt ? this.publishedAt : '')
    formData.append('price', `${this.price}`)
    formData.append('quantity', `${this.quantity}`)
    formData.append('sku', this.sku)
    formData.append('status', this.status)
    formData.append('stockTracked', this.stockTracked ? '1' : '0')
    formData.append('type', this.type)
    formData.append('businessId', this.businessId)
    formData.append('createdAt', this.createdAt)
    formData.append('updatedAt', this.updatedAt)
    formData.append('deletedAt', this.deletedAt)

    return formData
  }
}
