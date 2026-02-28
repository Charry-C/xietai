<template>
  <div class="py-12 bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Our Products</h1>
      
      <!-- Filter/Category Placeholder -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button class="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">All</button>
        <button class="px-6 py-2 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-100">Woven</button>
        <button class="px-6 py-2 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-100">Knitted</button>
        <button class="px-6 py-2 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-100">Functional</button>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <!-- Loop placeholder -->
        <div v-for="i in 8" :key="i" class="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group">
          <div class="bg-gray-200 aspect-square flex items-center justify-center text-gray-400">
            <span>Product Image {{ i }}</span>
          </div>
          <div class="p-4">
            <h3 class="font-bold text-lg mb-1 group-hover:text-blue-600">Fabric Item {{ i }}</h3>
            <p class="text-gray-500 text-sm mb-2">Category Name</p>
            <div class="flex justify-between items-center">
               <span class="font-bold text-gray-900">$10.00 / m</span>
               <button class="text-blue-600 text-sm font-medium hover:underline">Details</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Pagination -->
      <div class="mt-12 flex justify-center space-x-2">
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">1</button>
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-gray-100">2</button>
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-gray-100">3</button>
        <span class="flex items-end px-2 text-gray-400">...</span>
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-gray-100">&rarr;</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Fetch products from Strapi
// const { data: products } = await useStrapiFetch('/products')
</script>
