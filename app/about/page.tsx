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

        {/* Official TEDx Content - Required */}
        <div style={{marginTop: '80px', padding: '50px', background: 'rgba(20,20,30,0.6)', borderRadius: '20px', border: '1px solid rgba(235,0,40,0.2)'}}>
          <h2 style={{fontSize: '2.2rem', marginBottom: '25px'}}>About TED<span style={{textTransform: 'none'}}>x</span>, x = independently organized event</h2>
          <p style={{color: 'var(--light-blue)', lineHeight: '1.8', marginBottom: '30px'}}>
            In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
          </p>

          <h2 style={{fontSize: '2.2rem', marginBottom: '25px', marginTop: '50px'}}>About TED</h2>
          <p style={{color: 'var(--light-blue)', lineHeight: '1.8', marginBottom: '20px'}}>
            TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
          </p>
          
          <p style={{color: 'var(--light-blue)', lineHeight: '1.8', marginBottom: '20px'}}>
            TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world&apos;s most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. View a full list of TED&apos;s many programs and initiatives.
          </p>

          <p style={{color: 'var(--light-blue)', lineHeight: '1.8'}}>
            Follow TED on{' '}
            <a href="https://www.facebook.com/TED" target="_blank" rel="noopener noreferrer" style={{color: 'var(--vibrant-orange)', textDecoration: 'none'}}>Facebook</a>,{' '}
            <a href="https://www.instagram.com/ted" target="_blank" rel="noopener noreferrer" style={{color: 'var(--vibrant-orange)', textDecoration: 'none'}}>Instagram</a>,{' '}
            <a href="https://www.linkedin.com/company/ted-conferences" target="_blank" rel="noopener noreferrer" style={{color: 'var(--vibrant-orange)', textDecoration: 'none'}}>LinkedIn</a>,{' '}
            <a href="https://www.tiktok.com/@ted" target="_blank" rel="noopener noreferrer" style={{color: 'var(--vibrant-orange)', textDecoration: 'none'}}>TikTok</a>, and{' '}
            <a href="https://twitter.com/TEDTalks" target="_blank" rel="noopener noreferrer" style={{color: 'var(--vibrant-orange)', textDecoration: 'none'}}>X</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
