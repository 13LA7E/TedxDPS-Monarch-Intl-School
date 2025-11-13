import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured Talks - TEDxDPS Monarch Intl School Youth',
  description: 'Discover the inspiring speakers and talks at TEDxDPS Monarch. Ideas that challenge conventions, spark innovation, and define the future.',
  keywords: 'TEDx Talks, TEDx Speakers, Inspirational Talks, Ideas Worth Spreading, Youth Speakers, Innovation Talks',
  openGraph: {
    title: 'Featured Talks - TEDxDPS Monarch',
    description: 'Discover inspiring speakers and talks that challenge conventions and spark innovation at TEDxDPS Monarch.',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/talks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Featured Talks - TEDxDPS Monarch',
    description: 'Discover inspiring speakers and talks that challenge conventions.',
  },
};

export default function TalksPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px', fontStyle: 'italic'}}>
          Featured Talks
        </h1>
        <p style={{color: 'var(--light-blue)', marginBottom: '48px', fontSize: '1.1rem'}}>
          Explore inspiring talks from our community. (Add your event videos here once available.)
        </p>

        <div className="grid">
          <div className="card">
            <h3>Coming Soon</h3>
            <p style={{color: 'var(--cool-gray)', fontStyle: 'italic'}}>Speaker Name</p>
            <p>Topic: Ideas that shape tomorrow</p>
            <small>Duration: 10 min</small>
          </div>
          
          <div className="card">
            <h3>Coming Soon</h3>
            <p style={{color: 'var(--cool-gray)', fontStyle: 'italic'}}>Speaker Name</p>
            <p>Topic: Innovation in education</p>
            <small>Duration: 12 min</small>
          </div>
          
          <div className="card">
            <h3>Coming Soon</h3>
            <p style={{color: 'var(--cool-gray)', fontStyle: 'italic'}}>Speaker Name</p>
            <p>Topic: The future we create</p>
            <small>Duration: 8 min</small>
          </div>
        </div>
      </section>
    </div>
  );
}
