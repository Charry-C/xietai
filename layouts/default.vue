<template>
  <div class="min-h-screen flex flex-col font-sans bg-brand-cream text-neutral-800 antialiased selection:bg-brand-gold selection:text-white">
    <!-- Header -->
    <header 
      class="fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent"
      :class="[scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-neutral-100 py-3' : 'bg-transparent py-6']"
    >
      <div class="container mx-auto px-6 flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center group">
          <span class="font-serif text-2xl font-bold tracking-tight text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
            XIETAI
            <span class="text-brand-gold">.</span>
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-sm font-medium tracking-wide uppercase hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all hover:after:w-full"
            active-class="text-brand-navy font-semibold after:w-full"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-2 text-brand-navy hover:text-brand-gold transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span class="w-full h-0.5 bg-current transform transition-transform origin-left" :class="mobileOpen ? 'rotate-45 translate-x-1' : ''"></span>
            <span class="w-full h-0.5 bg-current transition-opacity" :class="mobileOpen ? 'opacity-0' : ''"></span>
            <span class="w-full h-0.5 bg-current transform transition-transform origin-left" :class="mobileOpen ? '-rotate-45 translate-x-1' : ''"></span>
          </div>
        </button>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div 
        v-if="mobileOpen" 
        class="fixed inset-0 z-40 bg-brand-navy/95 backdrop-blur-xl md:hidden pt-24 px-6"
      >
        <nav class="flex flex-col gap-6 items-center">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-2xl font-serif text-white hover:text-brand-gold transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
        
        <button 
          @click="mobileOpen = false"
          class="absolute top-6 right-6 text-white/50 hover:text-white"
        >
          <span class="sr-only">Close</span>
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </transition>

    <!-- Main Content -->
    <main class="flex-grow pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-brand-navy text-white pt-20 pb-10 border-t border-white/10">
      <div class="container mx-auto px-6">
        <!-- Row 1: Company Introduction -->
        <div class="mb-12">
          <NuxtLink to="/" class="inline-block font-serif text-4xl font-bold tracking-tight mb-6">
            XIETAI
            <span class="text-brand-gold">.</span>
          </NuxtLink>
          <p class="text-white/60 text-lg leading-[2] max-w-2xl">
            Crafting exceptional textiles since 1998. We blend traditional craftsmanship with modern innovation to deliver premium fabrics worldwide.
          </p>
        </div>

        <!-- Row 2: Navigation, Products, Connect Way (Hidden on Mobile) -->
        <div class="hidden md:grid grid-cols-3 gap-12 mb-16">
          <!-- Column 1: Navigation -->
          <div>
            <h4 class="font-serif text-lg mb-8 text-brand-gold uppercase tracking-wider">Navigation</h4>
            <ul class="space-y-4 text-white/70">
              <li><NuxtLink to="/" class="hover:text-brand-gold transition-colors">Home</NuxtLink></li>
              <li><NuxtLink to="/products" class="hover:text-brand-gold transition-colors">Products</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-brand-gold transition-colors">About Us</NuxtLink></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors">Application Video</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors">Technology</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors">News</a></li>
              <li><NuxtLink to="/contact" class="hover:text-brand-gold transition-colors">Contact Us</NuxtLink></li>
            </ul>
          </div>
          
          <!-- Column 2: Products -->
          <div>
            <h4 class="font-serif text-lg mb-8 text-brand-gold uppercase tracking-wider">Products</h4>
            <ul class="space-y-4 text-white/70">
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Linen Fabric</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Suit Fabric</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Shirt Fabric</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Lady Fabric</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Workwear Fabric</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Medical Fabric</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Thobe Fabric</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Pocket Fabric</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Wax Fabric</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Casual Fabric</a></li>
              <li><a href="#" class="hover:text-brand-gold transition-colors uppercase">Greige Fabric</a></li>
            </ul>
          </div>
          
          <!-- Column 3: Connect Way -->
          <div>
            <h4 class="font-serif text-lg mb-8 text-brand-gold uppercase tracking-wider">Connect Way</h4>
            <ul class="space-y-6 text-white/70">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+86 189 3189 0816</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jason.l@shuolantextile.com" class="hover:text-brand-gold transition-colors">jason.l@shuolantextile.com</a>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="leading-relaxed">Rm 2501, Wanda Office Building B, 583 East Zhongshan Road, Chang'an District, Shijiazhuang City, Hebei Province, China.050000</span>
              </li>
            </ul>
            
            <!-- Social Icons -->
            <div class="flex gap-4 mt-8">
              <a href="#" class="w-10 h-10 bg-white flex items-center justify-center hover:bg-brand-gold transition-colors group">
                <svg class="w-5 h-5 text-brand-navy group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white flex items-center justify-center hover:bg-brand-gold transition-colors group">
                <svg class="w-5 h-5 text-brand-navy group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white flex items-center justify-center hover:bg-brand-gold transition-colors group">
                <svg class="w-5 h-5 text-brand-navy group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white flex items-center justify-center hover:bg-brand-gold transition-colors group">
                <svg class="w-5 h-5 text-brand-navy group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Row 3: Copyright & Links -->
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {{ new Date().getFullYear() }} Xietai Textile Corp. All rights reserved.</p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>

<style>
body {
  @apply bg-brand-cream;
}
</style>
