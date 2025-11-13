import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - TEDxDPS Monarch Intl School Youth',
  description: 'Learn about TEDxDPS Monarch Intl School Youth - a movement where young voices roar and ideas challenge the status quo. Discover our mission to defy conventions and define tomorrow.',
  keywords: 'About TEDx, TEDxDPS Mission, Youth Movement, Ideas Worth Spreading, Innovation, Student Leadership, Doha Qatar',
  openGraph: {
    title: 'About TEDxDPS Monarch - Our Movement to Defy and Define',
    description: 'A movement where young voices roar and ideas challenge the status quo. Join us in creating a platform for bold ideas that defy conventions.',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About TEDxDPS Monarch - Our Movement to Defy and Define',
    description: 'A movement where young voices roar and ideas challenge the status quo.',
  },
};

export default function AboutPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px', fontStyle: 'italic'}}>
          Defy to Define
        </h1>
        <p style={{color: 'var(--vibrant-orange)', fontSize: '1.3rem', lineHeight: '1.8', fontWeight: 700, marginBottom: '32px'}}>
          The rebellion of ideas starts here.
        </p>
        
        <h2 style={{marginTop: '48px'}}>Our Movement</h2>
        <p style={{color: 'var(--light-blue)', lineHeight: '1.8', fontSize: '1.05rem'}}>
          TEDxDPS Monarch Intl School Youth isn&apos;t just an event—it&apos;s a movement. We&apos;re creating a space where young voices don&apos;t just speak, they <strong style={{color: 'var(--primary-red)'}}>roar</strong>. Where conventional wisdom is questioned, challenged, and often overturned. Where the next generation doesn&apos;t wait for permission to change the world.
        </p>

        <h2 style={{marginTop: '80px'}}>What Does It Mean to Defy?</h2>
        <div className="grid" style={{marginTop: '24px'}}>
          <div className="card">
            <h3>Question Authority</h3>
            <p>Not all rules are meant to be followed. Some are meant to be examined, challenged, and rewritten.</p>
          </div>
          <div className="card">
            <h3>Break Patterns</h3>
            <p>The way things have always been done isn&apos;t the way things must continue. Innovation requires disruption.</p>
          </div>
          <div className="card">
            <h3>Own Your Truth</h3>
            <p>After you defy the old definitions, you earn the right to create new ones. Your truth. Your terms.</p>
          </div>
        </div>

        {/* Mission Statement Enhancement */}
        <div style={{
          margin: '80px 0',
          padding: '60px',
          background: 'linear-gradient(135deg, var(--dark-gray) 0%, rgba(20,20,30,0.95) 100%)',
          borderRadius: '20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at top right, rgba(255,107,53,0.1) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(226,49,49,0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }} />
          <div style={{position: 'relative', zIndex: 1}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '25px', color: 'white'}}>Our Mission</h2>
            <p style={{fontSize: '1.2rem', lineHeight: 2, color: 'var(--light-blue)', maxWidth: '800px', margin: '0 auto'}}>
              To create a platform where <span style={{color: 'var(--vibrant-orange)', fontWeight: 700}}>bold ideas challenge the status quo</span>, where <span style={{color: 'var(--vibrant-orange)', fontWeight: 700}}>young voices lead the conversation</span>, and where <span style={{color: 'var(--vibrant-orange)', fontWeight: 700}}>defying conventions becomes the catalyst for defining tomorrow</span>. We believe the next generation doesn&apos;t need permission to change the world—they need a stage.
            </p>
            <div style={{marginTop: '40px'}}>
              <Link href="/apply" className="cta cta-pulse" style={{display: 'inline-block'}}>
                Join the Movement
              </Link>
            </div>
          </div>
        </div>

        {/* Video Embed Placeholder */}
        <div style={{margin: '60px 0'}}>
          <h2 style={{textAlign: 'center', marginBottom: '30px', fontSize: '2.2rem'}}>Watch Our Vision</h2>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            aspectRatio: '16/9',
            background: 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(226,49,49,0.2) 100%)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255,107,53,0.3)'
          }}>
            <div style={{textAlign: 'center'}}>
              <p style={{color: 'var(--light-blue)', fontSize: '1.1rem'}}>Event Promo Video Coming Soon</p>
            </div>
          </div>
        </div>

        <h2 style={{marginTop: '60px'}}>About TED<span style={{textTransform: 'none'}}>x</span></h2>
        <p style={{color: 'var(--light-blue)', lineHeight: '1.8'}}>
          TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxDPS Monarch Intl School Youth, where x = independently organized TED event. We provide a platform for ideas worth spreading—especially those that challenge, provoke, and inspire.
        </p>
      </section>
    </div>
  );
}
