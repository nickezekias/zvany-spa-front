<script setup lang="ts">
const rating = 4
</script>

<template>
  <PrimeCard class="border bg-inherit min-h-48 w-full">
    <template #title>
      <div class="flex justify-between">
        <div class="flex gap-1">
          <!-- <i class="pi pi-send text-primary me-2"></i> -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z"
            />
            <path
              fill="currentColor"
              d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641"
              opacity="0.7"
            />
            <path
              fill="currentColor"
              d="m21.403 7.14l-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802"
              opacity="0.5"
            />
            <path
              fill="currentColor"
              d="m6.323 4.484l.1-.052l1.493-.784l9.1 5.005l4.025-2.011q.205.232.362.498c.15.254.262.524.346.825L17.75 9.964V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44A3 3 0 0 1 12 22c-.248 0-.493-.032-.75-.096v-9.44l-8.998-4.5c.084-.3.196-.57.346-.824q.156-.266.362-.498l9.04 4.52l3.387-1.693z"
            />
          </svg>
          <span>Berlin <i class="pi pi-arrow-right text-gray-300 text-sm mx-1"></i> Madrid</span>
        </div>

        <div class="flex gap-1">
          <span class="text-xl font-medium text-primary me-2">120 000 F</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-green-600"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="1.5">
              <path
                d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"
                opacity="0.5"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.5 12.4l1.429 1.6l3.571-4"
              />
            </g>
          </svg>
        </div>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <div class="flex justify-between">
          <div>
            <span class="pi pi-calendar me-2"></span>
            <span>12.12.2022</span>
          </div>

          <!-- <div>
            <span class="pi pi-user me-2"></span>
            <span>2/3</span>
          </div> -->
        </div>

        <div class="flex justify-between items-center">
          <div>
            <span class="pi pi-shopping-bag me-2"></span>
            10kg
          </div>

          <div>
            <PrimeRating v-model="rating" />
          </div>
        </div>

        <div class="flex justify-end items-center text-sm">
          <!-- <span>Air France</span> -->

          <span>45000 reviews</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-sm">
            Extra luggage space available for your items. Can accommodate fragile items.
          </span>

          <div class="flex justify-end items-center gap-2">
            <div>
              <PrimeAvatar
                image="https://images.pexels.com/photos/3761264/pexels-photo-3761264.jpeg?auto=compress&cs=tinysrgb&w=600"
                shape="circle"
                class="h-8 w-8"
              />
            </div>

            <div class="text-sm text-nowrap">John D.</div>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <PrimeButton size="small" label="Contact Traveler" class="w-full" />
    </template>
  </PrimeCard>
</template>

<style>
:deep(.p-card-title) {
  @apply text-lg;
}

:deep(.p-card-content) {
  @apply text-sm;
}

:deep(.p-rating) {
  @apply text-sm;
  .p-rating-icon {
    @apply text-green-600;
  }
}

:deep(.p-rating-icon-on, .p-rating) {
  @apply text-green-500 !important;
}

:deep(.p-rating-icon-off) {
  @apply text-gray-300;
}
</style>
