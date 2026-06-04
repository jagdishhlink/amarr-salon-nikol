'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineClock, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlinePhone, HiOutlineSparkles, HiOutlineHeart } from 'react-icons/hi2'

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  })

  const services = [
    {
      id: 1,
      name: 'Hair Cut & Style',
      duration: '45 mins',
      price: '₹500-800',
      image: '/images/business-3.jpg',
      popular: true
    },
    {
      id: 2,
      name: 'Hair Coloring',
      duration: '2 hours',
      price: '₹1500-3000',
      image: '/images/business-4.jpg',
      popular: false
    },
    {
      id: 3,
      name: 'Facial Treatment',
      duration: '60 mins',
      price: '₹800-1200',
      image: '/images/business-5.jpg',
      popular: true
    },
    {
      id: 4,
      name: 'Bridal Package',
      duration: '4 hours',
      price: '₹5000-8000',
      image: '/images/business-6.jpg',
      popular: false
    },
    {
      id: 5,
      name: 'Hair Spa',
      duration: '90 mins',
      price: '₹1000-1500',
      image: '/images/business-7.jpg',
      popular: true
    },
    {
      id: 6,
      name: 'Eyebrow Threading',
      duration: '20 mins',
      price: '₹200-300',
      image: '/images/business-8.jpg',
      popular: false
    }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
    '9:00 PM'
  ]

  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { 
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        }),
        fullDate: date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      })
    }
    return dates
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Booking submitted:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData
    })
  }

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C] to-gray-800">
          <Image
            src="/images/business-1.jpg"
            alt="Amarr Salon Booking"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-sm bg-black/20 rounded-3xl p-12 border border-[#D4A574]/20">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Book Your
              <span className="block text-[#D4A574]">Beauty Session</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Select your desired service and preferred time. We're open until 10 PM daily to fit your schedule.
            </p>
            <div className="flex items-center justify-center gap-6 text-[#D4A574]">
              <div className="flex items-center gap-2">
                <HiOutlineClock className="w-6 h-6" />
                <span className="text-lg">Open Until 10 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineCheckCircle className="w-6 h-6" />
                <span className="text-lg">Instant Confirmation</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Service Selection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
              Choose Your Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our professional beauty services designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  selectedService?.id === service.id 
                    ? 'ring-4 ring-[#D4A574] shadow-2xl' 
                    : 'shadow-lg hover:shadow-2xl'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 left-4 z-20 bg-[#D4A574] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{service.name}</h3>
                  <div className="flex items-center justify-between text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <HiOutlineClock className="w-4 h-4" />
                      {service.duration}
                    </span>
                    <span className="font-semibold text-[#D4A574]">{service.price}</span>
                  </div>
                  
                  {selectedService?.id === service.id && (
                    <div className="flex items-center gap-2 text-[#D4A574] font-semibold">
                      <HiOutlineCheckCircle className="w-5 h-5" />
                      <span>Selected</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Date & Time Selection */}
      {selectedService && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
                Pick Your Perfect Time
              </h2>
              <p className="text-xl text-gray-600">
                Choose your preferred date and time slot
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Date Selection */}
              <div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-8">Select Date</h3>
                <div className="grid grid-cols-2 gap-4">
                  {generateDates().map((date) => (
                    <button
                      key={date.value}
                      onClick={() => setSelectedDate(date.value)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 ${
                        selectedDate === date.value
                          ? 'bg-[#D4A574] text-black shadow-lg'
                          : 'bg-white hover:bg-[#F5E6D3] text-gray-700 hover:text-[#2C2C2C]'
                      }`}
                    >
                      <div className="font-semibold">{date.label}</div>
                      <div className="text-sm opacity-80">{date.fullDate}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-8">Select Time</h3>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                        selectedTime === time
                          ? 'bg-[#D4A574] text-black shadow-lg'
                          : 'bg-white hover:bg-[#F5E6D3] text-gray-700 hover:text-[#2C2C2C]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Booking Form */}
      {selectedService && selectedDate && selectedTime && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
                Complete Your Booking
              </h2>
              <p className="text-xl text-gray-600">
                Just a few more details and you're all set!
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Booking Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                  <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6">Booking Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <HiOutlineSparkles className="w-6 h-6 text-[#D4A574]" />
                      <div>
                        <div className="font-semibold text-[#2C2C2C]">{selectedService.name}</div>
                        <div className="text-gray-600">{selectedService.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <HiOutlineClock className="w-6 h-6 text-[#D4A574]" />
                      <div>
                        <div className="font-semibold text-[#2C2C2C]">
                          {generateDates().find(d => d.value === selectedDate)?.fullDate}
                        </div>
                        <div className="text-gray-600">{selectedTime}</div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mt-6">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-[#2C2C2C]">Price Range</span>
                        <span className="text-xl font-bold text-[#D4A574]">{selectedService.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-[#2C2C2C] mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-semibold text-[#2C2C2C] mb-3">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 outline-none transition-all"
                        placeholder="Your contact number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-[#2C2C2C] mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-[#2C2C2C] mb-3">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 outline-none transition-all resize-none"
                      placeholder="Any specific requirements or preferences..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="w-full bg-[#D4A574] hover:bg-[#F5E6D3] text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <HiOutlineHeart className="w-6 h-6" />
                      Confirm Your Booking
                      <HiOutlineArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Contact */}
      <section className="py-24 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Help Booking?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our team is ready to assist you with your appointment. Call us directly for immediate booking or any questions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:09662143430"
                className="bg-[#D4A574] hover:bg-[#F5E6D3] text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <HiOutlinePhone className="w-6 h-6" />
                Call Now: 096621 43430
              </a>
              
              <div className="text-gray-300 text-lg">
                Open Daily Until 10 PM
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}