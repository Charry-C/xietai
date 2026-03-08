<template>
  <div class="min-h-screen bg-brand-cream pb-20 pt-8">
    <div class="container mx-auto px-6">
      <!-- Breadcrumbs -->
      <nav class="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <NuxtLink to="/" class="hover:text-brand-gold transition-colors">Home</NuxtLink>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <NuxtLink to="/products" class="ml-1 hover:text-brand-gold transition-colors">Products</NuxtLink>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span class="ml-1 text-gray-700 font-medium truncate max-w-[200px] md:max-w-xs">{{ product?.name || 'Loading...' }}</span>
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
            <img 
              :src="activeImage" 
              :alt="product.name" 
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            >
          </div>
          
          <!-- Thumbnails -->
          <div class="flex items-center gap-4">
            <!-- Left Arrow -->
            <button 
              @click="prevImage"
              class="flex-shrink-0 w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shadow-lg hover:bg-brand-gold transition-colors z-10"
              :class="{ 'opacity-50 cursor-not-allowed': product.images.indexOf(activeImage) === 0 }"
              :disabled="product.images.indexOf(activeImage) === 0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
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
                  @click="activeImage = img"
                  :ref="(el) => { if(activeImage === img) activeThumbnail = el as HTMLElement }"
                  class="flex-shrink-0 w-24 h-24 border-2 transition-all duration-300 overflow-hidden relative snap-start"
                  :class="activeImage === img ? 'border-brand-gold ring-1 ring-brand-gold' : 'border-transparent hover:border-brand-navy/20'"
                >
                  <img :src="img" class="w-full h-full object-cover" :alt="`View ${idx + 1}`">
                  <div v-if="activeImage === img" class="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold"></div>
                </button>
              </div>
            </div>
            
            <!-- Right Arrow -->
            <button 
              @click="nextImage"
              class="flex-shrink-0 w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shadow-lg hover:bg-brand-gold transition-colors z-10"
              :class="{ 'opacity-50 cursor-not-allowed': product.images.indexOf(activeImage) === product.images.length - 1 }"
              :disabled="product.images.indexOf(activeImage) === product.images.length - 1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
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
            <div v-for="(value, key) in product.specs" :key="key" class="grid grid-cols-[140px_1fr] gap-4 py-1 border-b border-brand-navy/5 last:border-0">
              <span class="font-medium text-brand-navy/60">{{ formatKey(key) }}:</span>
              <span>{{ value }}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-4 mt-8">
            <button class="bg-brand-navy text-white px-8 py-4 font-bold tracking-wider hover:bg-brand-gold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
              INQUIRE NOW
            </button>
            <button @click="nextProduct" class="bg-white border border-brand-navy text-brand-navy px-8 py-4 font-bold tracking-wider hover:bg-brand-navy hover:text-white transition-all duration-300 text-center">
              NEXT PRODUCT
            </button>
          </div>
        </div>
      </div>
      
      <!-- Not Found -->
      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-serif text-brand-navy">Product not found</h2>
        <NuxtLink to="/products" class="text-brand-gold hover:underline mt-4 inline-block">Back to Products</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProduct } from '@/api/product'
import { getStrapiImage } from '@/utils/index'

const route = useRoute()
const router = useRouter()
const loading = ref(true)

// Interface based on the user's image data
interface Product {
  id: string
  name: string
  images: string[]
  specs: Record<string, string>
}

const product = ref<Product | null>(null)
const activeImage = ref('')
const activeThumbnail = ref<HTMLElement | null>(null)
const thumbnailContainer = ref<HTMLElement | null>(null)

// Watch activeImage to scroll thumbnail into view
watch(activeImage, () => {
  if (activeThumbnail.value && thumbnailContainer.value) {
    activeThumbnail.value.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
}, { flush: 'post' })

const fetchProduct = async (id: string) => {
  try {
    const { data } = await getProduct<any>(id, {
      query: { populate: '*' },
      server: false
    })
    
    if (!data.value || !data.value.data) return null
    
    const item = data.value.data
    // Handle both v4 (attributes) and v5 (flat) structures
    const attributes = item.attributes || item
    
    // Process images
    // Assuming 'image' is the field name for product images
    const rawImages = attributes.image || []
    // Ensure rawImages is an array (Strapi might return a single object for single media field)
    const imageList = Array.isArray(rawImages) ? rawImages : [rawImages]
    
    const images = imageList
      .filter((img: any) => img) // Filter out nulls
      .map((img: any) => getStrapiImage([img], 'large'))
      .filter((url: string) => url) // Filter out empty URLs
    
    return {
      id: item.id,
      name: attributes.name,
      images: images,
      // Mock specs as requested
      specs: {
        'Material': 'Rayon / Linen, linen',
        'Pattern': 'Plain Dyed',
        'Use': 'Home Textile, Bedding, Curtain, Cushion, Sofa, Dress, Shirt, Baby&Toddler, Diapers, Hospital, Hygiene, Upholstery, Toy',
        'Place of Origin': 'China',
        'Applicable to the Crowd': 'Women, Men, Girls, Boys, Infant/Baby',
        'Density': '60*58',
        'Supply Type': 'Make-To-Order',
        'Technics': 'Woven',
        'Thickness': 'Lightweight',
        'Type': 'Printing Fabric',
        'Weight': '140GSM',
        'Width': '53/54"',
        'Yarn Count': '20*20',
        'Product name': 'Linen Rayon Viscose Fabric',
        'Usage': 'Clothing',
        'Color': 'Customized Color',
        'MOQ': '1 Meter',
        'Design': 'Accept Custom Designs',
        'Quality': 'High Grade Linen Fabric',
        'Packing': 'Roll Packing',
        'OEM & ODM': 'WELCOMED'
      }
    }
  } catch (e) {
    console.error('Error fetching product:', e)
    return null
  }
}

const formatKey = (key: string) => {
  return key
}

const nextProduct = () => {
  // Logic to go to next product - for now just reload with same data to simulate
  // In real app, this would find the next ID
  router.push('/products')
}

const prevImage = () => {
  if (!product.value) return
  const currentIndex = product.value.images.indexOf(activeImage.value)
  if (currentIndex > 0) {
    activeImage.value = product.value.images[currentIndex - 1]
  }
}

const nextImage = () => {
  if (!product.value) return
  const currentIndex = product.value.images.indexOf(activeImage.value)
  if (currentIndex < product.value.images.length - 1) {
    activeImage.value = product.value.images[currentIndex + 1]
  }
}

onMounted(async () => {
  loading.value = true
  try {
    const data = await fetchProduct(route.params.id as string)
    product.value = data
    if (data.images.length > 0) {
      activeImage.value = data.images[0]
    }
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
