import Link from 'next/link'
import CountdownTimer from '@/components/CountdownTimer'
import { generateEventStructuredData } from '@/lib/data'
import type { Metadata } from 'next'

// Enhanced metadata with Open Graph
export const metadata: Metadata = {
  title: 'TEDxDPS Monarch Intl School Youth - Defy to Define',
  description: 'Break the mold. Challenge conventions. Join us December 13, 2025 for inspiring TEDx talks from innovators and change-makers.',
  keywords: 'TEDx, DPS Monarch, Youth Event, Ideas Worth Spreading, Innovation, December 2025, Doha Events',
  metadataBase: new URL('https://13la7e.github.io'),
  openGraph: {
    title: 'TEDxDPS Monarch Intl School Youth - Defy to Define',
    description: 'Break the mold. Challenge conventions. Join us December 13, 2025 for inspiring TEDx talks.',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School',
    siteName: 'TEDxDPS Monarch Intl School Youth',
    images: [
      {
        url: '/TedxDPS-Monarch-Intl-School/logo-removebg-preview.webp',
        width: 1200,
        height: 630,
        alt: 'TEDxDPS Monarch Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEDxDPS Monarch Intl School Youth',
    description: 'Ideas worth spreading. December 13, 2025.',
    images: ['/TedxDPS-Monarch-Intl-School/logo-removebg-preview.webp'],
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
};

export default function Home() {
  const structuredData = generateEventStructuredData();

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="container">
      <section className="hero">
        <div>
          <p className="eyebrow">TEDxDPS Monarch Intl School Youth</p>
          <h1>
            <span className="defy">DEFY</span> 
            <span className="define">to Define</span>
          </h1>
          <p className="hero-tagline">
            Break the mold. Challenge conventions. Rewrite the rules.<br/>
            This is where ideas rebel against the ordinary.
          </p>
          
          <CountdownTimer />

          <div className="manifesto">
            <p><strong>DEFY</strong> expectations</p>
            <p><strong>DEFY</strong> limitations</p>
            <p><strong>DEFY</strong> boundaries</p>
            <p style={{marginTop:'16px', color:'var(--vibrant-orange)', fontSize:'1.2rem', fontWeight:700}}>
              Then <em style={{fontFamily:'Playfair Display,serif'}}>define</em> your own path.
            </p>
          </div>
          
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'15px'}}>
            <Link href="/apply" className="cta cta-pulse">Register to Attend</Link>
            <div className="social-proof">
              <span className="social-proof-text">Limited to 100 seats - Register now!</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why Defy?</h2>
        <div className="grid">
          <div className="card">
            <h3>💥 Break Barriers</h3>
            <p>Challenge the status quo. Question everything. Your voice has the power to shatter limitations and inspire change.</p>
          </div>
          <div className="card">
            <h3>⚡ Ignite Change</h3>
            <p>Ideas that defy convention spark revolutions. Be the catalyst that transforms perspectives and drives action.</p>
          </div>
          <div className="card">
            <h3>🚀 Define Tomorrow</h3>
            <p>After defying the old rules, you get to write new ones. Shape the future on your own terms.</p>
          </div>
        </div>
      </section>

      <section className="section center">
        <h2 style={{display:'block', width:'100%'}}>Event Details</h2>
        <p style={{color:'var(--light-blue)', margin:'32px 0', fontSize:'1.15rem', lineHeight:2}}>
          Date: December 13, 2025<br/>
          Location: DPS Monarch International School
        </p>
        <Link href="/contact" className="cta">Get Updates</Link>
      </section>

      {/* What is TEDx Section - Required Content */}
      <section className="section" style={{marginTop: '80px'}}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(235,0,40,0.1) 0%, rgba(235,0,40,0.05) 100%)',
          padding: '60px 50px',
          borderRadius: '20px',
          border: '2px solid rgba(235,0,40,0.3)'
        }}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '25px', textAlign: 'center'}}>What is TEDx?</h2>
          <p style={{color: 'var(--light-blue)', fontSize: '1.05rem', lineHeight: '1.9', maxWidth: '900px', margin: '0 auto'}}>
            In the spirit of discovering and spreading ideas, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called <strong style={{color: 'var(--vibrant-orange)'}}>TEDxDPS Monarch Intl School Youth</strong>, where x = independently organized TED event. At our TEDxDPS Monarch Intl School Youth event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
          </p>
          <div style={{textAlign: 'center', marginTop: '35px'}}>
            <Link 
              href="https://www.ted.com/about/programs-initiatives/tedx-program" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--vibrant-orange)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                borderBottom: '2px solid var(--vibrant-orange)',
                paddingBottom: '4px'
              }}
            >
              Learn More About TEDx →
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
