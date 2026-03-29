<template>
  <div class="min-h-screen bg-brand-cream flex items-center justify-center px-4">
    <div class="text-center max-w-2xl mx-auto">
      <!-- 404 Number -->
      <div class="mb-8">
        <span
          class="text-[180px] md:text-[240px] font-serif font-bold text-brand-navy/5 leading-none"
        >
          404
        </span>
      </div>

      <!-- Error Message -->
      <h1 class="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-6">
        {{ t('error.pageNotFound') }}
      </h1>

      <p class="text-gray-600 text-lg mb-10 leading-relaxed">
        {{ t('error.pageNotFoundDescription') }}
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink
          :to="localePath('/')"
          class="bg-brand-navy text-white px-8 py-4 font-bold tracking-wider hover:bg-brand-gold transition-colors duration-300 shadow-lg"
        >
          {{ t('error.backToHome') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/products')"
          class="border border-brand-navy text-brand-navy px-8 py-4 font-bold tracking-wider hover:bg-brand-navy hover:text-white transition-colors duration-300"
        >
          {{ t('error.browseProducts') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO 配置 - 404 页面需要 noindex
useSeo({
  title: 'Page Not Found',
  description:
    'The page you are looking for does not exist. Return to Xietai Textile homepage to explore our premium fabrics.',
  noindex: true,
})

const { t } = useI18n()
const localePath = useLocalePath()
</script>
