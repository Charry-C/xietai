<template>
  <div class="bg-brand-cream min-h-screen">
    <!-- Page Header -->
    <section class="bg-brand-navy text-white pt-32 pb-20 text-center relative overflow-hidden">
      <div v-if="bannerBgUrl" class="absolute inset-0">
        <img
          :src="bannerBgUrl"
          class="w-full h-full object-cover opacity-20"
          :alt="t('hero.banner')"
        />
      </div>
      <div v-else class="absolute inset-0 bg-brand-navy opacity-20"></div>
      <div class="container mx-auto px-6 relative z-10">
        <span
          class="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in-up"
          >{{ t('hero.contactTagline') }}</span
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

    <div class="container mx-auto px-6 py-20">
      <div class="max-w-7xl mx-auto bg-white shadow-2xl overflow-hidden">
        <div class="flex flex-col lg:flex-row">
          <!-- Left: Contact Info -->
          <div
            class="bg-brand-navy text-white p-8 lg:p-12 lg:w-[280px] shrink-0 relative overflow-hidden"
          >
            <!-- Decorative Pattern -->
            <div
              class="absolute inset-0 opacity-10"
              style="
                background-image: radial-gradient(#c5a059 1px, transparent 1px);
                background-size: 20px 20px;
              "
            ></div>

            <div class="relative z-10">
              <h2 class="text-2xl font-serif font-bold mb-6 text-brand-gold">{{ connectTitle }}</h2>
              <p class="text-white/70 mb-8 leading-relaxed text-sm">{{ connectDescription }}</p>

              <div class="space-y-6">
                <div v-for="item in contacts" :key="item.type" class="flex items-start group">
                  <div
                    class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-brand-gold transition-colors duration-300 shrink-0"
                  >
                    <!-- Phone -->
                    <svg
                      v-if="item.type === 'phone'"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-brand-gold group-hover:text-brand-navy transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <!-- Email -->
                    <svg
                      v-else-if="item.type === 'email'"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-brand-gold group-hover:text-brand-navy transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <!-- Address / Default -->
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-brand-gold group-hover:text-brand-navy transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-sm mb-1">{{ item.label }}</h3>
                    <p class="text-white/60 font-light text-sm">{{ item.value }}</p>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div
                v-if="socials.length"
                class="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-4"
              >
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.url || '#'"
                  class="text-white/40 hover:text-brand-gold transition-colors text-sm"
                >
                  {{ social.name }}
                </a>
              </div>
            </div>
          </div>

          <!-- Middle: Form -->
          <div class="flex-1 p-8 lg:p-12 bg-white">
            <form class="space-y-6" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="relative group">
                  <input
                    v-model="formData.firstName"
                    type="text"
                    id="first-name"
                    class="peer w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-navy transition-colors bg-transparent placeholder-transparent"
                    :placeholder="t('contact.firstName')"
                    required
                  />
                  <label
                    for="first-name"
                    class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-navy peer-focus:text-sm"
                    >{{ t('contact.firstName') }}</label
                  >
                </div>
                <div class="relative group">
                  <input
                    v-model="formData.lastName"
                    type="text"
                    id="last-name"
                    class="peer w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-navy transition-colors bg-transparent placeholder-transparent"
                    :placeholder="t('contact.lastName')"
                  />
                  <label
                    for="last-name"
                    class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-navy peer-focus:text-sm"
                    >{{ t('contact.lastName') }}</label
                  >
                </div>
              </div>

              <div class="relative group">
                <input
                  v-model="formData.email"
                  type="email"
                  id="email"
                  class="peer w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-navy transition-colors bg-transparent placeholder-transparent"
                  :placeholder="t('contact.emailAddress')"
                  required
                />
                <label
                  for="email"
                  class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-navy peer-focus:text-sm"
                  >{{ t('contact.emailAddress') }}</label
                >
              </div>

              <!-- Product Selector (replaces subject) -->
              <div class="relative">
                <label class="block text-sm text-gray-500 mb-2">{{
                  t('contact.interestedProducts')
                }}</label>
                <ProductSelector
                  ref="productSelectorRef"
                  v-model="selectedProducts"
                  :products="productOptions"
                  :placeholder="t('contact.selectProductsPlaceholder')"
                />
              </div>

              <div class="relative group">
                <textarea
                  v-model="formData.message"
                  id="message"
                  rows="4"
                  class="peer w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-navy transition-colors bg-transparent placeholder-transparent resize-none"
                  :placeholder="t('contact.message')"
                  required
                ></textarea>
                <label
                  for="message"
                  class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-navy peer-focus:text-sm"
                  >{{ t('contact.message') }}</label
                >
              </div>

              <!-- Status Messages -->
              <div
                v-if="submitStatus === 'success'"
                class="p-4 bg-green-50 border border-green-200 rounded text-green-700"
              >
                {{ t('contact.successMessage') }}
              </div>
              <div
                v-if="submitStatus === 'error'"
                class="p-4 bg-red-50 border border-red-200 rounded text-red-700"
              >
                {{ t('contact.errorMessage') }}
              </div>

              <div class="pt-4">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="bg-brand-navy text-white px-10 py-4 font-bold tracking-wide hover:bg-brand-gold transition-colors duration-300 shadow-lg w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ isSubmitting ? t('contact.sending') : t('contact.sendMessage') }}
                </button>
              </div>
            </form>
          </div>

          <!-- Right: Selected Products -->
          <div
            class="lg:w-[280px] shrink-0 border-l border-gray-100 lg:block"
            :class="{ hidden: selectedProducts.length === 0 }"
          >
            <SelectedProductCards
              :products="selectedProducts"
              @remove="handleRemoveProduct"
              @clear="handleClearProducts"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getContactData, type ContactData } from '@/api/contact'
import { getProducts } from '@/api/product'
import { getStrapiImage } from '@/utils/index'
import ProductSelector from '@/components/ProductSelector.vue'
import SelectedProductCards from '@/components/SelectedProductCards.vue'
import type { ProductOption } from '@/components/ProductSelector.vue'
import { computed, ref, onMounted } from 'vue'

// SEO 配置 - 联系我们（外贸询盘）
useSeo({
  title: 'Contact Us - Get Factory Quote',
  description:
    'Request fabric quotes from China textile factory. B2B inquiry for bulk orders, OEM/ODM production. Fast response within 24 hours. Export to worldwide markets.',
  keywords: [
    'fabric quote request',
    'textile inquiry China',
    'bulk fabric inquiry',
    'B2B fabric contact',
    'wholesale fabric quote',
    'textile factory contact',
    'fabric MOQ inquiry',
    'textile export inquiry',
    'fabric sample request',
    'OEM textile quotation',
  ],
  image: '/og-image.png',
})

// 结构化数据 - ContactPage
useJsonLd({
  type: 'Organization',
  name: 'Xietai Textile',
  description: 'China textile factory - Contact for B2B fabric inquiries and wholesale quotes',
})

const { t } = useI18n()

// 处理产品询价信息
const route = useRoute()
const router = useRouter()

// 选中的产品
const selectedProducts = ref<ProductOption[]>([])

// 产品选项列表（懒加载，避免阻塞页面跳转）
const { data: productsResponse } = getProducts<any>({
  lazy: true,
  default: () => ({ data: [], meta: {} }),
  query: {
    fields: ['name', 'description', 'documentId'],
    'populate[image][fields][0]': 'url',
    'pagination[pageSize]': 100,
  },
})

const productOptions = computed<ProductOption[]>(() => {
  const raw = productsResponse.value?.data
  const items = Array.isArray(raw) ? raw : raw ? [raw] : []
  return items.map((item: any) => {
    const attributes = item.attributes || item
    const rawImages = attributes.image || []
    const imageList = Array.isArray(rawImages) ? rawImages : [rawImages]
    const imageUrl = imageList[0] ? getStrapiImage([imageList[0]], 'thumbnail') : ''

    return {
      id: item.documentId || String(item.id),
      name: attributes.name || '',
      image: imageUrl,
      description: attributes.description || '',
    }
  })
})

// 从 URL query 参数获取产品信息并添加到选中列表
onMounted(() => {
  const { productId, productName, productImage } = route.query

  if (productId && productName) {
    const product: ProductOption = {
      id: productId as string,
      name: decodeURIComponent(productName as string),
      image: productImage ? decodeURIComponent(productImage as string) : '',
      description: '',
    }

    // 添加到选中列表
    selectedProducts.value = [product]

    // 清除 URL 中的 query 参数
    router.replace({ query: {} })
  }
})

const handleRemoveProduct = (id: string) => {
  selectedProducts.value = selectedProducts.value.filter((p) => String(p.id) !== String(id))
}

const handleClearProducts = () => {
  selectedProducts.value = []
}

const config = useRuntimeConfig()
const baseUrl = config.public.base || ''
const getFullUrl = (url: string) => {
  if (!url) return ''
  return url.startsWith('http') ? url : `${baseUrl}${url}`
}

const { data: contactResponse } = getContactData({
  lazy: true,
  default: () => ({ data: null, meta: {} }),
})

const contactData = computed<ContactData | null>(() => {
  return contactResponse.value?.data || null
})

// Banner
const bannerTitle = computed(() => contactData.value?.banner?.title || t('contact.contactUs'))
const bannerSubTitle = computed(
  () => contactData.value?.banner?.subTitle || t('contact.bannerSubtitleFallback'),
)
const bannerBgUrl = computed(() => {
  const bg = contactData.value?.banner?.background
  return bg?.url ? getFullUrl(bg.url) : null
})

// Connect
const connectTitle = computed(() => contactData.value?.connect?.title || t('contact.getInTouch'))
const connectDescription = computed(
  () => contactData.value?.connect?.description || t('contact.connectDescriptionFallback'),
)

const contacts = computed(() => contactData.value?.connect?.commonConnect?.contacts || [])
const socials = computed(() => contactData.value?.connect?.mediaConnect?.socials || [])

// 获取配置的邮箱地址
const targetEmail = computed(() => {
  const emailContact = contacts.value.find((c) => c.type === 'email')
  return emailContact?.value || ''
})

// 表单数据
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

// 生成邮件主题
const emailSubject = computed(() => {
  if (selectedProducts.value.length === 0) {
    return 'General Inquiry'
  } else if (selectedProducts.value.length === 1) {
    return `Inquiry: ${selectedProducts.value[0].name}`
  } else {
    return `Inquiry: ${selectedProducts.value.length} Products`
  }
})

// 提交表单
const handleSubmit = async () => {
  if (isSubmitting.value) return

  if (!formData.value.firstName || !formData.value.email || !formData.value.message) {
    return
  }

  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    await $fetch('/api/send-email', {
      method: 'POST',
      body: {
        to: targetEmail.value,
        ...formData.value,
        subject: emailSubject.value,
        products: selectedProducts.value.map((p) => p.name),
      },
    })
    submitStatus.value = 'success'
    // 重置表单
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }
    selectedProducts.value = []
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
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
