'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineChevronUp } from 'react-icons/hi2';

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Brand Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-2">Amarr Salon Nikol</h3>
          <p className="text-gray-400 text-lg mb-4">Professional Beauty Care in Nikol</p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F5E6D3] rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About & Trust Badges */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">
              About Us
              <div className="w-8 h-0.5 bg-[#D4AF37] mt-2"></div>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience gentle, attentive service with our skilled beauty professionals. Located conveniently near Malbar Hills, we provide personalized care that leaves you feeling refreshed.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                  <span className="text-[#D4AF37]">★</span>
                  <span className="text-white font-medium">4.4/5 Rated</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-white/5 px-3 py-1.5 rounded-full">
                  <span className="text-white font-medium">397+ Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
              <div className="w-8 h-0.5 bg-[#D4AF37] mt-2"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Our Services
              <div className="w-8 h-0.5 bg-[#D4AF37] mt-2"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 text-sm">Pedicure Services</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Cleanup Treatments</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Mini Facial</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Hair Services</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Beauty Treatments</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Facial Treatments</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Info
              <div className="w-8 h-0.5 bg-[#D4AF37] mt-2"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiOutlinePhone className="text-[#D4AF37] text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:09662143430"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    096621 43430
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <HiOutlineMapPin className="text-[#D4AF37] text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Amarr salon1, Sadguru Saran, MG Rd, near MALBAR HILLS, Nikol, Ahmedabad, Gujarat 380049
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiOutlineClock className="text-[#D4AF37] text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Open Daily
                  </p>
                  <p className="text-white text-sm font-medium">
                    Closes 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6D3] rounded-2xl p-6 lg:p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-black font-bold text-xl lg:text-2xl mb-2">
                Ready for Your Beauty Transformation?
              </h3>
              <p className="text-black/80 text-sm lg:text-base">
                Book your appointment today and experience our gentle, professional service.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/booking"
                className="bg-[#2C1810] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2C1810]/90 transition-colors text-center"
              >
                Book Appointment
              </Link>
              <a
                href="tel:09662143430"
                className="bg-white text-[#2C1810] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-center flex items-center justify-center gap-2"
              >
                <HiOutlinePhone className="text-lg" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 Amarr Salon Nikol. All rights reserved. Professional Beauty Care in Ahmedabad.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-2 group"
            >
              <span>Back to top</span>
              <HiOutlineChevronUp className="text-lg group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}