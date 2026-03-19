<template>
  <div>
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
          <img
            v-else
            :src="heroBackgroundUrl"
            class="w-full h-full object-cover opacity-40"
            alt="Hero Background"
          />
        </template>
        <div
          v-else
          class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40"
        ></div>
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80"
      ></div>

      <div class="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
        <span
          class="inline-block py-1 px-3 border border-brand-gold/50 rounded-full text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 md:mb-6 animate-fade-in-up"
        >
          {{ homeData?.bannerArea?.subTitle || 'Premium Manufacturing' }}
        </span>
        <h1
          class="text-3xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 md:mb-8 leading-tight animate-fade-in-up animation-delay-100 px-2"
        >
          <template v-if="homeData?.bannerArea?.title">
            {{ homeData.bannerArea.title }}
          </template>
          <template v-else>
            The Art of <span class="italic text-brand-gold">Fine Textiles</span>
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
            to="/products"
            class="bg-brand-gold text-white px-6 sm:px-10 py-3 sm:py-4 font-bold tracking-wide hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            View Collections
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="px-6 sm:px-10 py-3 sm:py-4 border border-white/30 text-white font-bold tracking-wide hover:bg-white hover:text-brand-navy transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
          >
            Partner With Us
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-16 md:py-24 bg-brand-navy text-white relative z-10">
      <div class="container mx-auto px-4 sm:px-6">
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16"
        >
          <div>
            <span
              class="text-brand-gold font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 md:mb-3 block"
              >Our Collection</span
            >
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">Featured Fabrics</h2>
          </div>
          <NuxtLink
            to="/products"
            class="hidden md:inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors font-medium"
          >
            View All Products
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
          <!-- Dynamic Products Loop (if any) -->
          <div
            v-for="product in products?.slice(0, 4)"
            :key="product.id"
            class="group relative aspect-[3/4] bg-gray-800 overflow-hidden cursor-pointer"
          >
            <img
              :src="
                product.url ||
                'https://images.unsplash.com/photo-1596205847326-17b5f902403b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              "
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              :alt="product.name"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"
            ></div>
            <div
              class="absolute bottom-0 left-0 p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            >
              <span class="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block"
                >Collection</span
              >
              <h3 class="text-xl sm:text-2xl font-serif font-bold mb-2">{{ product.name }}</h3>
              <p
                class="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
              >
                Discover our premium quality {{ product.name }}.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-10 md:mt-12 text-center md:hidden">
          <NuxtLink
            to="/products"
            class="inline-block border border-brand-gold text-brand-gold px-6 sm:px-8 py-3 font-bold hover:bg-brand-gold hover:text-brand-navy transition-colors text-sm sm:text-base"
          >
            View All Products
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 md:py-24 bg-white relative overflow-hidden isolate z-20">
      <div
        class="pointer-events-none absolute top-0 right-0 w-1/3 h-full bg-brand-cream/50 -skew-x-12 transform origin-top-right z-0"
      ></div>
      <div v-if="servicesBackgroundUrl" class="pointer-events-none absolute inset-0 opacity-5 z-0">
        <video
          v-if="isVideo(servicesBackgroundUrl)"
          :src="servicesBackgroundUrl"
          autoplay
          muted
          loop
          playsinline
          class="w-full h-full object-cover"
        ></video>
        <img v-else :src="servicesBackgroundUrl" class="w-full h-full object-cover" alt="" />
      </div>

      <div class="container mx-auto px-4 sm:px-6 relative z-20">
        <div class="text-center mb-12 md:mb-20">
          <span class="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block">
            {{ homeData?.servicesArea?.subTitle || 'Our Expertise' }}
          </span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-navy">
            {{ homeData?.servicesArea?.title || 'Comprehensive Services' }}
          </h2>
        </div>

        <div class="mb-10 md:mb-14 grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-stretch">
          <div
            class="lg:col-span-3 relative overflow-hidden bg-brand-navy min-h-[240px] sm:min-h-[280px] md:min-h-[360px] shadow-2xl"
          >
            <ServiceVideoPlayer
              v-if="serviceVideoUrl"
              :src="serviceVideoUrl"
              :poster="serviceVideoPoster"
              :title="homeData?.servicesArea?.title || 'Services Reel'"
            />
            <img
              v-else-if="serviceVideoPoster"
              :src="serviceVideoPoster"
              class="w-full h-full object-cover"
              alt="Services"
            />
            <div v-else class="w-full h-full bg-brand-navy"></div>
          </div>
          <div
            class="lg:col-span-2 bg-white/90 backdrop-blur-sm border border-brand-gold/20 p-6 sm:p-8 md:p-10 flex flex-col justify-center"
          >
            <p class="text-sm uppercase tracking-[0.24em] text-brand-gold font-semibold mb-4">
              Service Vision
            </p>
            <h3
              class="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-4 md:mb-5"
            >
              {{ homeData?.servicesArea?.title || 'Comprehensive Services' }}
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
              {{
                homeData?.servicesArea?.subTitle ||
                'Integrated manufacturing, process control and worldwide delivery from one textile partner.'
              }}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(service, index) in servicesList"
            :key="index"
            class="group p-6 sm:p-8 md:p-10 bg-brand-cream hover:bg-brand-navy transition-colors duration-500"
          >
            <div
              class="w-12 h-12 md:w-14 md:h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-full mb-6 md:mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="service.icon"
                />
              </svg>
            </div>
            <h3
              class="text-xl sm:text-2xl font-serif font-bold text-brand-navy mb-3 md:mb-4 group-hover:text-white transition-colors"
            >
              {{ service.title }}
            </h3>
            <p
              class="text-gray-600 leading-relaxed group-hover:text-white/70 transition-colors text-sm sm:text-base"
            >
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Advantages Section (Carousel) -->
    <section
      ref="coreAdvantagesRef"
      class="py-24 md:py-32 bg-[#F7F3EB] relative overflow-hidden isolate z-20"
    >
      <div class="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <!-- Title Area -->
        <div
          class="text-center mb-16 md:mb-24 transition-all duration-1000 ease-out transform"
          :class="isAdvantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <h2
            class="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#C59B5F] uppercase tracking-wider"
          >
            Our Advantages
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
                  <img
                    :src="advantage.image"
                    :alt="advantage.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <!-- Floating Icon Badge (Half embedded) - Moved outside image container so it sits on top -->
                <div
                  class="absolute top-64 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] bg-[#C59B5F] rounded-full border-[6px] border-white flex items-center justify-center text-white z-20"
                >
                  <!-- Dashed inner border effect -->
                  <div
                    class="absolute inset-1.5 border-[1.5px] border-white/60 border-dashed rounded-full"
                  ></div>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="relative z-10"
                  >
                    <path
                      v-if="advantage.iconType === 'box'"
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                    ></path>
                    <polyline
                      v-if="advantage.iconType === 'box'"
                      points="3.27 6.96 12 12.01 20.73 6.96"
                    ></polyline>
                    <line
                      v-if="advantage.iconType === 'box'"
                      x1="12"
                      y1="22.08"
                      x2="12"
                      y2="12"
                    ></line>

                    <rect
                      v-if="advantage.iconType === 'calculator'"
                      x="4"
                      y="2"
                      width="16"
                      height="20"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line
                      v-if="advantage.iconType === 'calculator'"
                      x1="8"
                      y1="6"
                      x2="16"
                      y2="6"
                    ></line>
                    <line
                      v-if="advantage.iconType === 'calculator'"
                      x1="16"
                      y1="14"
                      x2="16"
                      y2="14.01"
                    ></line>
                    <line
                      v-if="advantage.iconType === 'calculator'"
                      x1="12"
                      y1="14"
                      x2="12"
                      y2="14.01"
                    ></line>
                    <line
                      v-if="advantage.iconType === 'calculator'"
                      x1="8"
                      y1="14"
                      x2="8"
                      y2="14.01"
                    ></line>

                    <polyline
                      v-if="advantage.iconType === 'check'"
                      points="20 6 9 17 4 12"
                    ></polyline>

                    <path v-if="advantage.iconType === 'customize'" d="M12 20h9"></path>
                    <path
                      v-if="advantage.iconType === 'customize'"
                      d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
                    ></path>
                  </svg>
                </div>

                <!-- Content Body -->
                <div class="pt-16 pb-12 px-6 flex-grow flex flex-col items-center text-center">
                  <h3 class="text-[22px] text-[#333333] mb-4 font-medium">{{ advantage.title }}</h3>
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
        <img v-else :src="aboutBackgroundUrl" class="w-full h-full object-cover" alt="" />
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
                <img
                  v-else
                  :src="getFullUrl(aboutPrimaryMedia.url)"
                  :alt="aboutPrimaryMedia.alternativeText || 'About Us'"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </template>
              <img
                v-else
                src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Fabric Texture"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <!-- Decorative Element -->
            <div
              class="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold/30 z-0 hidden md:block"
            ></div>
          </div>

          <div class="w-full md:w-1/2">
            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6 md:mb-8 text-center md:text-left"
            >
              <template v-if="homeData?.aboutArea?.title">
                {{ homeData.aboutArea.title }}
              </template>
              <template v-else>
                Weaving Tradition <br />
                <span class="text-brand-gold italic">with Innovation</span>
              </template>
            </h2>
            <div class="w-20 h-1 bg-brand-gold mb-8"></div>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">{{ aboutLeadText }}</p>

            <div class="grid grid-cols-2 gap-8">
              <div>
                <span class="block text-4xl font-serif font-bold text-brand-navy mb-2">25+</span>
                <span class="text-sm text-gray-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span class="block text-4xl font-serif font-bold text-brand-navy mb-2">10M+</span>
                <span class="text-sm text-gray-500 uppercase tracking-wider">Meters Annually</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 relative flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-brand-cream"></div>
      <div class="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2
          class="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-brand-navy mb-6 md:mb-8"
        >
          Ready to create?
        </h2>
        <p class="text-base sm:text-xl text-gray-500 mb-8 md:mb-10 max-w-2xl mx-auto px-2">
          Let's discuss your next project. We offer custom manufacturing solutions tailored to your
          brand's needs.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block bg-brand-navy text-white px-8 sm:px-12 py-4 sm:py-5 font-bold tracking-wide hover:bg-brand-gold transition-colors duration-300 shadow-2xl text-sm sm:text-base"
        >
          Get a Quote
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getProducts } from '@/api/product'
import { getHomeData, type HomeData, type MediaFile } from '@/api/home'
import { getStrapiImage } from '@/utils/index'
import { computed, ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'

const config = useRuntimeConfig()

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
  const maxSlideIndex = Math.max(0, coreAdvantagesList.length - itemsPerView.value)
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
  if (observer) {
    observer.disconnect()
  }
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateItemsPerView)
  }
})

// Computed max slides to prevent empty spaces
const maxSlides = computed(() => {
  return Math.max(0, coreAdvantagesList.length - itemsPerView.value)
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

// Helper to get full URL for media - use API returned URL directly if it's already a full URL
const getFullUrl = (url: string) => {
  if (!url) return ''
  // If it's already a full URL, use it directly
  if (url.startsWith('http')) return url
  // Otherwise, prepend the base URL from config
  const baseUrl = config.public.base || ''
  return `${baseUrl}${url}`
}

// Helper to check if URL is a video
const isVideo = (url: string) => {
  if (!url) return false
  const videoExts = ['.mp4', '.webm', '.ogg', '.mov']
  return videoExts.some((ext) => url.toLowerCase().includes(ext))
}

const normalizeMediaList = (media: MediaFile[] | MediaFile | null | undefined) => {
  if (!media) return []
  return Array.isArray(media) ? media : [media]
}

// Fetch home page data
const { data: homeResponse } = await getHomeData({
  transform: (response: any) => response,
})

const homeData = computed<HomeData | null>(() => {
  return homeResponse.value?.data || null
})

const bannerDescription = computed(() => {
  return (
    homeData.value?.bannerArea?.subTitle ||
    'From raw fiber to finished fabric, Xietai delivers excellence in every thread. Your trusted global partner for innovative textile solutions.'
  )
})

const heroBackgroundUrl = computed(() => {
  const bannerArea = homeData.value?.bannerArea
  const bg = bannerArea?.background
  if (bg?.url) return getFullUrl(bg.url)
  const bannerMedia = normalizeMediaList(bannerArea?.companyImgs)
  if (bannerMedia[0]?.url) return getFullUrl(bannerMedia[0].url)
  return null
})

const aboutPrimaryMedia = computed<MediaFile | null>(() => {
  const aboutArea = homeData.value?.aboutArea
  if (aboutArea?.background?.url) return aboutArea.background
  const aboutMedia = normalizeMediaList(aboutArea?.companyImgs)
  return aboutMedia[0] || null
})

const aboutLeadText = computed(() => {
  return (
    homeData.value?.aboutArea?.subTitle ||
    'Established in 1998, Xietai has grown from a local weaving mill to a global textile powerhouse focused on high-performance fabrics.'
  )
})

const aboutBackgroundUrl = computed(() => {
  const aboutArea = homeData.value?.aboutArea
  const bg = aboutArea?.background
  if (bg?.url) return getFullUrl(bg.url)
  const aboutMedia = normalizeMediaList(aboutArea?.companyImgs)
  if (aboutMedia[0]?.url) return getFullUrl(aboutMedia[0].url)
  return null
})

const servicesBackgroundUrl = computed(() => {
  const servicesArea = homeData.value?.servicesArea
  const bg = servicesArea?.background
  if (bg?.url) return getFullUrl(bg.url)
  const serviceMedia = normalizeMediaList(servicesArea?.companyImgs)
  if (serviceMedia[0]?.url) return getFullUrl(serviceMedia[0].url)
  return null
})

const serviceVideoAsset = computed<MediaFile | null>(() => {
  const servicesArea = homeData.value?.servicesArea
  const mediaList = normalizeMediaList(servicesArea?.companyImgs)
  return mediaList.find((item) => !!item?.url && isVideo(item.url)) || null
})

const serviceImageAsset = computed<MediaFile | null>(() => {
  const servicesArea = homeData.value?.servicesArea
  if (servicesArea?.background?.url && !isVideo(servicesArea.background.url)) {
    return servicesArea.background
  }
  const mediaList = normalizeMediaList(servicesArea?.companyImgs)
  return mediaList.find((item) => !!item?.url && !isVideo(item.url)) || null
})

const serviceVideoUrl = computed(() => {
  if (!serviceVideoAsset.value?.url) return null
  return getFullUrl(serviceVideoAsset.value.url)
})

const serviceVideoPoster = computed(() => {
  if (serviceImageAsset.value?.url) return getFullUrl(serviceImageAsset.value.url)
  if (
    homeData.value?.servicesArea?.background?.url &&
    !isVideo(homeData.value.servicesArea.background.url)
  ) {
    return getFullUrl(homeData.value.servicesArea.background.url)
  }
  return null
})

const defaultServices = [
  {
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    title: 'Material Selection',
    description:
      'Sourcing the finest fibers globally. From organic cottons to high-tech synthetics, quality starts at the source.',
  },
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Precision Weaving',
    description:
      'Advanced looms meet traditional techniques. We create complex weaves with exacting standards for texture and durability.',
  },
  {
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    title: 'Global Logistics',
    description:
      'Seamless delivery to your doorstep. Our logistics network ensures your materials arrive on time, anywhere in the world.',
  },
]

const servicesList = computed(() => defaultServices)

// Core Advantages Data
const coreAdvantagesList = [
  {
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    iconType: 'box',
    title: 'Packaging',
    description: "Book a ship's hold for you, load containers, and transport them to the port",
  },
  {
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    iconType: 'calculator',
    title: 'Weaving',
    description: 'Spinning and weaving process',
  },
  {
    image:
      'https://images.unsplash.com/photo-1605280263929-1c42c62ef169?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    iconType: 'check',
    title: 'Select raw materials',
    description: 'We will use high-quality raw materials to craft your order',
  },
  {
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    iconType: 'customize',
    title: 'Customize',
    description:
      'According to your requirements, we can fulfill your customization needs for product design and composition',
  },
]

// Fetch products
const { data: products } = await getProducts({
  query: {
    populate: '*',
  },
  transform: (response: any) => {
    const list = response?.data || []
    return list.map((item: any) => ({
      ...item,
      url: getStrapiImage(item.image, 'large'),
    }))
  },
  server: false,
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
</style>
