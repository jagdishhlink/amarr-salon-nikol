import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HiOutlinePhone } from 'react-icons/hi2'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amarr Salon Nikol - Beauty Parlour MG Road Ahmedabad',
  description: 'Professional beauty salon in Nikol, Ahmedabad. Open until 10 PM daily. Located on MG Road near MALBAR HILLS. Book your appointment: 096621 43430',
  keywords: 'beauty parlour Nikol, salon Ahmedabad, MG Road salon, beauty services, hair styling, professional salon, Nikol beauty, Amarr salon, evening appointments, Gujarat salon',
  authors: [{ name: 'Amarr Salon Nikol' }],
  creator: 'Amarr Salon Nikol',
  publisher: 'Amarr Salon Nikol',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Amarr Salon Nikol - Beauty Parlour MG Road Ahmedabad',
    description: 'Professional beauty salon in Nikol, Ahmedabad. Open until 10 PM daily. Located on MG Road near MALBAR HILLS. Book your appointment: 096621 43430',
    url: 'https://amarrsalon.com',
    siteName: 'Amarr Salon Nikol',
    images: [
      {
        url: '/images/business-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Amarr Salon Nikol - Professional Beauty Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amarr Salon Nikol - Beauty Parlour MG Road Ahmedabad',
    description: 'Professional beauty salon in Nikol, Ahmedabad. Open until 10 PM daily. Book your appointment: 096621 43430',
    images: ['/images/business-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  alternates: {
    canonical: 'https://amarrsalon.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white antialiased flex flex-col min-h-screen`}>
        <Header />
        
        <main className="flex-grow pt-16 lg:pt-20">
          {children}
        </main>
        
        <Footer />
        
        {/* WhatsApp Float Button */}
        <a
          href="tel:09662143430"
          className="fixed bottom-6 right-6 z-50 bg-[#D4A574] hover:bg-[#F5E6D3] text-[#2C2C2C] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Call Amarr Salon Nikol"
        >
          <HiOutlinePhone className="w-6 h-6 group-hover:animate-pulse" />
        </a>
      </body>
    </html>
  )
}