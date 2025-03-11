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
import SpaceListing from '@/app/models/spaceListing.model'

import NikkInputNumber from '@/components/forms/NikkInputNumber.vue'
import NikkInputText from '@/components/forms/NikkInputText.vue'
import NikkSelect from '@/components/forms/NikkSelect.vue'
import NikkTextArea from '@/components/forms/NikkTextArea.vue'

import type { AxiosError } from 'axios'

const emit = defineEmits(['previous', 'submit'])

const accountStore = useAccountStore()
const listingStore = useListingStore()
const router = useRouter()
const toast = useToast()
const { t } = useI18n()

const nikkToast = new NikkToast(toast, t)

const loading = ref(false)
const deliveryPreferences = Object.values(SpaceListing.DELIVERY_PREFERENCES).map((value) => ({
  label: t(`features.listings.create.constants.deliveryPreferences.${value}`),
  value,
}))
const itemRestrictions = Object.values(SpaceListing.ITEM_RESTRICTIONS).map((value) => ({
  label: t(`features.listings.create.constants.itemRestrictions.${value}`),
  value,
}))
const spaceListing = ref(listingStore.spaceListing)

const resolver = zodResolver(
  z.object({
    availableWeight: z.number().min(1, { message: 'errors.validation.requiredField' }),
    deliveryPreferences: z.string().min(1, { message: 'errors.validation.requiredField' }),
    description: z.string().min(1, { message: 'errors.validation.requiredField' }),
    itemRestrictions: z.string().min(1, { message: 'errors.validation.requiredField' }),
    pricePerUnit: z.string().min(1, { message: 'errors.validation.requiredField' }),
    // specialInstructions: z.string().min(1, { message: 'errors.validation.requiredField' }),
    weightUnit: z.string().min(1, { message: 'errors.validation.requiredField' }),
  }),
)

async function onFormSubmit(e: FormSubmitEvent) {
  const isFormCorrect = e.valid
  if (isFormCorrect) {
    loading.value = true

    if (accountStore.user) {
      spaceListing.value.userId = accountStore.user.id
    }

    const payload = spaceListing.value
    listingStore.setSpaceListing(payload)

    try {
      await listingStore.createSpaceOfferListing(listingStore.spaceListing)
      nikkToast.success('features.listings.create.successDesc')
      router.push({ name: 'listings.index' })
    } catch (e) {
      nikkToast.httpError(e as AxiosError)
    } finally {
      loading.value = false
    }

    emit('submit')
  } else {
    nikkToast.error('errors.validation.form', 'labels.invalidForm')
  }
}
</script>

<template>
  <PrimeForm
    :initialValues="spaceListing"
    :resolver
    @submit="onFormSubmit"
    v-slot="$form"
    :validateOnBlur="true"
    :validateOnSubmit="true"
    class="grid grid-cols-2 gap-4 mt-6"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-32 w-32 mx-auto col-span-2 text-gray-300"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z"
      />
      <path
        fill="currentColor"
        d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641"
        opacity="0.7"
      />
      <path
        fill="currentColor"
        d="m21.403 7.14l-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802"
        opacity="0.5"
      />
      <path
        fill="currentColor"
        d="m6.323 4.484l.1-.052l1.493-.784l9.1 5.005l4.025-2.011q.205.232.362.498c.15.254.262.524.346.825L17.75 9.964V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44A3 3 0 0 1 12 22c-.248 0-.493-.032-.75-.096v-9.44l-8.998-4.5c.084-.3.196-.57.346-.824q.156-.266.362-.498l9.04 4.52l3.387-1.693z"
      />
    </svg>

    <h3 class="text-lg font-medium col-span-2">{{ $t('labels.luggageDetails') }}</h3>

    <NikkInputNumber
      v-model="spaceListing.availableWeight"
      class="col-span-2 md:col-span-1"
      id="availableWeight"
      error-help-label="errors.validation.requiredField"
      :is-error="$form.availableWeight?.invalid"
      :literalLabel="$t('labels.availableWeightForUnit', { unit: spaceListing.weightUnit })"
      :min="1"
      name="availableWeight"
      :show-buttons="true"
    />

    <NikkSelect
      v-model="spaceListing.weightUnit"
      class="col-span-2 md:col-span-1"
      id="weightUnit"
      error-help-label="errors.validation.requiredField"
      :is-error="$form.weightUnit?.invalid"
      name="weightUnit"
      :options="Object.values(SpaceListing.WEIGHT_UNITS)"
      hint="labels.selectWeightUnit"
    />

    <NikkInputText
      v-model="spaceListing.pricePerUnit"
      class="col-span-2 md:col-span-1 capitalize"
      :errorHelpLabel="$form.pricePerUnit?.error?.message"
      id="pricePerUnit"
      :isError="$form.pricePerUnit?.invalid"
      :literalLabel="$t('labels.pricePerUnit', { unit: spaceListing.weightUnit })"
      name="pricePerUnit"
      type="text"
    />

    <NikkInputText
      class="col-span-2 md:col-span-1"
      :errorHelpLabel="$form.availableSpaceDimensions?.error?.message"
      id="available-space-dimensions"
      :isError="$form.availableSpaceDimensions?.invalid"
      label="labels.availableSpaceDimensions"
      name="available-space-dimensions"
      hint="hints.LxWxH"
      type="text"
    />

    <h3 class="text-lg font-medium col-span-2">{{ $t('labels.shippingDetails') }}</h3>

    <NikkSelect
      v-model="spaceListing.itemRestrictions"
      class="col-span-2 md:col-span-1"
      id="itemRestrictions"
      error-help-label="errors.validation.requiredField"
      hint="labels.selectItemRestrictions"
      :is-error="$form.itemRestrictions?.invalid"
      name="itemRestrictions"
      :options="itemRestrictions"
      optionLabel="label"
      optionValue="value"
      placeholder="labels.selectItemRestrictions"
    >
      <template #value="slotProps">
        {{
          slotProps.slotProps.value
            ? $t(`features.listings.create.constants.itemRestrictions.${slotProps.slotProps.value}`)
            : ''
        }}
      </template>
    </NikkSelect>

    <NikkSelect
      v-model="spaceListing.deliveryPreferences"
      class="col-span-2 md:col-span-1"
      id="deliveryPreferences"
      error-help-label="errors.validation.requiredField"
      hint="labels.selectDeliveryPreferences"
      :is-error="$form.deliveryPreferences?.invalid"
      name="deliveryPreferences"
      :options="deliveryPreferences"
      optionLabel="label"
      optionValue="value"
      placeholder="labels.selectDeliveryPreferences"
    >
      <template #value="slotProps">
        {{
          slotProps.slotProps.value
            ? $t(
                `features.listings.create.constants.deliveryPreferences.${slotProps.slotProps.value}`,
              )
            : ''
        }}
      </template>
    </NikkSelect>

    <NikkTextArea
      v-model="spaceListing.description"
      class="col-span-2"
      :errorHelpLabel="$form.description?.error?.message"
      hint="features.listings.create.descriptionHint"
      id="description"
      :isError="$form.description?.invalid"
      label="labels.description"
      name="description"
    />

    <NikkTextArea
      v-model="spaceListing.specialInstructions"
      class="col-span-2"
      :errorHelpLabel="$form.specialInstructions?.error?.message"
      id="specialInstructions"
      :isError="$form.specialInstructions?.invalid"
      label="labels.specialInstructions"
      name="specialInstructions"
      type="text"
    />

    <div class="col-span-2 flex justify-between mt-6">
      <PrimeButton
        @click="emit('previous')"
        severity="secondary"
        text
        :label="$t('labels.previous')"
      />
      <PrimeButton
        icon="pi pi-check-circle"
        :loading="loading"
        type="submit"
        :label="$t('labels.postSpaceListing')"
      />
    </div>
  </PrimeForm>
</template>
