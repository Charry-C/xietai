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
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div class="col-span-1 md:col-span-1">
            <NuxtLink to="/" class="inline-block font-serif text-2xl font-bold tracking-tight mb-6">
              XIETAI
              <span class="text-brand-gold">.</span>
            </NuxtLink>
            <p class="text-white/60 text-sm leading-relaxed max-w-xs">
              Crafting exceptional textiles since 1998. We blend traditional craftsmanship with modern innovation to deliver premium fabrics worldwide.
            </p>
          </div>
          
          <div>
            <h4 class="font-serif text-lg mb-6 text-brand-gold">Explore</h4>
            <ul class="space-y-3 text-sm text-white/70">
              <li v-for="link in navLinks" :key="link.path">
                <NuxtLink :to="link.path" class="hover:text-white transition-colors flex items-center gap-2 group">
                  <span class="w-1 h-1 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-serif text-lg mb-6 text-brand-gold">Collections</h4>
            <ul class="space-y-3 text-sm text-white/70">
              <li><a href="#" class="hover:text-white transition-colors">Sustainable Series</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Luxury Silks</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Technical Fabrics</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Custom Weaves</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-serif text-lg mb-6 text-brand-gold">Connect</h4>
            <ul class="space-y-4 text-sm text-white/70">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Textile Ave, Silk Road District,<br>Hangzhou, China</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@xietai.com" class="hover:text-white transition-colors">hello@xietai.com</a>
              </li>
            </ul>
          </div>
        </div>
        
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
