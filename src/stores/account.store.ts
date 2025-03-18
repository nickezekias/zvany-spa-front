import { computed, ref } from 'vue'
import accountService from '@/app/features/account/adapters/account.service'
import { defineStore } from 'pinia'
import type {
  LoginRequest,
  PasswordResetRequest,
  RegisterRequest,
} from '@/app/@types/account.interface'
import type { Ref } from 'vue'
import User from '@/app/models/user.model'
import { useRouter } from 'vue-router'

export const useAccountStore = defineStore('accountStore', () => {
  const router = useRouter()

  const registerPayload: Ref<RegisterRequest> = ref({
    email: '',
    firstName: '',
    gender: '',
    lastName: '',
    password: '',
    password_confirmation: '',
    phone: '',
  })
  const user: Ref<User | null> = ref(null)
  const userModel: Ref<User | null> = computed(() => {
    if (user.value) {
      return User.fromObject(user.value)
    }
    return null
  })

  const clearAuthenticatedUser = (): void => {
    setUser(null)
    setIsGuest('1')
  }

  const isAdmin = (): boolean => {
    return user.value != null && user.value.isAdmin()
  }

  const isAuthenticated = computed(() => {
    return !isGuest() && user.value != null
  })

  const isGuest = (): boolean => {
    if (window.localStorage.getItem('guest') === '1') {
      return true
    } else {
      return false
    }
  }

  const setAuthenticatedUser = (data: User): void => {
    setUser(User.fromObject(data))
    setIsGuest('0')
  }

  const setIsGuest = (value: string): void => {
    window.localStorage.setItem('guest', value)
  }

  const setRegisterPayload = (data: RegisterRequest): void => {
    registerPayload.value = data
  }

  const setUser = (data: User | null): void => {
    user.value = data
  }

  async function getAuthenticatedUser() {
    const response = await accountService.getAuthenticatedUser()
    setAuthenticatedUser(User.fromObject(response.data.data))
  }

  async function login(payload: LoginRequest) {
    await accountService.login(payload)
    await getAuthenticatedUser()
  }

  async function logout() {
    await accountService.logout()
    clearAuthenticatedUser()
    if (router.currentRoute.value.name != 'account.login') {
      router.push({ name: 'account.login' })
    }
  }

  async function register(payload: RegisterRequest) {
    await accountService.register(payload)
    await getAuthenticatedUser()
  }

  async function resetPassword(payload: PasswordResetRequest) {
    const response = await accountService.resetPassword(payload)
    return response.data
  }

  async function sendPasswordResetLink(payload: string) {
    const response = await accountService.sendPasswordResetLink(payload)
    return response.data
  }

  return {
    clearAuthenticatedUser,
    getAuthenticatedUser,
    isAdmin,
    isAuthenticated,
    isGuest,
    login,
    logout,
    register,
    resetPassword,
    sendPasswordResetLink,
    setIsGuest,
    setRegisterPayload,
    setUser,
    registerPayload,
    user,
    userModel,
  }
})
