<script setup lang="ts">
import PrimeFloatLabel from 'primevue/floatlabel'
import PrimeInputText from 'primevue/inputtext'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const model: any = defineModel()
const props = defineProps<{
  id: string
  disabled?: boolean
  errorHelpLabel: string | undefined
  label: string
  name?: string
  readonly?: boolean
  type: string
  isError: boolean | undefined
}>()
</script>

<template>
  <div>
    <PrimeFloatLabel variant="on">
      <PrimeInputText
        v-model="model"
        class="w-full border shadow-none"
        :disabled="props.disabled"
        :invalid="props.isError"
        :id="props.id"
        :name="props.name"
        :readonly="props.readonly"
        :type="type"
      />
      <label :for="props.id">{{ $t(`${props.label}`) }}</label>
    </PrimeFloatLabel>
    <PrimeMessage v-if="props.isError" severity="error" size="small" variant="simple">
      {{ $t(`${props.errorHelpLabel}`) }}
    </PrimeMessage>
  </div>
</template>
