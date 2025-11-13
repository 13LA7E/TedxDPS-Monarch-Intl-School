import type { Metadata } from 'next';
import ApplyFormClient from '@/components/ApplyFormClient';

export const metadata: Metadata = {
  title: 'Register to Attend - TEDxDPS Monarch Intl School Youth',
  description: 'Register for TEDxDPS Monarch Intl School Youth on December 13, 2025. Limited to 100 seats. Secure your spot to experience ideas worth spreading and join the movement.',
  keywords: 'TEDx Registration, TEDxDPS Tickets, Event Registration, Youth Conference, Doha Events, December 2025',
  openGraph: {
    title: 'Register for TEDxDPS Monarch - Limited to 100 Seats',
    description: 'Secure your spot for December 13, 2025. Join us for inspiring talks that challenge conventions and spark change.',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/apply',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register for TEDxDPS Monarch - Limited to 100 Seats',
    description: 'Secure your spot for December 13, 2025. Join the movement.',
  },
};

export default function ApplyPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px', fontStyle: 'italic'}}>
          Register to Attend
        </h1>
        <p style={{color: 'var(--vibrant-orange)', marginBottom: '24px', fontSize: '1.2rem', fontWeight: 700}}>
          Be part of the revolution.
        </p>
        
        <ApplyFormClient />
      </section>
    </div>
  );
}
