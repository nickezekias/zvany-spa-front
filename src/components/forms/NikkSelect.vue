<script setup lang="ts">
import PrimeFloatLabel from 'primevue/floatlabel'
import PrimeSelect from 'primevue/select'

const model = defineModel()
const props = defineProps<{
  disabled?: boolean
  errorHelpLabel?: string
  hint?: string
  id: string
  isError?: boolean
  label: string
  literalLabel?: string
  loading?: boolean
  name?: string
  optionLabel?: string
  optionValue?: string
  options: Array<unknown>
  placeholder?: string | undefined
  readonly?: boolean
}>()
</script>

<template>
  <div>
    <PrimeFloatLabel variant="on">
      <PrimeSelect
        v-model="model"
        class="w-full"
        :disabled="props.disabled"
        :hint="props.hint"
        :invalid="props.isError"
        :loading="props.loading"
        :name="props.name"
        :optionLabel="props.optionLabel"
        :optionValue="props.optionValue"
        :options="props.options"
        :placeholder="props.placeholder ? $t(`${props.placeholder}`) : ''"
        :readonly="props.readonly"
      >
        <template #value="slotProps">
          <slot
            v-if="
              (Array.isArray(slotProps.value) && slotProps.value.length > 0) ||
              (!Array.isArray(slotProps.value) && slotProps.value)
            "
            name="value"
            :slotProps="slotProps"
          >
            {{ slotProps.value }}
          </slot>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>

        <template #option="slotProps">
          <slot name="option" :slotProps="slotProps">
            {{ slotProps.option.label ? slotProps.option.label : slotProps.option }}
          </slot>
        </template>
      </PrimeSelect>
      <!-- <label v-if="!props.literalLabel" :for="props.id">{{ $t(`${props.label}`) }}</label> -->
      <!-- <label v-else :for="props.id">{{ props.literalLabel }}</label> -->
    </PrimeFloatLabel>
    <PrimeMessage v-if="props.isError" severity="error" size="small" variant="simple">
      {{ $t(`${props.errorHelpLabel}`) }}
    </PrimeMessage>
    <PrimeMessage
      v-else-if="!props.isError && props.hint"
      size="small"
      severity="secondary"
      variant="simple"
    >
      {{ $t(`${props.hint}`) }}
    </PrimeMessage>
  </div>
</template>
