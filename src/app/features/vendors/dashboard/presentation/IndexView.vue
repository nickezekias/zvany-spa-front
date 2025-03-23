<script setup lang="ts">
import { ref } from 'vue'
import { useProductStore } from '@/stores/product.store'

import PrimeChart from 'primevue/chart'
import AppPageTitle from '@/components/pages/AppPageTitle.vue'

const objStore = useProductStore()

const earningsData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Earnings',
      data: [1200, 1900, 3000, 5000, 2000, 3000, 4000, 8000, 9000, 10000, 11000, 12000],
      borderColor: '#0099ff',
      fill: false,
    },
  ],
})

const trafficData = ref({
  labels: ['Facebook', 'Instagram', 'TikTok', 'Google', 'Direct'],
  datasets: [
    {
      data: [40, 25, 20, 10, 5],
      backgroundColor: ['#0099ff', '#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
    },
  ],
})

const categorySalesData = ref({
  labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty & Health', 'Sports'],
  datasets: [
    {
      label: 'Sales by Category',
      data: [5000, 3000, 4000, 2000, 1000],
      backgroundColor: '#0099ff',
    },
  ],
})

const customerDemographicsData = ref({
  labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
  datasets: [
    {
      data: [30, 40, 20, 5, 5],
      backgroundColor: ['#0099ff', '#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
    },
  ],
})

const recentOrders = ref([
  { id: 1, customer: 'John Doe', date: '2024-12-10', total: 123.45 },
  { id: 2, customer: 'Jane Smith', date: '2024-12-09', total: 456.78 },
  { id: 3, customer: 'Sam Johnson', date: '2024-12-08', total: 89.9 },
])

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})
</script>

<template>
  <div>
    <div class="nikk-container">
      <AppPageTitle
        class="px-4 md:px-0"
        title="features.vendors.dashboard.title"
        subtitle="features.vendors.dashboard.subtitle"
      >
      </AppPageTitle>

      <div class="px-4 md:px-0">
        <div class="space-y-6">
          <!-- Top Row: Sales Highlight and Earnings Card -->
          <div class="flex flex-col md:flex-row gap-4 md:gap-6">
            <!-- Sales Highlight Card -->
            <PrimeCard class="w-full md:w-5/12 lg:w-1/3">
              <template #title>
                <h2 class="text-lg font-semibold mb-4">
                  {{ $t('features.vendors.dashboard.salesHighlight') }}
                </h2>
              </template>
              <template #content>
                <div class="space-y-4">
                  <div class="text-2xl font-bold">
                    {{ $t('features.vendors.dashboard.allTimeSales') }}: $1,234,567
                  </div>
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                      <span>Facebook</span>
                      <span>$450,000</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span>Instagram</span>
                      <span>$350,000</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span>TikTok</span>
                      <span>$220,000</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span>{{ $t('labels.others') }}</span>
                      <span>$214,567</span>
                    </div>
                  </div>
                </div>
              </template>
            </PrimeCard>

            <!-- Earnings Card -->
            <PrimeCard class="w-full md:w-7/12 lg:w-2/3">
              <template #title>
                <h2 class="text-lg font-semibold mb-4">
                  {{ $t('features.vendors.dashboard.earningsOverTime') }}
                </h2>
              </template>
              <template #content>
                <PrimeChart type="line" :data="earningsData" :options="chartOptions" />
              </template>
            </PrimeCard>
          </div>

          <!-- Second Row: Key Metrics Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PrimeCard>
              <template #title>
                <h3 class="text-sm font-medium">
                  {{ $t('features.vendors.dashboard.totalProducts') }}
                </h3>
              </template>
              <template #content>
                <p class="text-2xl font-bold mt-2">{{ objStore.objects.length }}</p>
              </template>
            </PrimeCard>
            <PrimeCard>
              <template #title>
                <h3 class="text-sm font-medium">
                  {{ $t('features.vendors.dashboard.newCustomersThisMonth') }}
                </h3>
              </template>
              <template #content>
                <p class="text-2xl font-bold mt-2">567</p>
              </template>
            </PrimeCard>
            <PrimeCard>
              <template #title>
                <h3 class="text-sm font-medium">
                  {{ $t('features.vendors.dashboard.totalOrdersThisMonth') }}
                </h3>
              </template>
              <template #content>
                <p class="text-2xl font-bold mt-2">789</p>
              </template>
            </PrimeCard>
            <PrimeCard>
              <template #title>
                <h3 class="text-sm font-medium">
                  {{ $t('features.vendors.dashboard.totalEarningsThisMonth') }}
                </h3>
              </template>
              <template #content>
                <p class="text-2xl font-bold mt-2">$34,567</p>
              </template>
            </PrimeCard>
          </div>

          <!-- Custom Reports Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Traffic Sources Report -->
            <PrimeCard>
              <template #title>
                <h2 class="text-lg font-semibold mb-4">
                  {{ $t('features.vendors.dashboard.trafficSources') }}
                </h2>
              </template>
              <template #content>
                <PrimeChart type="doughnut" :data="trafficData" :options="chartOptions" />
              </template>
            </PrimeCard>

            <!-- Sales by Category Report -->
            <PrimeCard>
              <template #title>
                <h2 class="text-lg font-semibold mb-4">
                  {{ $t('features.vendors.dashboard.salesByCategory') }}
                </h2>
              </template>
              <template #content>
                <PrimeChart type="bar" :data="categorySalesData" :options="chartOptions" />
              </template>
            </PrimeCard>

            <!-- Customer Demographics Report -->
            <PrimeCard>
              <template #title>
                <h2 class="text-lg font-semibold mb-4">
                  {{ $t('features.vendors.dashboard.customerDemographics') }}
                </h2>
              </template>
              <template #content>
                <PrimeChart type="pie" :data="customerDemographicsData" :options="chartOptions" />
              </template>
            </PrimeCard>

            <!-- Recent Orders Report -->
            <PrimeCard>
              <template #title>
                <h2 class="text-lg font-semibold mb-4">
                  {{ $t('features.vendors.dashboard.recentOrders') }}
                </h2>
              </template>
              <template #content> </template>
              <ul class="divide-y divide-gray-200">
                <li
                  v-for="order in recentOrders"
                  :key="order.id"
                  class="py-2 flex justify-between text-sm"
                >
                  <span>{{ order.customer }}</span>
                  <span>{{ order.date }}</span>
                  <span class="font-bold">${{ order.total }}</span>
                </li>
              </ul>
            </PrimeCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
