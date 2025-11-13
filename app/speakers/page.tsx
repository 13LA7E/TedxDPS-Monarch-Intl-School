import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speakers - TEDxDPS Monarch Intl School Youth',
  description: 'Meet our inspiring speakers at TEDxDPS Monarch. Innovators, change-makers, and visionaries sharing ideas worth spreading.',
  keywords: 'TEDx Speakers, DPS Monarch Speakers, Youth Speakers, TEDx Talks, Innovation Speakers',
  openGraph: {
    title: 'Our Speakers - TEDxDPS Monarch',
    description: 'Meet our inspiring speakers at TEDxDPS Monarch. Innovators, change-makers, and visionaries sharing ideas worth spreading.',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/speakers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Speakers - TEDxDPS Monarch',
    description: 'Meet our inspiring speakers at TEDxDPS Monarch.',
  },
};

const speakers = [
  { initials: 'DS', name: 'Dipa Swaminathan', title: 'IB Psychology Teacher & Counselor', org: 'Birla Public School', topic: 'Adolescence Unveiled', bio: 'Expert in adolescent psychology and student counseling, bringing insights into the complex world of teenage development and mental health.' },
  { initials: 'VD', name: 'Varun Duggirala', title: 'Co-Founder & Chief Content Officer', org: 'The Glitch', topic: 'Unfiltered: Building a Media Platform that Respects Your Intelligence', bio: 'Media innovator revolutionizing content creation and distribution, challenging traditional narratives with authentic storytelling.' },
  { initials: 'AB', name: 'Abhilasha Bahuguna', title: 'EV Battery Innovator', org: '', topic: 'Powering Tomorrow', bio: 'Pioneer in electric vehicle battery technology, driving the future of sustainable transportation and clean energy solutions.' },
  { initials: 'AJ', name: 'Anoushka Jolly', title: 'Founder', org: 'Symbi', topic: 'Breaking Barriers, Building Bridges', bio: 'Social entrepreneur creating innovative solutions to connect communities and break down barriers through technology and empathy.' },
  { initials: 'SK', name: 'Snigdha Kumar', title: 'Student Council President (2023-24)', org: 'DPS Monarch International School', topic: 'A Story of Leadership Beyond Titles', bio: 'Student leader demonstrating that true leadership transcends positions, inspiring peers through authentic action and vision.' },
  { initials: 'SR', name: 'Sudhanshu Ranjan', title: 'Co-Founder', org: 'Bolo Live', topic: 'The Power of Voice in the Digital Age', bio: 'Digital innovator empowering voices through live streaming technology, reshaping how communities connect and communicate.' },
  { initials: 'AS', name: 'Aishani Soni', title: 'Student', org: 'DPS Monarch International School', topic: 'Redefining Ambition: Beyond the Checklist', bio: 'Student advocate challenging conventional definitions of success and ambition, promoting authentic personal growth.' },
  { initials: 'DN', name: 'Dhruv Nair', title: 'Pro Gamer & Streamer', org: '', topic: 'Leveling Up: Lessons from the Gaming World', bio: 'Professional gamer and content creator sharing insights on dedication, strategy, and turning passion into profession.' },
  { initials: 'DK', name: 'Dushyant Vikram Khosla', title: 'Chief AI Scientist', org: '', topic: 'AI and the Future We&apos;re Building', bio: 'Leading artificial intelligence researcher exploring the ethical implications and transformative potential of AI technology.' },
];

export default function SpeakersPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px', fontStyle: 'italic', textAlign: 'center'}}>
          Our Speakers
        </h1>
        <p style={{color: 'var(--light-blue)', marginBottom: '48px', fontSize: '1.15rem', textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto'}}>
          Meet the visionaries, innovators, and change-makers who will share ideas worth spreading at TEDxDPS Monarch Intl School Youth.
        </p>

        <div className="grid" style={{marginTop: '40px'}}>
          {speakers.map((speaker, index) => (
            <div key={speaker.initials} className="card" style={{padding: '30px'}}>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px', flexWrap: 'wrap'}}>
                <div style={{
                  width: '100px', height: '100px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--vibrant-orange) 0%, var(--primary-red) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2.5rem', fontWeight: 'bold', color: 'white', flexShrink: 0,
                  border: '3px solid rgba(230, 43, 30, 0.3)'
                }}>
                  {speaker.initials}
                </div>
                <div>
                  <h3 style={{color: 'var(--vibrant-orange)', fontSize: '1.5rem', marginBottom: '5px', fontWeight: 700}}>{speaker.name}</h3>
                  <p style={{color: 'var(--light-blue)', fontSize: '1rem', marginBottom: '8px'}}>
                    {speaker.title}{speaker.org && <><br />{speaker.org}</>}
                  </p>
                </div>
              </div>
              <div style={{color: 'var(--off-white)', fontSize: '1.1rem', fontWeight: 600, marginTop: '15px', padding: '12px 16px', background: 'rgba(230, 43, 30, 0.1)', borderLeft: '3px solid var(--vibrant-orange)', borderRadius: '4px'}}>
                &quot;{speaker.topic}&quot;
              </div>
              <p style={{color: 'var(--light-blue)', lineHeight: '1.7', marginTop: '15px'}}>
                {speaker.bio}
              </p>
            </div>
          ))}
        </div>

        <div style={{marginTop: '80px', textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, rgba(230,43,30,0.1) 0%, rgba(230,43,30,0.05) 100%)', borderRadius: '20px', border: '2px solid rgba(230,43,30,0.3)'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '20px', color: 'var(--vibrant-orange)'}}>Don't Miss Out</h2>
          <p style={{color: 'var(--light-blue)', fontSize: '1.15rem', marginBottom: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
            Join us on December 13, 2025, to hear these incredible speakers share their stories and ideas worth spreading.
          </p>
          <Link href="/apply" className="cta cta-pulse">Reserve Your Seat</Link>
          <p style={{color: 'var(--off-white)', marginTop: '15px', fontSize: '0.95rem'}}>Limited to 100 seats • Free Entry</p>
        </div>
      </section>
    </div>
  );
}
