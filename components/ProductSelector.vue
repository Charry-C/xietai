<template>
  <!-- PC: Dropdown / Mobile: Modal -->
  <div class="product-selector">
    <!-- Trigger Button -->
    <div
      @click="openSelector"
      class="relative w-full border-b border-gray-300 py-3 cursor-pointer flex items-center justify-between group"
    >
      <div class="flex items-center gap-2 flex-1 min-w-0">
        <span v-if="selectedProducts.length === 0" class="text-gray-400">
          {{ placeholder || t('contact.selectProducts') }}
        </span>
        <div v-else class="flex items-center gap-2 flex-wrap">
          <span
            v-for="product in displayProducts"
            :key="product.id"
            class="inline-flex items-center gap-1 bg-brand-navy/10 text-brand-navy text-sm px-2 py-0.5 rounded"
          >
            <span class="truncate max-w-[100px]">{{ product.name }}</span>
            <button
              @click.stop="removeProduct(product.id)"
              class="hover:text-brand-gold transition-colors"
            >
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </span>
          <span v-if="selectedProducts.length > maxDisplay" class="text-xs text-gray-500">
            +{{ selectedProducts.length - maxDisplay }} {{ t('common.more') }}
          </span>
        </div>
      </div>
      <svg
        class="w-5 h-5 text-gray-400 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <!-- PC: Dropdown Panel -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isOpen && !isMobile"
          ref="dropdownRef"
          class="fixed z-50 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
          :style="dropdownStyle"
        >
          <div class="p-3 border-b border-gray-100">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                :placeholder="t('common.search')"
                class="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-navy"
              />
              <svg
                class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div class="max-h-60 overflow-y-auto">
            <!-- All Products Option -->
            <div
              @click="toggleAll"
              class="flex items-center gap-3 px-4 py-3 hover:bg-brand-navy/5 cursor-pointer transition-colors"
              :class="{ 'bg-brand-navy/5': isAllSelected }"
            >
              <div
                class="w-5 h-5 rounded border-2 flex items-center justify-center transition-colors"
                :class="isAllSelected ? 'bg-brand-navy border-brand-navy' : 'border-gray-300'"
              >
                <svg
                  v-if="isAllSelected"
                  class="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span class="font-medium text-brand-navy">{{ t('contact.allProducts') }}</span>
            </div>
            <!-- Product List -->
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              @click="toggleProduct(product)"
              class="flex items-center gap-3 px-4 py-3 hover:bg-brand-navy/5 cursor-pointer transition-colors"
              :class="{ 'bg-brand-navy/5': isSelected(product.id) }"
            >
              <div
                class="w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0"
                :class="
                  isSelected(product.id) ? 'bg-brand-navy border-brand-navy' : 'border-gray-300'
                "
              >
                <svg
                  v-if="isSelected(product.id)"
                  class="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <img
                v-if="product.image"
                :src="product.image"
                :alt="product.name"
                class="w-10 h-10 object-cover rounded"
              />
              <span class="text-gray-700 truncate">{{ product.name }}</span>
            </div>
            <div v-if="filteredProducts.length === 0" class="px-4 py-8 text-center text-gray-400">
              {{ t('common.noResults') }}
            </div>
          </div>
          <div class="p-3 border-t border-gray-100 flex justify-between items-center bg-gray-50">
            <span class="text-sm text-gray-500">
              {{ selectedProducts.length }} {{ t('contact.productsSelected') }}
            </span>
            <button
              @click="closeSelector"
              class="bg-brand-navy text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-gold transition-colors"
            >
              {{ t('common.confirm') }}
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Mobile: Bottom Sheet Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="isOpen && isMobile" class="fixed inset-0 z-50">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/50" @click="closeSelector"></div>
          <!-- Modal Content -->
          <div
            class="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] flex flex-col"
          >
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 class="text-lg font-bold text-brand-navy">{{ t('contact.selectProducts') }}</h3>
              <button
                @click="closeSelector"
                class="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  class="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <!-- Search -->
            <div class="p-4 border-b border-gray-100">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  :placeholder="t('common.search')"
                  class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy"
                />
                <svg
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <!-- Product List -->
            <div class="flex-1 overflow-y-auto p-4">
              <!-- All Products Option -->
              <div
                @click="toggleAll"
                class="flex items-center gap-3 p-3 rounded-xl mb-2 transition-colors"
                :class="isAllSelected ? 'bg-brand-navy text-white' : 'bg-gray-50'"
              >
                <div
                  class="w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors"
                  :class="isAllSelected ? 'bg-white border-white' : 'border-gray-300'"
                >
                  <svg
                    v-if="isAllSelected"
                    class="w-4 h-4 text-brand-navy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="font-medium">{{ t('contact.allProducts') }}</span>
              </div>
              <!-- Products -->
              <div
                v-for="product in filteredProducts"
                :key="product.id"
                @click="toggleProduct(product)"
                class="flex items-center gap-3 p-3 rounded-xl mb-2 transition-colors"
                :class="isSelected(product.id) ? 'bg-brand-navy text-white' : 'bg-gray-50'"
              >
                <div
                  class="w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors shrink-0"
                  :class="isSelected(product.id) ? 'bg-white border-white' : 'border-gray-300'"
                >
                  <svg
                    v-if="isSelected(product.id)"
                    class="w-4 h-4 text-brand-navy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <img
                  v-if="product.image"
                  :src="product.image"
                  :alt="product.name"
                  class="w-12 h-12 object-cover rounded-lg"
                />
                <span class="font-medium truncate">{{ product.name }}</span>
              </div>
              <div v-if="filteredProducts.length === 0" class="py-12 text-center text-gray-400">
                {{ t('common.noResults') }}
              </div>
            </div>
            <!-- Footer -->
            <div class="p-4 border-t border-gray-100 flex items-center justify-between">
              <span class="text-sm text-gray-500">
                {{ selectedProducts.length }} {{ t('contact.productsSelected') }}
              </span>
              <button
                @click="closeSelector"
                class="bg-brand-navy text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-gold transition-colors"
              >
                {{ t('common.confirm') }}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

export interface ProductOption {
  id: string
  name: string
  image?: string
  description?: string
}

interface Props {
  products?: ProductOption[]
  modelValue?: ProductOption[]
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  products: () => [],
  modelValue: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: ProductOption[]): void
  (e: 'change', value: ProductOption[]): void
}>()

const { t } = useI18n()

const isOpen = ref(false)
const searchQuery = ref('')
const isMobile = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const triggerElement = ref<HTMLElement | null>(null)
const dropdownStyle = ref<Record<string, string>>({})

const maxDisplay = 3

const selectedProducts = ref<ProductOption[]>([])

// 初始化选中列表
const initSelectedProducts = () => {
  if (props.modelValue && props.modelValue.length > 0) {
    selectedProducts.value = [...props.modelValue]
  } else {
    selectedProducts.value = []
  }
}

// 组件挂载时初始化
initSelectedProducts()

// 仅在父组件外部更新时同步（通过比较引用避免循环）
watch(
  () => props.modelValue,
  (newVal) => {
    // 只有当外部真正变化时才更新（避免自己emit导致的循环）
    const newIds = (newVal || [])
      .map((p) => p.id)
      .sort()
      .join(',')
    const currentIds = selectedProducts.value
      .map((p) => p.id)
      .sort()
      .join(',')
    if (newIds !== currentIds) {
      selectedProducts.value = [...(newVal || [])]
    }
  },
  { deep: true },
)

// 监听内部变化，emit更新
watch(
  selectedProducts,
  (val) => {
    const valIds = val
      .map((p) => p.id)
      .sort()
      .join(',')
    const propsIds = (props.modelValue || [])
      .map((p) => p.id)
      .sort()
      .join(',')
    // 只有当值真正不同时才emit
    if (valIds !== propsIds) {
      emit('update:modelValue', [...val])
      emit('change', [...val])
    }
  },
  { deep: true },
)

const displayProducts = computed(() => {
  return selectedProducts.value.slice(0, maxDisplay)
})

const filteredProducts = computed(() => {
  if (!searchQuery.value) return props.products
  const query = searchQuery.value.toLowerCase()
  return props.products.filter((p) => p.name.toLowerCase().includes(query))
})

const isAllSelected = computed(() => {
  return selectedProducts.value.length === props.products.length && props.products.length > 0
})

const isSelected = (id: string) => {
  return selectedProducts.value.some((p) => String(p.id) === String(id))
}

const toggleAll = () => {
  if (isAllSelected.value) {
    selectedProducts.value = []
  } else {
    selectedProducts.value = [...props.products]
  }
}

const toggleProduct = (product: ProductOption) => {
  const index = selectedProducts.value.findIndex((p) => String(p.id) === String(product.id))
  if (index === -1) {
    selectedProducts.value = [...selectedProducts.value, product]
  } else {
    selectedProducts.value = selectedProducts.value.filter(
      (p) => String(p.id) !== String(product.id),
    )
  }
}

const removeProduct = (id: string) => {
  selectedProducts.value = selectedProducts.value.filter((p) => String(p.id) !== String(id))
}

const openSelector = (event: MouseEvent) => {
  isOpen.value = true
  if (!isMobile.value) {
    const target = event.currentTarget as HTMLElement
    triggerElement.value = target
    updateDropdownPosition()
    // 添加滚动监听
    window.addEventListener('scroll', updateDropdownPosition, true)
    window.addEventListener('resize', updateDropdownPosition)
  }
}

const closeSelector = () => {
  isOpen.value = false
  searchQuery.value = ''
  // 移除滚动监听
  window.removeEventListener('scroll', updateDropdownPosition, true)
  window.removeEventListener('resize', updateDropdownPosition)
}

const updateDropdownPosition = () => {
  if (triggerElement.value) {
    const rect = triggerElement.value.getBoundingClientRect()
    dropdownStyle.value = {
      top: `${rect.bottom + 8}px`,
      left: `${rect.left}px`,
      width: `${Math.max(rect.width, 320)}px`,
    }
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (!isMobile.value && isOpen.value) {
    const target = event.target as HTMLElement
    if (dropdownRef.value && !dropdownRef.value.contains(target)) {
      const trigger = document.querySelector('.product-selector')
      if (trigger && !trigger.contains(target)) {
        closeSelector()
      }
    }
  }
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('resize', updateDropdownPosition)
  window.removeEventListener('scroll', updateDropdownPosition, true)
  document.removeEventListener('click', handleClickOutside)
})

// Expose removeProduct for parent component
defineExpose({
  removeProduct,
  selectedProducts,
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .absolute.bottom-0,
.modal-leave-active .absolute.bottom-0 {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .absolute.bottom-0,
.modal-leave-to .absolute.bottom-0 {
  transform: translateY(100%);
}
</style>
