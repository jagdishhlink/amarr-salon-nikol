'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineClock, HiOutlineEnvelope, HiOutlineCheckCircle, HiOutlineArrowRight } from 'react-icons/hi2'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Curved Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C2C2C] via-gray-800 to-black py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-9.jpg"
            alt="Amarr Salon Contact"
            fill
            unoptimized
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        
        {/* Flowing curves */}
        <div className="absolute -bottom-20 left-0 w-full h-40 bg-white transform rotate-2 rounded-t-[100px]"></div>
        <div className="absolute -bottom-16 right-0 w-2/3 h-32 bg-[#F5E6D3] transform -rotate-1 rounded-t-[80px] opacity-60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-1 bg-[#D4A574] rounded-full"></div>
              <span className="text-[#D4A574] font-medium tracking-wider">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Visit Our Beauty
              <span className="block text-[#D4A574] italic">Sanctuary</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Located conveniently on MG Road near MALBAR HILLS in Nikol, Ahmedabad. 
              Open until 10 PM daily for your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineMapPin className="w-8 h-8 text-[#2C2C2C]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">Visit Us</h3>
              <p className="text-gray-600 leading-relaxed">
                Amarr salon1, Sadguru Saran, MG Rd, near MALBAR HILLS, Nikol, Ahmedabad, Gujarat 380049
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlinePhone className="w-8 h-8 text-[#2C2C2C]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">Call Us</h3>
              <p className="text-gray-600 mb-2">
                <a href="tel:09662143430" className="hover:text-[#D4A574] transition-colors duration-300 text-lg font-medium">
                  096621 43430
                </a>
              </p>
              <p className="text-sm text-gray-500">Available during business hours</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineClock className="w-8 h-8 text-[#2C2C2C]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">Open Hours</h3>
              <p className="text-gray-600 mb-2 font-medium">Daily until 10 PM</p>
              <p className="text-sm text-gray-500">Extended hours for your convenience</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineEnvelope className="w-8 h-8 text-[#2C2C2C]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">Book Online</h3>
              <p className="text-gray-600 mb-4">Schedule your appointment through our booking system</p>
              <button className="text-[#D4A574] font-medium hover:text-[#2C2C2C] transition-colors duration-300 flex items-center gap-2">
                Book Now <HiOutlineArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form with Salon Image */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form Side */}
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] rounded-full opacity-10"></div>
              
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600">
                    Ready for your beauty transformation? Send us a message and we'll get back to you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[#D4A574] focus:ring-4 focus:ring-[#D4A574]/20 outline-none transition-all duration-300 text-[#2C2C2C] bg-gray-50 focus:bg-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[#D4A574] focus:ring-4 focus:ring-[#D4A574]/20 outline-none transition-all duration-300 text-[#2C2C2C] bg-gray-50 focus:bg-white"
                        placeholder="Your contact number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[#D4A574] focus:ring-4 focus:ring-[#D4A574]/20 outline-none transition-all duration-300 text-[#2C2C2C] bg-gray-50 focus:bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[#D4A574] focus:ring-4 focus:ring-[#D4A574]/20 outline-none transition-all duration-300 text-[#2C2C2C] bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="hair-styling">Hair Styling & Cut</option>
                      <option value="hair-coloring">Hair Coloring</option>
                      <option value="facial">Facial Treatments</option>
                      <option value="bridal">Bridal Package</option>
                      <option value="party">Party Makeup</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[#D4A574] focus:ring-4 focus:ring-[#D4A574]/20 outline-none transition-all duration-300 text-[#2C2C2C] bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your beauty goals or any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-[#D4A574] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white'
                    } transform hover:scale-105`}
                  >
                    {isSubmitted ? (
                      <>
                        <HiOutlineCheckCircle className="w-6 h-6" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        Send Message
                        <HiOutlineArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-[#F5E6D3] to-[#D4A574] rounded-full opacity-20"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business-1.jpg"
                  alt="Amarr Salon Interior"
                  width={600}
                  height={700}
                  unoptimized
                  className="object-cover w-full h-[700px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-transparent to-transparent"></div>
                
                {/* Floating info card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Professional Beauty Services</h3>
                  <p className="text-gray-600 text-sm mb-4">Experience luxury beauty treatments in our modern salon with extended hours until 10 PM.</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A574] to-[#F5E6D3] border-2 border-white"></div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">397+ happy clients</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#D4A574]">4.4★</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
              Find Us Easily
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conveniently located on MG Road near MALBAR HILLS in Nikol, Ahmedabad. 
              Easy access with nearby parking available.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 lg:h-[500px] flex items-center justify-center">
              <div className="text-center">
                <HiOutlineMapPin className="w-16 h-16 text-[#D4A574] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-6">Get directions to our salon</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[#D4A574] text-[#2C2C2C] px-8 py-3 rounded-2xl font-semibold hover:bg-[#2C2C2C] hover:text-white transition-all duration-300">
                    Get Directions
                  </button>
                  <button className="border-2 border-[#D4A574] text-[#D4A574] px-8 py-3 rounded-2xl font-semibold hover:bg-[#D4A574] hover:text-[#2C2C2C] transition-all duration-300">
                    View on Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-[#2C2C2C] to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-10.jpg"
            alt="Contact Amarr Salon"
            fill
            unoptimized
            className="object-cover opacity-10 mix-blend-overlay"
          />
        </div>
        
        {/* Flowing decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#D4A574]/20 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#F5E6D3]/10 to-transparent rounded-full translate-x-40 translate-y-40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready for Your
            <span className="block text-[#D4A574] italic">Transformation?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book your appointment today and experience professional beauty services 
            at Amarr Salon Nikol. We're open until 10 PM for your convenience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:09662143430"
              className="bg-[#D4A574] text-[#2C2C2C] px-12 py-5 rounded-3xl font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              <HiOutlinePhone className="w-6 h-6" />
              Call Now: 096621 43430
            </a>
            
            <button className="border-2 border-[#D4A574] text-[#D4A574] px-12 py-5 rounded-3xl font-bold text-lg hover:bg-[#D4A574] hover:text-[#2C2C2C] hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3">
              <HiOutlineArrowRight className="w-6 h-6" />
              Book Online
            </button>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#D4A574] mb-2">397+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4A574] mb-2">4.4★</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4A574] mb-2">10 PM</div>
              <div className="text-gray-300">Extended Hours</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}