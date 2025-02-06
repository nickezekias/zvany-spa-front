<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const photo = ref<string | null>(null)
const video = ref<HTMLVideoElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

// Start the camera feed
const startCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    if (video.value) {
      video.value.srcObject = stream
    }
  } catch (err) {
    console.error('Error accessing webcam: ', err)
  }
}

// Capture the photo from the video feed
const takePhoto = () => {
  const videoEl = video.value
  const canvasEl = canvas.value

  if (videoEl && canvasEl) {
    // Get the video feed's dimensions
    canvasEl.width = videoEl.videoWidth
    canvasEl.height = videoEl.videoHeight

    // Draw the current frame from the video feed onto the canvas
    const ctx = canvasEl.getContext('2d')
    ctx?.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height)

    // Get the data URL of the image from the canvas
    photo.value = canvasEl.toDataURL('image/png')
  }
}

// Clean up the video stream when the component is unmounted
onBeforeUnmount(() => {
  const videoEl = video.value
  if (videoEl && videoEl.srcObject) {
    const stream = videoEl.srcObject as MediaStream
    const tracks = stream.getTracks()
    tracks.forEach((track) => track.stop())
  }
})

// Start camera when component is mounted
onMounted(() => {
  startCamera()
})
</script>

<template>
  <div class="flex flex-col items-center p-6 space-y-6">
    <h2 class="text-2xl font-semibold text-gray-800">Take Your Profile Picture</h2>

    <!-- Video element to show the live camera feed -->
    <video ref="video" class="border rounded-md" width="640" height="480" autoplay></video>

    <!-- PrimeVue Button to capture the image -->
    <PrimeButton
      label="Take Picture"
      icon="pi pi-camera"
      @click="takePhoto"
      class="p-button-rounded p-button-primary text-white"
    />

    <!-- Canvas element to display the captured image -->
    <canvas ref="canvas" width="640" height="480" style="display: none"></canvas>

    <!-- Image element to show the captured photo -->
    <div v-if="photo" class="mt-4">
      <h3 class="text-xl font-semibold text-gray-700">Your Profile Picture</h3>
      <img :src="photo" alt="Profile Picture" class="rounded-lg shadow-md w-80" />
    </div>
  </div>
</template>
