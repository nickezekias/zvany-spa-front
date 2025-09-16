<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-8">
    <!-- HERO COMPONENT -->
    <div class="hero h-36 bg-primary flex justify-center items-center">
      <div class="hero-content text-center text-white">
        <div class="w-full md:max-w-md">
          <!-- <p class="py-6">Best iPhone Deals</p>
          <h1 class="text-5xl font-bold">60% Off</h1> -->
          <div class="flex items-center justify-between gap-6">
            <router-link to="/register">
              <PrimeButton rounded severity="contrast" :label="$t('labels.register')" />
            </router-link>
            <div class="font-light">{{ $t('labels.or') }}</div>
            <router-link to="/login">
              <PrimeButton outlined rounded severity="contrast" :label="$t('labels.login')" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- ORDERS -->
    <!-- <div class="px-2">
      <PrimeCard>
        <template #title>
          <h6>{{ $t('labels.myOrders') }}</h6>
        </template>
        <template #content>
          <div class="flex items-center justify-between">
            <PrimeButton
              size="small"
              text
              icon="pi pi-gift"
              iconPos="bottom"
              :label="$t('labels.toShip')"
              severity="secondary"
            />

            <PrimeButton
              size="small"
              text
              icon="pi pi-truck"
              iconPos="bottom"
              :label="$t('labels.shipped')"
              severity="secondary"
            />

            <PrimeButton
              size="small"
              text
              icon="pi pi-comment"
              iconPos="bottom"
              :label="$t('labels.toReview')"
              severity="secondary"
            />

            <PrimeButton
              size="small"
              text
              icon="pi pi-arrow-left"
              iconPos="bottom"
              :label="$t('Returns')"
              severity="secondary"
            />
          </div>
        </template>
      </PrimeCard>
    </div> -->
  </div>
</template>
