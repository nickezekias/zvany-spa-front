<script setup lang="ts">
import AppPageTitle from '@/components/pages/AppPageTitle.vue'
import EditSpaceOfferComponent from '@/components/listings/EditSpaceOfferComponent.vue'
</script>

<template>
  <div>
    <div class="nikk-container">
      <AppPageTitle
        title="features.listings.edit.title"
        subtitle="features.listings.edit.titleDesc"
      >
      </AppPageTitle>

      <PrimeCard class="mt-8 w-full md:w-7/12 lg:w-6/12 md:mx-auto nikk-card">
        <template #content>
          <EditSpaceOfferComponent />
        </template>
      </PrimeCard>
    </div>
  </div>
</template>
