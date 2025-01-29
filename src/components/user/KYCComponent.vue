<script setup lang="ts">
import FileUploader from '../FileUploader.vue'
</script>

<template>
  <div class="nikk-container">
    <h1 class="text-2xl font-semibold">{{ $t('labels.uploadIDDocument') }}</h1>
    <div class="flex w-full md:w-1/3 pt-4">
      <FileUploader />
    </div>
  </div>
</template>
