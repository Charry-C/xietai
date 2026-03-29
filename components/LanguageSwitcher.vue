<template>
  <!-- Loading Overlay -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="switching"
      class="fixed inset-0 z-[100] bg-brand-navy/90 backdrop-blur-sm flex items-center justify-center"
    >
      <div class="flex flex-col items-center gap-4">
        <div
          class="loader w-8 h-8 border-2 border-white/20 border-t-brand-gold rounded-full animate-spin"
        ></div>
        <span class="text-white/60 text-sm tracking-wider uppercase">{{
          $t('common.switching')
        }}</span>
      </div>
    </div>
  </transition>

  <!-- Mobile: inline pill buttons -->
  <div v-if="isMobile" class="flex items-center justify-center gap-3">
    <button
      v-for="loc in locales"
      :key="loc.code"
      @click="switchLocale(loc.code)"
      class="px-5 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300"
      :class="
        loc.code === currentLocale
          ? 'bg-brand-gold text-white'
          : 'text-white/50 hover:text-white border border-white/20 hover:border-white/40'
      "
    >
      {{ loc.label }}
    </button>
  </div>

  <!-- Desktop: dropdown -->
  <div v-else class="relative" ref="switcherRef">
    <button
      @click="open = !open"
      class="flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-brand-navy hover:text-brand-gold transition-colors duration-300 select-none"
    >
      <span class="text-xs font-bold tracking-[0.15em]">{{ currentLocaleOption.shortLabel }}</span>
      <svg
        class="w-3.5 h-3.5 transition-transform duration-300"
        :class="{ 'rotate-180': open }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-if="open"
        class="absolute right-0 top-full mt-2 bg-white border border-brand-gold/20 shadow-lg min-w-[140px] z-50 overflow-hidden"
      >
        <button
          v-for="loc in locales"
          :key="loc.code"
          @click="switchLocale(loc.code)"
          class="w-full text-left px-5 py-3 text-sm flex items-center gap-3 transition-colors duration-200"
          :class="
            loc.code === currentLocale
              ? 'bg-brand-gold/10 text-brand-gold font-bold'
              : 'text-brand-navy hover:bg-brand-cream'
          "
        >
          <span class="text-xs font-bold tracking-[0.15em] w-6 text-center">{{
            loc.shortLabel
          }}</span>
          <span>{{ loc.label }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLocale } from '@/composables/useLocale'

const emit = defineEmits<{
  switch: []
}>()

defineProps<{
  isMobile?: boolean
}>()

const { currentLocale, currentLocaleOption, setLocale, switching, locales } = useLocale()
const open = ref(false)
const switcherRef = ref<HTMLElement | null>(null)

const switchLocale = (code: string) => {
  open.value = false
  emit('switch')
  setLocale(code)
}

const onClickOutside = (e: MouseEvent) => {
  if (switcherRef.value && !switcherRef.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>
