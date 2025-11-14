import { Metadata } from 'next';

interface Speaker {
  initials: string;
  name: string;
  title: string;
  org: string;
  topic: string;
  bio: string;
}

/**
 * Fetch speakers data with ISR (Incremental Static Regeneration)
 * In a real app, this would fetch from an API or CMS
 * For now, returns static data but demonstrates SSR pattern
 */
export async function getSpeakers(): Promise<Speaker[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    { 
      initials: 'DS', 
      name: 'Dipa Swaminathan', 
      title: 'IB Psychology Teacher & Counselor', 
      org: 'Birla Public School', 
      topic: 'Adolescence Unveiled', 
      bio: 'Expert in adolescent psychology and student counseling, bringing insights into the complex world of teenage development and mental health.' 
    },
    { 
      initials: 'VD', 
      name: 'Varun Duggirala', 
      title: 'Co-Founder & Chief Content Officer', 
      org: 'The Glitch', 
      topic: 'Unfiltered: Building a Media Platform that Respects Your Intelligence', 
      bio: 'Media innovator revolutionizing content creation and distribution, challenging traditional narratives with authentic storytelling.' 
    },
    { 
      initials: 'AB', 
      name: 'Abhilasha Bahuguna', 
      title: 'EV Battery Innovator', 
      org: '', 
      topic: 'Powering Tomorrow', 
      bio: 'Pioneer in electric vehicle battery technology, driving the future of sustainable transportation and clean energy solutions.' 
    },
    { 
      initials: 'AJ', 
      name: 'Anoushka Jolly', 
      title: 'Founder', 
      org: 'Symbi', 
      topic: 'Breaking Barriers, Building Bridges', 
      bio: 'Social entrepreneur creating innovative solutions to connect communities and break down barriers through technology and empathy.' 
    },
    { 
      initials: 'SK', 
      name: 'Snigdha Kumar', 
      title: 'Student Council President (2023-24)', 
      org: 'DPS Monarch International School', 
      topic: 'A Story of Leadership Beyond Titles', 
      bio: 'Student leader demonstrating that true leadership transcends positions, inspiring peers through authentic action and vision.' 
    },
    { 
      initials: 'SR', 
      name: 'Sudhanshu Ranjan', 
      title: 'Co-Founder', 
      org: 'Bolo Live', 
      topic: 'The Power of Voice in the Digital Age', 
      bio: 'Digital innovator empowering voices through live streaming technology, reshaping how communities connect and communicate.' 
    },
    { 
      initials: 'AS', 
      name: 'Aishani Soni', 
      title: 'Student', 
      org: 'DPS Monarch International School', 
      topic: 'Redefining Ambition: Beyond the Checklist', 
      bio: 'Student advocate challenging conventional definitions of success and ambition, promoting authentic personal growth.' 
    },
    { 
      initials: 'DN', 
      name: 'Dhruv Nair', 
      title: 'Pro Gamer & Streamer', 
      org: '', 
      topic: 'Leveling Up: Lessons from the Gaming World', 
      bio: 'Professional gamer and content creator sharing insights on dedication, strategy, and turning passion into profession.' 
    },
    { 
      initials: 'DK', 
      name: 'Dushyant Vikram Khosla', 
      title: 'Chief AI Scientist', 
      org: '', 
      topic: 'AI and the Future We\'re Building', 
      bio: 'Leading artificial intelligence researcher exploring the ethical implications and transformative potential of AI technology.' 
    },
  ];
}

/**
 * Generate metadata for speakers page (SSR)
 */
export function generateSpeakersMetadata(): Metadata {
  return {
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
}

/**
 * Fetch event details with caching
 */
export async function getEventDetails() {
  return {
    date: 'December 13, 2025',
    time: '3:00 PM - 5:40 PM',
    venue: 'DPS Monarch International School',
    capacity: 100,
    registrationOpen: true,
  };
}

/**
 * Generate structured data for SEO (JSON-LD)
 */
export function generateEventStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'TEDxDPS Monarch Intl School Youth',
    description: 'Ideas worth spreading. Join us for inspiring talks from innovators, change-makers, and visionaries.',
    startDate: '2025-12-13T15:00:00+04:00',
    endDate: '2025-12-13T17:40:00+04:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'DPS Monarch International School',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Doha',
        addressCountry: 'QA',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'TEDxDPS Monarch Intl School Youth',
      url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'QAR',
      availability: 'https://schema.org/InStock',
      url: 'https://13la7e.github.io/TedxDPS-Monarch-Intl-School/apply',
    },
  };
}
