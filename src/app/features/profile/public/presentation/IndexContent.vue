<script setup lang="ts">
import PrimeTabs from 'primevue/tabs'
import PrimeTabList from 'primevue/tablist'
import PrimeTab from 'primevue/tab'
import PrimeTabPanels from 'primevue/tabpanels'
import PrimeTabPanel from 'primevue/tabpanel'
import PublicProfileComponent from '@/components/user/PublicProfileComponent.vue'
</script>

<template>
  <PrimeTabs value="0" scrollable>
    <PrimeTabList>
      <PrimeTab value="0">{{ $t('labels.profile') }}</PrimeTab>
      <PrimeTab value="1">{{ $t('labels.spaceListing', 2) }}</PrimeTab>
      <PrimeTab value="2">{{ $t('labels.spaceRequest', 2) }}</PrimeTab>
    </PrimeTabList>
    <PrimeTabPanels class="pt-8 md:pt-16">
      <PrimeTabPanel value="0">
        <PublicProfileComponent />
      </PrimeTabPanel>
      <PrimeTabPanel value="1">
        <div class="flex items-center justify-center h-24">
          <span>{{ $t('hints.noSpaceListings') }}</span>
        </div>
      </PrimeTabPanel>
      <PrimeTabPanel value="2">
        <div class="flex items-center justify-center h-24">
          <span>{{ $t('hints.noSpaceRequests') }}</span>
        </div>
      </PrimeTabPanel>
    </PrimeTabPanels>
  </PrimeTabs>
</template>
