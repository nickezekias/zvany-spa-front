<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app.store'
import { useI18n } from 'vue-i18n'

const appStore = useAppStore()
const { t } = useI18n()

const menu = ref()
const items = ref([
  {
    label: t('labels.language', 2),
    items: [
      {
        label: t('components.locale.languageSwitcher.english'),
        value: 'en',
      },
      {
        label: t('components.locale.languageSwitcher.french'),
        value: 'fr',
      },
    ],
  },
])

const toggle = (event: Event) => {
  menu.value.toggle(event)
}
</script>

<template>
  <div class="card flex justify-center">
    <PrimeButton
      type="button"
      icon="pi pi-language"
      @click="toggle"
      rounded
      severity="secondary"
      size="small"
      text
      aria-haspopup="true"
      aria-controls="overlay_menu"
    />
    <PrimeMenu ref="menu" id="overlay_menu" :model="items" :popup="true">
      <template #item="{ item }">
        <PrimeButton
          v-if="item.value == appStore.locale"
          class="text-left justify-start"
          text
          :label="item.label"
          size="small"
          fluid
        />
        <PrimeButton
          v-else
          @click="appStore.changeLocale(item.value)"
          class="justify-start"
          severity="secondary"
          text
          :label="item.label"
          size="small"
          fluid
        />
        <!-- <a
          v-ripple
          class="flex items-center p-1 cursor-pointer"
          :class="item.value == appStore.locale ? 'bg-primary text-white' : ''"
        >
          <span>{{ item.label }}</span>
        </a> -->
      </template>
    </PrimeMenu>
  </div>
</template>
