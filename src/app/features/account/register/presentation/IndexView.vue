<script setup lang="ts">
import { ref } from 'vue'
import { Form as PrimeForm, type FormSubmitEvent } from '@primevue/forms'
import NikkToast from '@/app/utils/NikkToast'
import { useAccountStore } from '@/stores/account.store'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'

import type { Ref } from 'vue'
import type { RegisterRequest } from '@/app/@types/account.interface'
import User from '@/app/models/user.model'

import NikkInputPassword from '@/components/forms/NikkInputPassword.vue'
import NikkInputText from '@/components/forms/NikkInputText.vue'
import NikkSelect from '@/components/forms/NikkSelect.vue'

const accountStore = useAccountStore()
const router = useRouter()
const toast = useToast()
const { t } = useI18n()

const nikkToast = new NikkToast(toast, t)
const loading = ref(false)
const resolver = zodResolver(
  z
    .object({
      email: z.string().email({ message: 'errors.validation.email' }),
      firstName: z.string().min(1, { message: 'errors.validation.requiredField' }),
      gender: z.string().min(1, { message: 'errors.validation.requiredField' }),
      lastName: z.string().min(1, { message: 'errors.validation.requiredField' }),
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
      phone: z.string().min(1, { message: 'errors.validation.requiredField' }),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: 'errors.validation.passwords.notSame',
      path: ['password_confirmation'],
    }),
)

const state: Ref<RegisterRequest> = ref({
  email: '',
  firstName: '',
  gender: '',
  lastName: '',
  phone: '',
  password: '',
  password_confirmation: '',
})

async function onFormSubmit(e: FormSubmitEvent): Promise<void> {
  loading.value = true
  try {
    const isFormCorrect = e.valid
    if (isFormCorrect) {
      await accountStore.register(e.values as RegisterRequest)
      if (accountStore.userModel && accountStore.userModel.isAdmin()) {
        router.push({ name: 'admin.dashboard' })
      } else {
        router.push({ name: 'dashboard' })
      }
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
        <div>
          <h1 class="text-center text-3xl md:text-4xl font-light mb-0">
            {{ $t('labels.register') }}
          </h1>
          <div class="flex items-center justify-center">
            <span class="font-light text-sm me-1">{{ $t('hints.alreadyHaveAccount') }}</span>
            <router-link to="/login" activeClass="border-b border-primary">
              <PrimeButton text :label="$t('labels.login')" />
            </router-link>
          </div>
        </div>
      </template>
      <template #content>
        <PrimeForm
          class="py-3 flex flex-col gap-5"
          :initialValues="state"
          @submit="onFormSubmit"
          :resolver
          v-slot="$form"
          :validateOnBlur="true"
          :validateOnSubmit="true"
        >
          <NikkInputText
            :errorHelpLabel="$form.firstName?.error?.message"
            id="first-name"
            :isError="$form.firstName?.invalid"
            label="labels.firstName"
            name="firstName"
            type="text"
          />

          <NikkInputText
            :errorHelpLabel="$form.lastName?.error?.message"
            id="last-name"
            :isError="$form.lastName?.invalid"
            label="labels.lastName"
            name="lastName"
            type="text"
          />

          <NikkSelect
            id="type"
            v-model="state.gender"
            error-help-label="errors.validation.requiredField"
            :is-error="$form.gender?.invalid"
            name="gender"
            :options="Object.values(User.GENDERS)"
            placeholder="labels.selectGender"
          />

          <NikkInputText
            :errorHelpLabel="$form.email?.error?.message"
            id="email"
            :isError="$form.email?.invalid"
            label="labels.email"
            name="email"
            type="email"
          />

          <NikkInputText
            :errorHelpLabel="$form.phone?.error?.message"
            id="phone"
            :isError="$form.phone?.invalid"
            label="labels.phone"
            name="phone"
            type="text"
          />

          <NikkInputPassword
            :errorHelpLabel="$form.password?.error?.message"
            id="password"
            :isError="$form.password?.invalid"
            label="labels.password"
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

          <PrimeButton type="submit" :loading="loading" :label="$t('labels.register')" />
        </PrimeForm>
      </template>
    </PrimeCard>
  </div>
</template>
