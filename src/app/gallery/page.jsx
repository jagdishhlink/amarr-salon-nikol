'use client'

import Image from 'next/image'
import { useState } from 'react'
import { HiOutlineStar, HiOutlineHeart, HiOutlineArrowRight, HiOutlineSparkles } from 'react-icons/hi2'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredImage, setHoveredImage] = useState(null)

  const categories = [
    { id: 'all', name: 'All Transformations', count: 28 },
    { id: 'hair', name: 'Hair Services', count: 12 },
    { id: 'facial', name: 'Facial Treatments', count: 8 },
    { id: 'pedicure', name: 'Pedicure Experience', count: 8 }
  ]

  const transformations = [
    {
      id: 1,
      category: 'hair',
      title: 'Complete Hair Transformation',
      description: 'Professional styling with gentle care and attention to detail',
      beforeImage: '/images/business-1.jpg',
      afterImage: '/images/business-2.jpg',
      service: 'Hair Styling & Treatment',
      duration: '2.5 hours',
      rating: 5,
      testimonial: 'The team was so gentle and professional throughout the entire process'
    },
    {
      id: 2,
      category: 'facial',
      title: 'Mini Facial & Cleanup',
      description: 'Deep cleaning treatment focusing on blackheads removal',
      beforeImage: '/images/business-3.jpg',
      afterImage: '/images/business-4.jpg',
      service: 'Cleanup Treatment',
      duration: '45 minutes',
      rating: 5,
      testimonial: 'Amazing results with the cleanup service, very attentive staff'
    },
    {
      id: 3,
      category: 'pedicure',
      title: 'Relaxing Pedicure Experience',
      description: 'Gentle, professional pedicure service by our expert Bhoomi',
      beforeImage: '/images/business-5.jpg',
      afterImage: '/images/business-6.jpg',
      service: 'Professional Pedicure',
      duration: '60 minutes',
      rating: 5,
      testimonial: 'Had a lovely pedicure experience, very gentle and professional'
    },
    {
      id: 4,
      category: 'hair',
      title: 'Color & Style Makeover',
      description: 'Complete hair transformation with color and professional styling',
      beforeImage: '/images/business-7.jpg',
      afterImage: '/images/business-8.jpg',
      service: 'Hair Color & Styling',
      duration: '3 hours',
      rating: 5,
      testimonial: 'Absolutely love my new look, the staff was so attentive'
    },
    {
      id: 5,
      category: 'facial',
      title: 'Brightening Facial Treatment',
      description: 'Professional facial service for glowing, refreshed skin',
      beforeImage: '/images/business-9.jpg',
      afterImage: '/images/business-10.jpg',
      service: 'Brightening Facial',
      duration: '75 minutes',
      rating: 5,
      testimonial: 'My skin has never looked better, truly professional service'
    },
    {
      id: 6,
      category: 'pedicure',
      title: 'Luxury Pedicure Session',
      description: 'Complete foot care with gentle, attentive service',
      beforeImage: '/images/business-1.jpg',
      afterImage: '/images/business-3.jpg',
      service: 'Luxury Pedicure',
      duration: '90 minutes',
      rating: 5,
      testimonial: 'The most relaxing pedicure experience I have ever had'
    }
  ]

  const filteredTransformations = activeCategory === 'all' 
    ? transformations 
    : transformations.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#2C1810] via-gray-800 to-[#2C1810]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <HiOutlineSparkles className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-medium">Transformation Gallery</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-none">
                Real Beauty 
                <span className="block text-transparent bg-gradient-to-r from-[#D4AF37] to-yellow-400 bg-clip-text">
                  Transformations
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Witness the gentle, professional artistry that has earned us a 4.4-star rating. 
                Each transformation tells a story of attentive care and stunning results.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">397+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold">
                    <span className="text-[#D4AF37]">4.4</span>
                    <HiOutlineStar className="w-6 h-6 text-[#D4AF37] fill-current" />
                  </div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">28+</div>
                  <div className="text-gray-400">Transformations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="space-y-4 lg:space-y-6">
                  <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                      <Image
                        src="/images/business-1.jpg"
                        alt="Transformation showcase"
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 lg:mt-12">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                      <Image
                        src="/images/business-3.jpg"
                        alt="Beauty transformation"
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 lg:space-y-6 lg:mt-8">
                  <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                      <Image
                        src="/images/business-2.jpg"
                        alt="Professional styling"
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                      <Image
                        src="/images/business-4.jpg"
                        alt="Gentle care service"
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C1810] mb-6">
              Explore Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our collection of beautiful transformations, showcasing the gentle, 
              professional care that makes each client feel special and confident.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/30'
                    : 'bg-white text-gray-600 hover:bg-[#F5E6D3] hover:text-[#2C1810] shadow-md'
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.name}
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-black/20 text-black'
                      : 'bg-gray-200 text-gray-500 group-hover:bg-[#D4AF37]/20 group-hover:text-[#2C1810]'
                  }`}>
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Transformation Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {filteredTransformations.map((transformation, index) => (
              <div
                key={transformation.id}
                className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                  index % 3 === 1 ? 'xl:mt-12' : ''
                }`}
                onMouseEnter={() => setHoveredImage(transformation.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-500">
                  {/* Before/After Images */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-2">
                      {/* Before */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                        <Image
                          src={transformation.beforeImage}
                          alt="Before transformation"
                          width={400}
                          height={320}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          unoptimized
                        />
                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          Before
                        </div>
                      </div>
                      {/* After */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                        <Image
                          src={transformation.afterImage}
                          alt="After transformation"
                          width={400}
                          height={320}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          unoptimized
                        />
                        <div className="absolute top-4 right-4 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-medium">
                          After
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center text-[#D4AF37]">
                        {[...Array(transformation.rating)].map((_, i) => (
                          <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{transformation.duration}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#2C1810] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {transformation.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {transformation.description}
                    </p>

                    <div className="bg-[#F5E6D3] rounded-xl p-4 mb-6">
                      <p className="text-[#2C1810] italic font-medium text-sm">
                        "{transformation.testimonial}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#2C1810] px-4 py-2 rounded-full text-sm font-medium">
                        <HiOutlineSparkles className="w-4 h-4 text-[#D4AF37]" />
                        {transformation.service}
                      </span>
                      
                      <button className="flex items-center gap-2 text-[#D4AF37] font-medium hover:text-[#2C1810] transition-colors duration-300 group/btn">
                        View Details
                        <HiOutlineArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#2C1810] mb-6">
              Our Gentle, Professional Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every transformation begins with attentive consultation and ends with your complete satisfaction. 
              Experience the care that has earned us 397+ five-star reviews.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C1810] mb-3">Gentle Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We begin every service with attentive listening, understanding your needs and explaining 
                    all treatments and pricing upfront so there are no surprises.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C1810] mb-3">Professional Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our experienced team, including specialists like Bhoomi, provides gentle, 
                    professional care using premium products and proven techniques.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C1810] mb-3">Beautiful Results</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Walk away feeling refreshed and confident, with results that reflect our commitment 
                    to excellence and attention to every detail.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <Image
                        src="/images/business-5.jpg"
                        alt="Professional consultation"
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                      <Image
                        src="/images/business-7.jpg"
                        alt="Gentle service"
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <Image
                        src="/images/business-6.jpg"
                        alt="Professional results"
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                      <Image
                        src="/images/business-8.jpg"
                        alt="Beautiful transformation"
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#F5E6D3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center items-center gap-2 text-[#D4AF37] mb-6">
                {[...Array(5)].map((_, i) => (
                  <HiOutlineStar key={i} className="w-8 h-8 fill-current" />
                ))}
              </div>
              <blockquote className="text-3xl lg:text-4xl font-bold text-[#2C1810] leading-relaxed mb-8">
                "Had a lovely pedicure experience at the salon. Thanks to Bhoomi, she did an amazing job - 
                very gentle, professional, and attentive. Truly enjoyed the service."
              </blockquote>
              <cite className="text-xl text-gray-600 font-medium">— Barkha Shekhawat</cite>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <button className="bg-[#D4AF37] hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book Your Appointment
              </button>
              <button className="bg-white hover:bg-[#F5E6D3] text-[#2C1810] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-md border-2 border-[#D4AF37]">
                Call: 096621 43430
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}