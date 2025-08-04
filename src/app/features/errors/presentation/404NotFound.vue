<template>
  <div class="not-found-container">
    <div class="content-wrapper">
      <div class="hero-image">
        <div class="animated-illustration">
          <div class="relative w-full h-full">
            <div
              class="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out"
              :class="{ 'opacity-0': isAnimating, 'opacity-100': !isAnimating }"
            >
              <i
                class="pi pi-shopping-bag text-[12rem] md:text-[15rem] lg:text-[20rem] text-[#0099ff] opacity-20"
              ></i>
            </div>
            <div
              class="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out"
              :class="{ 'opacity-100': isAnimating, 'opacity-0': !isAnimating }"
            >
              <div
                class="relative w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem]"
              >
                <i
                  class="pi pi-question-circle text-[12rem] md:text-[15rem] lg:text-[20rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0099ff]"
                ></i>
                <i
                  class="pi pi-box absolute top-1/4 left-1/4 animate-bounce-slow text-5xl md:text-6xl text-[#0099ff]"
                ></i>
                <i
                  class="pi pi-tag absolute top-1/3 right-1/4 animate-spin-slow text-4xl md:text-5xl text-[#0099ff]"
                ></i>
                <i
                  class="pi pi-search absolute bottom-1/4 left-1/3 animate-ping-slow text-5xl md:text-6xl text-[#0099ff]"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-content">
        <h1 class="title">404</h1>
        <p class="subtitle">Page not found.</p>
        <p class="description">
          {{ $t('features.errors.404NotFound') }}
        </p>

        <div class="link-group">
          <router-link to="/" class="p-button p-button-raised p-button-primary">
            <i class="pi pi-home mr-2"></i>
            {{ $t('features.errors.backToHome') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isAnimating = ref(false)

onMounted(() => {
  // A simple animation loop to cycle between the two states
  setInterval(() => {
    isAnimating.value = !isAnimating.value
  }, 3000) // Toggles every 3 seconds
})
</script>

<style scoped>
/*
  TailwindCSS is used for most styling, but we'll add some custom
  keyframe animations here for a more professional and attractive effect.
*/

.not-found-container {
  @apply min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 overflow-hidden;
}

.content-wrapper {
  @apply flex flex-col-reverse lg:flex-row items-center justify-center gap-10 md:gap-20 p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800 transition-all duration-500 ease-in-out w-full max-w-6xl;
}

.hero-image {
  @apply flex-1 flex items-center justify-center w-full lg:w-1/2;
}

.animated-illustration {
  @apply w-full aspect-square max-w-md relative;
}

.text-content {
  @apply flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4;
}

.title {
  @apply text-6xl md:text-8xl font-extrabold text-[#0099ff] tracking-tight;
}

.subtitle {
  @apply text-2xl md:text-3xl font-semibold;
}

.description {
  @apply text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg;
}

.link-group {
  @apply mt-6;
}

/* Custom Keyframe Animations */
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes ping-slow {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-bounce-slow {
  animation: bounce-slow 4s infinite;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-ping-slow {
  animation: ping-slow 6s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
