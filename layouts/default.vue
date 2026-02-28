<template>
  <div class="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
    
    <!-- Top Bar (B2B Style) -->
    <div class="bg-gray-100 text-gray-600 text-sm py-2 border-b border-gray-200 hidden md:block">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex space-x-6">
          <span class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@tradecorp.com
          </span>
          <span class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +86 123 4567 8901
          </span>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-blue-600">LinkedIn</a>
          <a href="#" class="hover:text-blue-600">Facebook</a>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-blue-900 flex items-center">
          <span class="bg-blue-900 text-white p-1 mr-2 rounded">TC</span>
          TRADE CORP
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex space-x-8 font-medium">
          <NuxtLink to="/" class="hover:text-blue-600 transition py-2 border-b-2 border-transparent hover:border-blue-600">Home</NuxtLink>
          <NuxtLink to="/products" class="hover:text-blue-600 transition py-2 border-b-2 border-transparent hover:border-blue-600">Products</NuxtLink>
          <NuxtLink to="/services" class="hover:text-blue-600 transition py-2 border-b-2 border-transparent hover:border-blue-600">Services</NuxtLink>
          <NuxtLink to="/about" class="hover:text-blue-600 transition py-2 border-b-2 border-transparent hover:border-blue-600">About Us</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-blue-600 transition py-2 border-b-2 border-transparent hover:border-blue-600">Contact</NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          aria-controls="mobile-menu"
          class="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg
            v-if="!mobileOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <transition name="mobile-menu-slide">
        <div
          v-if="mobileOpen"
          id="mobile-menu"
          class="md:hidden fixed left-0 right-0 top-16 z-50 border-t border-gray-200 bg-white"
        >
          <nav class="container mx-auto px-4 py-3 space-y-1 font-medium">
            <NuxtLink to="/" class="block py-2 hover:text-blue-600 transition">Home</NuxtLink>
            <NuxtLink to="/products" class="block py-2 hover:text-blue-600 transition">Products</NuxtLink>
            <NuxtLink to="/services" class="block py-2 hover:text-blue-600 transition">Services</NuxtLink>
            <NuxtLink to="/about" class="block py-2 hover:text-blue-600 transition">About Us</NuxtLink>
            <NuxtLink to="/contact" class="block py-2 hover:text-blue-600 transition">Contact</NuxtLink>
          </nav>
        </div>
      </transition>
    </header>

    <transition name="mobile-menu-fade">
      <div
        v-if="mobileOpen"
        class="md:hidden fixed inset-0 bg-black/20 z-40"
        @click="mobileOpen = false"
      />
    </transition>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white pt-16 pb-8">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 class="text-xl font-bold mb-6 flex items-center">
             <span class="bg-white text-gray-900 p-1 mr-2 rounded text-sm">TC</span>
             TRADE CORP
          </h3>
          <p class="text-gray-400 mb-6 leading-relaxed">
            Professional China Fabric Manufacturer providing high-quality textile solutions for global markets. From weaving to packaging, we handle it all.
          </p>
        </div>
        
        <div>
          <h4 class="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
          <ul class="space-y-3 text-gray-400">
            <li><NuxtLink to="/" class="hover:text-white transition flex items-center"><span class="mr-2">›</span> Home</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:text-white transition flex items-center"><span class="mr-2">›</span> Products</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-white transition flex items-center"><span class="mr-2">›</span> About Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition flex items-center"><span class="mr-2">›</span> Contact Us</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Products</h4>
          <ul class="space-y-3 text-gray-400">
            <li><a href="#" class="hover:text-white transition flex items-center"><span class="mr-2">›</span> Woven Fabric</a></li>
            <li><a href="#" class="hover:text-white transition flex items-center"><span class="mr-2">›</span> Knitted Fabric</a></li>
            <li><a href="#" class="hover:text-white transition flex items-center"><span class="mr-2">›</span> Functional Fabric</a></li>
            <li><a href="#" class="hover:text-white transition flex items-center"><span class="mr-2">›</span> Custom Design</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Info</h4>
          <ul class="space-y-4 text-gray-400">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Textile City, China</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@tradecorp.com</span>
            </li>
            <li class="flex items-center">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+86 123 4567 8901</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="container mx-auto px-4 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Trade Corp. All rights reserved. | <a href="#" class="hover:text-white">Privacy Policy</a> | <a href="#" class="hover:text-white">Terms of Service</a></p>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
const mobileOpen = ref(false)
const route = useRoute()
// 监听路由变化，关闭移动端菜单
watch(() => route.fullPath, () => {
  mobileOpen.value = false
})
</script>
<style scoped>
.mobile-menu-slide-enter-active,
.mobile-menu-slide-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.mobile-menu-slide-enter-from,
.mobile-menu-slide-leave-to {
  transform: translateY(-8px);
  opacity: 0;
}

.mobile-menu-fade-enter-active,
.mobile-menu-fade-leave-active {
  transition: opacity 0.2s ease;
}
.mobile-menu-fade-enter-from,
.mobile-menu-fade-leave-to {
  opacity: 0;
}
</style>
