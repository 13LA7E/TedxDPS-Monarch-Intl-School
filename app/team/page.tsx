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

const teamMembers = [
  {
    name: 'Hardik Sukhnandan',
    role: 'Student Organizer Lead',
    photo: '/TedxDPS-Monarch-Intl-School/team/HARDIK-SUKHNANDAN.jpg',
  },
  {
    name: 'Ritvik Sinha',
    role: 'Ex. Production Lead',
    photo: '/TedxDPS-Monarch-Intl-School/team/RITVIK-SINHA.jpg',
  },
  {
    name: 'Akriti Rana',
    role: 'Design Lead',
    photo: '/TedxDPS-Monarch-Intl-School/team/AKRITI-RANA.jpg',
  },
  {
    name: 'Irteza',
    role: 'Website Lead',
    photo: '/TedxDPS-Monarch-Intl-School/team/IRTEZA.jpg',
  },
  {
    name: 'Vishva Trivedi',
    role: 'Event Management Lead',
    photo: '/TedxDPS-Monarch-Intl-School/team/VISHVA-TRIVEDI.jpg',
  },
  {
    name: 'Aastha Yeotkar',
    role: 'Marketing Lead',
    photo: '/TedxDPS-Monarch-Intl-School/team/AASTHA.jpg',
  },
  {
    name: 'Dipanwita Singh',
    role: 'Video Production Lead',
    photo: '/TedxDPS-Monarch-Intl-School/team/DIPANWITA-SINGH.png',
  },
  {
    name: 'Thraya Vivin',
    role: 'Budget & Sponsorship Lead',
    photo: '/TedxDPS-Monarch-Intl-School/team/THRAYA-VIVIN.png',
  },
  {
    name: 'Anushka Bhatt',
    role: 'Student Organizer',
    photo: '/TedxDPS-Monarch-Intl-School/team/ANUSHKA-BHATT.jpg',
  },
  {
    name: 'Anushree Bane',
    role: 'Student Organizer',
    photo: '/TedxDPS-Monarch-Intl-School/team/ANUSHREE-BANE.jpg',
  },
];

export default function TeamPage() {
  return (
    <div className="container">
      <section className="section" style={{paddingTop: '60px', paddingBottom: '80px'}}>
        {/* Hero Section */}
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <p style={{
            color: 'var(--vibrant-orange)',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            fontSize: '0.9rem',
            marginBottom: '16px',
            fontWeight: '600'
          }}>
            The Visionaries Behind TEDx
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '24px',
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #fff 0%, var(--light-blue) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Meet Our Team
          </h1>
          <p style={{
            color: 'var(--cool-gray)',
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            The passionate minds and creative spirits dedicated to bringing ideas worth spreading to our community.
          </p>
        </div>

        {/* Section Title */}
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: 'var(--vibrant-orange)',
            position: 'relative',
            display: 'inline-block'
          }}>
            Organizers & Department Heads
            <span style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, var(--vibrant-orange), transparent)'
            }}></span>
          </h2>
        </div>

        {/* Team Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="card"
              style={{
                background: 'linear-gradient(145deg, rgba(30,30,30,0.9) 0%, rgba(15,15,15,0.95) 100%)',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative gradient overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--vibrant-orange), var(--light-blue))'
              }}></div>
              
              {/* Photo Container */}
              <div style={{
                width: '160px',
                height: '160px',
                margin: '0 auto 24px',
                position: 'relative'
              }}>
                {/* Glowing ring */}
                <div style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--vibrant-orange), var(--light-blue))',
                  padding: '4px'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: '#0a0a0a'
                  }}></div>
                </div>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </div>
              
              {/* Name */}
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '12px',
                color: '#ffffff',
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '1px',
                textAlign: 'center',
                width: '100%',
                display: 'block'
              }}>
                {member.name}
              </h3>
              
              {/* Role */}
              <p style={{
                color: 'var(--vibrant-orange)',
                fontSize: '0.85rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                padding: '8px 16px',
                background: 'rgba(235, 77, 75, 0.1)',
                borderRadius: '20px',
                display: 'inline-block',
                border: '1px solid rgba(235, 77, 75, 0.3)'
              }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
