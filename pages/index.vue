<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative h-[90vh] flex items-center justify-center overflow-hidden bg-brand-navy text-white"
    >
      <!-- Background Image (Placeholder) -->
      <div
        class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80"
      ></div>

      <div class="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <span
          class="inline-block py-1 px-3 border border-brand-gold/50 rounded-full text-brand-gold text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up"
        >
          Premium Manufacturing
        </span>
        <h1
          class="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight animate-fade-in-up animation-delay-100"
        >
          The Art of <span class="italic text-brand-gold">Fine Textiles</span>
        </h1>
        <p
          class="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200"
        >
          From raw fiber to finished fabric, Xietai delivers excellence in every thread. Your
          trusted global partner for innovative textile solutions.
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-300"
        >
          <NuxtLink
            to="/products"
            class="bg-brand-gold text-white px-10 py-4 font-bold tracking-wide hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Collections
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="px-10 py-4 border border-white/30 text-white font-bold tracking-wide hover:bg-white hover:text-brand-navy transition-all duration-300 backdrop-blur-sm"
          >
            Partner With Us
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="py-24 md:py-32 relative">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-16">
          <div class="w-full md:w-1/2 relative">
            <div class="aspect-[4/5] bg-gray-200 overflow-hidden relative z-10">
              <img
                src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Fabric Texture"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <!-- Decorative Element -->
            <div
              class="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold/30 z-0 hidden md:block"
            ></div>
          </div>

          <div class="w-full md:w-1/2">
            <h2 class="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-8">
              Weaving Tradition <br />
              <span class="text-brand-gold italic">with Innovation</span>
            </h2>
            <div class="w-20 h-1 bg-brand-gold mb-8"></div>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in 1998, Xietai has grown from a local weaving mill to a global textile
              powerhouse. We specialize in high-performance fabrics that don't compromise on
              aesthetic appeal.
            </p>
            <p class="text-lg text-gray-600 mb-10 leading-relaxed">
              Our state-of-the-art facilities in Hangzhou allow us to control every step of the
              production process, ensuring consistency, quality, and timely delivery for brands
              worldwide.
            </p>

            <div class="grid grid-cols-2 gap-8">
              <div>
                <span class="block text-4xl font-serif font-bold text-brand-navy mb-2">25+</span>
                <span class="text-sm text-gray-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span class="block text-4xl font-serif font-bold text-brand-navy mb-2">10M+</span>
                <span class="text-sm text-gray-500 uppercase tracking-wider">Meters Annually</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div
        class="absolute top-0 right-0 w-1/3 h-full bg-brand-cream/50 -skew-x-12 transform origin-top-right z-0"
      ></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-20">
          <span class="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block"
            >Our Expertise</span
          >
          <h2 class="text-4xl md:text-5xl font-serif font-bold text-brand-navy">
            Comprehensive Services
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="group p-10 bg-brand-cream hover:bg-brand-navy transition-colors duration-500">
            <div
              class="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-full mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3
              class="text-2xl font-serif font-bold text-brand-navy mb-4 group-hover:text-white transition-colors"
            >
              Material Selection
            </h3>
            <p class="text-gray-600 leading-relaxed group-hover:text-white/70 transition-colors">
              Sourcing the finest fibers globally. From organic cottons to high-tech synthetics,
              quality starts at the source.
            </p>
          </div>

          <!-- Service 2 -->
          <div class="group p-10 bg-brand-cream hover:bg-brand-navy transition-colors duration-500">
            <div
              class="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-full mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3
              class="text-2xl font-serif font-bold text-brand-navy mb-4 group-hover:text-white transition-colors"
            >
              Precision Weaving
            </h3>
            <p class="text-gray-600 leading-relaxed group-hover:text-white/70 transition-colors">
              Advanced looms meet traditional techniques. We create complex weaves with exacting
              standards for texture and durability.
            </p>
          </div>

          <!-- Service 3 -->
          <div class="group p-10 bg-brand-cream hover:bg-brand-navy transition-colors duration-500">
            <div
              class="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-full mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3
              class="text-2xl font-serif font-bold text-brand-navy mb-4 group-hover:text-white transition-colors"
            >
              Global Logistics
            </h3>
            <p class="text-gray-600 leading-relaxed group-hover:text-white/70 transition-colors">
              Seamless delivery to your doorstep. Our logistics network ensures your materials
              arrive on time, anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-24 bg-brand-navy text-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span class="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block"
              >Our Collection</span
            >
            <h2 class="text-4xl md:text-5xl font-serif font-bold">Featured Fabrics</h2>
          </div>
          <NuxtLink
            to="/products"
            class="hidden md:inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors font-medium"
          >
            View All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Static Placeholders for Design (API products below) -->
          <div class="group relative aspect-[3/4] bg-gray-800 overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1579619627670-65e08b337c76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              alt="Fabric"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"
            ></div>
            <div
              class="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            >
              <span class="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block"
                >New Arrival</span
              >
              <h3 class="text-2xl font-serif font-bold mb-2">Royal Velvet</h3>
              <p
                class="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
              >
                Luxurious soft pile fabric perfect for upholstery and drapery.
              </p>
            </div>
          </div>

          <div class="group relative aspect-[3/4] bg-gray-800 overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              alt="Fabric"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"
            ></div>
            <div
              class="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            >
              <span class="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block"
                >Bestseller</span
              >
              <h3 class="text-2xl font-serif font-bold mb-2">Organic Linen</h3>
              <p
                class="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
              >
                Breathable, natural texture for summer apparel.
              </p>
            </div>
          </div>

          <!-- Dynamic Products Loop (if any) -->
          <div
            v-for="product in products?.slice(0, 2)"
            :key="product.id"
            class="group relative aspect-[3/4] bg-gray-800 overflow-hidden cursor-pointer"
          >
            <img
              :src="
                product.url ||
                'https://images.unsplash.com/photo-1596205847326-17b5f902403b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              "
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              :alt="product.name"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"
            ></div>
            <div
              class="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            >
              <span class="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block"
                >Collection</span
              >
              <h3 class="text-2xl font-serif font-bold mb-2">{{ product.name }}</h3>
              <p
                class="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
              >
                Discover our premium quality {{ product.name }}.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center md:hidden">
          <NuxtLink
            to="/products"
            class="inline-block border border-brand-gold text-brand-gold px-8 py-3 font-bold hover:bg-brand-gold hover:text-brand-navy transition-colors"
          >
            View All Products
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 relative flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-brand-cream"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2 class="text-5xl md:text-7xl font-serif font-bold text-brand-navy mb-8">
          Ready to create?
        </h2>
        <p class="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Let's discuss your next project. We offer custom manufacturing solutions tailored to your
          brand's needs.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block bg-brand-navy text-white px-12 py-5 font-bold tracking-wide hover:bg-brand-gold transition-colors duration-300 shadow-2xl"
        >
          Get a Quote
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getProducts } from '@/api/product'

const { data: products } = await getProducts({
  query: {
    populate: 'url',
  },
  transform: (response: any) => {
    return response.data
  },
})

// Log for debugging
console.log('Products:', products.value)
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
