<script setup lang="ts">
import { ref } from 'vue'
import { useAccountStore } from '@/stores/account.store'
import { useAppStore } from '@/stores/app.store'

import ChatDrawer from '@/components/chat/ChatDrawer.vue'
import DesktopSearchInput from '@/components/forms/DesktopSearchInput.vue'
import NotificationDrawer from '@/components/notifications/NotificationDrawer.vue'
import UserAvatarMenu from '@/components/user/UserAvatarMenu.vue'
import UserGuestAvatarMenu from '@/components/user/UserGuestAvatarMenu.vue'

const accountStore = useAccountStore()
const appStore = useAppStore()

const isChatDrawer = ref(false)
const isNotificationDrawer = ref(false)
const search = ref('')
</script>
<template>
  <div>
    <PrimeToolbar class="py-2 px-12 lg:px-24 rounded-none border-0 border-b">
      <template #start>
        <router-link :to="appStore.homeRoute">
          <div class="logo font-black cursor-pointer">{{ appStore.appName }}</div>
        </router-link>
      </template>

      <template #center>
        <DesktopSearchInput v-model="search" class="w-96" />
      </template>

      <template #end>
        <div class="flex me-12 gap-2 items-center">
          <span class="pi pi-phone" />
          <div class="flex flex-col flex-grow">
            <span class="text-xs text-gray-500">Call us</span>
            <span class="font-bold">+1 234 567 890</span>
          </div>
        </div>
        <div class="flex align-items-center items-center gap-1">
          <!-- User Profile Button -->
          <UserAvatarMenu v-if="accountStore.isAuthenticated" />
          <UserGuestAvatarMenu v-else />

          <PrimeButton size="small" text plain aria-label="Favorites">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
                <path
                  d="M12 5.5C7.5.826 2 4.275 2 9.138s4.02 7.454 6.962 9.774C10 19.729 11 20.5 12 20.5"
                />
                <path
                  d="M12 5.5C16.5.826 22 4.275 22 9.138s-4.02 7.454-6.962 9.774C14 19.729 13 20.5 12 20.5"
                  opacity="0.5"
                />
              </g>
            </svg>
          </PrimeButton>

          <PrimeButton size="small" text plain aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path
                  d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.789-3.64.034-8.03c.586-3.12.878-4.681 1.99-5.603M3.741 20.555Zm16.516 0c1.2-1.446.788-3.64-.034-8.03c-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"
                />
                <path
                  stroke-linecap="round"
                  d="m15 11l1 6m-7-6l-1 6M9 6V5a3 3 0 1 1 6 0v1"
                  opacity="0.5"
                />
              </g>
            </svg>
          </PrimeButton>

          <!-- <router-link
            v-if="!accountStore.isAuthenticated"
            to="/login"
            active-class="border-b border-primary"
          >
            <PrimeButton text plain class="" :label="$t('labels.login')" />
          </router-link>

          <router-link
            v-if="!accountStore.isAuthenticated"
            to="/register"
            active-class="border-b border-primary"
          >
            <PrimeButton text plain class="" :label="$t('labels.register')" />
          </router-link> -->
        </div>
      </template>

      <template #some>
        <div class="flex align-items-center items-center gap-1">
          <router-link :to="{ name: 'listings.create' }" class="hidden md:flex">
            <PrimeButton
              icon="pi pi-plus"
              class="me-16 hidden md:flex"
              :label="$t('labels.newListing')"
            />
          </router-link>

          <!-- Notifications Button -->
          <PrimeButton
            size="small"
            text
            plain
            aria-label="Notifications"
            @click="isNotificationDrawer = !isNotificationDrawer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path
                  d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"
                />
                <path
                  stroke-linecap="round"
                  d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3M12 6v4"
                  opacity="0.5"
                />
              </g>
            </svg>
          </PrimeButton>

          <PrimeButton
            size="small"
            text
            plain
            aria-label="Messages"
            @click="isChatDrawer = !isChatDrawer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none">
                <path
                  fill="currentColor"
                  d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="M8 9h8m-8 3.5h5.5"
                  opacity="0.5"
                />
              </g>
            </svg>
          </PrimeButton>

          <PrimeButton size="small" text plain aria-label="Languages">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path
                  stroke-linecap="round"
                  d="M2 12h20m-6 0c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z"
                  opacity="0.5"
                />
                <path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z" />
              </g>
            </svg>
          </PrimeButton>

          <UserAvatarMenu />
        </div>
      </template>
    </PrimeToolbar>

    <ChatDrawer v-model="isChatDrawer" />

    <NotificationDrawer v-model="isNotificationDrawer" />
  </div>
</template>
