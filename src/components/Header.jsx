'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlinePhone, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Our Team', href: '/team' },
    { label: 'Book Now', href: '/booking' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2C2C2C] backdrop-blur-sm border-b border-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                Amarr Salon
              </span>
              <span className="text-xs lg:text-sm text-[#D4A574] -mt-1 tracking-wider">
                NIKOL
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActiveLink(link.href)
                    ? 'bg-[#D4A574] text-black shadow-lg shadow-[#D4A574]/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:09662143430"
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
            >
              <HiOutlinePhone className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">096621 43430</span>
            </a>
            <Link
              href="/booking"
              className="bg-[#D4A574] text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#F5E6D3] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-[#2C2C2C] border-t border-gray-800/20 px-4 py-4">
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActiveLink(link.href)
                    ? 'bg-[#D4A574] text-black shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Contact & CTA */}
          <div className="mt-6 pt-4 border-t border-gray-800/20 space-y-3">
            <a
              href="tel:09662143430"
              className="flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 bg-white/5 rounded-xl"
            >
              <HiOutlinePhone className="w-5 h-5 mr-2" />
              <span className="font-medium">096621 43430</span>
            </a>
            <Link
              href="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center bg-[#D4A574] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#F5E6D3] transition-all duration-300"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}