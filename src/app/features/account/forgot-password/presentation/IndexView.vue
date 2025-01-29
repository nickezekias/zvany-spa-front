<script setup lang="ts">
import { ref } from 'vue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'
import { useAccountStore } from '@/stores/account.store'
import { useRouter } from 'vue-router'

import { Form as PrimeForm, type FormSubmitEvent } from '@primevue/forms'

import NikkInputText from '@/components/forms/NikkInputText.vue'

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
  email: '',
})

const resolver = zodResolver(
  z.object({
    email: z.string().email({ message: 'errors.validation.email' }),
  }),
)

async function onFormSubmit(e: FormSubmitEvent): Promise<void> {
  loading.value = true
  try {
    const isFormCorrect = e.valid
    if (isFormCorrect) {
      await accountStore.sendPasswordResetLink(state.value.email)
      nikkToast.success('messages.passwordResetLinkSent')
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
            {{ $t('labels.forgotPassword') }}
          </h1>
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
          <PrimeMessage class="text text-muted font-light text-sm bock">{{
            $t('hints.forgotPasswordDesc')
          }}</PrimeMessage>

          <NikkInputText
            v-model="state.email"
            :errorHelpLabel="$form.email?.error?.message"
            id="email"
            :isError="$form.email?.invalid"
            label="labels.email"
            name="email"
            type="email"
          />

          <PrimeButton type="submit" :loading="loading" :label="$t('labels.emailResetLink')" />

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
