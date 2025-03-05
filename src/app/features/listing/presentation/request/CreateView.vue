<script setup lang="ts">
import { ref } from 'vue'
import { Form as PrimeForm, type FormSubmitEvent } from '@primevue/forms'
import { useAccountStore } from '@/stores/account.store'
import { useI18n } from 'vue-i18n'
import { useListingStore } from '@/stores/listing.store'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'

import NikkToast from '@/app/utils/NikkToast'
import Obj from '@/app/models/spaceRequestListing.model'

import type { AxiosError } from 'axios'

import AppPageTitle from '@/components/pages/AppPageTitle.vue'
import NikkDatePicker from '@/components/forms/NikkDatePicker.vue'
import NikkInputNumber from '@/components/forms/NikkInputNumber.vue'
import NikkInputText from '@/components/forms/NikkInputText.vue'
import NikkSelect from '@/components/forms/NikkSelect.vue'
import NikkTextArea from '@/components/forms/NikkTextArea.vue'

const accountStore = useAccountStore()
const objStore = useListingStore()
const router = useRouter()
const toast = useToast()
const { t } = useI18n()
const nikkToast = new NikkToast(toast, t)

const itemTypesList = Object.values(Obj.ITEM_TYPES_LIST).map((value) => ({
  label: t(`features.listings.requests.constants.itemTypes.${value}`),
  value,
}))

const shipmentDateFlexibilityList = Object.values(Obj.SHIPMENT_DATE_FLEXIBILITY_LIST).map(
  (value) => ({
    label: t(`features.listings.requests.constants.shipmentDateFlexibility.${value}`),
    value,
  }),
)

const shipperTypesList = Object.values(Obj.SHIPPER_TYPES_LIST).map((value) => ({
  label: t(`features.listings.requests.constants.shipperTypes.${value}`),
  value,
}))
const loading = ref(false)
const obj = ref<Obj>(Obj.initEmpty())

const resolver = zodResolver(
  z.object({
    description: z.string().min(1, { message: 'errors.validation.requiredField' }),
    flightArrival: z.string().min(1, { message: 'errors.validation.requiredField' }),
    flightDeparture: z.string().min(1, { message: 'errors.validation.requiredField' }),
    itemTypes: z.string().min(1, { message: 'errors.validation.requiredField' }),
    shipmentDate: z.date({ message: 'errors.validation.requiredField' }),
    shipmentDateFlexibility: z.string().min(1, { message: 'errors.validation.requiredField' }),
    shipperType: z.string().min(1, { message: 'errors.validation.requiredField' }),
    weightUnit: z.string().min(1, { message: 'errors.validation.requiredField' }),
    weight: z.union([
      z.number().min(1, { message: 'errors.validation.requiredField' }),
      z.string().min(1, { message: 'errors.validation.requiredField' }),
    ]),
  }),
)

async function onFormSubmit(e: FormSubmitEvent) {
  const isFormCorrect = e.valid
  if (isFormCorrect) {
    loading.value = true

    if (accountStore.user) {
      obj.value.userId = accountStore.user.id
    }

    const payload: Obj = obj.value

    try {
      await objStore.createSpaceRequestListing(payload)
      nikkToast.success('features.listings.requests.create.successDesc')
      router.push({ name: 'listings.index' })
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
      title="features.listings.requests.create.title"
      subtitle="features.listings.requests.create.titleDesc"
    >
    </AppPageTitle>

    <PrimeCard class="mt-8 w-full md:w-7/12 lg:w-6/12 md:mx-auto nikk-card">
      <template #content>
        <PrimeForm
          :initialValues="obj"
          :resolver
          @submit="onFormSubmit"
          v-slot="$form"
          :validateOnBlur="true"
          :validateOnSubmit="true"
          class="grid grid-cols-2 gap-4 mt-6"
        >
          <h3 class="text-lg font-medium col-span-2">{{ $t('labels.departureAndDestination') }}</h3>

          <NikkInputText
            v-model="obj.flightDeparture"
            class="col-span-2 md:col-span-1"
            :errorHelpLabel="$form.flightDeparture?.error?.message"
            id="requestFlightDeparture"
            :isError="$form.flightDeparture?.invalid"
            label="labels.departure"
            name="flightDeparture"
            type="text"
          />

          <NikkInputText
            v-model="obj.flightArrival"
            class="col-span-2 md:col-span-1"
            :errorHelpLabel="$form.flightArrival?.error?.message"
            id="requestFlightArrival"
            :isError="$form.flightArrival?.invalid"
            label="labels.arrival"
            name="flightArrival"
            type="text"
          />

          <NikkDatePicker
            v-model="obj.shipmentDate"
            class="col-span-2 md:col-span-1"
            :errorHelpLabel="$form.shipmentDate?.error?.message"
            id="requestShipmentDate"
            :isError="$form.shipmentDate?.invalid"
            label="labels.shipmentArrivalDate"
            name="shipmentDate"
            selectionMode="single"
          />

          <NikkSelect
            v-model="obj.shipmentDateFlexibility"
            class="col-span-2 md:col-span-1"
            id="requestShipmentDateFlexibility"
            error-help-label="errors.validation.requiredField"
            hint="labels.selectShipmentDateFlexibility"
            :is-error="$form.shipmentDateFlexibility?.invalid"
            name="shipmentDateFlexibility"
            :options="shipmentDateFlexibilityList"
            optionLabel="label"
            optionValue="value"
            placeholder="labels.selectShipmentDateFlexibility"
          >
            <template #value="slotProps">
              {{
                slotProps.slotProps.value
                  ? $t(
                      `features.listings.requests.constants.shipmentDateFlexibility.${slotProps.slotProps.value}`,
                    )
                  : ''
              }}
            </template>
          </NikkSelect>

          <h3 class="text-lg font-medium col-span-2">{{ $t('labels.shippingDetails') }}</h3>

          <NikkSelect
            v-model="obj.weightUnit"
            class="col-span-2 md:col-span-1"
            id="requestWeightUnit"
            error-help-label="errors.validation.requiredField"
            :is-error="$form.weightUnit?.invalid"
            name="weightUnit"
            :options="Object.values(Obj.WEIGHT_UNITS)"
            hint="labels.selectWeightUnit"
          />

          <NikkInputNumber
            v-model="obj.weight"
            class="col-span-2 md:col-span-1"
            id="requestWeight"
            error-help-label="errors.validation.requiredField"
            :is-error="$form.weight?.invalid"
            :literalLabel="$t('labels.desiredWeightForUnit', { unit: obj.weightUnit })"
            :min="1"
            name="weight"
            :show-buttons="true"
          />

          <NikkSelect
            v-model="obj.shipperType"
            class="col-span-2 md:col-span-1"
            id="requestShipperType"
            error-help-label="errors.validation.requiredField"
            hint="labels.selectShipperType"
            :is-error="$form.shipperType?.invalid"
            name="shipperType"
            :options="shipperTypesList"
            optionLabel="label"
            optionValue="value"
            placeholder="labels.selectShipperType"
          >
            <template #value="slotProps">
              {{
                slotProps.slotProps.value
                  ? $t(
                      `features.listings.requests.constants.shipperTypes.${slotProps.slotProps.value}`,
                    )
                  : ''
              }}
            </template>
          </NikkSelect>

          <NikkSelect
            v-model="obj.itemTypes"
            class="col-span-2 md:col-span-1"
            id="requestItemTypes"
            error-help-label="errors.validation.requiredField"
            hint="labels.selectItemTypes"
            :is-error="$form.itemTypes?.invalid"
            name="itemTypes"
            :options="itemTypesList"
            optionLabel="label"
            optionValue="value"
            placeholder="labels.selectItemTypes"
          >
            <template #value="slotProps">
              {{
                slotProps.slotProps.value
                  ? $t(
                      `features.listings.requests.constants.itemTypes.${slotProps.slotProps.value}`,
                    )
                  : ''
              }}
            </template>
          </NikkSelect>

          <NikkTextArea
            v-model="obj.description"
            class="col-span-2"
            :errorHelpLabel="$form.description?.error?.message"
            hint="features.listings.requests.create.descriptionHint"
            id="requestDescription"
            :isError="$form.description?.invalid"
            label="labels.description"
            name="description"
          />

          <NikkTextArea
            v-model="obj.specialInstructions"
            class="col-span-2"
            :errorHelpLabel="$form.specialInstructions?.error?.message"
            id="requestSpecialInstructions"
            :isError="$form.specialInstructions?.invalid"
            label="labels.specialInstructions"
            name="specialInstructions"
            type="text"
          />

          <PrimeButton
            icon="pi pi-check-circle"
            class="col-span-2"
            :loading="loading"
            type="submit"
            :label="$t('labels.postSpaceRequest')"
          />
        </PrimeForm>
      </template>
    </PrimeCard>
  </div>
</template>
