<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useAccountStore } from '@/stores/account.store'
import { useAppStore } from '@/stores/app.store'
import { useRoute, useRouter } from 'vue-router'

import NikkInputText from '@/components/forms/NikkInputText.vue'
import NikkInputPassword from '@/components/forms/NikkInputPassword.vue'

import type { LoginRequest } from '@/app/@types/account.interface'

const accountStore = useAccountStore()
const appStore = useAppStore()
const loading = ref(false)
const router = useRouter()
const route = useRoute()

const state: LoginRequest = reactive({
  email: '',
  password: '',
})

async function submit(): Promise<void> {
  loading.value = true
  try {
    //FIXME: Implement form validation
    const isFormCorrect = true
    if (isFormCorrect) {
      await accountStore.login(state)
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
      appStore.toastError('labels.invalidFormHint', 'labels.invalidForm')
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (e?.response?.status == 422) {
      appStore.toastError('messages.credentialsNotFound', 'labels.loginFailed')
    } else {
      appStore.toastAPIError(e)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-full p-3 overflow-y-auto">
    <PrimeCard class="w-full md:w-4/12 2xl:w-3/12 mx-auto mt-10">
      <template #title>{{ $t('labels.login') }}</template>
      <template #content>
        <form @submit.prevent="submit" class="py-3 flex flex-col gap-5">
          <NikkInputText
            v-model="state.email"
            errorHelpLabel="errors.validation.email"
            id="email"
            :isError="false"
            label="labels.email"
            type="email"
          />

          <NikkInputPassword
            v-model="state.password"
            errorHelpLabel="errors.validation.passwords.minCount"
            id="password"
            :isError="false"
            label="labels.password"
            :toggleMask="true"
            :feedback="false"
          />

          <PrimeButton type="submit" :loading="loading" :label="$t('labels.login')" />
        </form>
      </template>
    </PrimeCard>
  </div>
</template>
