<script setup lang="ts">
const emit = defineEmits(['close', 'selectedImage'])
const model = defineModel({ type: Boolean })
</script>

<template>
  <PrimeDialog class="p-4" v-model:visible="model" modal>
    <template #container>
      <div class="overflow-y-auto">
        <h3 class="font-bold text-lg">
          {{ $t('labels.imageLibrary') }}
        </h3>

        <div class="content">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="i in 5" :key="i" class="bg-gray-100 h-64"></div>
          </div>
        </div>

        <div class="actions">
          <div class="flex justify-end">
            <PrimeButton @click="emit('selectedImage')" :label="$t('labels.save')" size="large" />
          </div>
        </div>
      </div>
    </template>
  </PrimeDialog>
</template>
