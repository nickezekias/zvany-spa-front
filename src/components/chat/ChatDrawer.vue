<script setup lang="ts">
import type { Ref } from 'vue'

import PrimeDrawer from 'primevue/drawer'

const model: Ref<boolean> = defineModel() as Ref<boolean>
</script>

<template>
  <PrimeDrawer v-model:visible="model" position="right">
    <template #header>
      <h2>{{ $t('labels.message', 2) }}</h2>
    </template>
  </PrimeDrawer>
</template>
