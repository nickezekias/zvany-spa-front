<script setup lang="ts">
import PrimeTabs from 'primevue/tabs'
import PrimeTabList from 'primevue/tablist'
import PrimeTab from 'primevue/tab'
import PrimeTabPanels from 'primevue/tabpanels'
import PrimeTabPanel from 'primevue/tabpanel'

import AppPageTitle from '@/components/pages/AppPageTitle.vue'
import ProfileComponent from '@/components/user/ProfileComponent.vue'
import KYCComponent from '@/components/user/KYCComponent.vue'
</script>

<template>
  <div class="flex flex-col">
    <PrimeTabs value="0" scrollable class="min-h-screen">
      <PrimeTabList>
        <PrimeTab class="ms-4 md:ms-12" value="0">{{ $t('labels.account') }}</PrimeTab>
        <PrimeTab value="1">{{ $t('labels.trustAndVerification') }}</PrimeTab>
      </PrimeTabList>
      <PrimeTabPanels class="p-0">
        <PrimeTabPanel value="0">
          <div class="nikk-container">
            <AppPageTitle
              title="features.profile.userProfile"
              subtitle="features.profile.userProfileDesc"
            >
              <template #end>
                <router-link :to="{ name: 'user.publicProfile' }">
                  <PrimeButton
                    icon="pi pi-eye"
                    :label="$t('labels.publicProfile')"
                    outlined
                    severity="secondary"
                    size="small"
                  />
                </router-link>
              </template>
            </AppPageTitle>
            <ProfileComponent class="w-full md:w-5/12 lg:w-4/12 md:mx-auto" />
          </div>
        </PrimeTabPanel>
        <PrimeTabPanel value="1">
          <KYCComponent />
        </PrimeTabPanel>
      </PrimeTabPanels>
    </PrimeTabs>
  </div>
</template>
