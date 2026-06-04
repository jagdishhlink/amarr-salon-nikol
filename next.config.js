/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  env: {
    BUSINESS_NAME: 'Amarr Salon Nikol',
    BUSINESS_PHONE: '096621 43430',
    BUSINESS_ADDRESS: 'Amarr salon1,Sadguru Saran, MG Rd, near MALBAR HILLS, Nikol, Ahmedabad, Gujarat 380049',
  },
};

module.exports = nextConfig;
