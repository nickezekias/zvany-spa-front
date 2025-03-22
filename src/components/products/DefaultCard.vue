<script setup lang="ts">
import type Obj from '@/app/models/product.model'

const props = defineProps<{
  obj: Obj
}>()
</script>
<template>
  <div class="flex flex-col gap-2 cursor-pointer">
    <img
      v-if="props.obj.images && typeof props.obj.images === 'string' && props.obj.images.length > 0"
      class="product-img h-48 object-cover border"
      :src="`${props.obj.images}`"
      :alt="$t('labels.productImage')"
    />
    <div v-else class="product-img bg-gray-50 h-48" />
    <div class="product-tags text-gray-300 text-xs">
      {{ props.obj.categories }}
    </div>
    <span class="product-name font-medium">
      {{ props.obj.name }}
    </span>
    <span class="product-price font-bold">
      {{ props.obj.price }}
    </span>
  </div>
</template>
