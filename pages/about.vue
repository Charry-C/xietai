<template>
  <div class="bg-brand-cream min-h-screen overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative py-32 md:py-48 overflow-hidden bg-brand-navy text-white">
      <div v-if="bannerBgUrl" class="absolute inset-0">
        <NuxtImg
          :src="bannerBgUrl"
          class="w-full h-full object-cover opacity-30"
          alt="Banner"
          format="webp"
          quality="80"
          loading="eager"
          preload
        />
      </div>
      <div
        v-else
        class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30"
      ></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <span
          class="block text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in-up"
          >{{ t('hero.since') }}</span
        >
        <h1
          class="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight animate-fade-in-up animation-delay-100"
        >
          {{ t('hero.aboutTitle') }}<br /><span class="text-brand-gold italic">{{
            t('hero.aboutTitleHighlight')
          }}</span
          >{{ t('hero.aboutTitleSuffix') }}
        </h1>
      </div>
    </section>

    <!-- Company Story -->
    <section class="py-24 md:py-32">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div class="w-full lg:w-1/2 relative">
            <div class="relative z-10 aspect-[4/5] overflow-hidden bg-gray-200 shadow-2xl">
              <NuxtImg
                v-if="companyImgUrl"
                :src="companyImgUrl"
                alt="Company"
                class="w-full h-full object-cover"
                format="webp"
                quality="85"
                loading="lazy"
                preset="product"
              />
              <NuxtImg
                v-else
                src="https://images.unsplash.com/photo-1534643960519-11ad79bc19df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                :alt="t('about.factoryFloorAlt')"
                class="w-full h-full object-cover"
                format="webp"
                quality="85"
                loading="lazy"
                preset="product"
              />
            </div>
            <!-- Decorative -->
            <div
              class="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full z-0"
            ></div>
            <div
              class="absolute -bottom-10 -right-10 w-full h-full border border-brand-navy/10 z-0"
            ></div>
          </div>

          <div class="w-full lg:w-1/2">
            <h2 class="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-8">
              {{ mainTitle }}
            </h2>
            <div class="w-20 h-1 bg-brand-gold mb-8"></div>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ mainSubTitle }}
            </p>

            <!-- <div class="mt-10 pt-10 border-t border-brand-navy/10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Signature_sample.svg" alt="CEO Signature" class="h-12 opacity-50">
              <p class="text-sm text-gray-400 mt-2">Founder & CEO</p>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24 bg-brand-navy text-white relative overflow-hidden" ref="statsSection">
      <!-- Background Pattern -->
      <div
        class="absolute inset-0 opacity-5"
        style="
          background-image: radial-gradient(#c5a059 1px, transparent 1px);
          background-size: 30px 30px;
        "
      ></div>

      <div class="container mx-auto px-6 relative z-10">
        <div v-if="numsList.length" class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div
            v-for="(item, idx) in numsList"
            :key="item.id"
            class="p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-300"
          >
            <span class="block text-6xl font-serif font-bold text-brand-gold mb-4">{{
              animatedNums[idx]
            }}</span>
            <span class="text-sm tracking-widest uppercase text-white/60">{{
              item.description
            }}</span>
          </div>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div
            class="p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-300"
          >
            <span class="block text-6xl font-serif font-bold text-brand-gold mb-4">{{
              defaultAnimated[0]
            }}</span>
            <span class="text-sm tracking-widest uppercase text-white/60">{{
              t('about.yearsExperience')
            }}</span>
          </div>
          <div
            class="p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-300"
          >
            <span class="block text-6xl font-serif font-bold text-brand-gold mb-4">{{
              defaultAnimated[1]
            }}</span>
            <span class="text-sm tracking-widest uppercase text-white/60">{{
              t('about.exportCountries')
            }}</span>
          </div>
          <div
            class="p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-300"
          >
            <span class="block text-6xl font-serif font-bold text-brand-gold mb-4">{{
              defaultAnimated[2]
            }}</span>
            <span class="text-sm tracking-widest uppercase text-white/60">{{
              t('about.metersPerMonth')
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Quality Section -->
    <section class="py-24 md:py-32 bg-white">
      <div class="container mx-auto px-6">
        <!-- Section Title -->
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-gold text-center mb-16 md:mb-24"
        >
          {{ t('about.qualityGuaranteed') }}
        </h2>

        <!-- Sub Main Sections -->
        <template v-for="(item, index) in subMainList" :key="item.id">
          <!-- Alternating layout: even = image left, odd = image right -->
          <div
            class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 md:mb-28"
            :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
          >
            <!-- Image with Gold Corner Decoration -->
            <div class="w-full lg:w-1/2 relative">
              <div class="relative z-10 overflow-hidden shadow-xl">
                <NuxtImg
                  v-if="item.cardImgUrl"
                  :src="item.cardImgUrl"
                  :alt="item.description || ''"
                  class="w-full h-auto object-cover aspect-[4/3]"
                  format="webp"
                  quality="85"
                  loading="lazy"
                  preset="product"
                />
              </div>
              <!-- Gold Corner Accent -->
              <div
                v-if="index % 2 === 0"
                class="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-brand-gold z-0"
              ></div>
              <div
                v-else
                class="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-brand-gold z-0"
              ></div>
            </div>

            <!-- Text Content -->
            <div class="w-full lg:w-1/2">
              <p class="text-gray-600 text-lg leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </template>

        <!-- Bottom Slogan -->
        <div class="text-center pt-12 border-t border-brand-gold/20">
          <p
            class="text-xl md:text-2xl lg:text-3xl font-bold text-brand-gold leading-relaxed tracking-wide"
          >
            {{ t('about.slogan') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, type Ref } from 'vue'
import { getAboutData, type AboutData } from '@/api/about'

// SEO 配置 - 关于我们（外贸）
useSeo({
  title: 'About Us - China Textile Factory',
  description:
    'Xietai Textile - China fabric factory with 25+ years export experience. B2B textile manufacturer serving 50+ countries. OEM/ODM custom fabric production for global apparel brands.',
  keywords: [
    'China textile factory',
    'fabric manufacturer China',
    'textile export experience',
    'B2B fabric supplier',
    'OEM textile China',
    'fabric factory tour',
    'textile production capacity',
    'fabric export countries',
  ],
  image: '/og-image.png',
})

// 结构化数据 - Organization (详细版)
useJsonLd({
  type: 'Organization',
  name: 'Xietai Textile',
  description:
    'China textile manufacturer & B2B fabric exporter with 25+ years global export experience',
})

const { t } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.base || ''

const getFullUrl = (url: string | null | undefined) => {
  if (!url) return ''
  return url.startsWith('http') ? url : `${baseUrl}${url}`
}

// Fetch about page data
const { data: aboutResponse } = await getAboutData({
  transform: (response: any) => response,
})

const aboutData = computed<AboutData | null>(() => {
  return aboutResponse.value?.data || null
})

// Banner
const bannerBgUrl = computed(() => {
  const bg = aboutData.value?.banner?.background
  return bg?.url ? getFullUrl(bg.url) : null
})

// Main section
const mainTitle = computed(() => aboutData.value?.main?.title || t('about.whoWeAre'))
const mainSubTitle = computed(() => aboutData.value?.main?.subTitle || '')
const companyImgUrl = computed(() => {
  const imgs = aboutData.value?.main?.companyImgs
  if (imgs && imgs.length > 0 && imgs[0]?.url) {
    return getFullUrl(imgs[0].url)
  }
  return null
})

// Sub main sections
const subMainList = computed(() => {
  const items = aboutData.value?.subMain
  if (!items?.length) return []
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    cardImgUrl: item.cardImg?.url ? getFullUrl(item.cardImg.url) : null,
  }))
})

// NumsList with animation
const statsSection = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

const animateValue = (refValue: Ref<number>, start: number, end: number, duration: number) => {
  let startTimestamp: number | null = null
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const easeProgress = 1 - Math.pow(1 - progress, 4)
    refValue.value = Math.floor(easeProgress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

const numsList = computed(() => aboutData.value?.numsList || [])

// Reactive animated values for API numsList
const animatedNums = ref<number[]>([])

// Default fallback animated values
const defaultAnimated = ref([0, 0, 0])

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (numsList.value.length) {
            animatedNums.value = numsList.value.map(() => 0)
            numsList.value.forEach((item, idx) => {
              const r = ref(0)
              animateValue(r, 0, item.mainNum, 2000)
              const syncStep = () => {
                animatedNums.value[idx] = r.value
                if (r.value < item.mainNum) requestAnimationFrame(syncStep)
              }
              requestAnimationFrame(syncStep)
            })
          } else {
            const targets = [25, 50, 1]
            targets.forEach((target, idx) => {
              const r = ref(0)
              animateValue(r, 0, target, 2000)
              const syncStep = () => {
                defaultAnimated.value[idx] = r.value
                if (r.value < target) requestAnimationFrame(syncStep)
              }
              requestAnimationFrame(syncStep)
            })
          }
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.2 },
  )

  if (statsSection.value) {
    observer.observe(statsSection.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.animation-delay-100 {
  animation-delay: 100ms;
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
