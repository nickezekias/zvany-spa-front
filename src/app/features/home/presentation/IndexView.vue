<script setup lang="ts">
import MobileIndexContent from '@/app/features/home/presentation/MobileIndexContent.vue'
import DesktopIndexContent from '@/app/features/home/presentation/DesktopIndexContent.vue'
</script>
<template>
  <div>
    <MobileIndexContent class="md:hidden" />
    <DesktopIndexContent class="hidden md:flex" />
  </div>
</template>
