'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineStar, HiOutlineCheckCircle, HiOutlineHeart, HiOutlineSparkles, HiOutlineUserGroup } from 'react-icons/hi2'

export default function TeamPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')

  const teamMembers = [
    {
      id: 1,
      name: 'Bhoomi',
      role: 'Senior Pedicure Specialist',
      specialty: 'pedicure',
      experience: '5+ years',
      image: '/images/business-1.jpg',
      bio: 'Known for her gentle, professional, and attentive approach to pedicure services. Bhoomi has mastered the art of creating a relaxing experience while delivering exceptional results.',
      specialties: ['Luxury Pedicures', 'Nail Art', 'Foot Care Treatments'],
      reviews: 4.9,
      highlight: 'gentle, professional, and attentive'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Facial & Cleanup Expert',
      specialty: 'facial',
      experience: '4+ years',
      image: '/images/business-2.jpg',
      bio: 'Specializes in mini facials and deep cleanup treatments. Priya excels at blackhead removal and skin purification, always explaining each step of the process.',
      specialties: ['Mini Facials', 'Blackhead Cleaning', 'Deep Cleanup'],
      reviews: 4.8,
      highlight: 'cleanup treatment specialist'
    },
    {
      id: 3,
      name: 'Kavita Patel',
      role: 'Hair Styling Professional',
      specialty: 'hair',
      experience: '6+ years',
      image: '/images/business-3.jpg',
      bio: 'Master stylist with expertise in modern cuts, traditional styles, and hair treatments. Kavita brings creativity and precision to every hairstyling session.',
      specialties: ['Hair Cutting', 'Styling', 'Hair Treatments'],
      reviews: 4.7,
      highlight: 'creative hair transformations'
    },
    {
      id: 4,
      name: 'Meera Shah',
      role: 'Beauty Consultant',
      specialty: 'beauty',
      experience: '3+ years',
      image: '/images/business-4.jpg',
      bio: 'Comprehensive beauty expert offering personalized consultations and treatments. Meera helps clients choose the perfect services for their beauty goals.',
      specialties: ['Beauty Consultation', 'Eyebrow Shaping', 'Skincare Advice'],
      reviews: 4.6,
      highlight: 'personalized beauty care'
    }
  ]

  const specialties = [
    { id: 'all', name: 'All Specialists', icon: HiOutlineUserGroup },
    { id: 'pedicure', name: 'Pedicure', icon: HiOutlineSparkles },
    { id: 'facial', name: 'Facial & Cleanup', icon: HiOutlineCheckCircle },
    { id: 'hair', name: 'Hair Services', icon: HiOutlineHeart },
    { id: 'beauty', name: 'Beauty Care', icon: HiOutlineStar }
  ]

  const filteredMembers = selectedSpecialty === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.specialty === selectedSpecialty)

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810] via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 absolute top-0 right-0 w-1/2 h-full">
          <Image
            src="/images/business-5.jpg"
            alt="Professional beauty team"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-medium tracking-wide">OUR EXPERT TEAM</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Meet Our
              <span className="block text-[#D4AF37]">Beauty Professionals</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Our skilled team of beauty professionals brings years of experience and a gentle, 
              attentive approach to every service. Each specialist is dedicated to creating 
              transformative experiences that enhance your natural beauty.
            </p>

            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.4/5 Rating</span>
              </div>
              
              <div className="h-8 w-px bg-gray-600"></div>
              
              <div className="text-white">
                <span className="font-bold text-2xl text-[#D4AF37]">397+</span>
                <span className="ml-2">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C1810] mb-4">
              Find Your Perfect Specialist
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each of our professionals brings unique expertise and specializations 
              to deliver exceptional beauty services
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {specialties.map((specialty) => {
              const IconComponent = specialty.icon
              return (
                <button
                  key={specialty.id}
                  onClick={() => setSelectedSpecialty(specialty.id)}
                  className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedSpecialty === specialty.id
                      ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#F5E6D3] hover:text-[#2C1810]'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{specialty.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group ${index % 2 === 1 ? 'lg:mt-16' : ''}`}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-900/10 hover:shadow-2xl hover:shadow-gray-900/20 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 aspect-square rounded-2xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="lg:w-2/3 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#2C1810] mb-2">
                          {member.name}
                        </h3>
                        <p className="text-[#D4AF37] font-semibold text-lg mb-1">
                          {member.role}
                        </p>
                        <p className="text-gray-600">
                          {member.experience} Experience
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <HiOutlineStar 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < Math.floor(member.reviews) 
                                  ? 'text-[#D4AF37] fill-current' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-gray-700 font-medium">
                          {member.reviews}/5
                        </span>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {member.bio}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-[#2C1810]">Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#F5E6D3] text-[#2C1810] rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-[#D4AF37] font-medium">
                          <HiOutlineCheckCircle className="w-5 h-5" />
                          <span className="italic">"{member.highlight}"</span>
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

      {/* Featured Review Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2C1810] to-gray-800 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-8 h-8 text-[#D4AF37] fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
                "Had a lovely pedicure experience at the salon. Thanks to Bhoomi, 
                she did an amazing job very <span className="text-[#D4AF37] font-semibold">gentle, professional, and attentive</span>. 
                Truly enjoyed the service."
              </blockquote>

              <div className="flex flex-col items-center gap-4">
                <cite className="text-[#D4AF37] font-semibold text-xl not-italic">
                  — Barkha Shekhawat
                </cite>
                <div className="h-1 w-16 bg-[#D4AF37]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C1810] mb-6">
                  Why Choose Our
                  <span className="block text-[#D4AF37]">Expert Team?</span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our beauty professionals are carefully selected for their expertise, 
                  gentle approach, and commitment to creating transformative experiences 
                  for every client.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineCheckCircle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] text-lg mb-2">
                      Gentle & Professional Approach
                    </h3>
                    <p className="text-gray-600">
                      Every team member is trained to provide gentle, attentive service 
                      that prioritizes your comfort and satisfaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineStar className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] text-lg mb-2">
                      Proven Track Record
                    </h3>
                    <p className="text-gray-600">
                      With 397+ positive reviews and a 4.4/5 rating, our team consistently 
                      delivers exceptional results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineSparkles className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] text-lg mb-2">
                      Specialized Expertise
                    </h3>
                    <p className="text-gray-600">
                      Each professional brings specialized skills in their area of expertise, 
                      from pedicures to facials and hair services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl aspect-[4/5]">
                <Image
                  src="/images/business-6.jpg"
                  alt="Professional beauty team at work"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2C1810]">397+</div>
                  <div className="text-gray-600 text-sm font-medium">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C1810] mb-6">
            Ready to Experience
            <span className="block text-[#D4AF37]">Professional Beauty Care?</span>
          </h2>
          
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Book your appointment with our expert team and discover the gentle, 
            attentive service that has earned us 397+ positive reviews.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#F5E6D3] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4AF37]/30"
            >
              Book Your Appointment
            </a>
            <a
              href="tel:09662143430"
              className="border-2 border-[#2C1810] text-[#2C1810] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2C1810] hover:text-white transition-all duration-300"
            >
              Call: 096621 43430
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}