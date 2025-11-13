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
  { time: '3:31 PM', title: 'Speaker 1', description: 'First inspiring speaker of the day shares their groundbreaking ideas.', duration: '20 minutes' },
  { time: '3:50 PM', title: 'Speaker 2', description: 'Continuing the journey of inspiration with our second speaker.', duration: '20 minutes' },
  { time: '4:10 PM', title: 'Refreshment Break', description: 'Time to relax, network, and discuss the inspiring talks. Light refreshments will be served.', duration: '5-10 minutes' },
  { time: '4:20 PM', title: 'Music Performance', description: 'Live musical performance to energize and inspire.', duration: '5-6 minutes' },
  { time: '4:25 PM', title: 'Speaker 3', description: 'Third speaker brings fresh perspectives and innovative ideas.', duration: '20 minutes' },
  { time: '4:45 PM', title: 'Speaker 4', description: 'Fourth speaker continues to challenge and inspire with their unique vision.', duration: '20 minutes' },
  { time: '5:05 PM', title: 'Student Speaker', description: 'Our student speaker shares their perspective on defying conventions and defining tomorrow.', duration: '20 minutes' },
  { time: '5:25 PM', title: 'Vote of Thanks by Principal', description: 'Closing remarks and gratitude from the school principal.', duration: '3-5 minutes' },
  { time: '5:30 PM', title: 'Team Reveal & Speeches', description: 'Meet the incredible team behind TEDxDPS Monarch and hear from our organizers.', duration: '10 minutes' },
  { time: '5:40 PM', title: 'Dispersal', description: 'Event concludes. Thank you for being part of this inspiring journey. Continue the conversations!', duration: '' },
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
              <div className="card" style={{padding: '25px 30px', position: 'relative'}}>
                <div style={{position: 'absolute', top: '20px', background: 'var(--vibrant-orange)', color: 'white', padding: '8px 16px', borderRadius: '20px', fontWeight: '700', fontSize: '0.9rem', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(235, 0, 40, 0.4)', right: index % 2 === 0 ? '-85px' : 'auto', left: index % 2 === 1 ? '-85px' : 'auto'}}>
                  {item.time}
                </div>
                <h3 style={{color: 'var(--vibrant-orange)', fontSize: '1.3rem', marginBottom: '12px', fontWeight: '600'}}>{item.title}</h3>
                <p style={{color: 'var(--light-blue)', lineHeight: '1.7', marginBottom: '10px'}}>{item.description}</p>
                {item.duration && <p style={{color: 'var(--off-white-dark)', fontSize: '0.9rem', fontStyle: 'italic'}}>Duration: {item.duration}</p>}
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop: '80px', textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, rgba(235,0,40,0.1) 0%, rgba(235,0,40,0.05) 100%)', borderRadius: '20px', border: '2px solid rgba(235,0,40,0.3)'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '20px', color: 'var(--vibrant-orange)'}}>Important Information</h2>
          <ul style={{color: 'var(--light-blue)', lineHeight: '2', paddingLeft: '20px', textAlign: 'left', maxWidth: '700px', margin: '0 auto 30px', fontSize: '1.05rem'}}>
            <li>Please arrive by 2:50 PM for a prompt 3:00 PM start</li>
            <li>Total event duration: 2 hours and 40 minutes (3:00 PM - 5:40 PM)</li>
            <li>Dress code: Smart casual / Formal attire</li>
            <li>Light refreshments will be provided during the 4:10 PM break</li>
            <li>Photography and recording will take place throughout the event</li>
            <li>The schedule may be subject to minor adjustments</li>
            <li>Please silence your mobile devices during all sessions</li>
            <li>Be present for the national anthems at 3:05 PM</li>
          </ul>
        </div>

        <div style={{marginTop: '60px', textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, rgba(235,0,40,0.1) 0%, rgba(235,0,40,0.05) 100%)', borderRadius: '20px', border: '2px solid rgba(235,0,40,0.3)'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '20px', color: 'var(--vibrant-orange)'}}>Ready to Join Us?</h2>
          <p style={{color: 'var(--light-blue)', fontSize: '1.15rem', marginBottom: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
            Secure your spot for this incredible day of inspiration and innovation.
          </p>
          <Link href="/apply" className="cta cta-pulse">Register Now</Link>
          <p style={{color: 'var(--off-white)', marginTop: '15px', fontSize: '0.95rem'}}>Limited to 100 seats</p>
        </div>
      </section>
    </div>
  );
}
