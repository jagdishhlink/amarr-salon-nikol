'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineCalendar, HiOutlineClock, HiOutlineUser, HiOutlinePhone, HiOutlineEnvelope, HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineHeart, HiOutlineArrowRight } from 'react-icons/hi2'

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedStylist, setSelectedStylist] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  })

  const services = [
    { id: 'pedicure', name: 'Pedicure', duration: '45 min', price: '₹800' },
    { id: 'cleanup', name: 'Cleanup (Mini Facial)', duration: '30 min', price: '₹600' },
    { id: 'facial', name: 'Full Facial', duration: '60 min', price: '₹1200' },
    { id: 'manicure', name: 'Manicure', duration: '30 min', price: '₹600' },
    { id: 'haircut', name: 'Hair Cut & Style', duration: '45 min', price: '₹900' },
    { id: 'combo', name: 'Pedicure + Cleanup', duration: '75 min', price: '₹1300' }
  ]

  const stylists = [
    { id: 'bhoomi', name: 'Bhoomi', specialty: 'Pedicure Specialist', rating: 4.9 },
    { id: 'priya', name: 'Priya', specialty: 'Facial Expert', rating: 4.8 },
    { id: 'meera', name: 'Meera', specialty: 'Hair Stylist', rating: 4.7 },
    { id: 'any', name: 'Any Available', specialty: 'First Available Expert', rating: 4.4 }
  ]

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ]

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle booking submission
    alert('Booking request submitted! We will call you to confirm.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C1810] to-gray-800 py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-3.jpg"
            alt="Salon booking"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-[#D4AF37]/20 p-4">
                <HiOutlineSparkles className="h-8 w-8 text-[#D4AF37]" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Book Your
              <span className="block text-[#D4AF37] italic">Transformation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              Schedule your appointment with Nikol's most trusted beauty professionals. 
              Experience gentle, attentive service that leaves you glowing.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <HiOutlineCheckCircle className="h-5 w-5 text-[#D4AF37]" />
                <span>4.4★ Rated Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineClock className="h-5 w-5 text-[#D4AF37]" />
                <span>Open Until 10 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineHeart className="h-5 w-5 text-[#D4AF37]" />
                <span>Gentle Professional Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Progress */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  step >= num ? 'bg-[#D4AF37] text-black' : 'bg-gray-300 text-gray-600'
                }`}>
                  {num}
                </div>
                {num < 4 && (
                  <div className={`w-16 lg:w-24 h-0.5 mx-2 transition-all ${
                    step > num ? 'bg-[#D4AF37]' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#2C1810] mb-4">
              {step === 1 && "Choose Your Service"}
              {step === 2 && "Select Your Stylist"}
              {step === 3 && "Pick Date & Time"}
              {step === 4 && "Your Details"}
            </h2>
            <p className="text-gray-600">
              {step === 1 && "Select from our range of professional beauty treatments"}
              {step === 2 && "Choose your preferred expert or any available stylist"}
              {step === 3 && "Find the perfect time that works for your schedule"}
              {step === 4 && "Tell us how to reach you for confirmation"}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-xl ${
                      selectedService === service.id 
                        ? 'border-[#D4AF37] bg-[#F5E6D3] shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-[#D4AF37]/50'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-[#2C1810] mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.duration}</p>
                      <div className="text-2xl font-bold text-[#D4AF37]">
                        {service.price}
                      </div>
                    </div>
                    {selectedService === service.id && (
                      <div className="absolute top-4 right-4">
                        <HiOutlineCheckCircle className="h-6 w-6 text-[#D4AF37]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Step 2: Stylist Selection */}
            {step === 2 && (
              <div className="grid md:grid-cols-2 gap-6">
                {stylists.map((stylist) => (
                  <div
                    key={stylist.id}
                    className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-xl ${
                      selectedStylist === stylist.id 
                        ? 'border-[#D4AF37] bg-[#F5E6D3] shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-[#D4AF37]/50'
                    }`}
                    onClick={() => setSelectedStylist(stylist.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-yellow-600 flex items-center justify-center">
                        <HiOutlineUser className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#2C1810] mb-1">
                          {stylist.name}
                        </h3>
                        <p className="text-gray-600 mb-2">{stylist.specialty}</p>
                        <div className="flex items-center gap-1">
                          <span className="text-[#D4AF37]">★</span>
                          <span className="text-sm font-semibold">{stylist.rating}</span>
                        </div>
                      </div>
                    </div>
                    {selectedStylist === stylist.id && (
                      <div className="absolute top-4 right-4">
                        <HiOutlineCheckCircle className="h-6 w-6 text-[#D4AF37]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Step 3: Date & Time Selection */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold text-[#2C1810] mb-4">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#D4AF37] focus:outline-none text-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-[#2C1810] mb-4">
                    Select Time
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'border-[#D4AF37] bg-[#D4AF37] text-white'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-[#D4AF37] hover:bg-[#F5E6D3]'
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleFormChange('phone', e.target.value)}
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                    Special Requests or Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => handleFormChange('notes', e.target.value)}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Any specific preferences or requirements..."
                  />
                </div>

                {/* Booking Summary */}
                <div className="bg-[#F5E6D3] p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#2C1810] mb-4">
                    Booking Summary
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Service:</span> {services.find(s => s.id === selectedService)?.name}</p>
                    <p><span className="font-semibold">Stylist:</span> {stylists.find(s => s.id === selectedStylist)?.name}</p>
                    <p><span className="font-semibold">Date:</span> {selectedDate}</p>
                    <p><span className="font-semibold">Time:</span> {selectedTime}</p>
                    <p><span className="font-semibold">Duration:</span> {services.find(s => s.id === selectedService)?.duration}</p>
                    <div className="pt-2 border-t border-[#D4AF37]/20">
                      <p className="text-xl font-bold text-[#2C1810]">
                        Total: {services.find(s => s.id === selectedService)?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                  step === 1 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#F5E6D3]'
                }`}
              >
                Previous
              </button>
              
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && !selectedStylist) ||
                    (step === 3 && (!selectedDate || !selectedTime))
                  }
                  className="px-8 py-4 bg-[#D4AF37] text-black rounded-xl font-semibold hover:bg-yellow-600 transition-all disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Next Step
                  <HiOutlineArrowRight className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!formData.name || !formData.phone}
                  className="px-8 py-4 bg-[#D4AF37] text-black rounded-xl font-semibold hover:bg-yellow-600 transition-all disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Confirm Booking
                  <HiOutlineCheckCircle className="h-5 w-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-[#F5E6D3] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C1810] mb-6">
                Why Book With Us?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <HiOutlineCheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">
                      Gentle Professional Care
                    </h3>
                    <p className="text-gray-700">
                      Our experienced team provides attentive, personalized service that our customers love.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <HiOutlineSparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">
                      Transparent Pricing
                    </h3>
                    <p className="text-gray-700">
                      We always discuss pricing before starting any treatment. No surprises, just honest service.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <HiOutlineClock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">
                      Flexible Hours
                    </h3>
                    <p className="text-gray-700">
                      Open until 10 PM to accommodate your busy schedule. Book when it's convenient for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
              <Image
                src="/images/business-5.jpg"
                alt="Salon interior"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#2C1810] py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Need Help with Your Booking?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Our friendly team is here to assist you with any questions or special requests.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="tel:09662143430"
              className="flex items-center justify-center gap-4 bg-[#D4AF37] text-black p-6 rounded-2xl hover:bg-yellow-600 transition-all group"
            >
              <HiOutlinePhone className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-sm font-medium">Call Now</div>
                <div className="text-lg font-bold">096621 43430</div>
              </div>
            </a>
            
            <div className="flex items-center justify-center gap-4 bg-white/10 text-white p-6 rounded-2xl">
              <HiOutlineClock className="h-6 w-6 text-[#D4AF37]" />
              <div className="text-left">
                <div className="text-sm font-medium">Open Daily</div>
                <div className="text-lg font-bold">Until 10:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}