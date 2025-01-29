export default class User {
  public static readonly GENDERS = {
    MALE: 'male',
    FEMALE: 'female',
    OTHER: 'other',
  }

  createdAt: string
  email: string
  emailVerifiedAt: string
  firstName: string
  fullName: string
  gender: string
  id: string
  initials: string
  isActive: boolean
  lastName: string
  password: string
  phone: string
  roles: Array<string>
  updatedAt: string

  public constructor(
    createdAt: string,
    email: string,
    emailVerifiedAt: string,
    firstName: string,
    fullName: string,
    gender: string,
    id: string,
    initials: string,
    isActive: boolean,
    lastName: string,
    password: string,
    phone: string,
    roles: Array<string>,
    updatedAt: string,
  ) {
    this.createdAt = createdAt
    this.email = email
    this.emailVerifiedAt = emailVerifiedAt
    this.firstName = firstName
    this.fullName = fullName
    this.gender = gender
    this.id = id
    this.initials = initials
    this.isActive = isActive
    this.lastName = lastName
    this.password = password
    this.phone = phone
    this.roles = roles
    this.updatedAt = updatedAt
  }

  static fromObject(data: {
    createdAt: string
    email: string
    emailVerifiedAt: string
    firstName: string
    fullName: string
    gender: string
    id: string
    initials: string
    isActive: boolean
    lastName: string
    password: string
    phone: string
    roles: Array<string>
    updatedAt: string
  }): User {
    return new User(
      data.createdAt,
      data.email,
      data.emailVerifiedAt,
      data.firstName,
      data.fullName,
      data.gender,
      data.id,
      data.initials,
      data.isActive,
      data.lastName,
      data.password,
      data.phone,
      data.roles,
      data.updatedAt,
    )
  }

  static initEmpty(): User {
    return new User('', '', '', '', '', '', '', '', false, '', '', '', [], '')
  }

  public isAdmin(): boolean {
    return this.roles.includes('admin')
  }
}
