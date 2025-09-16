<script setup lang="ts">
import { ref } from 'vue'
import { useAccountStore } from '@/stores/account.store'
import { useI18n } from 'vue-i18n'
import { useToast } from 'primevue'
import { useBusinessStore } from '@/stores/business.store'

import NikkToast from '@/app/utils/NikkToast'
import Obj from '@/app/models/business.model'

import type { AxiosError } from 'axios'

import AppPageTitle from '@/components/pages/AppPageTitle.vue'
import NikkAvatarUpload from '@/components/forms/NikkAvatarUpload.vue'
import NikkInputText from '@/components/forms/NikkInputText.vue'

const accountStore = useAccountStore()
const businessStore = useBusinessStore()
const toast = useToast()
const { t } = useI18n()
const nikkToast = new NikkToast(toast, t)

const coverImageLoading = ref(false)
const logoLoading = ref(false)
const pageLoading = ref(false)
const obj = ref(accountStore.user?.business || Obj.initEmpty())

async function updateCoverImage() {
  coverImageLoading.value = true
  try {
    if (!obj.value.coverImage) {
      nikkToast.error(
        'errors.validation.requiredField',
        t('features.businesses.changeStoreCoverImage'),
      )
      return
    }
    await businessStore.updateCoverImage(obj.value)
    nikkToast.success('messages.updatedSuccessfully')
  } catch (e) {
    nikkToast.httpError(e as AxiosError)
  } finally {
    coverImageLoading.value = false
  }
}

async function updateLogo() {
  logoLoading.value = true
  try {
    if (!obj.value.logo) {
      nikkToast.error(
        t('errors.validation.requiredField'),
        t('features.businesses.changeStoreLogo'),
      )
      return
    }
    await businessStore.updateLogo(obj.value)
    nikkToast.success('messages.updatedSuccessfully')
  } catch (e) {
    nikkToast.httpError(e as AxiosError)
  } finally {
    logoLoading.value = false
  }
}
</script>

<template>
  <div>
    <PrimeSkeleton v-if="pageLoading" width="100%" height="80%" />
    <div v-else class="nikk-container">
      <AppPageTitle
        title="features.businesses.businessSettings"
        subtitle="features.businesses.businessSettingsDesc"
      />

      <div class="content">
        <div class="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-6 mt-6">
          <div class="flex-grow">
            <h3 class="text-muted-color font-thin mb-2">
              {{ $t('features.businesses.changeStoreCoverImage') }}
            </h3>
            <NikkAvatarUpload
              class="h-48 border w-full"
              :url="!!obj.coverImage ? `${obj.coverImage}` : ``"
              @file-selected="
                (event: File) => {
                  obj.coverImage = event
                }
              "
            />
            <div class="h-full flex">
              <PrimeButton
                @click="updateCoverImage"
                class="mt-2 ml-auto"
                :loading="coverImageLoading"
                outlined
                type="submit"
                :label="$t('features.businesses.updateCoverImage')"
              />
            </div>
          </div>
          <div class="w-64">
            <h3 class="text-muted-color font-thin mb-2 text-cente">
              {{ $t('features.businesses.changeStoreLogo') }}
            </h3>
            <NikkAvatarUpload
              class="border"
              :url="!!obj.logo ? `${obj.logo}` : ``"
              @file-selected="
                (event: File) => {
                  obj.logo = event
                  console.log('THE LOGO', obj.logo, event)
                }
              "
            />
            <div class="h-full flex">
              <PrimeButton
                @click="updateLogo"
                class="mt-2 ml-auto"
                :loading="logoLoading"
                outlined
                type="submit"
                :label="$t('features.businesses.updateLogo')"
              />
            </div>
          </div>
        </div>

        <PrimeCard class="store-details mt-16 border w-full md:w-5/12 lg:w-4/12 md:mx-auto">
          <template #title>
            <span>{{ $t('features.businesses.storeDetails') }}</span>
          </template>

          <template #content>
            <PrimeForm :initialValues="obj" v-slot="$form" class="flex flex-col gap-5">
              <NikkInputText
                v-model="obj.name"
                :errorHelpLabel="$form.name?.error?.message"
                id="last-name"
                :isError="$form.name?.invalid"
                label="labels.lastName"
                name="lastName"
                type="text"
              />

              <NikkInputText
                v-model="obj.email"
                :errorHelpLabel="$form.email?.error?.message"
                id="email"
                :isError="$form.email?.invalid"
                label="labels.email"
                name="email"
                type="email"
              />

              <NikkInputText
                v-model="obj.phone"
                :errorHelpLabel="$form.phone?.error?.message"
                id="phone"
                :isError="$form.phone?.invalid"
                label="labels.phone"
                name="phone"
                type="text"
              />

              <NikkInputText
                v-model="obj.address"
                :errorHelpLabel="$form.address?.error?.message"
                id="address"
                :isError="$form.address?.invalid"
                label="labels.address"
                name="address"
                type="text"
              />
            </PrimeForm>
          </template>

          <template #footer>
            <PrimeButton class="mt-6" fluid type="submit" :label="$t('labels.edit')" />
          </template>
        </PrimeCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.store-logo {
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
}
</style>
