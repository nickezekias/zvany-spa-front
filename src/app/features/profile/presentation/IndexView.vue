<script setup lang="ts">
import PrimeTabs from 'primevue/tabs'
import PrimeTabList from 'primevue/tablist'
import PrimeTab from 'primevue/tab'
import PrimeTabPanels from 'primevue/tabpanels'
import PrimeTabPanel from 'primevue/tabpanel'

import ProfileComponent from '@/components/user/ProfileComponent.vue'
import KYCComponent from '@/components/user/KYCComponent.vue'
</script>

<template>
  <div class="flex flex-col">
    <PrimeTabs value="0" scrollable>
      <PrimeTabList>
        <PrimeTab class="md:ms-12" value="0">{{ $t('labels.account') }}</PrimeTab>
        <PrimeTab value="1">{{ $t('labels.trustAndVerification') }}</PrimeTab>
      </PrimeTabList>
      <PrimeTabPanels class="pt-8 md:pt-16">
        <PrimeTabPanel value="0">
          <ProfileComponent class="w-full md:w-5/12 lg:w-4/12 md:mx-auto" />
        </PrimeTabPanel>
        <PrimeTabPanel value="1">
          <KYCComponent />
        </PrimeTabPanel>
      </PrimeTabPanels>
    </PrimeTabs>
  </div>
</template>
