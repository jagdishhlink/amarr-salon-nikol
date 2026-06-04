'use client'
import Image from 'next/image'
import { HiOutlineStar, HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineHeart, HiOutlineArrowRight, HiOutlineClock } from 'react-icons/hi2'

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810] via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
            <Image 
              src="/images/business-2.jpg" 
              alt="Beauty services at Amarr Salon Nikol"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <HiOutlineSparkles className="text-[#D4AF37] text-lg" />
            <span className="text-[#D4AF37] font-medium">Professional Beauty Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Complete Range of<br />
            <span className="text-[#D4AF37]">Beauty Treatments</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            We offer a complete range of beauty treatments designed to enhance your natural beauty. Our experienced staff ensures each service is performed with the utmost care and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#F5E6D3] transition-all duration-300 transform hover:scale-105">
              Book Your Appointment
            </button>
            <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
              Call Now: 096621 43430
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2C1810] mb-2">4.4★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2C1810] mb-2">397+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2C1810] mb-2">10PM</div>
              <div className="text-gray-600">Open Until</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2C1810] mb-2">MG Rd</div>
              <div className="text-gray-600">Prime Location</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-[#2C1810] mb-6">Our Signature Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience gentle, attentive service with our skilled beauty professionals</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Pedicure Services */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                <Image 
                  src="/images/business-3.jpg" 
                  alt="Professional pedicure experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2C1810] mb-4">Gentle Pedicure Experience</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Professional and attentive pedicure services that leave your feet feeling refreshed and beautiful. Our gentle approach ensures maximum comfort.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <HiOutlineStar className="text-[#D4AF37] text-lg" />
                    <span className="text-[#D4AF37] font-medium">5★ Rated</span>
                  </div>
                  <button className="flex items-center gap-2 text-[#D4AF37] hover:gap-3 transition-all duration-300">
                    Book Now <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Cleanup Treatment */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                <Image 
                  src="/images/business-4.jpg" 
                  alt="Mini facial cleanup treatment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2C1810] mb-4">Cleanup Treatment</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Our cleanup service is like a mini facial that focuses on removing blackheads and deep cleaning your skin for a refreshed look.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <HiOutlineSparkles className="text-[#D4AF37] text-lg" />
                    <span className="text-[#D4AF37] font-medium">Deep Clean</span>
                  </div>
                  <button className="flex items-center gap-2 text-[#D4AF37] hover:gap-3 transition-all duration-300">
                    Learn More <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Mini Facial */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                <Image 
                  src="/images/business-5.jpg" 
                  alt="Refreshing mini facial treatment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2C1810] mb-4">Mini Facial Treatment</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Refreshing facial treatments that cleanse and rejuvenate your skin, leaving you with a healthy, radiant glow.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <HiOutlineHeart className="text-[#D4AF37] text-lg" />
                    <span className="text-[#D4AF37] font-medium">Radiant Glow</span>
                  </div>
                  <button className="flex items-center gap-2 text-[#D4AF37] hover:gap-3 transition-all duration-300">
                    Book Now <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 id="hair" className="text-4xl font-light text-[#2C1810] mb-8">Hair Services</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#F5E6D3]/20 transition-colors duration-300">
                  <HiOutlineCheckCircle className="text-[#D4AF37] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Professional Hair Styling</h3>
                    <p className="text-gray-600">Expert cuts, styling, and treatments for all hair types with personalized attention.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#F5E6D3]/20 transition-colors duration-300">
                  <HiOutlineCheckCircle className="text-[#D4AF37] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Color Treatments</h3>
                    <p className="text-gray-600">Professional coloring services to enhance your natural beauty with quality products.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#F5E6D3]/20 transition-colors duration-300">
                  <HiOutlineCheckCircle className="text-[#D4AF37] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Hair Care Treatments</h3>
                    <p className="text-gray-600">Nourishing treatments to keep your hair healthy, shiny, and manageable.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image 
                  src="/images/business-6.jpg" 
                  alt="Professional hair services at Amarr Salon"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image 
                  src="/images/business-7.jpg" 
                  alt="Facial treatments and cleanup services"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 id="facial" className="text-4xl font-light text-[#2C1810] mb-8">Facial Treatments</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#F5E6D3]/20 transition-colors duration-300">
                  <HiOutlineSparkles className="text-[#D4AF37] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Deep Cleanup Treatment</h3>
                    <p className="text-gray-600">Mini facial service focusing on blackhead removal and deep skin cleansing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#F5E6D3]/20 transition-colors duration-300">
                  <HiOutlineSparkles className="text-[#D4AF37] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Refreshing Mini Facial</h3>
                    <p className="text-gray-600">Quick rejuvenating facial to cleanse and refresh your skin for an instant glow.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#F5E6D3]/20 transition-colors duration-300">
                  <HiOutlineSparkles className="text-[#D4AF37] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Skin Brightening</h3>
                    <p className="text-gray-600">Professional treatments to enhance your natural radiance and skin tone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="beauty" className="text-4xl font-light text-[#2C1810] mb-8">Beauty Services</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#F5E6D3]/20 transition-colors duration-300">
                  <HiOutlineHeart className="text-[#D4AF37] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Gentle Pedicure</h3>
                    <p className="text-gray-600">Professional, gentle, and attentive pedicure services for beautiful, healthy feet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#F5E6D3]/20 transition-colors duration-300">
                  <HiOutlineHeart className="text-[#D4AF37] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Manicure Services</h3>
                    <p className="text-gray-600">Complete hand care with professional manicure treatments and nail styling.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#F5E6D3]/20 transition-colors duration-300">
                  <HiOutlineHeart className="text-[#D4AF37] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Beauty Consultations</h3>
                    <p className="text-gray-600">Personalized beauty advice and treatment recommendations from our experts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image 
                  src="/images/business-8.jpg" 
                  alt="Professional beauty services and pedicures"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-[#2C1810]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-white mb-6">Why Choose Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the difference of gentle, professional, and attentive beauty care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineHeart className="text-black text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Gentle Approach</h3>
              <p className="text-gray-300">Professional and gentle service that prioritizes your comfort throughout every treatment.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineCheckCircle className="text-black text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Attentive Care</h3>
              <p className="text-gray-300">Personalized attention to detail ensuring each client receives the care they deserve.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineClock className="text-black text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Flexible Hours</h3>
              <p className="text-gray-300">Open until 10 PM to accommodate your busy schedule with convenient appointment times.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineStar className="text-black text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">4.4★ Rated</h3>
              <p className="text-gray-300">Trusted by 397+ customers who consistently rate our services highly for quality and care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pricing CTA */}
      <section className="py-24 bg-gradient-to-br from-[#F5E6D3] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light text-[#2C1810] mb-8">Transparent Pricing</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            We always discuss pricing before beginning any service. Feel free to ask about costs for any treatment you're interested in.
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <HiOutlineCheckCircle className="text-[#D4AF37] text-3xl" />
              <span className="text-2xl font-semibold text-[#2C1810]">No Hidden Costs</span>
            </div>
            <p className="text-gray-600 mb-8">All pricing is explained upfront so you can make informed decisions about your beauty treatments.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#2C1810] hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-105">
                Get Price Quote
              </button>
              <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                Call: 096621 43430
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#2C1810] mb-8">What Our Customers Say</h2>
          </div>
          
          <div className="bg-gradient-to-br from-[#F5E6D3] to-white rounded-3xl p-12 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((star) => (
                  <HiOutlineStar key={star} className="text-[#D4AF37] text-2xl fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl text-[#2C1810] text-center mb-8 italic leading-relaxed">
              "Had a lovely pedicure experience at the salon. Thanks to Bhoomi, she did an amazing job very gentle, professional, and attentive. Truly enjoyed the service."
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-[#2C1810] text-lg">Barkha Shekhawat</div>
              <div className="text-gray-600">Verified Customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#2C1810]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light text-white mb-8">Ready for Your Beauty Transformation?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Experience the gentle, professional, and attentive service that has earned us a 4.4★ rating from 397+ satisfied customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#D4AF37] text-black px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-[#2C1810] transition-all duration-300 transform hover:scale-105">
              Book Your Appointment Today
            </button>
            <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
              Call Now: 096621 43430
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}