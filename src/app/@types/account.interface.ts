interface DBGetQueryFilter {
  sortBy: Array<string>
  itemsPerPage?: number
  sortDesc?: Array<string>
  page?: number
}

interface LoginRequest {
  email: string
  password: string
}

interface PasswordResetRequest {
  password: string
  passwordConfirmation: SVGStringList
}

interface RegisterRequest {
  email: string
  firstName: string
  gender: string
  lastName: string
  phone: string
  password: string
  password_confirmation: string
}

export type { DBGetQueryFilter, LoginRequest, PasswordResetRequest, RegisterRequest }
