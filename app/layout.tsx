import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freezing Point - AC Repair Services in Pallikaranai, Chennai',
  description: 'Professional AC repair, installation & maintenance services in Pallikaranai, Chennai. Expert technicians for all AC brands. 4.4★ rated with 315+ reviews. Call now!',
  keywords: 'AC repair Pallikaranai, AC service Chennai, air conditioner repair, AC installation, refrigerator repair, washing machine repair, Freezing Point',
  authors: [{ name: 'Freezing Point' }],
  openGraph: {
    title: 'Freezing Point - AC Repair Services in Pallikaranai, Chennai',
    description: 'Professional AC repair, installation & maintenance services in Pallikaranai, Chennai. Expert technicians for all AC brands. 4.4★ rated with 315+ reviews.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Freezing Point AC Repair',
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Freezing Point",
              "description": "Professional AC repair, installation and maintenance services",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No 3, Near Church, Kannabiran Koil Street",
                "addressLocality": "Pallikaranai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600100",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.9442",
                "longitude": "80.2163"
              },
              "telephone": "+91-XXXXXXXXXX",
              "openingHours": "Mo-Su 09:00-20:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.4",
                "reviewCount": "315"
              },
              "priceRange": "₹₹",
              "serviceArea": {
                "@type": "City",
                "name": "Chennai"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
