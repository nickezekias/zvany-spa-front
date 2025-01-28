<script setup lang="ts">
import PrimeFloatLabel from 'primevue/floatlabel'
import PrimePassword from 'primevue/password'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const model: any = defineModel()

const props = defineProps<{
  id: string
  disabled?: boolean
  errorHelpLabel: string | undefined
  feedback?: boolean
  label: string
  name?: string
  readonly?: boolean
  toggleMask: boolean
  isError: boolean | undefined
}>()
</script>

<template>
  <div>
    <PrimeFloatLabel variant="on">
      <PrimePassword
        v-model="model"
        :disabled="props.disabled"
        :invalid="props.isError"
        :inputId="props.id"
        :name="props.name"
        :readonly="props.readonly"
        :toggleMask="props.toggleMask"
        :feedback="props.feedback"
        fluid
      />
      <label :for="props.id">{{ $t(`${props.label}`) }}</label>
    </PrimeFloatLabel>
    <PrimeMessage v-if="props.isError" severity="error" size="small" variant="simple">
      {{ $t(`${props.errorHelpLabel}`) }}
    </PrimeMessage>
  </div>
</template>

<style scoped></style>
