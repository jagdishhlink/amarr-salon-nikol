'use client'
import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineClock, HiOutlineEnvelope, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineSparkles } from 'react-icons/hi2'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferred_time: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  const services = [
    'Pedicure Experience',
    'Mini Facial/Cleanup',
    'Hair Styling',
    'Beauty Consultation',
    'Custom Package',
    'Other'
  ]

  const timeSlots = [
    'Morning (9 AM - 12 PM)',
    'Afternoon (12 PM - 4 PM)',
    'Evening (4 PM - 7 PM)',
    'Night (7 PM - 10 PM)'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#2C1810] via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5E6D3]/10 backdrop-blur-sm px-4 py-2 rounded-full text-[#D4AF37] text-sm font-medium mb-6">
                <HiOutlineSparkles className="w-4 h-4" />
                Professional Beauty Care
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-none">
                Let's Connect
                <span className="block text-4xl lg:text-5xl text-[#D4AF37] mt-2">& Transform</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Ready for your beauty transformation? We're here to provide gentle, professional service that leaves you feeling refreshed and confident.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center">
                    <HiOutlineCheckCircle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">4.4★ Rating</h3>
                    <p className="text-gray-400 text-sm">397+ Happy Clients</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center">
                    <HiOutlineClock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Open Late</h3>
                    <p className="text-gray-400 text-sm">Until 10 PM Daily</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
                <Image
                  src="/images/business-7.jpg"
                  alt="Amarr Salon Nikol Contact"
                  width={600}
                  height={700}
                  className="w-full h-[600px] object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">396+</div>
                  <div className="text-black/80 font-medium">Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-bold text-[#2C1810] mb-6">
                Visit Our
                <span className="block text-[#D4AF37]">Salon</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Experience gentle, attentive service with our skilled beauty professionals in our convenient Nikol location.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5E6D3] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineMapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-2">Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Amarr salon1, Sadguru Saran, MG Rd,<br />
                      near MALBAR HILLS, Nikol,<br />
                      Ahmedabad, Gujarat 380049
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5E6D3] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlinePhone className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-2">Phone</h3>
                    <a href="tel:09662143430" className="text-gray-600 hover:text-[#D4AF37] transition-colors">
                      096621 43430
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5E6D3] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineClock className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-2">Hours</h3>
                    <p className="text-gray-600">Open Daily · Closes 10 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-[#2C1810] mb-8">Book Your Appointment</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <select
                        name="preferred_time"
                        value={formData.preferred_time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        required
                      >
                        <option value="">Select preferred time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      placeholder="Tell us about your beauty goals or any special requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Book Your Appointment
                    <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2C1810] mb-6">
              Find Us
              <span className="block text-[#D4AF37]">Easily</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located conveniently near Malbar Hills on MG Road for easy access from anywhere in Ahmedabad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Directions</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We're conveniently located on MG Road near Malbar Hills in Nikol. Easy parking available and accessible by public transport.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span className="text-gray-600">From Nikol Metro: 5 minutes walk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span className="text-gray-600">Near Malbar Hills landmark</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span className="text-gray-600">Parking available on-site</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:09662143430"
                    className="flex items-center gap-4 text-gray-600 hover:text-[#D4AF37] transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[#F5E6D3] group-hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors">
                      <HiOutlinePhone className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                    </div>
                    <span className="font-medium">096621 43430</span>
                  </a>
                  
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="w-10 h-10 bg-[#F5E6D3] rounded-lg flex items-center justify-center">
                      <HiOutlineClock className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="font-medium">Open Daily · Closes 10 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl aspect-square">
                <Image
                  src="/images/business-8.jpg"
                  alt="Amarr Salon Location"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="font-bold text-[#2C1810] mb-2">Amarr Salon Nikol</h4>
                  <p className="text-sm text-gray-600">MG Road, near Malbar Hills</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[#D4AF37] font-bold">4.4★</span>
                    <span className="text-xs text-gray-500">(397 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F5E6D3] px-4 py-2 rounded-full text-[#D4AF37] text-sm font-medium mb-6">
              <HiOutlineSparkles className="w-4 h-4" />
              Client Experience
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C1810] mb-8">
              What Our Clients Say
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#F5E6D3]/20 to-transparent rounded-3xl p-12 border border-[#F5E6D3]/30">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 text-[#D4AF37]">★</div>
              ))}
            </div>
            
            <blockquote className="text-2xl lg:text-3xl text-[#2C1810] font-light leading-relaxed mb-8">
              "Had a lovely pedicure experience at the salon. Thanks to Bhoomi, she did an amazing job very gentle, professional, and attentive. Truly enjoyed the service."
            </blockquote>
            
            <div className="text-gray-600">
              <div className="font-semibold text-[#2C1810]">Barkha Shekhawat</div>
              <div className="text-sm">Verified Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#2C1810] to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join 397+ satisfied clients who trust us for gentle, professional beauty care. Book your appointment today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:09662143430"
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <HiOutlinePhone className="w-5 h-5" />
              Call Now: 096621 43430
            </a>
            
            <a
              href="/booking"
              className="border-2 border-white text-white hover:bg-white hover:text-[#2C1810] font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Book Online
              <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}