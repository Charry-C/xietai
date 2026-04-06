<template>
  <div class="min-h-screen bg-brand-cream pb-20 pt-8">
    <div class="container mx-auto px-6">
      <!-- Breadcrumbs -->
      <nav class="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <NuxtLink :to="localePath('/')" class="hover:text-brand-gold transition-colors">{{
              $t('nav.home')
            }}</NuxtLink>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <NuxtLink
                :to="localePath('/products')"
                class="ml-1 hover:text-brand-gold transition-colors"
                >{{ $t('nav.products') }}</NuxtLink
              >
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="ml-1 text-gray-700 font-medium truncate max-w-[200px] md:max-w-xs">{{
                product?.name || $t('common.loading')
              }}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div v-if="loading" class="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
        <div class="aspect-square bg-gray-200 rounded-lg"></div>
        <div class="space-y-4">
          <div class="h-8 bg-gray-200 rounded w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>

      <div v-else-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column: Images -->
        <div class="space-y-4">
          <!-- Main Image -->
          <div class="relative aspect-square bg-white overflow-hidden shadow-sm group">
            <NuxtImg
              :key="displayedImage"
              :src="displayedImage"
              :alt="product.name"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              format="webp"
              quality="85"
              loading="eager"
              preset="product"
            />
            <div
              v-if="isSwitchingMainImage"
              class="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center"
            >
              <span
                class="w-7 h-7 border-2 border-brand-navy/20 border-t-brand-gold rounded-full animate-spin"
              ></span>
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="flex items-center gap-4">
            <!-- Left Arrow -->
            <button
              @click="prevImage"
              class="flex-shrink-0 w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shadow-lg hover:bg-brand-gold transition-colors z-10"
              :class="{
                'opacity-50 cursor-not-allowed': product.images.indexOf(selectedImage) === 0,
              }"
              :disabled="product.images.indexOf(selectedImage) === 0"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div class="flex-1 overflow-hidden relative">
              <div
                ref="thumbnailContainer"
                class="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth snap-x"
              >
                <button
                  v-for="(img, idx) in product.images"
                  :key="idx"
                  @click="selectImage(img)"
                  :ref="
                    (el) => {
                      if (selectedImage === img) activeThumbnail = el as HTMLElement
                    }
                  "
                  class="flex-shrink-0 w-24 h-24 border-2 transition-all duration-300 overflow-hidden relative snap-start"
                  :class="
                    selectedImage === img
                      ? 'border-brand-gold ring-1 ring-brand-gold'
                      : 'border-transparent hover:border-brand-navy/20'
                  "
                >
                  <NuxtImg
                    :src="img"
                    class="w-full h-full object-cover"
                    :alt="$t('products.viewN', { n: idx + 1 })"
                    format="webp"
                    quality="75"
                    loading="lazy"
                    preset="thumbnail"
                  />
                  <div
                    v-if="selectedImage === img"
                    class="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold"
                  ></div>
                </button>
              </div>
            </div>

            <!-- Right Arrow -->
            <button
              @click="nextImage"
              class="flex-shrink-0 w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shadow-lg hover:bg-brand-gold transition-colors z-10"
              :class="{
                'opacity-50 cursor-not-allowed':
                  product.images.indexOf(selectedImage) === product.images.length - 1,
              }"
              :disabled="product.images.indexOf(selectedImage) === product.images.length - 1"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Right Column: Details -->
        <div>
          <h1 class="text-3xl md:text-4xl font-serif font-bold text-brand-navy leading-tight mb-6">
            {{ product.name }}
          </h1>

          <div class="w-20 h-1 bg-brand-gold mb-8"></div>

          <!-- Product Specifications -->
          <div class="space-y-3 text-brand-navy/80 mb-10 font-light">
            <div
              v-for="(value, key) in product.specs"
              :key="key"
              class="grid grid-cols-[140px_1fr] gap-4 py-1 border-b border-brand-navy/5 last:border-0"
            >
              <span class="font-medium text-brand-navy/60">{{ formatKey(key) }}:</span>
              <span>{{ value }}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-4 mt-8">
            <NuxtLink
              :to="
                localePath(
                  `/contact?productId=${product.id}&productName=${encodeURIComponent(product.name)}&productImage=${encodeURIComponent(displayedImage || '')}`,
                )
              "
              class="bg-brand-navy text-white px-8 py-4 font-bold tracking-wider hover:bg-brand-gold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center inline-block"
            >
              {{ $t('products.inquireNow') }}
            </NuxtLink>
            <button
              @click="nextProduct"
              class="bg-white border border-brand-navy text-brand-navy px-8 py-4 font-bold tracking-wider hover:bg-brand-navy hover:text-white transition-all duration-300 text-center"
            >
              {{ $t('products.nextProduct') }}
            </button>
          </div>
        </div>
      </div>

      <!-- Not Found -->
      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-serif text-brand-navy">{{ $t('products.productNotFound') }}</h2>
        <NuxtLink
          :to="localePath('/products')"
          class="text-brand-gold hover:underline mt-4 inline-block"
          >{{ $t('common.backToProducts') }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { strapiRequest } from '@/composables/useStrapiFetch'
import { useLocale } from '@/composables/useLocale'
import { getStrapiImage } from '@/utils/index'

// SEO 配置 - 产品详情（外贸B2B）
const productForSeo = ref<{ name: string; description: string } | null>(null)

// 动态SEO - 根据产品信息更新
watch(
  productForSeo,
  (product) => {
    if (product) {
      useSeo({
        title: `${product.name} - Wholesale Fabric`,
        description:
          product.description ||
          `${product.name} wholesale from China textile factory. B2B bulk order with competitive export prices. OEM/ODM custom production available.`,
        keywords: [
          `${product.name} wholesale`,
          `${product.name} China`,
          `${product.name} manufacturer`,
          'bulk fabric order',
          'fabric export China',
          'B2B textile supplier',
          'wholesale textile price',
          'fabric MOQ',
        ],
        type: 'product',
      })
    }
  },
  { immediate: true },
)

const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()
const { strapiLocale } = useLocale()
const routeProductId = computed(() => String(route.params.id || ''))

// Interface based on the user's image data
interface Product {
  id: string
  name: string
  images: string[]
  specs: Record<string, string>
}

const selectedImage = ref('')
const displayedImage = ref('')
const activeThumbnail = ref<HTMLElement | null>(null)
const thumbnailContainer = ref<HTMLElement | null>(null)
const isSwitchingMainImage = ref(false)
const REQUEST_TIMEOUT_MS = 10000

const withTimeout = async <T,>(promise: Promise<T>, timeoutMs = REQUEST_TIMEOUT_MS) => {
  let timeoutHandle: ReturnType<typeof setTimeout> | null = null
  try {
    return (await Promise.race([
      promise,
      new Promise<T>((resolve) => {
        timeoutHandle = setTimeout(() => resolve(null as T), timeoutMs)
      }),
    ])) as T
  } finally {
    if (timeoutHandle) clearTimeout(timeoutHandle)
  }
}

const mapProduct = (item: any): Product | null => {
  if (!item) return null
  const attributes = item.attributes || item

  // Process images
  const rawImages = attributes.image || []
  const imageList = Array.isArray(rawImages) ? rawImages : [rawImages]

  const images = imageList
    .filter((img: any) => img)
    .map((img: any) => getStrapiImage([img], 'large'))
    .filter((url: string) => url)

  const specs: Record<string, string> = attributes.specs || {}

  return {
    id: item.documentId || String(item.id),
    name: attributes.name,
    images,
    specs,
  }
}

const fetchProduct = async (id: string) => {
  if (!id) return null
  if (id === 'undefined' || id === 'null') return null
  try {
    // Prefer documentId route style, fallback to numeric id for compatibility.
    const byDocumentId = await withTimeout(
      strapiRequest<any>(
        '/products',
        'get',
        {
          'filters[documentId][$eq]': id,
          populate: '*',
          'pagination[pageSize]': 1,
        },
        undefined,
        strapiLocale.value,
      ),
    )
    const first = byDocumentId?.data?.data?.[0]
    if (first) return mapProduct(first)

    if (/^\d+$/.test(id)) {
      const byId = await withTimeout(
        strapiRequest<any>(
          '/products',
          'get',
          {
            'filters[id][$eq]': Number(id),
            populate: '*',
            'pagination[pageSize]': 1,
          },
          undefined,
          strapiLocale.value,
        ),
      )
      return mapProduct(byId?.data?.data?.[0])
    }

    return null
  } catch (e) {
    console.error('Error fetching product:', e)
    return null
  }
}

const { data: product, pending: loading } = useAsyncData<Product | null>(
  () => `product-detail-${routeProductId.value}-${strapiLocale.value}`,
  () => fetchProduct(routeProductId.value),
  {
    server: false,
    default: () => null,
    watch: [routeProductId, strapiLocale],
  },
)

const preloadImage = (src: string) => {
  if (!process.client || !src) return Promise.resolve(true)
  return new Promise<boolean>((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

let imageSwitchToken = 0
const selectImage = async (img: string) => {
  if (!img || img === selectedImage.value) return
  selectedImage.value = img
  if (img === displayedImage.value) return

  const token = ++imageSwitchToken
  isSwitchingMainImage.value = true
  const loaded = await preloadImage(img)
  if (token !== imageSwitchToken) return

  // Even if preload fails, switch to keep interaction consistent.
  displayedImage.value = img
  isSwitchingMainImage.value = false
  if (!loaded) {
    // no-op: keep fallback behavior handled by NuxtImg
  }
}

// Watch selectedImage to scroll thumbnail into view
watch(
  selectedImage,
  () => {
    if (activeThumbnail.value && thumbnailContainer.value) {
      activeThumbnail.value.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'center',
      })
    }
  },
  { flush: 'post' },
)

const formatKey = (key: string) => {
  return key
}

const nextProduct = () => {
  // Logic to go to next product - for now just reload with same data to simulate
  // In real app, this would find the next ID
  router.push(localePath('/products'))
}

const prevImage = () => {
  if (!product.value) return
  const currentIndex = product.value.images.indexOf(selectedImage.value)
  if (currentIndex > 0) {
    selectImage(product.value.images[currentIndex - 1])
  }
}

const nextImage = () => {
  if (!product.value) return
  const currentIndex = product.value.images.indexOf(selectedImage.value)
  if (currentIndex < product.value.images.length - 1) {
    selectImage(product.value.images[currentIndex + 1])
  }
}

watch(
  product,
  (data) => {
    selectedImage.value = data?.images?.[0] || ''
    displayedImage.value = data?.images?.[0] || ''
    isSwitchingMainImage.value = false
    productForSeo.value = data
      ? {
          name: data.name,
          description: Object.values(data.specs || {})
            .filter(Boolean)
            .join(' · '),
        }
      : null
  },
  { immediate: true },
)
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
