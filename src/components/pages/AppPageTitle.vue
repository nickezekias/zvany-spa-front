<script setup lang="ts">
import PrimeToolbar from 'primevue/toolbar'

const props = defineProps<{
  title: string
  subtitle?: string
}>()
</script>
<template>
  <PrimeToolbar class="bg-inherit px-4 md:px-0 mb-4 border-0 p-0">
    <template #start>
      <div class="flex flex-col flex-grow justify-center">
        <h3 class="font-medium text-xl md:text-2xl">{{ $t(`${props.title}`) }}</h3>
        <span v-if="props.subtitle" class="text-secondary text-sm md:text-base">{{
          $t(`${props.subtitle}`)
        }}</span>
      </div>
    </template>

    <template #center>
      <slot name="center"></slot>
    </template>

    <template #end>
      <slot name="end"></slot>
    </template>
  </PrimeToolbar>
</template>
