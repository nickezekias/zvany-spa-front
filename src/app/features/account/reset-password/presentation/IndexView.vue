<script setup lang="ts">
import { ref } from 'vue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'
import { useAccountStore } from '@/stores/account.store'
import { useRouter } from 'vue-router'

import { Form as PrimeForm, type FormSubmitEvent } from '@primevue/forms'
import type { PasswordResetRequest } from '@/app/@types/account.interface'

import NikkInputPassword from '@/components/forms/NikkInputPassword.vue'

import NikkToast from '@/app/utils/NikkToast'
import { useToast } from 'primevue'
import { useI18n } from 'vue-i18n'

const accountStore = useAccountStore()
const loading = ref(false)
const router = useRouter()
const toast = useToast()
const { t } = useI18n()

const nikkToast = new NikkToast(toast, t)

const state = ref({
  password: '',
  password_confirmation: '',
})

const resolver = zodResolver(
  z
    .object({
      password: z
        .string()
        .min(8, { message: 'errors.validation.passwords.minCount' })
        .refine((value: string) => /[a-z]/.test(value), {
          message: 'errors.validation.mustContain.lowercase',
        })
        .refine((value: string) => /[A-Z]/.test(value), {
          message: 'errors.validation.mustContain.uppercase',
        })
        .refine((value: string) => /d/.test(value), {
          message: 'errors.validation.mustContain.number',
        }),
      password_confirmation: z.string().min(8, { message: 'errors.validation.passwords.minCount' }),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: 'errors.validation.passwords.notSame',
      path: ['password_confirmation'],
    }),
)

async function onFormSubmit(e: FormSubmitEvent): Promise<void> {
  loading.value = true
  try {
    const isFormCorrect = e.valid
    if (isFormCorrect) {
      await accountStore.resetPassword({
        ...e.values,
        email: router.currentRoute.value.query.email,
        token: router.currentRoute.value.query.token,
      } as PasswordResetRequest)
      nikkToast.success('messages.passwordResetSuccess')
      router.push({ name: 'account.login' })
    } else {
      nikkToast.error('errors.validation.form', 'labels.invalidForm')
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    nikkToast.httpError(e)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-full p-3 overflow-y-auto">
    <PrimeCard class="w-full md:w-4/12 2xl:w-3/12 mx-auto mt-10 nikk-card">
      <template #title>
        <div class="text-center">
          <h1 class="text-center text-3xl md:text-4xl font-light mb-0">
            {{ $t('labels.resetPassword') }}
          </h1>
        </div>
      </template>
      <template #content>
        <PrimeForm
          class="py-3 mt-4 flex flex-col gap-5"
          :initialValues="state"
          @submit="onFormSubmit"
          :resolver
          v-slot="$form"
          :validateOnBlur="true"
          :validateOnSubmit="true"
        >
          <NikkInputPassword
            :errorHelpLabel="$form.password?.error?.message"
            id="password"
            :isError="$form.password?.invalid"
            label="labels.newPassword"
            name="password"
            :toggleMask="true"
            :feedback="false"
          />

          <NikkInputPassword
            :errorHelpLabel="$form.password_confirmation?.error?.message"
            id="password_confirmation"
            :isError="$form.password_confirmation?.invalid"
            label="labels.confirmPassword"
            name="password_confirmation"
            :toggleMask="true"
            :feedback="false"
          />

          <PrimeButton type="submit" :loading="loading" :label="$t('labels.resetPassword')" />

          <div class="flex items-center justify-center">
            <span class="font-light text-sm me-1">{{ $t('hints.backToLogin') }}</span>
            <router-link to="/login" activeClass="border-b border-primary">
              <PrimeButton text :label="$t('labels.login')" />
            </router-link>
          </div>
        </PrimeForm>
      </template>
    </PrimeCard>
  </div>
</template>
