<template>
  <div class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <!-- Contact Info Side -->
          <div class="bg-blue-900 text-white p-10 md:w-2/5">
            <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
            <p class="text-blue-100 mb-8">
              Fill up the form and our team will get back to you within 24 hours.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 mt-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 class="font-bold">Phone</h3>
                  <p class="text-blue-100">+86 123 4567 8901</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 mt-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 class="font-bold">Email</h3>
                  <p class="text-blue-100">info@tradecorp.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 mt-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 class="font-bold">Address</h3>
                  <p class="text-blue-100">123 Textile Road,<br>Keqiao District, Shaoxing,<br>Zhejiang, China</p>
                </div>
              </div>
            </div>
            
            <div class="mt-12">
               <!-- Social Icons Placeholder -->
               <div class="flex space-x-4">
                 <div class="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">F</div>
                 <div class="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">L</div>
                 <div class="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">I</div>
               </div>
            </div>
          </div>
          
          <!-- Form Side -->
          <div class="p-10 md:w-3/5">
            <form>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-gray-700 font-bold mb-2" for="first-name">First Name</label>
                  <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" id="first-name" type="text" placeholder="John">
                </div>
                <div>
                  <label class="block text-gray-700 font-bold mb-2" for="last-name">Last Name</label>
                  <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" id="last-name" type="text" placeholder="Doe">
                </div>
              </div>
              
              <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
                <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" id="email" type="email" placeholder="john@example.com">
              </div>
              
              <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2" for="subject">Subject</label>
                <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" id="subject" type="text" placeholder="Inquiry about...">
              </div>
              
              <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2" for="message">Message</label>
                <textarea class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-32" id="message" placeholder="How can we help you?"></textarea>
              </div>
              
              <button class="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition" type="button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
