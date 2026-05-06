<template>
  <div class="font-serif">
    <!-- Hero Section -->
    <section
      class="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-brand-navy text-white"
    >
      <!-- Background Image/Video -->
      <div class="absolute inset-0">
        <template v-if="heroBackgroundUrl">
          <video
            v-if="isVideo(heroBackgroundUrl)"
            :src="heroBackgroundUrl"
            autoplay
            muted
            loop
            playsinline
            class="w-full h-full object-cover opacity-40"
          ></video>
          <NuxtImg
            v-else
            :src="heroBackgroundUrl"
            class="w-full h-full object-cover opacity-40"
            alt="Hero Background"
            format="webp"
            quality="80"
            loading="eager"
            fetchpriority="high"
            preload
          />
        </template>
        <div v-else class="w-full h-full bg-brand-navy opacity-40"></div>
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80"
      ></div>

      <div class="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
        <span
          class="inline-block py-1 px-3 border border-brand-gold/50 rounded-full text-brand-gold text-sm font-bold tracking-widest uppercase mb-4 md:mb-6 animate-fade-in-up"
        >
          {{ t('hero.tagline') }}
        </span>
        <h1
          class="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight animate-fade-in-up animation-delay-100 px-2"
        >
          <template v-if="homeData?.bannerArea?.title">
            {{ homeData.bannerArea.title }}
          </template>
        </h1>
        <p
          class="text-base sm:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200 px-2"
        >
          {{ bannerDescription }}
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in-up animation-delay-300"
        >
          <NuxtLink
            :to="localePath('/products')"
            class="bg-brand-gold text-white px-6 sm:px-10 py-3 sm:py-4 font-bold tracking-wide hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            {{ t('hero.viewCollections') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact')"
            class="px-6 sm:px-10 py-3 sm:py-4 border border-white/30 text-white font-bold tracking-wide hover:bg-white hover:text-brand-navy transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
          >
            {{ t('hero.partnerWithUs') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-16 md:py-24 bg-brand-cream text-white relative z-10">
      <div class="container mx-auto px-4 sm:px-6">
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16"
        >
          <NuxtLink :to="localePath('/products')" class="group">
            <span
              class="text-brand-gold font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 md:mb-3 block"
              >{{ homeData?.productArea?.subTitle || t('home.ourCollection') }}</span
            >
            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors"
            >
              {{ homeData?.productArea?.title || t('home.featuredFabrics') }}
            </h2>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/products')"
            class="hidden md:inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors font-medium"
          >
            {{ t('home.viewAllProducts') }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            v-for="product in productsList"
            :key="product.id"
            class="group relative aspect-[3/4] bg-gray-800 overflow-hidden cursor-pointer"
          >
            <NuxtImg
              v-if="product.image"
              :src="product.image"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              :alt="product.title"
              format="webp"
              quality="80"
              loading="lazy"
              preset="card"
            />
            <div v-else class="w-full h-full bg-gray-700"></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"
            ></div>
            <div
              class="absolute bottom-0 left-0 p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            >
              <span class="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block">{{
                t('home.collection')
              }}</span>
              <h3 class="text-xl sm:text-2xl font-bold mb-2">{{ product.title }}</h3>
              <p
                class="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
              >
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-10 md:mt-12 text-center md:hidden">
          <NuxtLink
            :to="localePath('/products')"
            class="inline-block border border-brand-gold text-brand-gold px-6 sm:px-8 py-3 font-bold hover:bg-brand-gold hover:text-brand-navy transition-colors text-sm sm:text-base"
          >
            {{ t('home.viewAllProducts') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Production Process Section -->
    <section
      v-if="productionProcess"
      class="py-16 md:py-24 bg-white relative overflow-hidden isolate z-20"
    >
      <div
        class="pointer-events-none absolute top-0 right-0 h-full w-1/3 origin-top-right -skew-x-12 bg-brand-cream/60 transform z-0"
      ></div>

      <div class="container mx-auto px-6 relative z-20">
        <div class="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <span class="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
              {{ productionProcess.tip }}
            </span>
            <h2
              class="text-[2.45rem] font-bold leading-none text-brand-navy sm:text-4xl md:text-5xl"
            >
              {{ productionProcess.title }}
            </h2>
          </div>
          <p class="max-w-xl text-lg leading-relaxed text-gray-500 md:text-base md:text-gray-600">
            {{ productionProcess.subTitle }}
          </p>
        </div>

        <div class="lg:hidden">
          <div
            class="relative aspect-video overflow-hidden rounded-[1.75rem] bg-brand-navy shadow-[0_22px_60px_rgba(15,23,42,0.18)]"
          >
            <ServiceVideoPlayer
              v-if="activeProcessStep"
              :src="activeProcessStep.videoUrl"
              :poster="activeProcessStep.posterUrl"
              :title="activeProcessStep.title"
              :eyebrow="activeProcessStep.subTitle"
              :show-caption="false"
              control-variant="light"
            />
            <div v-else class="h-full w-full bg-brand-navy"></div>
          </div>

          <div class="relative mx-auto mt-9 w-full max-w-[23rem] px-2">
            <div
              v-if="processSteps.length > 1"
              class="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-brand-gold/20"
            ></div>
            <div
              v-if="processSteps.length > 1"
              class="absolute left-8 right-8 top-1/2 h-px origin-left bg-brand-gold transition-transform duration-500"
              :style="{
                transform: `translateY(-50%) scaleX(${mobileProcessProgressScale})`,
              }"
            ></div>
            <div class="relative flex items-center justify-center gap-3 sm:gap-5">
              <button
                v-for="(step, index) in processSteps"
                :key="step.id"
                type="button"
                class="flex h-12 w-12 flex-none items-center justify-center rounded-full border text-base font-bold transition-all duration-300"
                :class="
                  activeProcessIndex === index
                    ? 'border-brand-gold bg-brand-gold text-white shadow-[0_10px_28px_rgba(197,160,89,0.35)]'
                    : 'border-brand-gold/20 bg-white/95 text-gray-400'
                "
                :aria-label="step.subTitle"
                @click="selectProcessStep(index)"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </button>
            </div>
          </div>

          <div class="mt-9 border-b border-brand-gold/20 px-4 pb-8">
            <p class="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-brand-gold">
              {{ activeProcessStep?.subTitle }}
            </p>
            <h3 class="text-3xl font-bold leading-tight text-brand-navy">
              {{ activeProcessStep?.title }}
            </h3>
            <p class="mt-5 text-xl leading-relaxed text-gray-500">
              {{ activeProcessStep?.description }}
            </p>
          </div>
        </div>

        <div
          class="hidden grid-cols-1 items-start gap-8 lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-12"
        >
          <div class="relative aspect-video overflow-hidden bg-brand-navy shadow-2xl lg:col-span-7">
            <ServiceVideoPlayer
              v-if="activeProcessStep"
              :src="activeProcessStep.videoUrl"
              :poster="activeProcessStep.posterUrl"
              :title="activeProcessStep.title"
              :eyebrow="activeProcessStep.subTitle"
            />
            <div v-else class="h-full w-full bg-brand-navy"></div>
          </div>

          <div
            class="process-step-list relative max-h-[clamp(360px,32vw,500px)] overflow-y-auto pr-3 lg:col-span-5"
          >
            <div
              class="pointer-events-none absolute bottom-3 left-[13px] top-3 hidden w-px bg-brand-gold/20 sm:block"
            ></div>
            <div class="space-y-3">
              <button
                v-for="(step, index) in processSteps"
                :key="step.id"
                type="button"
                class="group relative w-full text-left transition-all duration-300 sm:pl-11"
                :class="activeProcessIndex === index ? 'py-1' : 'py-1 hover:translate-x-1'"
                @click="selectProcessStep(index)"
              >
                <span
                  class="absolute left-0 top-4 hidden h-7 w-7 items-center justify-center rounded-full border text-xs font-bold transition-colors sm:flex"
                  :class="
                    activeProcessIndex === index
                      ? 'border-brand-gold bg-brand-gold text-white'
                      : 'border-brand-gold/40 bg-white text-brand-gold group-hover:border-brand-gold'
                  "
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <span
                  class="block border-l-2 px-5 py-4 transition-colors"
                  :class="
                    activeProcessIndex === index
                      ? 'border-brand-gold bg-brand-cream/80 text-brand-navy'
                      : 'border-brand-gold/15 text-brand-navy hover:border-brand-gold/60'
                  "
                >
                  <span
                    class="mb-2 block text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.22em] text-brand-gold"
                  >
                    {{ step.subTitle }}
                  </span>
                  <span class="block text-lg font-bold leading-tight sm:text-xl">
                    {{ step.title }}
                  </span>
                  <span
                    class="grid text-sm leading-relaxed text-gray-600 transition-all duration-300"
                    :class="
                      activeProcessIndex === index
                        ? 'mt-3 grid-rows-[1fr] opacity-100'
                        : 'mt-0 grid-rows-[0fr] opacity-0'
                    "
                  >
                    <span class="overflow-hidden">
                      {{ step.description }}
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Advantages Section (Carousel) -->
    <section ref="coreAdvantagesRef" class="py-24 md:py-32 relative overflow-hidden isolate z-20">
      <div class="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <!-- Title Area -->
        <div
          class="text-center mb-16 md:mb-24 transition-all duration-1000 ease-out transform"
          :class="isAdvantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy uppercase">
            {{ t('home.ourAdvantages') }}
          </h2>
        </div>

        <!-- Carousel Container -->
        <div
          class="relative w-full overflow-hidden pb-8"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <!-- Cards Track -->
          <div
            class="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-4 md:gap-6"
            :style="{
              transform: `translateX(calc(-${currentSlide * (100 / itemsPerView)}% - ${(currentSlide * (itemsPerView === 1 ? 16 : 24)) / itemsPerView}px))`,
            }"
          >
            <div
              v-for="(advantage, index) in coreAdvantagesList"
              :key="index"
              class="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 transition-all duration-1000 ease-out transform"
              :class="
                isAdvantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
              "
              :style="{ transitionDelay: `${200 * index}ms` }"
            >
              <div
                class="bg-white rounded-md overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.08)] transition-shadow duration-500 h-full flex flex-col group border border-gray-50 relative"
              >
                <!-- Image Header -->
                <div class="h-64 w-full overflow-hidden">
                  <NuxtImg
                    :src="advantage.image"
                    :alt="advantage.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    format="webp"
                    quality="80"
                    loading="lazy"
                    preset="card"
                  />
                </div>

                <!-- Floating Icon Badge (Half embedded) - Moved outside image container so it sits on top -->
                <div
                  class="absolute top-64 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] bg-[#C59B5F] rounded-full border-[6px] border-white flex items-center justify-center text-white z-20 overflow-hidden group-hover:bg-[#C59B5F]/90 transition-colors duration-300"
                >
                  <!-- Dashed inner border effect -->
                  <div
                    class="absolute inset-1.5 border-[1.5px] border-white/60 border-dashed rounded-full"
                  ></div>
                  <NuxtImg
                    v-if="advantage.iconUrl"
                    :src="advantage.iconUrl"
                    class="relative z-10 w-full h-full object-contain"
                    alt=""
                    format="webp"
                    quality="80"
                    loading="lazy"
                  />
                </div>

                <!-- Content Body -->
                <div class="pt-16 pb-12 px-6 flex-grow flex flex-col items-center text-center">
                  <h3
                    class="text-xl sm:text-2xl font-bold text-brand-navy mb-3 md:mb-4 group-hover:text-brand-gold transition-colors"
                  >
                    {{ advantage.title }}
                  </h3>
                  <p
                    class="text-[#666666] leading-[1.8] text-[15px]"
                    v-html="advantage.description"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows (Bottom) - Only show if there are slides to scroll -->
        <div v-if="maxSlides > 0" class="flex justify-center items-center gap-6 mt-6">
          <button
            @click="prevSlide"
            :disabled="!canSlidePrev"
            class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:bg-[#C59B5F] hover:text-white transition-all duration-300 text-[#C59B5F] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#C59B5F] disabled:hover:shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            @click="nextSlide"
            :disabled="!canSlideNext"
            class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:bg-[#C59B5F] hover:text-white transition-all duration-300 text-[#C59B5F] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#C59B5F] disabled:hover:shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Intro/About Section -->
    <section class="py-16 md:py-32 relative overflow-hidden isolate bg-white">
      <div v-if="aboutBackgroundUrl" class="pointer-events-none absolute inset-0 opacity-10 z-0">
        <video
          v-if="isVideo(aboutBackgroundUrl)"
          :src="aboutBackgroundUrl"
          autoplay
          muted
          loop
          playsinline
          class="w-full h-full object-cover"
        ></video>
        <NuxtImg
          v-else
          :src="aboutBackgroundUrl"
          class="w-full h-full object-cover"
          alt=""
          format="webp"
          quality="60"
          loading="lazy"
        />
      </div>
      <div class="container mx-auto px-4 sm:px-6 relative z-10">
        <div class="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div class="w-full md:w-1/2 relative">
            <div class="aspect-[4/5] bg-gray-200 overflow-hidden relative z-10">
              <template v-if="aboutPrimaryMedia?.url">
                <video
                  v-if="isVideo(aboutPrimaryMedia.url)"
                  :src="getFullUrl(aboutPrimaryMedia.url)"
                  autoplay
                  muted
                  loop
                  playsinline
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                ></video>
                <NuxtImg
                  v-else
                  :src="getFullUrl(aboutPrimaryMedia.url)"
                  :alt="aboutPrimaryMedia.alternativeText || t('home.aboutAlt')"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  format="webp"
                  quality="85"
                  loading="lazy"
                  preset="product"
                />
              </template>
              <NuxtImg
                v-else
                src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                :alt="t('home.fabricTextureAlt')"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                format="webp"
                quality="85"
                loading="lazy"
              />
            </div>
            <!-- Decorative Element -->
            <div
              class="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold/30 z-0 hidden md:block"
            ></div>
          </div>

          <div class="w-full md:w-1/2">
            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-6 md:mb-8 text-center md:text-left"
            >
              <template v-if="homeData?.aboutArea?.title">
                {{ homeData.aboutArea.title }}
              </template>
              <template v-else>
                {{ t('home.aboutTitlePart1') }} <br />
                <span class="text-brand-gold italic">{{ t('home.aboutTitlePart2') }}</span>
              </template>
            </h2>
            <div class="w-20 h-1 bg-brand-gold mb-8"></div>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">{{ aboutLeadText }}</p>

            <div class="grid grid-cols-2 gap-8">
              <template v-if="aboutArea?.numArea?.length">
                <div v-for="item in aboutArea.numArea" :key="item.id">
                  <span class="block text-4xl font-bold text-brand-navy mb-2">{{
                    item.mainNum
                  }}</span>
                  <span class="text-sm text-gray-500 uppercase tracking-wider">{{
                    item.description
                  }}</span>
                </div>
              </template>
              <template v-else>
                <div>
                  <span class="block text-4xl font-bold text-brand-navy mb-2">25+</span>
                  <span class="text-sm text-gray-500 uppercase tracking-wider">{{
                    t('home.yearsExperience')
                  }}</span>
                </div>
                <div>
                  <span class="block text-4xl font-bold text-brand-navy mb-2">10M+</span>
                  <span class="text-sm text-gray-500 uppercase tracking-wider">{{
                    t('home.metersAnnually')
                  }}</span>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 relative flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-brand-cream"></div>
      <div class="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 class="text-4xl sm:text-5xl md:text-7xl font-bold text-brand-navy mb-6 md:mb-8">
          {{ t('home.contactUs') }}
        </h2>
        <p class="text-base sm:text-xl text-gray-500 mb-8 md:mb-10 max-w-2xl mx-auto px-2">
          {{ t('home.ctaDescription') }}
        </p>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-block bg-brand-navy text-white px-8 sm:px-12 py-4 sm:py-5 font-bold tracking-wide hover:bg-brand-gold transition-colors duration-300 shadow-2xl text-sm sm:text-base"
        >
          {{ t('home.inquiryQuotation') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getHomeData, type HomeData, type MediaFile, type ProductionProcessVideo } from '@/api/home'
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'

// SEO 配置 - 外贸B2B首页
useSeo({
  title: '',
  description:
    'Xietai Textile - China textile manufacturer & fabric exporter since 2024. B2B wholesale fabric supplier for global apparel brands. OEM/ODM custom fabric production with competitive factory direct prices.',
  keywords: [
    'China textile exporter',
    'B2B fabric supplier',
    'wholesale fabric manufacturer',
    'fabric factory China',
    'textile export company',
    'bulk fabric order',
    'OEM textile manufacturer',
    'fabric sourcing China',
    'apparel fabric wholesale',
    'textile trading company',
  ],
  image: '/og-image.png',
})

// 结构化数据 - Organization (外贸公司)
useJsonLd({
  type: 'Organization',
  name: 'Xietai Textile',
  description: 'China textile manufacturer & B2B fabric exporter for global apparel industry',
  sameAs: [],
})

// 结构化数据 - WebSite
useJsonLd({
  type: 'WebSite',
  name: 'Xietai Textile',
  description:
    'China textile manufacturer & fabric exporter. B2B wholesale fabric supplier for global apparel brands.',
})

const { t } = useI18n()
const config = useRuntimeConfig()
const localePath = useLocalePath()

// Intersection Observer for Core Advantages animation
const coreAdvantagesRef = ref<HTMLElement | null>(null)
const isAdvantagesVisible = ref(false)
let observer: IntersectionObserver | null = null

// Carousel State
const currentSlide = ref(0)
const itemsPerView = ref(4) // Default for desktop

// Update items per view based on window width
const updateItemsPerView = () => {
  if (typeof window === 'undefined') return

  if (window.innerWidth < 768) {
    itemsPerView.value = 1 // Mobile
  } else if (window.innerWidth < 1024) {
    itemsPerView.value = 2 // Tablet
  } else {
    itemsPerView.value = 4 // Desktop
  }

  // Ensure currentSlide doesn't exceed new max index when resizing
  const maxSlideIndex = Math.max(0, coreAdvantagesList.value.length - itemsPerView.value)
  if (currentSlide.value > maxSlideIndex) {
    currentSlide.value = maxSlideIndex
  }
}

onMounted(() => {
  // Initialize window size
  updateItemsPerView()
  window.addEventListener('resize', updateItemsPerView)

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isAdvantagesVisible.value = true
        if (observer && coreAdvantagesRef.value) {
          observer.unobserve(coreAdvantagesRef.value)
        }
      }
    },
    { threshold: 0.15 },
  )

  if (coreAdvantagesRef.value) {
    observer.observe(coreAdvantagesRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateItemsPerView)
  }
})

// Computed max slides to prevent empty spaces
const maxSlides = computed(() => {
  return Math.max(0, coreAdvantagesList.value.length - itemsPerView.value)
})

const canSlideNext = computed(() => currentSlide.value < maxSlides.value)
const canSlidePrev = computed(() => currentSlide.value > 0)

// Carousel Navigation
const nextSlide = () => {
  if (canSlideNext.value) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (canSlidePrev.value) {
    currentSlide.value--
  }
}

// Touch/Swipe Support for Mobile
const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const handleTouchMove = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0].screenX
}

const handleTouchEnd = () => {
  if (touchStartX.value - touchEndX.value > 50) {
    // Swipe Left -> Next
    nextSlide()
  }
  if (touchEndX.value - touchStartX.value > 50) {
    // Swipe Right -> Prev
    prevSlide()
  }
}

// Media helpers
const baseUrl = config.public.base || ''
const getFullUrl = (url: string) => {
  if (!url) return ''
  return url.startsWith('http') ? url : `${baseUrl}${url}`
}

const VIDEO_EXTS = ['.mp4', '.webm', '.ogg', '.mov']
const isVideo = (url: string) => !!url && VIDEO_EXTS.some((ext) => url.toLowerCase().includes(ext))

const normalizeMediaList = (media: MediaFile[] | MediaFile | null | undefined): MediaFile[] => {
  if (!media) return []
  return Array.isArray(media) ? media : [media]
}

// Returns background URL, falling back to first companyImg
const getAreaBackgroundUrl = (area: any): string | null => {
  if (area?.background?.url) return getFullUrl(area.background.url)
  const first = normalizeMediaList(area?.companyImgs)[0]
  return first?.url ? getFullUrl(first.url) : null
}

// Fetch home page data
const { data: homeResponse } = getHomeData({
  lazy: true,
  default: () => ({ data: null, meta: {} }),
  transform: (response: any) => response,
})

const homeData = computed<HomeData | null>(() => {
  return homeResponse.value?.data || null
})

const bannerDescription = computed(
  () => homeData.value?.bannerArea?.subTitle || t('home.bannerDescriptionFallback'),
)

const heroBackgroundUrl = computed(() => {
  const bg = homeData.value?.bannerArea?.background
  return bg?.url ? getFullUrl(bg.url) : null
})

const aboutArea = computed(() => homeData.value?.aboutArea)

const aboutPrimaryMedia = computed<MediaFile | null>(() => {
  if (aboutArea.value?.background?.url) return aboutArea.value.background
  return normalizeMediaList(aboutArea.value?.companyImgs)[0] || null
})

const aboutLeadText = computed(() => aboutArea.value?.subTitle || t('home.aboutLeadFallback'))

const aboutBackgroundUrl = computed(() => getAreaBackgroundUrl(aboutArea.value))

interface ProcessStepView {
  id: number
  sort: number
  title: string
  subTitle: string
  description: string
  videoUrl: string | null
  posterUrl: string | null
}

const productionProcess = computed(() => homeData.value?.productionProcess)

const normalizeProcessStep = (step: ProductionProcessVideo, index: number): ProcessStepView => ({
  id: step.id,
  sort: step.sort ?? index + 1,
  title: step.title || '',
  subTitle: step.subTitle || '',
  description: step.description || '',
  videoUrl: step.videoUrl?.url ? getFullUrl(step.videoUrl.url) : null,
  posterUrl: step.posterUrl?.url ? getFullUrl(step.posterUrl.url) : null,
})

const processSteps = computed<ProcessStepView[]>(() => {
  const steps = productionProcess.value?.processVideo
  if (steps?.length) {
    return [...steps]
      .sort((a, b) => (a.sort ?? Number.MAX_SAFE_INTEGER) - (b.sort ?? Number.MAX_SAFE_INTEGER))
      .map((step, index) => normalizeProcessStep(step, index))
  }
  return []
})

const activeProcessIndex = ref(0)

const activeProcessStep = computed(
  () => processSteps.value[activeProcessIndex.value] || processSteps.value[0] || null,
)

const mobileProcessProgressScale = computed(() => {
  const total = processSteps.value.length
  if (total <= 1) return 0
  return activeProcessIndex.value / (total - 1)
})

const selectProcessStep = (index: number) => {
  activeProcessIndex.value = index
}

watch(
  () => processSteps.value.length,
  (length) => {
    if (activeProcessIndex.value >= length) {
      activeProcessIndex.value = Math.max(0, length - 1)
    }
  },
)

// Core Advantages Data
const coreAdvantagesList = computed(() => {
  const cards = homeData.value?.advantageArea
  if (cards?.length) {
    return cards.map((card) => ({
      image: card.bannerImg?.url ? getFullUrl(card.bannerImg.url) : '',
      iconUrl: card.icon?.url ? getFullUrl(card.icon.url) : null,
      iconType: '',
      title: card.title || '',
      description: card.subTitle || '',
    }))
  }
  return []
})

const productArea = computed(() => homeData.value?.productArea)

const productsList = computed(() => {
  const cards = productArea.value?.card
  if (cards?.length) {
    return cards.map((card) => ({
      id: card.id,
      image: card.bannerImg?.url ? getFullUrl(card.bannerImg.url) : '',
      iconUrl: card.icon?.url ? getFullUrl(card.icon.url) : null,
      title: card.title || '',
      description: card.subTitle || '',
    }))
  }
  return []
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
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.process-step-list {
  scrollbar-width: thin;
  scrollbar-color: rgba(197, 160, 89, 0.4) rgba(197, 160, 89, 0.1);
}

.process-step-list::-webkit-scrollbar {
  width: 4px;
}

.process-step-list::-webkit-scrollbar-track {
  background: rgba(197, 160, 89, 0.08);
}

.process-step-list::-webkit-scrollbar-thumb {
  background: rgba(197, 160, 89, 0.42);
  border-radius: 999px;
}
</style>
