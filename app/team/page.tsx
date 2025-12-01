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
    role: 'Student Organizer',
    type: 'Lead',
    photo: '/team/HARDIK SUKHNANDAN.jpg',
  },
  {
    name: 'Ritvik Sinha',
    role: 'Ex. Production',
    type: 'Lead',
    photo: '/team/RITVIK SINHA.jpg',
  },
  {
    name: 'Akriti Rana',
    role: 'Design',
    type: 'Lead',
    photo: '/team/AKRITI RANA.jpg',
  },
  {
    name: 'Irteza',
    role: 'Website',
    type: 'Lead',
    photo: '/team/IRTEZA.jpg',
  },
  {
    name: 'Vishva Trivedi',
    role: 'Event Management',
    type: 'Lead',
    photo: '/team/VISHVA TRIVEDI.jpg',
  },
  {
    name: 'Aastha Yeotkar',
    role: 'Marketing',
    type: 'Lead',
    photo: '/team/AASTHA.jpg',
  },
  {
    name: 'Dipanwita Singh',
    role: 'Video Production',
    type: 'Lead',
    photo: '/team/DIPANWITA SINGH.png',
  },
  {
    name: 'Thraya Vivin',
    role: 'Budget & Sponsorship',
    type: 'Lead',
    photo: '/team/THRAYA VIVEN.png',
  },
  {
    name: 'Anushka Bhatt',
    role: 'Student Organizer',
    type: 'Team',
    photo: '/team/ANUSHKA BHATT.jpg',
  },
  {
    name: 'Anushree Bane',
    role: 'Student Organizer',
    type: 'Team',
    photo: '/team/ANUSHREE BANE.jpg',
  },
];

export default function TeamPage() {
  const leads = teamMembers.filter(member => member.type === 'Lead');
  const team = teamMembers.filter(member => member.type === 'Team');

  return (
    <div className="container">
      <section className="section">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px', fontStyle: 'italic'}}>
          Our Team
        </h1>
        <p style={{color: 'var(--light-blue)', marginBottom: '48px', fontSize: '1.1rem'}}>
          Meet the passionate individuals organizing TEDxDPS Monarch Youth.
        </p>

        <h2 style={{marginBottom: '32px'}}>Department Heads</h2>
        <div className="grid" style={{marginBottom: '60px'}}>
          {leads.map((member) => (
            <div key={member.name} className="card center">
              <img
                src={member.photo}
                alt={member.name}
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 16px',
                  border: '3px solid var(--vibrant-orange)',
                }}
              />
              <h3 style={{marginBottom: '8px'}}>{member.name}</h3>
              <p style={{color: 'var(--vibrant-orange)', fontStyle: 'italic', fontWeight: '600', marginBottom: '4px'}}>
                {member.role} Lead
              </p>
            </div>
          ))}
        </div>

        {team.length > 0 && (
          <>
            <h2 style={{marginBottom: '32px'}}>Team Members</h2>
            <div className="grid">
              {team.map((member) => (
                <div key={member.name} className="card center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 16px',
                      border: '3px solid var(--light-blue)',
                    }}
                  />
                  <h3 style={{marginBottom: '8px'}}>{member.name}</h3>
                  <p style={{color: 'var(--light-blue)', fontStyle: 'italic', fontWeight: '600', marginBottom: '4px'}}>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
