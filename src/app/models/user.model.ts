export default class User {
  id: string
  email: string
  emailVerifiedAt: string
  firstName: string
  isActive: boolean
  lastName: string
  password: string
  phone: string
  roles: Array<string>
  createdAt: string
  updatedAt: string

  public constructor(
    id: string,
    email: string,
    emailVerifiedAt: string,
    firstName: string,
    isActive: boolean,
    lastName: string,
    password: string,
    phone: string,
    roles: Array<string>,
    createdAt: string,
    updatedAt: string,
  ) {
    this.id = id
    this.email = email
    this.emailVerifiedAt = emailVerifiedAt
    this.firstName = firstName
    this.isActive = isActive
    this.lastName = lastName
    this.password = password
    this.phone = phone
    this.roles = roles
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static fromObject(data: {
    id: string
    email: string
    emailVerifiedAt: string
    firstName: string
    isActive: boolean
    lastName: string
    password: string
    phone: string
    roles: Array<string>
    createdAt: string
    updatedAt: string
  }): User {
    return new User(
      data.id,
      data.email,
      data.emailVerifiedAt,
      data.firstName,
      data.isActive,
      data.lastName,
      data.password,
      data.phone,
      data.roles,
      data.createdAt,
      data.updatedAt,
    )
  }

  static initEmpty(): User {
    return new User('', '', '', '', false, '', '', '', [], '', '')
  }

  public isAdmin(): boolean {
    return this.roles.includes('admin')
  }
}
