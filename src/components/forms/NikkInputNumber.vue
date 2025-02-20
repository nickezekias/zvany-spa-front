<script setup lang="ts">
import type { ModelRef } from 'vue'
import PrimeInputNumber from 'primevue/inputnumber'
import PrimeFloatLabel from 'primevue/floatlabel'

type InputMode = 'decimal' | 'currency' | undefined

const model: ModelRef<number | undefined | null> = defineModel()
const props = defineProps<{
  id: string
  currency?: string
  disabled?: boolean
  errorHelpLabel: string
  label?: string
  literalLabel?: string
  locale?: string
  max?: number
  min?: number
  mode?: InputMode
  name?: string
  readonly?: boolean
  showButtons?: boolean
  isError: boolean | undefined
}>()
</script>

<template>
  <div>
    <PrimeFloatLabel variant="on">
      <PrimeInputNumber
        :id="props.id"
        v-model="model"
        button-layout="horizontal"
        class="w-full shadow-none"
        :currency="props.currency"
        :disabled="props.disabled"
        :invalid="props.isError"
        fluid
        :locale="props.locale"
        :max="props.max"
        :min="props.min"
        :mode="props.mode"
        :name="props.name"
        :readonly="props.readonly"
        :show-buttons="props.showButtons"
      >
        <template v-if="props.showButtons" #incrementicon>
          <span class="pi pi-plus" />
        </template>
        <template v-if="props.showButtons" #decrementicon>
          <span class="pi pi-minus" />
        </template>
      </PrimeInputNumber>
      <label v-if="!props.literalLabel" :for="props.id">{{ $t(`${props.label}`) }}</label>
      <label v-else :for="props.id">{{ props.literalLabel }}</label>
      <!-- <label :class="props.isError ? 'nikk-invalid' : ''" :for="props.id">{{
        $t(`${props.label}`)
      }}</label> -->
    </PrimeFloatLabel>
    <small v-if="props.isError" :id="`${props.id}-help`" class="nikk-invalid">
      {{ $t(`${props.errorHelpLabel}`) }}
    </small>
  </div>
</template>
