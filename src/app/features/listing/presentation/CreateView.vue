<script setup lang="ts">
import PrimeTabs from 'primevue/tabs'
import PrimeTabList from 'primevue/tablist'
import PrimeTab from 'primevue/tab'
import PrimeTabPanels from 'primevue/tabpanels'
import PrimeTabPanel from 'primevue/tabpanel'

import SpaceOfferIndexContent from '@/app/features/listing/presentation/IndexContent.vue'
</script>

<template>
  <div>
    <PrimeTabs value="1" scrollable class="min-h-screen">
      <PrimeTabList>
        <PrimeTab class="ms-4 md:ms-12" value="1">{{ $t('labels.offerSpace') }}</PrimeTab>
        <PrimeTab value="2">{{ $t('labels.requestSpace') }}</PrimeTab>
      </PrimeTabList>
      <PrimeTabPanels class="p-0">
        <PrimeTabPanel value="1">
          <SpaceOfferIndexContent />
        </PrimeTabPanel>
        <PrimeTabPanel value="2">
          <div>Require Space</div>
        </PrimeTabPanel>
      </PrimeTabPanels>
    </PrimeTabs>
  </div>
</template>
