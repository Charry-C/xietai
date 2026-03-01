<template>
  <div class="py-12 bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Our Products</h1>
      
      <!-- Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="c in categories"
          :key="c.id"
          @click="selectCategory(c.id)"
          class="px-6 py-2 rounded-full font-medium transition"
          :class="c.id === activeCategory ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'"
        >
          {{ c.name }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="p in products" :key="p.id" class="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group">
          <div class="bg-gray-200 aspect-square flex items-center justify-center text-gray-400">
            <span>Product</span>
          </div>
          <div class="p-4">
            <h3 class="font-bold text-lg mb-1 group-hover:text-blue-600">{{ p.name }}</h3>
            <p class="text-gray-500 text-sm mb-2 line-clamp-2">{{ p.description }}</p>
          </div>
        </div>
      </div>
      
      <div class="mt-12 flex justify-center">
        <div class="products-pagination">
          <el-pagination
            v-model:current-page="currentPage"
            :page-size="pageSize"
            :total="total"
            layout="prev, pager, next"
            background
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { getProducts } from '@/api/product'
import { strapiFetch } from '@/composables/useStrapiFetch'

const currentPage = ref(1)
const pageSize = ref(12)
const total = ref(0)

const { data: categoryRes } = await strapiFetch.get<any>('/categories', {
  query: {
    sort: 'id:asc',
    'pagination[pageSize]': 100
  }
})

const categories = computed(() => categoryRes.value?.data || [])
const activeCategory = ref<number | string | null>(categories.value[0]?.id ?? null)

const products = ref<any[]>([])

const fetchProducts = async () => {
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
}

const selectCategory = (id: number | string) => {
  activeCategory.value = id
  currentPage.value = 1
}

watch([activeCategory, currentPage, pageSize], () => {
  fetchProducts()
}, { immediate: true })
</script>

<style lang="less" scoped>
.products-pagination {
  :deep(.el-pagination.is-background) {
    .el-pager li,
    button {
      width: 36rpx;
      height: 36rpx;
      min-width: 36rpx;
      line-height: 36rpx;
      border-radius: 9999px;
      margin: 0 4rpx;
      background: #ffffff;
      color: #4b5563;
      border: none;
      box-shadow: none;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }

    .el-pager li.is-active {
      background: #2563eb;
      color: #ffffff;
    }

    .el-pager li:not(.is-active):hover,
    button:hover {
      background: #f3f4f6;
      color: #4b5563;
    }
  }

  :deep(.el-pagination .btn-prev .el-icon),
  :deep(.el-pagination .btn-next .el-icon) {
    font-size: 18rpx;
  }
}
</style>
