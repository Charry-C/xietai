<template>
  <div class="bg-brand-cream min-h-screen">
    <!-- Page Header -->
    <section class="bg-brand-navy text-white pt-32 pb-20 text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
      <div class="container mx-auto px-6 relative z-10">
        <h1 class="text-4xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
        <p class="text-xl text-white/60 max-w-2xl mx-auto font-light">Get in touch with our global team. We're here to answer your questions and discuss your needs.</p>
      </div>
    </section>

    <div class="container mx-auto px-6 py-20">
      <div class="max-w-6xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        <!-- Contact Info Side -->
        <div class="bg-brand-navy text-white p-12 md:w-2/5 relative overflow-hidden">
          <!-- Decorative Pattern -->
          <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#C5A059 1px, transparent 1px); background-size: 20px 20px;"></div>
          
          <div class="relative z-10">
            <h2 class="text-3xl font-serif font-bold mb-8 text-brand-gold">Get in Touch</h2>
            <p class="text-white/70 mb-12 leading-relaxed">
              Fill up the form and our team will get back to you within 24 hours. We look forward to hearing from you.
            </p>
            
            <div class="space-y-8">
              <div class="flex items-start group">
                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-brand-gold transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-gold group-hover:text-brand-navy transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Phone</h3>
                  <p class="text-white/60 font-light">+86 123 4567 8901</p>
                </div>
              </div>
              
              <div class="flex items-start group">
                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-brand-gold transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-gold group-hover:text-brand-navy transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Email</h3>
                  <p class="text-white/60 font-light">info@tradecorp.com</p>
                </div>
              </div>
              
              <div class="flex items-start group">
                 <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-brand-gold transition-colors duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-gold group-hover:text-brand-navy transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Headquarters</h3>
                  <p class="text-white/60 font-light">123 Textile Road, Keqiao District,<br>Shaoxing, Zhejiang, China</p>
                </div>
              </div>
            </div>
            
            <div class="mt-20 pt-10 border-t border-white/10 flex gap-6">
              <a href="#" class="text-white/40 hover:text-brand-gold transition-colors">Facebook</a>
              <a href="#" class="text-white/40 hover:text-brand-gold transition-colors">LinkedIn</a>
              <a href="#" class="text-white/40 hover:text-brand-gold transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        
        <!-- Form Side -->
        <div class="p-12 md:w-3/5 bg-white">
          <form class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="relative group">
                <input type="text" id="first-name" class="peer w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-navy transition-colors bg-transparent placeholder-transparent" placeholder="First Name">
                <label for="first-name" class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-navy peer-focus:text-sm">First Name</label>
              </div>
              <div class="relative group">
                <input type="text" id="last-name" class="peer w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-navy transition-colors bg-transparent placeholder-transparent" placeholder="Last Name">
                <label for="last-name" class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-navy peer-focus:text-sm">Last Name</label>
              </div>
            </div>
            
            <div class="relative group">
              <input type="email" id="email" class="peer w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-navy transition-colors bg-transparent placeholder-transparent" placeholder="Email Address">
              <label for="email" class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-navy peer-focus:text-sm">Email Address</label>
            </div>
            
            <div class="relative group">
              <input type="text" id="subject" class="peer w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-navy transition-colors bg-transparent placeholder-transparent" placeholder="Subject">
              <label for="subject" class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-navy peer-focus:text-sm">Subject</label>
            </div>
            
            <div class="relative group">
              <textarea id="message" rows="4" class="peer w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-navy transition-colors bg-transparent placeholder-transparent resize-none" placeholder="Message"></textarea>
              <label for="message" class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-navy peer-focus:text-sm">Message</label>
            </div>
            
            <div class="pt-6">
              <button type="button" class="bg-brand-navy text-white px-10 py-4 font-bold tracking-wide hover:bg-brand-gold transition-colors duration-300 shadow-lg w-full md:w-auto">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
