<script setup lang="ts">
import { ref } from 'vue'

import NikkInputText from '@/components/forms/NikkInputText.vue'
import NikkDatePicker from '@/components/forms/NikkDatePicker.vue'
import NikkSelect from '@/components/forms/NikkSelect.vue'

const state = ref({
  arrivalDate: '',
  departureDate: '',
  fromTo: '',
  weight: '',
})
</script>

<template>
  <PrimeCard class="shadow-none">
    <template #content>
      <div class="flex flex-col md:flex-row items-center gap-4 rounded-lg w-full">
        <div class="flex flex-col md:flex-row items-center gap-4 w-full flex-grow">
          <NikkInputText
            v-model="state.fromTo"
            class="w-full"
            errorHelpLabel=""
            id="listingsSearchBar"
            label="labels.fromTo"
            :isError="false"
            name="listingsSearchBar"
            type="text"
          />

          <NikkDatePicker
            v-model="state.departureDate"
            class="w-full"
            errorHelpLabel=""
            id="flightDepartureDate"
            :isError="false"
            label="labels.departureDate"
            name="flightDepartureDate"
            selectionMode="single"
          />

          <NikkDatePicker
            v-model="state.arrivalDate"
            class="w-full"
            errorHelpLabel=""
            id="flightArrivalDate"
            :isError="false"
            label="labels.arrivalDate"
            name="flightArrivalDate"
            selectionMode="single"
          />

          <NikkSelect
            v-model="state.weight"
            class="w-full"
            id="weight"
            error-help-label="errors.validation.requiredField"
            :is-error="false"
            name="weight"
            :options="['0-5 kg', '5-10 kg', '10-15 kg', '15+ kg']"
            placeholder="labels.selectWeight"
          />
        </div>

        <PrimeButton class="hidden md:flex" icon="pi pi-search" raised />
        <PrimeButton class="md:hidden w-full" fluid icon="pi pi-search" raised />
      </div>
    </template>
  </PrimeCard>
</template>
