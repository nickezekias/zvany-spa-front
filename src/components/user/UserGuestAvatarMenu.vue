<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import PrimeBadge from 'primevue/badge'

const router = useRouter()
const { t } = useI18n()

const items = ref([
  {
    label: t('labels.login'),
    command: () => {
      router.push({ name: 'account.login' })
    },
  },
  {
    label: t('labels.register'),
    command: () => {
      router.push({ name: 'account.register' })
    },
  },
])

const menu = ref()

const toggle = (event: Event) => {
  menu.value.toggle(event)
}
</script>

<template>
  <div>
    <PrimeButton
      type="button"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      text
      rounded
      class="p-1"
      @click="toggle"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="6" r="4" />
          <path
            d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
            opacity="0.5"
          />
        </g>
      </svg>

      <PrimeMenu
        id="overlay_menu"
        ref="menu"
        class="bg-white dark:bg-surface-950"
        :model="items"
        :popup="true"
      >
        <template #submenulabel="{ item }">
          <span class="text-primary font-bold">{{ item.label }}</span>
        </template>

        <template #item="{ item, props }">
          <a
            v-ripple
            class="flex items-center text-sm"
            :class="item.severity == 'danger' ? 'text-red-500' : ''"
            v-bind="props.action"
          >
            <span v-if="item.icon" v-html="item.icon" class="text-xs"></span>
            <span>{{ item.label }}</span>
            <PrimeBadge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span
              v-if="item.shortcut"
              class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
              >{{ item.shortcut }}</span
            >
          </a>
        </template>
      </PrimeMenu>
    </PrimeButton>
  </div>
</template>
