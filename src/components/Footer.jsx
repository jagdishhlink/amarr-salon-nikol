'use client';

import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineArrowRight, HiOutlineHeart } from 'react-icons/hi2'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tl from-[#D4A574] to-[#F5E6D3] blur-3xl"></div>
      </div>

      {/* Top Border Accent */}
      <div className="border-t border-white/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-20">
        {/* Brand Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Amarr Salon Nikol
          </h2>
          <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            Your trusted beauty destination in Nikol, where traditional elegance meets modern luxury
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] mx-auto rounded-full"></div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          
          {/* About Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">About Amarr Salon</h3>
              <div className="w-8 h-0.5 bg-[#D4A574] mb-4"></div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Serving the beauty needs of Ahmedabad's Nikol community with dedication and skill. Professional services with extended hours for your convenience.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <div className="flex items-center space-x-1 text-[#D4A574]">
                  <HiOutlineHeart className="h-4 w-4" />
                  <span className="font-medium">4.4★ Rated</span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">397+ Reviews</span>
              </div>
              <div className="text-sm text-gray-400">
                Established Beauty Destination in Nikol
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="w-8 h-0.5 bg-[#D4A574] mb-4"></div>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-[#D4A574] transition-colors duration-300 text-sm">
                Home
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-[#D4A574] transition-colors duration-300 text-sm">
                Our Services
              </Link>
              <Link href="/gallery" className="block text-gray-400 hover:text-[#D4A574] transition-colors duration-300 text-sm">
                Gallery
              </Link>
              <Link href="/team" className="block text-gray-400 hover:text-[#D4A574] transition-colors duration-300 text-sm">
                Our Team
              </Link>
              <Link href="/booking" className="block text-gray-400 hover:text-[#D4A574] transition-colors duration-300 text-sm">
                Book Appointment
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-[#D4A574] transition-colors duration-300 text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Popular Services</h3>
            <div className="w-8 h-0.5 bg-[#D4A574] mb-4"></div>
            <div className="space-y-3 text-sm">
              <div className="text-gray-400">Hair Styling & Cutting</div>
              <div className="text-gray-400">Hair Coloring</div>
              <div className="text-gray-400">Bridal Makeup</div>
              <div className="text-gray-400">Facial Treatments</div>
              <div className="text-gray-400">Beauty Packages</div>
              <div className="text-gray-400">Special Occasion Styling</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="w-8 h-0.5 bg-[#D4A574] mb-4"></div>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <HiOutlinePhone className="h-5 w-5 text-[#D4A574] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:09662143430" className="text-white hover:text-[#D4A574] transition-colors duration-300 font-medium">
                    096621 43430
                  </a>
                  <div className="text-gray-400 text-xs mt-1">Call for appointments</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <HiOutlineMapPin className="h-5 w-5 text-[#D4A574] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 leading-relaxed">
                  Amarr salon1, Sadguru Saran,<br />
                  MG Rd, near MALBAR HILLS,<br />
                  Nikol, Ahmedabad, Gujarat 380049
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <HiOutlineClock className="h-5 w-5 text-[#D4A574] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Open Until 10 PM</div>
                  <div className="text-gray-400 text-xs mt-1">Extended hours daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-2xl mb-12">
          <div className="bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3">
                Ready for Your Beauty Transformation?
              </h3>
              <p className="text-black/80 mb-6 text-lg">
                Book your appointment today and experience the Amarr Salon difference
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:09662143430" 
                  className="inline-flex items-center justify-center space-x-2 bg-[#2C2C2C] text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105"
                >
                  <HiOutlinePhone className="h-5 w-5" />
                  <span>Call Now: 096621 43430</span>
                </a>
                <Link 
                  href="/booking" 
                  className="inline-flex items-center justify-center space-x-2 bg-black/10 text-black px-8 py-3 rounded-full font-semibold hover:bg-black/20 transition-all duration-300 border border-black/20"
                >
                  <span>Book Online</span>
                  <HiOutlineArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Amarr Salon Nikol. All rights reserved. | Beauty Parlour in Ahmedabad, Gujarat
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-[#D4A574] transition-colors duration-300 text-sm flex items-center space-x-1"
            >
              <span>Back to top</span>
              <HiOutlineArrowRight className="h-4 w-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}