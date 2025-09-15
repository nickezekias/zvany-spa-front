<script setup lang="ts">
import AppPageTitle from '@/components/pages/AppPageTitle.vue'
import ProfileComponent from '@/components/user/ProfileComponent.vue'
</script>

<template>
  <div class="nikk-container">
    <AppPageTitle
      title="features.profile.userProfile"
      subtitle="features.profile.userProfileDesc"
    />
    <ProfileComponent class="w-full md:w-5/12 lg:w-4/12 md:mx-auto" />
  </div>
</template>
