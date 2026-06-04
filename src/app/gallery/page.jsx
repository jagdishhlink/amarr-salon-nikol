'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineStar, HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineHeart, HiOutlineArrowRight } from 'react-icons/hi2'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { id: 'all', name: 'All Work', count: 48 },
    { id: 'hair-styling', name: 'Hair Styling', count: 18 },
    { id: 'bridal', name: 'Bridal Looks', count: 12 },
    { id: 'makeup', name: 'Makeup', count: 15 },
    { id: 'treatments', name: 'Treatments', count: 8 }
  ]

  const galleryItems = [
    { id: 1, category: 'hair-styling', image: '/images/business-1.jpg', title: 'Elegant Layered Cut', description: 'Modern layered styling with natural volume' },
    { id: 2, category: 'bridal', image: '/images/business-2.jpg', title: 'Traditional Bridal Look', description: 'Classic Indian bridal hair & makeup' },
    { id: 3, category: 'makeup', image: '/images/business-3.jpg', title: 'Glamour Evening Look', description: 'Sophisticated evening makeup artistry' },
    { id: 4, category: 'hair-styling', image: '/images/business-4.jpg', title: 'Curly Hair Transformation', description: 'Natural curl enhancement and styling' },
    { id: 5, category: 'treatments', image: '/images/business-5.jpg', title: 'Hair Treatment Results', description: 'Deep conditioning and repair treatment' },
    { id: 6, category: 'bridal', image: '/images/business-6.jpg', title: 'Mehendi Ceremony Look', description: 'Beautiful pre-wedding styling' },
    { id: 7, category: 'makeup', image: '/images/business-7.jpg', title: 'Party Makeup', description: 'Vibrant party-ready makeup look' },
    { id: 8, category: 'hair-styling', image: '/images/business-8.jpg', title: 'Short Hair Styling', description: 'Chic and modern short hair cut' },
    { id: 9, category: 'treatments', image: '/images/business-9.jpg', title: 'Hair Color Treatment', description: 'Professional hair coloring service' },
    { id: 10, category: 'bridal', image: '/images/business-10.jpg', title: 'Reception Ready', description: 'Elegant reception hairstyle' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const beforeAfterShowcase = [
    { 
      before: '/images/business-3.jpg', 
      after: '/images/business-4.jpg', 
      service: 'Hair Transformation',
      description: 'Complete makeover with cut, color and styling'
    },
    { 
      before: '/images/business-7.jpg', 
      after: '/images/business-8.jpg', 
      service: 'Bridal Package',
      description: 'Traditional bridal look with modern elegance'
    },
    { 
      before: '/images/business-5.jpg', 
      after: '/images/business-6.jpg', 
      service: 'Hair Treatment',
      description: 'Damaged hair restoration and styling'
    }
  ]

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C2C2C] via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/30"></div>
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-gradient-to-br from-[#2C2C2C] to-gray-800">
            <Image
              src="/images/business-1.jpg"
              alt="Gallery showcase"
              fill
              className="object-cover opacity-20"
              unoptimized
            />
          </div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#D4A574]/20 text-[#D4A574] text-sm font-medium mb-4">
              <HiOutlineSparkles className="w-4 h-4 mr-2" />
              Transformation Gallery
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Beauty
            <span className="text-transparent bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] bg-clip-text block">
              Transformations
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Witness the artistry of our skilled beauticians through stunning before & after transformations and our portfolio of elegant styling work.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center">
              <HiOutlineStar className="w-5 h-5 text-[#D4A574] mr-2" />
              <span>4.4/5 Rating</span>
            </div>
            <div className="flex items-center">
              <HiOutlineCheckCircle className="w-5 h-5 text-[#D4A574] mr-2" />
              <span>397+ Happy Clients</span>
            </div>
            <div className="flex items-center">
              <HiOutlineHeart className="w-5 h-5 text-[#D4A574] mr-2" />
              <span>Professional Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#D4A574] text-black shadow-lg shadow-[#D4A574]/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#F5E6D3] hover:text-[#2C2C2C]'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-24 bg-gradient-to-br from-[#F5E6D3]/20 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
              Stunning <span className="text-[#D4A574]">Transformations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the remarkable before and after results that showcase our expertise in beauty transformations
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16">
            {beforeAfterShowcase.map((item, index) => (
              <div key={index} className="group">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                  <div className="flex-1 space-y-6">
                    <div className="relative">
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl">
                        <Image
                          src={item.before}
                          alt="Before transformation"
                          width={400}
                          height={500}
                          className="object-cover w-full h-[400px]"
                          unoptimized
                        />
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Before
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 bg-[#D4A574] rounded-full flex items-center justify-center shadow-lg">
                      <HiOutlineArrowRight className="w-6 h-6 text-black" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{item.service}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div className="relative">
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={item.after}
                          alt="After transformation"
                          width={400}
                          height={500}
                          className="object-cover w-full h-[400px]"
                          unoptimized
                        />
                        <div className="absolute top-4 left-4 bg-[#D4A574] text-black px-3 py-1 rounded-full text-sm font-medium">
                          After
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
              Our <span className="text-[#D4A574]">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore our collection of beautiful styling work and transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`group cursor-pointer ${
                  index % 6 === 0 || index % 6 === 3 ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className={`object-cover w-full transition-transform duration-500 group-hover:scale-110 ${
                      index % 6 === 0 || index % 6 === 3 ? 'h-64 lg:h-80' : 'h-80'
                    }`}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-[#2C2C2C] to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl lg:text-5xl font-bold text-[#D4A574]">397+</div>
              <div className="text-white text-lg">Happy Clients</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl lg:text-5xl font-bold text-[#D4A574]">4.4</div>
              <div className="text-white text-lg">Star Rating</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl lg:text-5xl font-bold text-[#D4A574]">500+</div>
              <div className="text-white text-lg">Transformations</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl lg:text-5xl font-bold text-[#D4A574]">10</div>
              <div className="text-white text-lg">PM Closing</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#F5E6D3] to-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            Ready for Your <span className="text-[#D4A574]">Transformation?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and let our expert beauticians create your perfect look. Open until 10 PM for your convenience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#D4A574] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F5E6D3] transition-all duration-300 shadow-lg shadow-[#D4A574]/20 hover:shadow-xl hover:shadow-[#D4A574]/30 transform hover:scale-105">
              Book Your Appointment Today
            </button>
            <button className="border-2 border-[#D4A574] text-[#D4A574] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D4A574] hover:text-black transition-all duration-300">
              Call Now: 096621 43430
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white text-xl hover:text-[#D4A574] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="object-cover w-full h-auto"
                unoptimized
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}