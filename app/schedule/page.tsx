import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule - TEDxDPS Monarch Intl School Youth',
  description: 'Event schedule for TEDxDPS Monarch on December 13, 2025. View the complete agenda, speaker lineup, and timing.',
  keywords: 'TEDx Schedule, Event Agenda, DPS Monarch Event, TEDx Timing',
  openGraph: {
    title: 'Event Schedule - TEDxDPS Monarch',
    description: 'Event schedule for TEDxDPS Monarch on December 13, 2025.',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/schedule',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Schedule - TEDxDPS Monarch',
    description: 'Event schedule for TEDxDPS Monarch on December 13, 2025.',
  },
};

const scheduleItems = [
  { time: '3:00 PM', title: 'Introduction by Emcee', description: 'Welcome to TEDxDPS Monarch International School Youth. Setting the stage for an inspiring afternoon.', duration: '5 minutes' },
  { time: '3:05 PM', title: 'National Anthems', description: 'Qatar National Anthem followed by Indian National Anthem.', duration: '5 minutes' },
  { time: '3:10 PM', title: 'School Song', description: 'DPS Monarch International School anthem.', duration: '5 minutes' },
  { time: '3:15 PM', title: 'Guest & VIP Felicitation', description: 'Honoring our distinguished guests and special dignitaries.', duration: '10 minutes' },
  { time: '3:25 PM', title: 'Address by School President', description: 'Welcome address and vision for the event.', duration: '5 minutes' },
  { time: '3:30 PM', title: 'TEDx Opening Video', description: 'Official TEDx introduction setting the tone for ideas worth spreading.', duration: '1 minute' },
  { time: '3:31 PM', title: 'Speaker 1: Dipa Swaminathan', description: 'Adolescence Unveiled - Exploring the complex world of teenage development.', duration: '15 minutes' },
  { time: '3:46 PM', title: 'Speaker 2: Varun Duggirala', description: 'Unfiltered: Building a Media Platform that Respects Your Intelligence.', duration: '15 minutes' },
  { time: '4:01 PM', title: 'Speaker 3: Abhilasha Bahuguna', description: 'Powering Tomorrow - The future of EV battery technology.', duration: '15 minutes' },
  { time: '4:16 PM', title: 'Refreshment Break', description: 'Time to network, refresh, and reflect on the ideas shared so far.', duration: '10 minutes' },
  { time: '4:26 PM', title: 'Speaker 4: Anoushka Jolly', description: 'Breaking Barriers, Building Bridges - Creating connections through innovation.', duration: '15 minutes' },
  { time: '4:41 PM', title: 'Speaker 5: Snigdha Kumar', description: 'A Story of Leadership Beyond Titles - Student perspective on authentic leadership.', duration: '15 minutes' },
  { time: '4:56 PM', title: 'Speaker 6: Sudhanshu Ranjan', description: 'The Power of Voice in the Digital Age - Reshaping communication through technology.', duration: '15 minutes' },
  { time: '5:11 PM', title: 'Speaker 7: Aishani Soni', description: 'Redefining Ambition: Beyond the Checklist - A fresh take on success.', duration: '10 minutes' },
  { time: '5:21 PM', title: 'Speaker 8: Dhruv Nair', description: 'Leveling Up: Lessons from the Gaming World - Insights from professional gaming.', duration: '10 minutes' },
  { time: '5:31 PM', title: 'Speaker 9: Dushyant Vikram Khosla', description: 'AI and the Future We\'re Building - Exploring the transformative potential of AI.', duration: '10 minutes' },
];

export default function SchedulePage() {
  return (
    <div className="container">
      <section className="section">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px', fontStyle: 'italic', textAlign: 'center'}}>
          Event Schedule
        </h1>
        <p style={{color: 'var(--light-blue)', marginBottom: '48px', fontSize: '1.15rem', textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto'}}>
          Your guide to an afternoon of inspiration, innovation, and ideas worth spreading.
        </p>

        <div style={{background: 'linear-gradient(135deg, rgba(230,43,30,0.1) 0%, rgba(230,43,30,0.05) 100%)', padding: '40px', borderRadius: '20px', border: '2px solid rgba(230,43,30,0.3)', marginBottom: '60px', textAlign: 'center'}}>
          <h2 style={{color: 'var(--vibrant-orange)', fontSize: '2rem', marginBottom: '15px'}}>December 13, 2025</h2>
          <p style={{color: 'var(--off-white)', marginBottom: '10px'}}><strong>Location:</strong> DPS Monarch International School, Doha, Qatar</p>
          <p style={{color: 'var(--off-white)', marginBottom: '20px'}}><strong>Duration:</strong> 3:00 PM - 5:40 PM (2 hours 40 minutes)</p>
          <p style={{color: 'var(--vibrant-orange)', fontWeight: '600'}}>Please arrive by 2:50 PM</p>
        </div>

        <div className="timeline" style={{position: 'relative', maxWidth: '900px', margin: '60px auto'}}>
          {scheduleItems.map((item, index) => (
            <div key={index} className={`timeline-item fade-in-up ${index % 2 === 0 ? '' : 'even'}`} style={{position: 'relative', marginBottom: '60px'}}>
              <div style={{background: 'linear-gradient(135deg, rgba(20, 20, 30, 0.95) 0%, rgba(10, 10, 20, 0.98) 100%)', padding: '25px 30px', borderRadius: '12px', border: '1px solid rgba(235, 0, 40, 0.2)', transition: 'all 0.3s ease', position: 'relative'}}>
                <div style={{position: 'absolute', top: '20px', background: 'var(--vibrant-orange)', color: 'white', padding: '8px 16px', borderRadius: '20px', fontWeight: '700', fontSize: '0.9rem', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(235, 0, 40, 0.4)', right: index % 2 === 0 ? '-85px' : 'auto', left: index % 2 === 1 ? '-85px' : 'auto'}}>
                  {item.time}
                </div>
                <h3 style={{color: 'var(--vibrant-orange)', fontSize: '1.3rem', marginBottom: '12px', fontWeight: '600'}}>{item.title}</h3>
                <p style={{color: 'var(--light-blue)', lineHeight: '1.7', marginBottom: '10px'}}>{item.description}</p>
                <p style={{color: 'var(--off-white-dark)', fontSize: '0.9rem', fontStyle: 'italic'}}>Duration: {item.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop: '80px', textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, rgba(235,0,40,0.1) 0%, rgba(235,0,40,0.05) 100%)', borderRadius: '20px', border: '2px solid rgba(235,0,40,0.3)'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '20px', color: 'var(--vibrant-orange)'}}>Secure Your Seat</h2>
          <p style={{color: 'var(--light-blue)', fontSize: '1.15rem', marginBottom: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
            Limited to 100 seats. Free entry. Register now to be part of this inspiring event.
          </p>
          <Link href="/apply" className="cta cta-pulse">Register Now</Link>
        </div>
      </section>
    </div>
  );
}
