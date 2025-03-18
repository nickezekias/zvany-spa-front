<script setup lang="ts">
import PrimeTabs from 'primevue/tabs'
import PrimeTabList from 'primevue/tablist'
import PrimeTab from 'primevue/tab'
import PrimeTabPanels from 'primevue/tabpanels'
import PrimeTabPanel from 'primevue/tabpanel'

import AppPageTitle from '@/components/pages/AppPageTitle.vue'
import ProfileComponent from '@/components/user/ProfileComponent.vue'
</script>

<template>
  <div class="flex flex-col">
    <PrimeTabs value="0" scrollable class="min-h-screen">
      <PrimeTabList>
        <PrimeTab class="ms-4 md:ms-12" value="0">{{ $t('labels.account') }}</PrimeTab>
      </PrimeTabList>
      <PrimeTabPanels class="p-0">
        <PrimeTabPanel value="0">
          <div class="nikk-container">
            <AppPageTitle
              title="features.profile.userProfile"
              subtitle="features.profile.userProfileDesc"
            />
            <ProfileComponent class="w-full md:w-5/12 lg:w-4/12 md:mx-auto" />
          </div>
        </PrimeTabPanel>
      </PrimeTabPanels>
    </PrimeTabs>
  </div>
</template>
