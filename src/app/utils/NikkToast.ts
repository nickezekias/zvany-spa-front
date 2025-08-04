/* eslint-disable @typescript-eslint/no-explicit-any */

import { getApiErrors } from '@/app/utils/helpers'
import { AxiosError as HttpError } from 'axios'

class NikkToast {
  private readonly DEFAULT_TOAST_LIFETIME = 5000
  private readonly ERROR_TOAST_LIFETIME = 10000
  private toast: any
  private t: any
  private toastLifeTime: number = this.DEFAULT_TOAST_LIFETIME

  constructor(toast: any, t: any, toastLifeTime?: number) {
    this.toast = toast
    this.t = t
    this.toastLifeTime = toastLifeTime ?? this.DEFAULT_TOAST_LIFETIME
  }

  public success(message: string, summary: string = 'labels.operationSuccess') {
    this.toast.add({
      severity: 'success',
      summary: summary,
      detail: message,
      life: this.toastLifeTime,
    })
  }

  public info(message: string, summary: string = 'labels.info') {
    this.toast.add({
      severity: 'info',
      summary: summary,
      detail: message,
      life: this.toastLifeTime,
    })
  }

  public warn(message: string, summary: string = 'labels.warning') {
    this.toast.add({
      severity: 'warn',
      summary: summary,
      detail: message,
      life: this.toastLifeTime,
    })
  }

  public error(message: string, summary: string = 'labels.operationFailure') {
    this.toast.add({
      severity: 'error',
      summary: summary,
      detail: message,
      life: this.ERROR_TOAST_LIFETIME,
    })
  }

  public httpError(error: HttpError, summary: string = 'labels.operationFailure') {
    this.toast.add({
      severity: 'error',
      summary: summary,
      detail: getApiErrors(error),
      life: this.ERROR_TOAST_LIFETIME,
    })
  }
}

export default NikkToast
