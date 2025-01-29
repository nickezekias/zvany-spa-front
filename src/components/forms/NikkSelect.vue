<script setup lang="ts">
import PrimeSelect from 'primevue/select'

const model = defineModel()
const props = defineProps<{
  disabled?: boolean
  errorHelpLabel?: string
  id: string
  isError?: boolean
  loading?: boolean
  name?: string
  optionLabel?: string
  optionValue?: string
  options: Array<unknown>
  placeholder?: string
  readonly?: boolean
}>()
</script>

<template>
  <div>
    <PrimeSelect
      v-model="model"
      class="w-full"
      :disabled="props.disabled"
      :invalid="props.isError"
      :loading="props.loading"
      :name="props.name"
      :optionLabel="props.optionLabel"
      :optionValue="props.optionValue"
      :options="props.options"
      :placeholder="$t(`${props.placeholder}`)"
      :readonly="props.readonly"
    />
    <PrimeMessage v-if="props.isError" severity="error" size="small" variant="simple">
      {{ $t(`${props.errorHelpLabel}`) }}
    </PrimeMessage>
  </div>
</template>
