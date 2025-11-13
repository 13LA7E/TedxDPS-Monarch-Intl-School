import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - TEDxDPS Monarch Intl School Youth',
  description: 'Frequently asked questions about TEDxDPS Monarch. Get answers about registration, event details, and more.',
  keywords: 'TEDx FAQ, Event Questions, DPS Monarch FAQ, TEDx Registration Help',
  openGraph: {
    title: 'FAQ - TEDxDPS Monarch',
    description: 'Frequently asked questions about TEDxDPS Monarch.',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - TEDxDPS Monarch',
    description: 'Frequently asked questions about TEDxDPS Monarch.',
  },
};

const faqData = [
  {
    category: 'Registration & Tickets',
    questions: [
      { q: 'Do I need a ticket to attend?', a: 'Yes, registration is mandatory. While the event is free, we have limited capacity (100 seats) and require advance registration to ensure proper planning. Register through our website to secure your spot.' },
      { q: 'Is the event really free?', a: 'Yes! TEDxDPS Monarch Intl School Youth is completely free to attend. There are no hidden costs or fees. We believe in making ideas accessible to everyone.' },
      { q: 'How do I register?', a: 'Click the "Register" button on our website and fill out the registration form. You\'ll receive a confirmation email once your registration is processed.' },
      { q: 'When does registration close?', a: 'Registration closes on December 10, 2025, or when we reach maximum capacity (100 attendees), whichever comes first. Register early to avoid disappointment!' },
    ]
  },
  {
    category: 'Event Details',
    questions: [
      { q: 'What is the event date and time?', a: 'TEDxDPS Monarch will take place on December 13, 2025, from 3:00 PM to 5:40 PM. Please arrive by 2:50 PM for check-in and seating.' },
      { q: 'Where is the event located?', a: 'The event will be held at DPS Monarch International School, Doha, Qatar. Detailed location information will be sent in your confirmation email.' },
      { q: 'What is the dress code?', a: 'Smart casual attire is recommended. Feel comfortable, but remember this is a professional event celebrating ideas worth spreading.' },
      { q: 'Will there be refreshments?', a: 'Yes! There will be a 10-minute refreshment break at 4:16 PM. Light snacks and beverages will be provided.' },
    ]
  },
  {
    category: 'Speakers & Content',
    questions: [
      { q: 'Who are the speakers?', a: 'We have 9 incredible speakers including Dipa Swaminathan, Varun Duggirala, Abhilasha Bahuguna, Anoushka Jolly, and more. Visit our Speakers page for full bios and talk topics.' },
      { q: 'How long is each talk?', a: 'Most talks are 10-15 minutes long, following the TED format. This keeps presentations dynamic and engaging while allowing multiple perspectives.' },
      { q: 'Will the talks be recorded?', a: 'Yes, all talks will be professionally recorded and may be uploaded to the official TEDx YouTube channel (subject to quality review and speaker consent).' },
      { q: 'Can I ask questions to the speakers?', a: 'Due to time constraints during the event, there won\'t be a Q&A session. However, speakers may be available during the refreshment break for brief conversations.' },
    ]
  },
  {
    category: 'Logistics',
    questions: [
      { q: 'Is parking available?', a: 'Yes, parking is available at DPS Monarch International School. Follow the parking signs upon arrival. Additional parking information will be in your confirmation email.' },
      { q: 'Is the venue wheelchair accessible?', a: 'Yes, the venue is fully wheelchair accessible. If you have specific accessibility requirements, please mention them in your registration form or contact us in advance.' },
      { q: 'Can I bring a guest?', a: 'Yes, but each person must register separately. We have limited seating, so please register all attendees individually through our website.' },
      { q: 'What if I need to cancel my registration?', a: 'If you can\'t attend, please email us at tedxyouthdpsmonarchintlschool@gmail.com as soon as possible so we can offer your seat to someone on the waiting list.' },
    ]
  },
  {
    category: 'About TEDx',
    questions: [
      { q: 'What is TEDx?', a: 'TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxDPS Monarch Intl School Youth, where x = independently organized TED event.' },
      { q: 'What does "Youth" mean in the event name?', a: 'The "Youth" designation indicates this is a TEDxYouth event, focused on empowering and inspiring young audiences. Topics and speakers are chosen to resonate with youth perspectives.' },
      { q: 'Can I suggest a speaker or topic?', a: 'We appreciate your enthusiasm! While our speaker lineup for this event is finalized, you can submit suggestions for future events by emailing us.' },
      { q: 'How can I get involved with TEDxDPS Monarch?', a: 'We\'re always looking for volunteers, partners, and team members. Contact us at tedxyouthdpsmonarchintlschool@gmail.com to learn about opportunities.' },
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px', fontStyle: 'italic', textAlign: 'center'}}>
          Frequently Asked Questions
        </h1>
        <p style={{color: 'var(--light-blue)', marginBottom: '60px', fontSize: '1.15rem', textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto'}}>
          Everything you need to know about attending TEDxDPS Monarch Intl School Youth.
        </p>

        {faqData.map((category, catIndex) => (
          <div key={catIndex} className="fade-in-up" style={{marginBottom: '50px'}}>
            <h2 style={{color: 'var(--vibrant-orange)', fontSize: '1.8rem', marginBottom: '25px', paddingBottom: '10px', borderBottom: '2px solid rgba(230, 43, 30, 0.3)'}}>
              {category.category}
            </h2>
            <div style={{display: 'grid', gap: '20px'}}>
              {category.questions.map((item, qIndex) => (
                <div key={qIndex} className="faq-item card" style={{padding: '0', overflow: 'hidden'}}>
                  <div className="faq-question" style={{padding: '20px 24px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(230, 43, 30, 0.05)', transition: 'all 0.3s ease'}}>
                    <span style={{fontWeight: '600', color: 'var(--off-white)', fontSize: '1.1rem', flex: 1}}>{item.q}</span>
                    <span className="faq-toggle" style={{color: 'var(--vibrant-orange)', fontSize: '1.5rem', fontWeight: '700', marginLeft: '20px', transition: 'transform 0.3s ease'}}>+</span>
                  </div>
                  <div className="faq-answer" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.3s ease, padding 0.3s ease', padding: '0 24px'}}>
                    <p style={{color: 'var(--light-blue)', lineHeight: '1.8', paddingTop: '20px', paddingBottom: '20px'}}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{marginTop: '80px', textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, rgba(230,43,30,0.1) 0%, rgba(230,43,30,0.05) 100%)', borderRadius: '20px', border: '2px solid rgba(230,43,30,0.3)'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '20px', color: 'var(--vibrant-orange)'}}>Still Have Questions?</h2>
          <p style={{color: 'var(--light-blue)', fontSize: '1.15rem', marginBottom: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
            Can\'t find what you\'re looking for? Get in touch with us directly.
          </p>
          <Link href="/contact" className="cta">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
