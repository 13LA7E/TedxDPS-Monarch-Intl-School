import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Sponsors - TEDxDPS Monarch Intl School Youth',
  description: 'Thank you to our amazing sponsors who make TEDxDPS Monarch Intl School Youth possible. Their support helps us spread ideas worth spreading.',
  keywords: 'TEDx Sponsors, Event Sponsors, Support, Partners, DPS Monarch',
  openGraph: {
    title: 'Our Sponsors - TEDxDPS Monarch Intl School Youth',
    description: 'Thank you to our amazing sponsors who make this event possible.',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/sponsors',
    type: 'website',
  },
};

export default function SponsorsPage() {
  // Placeholder sponsors - to be updated with actual sponsors
  const sponsors = {
    platinum: [
      // { name: 'Sponsor Name', logo: '/sponsors/logo.png', website: 'https://example.com' }
    ],
    gold: [
      // { name: 'Sponsor Name', logo: '/sponsors/logo.png', website: 'https://example.com' }
    ],
    silver: [
      // { name: 'Sponsor Name', logo: '/sponsors/logo.png', website: 'https://example.com' }
    ],
    community: [
      // { name: 'Sponsor Name', logo: '/sponsors/logo.png', website: 'https://example.com' }
    ]
  };

  return (
    <div className="container">
      <section className="section">
        <div style={{
          background: 'linear-gradient(135deg, rgba(235,0,40,0.1) 0%, rgba(235,0,40,0.05) 100%)',
          padding: '60px 50px',
          borderRadius: '20px',
          border: '2px solid rgba(235,0,40,0.3)',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{fontSize: '3rem', marginBottom: '20px'}}>Our Sponsors</h1>
          <p style={{color: 'var(--light-blue)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto'}}>
            We are deeply grateful to our sponsors whose generous support makes TEDxDPS Monarch Intl School Youth possible. Their commitment to spreading ideas worth spreading helps us create an unforgettable experience for our community.
          </p>
        </div>

        {/* Platinum Sponsors */}
        {sponsors.platinum.length > 0 && (
          <div style={{marginBottom: '80px'}}>
            <h2 style={{
              fontSize: '2.2rem',
              textAlign: 'center',
              marginBottom: '40px',
              color: 'var(--vibrant-orange)',
              borderBottom: '3px solid rgba(235,0,40,0.3)',
              paddingBottom: '15px'
            }}>
              Platinum Sponsors
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {sponsors.platinum.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    padding: '40px',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    border: '2px solid rgba(235,0,40,0.3)'
                  }}
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    style={{maxWidth: '100%', height: 'auto', maxHeight: '120px', objectFit: 'contain'}}
                  />
                  <p style={{marginTop: '20px', color: 'var(--off-white)', fontSize: '1.1rem', fontWeight: '600'}}>
                    {sponsor.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {sponsors.gold.length > 0 && (
          <div style={{marginBottom: '80px'}}>
            <h2 style={{
              fontSize: '2rem',
              textAlign: 'center',
              marginBottom: '40px',
              color: 'var(--vibrant-orange)',
              borderBottom: '2px solid rgba(235,0,40,0.3)',
              paddingBottom: '15px'
            }}>
              Gold Sponsors
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              alignItems: 'center'
            }}>
              {sponsors.gold.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    padding: '35px',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    style={{maxWidth: '100%', height: 'auto', maxHeight: '100px', objectFit: 'contain'}}
                  />
                  <p style={{marginTop: '15px', color: 'var(--off-white)', fontSize: '1rem', fontWeight: '600'}}>
                    {sponsor.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {sponsors.silver.length > 0 && (
          <div style={{marginBottom: '80px'}}>
            <h2 style={{
              fontSize: '1.8rem',
              textAlign: 'center',
              marginBottom: '40px',
              color: 'var(--vibrant-orange)',
              borderBottom: '2px solid rgba(235,0,40,0.3)',
              paddingBottom: '15px'
            }}>
              Silver Sponsors
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '25px',
              alignItems: 'center'
            }}>
              {sponsors.silver.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    padding: '30px',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    style={{maxWidth: '100%', height: 'auto', maxHeight: '80px', objectFit: 'contain'}}
                  />
                  <p style={{marginTop: '15px', color: 'var(--off-white)', fontSize: '0.95rem', fontWeight: '600'}}>
                    {sponsor.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Community Sponsors */}
        {sponsors.community.length > 0 && (
          <div style={{marginBottom: '60px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              textAlign: 'center',
              marginBottom: '35px',
              color: 'var(--vibrant-orange)',
              borderBottom: '2px solid rgba(235,0,40,0.3)',
              paddingBottom: '15px'
            }}>
              Community Sponsors
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '20px',
              alignItems: 'center'
            }}>
              {sponsors.community.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    padding: '25px',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    style={{maxWidth: '100%', height: 'auto', maxHeight: '60px', objectFit: 'contain'}}
                  />
                  <p style={{marginTop: '12px', color: 'var(--off-white)', fontSize: '0.9rem', fontWeight: '600'}}>
                    {sponsor.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {sponsors.platinum.length === 0 && sponsors.gold.length === 0 && sponsors.silver.length === 0 && sponsors.community.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 40px',
            background: 'rgba(20,20,30,0.6)',
            borderRadius: '20px',
            border: '1px solid rgba(235,0,40,0.2)'
          }}>
            <h2 style={{fontSize: '2rem', marginBottom: '20px', color: 'var(--vibrant-orange)'}}>
              Become a Sponsor
            </h2>
            <p style={{color: 'var(--light-blue)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto 40px'}}>
              We are currently seeking sponsors to help make TEDxDPS Monarch Intl School Youth a reality. Join us in spreading ideas worth spreading and making a lasting impact on our community.
            </p>
            <Link href="/contact" className="cta cta-pulse">
              Become a Sponsor
            </Link>
          </div>
        )}

        {/* Thank You Message */}
        <div style={{
          marginTop: '80px',
          textAlign: 'center',
          padding: '50px 40px',
          background: 'linear-gradient(135deg, rgba(235,0,40,0.08) 0%, rgba(235,0,40,0.03) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(235,0,40,0.2)'
        }}>
          <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>Thank You</h2>
          <p style={{color: 'var(--light-blue)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto'}}>
            To all our sponsors, partners, and supporters—your belief in the power of ideas helps us create a platform where young voices can challenge conventions and define tomorrow. We couldn&apos;t do this without you.
          </p>
        </div>

        {/* Sponsorship Inquiry CTA */}
        <div style={{marginTop: '60px', textAlign: 'center'}}>
          <p style={{color: 'var(--light-blue)', fontSize: '1.05rem', marginBottom: '20px'}}>
            Interested in sponsoring our next event?
          </p>
          <Link href="/contact" className="cta">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
