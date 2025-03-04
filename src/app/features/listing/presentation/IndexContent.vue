<script setup lang="ts">
import { ref } from 'vue'

import PrimeStepper from 'primevue/stepper'
import PrimeStepList from 'primevue/steplist'
import PrimeStepPanels from 'primevue/steppanels'
import PrimeStep from 'primevue/step'
import PrimeStepPanel from 'primevue/steppanel'

import AppPageTitle from '@/components/pages/AppPageTitle.vue'
import FlightVerificationComponent from '@/components/listings/FlightVerificationComponent.vue'
import LuggageAndShippingComponent from '@/components/listings/LuggageAndShippingComponent.vue'

const currentStep = ref('1')
</script>

<template>
  <div class="nikk-container">
    <AppPageTitle
      title="features.listings.create.title"
      subtitle="features.listings.create.titleDesc"
    >
    </AppPageTitle>
    <PrimeCard class="mt-8 w-full md:w-7/12 lg:w-6/12 md:mx-auto nikk-card">
      <template #content>
        <PrimeStepper :value="currentStep">
          <PrimeStepList>
            <PrimeStep value="1">{{ $t('features.listings.create.flightVerification') }}</PrimeStep>
            <PrimeStep value="2">{{ $t('features.listings.create.luggageAndShipping') }}</PrimeStep>
          </PrimeStepList>

          <PrimeStepPanels>
            <PrimeStepPanel class="!bg-transparent" value="1">
              <FlightVerificationComponent @next="currentStep = '2'" />
            </PrimeStepPanel>
            <PrimeStepPanel class="!bg-transparent" value="2">
              <LuggageAndShippingComponent
                @previous="currentStep = '1'"
                @next="currentStep = '2'"
              />
            </PrimeStepPanel>
          </PrimeStepPanels>
        </PrimeStepper>
      </template>
    </PrimeCard>
  </div>
</template>
