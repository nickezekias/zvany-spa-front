<script setup lang="ts">
import { ref } from 'vue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'
import { useAccountStore } from '@/stores/account.store'
import { useRoute, useRouter } from 'vue-router'

import { Form as PrimeForm, type FormSubmitEvent } from '@primevue/forms'

import NikkInputText from '@/components/forms/NikkInputText.vue'
import NikkInputPassword from '@/components/forms/NikkInputPassword.vue'

import type { LoginRequest } from '@/app/@types/account.interface'
import type { Ref } from 'vue'
import NikkToast from '@/app/utils/NikkToast'
import { useToast } from 'primevue'
import { useI18n } from 'vue-i18n'

const accountStore = useAccountStore()
const loading = ref(false)
const router = useRouter()
const route = useRoute()
const toast = useToast()
const { t } = useI18n()

const nikkToast = new NikkToast(toast, t)

const state: Ref<LoginRequest> = ref({
  email: '',
  password: '',
})

const resolver = zodResolver(
  z.object({
    email: z.string().email({ message: 'errors.validation.email' }),
    password: z.string().min(8, { message: 'errors.validation.passwords.minCount' }),
    /* .refine((value: string) => /[a-z]/.test(value), {
        message: 'errors.validation.mustContain.lowercase',
      })
      .refine((value: string) => /[A-Z]/.test(value), {
        message: 'errors.validation.mustContain.uppercase',
      })
      .refine((value: string) => /d/.test(value), {
        message: 'errors.validation.mustContain.number',
      }), */
  }),
)

async function onFormSubmit(e: FormSubmitEvent): Promise<void> {
  loading.value = true
  try {
    const isFormCorrect = e.valid
    if (isFormCorrect) {
      await accountStore.login(e.values as LoginRequest)
      if (route.query.redirect) {
        router.push(`${route.query.redirect}`)
      } else {
        if (accountStore.user && accountStore.user.isAdmin()) {
          router.push({ name: 'admin.dashboard' })
        } else {
          router.push({ name: 'dashboard' })
        }
      }
    } else {
      nikkToast.error('errors.validation.form', 'labels.invalidForm')
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (e?.response?.status == 422) {
      nikkToast.error('messages.credentialsNotFound', 'labels.loginFailed')
    } else {
      nikkToast.httpError(e)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-full p-3 overflow-y-auto">
    <PrimeCard class="w-full md:w-4/12 2xl:w-3/12 mx-auto mt-10 nikk-card">
      <template #title>
        <h1 class="text-center text-3xl md:text-4xl font-light">
          {{ $t('labels.login') }}
        </h1>
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
            :errorHelpLabel="$form.email?.error?.message"
            id="email"
            :isError="$form.email?.invalid"
            label="labels.email"
            name="email"
            type="email"
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

          <PrimeButton type="submit" :loading="loading" :label="$t('labels.login')" />
        </PrimeForm>
      </template>
    </PrimeCard>
  </div>
</template>
