import { Inter } from 'next/font/google'
import { HiOutlinePhone } from 'react-icons/hi2'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amarr Salon Nikol - Professional Beauty Parlour | Pedicure & Facial',
  description: 'Professional beauty services in Nikol. Gentle pedicures, cleanup treatments & mini facials. Experienced staff, 4.4★ rated. Open until 10pm. Book now!',
  keywords: 'beauty parlour nikol, salon ahmedabad, pedicure experience, facial treatment, cleanup service, professional beauty care, amarr salon',
  openGraph: {
    title: 'Amarr Salon Nikol - Professional Beauty Parlour | Pedicure & Facial',
    description: 'Professional beauty services in Nikol. Gentle pedicures, cleanup treatments & mini facials. Experienced staff, 4.4★ rated. Open until 10pm. Book now!',
    type: 'website',
    locale: 'en_US',
    siteName: 'Amarr Salon Nikol',
    images: [
      {
        url: '/images/business-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Amarr Salon Nikol - Professional Beauty Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amarr Salon Nikol - Professional Beauty Parlour | Pedicure & Facial',
    description: 'Professional beauty services in Nikol. Gentle pedicures, cleanup treatments & mini facials. Experienced staff, 4.4★ rated. Open until 10pm. Book now!'
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://amarrsalonnikol.com'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
          
          {/* WhatsApp Float Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <a
              href="tel:09662143430"
              className="group flex items-center justify-center w-14 h-14 bg-[#D4AF37] hover:bg-[#F5E6D3] text-[#2C1810] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              aria-label="Call Amarr Salon"
            >
              <HiOutlinePhone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}