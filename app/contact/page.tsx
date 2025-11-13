import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - TEDxDPS Monarch Intl School Youth',
  description: 'Get in touch with TEDxDPS Monarch. Questions about the event, speaking opportunities, or partnerships? We\'d love to hear from you.',
  keywords: 'TEDx Contact, Event Inquiries, Speaker Applications, Partnership Opportunities, DPS Monarch Contact',
  openGraph: {
    title: 'Contact TEDxDPS Monarch',
    description: 'Get in touch with TEDxDPS Monarch. Questions about the event, speaking opportunities, or partnerships?',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact TEDxDPS Monarch',
    description: 'Get in touch with TEDxDPS Monarch.',
  },
};

export default function ContactPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px', fontStyle: 'italic'}}>
          Join the Movement
        </h1>
        <p style={{color: 'var(--vibrant-orange)', marginBottom: '24px', fontSize: '1.2rem', fontWeight: 700}}>
          Ready to challenge the status quo?
        </p>
        <p style={{color: 'var(--light-blue)', marginBottom: '48px', fontSize: '1.05rem'}}>
          Whether you want to speak, collaborate, or simply be part of the revolution—reach out. Let's defy together.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Email Us</h3>
            <p>
              <a href="mailto:tedxyouthdpsmonarchintlschool@gmail.com" style={{color: 'var(--vibrant-orange)', textDecoration: 'none'}}>
                tedxyouthdpsmonarchintlschool@gmail.com
              </a>
            </p>
            <p style={{color: 'var(--light-blue)', fontSize: '0.95rem'}}>
              For general inquiries and event information
            </p>
          </div>

          <div className="card">
            <h3>Visit Us</h3>
            <p style={{color: 'var(--white)'}}>DPS Monarch International School</p>
            <p style={{marginTop: '8px'}}>
              <a 
                href="https://maps.app.goo.gl/HrsLyatVDvd28BvXA" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color: 'var(--vibrant-orange)', textDecoration: 'none', fontWeight: 600}}
              >
                View on Google Maps
              </a>
            </p>
          </div>

          <div className="card">
            <h3>Follow Us</h3>
            <p style={{margin: '12px 0'}}>
              <a 
                href="https://www.instagram.com/TEDxdpsmonarchintlschool/" 
                target="_blank"
                rel="noopener noreferrer"
                style={{color: 'var(--vibrant-orange)', marginRight: '16px', textDecoration: 'none', fontWeight: 600}}
              >
                Instagram
              </a>
              <a href="#" style={{color: 'var(--vibrant-orange)', textDecoration: 'none', fontWeight: 600}}>
                LinkedIn
              </a>
            </p>
            <p style={{color: 'var(--light-blue)', fontSize: '0.95rem'}}>
              Stay updated on event news
            </p>
          </div>
        </div>

        <div style={{marginTop: '64px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
          <h2>Send a Message</h2>
          <form style={{display: 'flex', flexDirection: 'column'}}>
            <div className="form-row">
              <label htmlFor="contact-name">Name</label>
              <input type="text" id="contact-name" name="name" />
            </div>
            <div className="form-row">
              <label htmlFor="contact-email">Email</label>
              <input type="email" id="contact-email" name="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} />
            </div>
            <button type="submit" className="btn cta">Send Message</button>
            <small style={{marginTop: '12px'}}>
              Note: To enable this form, connect it to a backend service like Formspree or EmailJS.
            </small>
          </form>
        </div>
      </section>
    </div>
  );
}
