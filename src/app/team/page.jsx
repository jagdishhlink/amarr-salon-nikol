'use client';

import Image from 'next/image';
import { useState } from 'react';
import { HiOutlineCheckCircle, HiOutlineStar, HiOutlineSparkles, HiOutlineHeart, HiOutlineUserGroup } from 'react-icons/hi2';

export default function TeamPage() {
  const [selectedStylist, setSelectedStylist] = useState(null);

  const stylists = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Hair Stylist & Color Specialist",
      experience: "8+ years",
      specialties: ["Bridal Styling", "Hair Coloring", "Keratin Treatments", "Layered Cuts"],
      certifications: ["Advanced Color Theory", "Bridal Makeup Certified", "Hair Care Specialist"],
      rating: 4.9,
      reviews: 156,
      description: "Priya brings artistic vision and technical expertise to every transformation. Specializing in traditional Indian bridal looks with contemporary touches, she has been the go-to stylist for over 200 brides.",
      image: "/images/business-2.jpg",
      availability: "Mon-Sat, 10 AM - 8 PM"
    },
    {
      id: 2,
      name: "Kavita Patel",
      role: "Lead Beautician & Skincare Expert",
      experience: "6+ years",
      specialties: ["Facial Treatments", "Threading", "Skincare Consultation", "Anti-Aging Treatments"],
      certifications: ["Dermatology Certified", "Organic Skincare Specialist", "Beauty Therapy Diploma"],
      rating: 4.8,
      reviews: 203,
      description: "With a deep understanding of different skin types and concerns, Kavita provides personalized skincare solutions that reveal your natural glow. Her gentle approach makes every treatment relaxing.",
      image: "/images/business-5.jpg",
      availability: "Tue-Sun, 9 AM - 9 PM"
    },
    {
      id: 3,
      name: "Anjali Mehta",
      role: "Makeup Artist & Nail Technician",
      experience: "5+ years",
      specialties: ["Special Occasion Makeup", "Nail Art", "Eyebrow Shaping", "Party Looks"],
      certifications: ["Professional Makeup Artist", "Nail Technology Certificate", "Eyebrow Design Specialist"],
      rating: 4.7,
      reviews: 128,
      description: "Anjali's creative flair shines through in every makeup look and nail design. From subtle everyday beauty to glamorous party looks, she ensures you feel confident and radiant.",
      image: "/images/business-7.jpg",
      availability: "Wed-Sun, 11 AM - 9 PM"
    }
  ];

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section - Flowing Curves */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C] via-gray-800 to-gray-900" />
        <div className="absolute inset-0">
          <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
            <Image 
              src="/images/business-8.jpg" 
              alt="Our skilled beauty team"
              fill
              className="object-cover opacity-30"
              unoptimized
            />
          </div>
        </div>
        
        {/* Flowing curve overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 text-white">
            <path d="M0,60 Q300,0 600,40 T1200,20 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="relative z-10 flex items-center min-h-[60vh] px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#D4A574] text-black px-4 py-2 rounded-full mb-6">
                <HiOutlineUserGroup className="w-5 h-5" />
                <span className="text-sm font-medium">Meet Our Expert Team</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Skilled Artists Behind
                <span className="block text-[#D4A574]">Your Beauty Journey</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Our certified beauticians bring years of expertise and passion to every service. 
                Each stylist specializes in different techniques, ensuring you receive the perfect care for your needs.
              </p>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#D4A574]">
                    {[...Array(5)].map((_, i) => (
                      <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-white font-medium">4.4/5 Client Rating</span>
                </div>
                <div className="text-gray-300">|</div>
                <div className="text-white">
                  <span className="font-bold">397+</span> Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase - Asymmetric Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#2C2C2C] mb-6">
              Your Beauty Specialists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each member of our team brings unique skills and artistry to create personalized beauty experiences that honor your individual style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {stylists.map((stylist, index) => (
              <div 
                key={stylist.id}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                  index === 0 ? 'lg:col-span-7' : 
                  index === 1 ? 'lg:col-span-5' : 
                  'lg:col-span-6 lg:col-start-4'
                }`}
                onClick={() => setSelectedStylist(stylist)}
              >
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-[#D4A574]/20 transition-all duration-500">
                  {/* Image */}
                  <div className={`relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 ${
                    index === 0 ? 'h-80' : 'h-72'
                  }`}>
                    <Image 
                      src={stylist.image} 
                      alt={`${stylist.name} - ${stylist.role}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
                      <HiOutlineStar className="w-4 h-4 text-[#D4A574] fill-current" />
                      <span className="text-sm font-bold text-[#2C2C2C]">{stylist.rating}</span>
                      <span className="text-xs text-gray-600">({stylist.reviews})</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">{stylist.name}</h3>
                    <p className="text-[#D4A574] font-medium mb-3">{stylist.role}</p>
                    <p className="text-gray-600 mb-4">{stylist.experience} of dedicated service</p>
                    
                    {/* Specialties Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {stylist.specialties.slice(0, 2).map((specialty, idx) => (
                        <span key={idx} className="bg-[#F5E6D3] text-[#2C2C2C] px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                      {stylist.specialties.length > 2 && (
                        <span className="text-gray-500 text-sm">
                          +{stylist.specialties.length - 2} more
                        </span>
                      )}
                    </div>

                    <button className="text-[#D4A574] font-medium hover:text-[#2C2C2C] transition-colors flex items-center gap-2">
                      View Full Profile
                      <HiOutlineSparkles className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Highlight - Flowing Section */}
      <section className="py-32 bg-gradient-to-br from-[#F5E6D3] to-white relative overflow-hidden">
        {/* Decorative curves */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" className="w-full h-16 text-white">
            <path d="M0,60 Q300,20 600,40 T1200,0 L1200,0 L0,0 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto max-w-6xl px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
              Combined Expertise
            </h2>
            <p className="text-xl text-gray-700">
              Over 19+ years of collective experience in beauty and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <HiOutlineCheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">500+</h3>
              <p className="text-gray-600">Bridal Makeovers</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <HiOutlineStar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">487</h3>
              <p className="text-gray-600">5-Star Reviews</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <HiOutlineSparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">12+</h3>
              <p className="text-gray-600">Certifications</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <HiOutlineHeart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">2000+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Stylist Modal/Profiles */}
      {selectedStylist && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedStylist(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                <Image 
                  src={selectedStylist.image} 
                  alt={selectedStylist.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <button 
                  onClick={() => setSelectedStylist(null)}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-[#2C2C2C] mb-2">{selectedStylist.name}</h3>
                  <p className="text-[#D4A574] text-xl font-medium mb-2">{selectedStylist.role}</p>
                  <p className="text-gray-600 mb-4">{selectedStylist.experience} • Available {selectedStylist.availability}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      <div className="flex text-[#D4A574]">
                        {[...Array(5)].map((_, i) => (
                          <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-[#2C2C2C] font-medium">{selectedStylist.rating}</span>
                      <span className="text-gray-500">({selectedStylist.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed">{selectedStylist.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-[#2C2C2C] mb-4">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStylist.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-[#F5E6D3] text-[#2C2C2C] px-3 py-2 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#2C2C2C] mb-4">Certifications</h4>
                    <div className="space-y-2">
                      {selectedStylist.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <HiOutlineCheckCircle className="w-5 h-5 text-[#D4A574]" />
                          <span className="text-gray-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="bg-[#D4A574] text-black px-8 py-3 rounded-full font-medium hover:bg-[#2C2C2C] hover:text-white transition-all">
                    Book with {selectedStylist.name.split(' ')[0]}
                  </button>
                  <button 
                    onClick={() => setSelectedStylist(null)}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-[#D4A574] hover:text-[#D4A574] transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action - Curved Bottom */}
      <section className="py-32 bg-[#2C2C2C] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 text-white">
            <path d="M0,60 Q300,0 600,40 T1200,20 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto max-w-4xl px-4 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your appointment with our skilled stylists and experience the Amarr Salon difference. 
            We're open until 10 PM to fit your schedule.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#D4A574] text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-[#2C2C2C] transition-all transform hover:scale-105">
              Book Your Appointment Today
            </button>
            <span className="text-gray-400">or</span>
            <a href="tel:09662143430" className="text-[#D4A574] text-lg font-medium hover:text-white transition-colors">
              Call Now: 096621 43430
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}