<script setup lang="ts">
import { ref } from 'vue'
import { Form as PrimeForm, type FormSubmitEvent } from '@primevue/forms'
import { useAccountStore } from '@/stores/account.store'
import { useI18n } from 'vue-i18n'
import { useProductStore } from '@/stores/product.store'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'

import NikkToast from '@/app/utils/NikkToast'
import Obj from '@/app/models/product.model'
import productTypes from '@/assets/data/productTypes.json'

import type { AxiosError } from 'axios'

import AppPageTitle from '@/components/pages/AppPageTitle.vue'
import NikkAvatarUpload from '@/components/forms/NikkAvatarUpload.vue'
import NikkInputNumber from '@/components/forms/NikkInputNumber.vue'
import NikkInputText from '@/components/forms/NikkInputText.vue'
import NikkSelect from '@/components/forms/NikkSelect.vue'
import NikkTextArea from '@/components/forms/NikkTextArea.vue'

const accountStore = useAccountStore()
const objStore = useProductStore()
const router = useRouter()
const toast = useToast()
const { t } = useI18n()
const nikkToast = new NikkToast(toast, t)

const loading = ref(false)
const obj = ref(Obj.initEmpty())
const resolver = zodResolver(
  z.object({
    // barcode: z.string().min(1, { message: 'errors.validation.requiredField' }),
    brand: z.string().min(1, { message: 'errors.validation.requiredField' }),
    categories: z.string().min(1, { message: 'errors.validation.requiredField' }),
    cost: z.union([
      z.number().min(0, { message: 'errors.validation.requiredField' }),
      z.string().min(0, { message: 'errors.validation.requiredField' }),
    ]),
    description: z.string().min(1, { message: 'errors.validation.requiredField' }),
    name: z.string().min(1, { message: 'errors.validation.requiredField' }),
    price: z.union([
      z.number().min(0, { message: 'errors.validation.requiredField' }),
      z.string().min(0, { message: 'errors.validation.requiredField' }),
    ]),
    quantity: z.union([
      z.number().min(0, { message: 'errors.validation.requiredField' }),
      z.string().min(0, { message: 'errors.validation.requiredField' }),
    ]),
    sku: z.string().min(1, { message: 'errors.validation.requiredField' }),
    type: z.string().min(1, { message: 'errors.validation.requiredField' }),
  }),
)

async function onFormSubmit(e: FormSubmitEvent) {
  const isFormCorrect = e.valid
  if (isFormCorrect) {
    loading.value = true

    try {
      obj.value.barcode = obj.value.sku
      obj.value.businessId = `${accountStore.user?.business?.id}`
      await objStore.create(obj.value)
      nikkToast.success('features.vendors.products.create.successMessage')
      router.push({ name: 'vendors.products.index' })
    } catch (e) {
      nikkToast.httpError(e as AxiosError)
    } finally {
      loading.value = false
    }
  } else {
    nikkToast.error('errors.validation.form', 'labels.invalidForm')
  }
}
</script>

<template>
  <div class="nikk-container">
    <AppPageTitle
      title="features.vendors.products.create.title"
      subtitle="features.vendors.products.create.subtitle"
    >
    </AppPageTitle>

    <PrimeCard class="vendor-card">
      <template #content>
        <PrimeForm
          :initialValues="obj"
          :resolver
          @submit="onFormSubmit"
          v-slot="$form"
          :validateOnBlur="true"
          :validateOnSubmit="true"
        >
          <div class="flex flex-col md:flex-row gap-4">
            <div class="w-full lg:w-4/12">
              <NikkAvatarUpload
                class="h-96 border"
                @file-selected="
                  (event: File) => {
                    obj.images = event
                  }
                "
              />
            </div>
            <div class="w-full flex flex-col lg:w-8/12 gap-4">
              <NikkInputText
                v-model="obj.name"
                :errorHelpLabel="$form.name?.error?.message"
                id="product-name"
                :isError="$form.name?.invalid"
                label="labels.name"
                name="name"
                type="text"
              />

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <NikkInputText
                  v-model="obj.sku"
                  id="sku"
                  :error-help-label="$form.sku?.error?.message"
                  :is-error="$form.sku?.invalid"
                  label="labels.sku"
                  name="sku"
                  type="text"
                />

                <!-- <NikkInputText
                  v-model="obj.barcode"
                  id="barcode"
                  :error-help-label="$form.barcode?.error?.message"
                  :is-error="$form.barcode?.invalid"
                  label="labels.barcode"
                  name="barcode"
                  type="text"
                /> -->

                <NikkSelect
                  v-model="obj.type"
                  id="type"
                  :error-help-label="$form.type?.error?.message"
                  hint="labels.selectProductType"
                  :is-error="$form.type?.invalid"
                  label="labels.productType"
                  name="type"
                  :options="productTypes"
                  placeholder="labels.selectProductType"
                />

                <NikkInputText
                  v-model="obj.brand"
                  id="brand"
                  :error-help-label="$form.brand?.error?.message"
                  :is-error="$form.brand?.error?.message"
                  label="labels.brand"
                  name="brand"
                  type="text"
                />

                <!-- FIXME: Create a select Object for categories that allows to custom add categories -->
                <NikkInputText
                  v-model="obj.categories"
                  id="categories"
                  :error-help-label="$form.categories?.error?.message"
                  :is-error="$form.categories?.invalid"
                  label="labels.categories"
                  name="categories"
                  type="text"
                />

                <NikkInputNumber
                  v-model="obj.quantity"
                  id="quantity"
                  :error-help-label="$form.quantity?.error?.message"
                  :is-error="$form.quantity?.invalid"
                  label="labels.quantity"
                  :min="0"
                  name="quantity"
                  :show-buttons="true"
                />

                <NikkInputNumber
                  v-model="obj.cost"
                  id="cost"
                  :error-help-label="$form.cost?.error?.message"
                  :is-error="$form.cost?.invalid"
                  label="labels.cost"
                  :min="0"
                  name="cost"
                  :show-buttons="true"
                />

                <NikkInputNumber
                  v-model="obj.price"
                  id="price"
                  :error-help-label="$form.price?.error?.message"
                  :is-error="$form.price?.invalid"
                  label="labels.price"
                  :min="0"
                  name="price"
                  :show-buttons="true"
                />
              </div>

              <NikkTextArea
                v-model="obj.description"
                :errorHelpLabel="$form.description?.error?.message"
                hint="features.vendors.products.create.descriptionHint"
                id="description"
                :isError="$form.description?.invalid"
                label="labels.description"
                name="description"
              />

              <div class="flex justify-end pt-6 gap-4">
                <router-link to="/vendors/products">
                  <PrimeButton text :label="$t('labels.cancel')" />
                </router-link>
                <PrimeButton type="submit" :loading="loading" :label="$t('labels.save')" />
              </div>
            </div>
          </div>
        </PrimeForm>
      </template>
    </PrimeCard>
  </div>
</template>
