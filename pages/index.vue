<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-blue-900 text-white py-24 md:py-32 relative overflow-hidden">
      <!-- Background Image Overlay (Placeholder for actual image) -->
      <div class="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Professional China Fabric Manufacturer</h1>
        <p class="text-xl md:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          High-quality textile solutions, from weaving to packaging. Your trusted partner in global fabric supply.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/products" class="bg-blue-600 text-white px-8 py-4 rounded-md font-bold hover:bg-blue-700 transition uppercase tracking-wide">
            View Our Products
          </NuxtLink>
          <NuxtLink to="/contact" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-blue-900 transition uppercase tracking-wide">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services / Process Section (Mimicking Shuolan Textile) -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">Providing comprehensive textile manufacturing services from raw material selection to final delivery.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1: Select Raw Materials -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-blue-600">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-800">Select Raw Materials</h3>
            <p class="text-gray-600 text-center leading-relaxed">We will use high-quality raw materials to craft your order, ensuring the foundation of your fabric is superior.</p>
          </div>

          <!-- Service 2: Weaving -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-blue-600">
             <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-800">Weaving</h3>
            <p class="text-gray-600 text-center leading-relaxed">Advanced spinning and weaving processes to create durable and consistent fabric textures.</p>
          </div>

          <!-- Service 3: Customize -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-blue-600">
             <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-800">Customize</h3>
            <p class="text-gray-600 text-center leading-relaxed">According to your requirements, we can fulfill your customization needs for product design and composition.</p>
          </div>

          <!-- Service 4: Packaging -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-blue-600">
             <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-800">Packaging & Logistics</h3>
            <p class="text-gray-600 text-center leading-relaxed">Book a ship's hold for you, load containers, and transport them to the port efficiently and safely.</p>
          </div>

          <!-- Service 5: Reception -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-blue-600 md:col-span-2 lg:col-span-2 mx-auto lg:w-2/3">
             <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-800">Professional Reception</h3>
            <p class="text-gray-600 text-center leading-relaxed">We have multi-language professional customer service staff to answer questions and provide one-stop service.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Products -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-end mb-12">
          <div>
             <h2 class="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
             <div class="w-16 h-1 bg-blue-600"></div>
          </div>
          <NuxtLink to="/products" class="hidden md:inline-block text-blue-600 font-semibold hover:text-blue-800">
            View All Products &rarr;
          </NuxtLink>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Product Card 1 -->
          <div class="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div class="relative bg-gray-200 aspect-[4/5] overflow-hidden">
              <div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 group-hover:scale-105 transition duration-500">
                <!-- Replace with actual image -->
                <span>Fabric Image</span>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <button class="w-full bg-white text-gray-900 py-2 rounded font-semibold text-sm hover:bg-blue-600 hover:text-white transition">View Details</button>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition">Oxford Fabric</h3>
              <p class="text-sm text-gray-500 mb-2">100% Cotton</p>
            </div>
          </div>
          
          <!-- Product Card 2 -->
          <div class="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div class="relative bg-gray-200 aspect-[4/5] overflow-hidden">
              <div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 group-hover:scale-105 transition duration-500">
                 <span>Fabric Image</span>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <button class="w-full bg-white text-gray-900 py-2 rounded font-semibold text-sm hover:bg-blue-600 hover:text-white transition">View Details</button>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition">Twill Fabric</h3>
              <p class="text-sm text-gray-500 mb-2">Cotton / Polyester</p>
            </div>
          </div>

           <!-- Product Card 3 -->
           <div class="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div class="relative bg-gray-200 aspect-[4/5] overflow-hidden">
              <div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 group-hover:scale-105 transition duration-500">
                 <span>Fabric Image</span>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <button class="w-full bg-white text-gray-900 py-2 rounded font-semibold text-sm hover:bg-blue-600 hover:text-white transition">View Details</button>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition">Canvas</h3>
              <p class="text-sm text-gray-500 mb-2">Heavy Duty</p>
            </div>
          </div>

           <!-- Product Card 4 -->
           <div class="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div class="relative bg-gray-200 aspect-[4/5] overflow-hidden">
              <div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 group-hover:scale-105 transition duration-500">
                 <span>Fabric Image</span>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <button class="w-full bg-white text-gray-900 py-2 rounded font-semibold text-sm hover:bg-blue-600 hover:text-white transition">View Details</button>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition">Jacquard</h3>
              <p class="text-sm text-gray-500 mb-2">Custom Pattern</p>
            </div>
          </div>
        </div>

        <div v-for="product in products">{{ product.name }}</div>
        
        <div class="mt-8 text-center md:hidden">
           <NuxtLink to="/products" class="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-600 hover:text-white transition">
            View All Products
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="bg-blue-900 py-16 text-white text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6">Ready to Start Your Order?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Contact us today for a quote or to discuss your custom fabric requirements.</p>
        <NuxtLink to="/contact" class="bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition inline-block shadow-lg">
          Get a Quote
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// You can use the API here
import { getProducts } from '@/api/product'

const { data: products } = await getProducts({
  query: {
    populate: 'url',
  },
  transform: (response: any) => {
    return response.data
  }
})

console.log(products.value);

</script>
