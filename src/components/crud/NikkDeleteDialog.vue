<script setup lang="ts">
const emit = defineEmits(['close', 'confirm'])
const model = defineModel({ type: Boolean })
const props = defineProps<{ loading: boolean }>()
</script>

<template>
  <PrimeDialog v-model:visible="model" modal>
    <template #container>
      <div class="p-4">
        <div class="mb-4">
          <span class="text-lg md:text-xl font-bold">
            <slot name="title"></slot>
          </span>
        </div>

        <PrimeMessage severity="error">
          <slot name="message"></slot>
        </PrimeMessage>

        <div class="col-12 mt-5">
          <div class="flex justify-content-end gap-4">
            <PrimeButton
              @click="emit('close')"
              size="large"
              severity="secondary"
              :label="$t('labels.cancel')"
            />
            <PrimeButton
              @click="emit('confirm')"
              :label="$t('labels.delete')"
              :loading="props.loading"
              size="large"
              severity="danger"
            />
          </div>
        </div>
      </div>
    </template>
  </PrimeDialog>
</template>
