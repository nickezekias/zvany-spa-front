<template>
  <div :class="['avatar-upload', roundedClass]">
    <!-- Image Preview -->
    <div :class="['image-preview', roundedClass]">
      <img v-if="previewUrl" :src="previewUrl" alt="Avatar" />
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-64 mx-auto" viewBox="0 0 24 24">
        <g fill="none" stroke="#d0d7d5" stroke-width="1.5">
          <path
            d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.947 1.024.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464c-.897.743-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743c-.897-.743-1.072-1.983-1.422-4.464z"
          />
          <path
            d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"
            opacity="0.5"
          />
          <circle cx="16.5" cy="11.5" r="1.5" opacity="0.5" />
          <path
            stroke-linecap="round"
            d="m20 20l-2.884-2.149c-.93-.692-2.316-.761-3.34-.166l-.266.155c-.712.414-1.68.345-2.294-.164l-3.839-3.177c-.766-.634-1.995-.668-2.81-.078l-1.324.96"
            opacity="0.5"
          />
        </g>
      </svg>
    </div>

    <!-- Action Buttons -->
    <div class="action-buttons">
      <button @click="triggerFileInput" class="action-btn" title="Change photo" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92.92L14.06 9.06l1.77 1.77L7.69 20.44H5.92v-1.77zM20.71 7.04a1.004 1.004 0 0 0 0-1.42l-2.34-2.34a1.004 1.004 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"
          />
        </svg>
      </button>
      <button
        @click="clearImage"
        class="action-btn delete-btn"
        v-if="previewUrl"
        title="Delete photo"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z" />
        </svg>
      </button>
    </div>

    <!-- Hidden File Input -->
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      capture="environment"
      @change="onFileChange"
      class="hidden"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  rounded: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  (e: 'file-selected', file: File): void
  (e: 'file-cleared'): void
}>()

const previewUrl = ref<string | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

const roundedClass = computed(() =>
  props.rounded ? 'image-preview--rounded' : 'image-preview--square',
)

onMounted(() => {
  if (props.url) {
    previewUrl.value = props.url
  }
})

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    previewUrl.value = URL.createObjectURL(file)
    emit('file-selected', file)
  }
}

const triggerFileInput = () => {
  fileInput.value?.click()
}

const clearImage = () => {
  previewUrl.value = null
  emit('file-cleared')
}
</script>

<style scoped>
.avatar-upload {
  position: relative;
  width: 100%;
  min-height: 16rem;
  background-color: var(--component-bg);
  border-radius: 0.625rem; /* 10px */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-preview {
  width: 100%;
  height: 100%;
  border: 0.125rem solid var(--border-color); /* 2px */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--image-bg);
  overflow: hidden;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-preview--rounded {
  border-radius: 100%;
}

.image-preview--square {
  border-radius: 0.625rem; /* 10px */
}

.placeholder-text {
  font-size: 3rem;
  color: var(--placeholder-color);
}

.action-buttons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 0.625rem; /* 10px */
}

.action-btn {
  width: 2.3rem; /* 32px */
  height: 2.3rem;
  border: none;
  border-radius: 50%;
  background-color: #0099ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2); /* 2px 6px */
}

.action-btn:hover {
  background-color: #0099ff;
  color: white;
}

.delete-btn {
  color: white;
  background-color: #ff0011;
}

.delete-btn:hover {
  background-color: red;
  color: white;
}

.icon {
  width: 1.125rem; /* 18px */
  height: 1.125rem;
}

.hidden {
  display: none;
}

@media (prefers-color-scheme: dark) {
}
</style>
