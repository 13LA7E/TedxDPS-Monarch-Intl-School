import type { Metadata } from 'next';
import GalleryClient from '@/components/GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery - TEDxDPS Monarch Intl School Youth',
  description: 'Explore photos from TEDxDPS Monarch events. Capturing the energy, passion, and ideas that define our movement.',
  keywords: 'TEDx Photos, Event Gallery, TEDxDPS Images, Youth Event Photos, DPS Monarch Gallery',
  openGraph: {
    title: 'Photo Gallery - TEDxDPS Monarch',
    description: 'Explore photos from TEDxDPS Monarch events. Capturing the energy, passion, and ideas that define our movement.',
    url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/gallery',
    type: 'website',
    images: [
      {
        url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/Gallery/IMG_1297.webp',
        width: 1200,
        height: 630,
        alt: 'TEDxDPS Monarch Event Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Gallery - TEDxDPS Monarch',
    description: 'Explore photos from TEDxDPS Monarch events.',
    images: ['https://13la7e.github.io/TedxDPS-Monarch-Intl-School/Gallery/IMG_1297.webp'],
  },
};

export default function GalleryPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '20px', textAlign: 'center'}}>
          Event Gallery
        </h1>
        <p style={{color: 'var(--light-blue)', marginBottom: '48px', fontSize: '1.15rem', textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto'}}>
          Capturing moments of inspiration, innovation, and ideas worth spreading from our TEDx events.
        </p>

        <GalleryClient />
      </section>
    </div>
  );
}
