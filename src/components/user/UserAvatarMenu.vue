<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAccountStore } from '@/stores/account.store'
import { useRouter } from 'vue-router'

import PrimeBadge from 'primevue/badge'
import UserAvatar from './UserAvatar.vue'

const accountStore = useAccountStore()
const router = useRouter()
const { t } = useI18n()

const items = ref([
  {
    separator: true,
  },
  {
    label: t('labels.vendorDashboard'),
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19 11a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-6a2 2 0 0 1 1.85-1.995L15 11zm0-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" class="duoicon-secondary-layer" opacity="0.3"/><path fill="currentColor" fill-rule="evenodd" d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" class="duoicon-primary-layer"/><path fill="currentColor" fill-rule="evenodd" d="M9 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" class="duoicon-secondary-layer" opacity="0.3"/></svg>
    `,
    command: () => {
      router.push({ name: 'vendors.index' })
    },
  },
  {
    label: t('labels.visitFrontStore'),
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.5 21.991V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491z"/><path fill="currentColor" fill-rule="evenodd" d="M5.732 12c-.89 0-1.679-.376-2.232-.967V14c0 3.771 0 5.657 1.172 6.828c.943.944 2.348 1.127 4.828 1.163h5c2.48-.036 3.885-.22 4.828-1.163C20.5 19.657 20.5 17.771 20.5 14v-2.966a3.06 3.06 0 0 1-5.275-1.789l-.073-.728a3.167 3.167 0 1 1-6.307.038l-.069.69A3.06 3.06 0 0 1 5.732 12m8.768 6.5v3.491h-5V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75" clip-rule="evenodd" opacity="0.5"/><path fill="currentColor" d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z"/><path fill="currentColor" d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.889-1.548C6.057 2 6.51 2 7.418 2h2.083l-.725 7.245a3.06 3.06 0 1 1-6.044-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z" opacity="0.7"/></svg>
    `,
    command: () => {
      router.push(`/s/${accountStore.user?.business?.id}`)
    },
  },
  {
    separator: true,
  },
  {
    label: t('labels.setting', 2),
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M13.765 2.152C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7s-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453s.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.62 1.62 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z" opacity="0.5"/></g></svg>
    `,
    command: () => {
      router.push({ name: 'user.profile' })
    },
  },
  {
    separator: true,
  },
  {
    label: t('labels.logout'),
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" opacity="0.5"/><path stroke-linejoin="round" d="M15 12H2m0 0l3.5-3M2 12l3.5 3"/></g></svg>
    `,
    severity: 'danger',
    command: async () => {
      await onLogout()
    },
  },
])

const menu = ref()

const toggle = (event: Event) => {
  menu.value.toggle(event)
}

async function onLogout() {
  await accountStore.logout()
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
      <UserAvatar class="w-[2rem] h-[2rem] text-sm" />

      <PrimeMenu
        id="overlay_menu"
        ref="menu"
        class="w-64 bg-white dark:bg-surface-950"
        :model="items"
        :popup="true"
      >
        <template #start>
          <div class="p-4 flex items-center gap-2">
            <PrimeAvatar
              :label="accountStore.userModel?.initials"
              shape="circle"
              class="text-primary text-sm bg-[#0099ff10] border-2 border-primary"
              style="width: 2rem; height: 2rem"
            />
            <div class="flex flex-col flex-grow justify-items-center">
              <div class="text-sm font-semibold">{{ accountStore.userModel?.fullName }}</div>
              <div class="text-xs text-gray-500">{{ accountStore.userModel?.email }}</div>
            </div>
          </div>
        </template>

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
            <span v-html="item.icon" class="text-xs"></span>
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
