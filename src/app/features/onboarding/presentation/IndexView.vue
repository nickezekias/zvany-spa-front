<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '@/stores/profile.store'
import { useToast } from 'primevue'

import NikkToast from '@/app/utils/NikkToast'

import FileUploader from '@/components/FileUploader.vue'
import type { AxiosError } from 'axios'
// import ProfilePic from '@/components/user/ProfilePic.vue'

const profileStore = useProfileStore()
const { t } = useI18n()
const toast = useToast()

const nikkToast = new NikkToast(toast, t)

const loading = ref(false)
const IDDocument = ref<Blob | null>(null)
const userPic = ref<Blob | null>(null)

async function onFormSubmit() {
  const formData = new FormData()
  formData.append('IDDocument', IDDocument.value as Blob)
  formData.append('userPic', userPic.value as Blob)

  loading.value = true
  try {
    await profileStore.verifyIDDocument(formData)
  } catch (e) {
    nikkToast.httpError(e as AxiosError)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex flex-col md:flex-row md:h-screen">
    <div class="w-full md:w-1/3 illustration h-64 md:h-full"></div>

    <div class="nikk-container overflow-y-auto flex flex-col gap-4 w-full md:w-2/3">
      <div class="text-center mt-6">
        <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold">
          {{ $t('features.onboarding.title') }}
        </h1>
        <div class="text-secondary mt-1 text-sm md:text-base lg:text-lg">
          {{ $t('features.onboarding.subtitle') }}
        </div>
        <PrimeDivider />
      </div>

      <div class="text-center mt-10">
        <h3 class="text-semibold text-xl text-gray-600">1. Upload Your ID</h3>
        <p class="text-gray-400 text-sm md:text-base">
          You can upload any Government Issued ID: ID Card, Driving License, Passport
        </p>
        <div class="w-full md:w-96 mt-4 md:mx-auto">
          <FileUploader
            @file-selected="
              (event: File) => {
                IDDocument = event
              }
            "
          />
        </div>
      </div>

      <div class="text-center mt-10">
        <h3 class="text-semibold text-xl text-gray-600">2. Upload Recent Pic</h3>
        <p class="text-gray-400 text-sm md:text-base">
          Upload a recent passport type profile picture of yourself
        </p>
        <div class="w-full md:w-96 mt-4 md:mx-auto">
          <FileUploader
            @file-selected="
              (event: File) => {
                userPic = event
              }
            "
          />
        </div>
      </div>

      <div class="flex mt-10 justify-end">
        <router-link to="/dashboard">
          <PrimeButton
            severity="secondary"
            class="me-4"
            :loading="loading"
            :label="$t('labels.skip')"
          />
        </router-link>

        <PrimeButton @click="onFormSubmit" :loading="loading" :label="$t('labels.save')" />
      </div>
      <!-- <div class="text-center mt-10">
        <ProfilePic />
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.illustration {
  background: url('@/assets/traveler2.jpg') no-repeat center center;
  background-size: cover;
}
</style>
