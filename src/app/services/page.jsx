'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineSparkles, HiOutlineHeart, HiOutlineStar, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineChevronRight } from 'react-icons/hi2'

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: HiOutlineSparkles },
    { id: 'hair', name: 'Hair Care', icon: HiOutlineHeart },
    { id: 'skin', name: 'Skin Care', icon: HiOutlineStar },
    { id: 'special', name: 'Special Occasions', icon: HiOutlineCheckCircle }
  ]

  const services = [
    {
      category: 'hair',
      title: 'Hair Cutting & Styling',
      description: 'Professional cuts and styling to enhance your natural beauty',
      features: ['Consultation included', 'Personalized styling', 'Premium products'],
      duration: '45-60 mins',
      popular: true
    },
    {
      category: 'hair',
      title: 'Hair Coloring & Highlights',
      description: 'Expert coloring services with latest techniques and quality products',
      features: ['Color consultation', 'Patch test included', 'Touch-up guidance'],
      duration: '90-120 mins',
      popular: false
    },
    {
      category: 'hair',
      title: 'Hair Treatments',
      description: 'Deep conditioning and repair treatments for healthy, lustrous hair',
      features: ['Scalp analysis', 'Customized treatment', 'Home care advice'],
      duration: '60-75 mins',
      popular: true
    },
    {
      category: 'skin',
      title: 'Facial Treatments',
      description: 'Rejuvenating facials tailored to your skin type and concerns',
      features: ['Skin analysis', 'Deep cleansing', 'Moisturizing mask'],
      duration: '60-90 mins',
      popular: true
    },
    {
      category: 'skin',
      title: 'Beauty Cleanup',
      description: 'Complete facial cleanup for fresh, glowing skin',
      features: ['Blackhead removal', 'Toning treatment', 'Sun protection'],
      duration: '45-60 mins',
      popular: false
    },
    {
      category: 'special',
      title: 'Bridal Packages',
      description: 'Complete bridal beauty services for your special day',
      features: ['Trial session', 'Hair & makeup', 'Touch-up kit'],
      duration: '2-3 hours',
      popular: true
    },
    {
      category: 'special',
      title: 'Party Makeup',
      description: 'Glamorous makeup for parties, events, and special occasions',
      features: ['Event consultation', 'Long-lasting formula', 'Photo-ready finish'],
      duration: '60-90 mins',
      popular: false
    },
    {
      category: 'special',
      title: 'Traditional Styling',
      description: 'Authentic Indian hairstyles and makeup for cultural events',
      features: ['Cultural expertise', 'Traditional techniques', 'Authentic products'],
      duration: '90-120 mins',
      popular: false
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const treatmentSteps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Personal assessment of your beauty needs and preferences'
    },
    {
      step: 2,
      title: 'Preparation',
      description: 'Professional setup with premium products and tools'
    },
    {
      step: 3,
      title: 'Treatment',
      description: 'Expert application of techniques tailored to you'
    },
    {
      step: 4,
      title: 'Finishing',
      description: 'Final touches and styling guidance for lasting results'
    }
  ]

  const whyChooseUs = [
    {
      title: 'Extended Hours Until 10 PM',
      description: 'Flexible scheduling to fit your busy lifestyle',
      icon: HiOutlineSparkles
    },
    {
      title: 'Professional Expertise',
      description: 'Skilled beauticians with years of experience',
      icon: HiOutlineStar
    },
    {
      title: 'Quality Products',
      description: 'Premium beauty products for best results',
      icon: HiOutlineCheckCircle
    },
    {
      title: 'Convenient Location',
      description: 'Easy to find on MG Road near MALBAR HILLS',
      icon: HiOutlineHeart
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C] to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-3.jpg"
            alt="Professional beauty services"
            fill
            className="object-cover opacity-40"
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-[#D4A574]/10 rounded-full border border-[#D4A574]/20 mb-8">
              <HiOutlineSparkles className="w-5 h-5 text-[#D4A574] mr-2" />
              <span className="text-[#D4A574] text-sm font-medium">Professional Beauty Services</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] bg-clip-text text-transparent">
                Natural Beauty
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              From hair styling to complete beauty treatments, we offer comprehensive beauty parlour services to enhance your natural beauty. Our skilled professionals use quality products and techniques to deliver results you'll love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#D4A574] text-black px-8 py-4 rounded-2xl font-semibold hover:bg-[#F5E6D3] transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Book Your Appointment Today
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/10 transition-all duration-300">
                Call Now: 096621 43430
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 text-white">
            <path d="M0,120 C300,60 900,180 1200,120 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
              Our Beauty Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of professional beauty treatments designed to make you look and feel your best
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#D4A574] text-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#F5E6D3]'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:border-[#D4A574]/20"
              >
                {service.popular && (
                  <div className="inline-flex items-center px-3 py-1 bg-[#D4A574] text-black text-sm font-medium rounded-full mb-4">
                    <HiOutlineStar className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4 group-hover:text-[#D4A574] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <HiOutlineCheckCircle className="w-5 h-5 text-[#D4A574] mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                  <button className="text-[#D4A574] font-medium hover:text-[#2C2C2C] transition-colors duration-300 flex items-center">
                    Book Now
                    <HiOutlineArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-32 bg-gradient-to-br from-[#2C2C2C] to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-8">
                Our Beauty
                <span className="block text-[#D4A574]">Treatment Process</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Every treatment at Amarr Salon follows our proven process to ensure you receive the best possible results with personalized attention.
              </p>
              <div className="space-y-8">
                {treatmentSteps.map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#D4A574] rounded-2xl flex items-center justify-center text-black font-bold text-lg mr-6">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4A574] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/20 to-[#F5E6D3]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                <Image
                  src="/images/business-8.jpg"
                  alt="Beauty treatment process"
                  width={600}
                  height={700}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#F5E6D3]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#2C2C2C] mb-6">
              Why Choose Amarr Salon?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional beauty wisdom with modern techniques to deliver exceptional results in a welcoming environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-[#D4A574]/20 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-[#2C2C2C]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#D4A574] mb-2">4.4/5</div>
                <div className="flex justify-center mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <HiOutlineStar key={star} className="w-5 h-5 text-[#D4A574] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">From 397+ satisfied customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4A574] mb-2">10 PM</div>
                <p className="text-gray-600">Extended hours daily for your convenience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4A574] mb-2">MG Road</div>
                <p className="text-gray-600">Prime location near MALBAR HILLS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Showcase */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-[#2C2C2C] mb-8">
                Experience Professional Beauty Care
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-square">
                  <Image
                    src="/images/business-4.jpg"
                    alt="Hair styling services"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Hair Styling</h3>
                      <p className="text-gray-300">Professional cuts and styling</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-square">
                  <Image
                    src="/images/business-6.jpg"
                    alt="Skin care treatments"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Skin Care</h3>
                      <p className="text-gray-300">Rejuvenating facial treatments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2C2C2C] to-gray-800 rounded-3xl p-8 text-white flex flex-col justify-center">
              <HiOutlineSparkles className="w-12 h-12 text-[#D4A574] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Schedule your appointment today and experience professional beauty services in Nikol's most convenient location.
              </p>
              <button className="bg-[#D4A574] text-black px-6 py-3 rounded-2xl font-semibold hover:bg-[#F5E6D3] transition-all duration-300 flex items-center justify-center">
                Book Now
                <HiOutlineChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}