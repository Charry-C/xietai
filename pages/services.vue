<template>
  <div class="bg-brand-cream min-h-screen">
    <!-- Page Header -->
    <section class="bg-brand-navy text-white pt-32 pb-20 text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
      <div class="container mx-auto px-6 relative z-10">
        <h1 class="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
        <p class="text-xl text-white/60 max-w-2xl mx-auto font-light">Comprehensive textile manufacturing solutions tailored to your exacting standards.</p>
      </div>
    </section>

    <!-- Services List -->
    <section class="py-24">
      <div class="container mx-auto px-6 space-y-32">
        <!-- Service 1 -->
        <div class="flex flex-col md:flex-row items-center gap-16 group">
          <div class="md:w-1/2 relative">
            <div class="aspect-video bg-gray-200 overflow-hidden shadow-2xl relative z-10">
               <img src="https://images.unsplash.com/photo-1605218427368-35b88126e838?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Raw Materials" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <!-- Decorative Box -->
            <div class="absolute -bottom-6 -left-6 w-full h-full border-2 border-brand-gold/20 z-0"></div>
          </div>
          <div class="md:w-1/2">
            <span class="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">Step 01</span>
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Raw Material Selection</h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              We source only the finest yarns and fibers. Our strict quality control begins at the source, ensuring that every fabric we produce meets international standards for durability, colorfastness, and texture.
            </p>
            <ul class="space-y-4">
              <li class="flex items-center text-brand-navy font-medium">
                <span class="w-2 h-2 bg-brand-gold rounded-full mr-4"></span>
                Premium Cotton & Polyester
              </li>
              <li class="flex items-center text-brand-navy font-medium">
                <span class="w-2 h-2 bg-brand-gold rounded-full mr-4"></span>
                Eco-friendly Options
              </li>
              <li class="flex items-center text-brand-navy font-medium">
                <span class="w-2 h-2 bg-brand-gold rounded-full mr-4"></span>
                Rigorous Lab Testing
              </li>
            </ul>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-16 group">
          <div class="md:w-1/2 relative">
            <div class="aspect-video bg-gray-200 overflow-hidden shadow-2xl relative z-10">
               <img src="https://images.unsplash.com/photo-1563546738-4e365027581e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Weaving Process" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <!-- Decorative Box -->
            <div class="absolute -top-6 -right-6 w-full h-full border-2 border-brand-gold/20 z-0"></div>
          </div>
          <div class="md:w-1/2">
             <span class="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">Step 02</span>
             <h2 class="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Advanced Weaving</h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              Equipped with state-of-the-art air-jet and water-jet looms, our weaving facility can handle a wide variety of fabric constructions. From simple plain weaves to complex jacquards, we deliver consistency and speed.
            </p>
            <ul class="space-y-4">
              <li class="flex items-center text-brand-navy font-medium">
                <span class="w-2 h-2 bg-brand-gold rounded-full mr-4"></span>
                High-Speed Production
              </li>
              <li class="flex items-center text-brand-navy font-medium">
                <span class="w-2 h-2 bg-brand-gold rounded-full mr-4"></span>
                Diverse Weave Patterns
              </li>
              <li class="flex items-center text-brand-navy font-medium">
                <span class="w-2 h-2 bg-brand-gold rounded-full mr-4"></span>
                Minimal Defect Rate
              </li>
            </ul>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="flex flex-col md:flex-row items-center gap-16 group">
          <div class="md:w-1/2 relative">
            <div class="aspect-video bg-gray-200 overflow-hidden shadow-2xl relative z-10">
               <img src="https://images.unsplash.com/photo-1598048145708-36d4825d487d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Customization" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <!-- Decorative Box -->
             <div class="absolute -bottom-6 -left-6 w-full h-full border-2 border-brand-gold/20 z-0"></div>
          </div>
          <div class="md:w-1/2">
             <span class="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">Step 03</span>
             <h2 class="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Custom Design & Printing</h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              Your vision, our expertise. We offer comprehensive customization services including digital printing, dyeing, and coating. Whether you need a specific Pantone color or a unique pattern, we make it happen.
            </p>
             <ul class="space-y-4">
              <li class="flex items-center text-brand-navy font-medium">
                <span class="w-2 h-2 bg-brand-gold rounded-full mr-4"></span>
                Digital & Screen Printing
              </li>
              <li class="flex items-center text-brand-navy font-medium">
                <span class="w-2 h-2 bg-brand-gold rounded-full mr-4"></span>
                Custom Dyeing
              </li>
              <li class="flex items-center text-brand-navy font-medium">
                <span class="w-2 h-2 bg-brand-gold rounded-full mr-4"></span>
                Functional Finishes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
