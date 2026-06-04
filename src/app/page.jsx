'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineStar,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineChevronRight,
  HiOutlineBolt,
  HiOutlineWrench,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineBuildingStorefront,
  HiOutlineTruck,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineChevronDown
} from 'react-icons/hi2'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      name: "Hair Styling & Cutting",
      description: "Professional cuts and styling to enhance your natural beauty",
      icon: HiOutlineSparkles,
      popular: true
    },
    {
      name: "Hair Coloring",
      description: "Modern coloring techniques with premium products",
      icon: HiOutlineHeart,
      popular: false
    },
    {
      name: "Beauty Treatments",
      description: "Complete beauty services for face and skin care",
      icon: HiOutlineShieldCheck,
      popular: false
    },
    {
      name: "Bridal Packages",
      description: "Special occasion styling for your perfect day",
      icon: HiOutlineSparkles,
      popular: false
    }
  ]

  const faqData = [
    {
      question: "What are your operating hours?",
      answer: "We're open daily until 10 PM to accommodate your busy schedule. Call us at 096621 43430 to confirm specific opening times."
    },
    {
      question: "Where exactly are you located?",
      answer: "We're located at Amarr salon1, Sadguru Saran, MG Rd, near MALBAR HILLS, Nikol, Ahmedabad. Easy to find with convenient parking nearby."
    },
    {
      question: "Do I need an appointment?",
      answer: "While walk-ins are welcome, we recommend booking an appointment to ensure your preferred time slot. Call 096621 43430 to schedule."
    },
    {
      question: "What beauty services do you offer?",
      answer: "As a full-service beauty parlour, we offer hair styling, cutting, coloring, and various beauty treatments. Contact us to discuss your specific needs."
    }
  ]

  const testimonials = [
    {
      text: "Great location and convenient timing - perfect for my schedule!",
      author: "Local Customer",
      rating: 5,
      highlight: "convenient timing"
    },
    {
      text: "Professional service and easy to find near MALBAR HILLS",
      author: "Regular Client",
      rating: 5,
      highlight: "professional service"
    },
    {
      text: "Love that they're open until 10 PM - fits my busy lifestyle perfectly",
      author: "Working Professional",
      rating: 4,
      highlight: "open until 10 PM"
    }
  ]

  const benefits = [
    {
      icon: HiOutlineClock,
      title: "Extended Hours Until 10 PM",
      description: "Perfect for busy schedules and after-work appointments"
    },
    {
      icon: HiOutlineMapPin,
      title: "Convenient Location",
      description: "Easy to find on MG Road near MALBAR HILLS landmark"
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Professional Specialists",
      description: "Skilled beauty professionals with quality products"
    },
    {
      icon: HiOutlineUserGroup,
      title: "Trusted by Community",
      description: "Serving Nikol community with dedication and skill"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Book Your Appointment",
      description: "Call us or visit to schedule your preferred time slot",
      icon: HiOutlinePhone
    },
    {
      step: "02",
      title: "Consultation",
      description: "Discuss your beauty goals with our professionals",
      icon: HiOutlineHeart
    },
    {
      step: "03",
      title: "Transformation",
      description: "Enjoy our premium beauty services and treatments",
      icon: HiOutlineSparkles
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#2C2C2C] via-gray-800 to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
            <Image
              src="/images/business-1.jpg"
              alt="Amarr Salon Nikol Interior"
              fill
              className="object-cover opacity-20"
              unoptimized
              priority
            />
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#F5E6D3] rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-full blur-3xl opacity-5 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              {/* Floating Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#D4A574]">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar key={i} className={`h-5 w-5 ${i < 4 ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-white font-semibold">4.4/5</span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">397+ Reviews</p>
                </div>
                
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <HiOutlineClock className="h-5 w-5 text-[#D4A574]" />
                    <span className="text-white font-semibold">Open Until 10 PM</span>
                  </div>
                </div>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-white mb-6">
                Your Trusted
                <span className="block bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] bg-clip-text text-transparent animate-pulse">
                  Beauty
                </span>
                <span className="block">Destination</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-[#D4A574] mt-4">
                  in Nikol
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Professional beauty services with extended hours until 10 PM. 
                Conveniently located on MG Road for all your styling needs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="tel:09662143430"
                  className="group bg-[#D4A574] text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-[#D4A574]/25 hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3"
                >
                  <HiOutlinePhone className="h-6 w-6" />
                  Book Your Appointment Today
                  <HiOutlineArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a
                  href="/services"
                  className="group border-2 border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-black px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-xl bg-white/5 transition-all duration-500 flex items-center justify-center gap-3"
                >
                  View Our Services
                  <HiOutlineChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="grid grid-cols-2 gap-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl text-center">
                  <div className="text-5xl font-bold text-[#D4A574] mb-2">397+</div>
                  <div className="text-white/90 font-semibold">Happy Customers</div>
                </div>
                
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl text-center">
                  <div className="text-5xl font-bold text-[#D4A574] mb-2">10</div>
                  <div className="text-white/90 font-semibold">PM Closing</div>
                </div>
                
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl text-center">
                  <div className="text-5xl font-bold text-[#D4A574] mb-2">4.4</div>
                  <div className="text-white/90 font-semibold">Star Rating</div>
                </div>
                
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl text-center">
                  <div className="text-5xl font-bold text-[#D4A574] mb-2">MG</div>
                  <div className="text-white/90 font-semibold">Road Location</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <HiOutlineChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Curved Top */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-[#2C2C2C] via-gray-800 to-gray-900" style={{clipPath: 'ellipse(100% 100% at 50% 0%)'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-6 leading-tight">
              Professional Beauty Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hair styling to complete beauty treatments, we offer comprehensive beauty parlour services to enhance your natural beauty. Our skilled professionals use quality products and techniques to deliver results you'll love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100"
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4 group-hover:text-[#D4A574] transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] p-[2px]" style={{zIndex: -1}}>
                  <div className="bg-white rounded-3xl w-full h-full"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/services"
              className="inline-flex items-center gap-3 bg-[#D4A574] text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Services
              <HiOutlineArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About/Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl">
                <Image
                  src="/images/business-2.jpg"
                  alt="Amarr Salon Professional Service"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[600px] hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 backdrop-blur-xl bg-white/90 border border-gray-200 rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-[#D4A574]">4.4★</div>
                <div className="text-sm text-gray-600">397+ Reviews</div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight">
                Why Choose
                <span className="block text-[#D4A574]">Amarr Salon Nikol?</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Amarr Salon Nikol has been serving the beauty needs of Ahmedabad's Nikol community with dedication and skill. Located conveniently on MG Road near MALBAR HILLS, we understand the busy lifestyles of our clients. That's why we stay open until 10 PM, ensuring you can look and feel your best even after a long day.
              </p>

              <div className="grid gap-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 group"
                  >
                    <div className="bg-gradient-to-br from-[#F5E6D3] to-[#D4A574] rounded-2xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-[#2C2C2C]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3 group-hover:text-[#D4A574] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#2C2C2C] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Visit Our Salon
                  <HiOutlineMapPin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-6 leading-tight">
              Beauty Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the artistry and elegance that defines our salon experience
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src="/images/business-4.jpg"
                  alt="Hair Styling Service"
                  width={400}
                  height={500}
                  className="object-cover w-full h-80 group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src="/images/business-6.jpg"
                  alt="Beauty Treatment"
                  width={400}
                  height={600}
                  className="object-cover w-full h-96 group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src="/images/business-3.jpg"
                  alt="Salon Interior"
                  width={400}
                  height={600}
                  className="object-cover w-full h-96 group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src="/images/business-7.jpg"
                  alt="Professional Service"
                  width={400}
                  height={500}
                  className="object-cover w-full h-80 group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src="/images/business-5.jpg"
                  alt="Hair Coloring"
                  width={400}
                  height={500}
                  className="object-cover w-full h-80 group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src="/images/business-8.jpg"
                  alt="Beauty Services"
                  width={400}
                  height={600}
                  className="object-cover w-full h-96 group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="/gallery"
              className="inline-flex items-center gap-3 bg-[#D4A574] text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View Full Gallery
              <HiOutlineArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-[#2C2C2C] to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F5E6D3] rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real experiences from our valued customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 ${
                  index === 1 ? 'md:scale-105' : ''
                }`}
              >
                {/* Quote Mark */}
                <div className="text-6xl text-[#D4A574] mb-6 font-serif">"</div>
                
                {/* Rating */}
                <div className="flex text-[#D4A574] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className={`h-6 w-6 ${i < testimonial.rating ? 'fill-current' : ''}`} />
                  ))}
                </div>

                {/* Review Text with Highlight */}
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  {testimonial.text.split(testimonial.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="bg-[#D4A574] text-black px-2 py-1 rounded-lg font-semibold">
                          {testimonial.highlight}
                        </span>
                      )}
                    </span>
                  ))}
                </p>

                {/* Author */}
                <div className="border-t border-white/20 pt-6">
                  <p className="text-white font-semibold text-lg">{testimonial.author}</p>
                  <div className="flex text-[#D4A574] text-sm mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-12 py-8 shadow-2xl">
              <div>
                <div className="text-4xl font-bold text-[#D4A574]">4.4/5</div>
                <div className="text-white/80">Average Rating</div>
              </div>
              <div className="w-px h-16 bg-white/20"></div>
              <div>
                <div className="text-4xl font-bold text-[#D4A574]">397+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-6 leading-tight">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey to beautiful hair and enhanced beauty starts here
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid lg:grid-cols-3 gap-12 relative z-10">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center group"
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  {/* Step Number Background */}
                  <div className="relative mx-auto w-32 h-32 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-full"></div>
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center group-hover:bg-[#2C2C2C] transition-colors duration-300">
                      <span className="text-6xl font-bold text-[#2C2C2C] group-hover:text-white transition-colors duration-300 opacity-10">
                        {step.step}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <step.icon className="h-12 w-12 text-[#2C2C2C] group-hover:text-[#D4A574] transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-[#2C2C2C] mb-6 group-hover:text-[#D4A574] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our salon services
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-bold text-[#2C2C2C] pr-8">
                    {faq.question}
                  </h3>
                  <HiOutlineChevronDown
                    className={`h-6 w-6 text-[#D4A574] flex-shrink-0 transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-96 pb-8' : 'max-h-0'
                  }`}
                >
                  <div className="px-8">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2C2C2C]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-8 leading-tight">
            Ready for Your
            <span className="block">Beauty Transformation?</span>
          </h2>
          
          <p className="text-2xl text-[#2C2C2C]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your appointment today and experience the difference of professional beauty services in Nikol's most trusted salon
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:09662143430"
              className="group bg-[#2C2C2C] text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 flex items-center gap-4"
            >
              <HiOutlinePhone className="h-7 w-7" />
              Call Now: 096621 43430
              <HiOutlineArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
            </a>

            <a
              href="https://wa.me/919662143430"
              className="group bg-white text-[#2C2C2C] px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 flex items-center gap-4"
            >
              <HiOutlineEnvelope className="h-7 w-7" />
              WhatsApp Us
            </a>

            <a
              href="/booking"
              className="group border-3 border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 flex items-center gap-4"
            >
              <HiOutlineSparkles className="h-7 w-7" />
              Online Booking
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-12 text-[#2C2C2C]/70">
            <div className="flex items-center gap-3">
              <HiOutlineShieldCheck className="h-8 w-8" />
              <span className="font-semibold">Trusted Professionals</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineClock className="h-8 w-8" />
              <span className="font-semibold">Open Until 10 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineMapPin className="h-8 w-8" />
              <span className="font-semibold">Convenient Location</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* Phone */}
            <div className="group">
              <div className="bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlinePhone className="h-8 w-8 text-[#2C2C2C]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
              <a 
                href="tel:09662143430"
                className="text-[#D4A574] text-xl font-semibold hover:text-[#F5E6D3] transition-colors duration-300"
              >
                096621 43430
              </a>
            </div>

            {/* Location */}
            <div className="group">
              <div className="bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineMapPin className="h-8 w-8 text-[#2C2C2C]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-white/80 leading-relaxed">
                Amarr salon1, Sadguru Saran,<br />
                MG Rd, near MALBAR HILLS,<br />
                Nikol, Ahmedabad, Gujarat 380049
              </p>
            </div>

            {/* Hours */}
            <div className="group">
              <div className="bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineClock className="h-8 w-8 text-[#2C2C2C]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Hours</h3>
              <p className="text-[#D4A574] text-xl font-semibold">Open Until 10 PM</p>
              <p className="text-white/80 mt-2">Daily</p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7963!2d72.6472!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzgnNTAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}