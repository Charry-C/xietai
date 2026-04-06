<template>
  <div class="bg-brand-cream min-h-screen">
    <!-- Page Header -->
    <section class="bg-brand-navy text-white pt-32 pb-20 text-center relative overflow-hidden">
      <div v-if="bannerBgUrl" class="absolute inset-0">
        <img
          :src="bannerBgUrl"
          class="w-full h-full object-cover opacity-20"
          :alt="t('hero.banner')"
        />
      </div>
      <div v-else class="absolute inset-0 bg-brand-navy opacity-20"></div>
      <div class="container mx-auto px-6 relative z-10">
        <span
          class="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in-up"
          >{{ t('hero.servicesTagline') }}</span
        >
        <h1
          class="text-4xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up animation-delay-100"
        >
          {{ bannerTitle }}
        </h1>
        <p
          class="text-xl text-white/60 max-w-2xl mx-auto font-light animate-fade-in-up animation-delay-200"
        >
          {{ bannerSubTitle }}
        </p>
        <div
          class="w-16 h-0.5 bg-brand-gold mx-auto mt-8 animate-fade-in-up animation-delay-300"
        ></div>
      </div>
    </section>

    <!-- Services List -->
    <section class="relative py-20 md:py-32">
      <!-- Subtle background texture -->
      <div
        class="absolute inset-0 opacity-[0.02]"
        style="
          background-image: radial-gradient(#c5a059 1px, transparent 1px);
          background-size: 24px 24px;
        "
      ></div>

      <div class="container mx-auto px-6 relative z-10">
        <!-- Section intro -->
        <div class="text-center mb-16 md:mb-24">
          <span class="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">{{
            t('services.ourProcess')
          }}</span>
          <h2 class="text-3xl md:text-5xl font-serif font-bold text-brand-navy mt-3">
            {{ t('services.endToEndSolutions') }}
          </h2>
        </div>

        <div class="space-y-24 md:space-y-40">
          <div
            v-for="(service, index) in servicesList"
            :key="service.id"
            class="relative"
            :class="index > 0 ? 'pt-8 md:pt-12' : ''"
          >
            <!-- Connector line between items -->
            <div
              v-if="index > 0"
              class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 md:h-12 bg-gradient-to-b from-brand-gold/0 via-brand-gold/30 to-brand-gold/0"
            ></div>

            <div
              class="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 xl:gap-24 group"
              :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
            >
              <!-- Image Section -->
              <div class="lg:w-1/2 relative">
                <!-- Step number - large background number -->
                <div
                  class="absolute -top-8 md:-top-12 z-0 font-serif font-bold text-brand-navy/[0.04] text-[180px] md:text-[240px] leading-none select-none pointer-events-none"
                  :class="index % 2 !== 0 ? 'right-0 text-right' : 'left-0'"
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </div>

                <div
                  class="relative z-10 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-700"
                >
                  <div class="aspect-[4/3] overflow-hidden">
                    <img
                      v-if="service.imageUrl"
                      :src="service.imageUrl"
                      :alt="service.title"
                      class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div v-else class="w-full h-full bg-brand-navy/10"></div>
                  </div>
                  <!-- Image overlay gradient -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700"
                  ></div>
                </div>

                <!-- Gold corner accent -->
                <div
                  class="absolute z-0 pointer-events-none"
                  :class="
                    index % 2 !== 0
                      ? '-bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-brand-gold/30'
                      : '-bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-brand-gold/30'
                  "
                ></div>
              </div>

              <!-- Content Section -->
              <div class="lg:w-1/2 flex flex-col justify-center py-2 md:py-6">
                <!-- Step badge -->
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-10 h-px bg-brand-gold"></div>
                  <span class="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
                    {{ t('common.step') }} {{ String(index + 1).padStart(2, '0') }}
                  </span>
                </div>

                <h2
                  class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-navy mb-6 leading-[1.15]"
                >
                  {{ service.title }}
                </h2>

                <p class="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                  {{ service.description }}
                </p>

                <!-- Sub Items -->
                <div v-if="Object.keys(service.subItems).length" class="space-y-3">
                  <div
                    v-for="(value, key) in service.subItems"
                    :key="key"
                    class="group/item flex items-start gap-4 p-4 md:p-5 bg-white/70 backdrop-blur-sm border border-transparent hover:border-brand-gold/15 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <!-- Minimal check icon -->
                    <div
                      class="flex-shrink-0 w-8 h-8 bg-brand-gold/10 flex items-center justify-center transition-colors duration-300 group-hover/item:bg-brand-gold/20 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-brand-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="text-brand-navy font-bold text-sm md:text-base mb-1">{{ key }}</h3>
                      <p class="text-gray-500 text-sm leading-relaxed">{{ value }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getServiceData, type ServiceData } from '@/api/service'
import { computed } from 'vue'

// SEO 配置 - 服务（外贸B2B）
useSeo({
  title: 'Our Services - B2B Textile Solutions',
  description:
    'B2B textile services from China fabric factory. OEM/ODM custom production, private label manufacturing, quality inspection, and global shipping. One-stop textile sourcing solution.',
  keywords: [
    'OEM textile manufacturing',
    'ODM fabric production',
    'private label fabric',
    'custom textile manufacturing',
    'fabric sourcing service',
    'textile quality inspection',
    'bulk fabric production',
    'textile export service',
    'B2B textile solutions',
    'fabric development China',
  ],
  image: '/og-image.png',
})

const { t } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.base || ''
const getFullUrl = (url: string) => {
  if (!url) return ''
  return url.startsWith('http') ? url : `${baseUrl}${url}`
}

const { data: serviceResponse } = getServiceData({
  lazy: true,
  default: () => ({ data: null, meta: {} }),
})

const serviceData = computed<ServiceData | null>(() => {
  return serviceResponse.value?.data || null
})

// Banner
const bannerTitle = computed(() => serviceData.value?.banner?.title || t('services.ourServices'))
const bannerSubTitle = computed(
  () => serviceData.value?.banner?.subTitle || t('services.bannerSubtitleFallback'),
)
const bannerBgUrl = computed(() => {
  const bg = serviceData.value?.banner?.background
  return bg?.url ? getFullUrl(bg.url) : null
})

const servicesList = computed(() => {
  const sections = serviceData.value?.servicesSection
  if (!sections?.length) return []
  return sections.map((s) => ({
    id: s.id,
    title: s.title || '',
    description: s.description || '',
    imageUrl: s.show?.url ? getFullUrl(s.show.url) : '',
    subItems: s.subList || {},
  }))
})
</script>

<style scoped>
.animation-delay-100 {
  animation-delay: 100ms;
}
.animation-delay-200 {
  animation-delay: 200ms;
}
.animation-delay-300 {
  animation-delay: 300ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
