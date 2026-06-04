'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineStar, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineChevronDown, HiOutlineSparkles, HiOutlineHeart, HiOutlineBolt, HiOutlineShieldCheck } from 'react-icons/hi2'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({ clients: 0, rating: 0, reviews: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (statsVisible) {
      const animateValue = (start, end, duration, key) => {
        let startTimestamp = null
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp
          const progress = Math.min((timestamp - startTimestamp) / duration, 1)
          const value = Math.floor(progress * (end - start) + start)
          setAnimatedStats(prev => ({ ...prev, [key]: value }))
          if (progress < 1) {
            window.requestAnimationFrame(step)
          }
        }
        window.requestAnimationFrame(step)
      }

      animateValue(0, 397, 2000, 'reviews')
      animateValue(0, 4.4, 2000, 'rating')
      animateValue(0, 1200, 2500, 'clients')
    }
  }, [statsVisible])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C1810] via-gray-800 to-[#2C1810] animate-pulse">
        {/* Gradient Blobs */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl opacity-20 animate-bounce"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-[#F5E6D3] rounded-full blur-3xl opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Floating Trust Indicators */}
          <div className="absolute -top-16 left-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-xl animate-pulse delay-100">
            <div className="flex items-center gap-2">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">4.4/5 Rating</span>
            </div>
          </div>

          <div className="absolute -top-8 right-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-xl animate-pulse delay-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">397+</div>
              <div className="text-white/80 text-sm">Reviews</div>
            </div>
          </div>

          <div className="absolute top-32 -right-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-3 shadow-xl animate-pulse delay-500">
            <div className="flex items-center gap-2">
              <HiOutlineClock className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-white/90 text-sm">Open Until 10 PM</span>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="space-y-8 pt-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-white">
              Professional
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6D3] bg-clip-text text-transparent">
                Beauty Care
              </span>
              <br />
              in Nikol
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience gentle, attentive service with our skilled beauty professionals. From relaxing pedicures to refreshing cleanup treatments.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="bg-[#D4AF37] text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:bg-[#F5E6D3] group">
                Book Your Appointment
                <HiOutlineArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <a href="tel:09662143430" className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-500 backdrop-blur-xl group">
                <HiOutlinePhone className="inline-block mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Call Now: 096621 43430
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Social Proof Engine */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#2C1810] to-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#D4AF37]">{animatedStats.rating.toFixed(1)}</div>
                <div className="flex justify-center text-[#D4AF37] text-xl mb-2">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <div className="text-white/80 text-sm">Google Rating</div>
              </div>
              
              <div className="w-px h-16 bg-white/20 mx-8"></div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-[#D4AF37]">{animatedStats.reviews}+</div>
                <div className="text-white/80 text-sm mt-2">Verified Reviews</div>
              </div>
              
              <div className="w-px h-16 bg-white/20 mx-8"></div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-[#D4AF37]">{animatedStats.clients}+</div>
                <div className="text-white/80 text-sm mt-2">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: HiOutlineShieldCheck, text: "Gentle & Professional" },
              { icon: HiOutlineHeart, text: "Attentive Service" },
              { icon: HiOutlineBolt, text: "Open Until 10 PM" },
              { icon: HiOutlineSparkles, text: "Near Malbar Hills" }
            ].map((badge, index) => (
              <div key={index} className={`text-center p-6 border border-gray-200 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-500 delay-[${index * 100}ms]`}>
                <badge.icon className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
                <div className="text-[#2C1810] font-semibold">{badge.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-6 leading-tight">
              Transformative Beauty
              <span className="block text-[#D4AF37]">Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer a complete range of beauty treatments designed to enhance your natural beauty. Our experienced staff ensures each service is performed with the utmost care and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pedicure Experience",
                description: "Gentle and professional pedicure services that leave your feet feeling refreshed and beautiful",
                icon: HiOutlineSparkles,
                popular: true,
                image: "/images/business-1.jpg"
              },
              {
                title: "Cleanup Treatment",
                description: "Mini facial service that focuses on removing blackheads and deep cleaning your skin",
                icon: HiOutlineHeart,
                image: "/images/business-2.jpg"
              },
              {
                title: "Beauty Treatments",
                description: "Complete range of beauty services with personalized care and attention",
                icon: HiOutlineBolt,
                image: "/images/business-3.jpg"
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-[#D4AF37] text-black px-4 py-2 rounded-xl font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="relative h-64 bg-gradient-to-br from-[#2C1810] to-gray-800 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F5E6D3] rounded-2xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2C1810]">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <button className="w-full bg-[#2C1810] text-white py-3 rounded-xl font-semibold hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group">
                    Learn More
                    <HiOutlineArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37] to-[#F5E6D3] rounded-3xl blur-lg opacity-20"></div>
              <div className="relative bg-gradient-to-br from-[#2C1810] to-gray-800 rounded-3xl overflow-hidden">
                <Image
                  src="/images/business-4.jpg"
                  alt="Salon Interior"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  unoptimized
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-[#2C1810] mb-6 leading-tight">
                  Why Choose
                  <span className="block text-[#D4AF37]">Amarr Salon Nikol?</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Located conveniently near Malbar Hills on MG Road, Amarr Salon Nikol has been serving the community with professional beauty services. Our team focuses on providing gentle, personalized care that leaves you feeling refreshed and beautiful.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Gentle and professional pedicure services",
                    description: "Expert care with attention to comfort and hygiene",
                    icon: HiOutlineSparkles
                  },
                  {
                    title: "Attentive staff who provide personalized care",
                    description: "Each client receives individualized attention",
                    icon: HiOutlineHeart
                  },
                  {
                    title: "Mini facial and cleanup treatments available",
                    description: "Deep cleaning with transparent pricing",
                    icon: HiOutlineBolt
                  },
                  {
                    title: "Convenient location near Malbar Hills",
                    description: "Easy access with flexible hours until 10 PM",
                    icon: HiOutlineCheckCircle
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F5E6D3] rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#2C1810] mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-6 leading-tight">
              Transformation
              <span className="block text-[#D4AF37]">Gallery</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              See the beautiful results of our professional beauty services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
              <div key={index} className={`relative group cursor-pointer overflow-hidden rounded-3xl ${index % 3 === 0 ? 'md:row-span-2' : ''}`}>
                <div className="relative bg-gradient-to-br from-[#2C1810] to-gray-800 aspect-square overflow-hidden">
                  <Image
                    src={`/images/business-${num}.jpg`}
                    alt={`Gallery Image ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-2xl font-semibold hover:bg-[#F5E6D3] hover:scale-105 transition-all duration-300">
              View Full Gallery
              <HiOutlineArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-6 leading-tight">
              Client
              <span className="block text-[#D4AF37]">Testimonials</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#F5E6D3] to-white p-12 rounded-3xl shadow-2xl">
              <div className="absolute -top-6 left-12">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">"</span>
                </div>
              </div>
              
              <div className="flex text-[#D4AF37] text-xl mb-6">
                {[...Array(5)].map((_, i) => (
                  <HiOutlineStar key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl text-[#2C1810] mb-8 leading-relaxed">
                "Had a lovely pedicure experience at the salon. Thanks to Bhoomi, she did an amazing job very <strong className="text-[#D4AF37]">gentle, professional, and attentive</strong>. Truly enjoyed the service."
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F5E6D3] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-[#2C1810]">Barkha Shekhawat</div>
                  <div className="text-gray-600 text-sm">Verified Google Review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process/How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-6 leading-tight">
              How It
              <span className="block text-[#D4AF37]">Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F5E6D3]"></div>
            
            {[
              {
                step: "01",
                title: "Book Your Visit",
                description: "Call us or visit our salon near Malbar Hills to schedule your appointment",
                icon: HiOutlinePhone
              },
              {
                step: "02",
                title: "Consultation",
                description: "We discuss your needs and explain all treatments with transparent pricing",
                icon: HiOutlineHeart
              },
              {
                step: "03",
                title: "Gentle Service",
                description: "Enjoy professional, attentive care from our experienced beauty professionals",
                icon: HiOutlineSparkles
              }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-xl mb-8 z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#F5E6D3] rounded-full"></div>
                  <process.icon className="relative w-10 h-10 text-white z-10" />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#2C1810] rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-bold text-sm">{process.step}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#2C1810] mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-6 leading-tight">
              Frequently Asked
              <span className="block text-[#D4AF37]">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is included in your cleanup treatment?",
                answer: "Our cleanup service is like a mini facial that focuses on removing blackheads and deep cleaning your skin. We'll explain the full process and pricing before starting any treatment."
              },
              {
                question: "Do you provide pricing information upfront?",
                answer: "Yes, we always discuss pricing before beginning any service. Feel free to ask about costs for any treatment you're interested in."
              },
              {
                question: "What are your operating hours?",
                answer: "We're open daily and close at 10 PM to accommodate your busy schedule. Call us to confirm availability for your preferred time slot."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-[#2C1810] pr-8">{faq.question}</h3>
                  <HiOutlineChevronDown 
                    className={`w-6 h-6 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openFaq === index ? 'max-h-96 pb-8' : 'max-h-0'
                  }`}
                >
                  <div className="px-8">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#2C1810] via-gray-800 to-[#2C1810]">
        {/* Floating Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#D4AF37] rounded-full blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#F5E6D3] rounded-full blur-xl opacity-20 animate-bounce"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Experience
            <span className="block text-[#D4AF37]">Professional Beauty Care?</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Book your appointment today and discover why our clients love our gentle, professional service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-[#D4AF37] text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:bg-[#F5E6D3] transition-all duration-500 group">
              Book Your Appointment
              <HiOutlineArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <a href="tel:09662143430" className="border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
              <HiOutlinePhone className="inline-block mr-2 w-5 h-5" />
              Call Now: 096621 43430
            </a>
            
            <a href="https://wa.me/919662143430" className="bg-green-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-green-700 hover:scale-105 transition-all duration-300">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlinePhone className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Call Us</h3>
              <a href="tel:09662143430" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-200">
                096621 43430
              </a>
            </div>
            
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlineMapPin className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Visit Us</h3>
              <p className="text-gray-600 leading-relaxed">
                Amarr salon1, Sadguru Saran, MG Rd, near MALBAR HILLS, Nikol, Ahmedabad, Gujarat 380049
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlineClock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Hours</h3>
              <p className="text-gray-600">
                Open Daily
                <span className="block text-[#D4AF37] font-semibold">Closes 10 PM</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}