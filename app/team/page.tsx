import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team - TEDxDPS Monarch Intl School Youth',
  description: 'Meet the passionate student organizers behind TEDxDPS Monarch. A dedicated team committed to bringing ideas worth spreading to our community.',
  keywords: 'TEDx Organizers, Student Team, Event Planning, Youth Leadership, DPS Monarch Team',
  openGraph: {
    title: 'Our Team - TEDxDPS Monarch',
    description: 'Meet the passionate student organizers behind TEDxDPS Monarch bringing ideas worth spreading to our community.',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/team',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team - TEDxDPS Monarch',
    description: 'Meet the passionate student organizers behind TEDxDPS Monarch.',
  },
};

export default function TeamPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px', fontStyle: 'italic'}}>
          Our Team
        </h1>
        <p style={{color: 'var(--light-blue)', marginBottom: '48px', fontSize: '1.1rem'}}>
          Meet the passionate individuals organizing TEDxDPS Monarch Youth.
        </p>

        <h2>Organizers</h2>
        <div className="grid">
          <div className="card center">
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, var(--vibrant-orange), var(--light-blue))',
              borderRadius: '50%',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              ▲
            </div>
            <h3>Your Name</h3>
            <p style={{color: 'var(--cool-gray)', fontStyle: 'italic'}}>Lead Organizer</p>
            <p style={{fontSize: '0.95rem', color: 'var(--light-blue)'}}>
              Passionate about bringing ideas to life.
            </p>
          </div>
          
          <div className="card center">
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, var(--vibrant-orange), var(--light-blue))',
              borderRadius: '50%',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              ▲
            </div>
            <h3>Team Member</h3>
            <p style={{color: 'var(--cool-gray)', fontStyle: 'italic'}}>Curator</p>
            <p style={{fontSize: '0.95rem', color: 'var(--light-blue)'}}>
              Finding the best speakers and topics.
            </p>
          </div>
          
          <div className="card center">
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, var(--vibrant-orange), var(--light-blue))',
              borderRadius: '50%',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              ▲
            </div>
            <h3>Team Member</h3>
            <p style={{color: 'var(--cool-gray)', fontStyle: 'italic'}}>Marketing Lead</p>
            <p style={{fontSize: '0.95rem', color: 'var(--light-blue)'}}>
              Spreading the word about our event.
            </p>
          </div>
          
          <div className="card center">
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, var(--vibrant-orange), var(--light-blue))',
              borderRadius: '50%',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              ▲
            </div>
            <h3>Team Member</h3>
            <p style={{color: 'var(--cool-gray)', fontStyle: 'italic'}}>Tech & Design</p>
            <p style={{fontSize: '0.95rem', color: 'var(--light-blue)'}}>
              Creating amazing experiences online and offline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
