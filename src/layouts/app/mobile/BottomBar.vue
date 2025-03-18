<script setup lang="ts">
import PrimeToolbar from 'primevue/toolbar'
import { useRoute } from 'vue-router'

const route = useRoute()

const items = [
  {
    name: 'dashboard',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6z" opacity="0.5"/><path fill="currentColor" d="M2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5"/><path fill="currentColor" d="M2 18.5c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" opacity="0.5"/></svg>
    `,
    routeName: 'home',
    label: 'labels.home',
  },
  {
    name: 'space listings',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14" opacity="0.5"/><path fill="currentColor" d="M11.948 1.25c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243V6h1.5c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789s.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095h1.5v-.052c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zM10 15H6c-.471 0-.707 0-.854.146C5 15.293 5 15.53 5 16v1c0 .471 0 .707.146.854C5.293 18 5.53 18 6 18h4c.471 0 .707 0 .854-.146C11 17.707 11 17.47 11 17v-1c0-.471 0-.707-.146-.854C10.707 15 10.47 15 10 15"/><path fill="currentColor" d="M5.25 21.797c.439.079.935.127 1.5.156V18H6c-.374 0-.6 0-.75-.073zm0-6.724v-8.87c.439-.079.935-.127 1.5-.156V15H6c-.374 0-.6 0-.75.073m12 6.88a12 12 0 0 0 1.5-.156V6.203a12 12 0 0 0-1.5-.156z"/></svg>
    `,
    label: 'labels.listings',
  },
  {
    name: 'space requests',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity="0.5"/><path fill="currentColor" d="M3.465 20.536C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214s-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183s-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535m9.065-9.205a.75.75 0 0 1-1.06 0l-3.3-3.3a.75.75 0 1 1 1.06-1.06l2.02 2.02V2h1.5v6.99l2.02-2.02a.75.75 0 1 1 1.06 1.06z"/></svg>
    `,
    label: 'labels.spaceRequests',
  },
  {
    name: 'transactions',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3" clip-rule="evenodd"/><path fill="currentColor" d="M4 3.75v9.527c0 1.34 0 2.01.268 2.601s.772 1.032 1.781 1.915l2 1.75c1.883 1.647 2.824 2.47 3.951 2.47s2.069-.823 3.951-2.47l2-1.75c1.008-.883 1.513-1.324 1.78-1.915c.269-.59.269-1.26.269-2.6V3.75z" opacity="0.5"/><path fill="currentColor" fill-rule="evenodd" d="M7.75 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0-5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 9" clip-rule="evenodd"/></svg>
    `,
    label: 'labels.transactions',
  },
]
</script>

<template>
  <PrimeToolbar
    class="app-bottom-bar shadow-none border-0 border-t rounded-none p-0 gap-0 bg-white dark:bg-surface-950"
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
            size="large"
            :severity="route.name == item.routeName ? 'primary' : 'secondary'"
            text
            :aria-label="item.name"
          >
            <div class="flex flex-col justify-items-center items-center gap-1">
              <span v-html="item.icon"></span>
              <!-- <span
                class="text-xs"
                :class="route.name == item.routeName ? 'text-primary' : 'text-secondary'"
                >{{ $t(`${item.label}`) }}</span
              > -->
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
