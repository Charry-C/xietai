<template>
  <div
    ref="rootRef"
    class="service-video-player relative h-full w-full overflow-hidden bg-brand-navy group"
  >
    <video
      v-if="isSourceAttached"
      :key="attachedSrc"
      ref="videoRef"
      :src="attachedSrc"
      :poster="poster || undefined"
      class="h-full w-full object-contain pointer-events-none"
      playsinline
      :muted="muted"
      preload="metadata"
      @loadedmetadata="handleLoadedMetadata"
      @durationchange="handleLoadedMetadata"
      @timeupdate="handleTimeUpdate"
      @play="handlePlay"
      @playing="isBuffering = false"
      @pause="handlePause"
      @ended="handleEnded"
      @waiting="isBuffering = true"
      @canplay="isBuffering = false"
    ></video>
    <NuxtImg
      v-else-if="poster"
      :src="poster"
      class="h-full w-full object-contain"
      :alt="title || ''"
      format="webp"
      quality="80"
      loading="lazy"
    />
    <div v-else class="video-placeholder h-full w-full bg-brand-navy"></div>

    <button
      v-if="src && isSourceAttached"
      type="button"
      class="absolute inset-0 z-[5] cursor-pointer focus:outline-none"
      :aria-label="isPlaying ? 'Pause video' : 'Play video'"
      @click.stop="togglePlayback"
    ></button>

    <button
      v-if="src && !isPlaying"
      type="button"
      class="absolute inset-0 z-10 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
      :aria-label="isPlaying ? 'Pause video' : 'Play video'"
      @click.stop="togglePlayback"
    >
      <span
        class="flex h-16 w-16 items-center justify-center rounded-full border backdrop-blur transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20"
        :class="
          controlVariant === 'light'
            ? 'border-white/80 bg-white/95 text-brand-gold shadow-[0_16px_40px_rgba(15,23,42,0.22)] group-hover:bg-white'
            : 'border-white/35 bg-black/35 text-white group-hover:bg-black/50'
        "
      >
        <svg
          v-if="isPlaying"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 sm:h-8 sm:w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7 5h3v14H7V5zm7 0h3v14h-3V5z" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="ml-1 h-7 w-7 sm:h-8 sm:w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7L8 5z" />
        </svg>
      </span>
    </button>

    <div
      v-if="isBuffering"
      class="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
    >
      <span
        class="h-12 w-12 animate-spin rounded-full border-2 border-white/35 border-t-white"
      ></span>
    </div>

    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
    ></div>

    <div
      v-if="showCaption && (title || eyebrow)"
      class="pointer-events-none absolute left-4 right-4 top-4 z-20 text-white sm:left-6 sm:right-6 sm:top-6"
    >
      <p
        v-if="eyebrow"
        class="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold/90 sm:mb-2"
      >
        {{ eyebrow }}
      </p>
      <p v-if="title" class="max-w-[80%] truncate text-lg font-semibold sm:text-2xl">
        {{ title }}
      </p>
    </div>

    <div
      v-if="src && isSourceAttached"
      class="absolute bottom-0 left-0 right-0 z-30 px-4 pb-4 pt-16 text-white transition-opacity duration-300"
      :class="isPlaying ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
      ></div>
      <div class="relative">
        <div class="mb-3 flex items-center gap-3">
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur transition-colors hover:bg-white/24 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            :aria-label="isPlaying ? 'Pause video' : 'Play video'"
            @click.stop="togglePlayback"
          >
            <svg
              v-if="isPlaying"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 5h3v14H7V5zm7 0h3v14h-3V5z" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="ml-0.5 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </button>

          <p class="min-w-[5.8rem] text-sm font-semibold tabular-nums text-white/90">
            {{ formattedCurrentTime }} / {{ formattedDuration }}
          </p>

          <div class="ml-auto flex items-center gap-2">
            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/14 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              :aria-label="muted ? 'Unmute video' : 'Mute video'"
              @click.stop="toggleMute"
            >
              <svg
                v-if="muted"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M11 5L6 9H3v6h3l5 4V5zm7.707 4.293L16 12l2.707 2.707m0-5.414L16 12m2.707-2.707L21.414 6.586M16 12l2.707 2.707M21.414 17.414l-2.707-2.707"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M11 5L6 9H3v6h3l5 4V5zm5.536 1.464a7.5 7.5 0 010 10.607m-2.121-2.122a4.5 4.5 0 000-6.363"
                />
              </svg>
            </button>

            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/14 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              :aria-label="isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'"
              @click.stop="toggleFullscreen"
            >
              <svg
                v-if="isFullscreen"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 9H5V5m10 4h4V5M9 15H5v4m10-4h4v4"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 9V4h5m11 5V4h-5M4 15v5h5m11-5v5h-5"
                />
              </svg>
            </button>
          </div>
        </div>

        <input
          class="video-progress block w-full cursor-pointer"
          type="range"
          min="0"
          :max="duration || 0"
          step="0.1"
          :value="currentTime"
          :style="progressTrackStyle"
          :disabled="!duration"
          aria-label="Video progress"
          @click.stop
          @input="seekVideo"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
  src?: string | null
  poster?: string | null
  title?: string
  eyebrow?: string
  showCaption?: boolean
  controlVariant?: 'dark' | 'light'
}>()

const showCaption = computed(() => props.showCaption !== false)
const controlVariant = computed(() => props.controlVariant || 'dark')

const muted = ref(true)
const isPlaying = ref(false)
const isBuffering = ref(false)
const isPlayRequestPending = ref(false)
const isFullscreen = ref(false)
const isNearViewport = ref(false)
const isSourceAttached = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const rootRef = ref<HTMLElement | null>(null)
const videoRef = ref<HTMLVideoElement | null>(null)
let observer: IntersectionObserver | null = null

const playerId = `service-video-player-${Math.random().toString(36).slice(2)}`
const playEventName = 'xietai-service-video-play'

const attachedSrc = computed(() => (isSourceAttached.value && props.src ? props.src : undefined))
const progressPercent = computed(() => {
  if (!duration.value) return 0
  return Math.min(100, Math.max(0, (currentTime.value / duration.value) * 100))
})
const progressTrackStyle = computed(() => ({
  background: `linear-gradient(to right, #C5A059 ${progressPercent.value}%, rgba(255,255,255,0.34) ${progressPercent.value}%)`,
}))

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds <= 0) return '0:00'

  const wholeSeconds = Math.floor(seconds)
  const hours = Math.floor(wholeSeconds / 3600)
  const minutes = Math.floor((wholeSeconds % 3600) / 60)
  const remainingSeconds = wholeSeconds % 60
  const paddedSeconds = String(remainingSeconds).padStart(2, '0')

  if (!hours) {
    return `${minutes}:${paddedSeconds}`
  }

  return `${hours}:${String(minutes).padStart(2, '0')}:${paddedSeconds}`
}

const formattedCurrentTime = computed(() => formatTime(currentTime.value))
const formattedDuration = computed(() => formatTime(duration.value))

const pauseVideo = () => {
  if (videoRef.value && !videoRef.value.paused) {
    videoRef.value.pause()
  }
  isPlaying.value = false
  isPlayRequestPending.value = false
  isBuffering.value = false
}

const ensureSource = async () => {
  if (!props.src) return false
  if (!isSourceAttached.value) {
    isSourceAttached.value = true
    await nextTick()
    videoRef.value?.load()
  }
  return true
}

const playVideo = async () => {
  if (isPlayRequestPending.value) return

  isPlayRequestPending.value = true
  isBuffering.value = true

  if (!(await ensureSource())) {
    isPlayRequestPending.value = false
    isBuffering.value = false
    return
  }
  await nextTick()

  try {
    await videoRef.value?.play()
  } catch {
    isPlaying.value = false
    isBuffering.value = false
  } finally {
    isPlayRequestPending.value = false
  }
}

const togglePlayback = () => {
  if (isPlayRequestPending.value) return

  if (isPlaying.value) {
    pauseVideo()
    return
  }
  playVideo()
}

const handlePlay = () => {
  isPlaying.value = true
  isPlayRequestPending.value = false
  isBuffering.value = false
  window.dispatchEvent(new CustomEvent(playEventName, { detail: { playerId } }))
}

const handlePause = () => {
  isPlaying.value = false
  isPlayRequestPending.value = false
  isBuffering.value = false
}

const handleEnded = () => {
  isPlaying.value = false
  isPlayRequestPending.value = false
  isBuffering.value = false
  currentTime.value = duration.value || currentTime.value
}

const handleLoadedMetadata = () => {
  const video = videoRef.value
  if (!video) return

  duration.value = Number.isFinite(video.duration) ? video.duration : 0
  currentTime.value = video.currentTime || 0
  isBuffering.value = false
}

const handleTimeUpdate = () => {
  currentTime.value = videoRef.value?.currentTime || 0
}

const seekVideo = async (event: Event) => {
  const nextTime = Number((event.target as HTMLInputElement).value)
  if (!Number.isFinite(nextTime)) return

  currentTime.value = nextTime
  if (!(await ensureSource())) return
  await nextTick()

  if (videoRef.value) {
    videoRef.value.currentTime = nextTime
  }
}

const handleExternalPlay = (event: Event) => {
  const detail = (event as CustomEvent<{ playerId?: string }>).detail
  if (detail?.playerId && detail.playerId !== playerId) {
    pauseVideo()
  }
}

const toggleMute = () => {
  muted.value = !muted.value
  if (videoRef.value) {
    videoRef.value.muted = muted.value
  }
}

type WebkitVideoElement = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void
}

const syncFullscreenState = () => {
  isFullscreen.value = document.fullscreenElement === rootRef.value
}

const toggleFullscreen = async () => {
  if (!rootRef.value) return

  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen()
      return
    }

    if (rootRef.value.requestFullscreen) {
      await rootRef.value.requestFullscreen()
      return
    }

    ;(videoRef.value as WebkitVideoElement | null)?.webkitEnterFullscreen?.()
  } catch {
    isFullscreen.value = false
  }
}

watch(
  () => props.src,
  () => {
    pauseVideo()
    isSourceAttached.value = false
    currentTime.value = 0
    duration.value = 0
    if (isNearViewport.value) {
      ensureSource()
    }
  },
)

onMounted(() => {
  window.addEventListener(playEventName, handleExternalPlay)
  document.addEventListener('fullscreenchange', syncFullscreenState)

  if (!rootRef.value || !('IntersectionObserver' in window)) {
    isNearViewport.value = true
    ensureSource()
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        isNearViewport.value = true
        ensureSource()
        observer?.disconnect()
      }
    },
    {
      rootMargin: '360px 0px',
      threshold: 0,
    },
  )

  observer.observe(rootRef.value)
})

onUnmounted(() => {
  pauseVideo()
  observer?.disconnect()
  window.removeEventListener(playEventName, handleExternalPlay)
  document.removeEventListener('fullscreenchange', syncFullscreenState)
})
</script>

<style scoped>
.service-video-player:fullscreen {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.video-placeholder {
  background-image:
    linear-gradient(135deg, rgba(197, 160, 89, 0.14) 1px, transparent 1px),
    linear-gradient(45deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-position:
    0 0,
    14px 14px;
  background-size: 28px 28px;
}

.video-progress {
  height: 4px;
  border-radius: 999px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.video-progress:disabled {
  cursor: default;
  opacity: 0.55;
}

.video-progress::-webkit-slider-thumb {
  width: 14px;
  height: 14px;
  border: 2px solid white;
  border-radius: 999px;
  background: #c5a059;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
  -webkit-appearance: none;
  appearance: none;
}

.video-progress::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border: 2px solid white;
  border-radius: 999px;
  background: #c5a059;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
}
</style>
