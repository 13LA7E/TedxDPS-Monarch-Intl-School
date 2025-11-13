import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer center">
      <div className="container">
        <p>This independent TEDx event is operated under license from TED.<br />© 2025 TEDxDPS Monarch Intl School Youth</p>
        <p style={{marginTop: '15px'}}>
          <Link href="/team" style={{color: 'var(--vibrant-orange)', textDecoration: 'none', fontSize: '0.9rem'}}>Meet Our Team</Link>
          {' • '}
          <Link href="/faq" style={{color: 'var(--vibrant-orange)', textDecoration: 'none', fontSize: '0.9rem'}}>FAQ</Link>
        </p>
      </div>
    </footer>
  )
}
