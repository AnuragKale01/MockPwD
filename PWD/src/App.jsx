import { useState } from 'react'
import mudraLogo from './assets/mudraLogo.svg'
import pwdLogo from './assets/pwdLogo.svg'
import satyamevjayteLogo from './assets/satyamevjayteLogo.svg'
import juniorClerkResult from './assets/Junior_Clerk_PWD_Mock_Result.pdf'
import './App.css'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About Department', href: '#', hasDropdown: true },
  { label: 'Directory', href: '#', hasDropdown: true },
  { label: "Citizen's Corner", href: '#', hasDropdown: true },
  { label: 'Services', href: '#' },
  { label: 'Employee Corner', href: '#', hasDropdown: true },
  { label: 'RTI', href: '#', hasDropdown: true },
  { label: 'RTS', href: '#' },
  { label: 'Notices', href: '#', hasDropdown: true },
]

const heroImages = [
  { src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=300&h=120&fit=crop', alt: 'Bridge infrastructure' },
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=300&h=120&fit=crop', alt: 'Modern building' },
  { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=300&h=120&fit=crop', alt: 'Architecture' },
  { src: 'https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?w=300&h=120&fit=crop', alt: 'Temple structure' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=120&fit=crop', alt: 'Road highway' },
  { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=120&fit=crop', alt: 'City bridge' },
]

const notices = [
  { label: 'PWD Junior Clerk Result 2026', href: juniorClerkResult, download: 'PWD_Junior_Clerk_Result_2026.pdf' },
  { label: 'Recruitment Notice: Junior Engineer Posts — Apply before 31 Jan 2025', href: '#' },
  { label: 'Public Notice: Road widening work on Mumbai-Pune Expressway from 01 Feb 2025', href: '#' },
  { label: 'Circular: Revised rates for PWD Schedule of Rates 2024-25', href: '#' },
  { label: 'Notice: Annual Maintenance Contract for government buildings — Bids invited', href: '#' },
]

const quickLinks = [
  'Tender Notices',
  'Schedule of Rates',
  'RTI Application',
  'Citizen Charter',
  'Annual Reports',
  'Download Forms',
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="pwd-root">
      {/* ── Top Government Bar ── */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <img src={satyamevjayteLogo} alt="Satyamev Jayate" className="top-bar-emblem" />
            <span className="top-bar-marathi">महाराष्ट्र शासन</span>
            <span className="top-bar-divider">|</span>
            <span className="top-bar-en">GOVERNMENT OF MAHARASHTRA</span>
          </div>
          <div className="top-bar-right">
            <button className="top-bar-btn" aria-label="Marathi language">अ</button>
            <button className="top-bar-btn" aria-label="English language">A</button>
            <button className="top-bar-btn top-bar-btn--large" aria-label="Increase font size">A</button>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className="main-header">
        <div className="main-header-inner">
          {/* Left: Mudra Logo + Dept Name */}
          <div className="header-brand">
            <img src={mudraLogo} alt="Maharashtra Seal" className="brand-seal" />
            <div className="brand-text">
              <span className="brand-marathi">सार्वजनिक बांधकाम विभाग</span>
              <span className="brand-en">Public Works Department</span>
              <span className="brand-sub">महाराष्ट्र शासन</span>
            </div>
          </div>

          {/* Center: Search */}
          <div className="header-search">
            <form
              className="search-form"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                aria-label="Search website"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn" aria-label="Submit search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right: PWD Logo */}
          <div className="header-logos">
            <img src={pwdLogo} alt="PWD Logo" className="header-pwd-logo" />
          </div>
        </div>
      </header>

      {/* ── Navigation ── */}
      <nav className="main-nav" aria-label="Primary navigation">
        <div className="main-nav-inner">
          <ul className="nav-list" role="list">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="nav-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nav-hamburger"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Hero Image Strip ── */}
      <div className="hero-strip" aria-label="Featured infrastructure images">
        {heroImages.map((img, i) => (
          <div key={i} className="hero-strip-item">
            <img src={img.src} alt={img.alt} loading={i > 1 ? 'lazy' : 'eager'} />
          </div>
        ))}
      </div>

      {/* ── Breadcrumb + Social ── */}
      <div className="breadcrumb-bar">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li><a href="#">Home</a></li>
            <li aria-hidden="true">›</li>
            <li><a href="#">Past Notices</a></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Announcements-general</li>
          </ol>
        </nav>
        <div className="social-links">
          <a href="#" aria-label="Facebook" className="social-link">f</a>
          <a href="#" aria-label="X (Twitter)" className="social-link">𝕏</a>
          <a href="#" aria-label="LinkedIn" className="social-link">in</a>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="content-area">
        {/* Notices Column */}
        <section className="notices-section" aria-labelledby="notices-heading">
          <h2 id="notices-heading" className="section-heading">Latest Notices</h2>
          <div className="notice-ticker">
            <span className="ticker-label">NEW</span>
            <div className="ticker-track" aria-live="polite">
              <ul className="ticker-list">
                {notices.map((n, i) => (
                  <li key={i} className="ticker-item">
                    <a href={n.href} download={n.download || undefined}>{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="notice-list">
            {notices.map((n, i) => (
              <li key={i} className="notice-item">
                <span className="notice-bullet" aria-hidden="true">▶</span>
                <a
                  href={n.href}
                  className="notice-link"
                  target={n.href !== '#' ? '_blank' : undefined}
                  rel={n.href !== '#' ? 'noreferrer' : undefined}
                >
                  {n.label}
                  {n.download && (
                    <span className="notice-doc-badge" aria-label="PDF document">📄</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Quick Links Column */}
        <aside className="quick-links-section" aria-labelledby="quicklinks-heading">
          <h2 id="quicklinks-heading" className="section-heading">Quick Links</h2>
          <ul className="quick-links-list">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="quick-link">
                  <span className="quick-link-icon" aria-hidden="true">→</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Public Works Department, Government of Maharashtra. All rights reserved.</p>
        <p className="footer-sub">Website designed and developed by NIC Maharashtra</p>
      </footer>
    </div>
  )
}
