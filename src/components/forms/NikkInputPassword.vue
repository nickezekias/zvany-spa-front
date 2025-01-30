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
  isError: boolean | undefined
  label: string
  name?: string
  readonly?: boolean
  showMeterHint?: boolean
  toggleMask: boolean
}>()
</script>

<template>
  <div>
    <PrimeFloatLabel variant="on">
      <PrimePassword
        v-model="model"
        :disabled="props.disabled"
        :feedback="props.feedback"
        fluid
        :invalid="props.isError"
        :inputId="props.id"
        :name="props.name"
        :readonly="props.readonly"
        :toggleMask="props.toggleMask"
      >
        <template v-if="props.feedback && props.showMeterHint" #footer>
          <PrimeDivider />
          <ul class="pl-2 ml-2 my-0 leading-normal">
            <li>{{ $t('errors.validation.mustContain.lowercase') }}</li>
            <li>{{ $t('errors.validation.mustContain.uppercase') }}</li>
            <li>{{ $t('errors.validation.mustContain.number') }}</li>
            <li>{{ $t('errors.validation.passwords.minCount') }}</li>
          </ul>
        </template>
      </PrimePassword>
      <label :for="props.id">{{ $t(`${props.label}`) }}</label>
    </PrimeFloatLabel>
    <PrimeMessage v-if="props.isError" severity="error" size="small" variant="simple">
      {{ $t(`${props.errorHelpLabel}`) }}
    </PrimeMessage>
  </div>
</template>

<style scoped></style>
