<template>
  <div class="bg-brand-cream min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-32 md:py-48 overflow-hidden bg-brand-navy text-white">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <span class="block text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in-up">Since 1998</span>
        <h1 class="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight animate-fade-in-up animation-delay-100">
          Weaving the Fabric<br>of <span class="text-brand-gold italic">Excellence</span>
        </h1>
      </div>
    </section>

    <!-- Company Story -->
    <section class="py-24 md:py-32">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div class="w-full lg:w-1/2 relative">
             <div class="relative z-10 aspect-[4/5] overflow-hidden bg-gray-200 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1534643960519-11ad79bc19df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Factory Floor" class="w-full h-full object-cover">
             </div>
             <!-- Decorative -->
             <div class="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full z-0"></div>
             <div class="absolute -bottom-10 -right-10 w-full h-full border border-brand-navy/10 z-0"></div>
          </div>
          
          <div class="w-full lg:w-1/2">
            <h2 class="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-8">Who We Are</h2>
            <div class="w-20 h-1 bg-brand-gold mb-8"></div>
            <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong class="text-brand-navy">Xietai Trade Corp</strong> emerged from the heart of China's textile district with a singular vision: to bridge the gap between traditional craftsmanship and modern industrial capability.
              </p>
              <p>
                Over the past two decades, we have evolved from a modest weaving mill into a comprehensive textile solutions provider. Our journey is defined by a relentless pursuit of quality and a deep respect for the materials we work with.
              </p>
              <p>
                Today, we serve global fashion brands, interior designers, and industrial partners in over 50 countries, delivering fabrics that not only meet technical specifications but also inspire creativity.
              </p>
            </div>
            
            <div class="mt-10 pt-10 border-t border-brand-navy/10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Signature_sample.svg" alt="CEO Signature" class="h-12 opacity-50">
              <p class="text-sm text-gray-400 mt-2">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24 bg-brand-navy text-white relative overflow-hidden" ref="statsSection">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(#C5A059 1px, transparent 1px); background-size: 30px 30px;"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div class="p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-300">
            <span class="block text-6xl font-serif font-bold text-brand-gold mb-4">{{ yearsExperience }}+</span>
            <span class="text-sm tracking-widest uppercase text-white/60">Years Experience</span>
          </div>
          <div class="p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-300">
            <span class="block text-6xl font-serif font-bold text-brand-gold mb-4">{{ exportCountries }}+</span>
            <span class="text-sm tracking-widest uppercase text-white/60">Export Countries</span>
          </div>
          <div class="p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-300">
            <span class="block text-6xl font-serif font-bold text-brand-gold mb-4">{{ metersPerMonth }}M+</span>
            <span class="text-sm tracking-widest uppercase text-white/60">Meters / Month</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Factory Tour -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block">Infrastructure</span>
          <h2 class="text-4xl md:text-5xl font-serif font-bold text-brand-navy">Our Facilities</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="group relative aspect-video overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1565514020176-dbf2277800c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Weaving Workshop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white font-serif text-2xl font-bold">Weaving Workshop</span>
            </div>
          </div>
          
          <div class="group relative aspect-video overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dyeing Lab" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white font-serif text-2xl font-bold">Dyeing Lab</span>
            </div>
          </div>
          
          <div class="group relative aspect-video overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Warehouse" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white font-serif text-2xl font-bold">Global Warehouse</span>
            </div>
          </div>
          
          <div class="group relative aspect-video overflow-hidden cursor-pointer">
             <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Design Office" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white font-serif text-2xl font-bold">Design Studio</span>
            </div>
          </div>
          
          <div class="group relative aspect-video overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Quality Control" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white font-serif text-2xl font-bold">Quality Control</span>
            </div>
          </div>
          
          <div class="group relative aspect-video overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Showroom" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white font-serif text-2xl font-bold">Showroom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Ref } from 'vue'

const statsSection = ref<HTMLElement | null>(null)
const yearsExperience = ref(0)
const exportCountries = ref(0)
const metersPerMonth = ref(0)
let observer: IntersectionObserver | null = null

const animateValue = (refValue: Ref<number>, start: number, end: number, duration: number) => {
  let startTimestamp: number | null = null
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    // Ease out quart
    const easeProgress = 1 - Math.pow(1 - progress, 4)
    refValue.value = Math.floor(easeProgress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateValue(yearsExperience, 0, 25, 2000)
        animateValue(exportCountries, 0, 50, 2000)
        animateValue(metersPerMonth, 0, 1, 2000)
        observer?.disconnect()
      }
    })
  }, { threshold: 0.2 })

  if (statsSection.value) {
    observer.observe(statsSection.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.animation-delay-100 {
  animation-delay: 100ms;
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
