'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function ApplyFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [statusColor, setStatusColor] = useState('');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzVEhtWAYVGelVPn3bET_b0sANHD4Q_fBVtvJdptAZzQeBbXTkcjwJyOihH8IrG4hpZ/exec';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add timestamp
    formData.set('Timestamp', new Date().toLocaleString());
    
    setIsSubmitting(true);
    setSubmitStatus('Submitting your registration...');
    setStatusColor('var(--light-blue)');

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('Registration successful! Confirmation email sent to your inbox.');
        setStatusColor('#10b981');
        form.reset();
        
        setTimeout(() => {
          setSubmitStatus('* Required fields. Registration confirmation will be sent to your email.');
          setStatusColor('');
        }, 5000);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error!', error);
      setSubmitStatus('❌ Error submitting form. Please try again or contact us directly.');
      setStatusColor('var(--primary-red)');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Urgency & Social Proof Banner */}
      <div style={{
        marginBottom: '40px',
        padding: '20px 30px',
        background: 'linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(226,49,49,0.15) 100%)',
        borderRadius: '15px',
        border: '2px solid rgba(255,107,53,0.3)',
        textAlign: 'center'
      }}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', flexWrap: 'wrap'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <span style={{fontSize: '2rem'}}>🔥</span>
            <div style={{textAlign: 'left'}}>
              <div style={{fontSize: '1.4rem', fontWeight: 900, color: 'var(--vibrant-orange)'}}>Limited Seats</div>
              <div style={{fontSize: '0.9rem', color: 'var(--light-blue)'}}>Only 100 spots available</div>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <span style={{fontSize: '2rem'}}>⏰</span>
            <div style={{textAlign: 'left'}}>
              <div style={{fontSize: '1.4rem', fontWeight: 900, color: 'var(--vibrant-orange)'}}>December 13</div>
              <div style={{fontSize: '0.9rem', color: 'var(--light-blue)'}}>Mark your calendar</div>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <span style={{fontSize: '2rem'}}>✨</span>
            <div style={{textAlign: 'left'}}>
              <div style={{fontSize: '1.4rem', fontWeight: 900, color: 'var(--vibrant-orange)'}}>Free Entry</div>
              <div style={{fontSize: '0.9rem', color: 'var(--light-blue)'}}>Registration required</div>
            </div>
          </div>
        </div>
      </div>

      <p style={{color: 'var(--light-blue)', marginBottom: '48px', fontSize: '1.05rem', lineHeight: '1.8'}}>
        Join us for an unforgettable experience of thought-provoking talks, bold ideas, and revolutionary perspectives. Witness young voices that dare to <strong style={{color: 'var(--primary-red)'}}>defy</strong> and <em style={{fontFamily: "'Playfair Display', serif", color: 'var(--vibrant-orange)'}}>define</em>.
      </p>

      {/* What You'll Experience Section */}
      <div style={{marginBottom: '60px', padding: '50px 40px', background: 'var(--dark-gray)', borderRadius: '20px'}}>
        <h2 style={{textAlign: 'center', marginBottom: '40px', fontSize: '2.2rem', color: 'white'}}>
          What You'll Experience
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '35px'}}>
          <div className="fade-in-up" style={{textAlign: 'center'}}>
            <h3 style={{color: 'var(--vibrant-orange)', marginBottom: '12px', fontSize: '1.3rem'}}>Inspiring Talks</h3>
            <p style={{color: 'var(--light-blue)', lineHeight: '1.7'}}>
              8+ carefully curated speakers sharing ideas that challenge the status quo and spark meaningful conversations.
            </p>
          </div>
          <div className="fade-in-up" style={{textAlign: 'center', animationDelay: '0.1s'}}>
            <h3 style={{color: 'var(--vibrant-orange)', marginBottom: '12px', fontSize: '1.3rem'}}>Memorable Moments</h3>
            <p style={{color: 'var(--light-blue)', lineHeight: '1.7'}}>
              Be part of an event that will be captured, shared, and remembered as a catalyst for change.
            </p>
          </div>
          <div className="fade-in-up" style={{textAlign: 'center', animationDelay: '0.2s'}}>
            <h3 style={{color: 'var(--vibrant-orange)', marginBottom: '12px', fontSize: '1.3rem'}}>Fresh Perspectives</h3>
            <p style={{color: 'var(--light-blue)', lineHeight: '1.7'}}>
              Gain new insights on education, technology, innovation, and what it means to define your own path.
            </p>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '600px', margin: '0 auto'}}>
        <form id="applyForm" name="registrationForm" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
          <div className="form-row">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="Name" required />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="Email" required />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="Phone" 
              placeholder="+974 XXXXXXXX" 
              pattern="[\+]?[0-9\s\-]+" 
              title="Please enter a valid phone number" 
            />
          </div>

          <div className="form-row">
            <label htmlFor="affiliation">Affiliation *</label>
            <select id="affiliation" name="Affiliation" required>
              <option value="">Select...</option>
              <option value="DPS Monarch Student">DPS Monarch Student</option>
              <option value="Parent/Guardian">Parent/Guardian</option>
              <option value="Teacher/Staff">Teacher/Staff</option>
              <option value="Guest/Other">Guest/Other</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="guests">Number of Attendees *</label>
            <input type="number" id="guests" name="Attendees" min="1" max="5" defaultValue="1" required />
          </div>

          <input type="hidden" name="Timestamp" id="timestamp" />

          <button 
            type="submit" 
            className="btn cta" 
            style={{marginTop: '10px'}}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Register Now'}
          </button>
          <small style={{marginTop: '12px', color: statusColor || 'inherit'}} id="formStatus">
            {submitStatus || '* Required fields. Registration confirmation will be sent to your email.'}
          </small>
        </form>

        <div style={{
          marginTop: '64px',
          padding: '28px',
          background: 'rgba(230, 43, 30, 0.1)',
          borderLeft: '4px solid var(--vibrant-orange)'
        }}>
          <h3 style={{
            color: 'var(--vibrant-orange)',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            marginBottom: '16px'
          }}>
            Event Information
          </h3>
          <ul style={{color: 'var(--white)', lineHeight: 2, listStyle: 'none', padding: 0}}>
            <li><strong>Date:</strong> December 13, 2025</li>
            <li><strong>Venue:</strong> DPS Monarch International School</li>
            <li><strong>Time:</strong> TBA</li>
            <li><strong>Entry:</strong> Free (Registration Required)</li>
            <li><strong>Capacity:</strong> 100 Seats</li>
          </ul>
          <p style={{color: 'var(--light-blue)', marginTop: '20px', fontSize: '0.95rem'}}>
            Note: Our speakers have already been selected. This registration is for event attendance only.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{
        maxWidth: '800px',
        margin: '80px auto 0',
        padding: '50px 40px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h2 style={{textAlign: 'center', marginBottom: '40px', fontSize: '2.2rem'}}>
          Frequently Asked Questions
        </h2>
        
        {[
          {
            question: 'Do I need a ticket to attend?',
                answer: 'No physical ticket is required. Once you register, you&apos;ll receive a confirmation email. Simply present this confirmation (digital or printed) at the venue for entry.'
          },
          {
            question: 'Is there an age limit?',
            answer: 'While this is a youth-focused event, we welcome attendees of all ages. Students, parents, educators, and community members are all encouraged to attend.'
          },
          {
            question: 'Can I register multiple people?',
            answer: 'Yes! You can register up to 5 attendees in a single registration. Each person will be covered under the same confirmation.'
          },
          {
            question: 'What should I bring on the day?',
            answer: 'Bring your registration confirmation, an open mind, and your curiosity! We recommend arriving 15-30 minutes early for check-in.'
          },
          {
            question: 'Will the talks be recorded?',
            answer: 'Yes! All talks will be professionally recorded and shared after the event, allowing the ideas to reach an even wider audience.'
          },
          {
            question: 'Can I apply to be a speaker?',
            answer: 'Our speaker lineup for December 13, 2025 has been finalized. However, stay connected with us for future opportunities to share your ideas on the TEDx stage.'
          },
          {
            question: 'What if I need to cancel my registration?',
            answer: 'If you can\'t make it, please email us at tedxyouthdpsmonarchintlschool@gmail.com so we can open your seat for someone on the waitlist. We appreciate your consideration!'
          }
        ].map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
