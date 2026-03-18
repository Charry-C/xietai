<template>
  <div class="relative w-full h-full group">
    <video
      ref="videoRef"
      :src="src"
      :poster="poster || undefined"
      class="w-full h-full object-cover"
      autoplay
      loop
      playsinline
      :muted="muted"
      preload="metadata"
    ></video>

    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

    <div class="absolute left-4 right-4 sm:left-6 sm:right-6 bottom-4 sm:bottom-6 flex items-end justify-between gap-2 sm:gap-4">
      <div class="text-white min-w-0 flex-1">
        <p class="text-xs uppercase tracking-[0.22em] text-brand-gold/90 mb-1 sm:mb-2">Live Process</p>
        <p class="text-lg sm:text-xl md:text-2xl font-serif font-semibold truncate">{{ title || 'Production Line' }}</p>
      </div>
      <button
        type="button"
        class="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/40 bg-black/35 backdrop-blur text-white flex items-center justify-center hover:bg-black/55 transition-colors flex-shrink-0"
        @click="toggleMute"
      >
        <svg v-if="muted" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 5L6 9H3v6h3l5 4V5zm7.707 4.293L16 12l2.707 2.707m0-5.414L16 12m2.707-2.707L21.414 6.586M16 12l2.707 2.707M21.414 17.414l-2.707-2.707" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 5L6 9H3v6h3l5 4V5zm5.536 1.464a7.5 7.5 0 010 10.607m-2.121-2.122a4.5 4.5 0 000-6.363" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: string
  poster?: string | null
  title?: string
}>()

const muted = ref(true)
const videoRef = ref<HTMLVideoElement | null>(null)

const toggleMute = () => {
  muted.value = !muted.value
  if (videoRef.value) {
    videoRef.value.muted = muted.value
  }
}
</script>
