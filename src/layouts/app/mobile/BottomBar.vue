<script setup lang="ts">
import PrimeToolbar from 'primevue/toolbar'
import { useRoute } from 'vue-router'

const route = useRoute()

const items = [
  {
    name: 'home',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity="0.5"/><path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"/></svg>
    `,
    label: 'labels.home',
    routeName: 'home',
  },
  {
    name: 'shop',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.5 21.991V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491z"/><path fill="currentColor" fill-rule="evenodd" d="M5.732 12c-.89 0-1.679-.376-2.232-.967V14c0 3.771 0 5.657 1.172 6.828c.943.944 2.348 1.127 4.828 1.163h5c2.48-.036 3.885-.22 4.828-1.163C20.5 19.657 20.5 17.771 20.5 14v-2.966a3.06 3.06 0 0 1-5.275-1.789l-.073-.728a3.167 3.167 0 1 1-6.307.038l-.069.69A3.06 3.06 0 0 1 5.732 12m8.768 6.5v3.491h-5V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75" clip-rule="evenodd" opacity="0.5"/><path fill="currentColor" d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z"/><path fill="currentColor" d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.889-1.548C6.057 2 6.51 2 7.418 2h2.083l-.725 7.245a3.06 3.06 0 1 1-6.044-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z" opacity="0.7"/></svg>
    `,
    label: 'labels.shop',
  },
  {
    name: 'cart',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.04 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549c.303.149.437.27.525.398c.09.132.16.314.2.677c.04.38.041.875.041 1.615V9.64c0 2.942.064 3.912.93 4.826s2.26.914 5.05.914h5.303c1.56 0 2.341 0 2.893-.45s.71-1.214 1.024-2.742l.5-2.425c.347-1.74.52-2.609.077-3.186C20.332 6 18.815 6 17.13 6H6.492a9 9 0 0 0-.044-.738c-.053-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.102-.899c-.412-.202-.936-.386-1.553-.603z" opacity="0.5"/><path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M9.374 8.26a.75.75 0 0 1 .865.615l.528 3.118a.75.75 0 1 1-1.48.25L8.76 9.125a.75.75 0 0 1 .614-.864m5.414.614a.75.75 0 1 1 1.479.25l-.528 3.118a.75.75 0 1 1-1.48-.25z"/></svg>
    `,
    label: 'labels.cart',
  },
  {
    name: 'account',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="6" r="4"/><path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" opacity="0.5"/></g></svg>
    `,
    label: 'labels.account',
    routeName: 'accounts.guest',
  },
]
</script>

<template>
  <PrimeToolbar
    class="app-bottom-bar shadow-none border-0 border-t rounded-none p-0 pb-4 gap-0 bg-white dark:bg-surface-950"
  >
    <template #center>
      <div class="flex justify-between w-screen h-full px-3">
        <router-link
          v-for="item in items"
          :key="item.name"
          :to="item.routeName ? { name: item.routeName } : '#'"
          class="py-1"
        >
          <PrimeButton
            size="small"
            class="py-[0.05rem]"
            :severity="route.name == item.routeName ? 'primary' : 'secondary'"
            text
            :aria-label="item.name"
          >
            <div class="flex flex-col justify-items-center items-center gap-[0.1rem]">
              <span v-html="item.icon"></span>
              <span
                class="text-xs"
                :class="route.name == item.routeName ? 'text-primary' : 'text-secondary'"
                >{{ $t(`${item.label}`) }}</span
              >
            </div>
          </PrimeButton>
        </router-link>
      </div>
    </template>
  </PrimeToolbar>
</template>

<style scoped>
.app-bottom-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 9;
}
</style>
