<script setup lang="ts">
import { useAccountStore } from '@/stores/account.store'

import NikkInputText from '@/components/forms/NikkInputText.vue'
import NikkSelect from '@/components/forms/NikkSelect.vue'
import User from '@/app/models/user.model'
import { onMounted, ref } from 'vue'

const accountStore = useAccountStore()
const user = ref(User.initEmpty())

onMounted(() => {
  if (accountStore.userModel) {
    user.value = accountStore.userModel
  }
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <PrimeCard class="border">
      <template #title>
        <span>{{ $t('labels.profileDetails') }}</span>
      </template>

      <template #content>
        <div>
          <PrimeForm :initialValues="user" v-slot="$form" class="flex flex-col gap-5">
            <NikkInputText
              v-model="user.firstName"
              :errorHelpLabel="$form.firstName?.error?.message"
              id="first-name"
              :isError="$form.firstName?.invalid"
              label="labels.firstName"
              name="firstName"
              type="text"
            />

            <NikkInputText
              v-model="user.lastName"
              :errorHelpLabel="$form.lastName?.error?.message"
              id="last-name"
              :isError="$form.lastName?.invalid"
              label="labels.lastName"
              name="lastName"
              type="text"
            />

            <NikkSelect
              id="type"
              v-model="user.gender"
              error-help-label="errors.validation.requiredField"
              :is-error="$form.gender?.invalid"
              name="gender"
              :options="Object.values(User.GENDERS)"
              placeholder="labels.selectGender"
            />

            <NikkInputText
              v-model="user.email"
              :errorHelpLabel="$form.email?.error?.message"
              id="email"
              :isError="$form.email?.invalid"
              label="labels.email"
              name="email"
              type="email"
            />

            <NikkInputText
              v-model="user.phone"
              :errorHelpLabel="$form.phone?.error?.message"
              id="phone"
              :isError="$form.phone?.invalid"
              label="labels.phone"
              name="phone"
              type="text"
            />
          </PrimeForm>
        </div>
      </template>
    </PrimeCard>
  </div>
</template>
