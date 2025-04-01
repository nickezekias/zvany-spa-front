<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { FilterMatchMode } from '@primevue/core/api'

import { useI18n } from 'vue-i18n'
import { useAccountStore } from '@/stores/account.store'
import { useProductStore } from '@/stores/product.store'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue'

import NikkToast from '@/app/utils/NikkToast'
import Obj from '@/app/models/product.model'
import type { AxiosError } from 'axios'
import type { MenuItem } from '@/app/@types/common.interface'

import PrimeIconField from 'primevue/iconfield'
import PrimeInputIcon from 'primevue/inputicon'
import PrimeInputText from 'primevue/inputtext'
import PrimeColumn from 'primevue/column'
import PrimeDataTable from 'primevue/datatable'
import AppPageTitle from '@/components/pages/AppPageTitle.vue'
import NikkDeleteDialog from '@/components/crud/NikkDeleteDialog.vue'

const accountStore = useAccountStore()
const objStore = useProductStore()
const router = useRouter()
const { t } = useI18n()
const toast = useToast()

const nikkToast = new NikkToast(toast, t)

const activeRowObj = ref<Obj | null>(null)
const actionItems = ref<MenuItem[]>([
  {
    label: t('labels.massCreate'),
    icon: 'pi pi-list-check',
    command: () => {
      isMassCreateDialog.value = true
    },
  },
])
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  sku: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  categories: { value: null, matchMode: FilterMatchMode.IN },
  description: { value: null, matchMode: FilterMatchMode.IN },
})
const isDeleteDialog = ref(false)
const isDeleteDialogLoading = ref(false)
const isMassCreateDialog = ref(false)
const isMassDeleteDialog = ref(false)
const isMassSelectActions = ref(false)
const loading = ref(false)
const menu = ref()
const rowActionsItems = ref([
  {
    label: t('labels.action', 2),
    items: [
      {
        label: t('labels.edit'),
        icon: 'pi pi-pencil',
        route: `/vendors/products/update`,
      },
      {
        label: t('labels.delete'),
        icon: 'pi pi-trash',
        command: () => {
          isDeleteDialog.value = true
        },
      },
    ],
  },
])
const selectedObjects = ref([])

onMounted(async () => {
  loading.value = true
  const businessId = accountStore.user?.business?.id
  try {
    const filter = {
      itemsPerPage: -1,
      sortBy: ['products.name'],
    }
    await objStore.getAll(filter, businessId)
  } catch (error) {
    nikkToast.httpError(error as AxiosError)
  } finally {
    loading.value = false
  }
})

watch(selectedObjects, () => {
  if (selectedObjects.value.length > 0) {
    isMassSelectActions.value = true
  } else {
    isMassSelectActions.value = false
  }
})

function closeDeleteDialog() {
  isDeleteDialogLoading.value = false
  isDeleteDialog.value = false
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'in stock':
      return 'bg-green-100 text-green-800'
    case 'out of stock':
      return 'bg-red-100 text-red-800'
    case 'backordered':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

async function onConfirmDelete() {
  isDeleteDialogLoading.value = true
  try {
    if (activeRowObj.value) {
      await objStore.destroy(activeRowObj.value.id)
      nikkToast.success('features.vendors.products.delete.successMessage')
    } else {
      nikkToast.error('features.vendors.products.delete.selectDataTableRowError')
    }
    isDeleteDialog.value = false
  } catch (e) {
    nikkToast.httpError(e as AxiosError)
  } finally {
    isDeleteDialogLoading.value = false
  }
}

async function onConfirmMassDelete() {
  isDeleteDialogLoading.value = true
  try {
    if (selectedObjects.value.length > 0) {
      const selectedObjectsIds = selectedObjects.value.map((obj: Obj) => {
        return obj.id
      })
      await objStore.massDestroy(selectedObjectsIds)
      selectedObjects.value = []
      nikkToast.success('features.vendors.products.massDelete.successMessage')
    }

    isMassDeleteDialog.value = false
  } catch (e) {
    nikkToast.httpError(e as AxiosError)
  } finally {
    isDeleteDialogLoading.value = false
  }
}

const toggle = (event: Event, obj: Obj) => {
  activeRowObj.value = obj
  menu.value.toggle(event)
}
</script>

<template>
  <div>
    <div class="nikk-container">
      <AppPageTitle
        class="px-4 md:px-0"
        title="features.vendors.products.index.title"
        subtitle="features.vendors.products.index.subtitle"
      >
        <template #end>
          <PrimeIconField iconPosition="left">
            <PrimeInputIcon>
              <i class="pi pi-search" />
            </PrimeInputIcon>
            <PrimeInputText
              v-model="filters['global'].value"
              :placeholder="$t('labels.search')"
              class="py-3"
            />
          </PrimeIconField>
        </template>
      </AppPageTitle>

      <PrimeCard class="rounded-none md:rounded-xl">
        <template #title>
          <div class="flex">
            <div v-if="isMassSelectActions">
              <PrimeButton
                size="small"
                severity="danger"
                icon="pi pi-trash"
                :label="$t('labels.deleteSelection')"
                @click="
                  () => {
                    isMassDeleteDialog = true
                  }
                "
              />
            </div>
            <div class="ml-auto">
              <PrimeSplitButton
                icon="pi pi-plus"
                :label="$t('labels.add')"
                :model="actionItems"
                @click="router.push('/vendors/products/create')"
              />
            </div>
          </div>
        </template>

        <template #content>
          <PrimeSkeleton v-if="loading" width="100%" height="24rem" />
          <PrimeDataTable
            v-else
            v-model:filters="filters"
            v-model:selection="selectedObjects"
            :value="objStore.objects"
            data-key="id"
            class="shadow-none rounded-lg text-sm border-none"
            :globalFilterFields="['name', 'sku', 'categories', 'brand']"
            paginator
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rows="50"
            :rowsPerPageOptions="[10, 25, 50]"
            scrollable
            sortMode="multiple"
            table-style="min-width: 50rem"
            scroll-height="flex"
          >
            <PrimeColumn selection-mode="multiple" header-style="width: 3rem" />

            <!-- Image Column -->
            <PrimeColumn field="images" :header="$t('labels.image')" style="width: 40px">
              <template #body="slotProps">
                <PrimeAvatar
                  v-if="slotProps.data.images != ''"
                  :image="slotProps.data.images"
                  class=""
                  shape="circle"
                />

                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z"
                  />
                </svg>
              </template>
            </PrimeColumn>

            <!-- Name Column -->
            <PrimeColumn sortable field="name" :header="$t('labels.name')" class="max-w-[12rem]">
              <template #body="slotProps">
                <span class="block truncate" :title="slotProps.data.name">
                  {{ slotProps.data.name }}
                </span>
              </template>
            </PrimeColumn>

            <!-- SKU Column -->
            <PrimeColumn sortable field="sku" :header="$t('labels.sku')" class="min-w-[10rem]" />

            <!-- Category Column -->
            <PrimeColumn sortable field="categories" :header="$t('labels.categories')" />

            <!-- Brand Column -->
            <PrimeColumn sortable field="brand" :header="$t('labels.brand')" />

            <!-- Type Column -->
            <PrimeColumn field="type" :header="$t('labels.type')" />

            <!-- Description Column -->
            <!-- Description Column -->
            <PrimeColumn
              field="description"
              :header="$t('labels.description')"
              class="max-w-[12rem]"
            >
              <template #body="slotProps">
                <span class="block truncate" :title="slotProps.data.description">
                  {{ slotProps.data.description }}
                </span>
              </template>
            </PrimeColumn>

            <!-- Cost Column -->
            <PrimeColumn field="cost" :header="$t('labels.cost')">
              <template #body="slotProps">
                <span class="text-sm font-semibold text-gray-600">
                  <!-- {{ slotProps.data.cost }} XAF -->
                  {{ Number(slotProps.data.cost).toFixed(2) }} XAF
                </span>
              </template>
            </PrimeColumn>

            <!-- Price Column -->
            <PrimeColumn field="price" :header="$t('labels.price')">
              <template #body="slotProps">
                <span class="text-sm font-bold text-gray-800">
                  {{ Number(slotProps.data.price).toFixed(2) }} XAF
                  <!-- {{ slotProps.data.price }} XAF -->
                </span>
              </template>
            </PrimeColumn>

            <!-- Status Column -->
            <PrimeColumn field="status" :header="$t('labels.status')" class="min-w-[8rem]">
              <template #body="slotProps">
                <span
                  :class="getStatusClass(slotProps.data.status)"
                  class="px-3 py-1 rounded-full text-xs font-medium"
                >
                  {{ slotProps.data.status }}
                </span>
              </template>
            </PrimeColumn>

            <PrimeColumn key="actions" field="actions" :header="$t('labels.action', 2)">
              <template #body="{ data }">
                <div class="card flex justify-center">
                  <PrimeButton
                    type="button"
                    text
                    plain
                    icon="pi pi-ellipsis-v"
                    aria-haspopup="true"
                    aria-controls="overlay_menu"
                    @click="
                      (event: Event) => {
                        toggle(event, data)
                      }
                    "
                  />
                  <PrimeMenu id="overlay_menu" ref="menu" :model="rowActionsItems" :popup="true">
                    <template #item="{ item }">
                      <router-link v-if="item.route" :to="`${item.route}/${activeRowObj?.id}`">
                        <PrimeButton
                          class="w-full justify-start"
                          small
                          text
                          plain
                          :icon="item.icon"
                          :label="`${item.label}`"
                        />
                      </router-link>
                      <PrimeButton
                        v-else
                        class="w-full justify-start"
                        severity="danger"
                        small
                        text
                        :icon="item.icon"
                        :label="`${item.label}`"
                      />
                    </template>
                  </PrimeMenu>
                </div>
              </template>
            </PrimeColumn>
          </PrimeDataTable>
        </template>
      </PrimeCard>
    </div>

    <!-- DELETE PRODUCT DIALOG -->
    <NikkDeleteDialog
      v-model="isDeleteDialog"
      :loading="isDeleteDialogLoading"
      class="w-full md:w-[24rem] lg:w-[28rem]"
      @close="closeDeleteDialog"
      @confirm="onConfirmDelete"
    >
      <template #title>
        {{ $t('features.vendors.products.delete.title', { name: activeRowObj?.name }) }}
      </template>

      <template #message>
        {{ $t('features.vendors.products.delete.confirmDeleteMessage') }}
      </template>
    </NikkDeleteDialog>

    <!-- MASS DELETE PRODUCT(S) DIALOG -->
    <NikkDeleteDialog
      v-model="isMassDeleteDialog"
      :loading="isDeleteDialogLoading"
      class="w-full md:w-[24rem] lg:w-[28rem]"
      @close="
        () => {
          isMassDeleteDialog = false
        }
      "
      @confirm="onConfirmMassDelete"
    >
      <template #title>
        {{ $t('features.vendors.products.massDelete.title') }}
      </template>

      <template #message>
        {{ $t('features.vendors.products.massDelete.confirmDeleteMessage') }}
      </template>
    </NikkDeleteDialog>
  </div>
</template>
