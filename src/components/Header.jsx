'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlinePhone, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Team', href: '/team' },
    { name: 'Booking', href: '/booking' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2C1810] border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <h1 className="text-xl lg:text-2xl font-bold text-white">
                Amarr Salon
              </h1>
              <p className="text-xs lg:text-sm text-[#D4AF37] font-medium">
                Nikol
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-[#D4AF37] text-black'
                    : 'text-white hover:text-[#D4AF37] hover:bg-[#F5E6D3]/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:09662143430"
              className="flex items-center space-x-2 text-white hover:text-[#D4AF37] transition-colors duration-300"
            >
              <HiOutlinePhone className="w-4 h-4" />
              <span className="text-sm font-medium">096621 43430</span>
            </a>
            <Link
              href="/booking"
              className="bg-[#D4AF37] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#F5E6D3] transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#D4AF37] transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'max-h-96 opacity-100 pb-6'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-[#D4AF37] text-black'
                    : 'text-white hover:text-[#D4AF37] hover:bg-[#F5E6D3]/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Contact */}
            <div className="pt-4 border-t border-[#D4AF37]/20 space-y-3">
              <a
                href="tel:09662143430"
                className="flex items-center space-x-2 px-4 py-3 text-white hover:text-[#D4AF37] transition-colors duration-300"
              >
                <HiOutlinePhone className="w-4 h-4" />
                <span className="text-sm font-medium">096621 43430</span>
              </a>
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-[#D4AF37] text-black px-4 py-3 rounded-lg text-sm font-semibold text-center hover:bg-[#F5E6D3] transition-all duration-300"
              >
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}