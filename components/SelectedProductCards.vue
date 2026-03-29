<template>
  <div class="h-full flex flex-col bg-brand-cream">
    <!-- Header -->
    <div class="p-4 border-b border-brand-navy/10">
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
        <h3 class="font-bold text-brand-navy">{{ t('contact.selectedProducts') }}</h3>
        <span class="text-xs text-white bg-brand-navy px-2 py-0.5 rounded-full">{{
          products.length
        }}</span>
      </div>
    </div>

    <!-- Scrollable Product List -->
    <div class="flex-1 overflow-y-auto p-4 space-y-3">
      <TransitionGroup name="list">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-300"
        >
          <div class="flex gap-3 p-3">
            <!-- Product Image -->
            <div class="relative shrink-0">
              <div class="w-16 h-16 rounded-lg overflow-hidden">
                <img
                  v-if="product.image"
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-full object-cover"
                />
                <div v-else class="w-full h-full bg-gray-100 flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Product Info -->
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold text-brand-navy text-sm truncate">{{ product.name }}</h4>
              <p v-if="product.description" class="text-xs text-gray-500 mt-1 line-clamp-2">
                {{ product.description }}
              </p>
            </div>

            <!-- Remove Button -->
            <button
              @click="removeProduct(product.id)"
              class="shrink-0 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 opacity-0 group-hover:opacity-100"
              :aria-label="t('contact.removeProduct')"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </TransitionGroup>

      <!-- Empty State -->
      <div v-if="products.length === 0" class="text-center py-12">
        <div
          class="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <svg class="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <p class="text-gray-400 text-sm">{{ t('contact.noProductsSelected') }}</p>
        <p class="text-gray-300 text-xs mt-1">{{ t('contact.selectProductsHint') }}</p>
      </div>
    </div>

    <!-- Footer Actions -->
    <div v-if="products.length > 0" class="p-4 border-t border-brand-navy/10 bg-white/50">
      <button
        @click="clearAll"
        class="w-full text-center text-sm text-gray-500 hover:text-brand-navy transition-colors py-2"
      >
        {{ t('contact.clearAll') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductOption } from './ProductSelector.vue'

interface Props {
  products: ProductOption[]
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'remove', id: string): void
  (e: 'clear'): void
}>()

const { t } = useI18n()

const removeProduct = (id: string) => {
  emit('remove', id)
}

const clearAll = () => {
  emit('clear')
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
