import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientScripts from '@/components/ClientScripts'

export const metadata: Metadata = {
  title: 'TEDxDPS Monarch Intl School Youth - Defy to Define',
  description: 'Join us on December 13, 2025 for inspiring talks that challenge conventions and spark change. Limited to 100 seats. Ideas worth spreading.',
  keywords: ['TEDx', 'TEDxDPS', 'Monarch International School', 'Youth Event', 'Ideas Worth Spreading', 'Innovation', 'Education', 'Doha Qatar'],
  authors: [{ name: 'TEDxDPS Monarch Intl School Youth' }],
  openGraph: {
    type: 'website',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/',
    title: 'TEDxDPS Monarch Intl School Youth - Defy to Define',
    description: 'Join us on December 13, 2025 for inspiring talks that challenge conventions and spark change. Limited to 100 seats. Ideas worth spreading.',
    images: ['/logo-removebg-preview.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEDxDPS Monarch Intl School Youth - Defy to Define',
    description: 'Join us on December 13, 2025 for inspiring talks that challenge conventions and spark change. Limited to 100 seats.',
    images: ['/logo-removebg-preview.webp'],
  },
  themeColor: '#050812',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "TEDxDPS Monarch Intl School Youth - Defy to Define",
              "description": "An independently organized TED event bringing together inspiring speakers to share ideas worth spreading. Challenge conventions, spark change, define tomorrow.",
              "startDate": "2025-12-13T09:00:00+03:00",
              "endDate": "2025-12-13T17:00:00+03:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "DPS Monarch International School",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Doha",
                  "addressCountry": "QA"
                }
              },
              "image": "https://13la7e.github.io/TedxDPS-Monarch-Intl-School/logo-removebg-preview.webp",
              "organizer": {
                "@type": "Organization",
                "name": "TEDxDPS Monarch Intl School Youth",
                "url": "https://13la7e.github.io/TedxDPS-Monarch-Intl-School/"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://13la7e.github.io/TedxDPS-Monarch-Intl-School/apply",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-11-04"
              },
              "performer": {
                "@type": "PerformingGroup",
                "name": "TEDx Speakers"
              }
            })
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ClientScripts />
      </body>
    </html>
  )
}
