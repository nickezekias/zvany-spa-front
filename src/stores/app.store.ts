import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useToast } from 'primevue'

import { AxiosError as HttpError } from 'axios'
import { getApiErrors } from '@/app/utils/helpers'

export const useAppStore = defineStore('appStore', () => {
  const appLoading = ref(false)
  const toast = useToast()
  const { t } = useI18n()

  const setAppLoading = (value: boolean) => {
    appLoading.value = value
  }

  const toastAPIError = (error: HttpError, title = 'labels.operationFailure') => {
    toast.add({
      severity: 'error',
      summary: t(`${title}`),
      detail: t(`${getApiErrors(error)}`),
      life: 10000,
    })
  }

  const toastError = (detail = '', title = 'labels.operationFailure') => {
    toast.add({
      severity: 'error',
      summary: t(`${title}`),
      detail: t(`${detail}`),
      life: 10000,
    })
  }

  const toastSuccess = (detail = '', title = 'labels.operationSuccess') => {
    toast.add({
      severity: 'success',
      summary: t(`${title}`),
      detail: t(`${detail}`),
      life: 5000,
    })
  }

  return {
    appLoading,

    setAppLoading,
    toastAPIError,
    toastError,
    toastSuccess,
  }
})
