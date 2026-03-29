<template>
  <div class="min-h-screen bg-brand-cream">
    <!-- Page Header -->
    <section class="bg-brand-navy text-white pt-32 pb-20 relative overflow-hidden">
      <div v-if="bannerBgUrl" class="absolute inset-0">
        <img
          :src="bannerBgUrl"
          class="w-full h-full object-cover opacity-20"
          :alt="t('hero.banner')"
        />
      </div>
      <div
        v-else
        class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620799140408-ed5341cd2431?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"
      ></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <span
          class="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in-up"
          >{{ t('hero.productsTagline') }}</span
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

    <div class="container mx-auto px-6 py-12">
      <!-- Categories Filter -->
      <div class="hidden md:flex flex-wrap justify-center gap-4 mb-16">
        <button
          @click="selectCategory(null)"
          class="px-8 py-3 rounded-full font-medium transition-all duration-300 border"
          :class="
            activeCategory === null
              ? 'bg-brand-gold border-brand-gold text-white shadow-lg'
              : 'bg-transparent border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:text-brand-gold'
          "
        >
          {{ t('common.allCollections') }}
        </button>
        <button
          v-for="c in categories"
          :key="c.id"
          @click="selectCategory(c.id)"
          class="px-8 py-3 rounded-full font-medium transition-all duration-300 border"
          :class="
            activeCategory === c.id
              ? 'bg-brand-gold border-brand-gold text-white shadow-lg'
              : 'bg-transparent border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:text-brand-gold'
          "
        >
          {{ c.attributes?.name || c.name || t('common.category') }}
        </button>
      </div>

      <!-- Mobile Categories Filter -->
      <div class="md:hidden flex items-center justify-between mb-8 relative">
        <el-button
          @click="showFilterModal = true"
          class="!rounded-full !px-4 !border-brand-navy/20 !text-brand-navy hover:!border-brand-gold hover:!text-brand-gold"
          plain
        >
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </template>
          {{ t('common.filter') }}
        </el-button>

        <span
          class="absolute left-1/2 -translate-x-1/2 font-serif font-bold text-brand-navy text-lg"
        >
          {{ currentCategoryName }}
        </span>
      </div>

      <!-- Mobile Filter Drawer -->
      <client-only>
        <el-drawer
          v-model="showFilterModal"
          direction="btt"
          size="auto"
          :with-header="false"
          class="mobile-filter-drawer !rounded-t-2xl"
        >
          <div>
            <div class="flex justify-center items-center mb-6">
              <h3 class="text-xl font-serif font-bold text-brand-navy">
                {{ t('common.selectCategory') }}
              </h3>
            </div>

            <div class="space-y-2 max-h-[60vh] overflow-y-auto">
              <div
                @click="selectCategory(null)"
                class="w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                :class="
                  activeCategory === null
                    ? 'bg-brand-gold/10 text-brand-gold font-bold'
                    : 'text-gray-600 hover:bg-gray-50'
                "
              >
                {{ t('common.allCollections') }}
                <svg
                  v-if="activeCategory === null"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div
                v-for="c in categories"
                :key="c.id"
                @click="selectCategory(c.id)"
                class="w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                :class="
                  activeCategory === c.id
                    ? 'bg-brand-gold/10 text-brand-gold font-bold'
                    : 'text-gray-600 hover:bg-gray-50'
                "
              >
                {{ c.attributes?.name || c.name || t('common.category') }}
                <svg
                  v-if="activeCategory === c.id"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </el-drawer>
      </client-only>

      <client-only>
        <!-- Loading State -->
        <div
          v-if="loading"
          class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 items-start"
        >
          <div v-for="n in 8" :key="n" class="animate-pulse">
            <div class="bg-gray-200 aspect-[3/4] rounded-sm mb-4"></div>
            <div class="h-4 bg-gray-200 w-3/4 mb-2 rounded"></div>
            <div class="h-3 bg-gray-200 w-1/2 rounded"></div>
          </div>
        </div>

        <!-- Products Grid -->

        <div
          v-else-if="products.length > 0"
          class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 items-start"
        >
          <NuxtLink
            v-for="(p, index) in products"
            :key="p.id"
            :to="localePath(`/products/${p.documentId}`)"
            class="group cursor-pointer block min-w-0"
            :style="{ animationDelay: `${index * 50}ms` }"
          >
            <div
              class="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500"
            >
              <!-- Image -->
              <img
                :src="p.attributes?.url || p.url"
                :alt="p.attributes?.name || p.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <!-- Overlay Action -->
              <div
                class="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <span
                  class="bg-white text-brand-navy px-6 py-3 font-bold text-sm tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  {{ t('common.viewDetails') }}
                </span>
              </div>

              <!-- Badge (Optional logic) -->
              <div
                v-if="index < 2"
                class="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 uppercase tracking-wider"
              >
                {{ t('common.new') }}
              </div>
            </div>

            <div class="text-center group-hover:-translate-y-1 transition-transform duration-300">
              <h3
                class="text-base md:text-xl font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors"
              >
                {{ p.attributes?.name || p.name }}
              </h3>
              <p class="md:text-sm text-gray-500 text-sm line-clamp-2 px-4">
                {{
                  p.attributes?.description || p.description || t('products.descriptionFallback')
                }}
              </p>
            </div>
          </NuxtLink>
        </div>
        <!-- Empty State -->
        <div v-else class="text-center py-20">
          <div class="inline-block p-6 rounded-full bg-gray-100 mb-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h3 class="text-xl font-serif font-bold text-brand-navy mb-2">
            {{ t('products.noProductsFound') }}
          </h3>
          <p class="text-gray-500">
            {{ t('products.tryDifferentCategory') }}
          </p>
        </div>
      </client-only>
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
import { ref, computed } from 'vue'
import { fetchProductsApi, getProductPage, type ProductPageData } from '@/api/product'
import { strapiRequest } from '@/composables/useStrapiFetch'
import { useLocale } from '@/composables/useLocale'

const config = useRuntimeConfig()
const baseUrl = config.public.base || ''
const { t } = useI18n()
const localePath = useLocalePath()
const { strapiLocale } = useLocale()
const getFullUrl = (url: string) => {
  if (!url) return ''
  return url.startsWith('http') ? url : `${baseUrl}${url}`
}

// Fetch product page data (banner)
const { data: productPageResponse } = await getProductPage()
const productPageData = computed<ProductPageData | null>(() => {
  return productPageResponse.value?.data || null
})

const bannerTitle = computed(
  () => productPageData.value?.banner?.title || t('products.bannerTitleFallback'),
)
const bannerSubTitle = computed(
  () => productPageData.value?.banner?.subTitle || t('products.bannerSubtitleFallback'),
)
const bannerBgUrl = computed(() => {
  const bg = productPageData.value?.banner?.background
  return bg?.url ? getFullUrl(bg.url) : null
})

const loading = ref(true)
const currentPage = ref(1)
const pageSize = ref(6)
const total = ref(0)
const categories = ref<any[]>([])
const activeCategory = ref<number | string | null>(null)
const products = ref<any[]>([])

const showFilterModal = ref(false)

const currentCategoryName = computed(() => {
  if (activeCategory.value === null) return t('common.allCollections')
  const category = categories.value.find((c: any) => c.id === activeCategory.value)
  return category?.attributes?.name || category?.name || t('common.category')
})

// Fetch Categories - uses $fetch for both SSR and client
const fetchCategories = async () => {
  try {
    const { data, error } = await strapiRequest<any>(
      '/categories',
      'get',
      {
        sort: 'id:asc',
        'pagination[pageSize]': 100,
      },
      undefined,
      strapiLocale.value,
    )
    if (error) {
      console.error('Error fetching categories:', error)
      return
    }
    categories.value = data?.data || []
  } catch (e) {
    console.error('Error fetching categories:', e)
  }
}

// Fetch Products - uses $fetch for both SSR and client
const fetchProducts = async () => {
  loading.value = true
  try {
    const query: Record<string, any> = {
      'pagination[page]': currentPage.value,
      'pagination[pageSize]': pageSize.value,
      populate: '*',
    }

    if (activeCategory.value) {
      query['filters[category][id][$eq]'] = activeCategory.value
    }

    const { data, error } = await fetchProductsApi<any>(query, strapiLocale.value)
    if (error) {
      console.error('Error fetching products:', error)
      return
    }

    const list = data?.data ?? []
    products.value = list.map((item: any) => {
      // Handle Strapi v5 image format (image.data or image directly)
      const imageData = item.image?.data || item.image
      return {
        ...item,
        url: getStrapiImage(imageData, 'large'),
      }
    })

    total.value = data?.meta?.pagination?.total ?? 0
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
  showFilterModal.value = false
  if (activeCategory.value === id) return
  activeCategory.value = id
  currentPage.value = 1
  fetchProducts()
}

const handlePageChange = (page: number) => {
  currentPage.value = page
  fetchProducts()
}

await Promise.all([fetchCategories(), fetchProducts()])
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
      border-radius: 50%;
      /* Circle for modern look */
      margin: 0 6px;
      background: transparent;
      color: #0f172a;
      /* Brand Navy */
      border: 1px solid #e5e7eb;
      transition: all 0.3s ease;

      &:hover {
        border-color: #d4af37;
        /* Brand Gold */
        color: #d4af37;
      }

      &.is-active {
        background: #0f172a;
        /* Brand Navy */
        border-color: #0f172a;
        color: #ffffff;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
  &:deep(.el-icon) {
    margin: 10px !important;
  }
}

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
