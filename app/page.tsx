import Link from 'next/link'
import CountdownTimer from '@/components/CountdownTimer'

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div>
          <p className="eyebrow">TEDxDPS Monarch Intl School Youth</p>
          <h1>
            <span className="defy">DEFY</span> 
            <span className="define">to Define</span>
          </h1>
          <p className="hero-tagline">
            Break the mold. Challenge conventions. Rewrite the rules.<br/>
            This is where ideas rebel against the ordinary.
          </p>
          
          <CountdownTimer />

          <div className="manifesto">
            <p><strong>DEFY</strong> expectations</p>
            <p><strong>DEFY</strong> limitations</p>
            <p><strong>DEFY</strong> boundaries</p>
            <p style={{marginTop:'16px', color:'var(--vibrant-orange)', fontSize:'1.2rem', fontWeight:700}}>
              Then <em style={{fontFamily:'Playfair Display,serif'}}>define</em> your own path.
            </p>
          </div>
          
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'15px'}}>
            <Link href="/apply" className="cta cta-pulse">Register to Attend</Link>
            <div className="social-proof">
              <span className="social-proof-text">Limited to 100 seats - Register now!</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why Defy?</h2>
        <div className="grid">
          <div className="card">
            <h3>💥 Break Barriers</h3>
            <p>Challenge the status quo. Question everything. Your voice has the power to shatter limitations and inspire change.</p>
          </div>
          <div className="card">
            <h3>⚡ Ignite Change</h3>
            <p>Ideas that defy convention spark revolutions. Be the catalyst that transforms perspectives and drives action.</p>
          </div>
          <div className="card">
            <h3>🚀 Define Tomorrow</h3>
            <p>After defying the old rules, you get to write new ones. Shape the future on your own terms.</p>
          </div>
        </div>
      </section>

      <section className="section center">
        <h2 style={{display:'block', width:'100%'}}>Event Details</h2>
        <p style={{color:'var(--light-blue)', margin:'32px 0', fontSize:'1.15rem', lineHeight:2}}>
          Date: December 13, 2025<br/>
          Location: DPS Monarch International School
        </p>
        <Link href="/contact" className="cta">Get Updates</Link>
      </section>
    </div>
  )
}
