<template>
  <div class="min-h-screen bg-brand-cream">
    <!-- Page Header -->
    <div class="bg-brand-navy text-white pt-32 pb-16 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620799140408-ed5341cd2431?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-serif font-bold mb-4">Our Collections</h1>
        <p class="text-lg text-white/60 max-w-2xl mx-auto">Explore our range of premium textiles, crafted for excellence and designed for distinction.</p>
      </div>
    </div>

    <div class="container mx-auto px-6 py-12">
      <!-- Categories Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button
          @click="selectCategory(null)"
          class="px-8 py-3 rounded-full font-medium transition-all duration-300 border"
          :class="activeCategory === null 
            ? 'bg-brand-gold border-brand-gold text-white shadow-lg' 
            : 'bg-transparent border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:text-brand-gold'"
        >
          All Collections
        </button>
        <button
          v-for="c in categories"
          :key="c.id"
          @click="selectCategory(c.id)"
          class="px-8 py-3 rounded-full font-medium transition-all duration-300 border"
          :class="activeCategory === c.id 
            ? 'bg-brand-gold border-brand-gold text-white shadow-lg' 
            : 'bg-transparent border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:text-brand-gold'"
        >
          {{ c.attributes?.name || c.name || 'Category' }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="n in 8" :key="n" class="animate-pulse">
          <div class="bg-gray-200 aspect-[3/4] rounded-sm mb-4"></div>
          <div class="h-4 bg-gray-200 w-3/4 mb-2 rounded"></div>
          <div class="h-3 bg-gray-200 w-1/2 rounded"></div>
        </div>
      </div>

      <!-- Products Grid -->
      <div v-else-if="products.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        <div 
          v-for="(p, index) in products" 
          :key="p.id" 
          class="group cursor-pointer"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          <div class="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
            <!-- Image -->
            <img 
              :src="p.attributes?.url || p.url || 'https://images.unsplash.com/photo-1596205847326-17b5f902403b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'" 
              :alt="p.attributes?.name || p.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <!-- Overlay Action -->
            <div class="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="bg-white text-brand-navy px-6 py-3 font-bold text-sm tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Details
              </span>
            </div>
            
            <!-- Badge (Optional logic) -->
            <div v-if="index < 2" class="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
              New
            </div>
          </div>

          <div class="text-center group-hover:-translate-y-1 transition-transform duration-300">
            <span class="text-xs text-gray-500 uppercase tracking-widest mb-2 block">
              {{ p.attributes?.category?.data?.attributes?.name || 'Textile' }}
            </span>
            <h3 class="text-xl font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">
              {{ p.attributes?.name || p.name }}
            </h3>
            <p class="text-gray-500 text-sm line-clamp-2 px-4">
              {{ p.attributes?.description || p.description || 'High-quality fabric suitable for various applications.' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <div class="inline-block p-6 rounded-full bg-gray-100 mb-4 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 class="text-xl font-serif font-bold text-brand-navy mb-2">No products found</h3>
        <p class="text-gray-500">Try selecting a different category or check back later.</p>
      </div>
      
      <!-- Pagination -->
      <div class="mt-20 flex justify-center" v-if="total > pageSize">
        <div class="products-pagination">
          <el-pagination
            v-model:current-page="currentPage"
            :page-size="pageSize"
            :total="total"
            layout="prev, pager, next"
            background
            @current-change="handlePageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { getProducts } from '@/api/product'
import { strapiFetch } from '@/composables/useStrapiFetch'

const loading = ref(true)
const currentPage = ref(1)
const pageSize = ref(12)
const total = ref(0)
const categories = ref<any[]>([])
const activeCategory = ref<number | string | null>(null)
const products = ref<any[]>([])

// Fetch Categories
const fetchCategories = async () => {
  try {
    const { data } = await strapiFetch.get<any>('/categories', {
      query: {
        sort: 'id:asc',
        'pagination[pageSize]': 100
      }
    })
    categories.value = data.value?.data || []
    
    // Default to first category if available, or keep null for "All"
    // activeCategory.value = categories.value[0]?.id ?? null 
    // Let's default to null (All) for better UX unless specified otherwise
  } catch (e) {
    console.error('Error fetching categories:', e)
  }
}

// Fetch Products
const fetchProducts = async () => {
  loading.value = true
  try {
    const query: Record<string, any> = {
      'pagination[page]': currentPage.value,
      'pagination[pageSize]': pageSize.value,
      'populate': '*',
    }
    
    if (activeCategory.value) {
      query['filters[category][id][$eq]'] = activeCategory.value
    }
    
    const { data } = await getProducts<any>({ query })
    products.value = data.value?.data ?? []
    total.value = data.value?.meta?.pagination?.total ?? 0
  } catch (e) {
    console.error('Error fetching products:', e)
  } finally {
    loading.value = false
    // Scroll to top of grid
    if (process.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

const selectCategory = (id: number | string | null) => {
  if (activeCategory.value === id) return
  activeCategory.value = id
  currentPage.value = 1
  fetchProducts()
}

const handlePageChange = (page: number) => {
  currentPage.value = page
  fetchProducts()
}

onMounted(async () => {
  await fetchCategories()
  await fetchProducts()
})
</script>

<style lang="less" scoped>
.products-pagination {
  :deep(.el-pagination.is-background) {
    .el-pager li,
    button {
      width: 40px;
      height: 40px;
      min-width: 40px;
      line-height: 40px;
      border-radius: 50%; /* Circle for modern look */
      margin: 0 6px;
      background: transparent;
      color: #0F172A; /* Brand Navy */
      border: 1px solid #E5E7EB;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: #D4AF37; /* Brand Gold */
        color: #D4AF37;
      }
      
      &.is-active {
        background: #0F172A; /* Brand Navy */
        border-color: #0F172A;
        color: #ffffff;
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
}
</style>
