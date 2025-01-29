<script setup lang="ts">
import { useAccountStore } from '@/stores/account.store'

const accountStore = useAccountStore()
</script>

<template>
  <PrimeAvatar
    :label="accountStore.userModel?.initials"
    shape="circle"
    class="text-primary bg-[#0099ff10] border-2 border-primary"
  />
</template>
