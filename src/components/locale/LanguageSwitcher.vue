<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app.store'
import { useI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config'
import { en } from 'primelocale/en.json' // Import locale for PrimeVue (English)
import { fr } from 'primelocale/fr.json' // Import locale for PrimeVue (French)

const appStore = useAppStore()
const { locale } = useI18n()
// Define the PrimeVue locales
const primeLocales = {
  en: en,
  fr: fr,
  // Add more locales as needed
}
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

function changeLocale(language: string) {
  // Change locale for Vue-i18n
  locale.value = language

  // Change locale for PrimeVue
  //@ts-expect-error locale type differences
  PrimeVue.locale = primeLocales[language]

  appStore.setLocale(language)
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
          @click="changeLocale(item.value)"
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
