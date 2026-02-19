'use client'

import { useEffect, useRef } from 'react'

/* ─── Scroll Animation Hook ─── */
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

/* ─── Navigation ─── */
function Navigation() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 60) {
          navRef.current.classList.add('bg-[#FDFBF7]/90', 'nav-blur', 'shadow-[0_1px_0_rgba(184,151,106,0.15)]')
          navRef.current.classList.remove('bg-transparent')
        } else {
          navRef.current.classList.remove('bg-[#FDFBF7]/90', 'nav-blur', 'shadow-[0_1px_0_rgba(184,151,106,0.15)]')
          navRef.current.classList.add('bg-transparent')
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Our Story', href: '#story' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-500"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col group">
          <span
            className="text-[22px] tracking-[0.02em] text-[var(--forest)]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            International Jute
          </span>
          <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-muted)] font-medium mt-[-2px]">
            Sustainable Packaging
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] tracking-[0.18em] uppercase text-[var(--earth)] hover:text-[var(--forest)] transition-colors duration-300 font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--gold)] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-4 !py-3 !px-7 text-[11px]">
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => {
            const menu = document.getElementById('mobile-menu')
            menu?.classList.toggle('hidden')
          }}
        >
          <span className="w-6 h-[1.5px] bg-[var(--forest)]" />
          <span className="w-4 h-[1.5px] bg-[var(--forest)]" />
          <span className="w-6 h-[1.5px] bg-[var(--forest)]" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden lg:hidden bg-[var(--cream)] border-t border-[var(--gold)]/20 px-8 py-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block py-3 text-[13px] tracking-[0.15em] uppercase text-[var(--earth)] hover:text-[var(--forest)] font-medium"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

/* ─── Decorative Divider ─── */
function SectionDivider({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div className={`h-[1px] w-12 ${light ? 'bg-[var(--gold-light)]/40' : 'bg-[var(--gold)]/30'}`} />
      <div className={`w-1.5 h-1.5 rotate-45 border ${light ? 'border-[var(--gold-light)]/40' : 'border-[var(--gold)]/40'}`} />
      <div className={`h-[1px] w-12 ${light ? 'bg-[var(--gold-light)]/40' : 'bg-[var(--gold)]/30'}`} />
    </div>
  )
}

/* ─── Section Label ─── */
function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`text-[11px] tracking-[0.35em] uppercase font-medium ${light ? 'text-[var(--gold-light)]' : 'text-[var(--gold-muted)]'}`}>
      {children}
    </span>
  )
}

/* ─── Main Page ─── */
export default function Home() {
  useScrollAnimation()

  return (
    <main>
      <Navigation />

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--forest)] via-[#354030] to-[var(--earth)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8976A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient overlay at bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--cream)] to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 w-full pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-4 mb-8"
              style={{ animation: 'heroReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both' }}
            >
              <div className="h-[1px] w-10 bg-[var(--gold)]" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[var(--gold)] font-medium">
                Est. — Premium Sustainable Packaging
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-[3.5rem] lg:text-[4.2rem] leading-[1.08] text-[var(--ivory)] mb-8 tracking-[-0.01em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                animation: 'heroReveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both',
              }}
            >
              Sustainable Packaging
              <br />
              Solutions that{' '}
              <span className="italic text-[var(--gold-light)]">Elevate</span>
              <br />
              Your Brand
            </h1>

            {/* Subheadline */}
            <p
              className="text-[17px] md:text-[19px] text-[var(--ivory)]/70 leading-[1.7] mb-12 max-w-xl font-light"
              style={{ animation: 'heroReveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both' }}
            >
              From premium custom jute bags to tailored packaging solutions — we help
              businesses amplify visibility, quality, and environmental impact.
            </p>

            {/* CTA */}
            <div
              className="flex flex-wrap gap-5"
              style={{ animation: 'heroReveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both' }}
            >
              <a href="#contact" className="btn-primary !bg-[var(--gold)] !text-[var(--charcoal)] hover:!bg-[var(--gold-light)]">
                Request Your Proposal
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#philosophy" className="btn-outline !border-[var(--ivory)]/25 !text-[var(--ivory)] hover:!bg-[var(--ivory)]/10 hover:!border-[var(--ivory)]/40">
                Discover More
              </a>
            </div>
          </div>

          {/* Decorative side element */}
          <div className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center gap-3">
              <div className="w-[1px] h-16 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]/50 [writing-mode:vertical-rl] rotate-180">
                Scroll to explore
              </span>
              <div className="w-[1px] h-16 bg-[var(--gold)]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          INTRO BLURB
      ════════════════════════════════════════════════ */}
      <section className="section-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-on-scroll">
              <SectionDivider />
            </div>
            <p
              className="animate-on-scroll delay-2 text-[18px] md:text-[22px] leading-[1.8] text-[var(--earth)] mt-8 font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              International Jute is a European packaging partner specializing in high-quality
              custom jute bags and sustainable retail solutions. We combine global manufacturing
              expertise with refined design standards to deliver packaging that strengthens brand
              visibility and reflects responsible values.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PHILOSOPHY / MISSION
      ════════════════════════════════════════════════ */}
      <section id="philosophy" className="section-ivory py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Label & Title */}
            <div className="animate-on-scroll">
              <SectionLabel>Our Mission</SectionLabel>
              <h2
                className="text-4xl md:text-[3.2rem] leading-[1.1] text-[var(--forest)] mt-5 mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Our Philosophy
              </h2>
              <div className="gold-line-wide" />
            </div>

            {/* Right — Copy */}
            <div className="animate-on-scroll delay-2">
              <p className="text-[16px] leading-[1.85] text-[var(--earth)] mb-6">
                At International Jute, we believe packaging should be purposeful, refined, and enduring.
                Our mission is to provide premium-quality packaging solutions that combine sustainability,
                bespoke design, cost efficiency, and long-term brand visibility.
              </p>
              <p className="text-[16px] leading-[1.85] text-[var(--earth)] mb-6">
                Sustainable fibers and responsible production are core to our philosophy, helping brands
                reduce environmental impact while strengthening their market presence.
              </p>
              <p
                className="text-[20px] leading-[1.6] text-[var(--forest)] italic mt-10"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                &ldquo;We deliver products designed not for single use — but for lasting presence.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          VALUES / OUR STANDARDS
      ════════════════════════════════════════════════ */}
      <section className="section-dark py-24 md:py-36 relative overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <div className="animate-on-scroll">
              <SectionLabel light>What We Stand For</SectionLabel>
            </div>
            <h2
              className="animate-on-scroll delay-1 text-4xl md:text-[3.2rem] leading-[1.1] text-[var(--ivory)] mt-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Our Standards
            </h2>
            <div className="animate-on-scroll delay-2 flex justify-center mt-6">
              <div className="gold-line" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 max-w-5xl mx-auto">
            {[
              {
                title: 'Excellence Without Compromise',
                text: 'Superior materials, precise craftsmanship, and meticulous production control. Every detail — from fibre selection to finishing — reflects our commitment to quality.',
                num: '01',
              },
              {
                title: 'Value That Endures',
                text: 'Packaging designed to remain in use long after purchase. Our products extend brand visibility while remaining cost-effective at scale.',
                num: '02',
              },
              {
                title: 'Design with Purpose',
                text: 'Every product elevates brand identity while reinforcing responsible values. Each piece is more than packaging — it is a statement of identity.',
                num: '03',
              },
              {
                title: 'Environmental & Ethical Responsibility',
                text: 'We prioritise natural, biodegradable materials and responsible sourcing practices across every stage of production.',
                num: '04',
              },
            ].map((value, i) => (
              <div
                key={value.num}
                className={`animate-on-scroll delay-${i + 1} group`}
              >
                <div className="flex items-start gap-5">
                  <span className="text-[11px] tracking-[0.2em] text-[var(--gold)]/50 font-medium mt-1 shrink-0">
                    {value.num}
                  </span>
                  <div>
                    <h3 className="text-[18px] text-[var(--ivory)] mb-3 font-medium tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[var(--ivory)]/60 font-light">
                      {value.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PRODUCTS
      ════════════════════════════════════════════════ */}
      <section id="products" className="section-cream py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="text-center mb-8">
            <div className="animate-on-scroll">
              <SectionLabel>What We Offer</SectionLabel>
            </div>
            <h2
              className="animate-on-scroll delay-1 text-4xl md:text-[3.2rem] leading-[1.1] text-[var(--forest)] mt-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Our Products
            </h2>
            <div className="animate-on-scroll delay-2 flex justify-center mt-6 mb-10">
              <div className="gold-line" />
            </div>
            <p className="animate-on-scroll delay-3 text-[16px] leading-[1.8] text-[var(--earth)] max-w-2xl mx-auto">
              We offer a distinct range of sustainable packaging options designed to meet the needs
              of retail, corporate, and promotional applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Premium Custom Jute Bags',
                subtitle: 'Our Signature',
                text: 'Crafted for longevity. Designed for visibility. Our reinforced, reusable jute bags have become trusted retail staples — transforming everyday packaging into lasting brand presence.',
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--gold)" strokeWidth="1">
                    <rect x="8" y="12" width="24" height="22" rx="2" />
                    <path d="M14 12V8a6 6 0 0 1 12 0v4" />
                    <line x1="8" y1="18" x2="32" y2="18" />
                  </svg>
                ),
              },
              {
                title: 'Reusable Retail Packaging',
                subtitle: 'Brand Experience',
                text: 'A range of reusable, brandable bags and packaging formats that enhance customer experience and brand presence.',
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--gold)" strokeWidth="1">
                    <path d="M6 14l14-8 14 8v16l-14 8-14-8V14z" />
                    <path d="M6 14l14 8 14-8" />
                    <path d="M20 22v16" />
                  </svg>
                ),
              },
              {
                title: 'Corporate & Promotional',
                subtitle: 'Tailored Solutions',
                text: 'Tailored packaging for events, corporate gifting, and brand activation with custom design options.',
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--gold)" strokeWidth="1">
                    <circle cx="20" cy="20" r="14" />
                    <path d="M20 10v10l7 7" />
                    <circle cx="20" cy="20" r="2" fill="var(--gold)" />
                  </svg>
                ),
              },
            ].map((product, i) => (
              <div
                key={product.title}
                className={`animate-on-scroll delay-${i + 1} group bg-[var(--ivory)] p-10 md:p-12 border border-[var(--gold)]/10 hover:border-[var(--gold)]/30 transition-all duration-700 relative overflow-hidden`}
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--gold)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />

                <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {product.icon}
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold-muted)] font-medium">
                  {product.subtitle}
                </span>
                <h3
                  className="text-[24px] text-[var(--forest)] mt-2 mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {product.title}
                </h3>
                <p className="text-[15px] leading-[1.8] text-[var(--earth)] font-light">
                  {product.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════════════ */}
      <section id="services" className="section-ivory py-24 md:py-36 border-t border-[var(--gold)]/10">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <div className="animate-on-scroll">
                <SectionLabel>Bespoke Capabilities</SectionLabel>
              </div>
              <h2
                className="animate-on-scroll delay-1 text-4xl md:text-[3.2rem] leading-[1.1] text-[var(--forest)] mt-5 mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Fully Bespoke
                <br />
                Branding &amp; Support
              </h2>
              <div className="animate-on-scroll delay-2 gold-line-wide mb-10" />
              <p className="animate-on-scroll delay-3 text-[16px] leading-[1.85] text-[var(--earth)]">
                We provide comprehensive customization services to ensure your packaging
                aligns with your brand&apos;s vision. International Jute supports every stage
                from concept to final delivery.
              </p>
            </div>

            {/* Right — Service List */}
            <div className="flex flex-col gap-0">
              {[
                { service: 'Logo & Artwork Integration', desc: 'Precise reproduction of your brand identity across all formats' },
                { service: 'Pantone-Matched Colours', desc: 'Exact colour matching for consistent brand representation' },
                { service: 'Format & Size Tailoring', desc: 'Custom dimensions to suit your specific product requirements' },
                { service: 'Material Selection Guidance', desc: 'Strategic advice on fibre and finish for optimal results' },
                { service: 'Pre-Production Support', desc: 'Dedicated assistance through sampling and approval stages' },
              ].map((item, i) => (
                <div
                  key={item.service}
                  className={`animate-on-scroll delay-${i + 1} py-6 border-b border-[var(--gold)]/15 group hover:pl-3 transition-all duration-500`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[var(--gold)] mt-1.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-[16px] text-[var(--forest)] font-medium tracking-wide mb-1">
                        {item.service}
                      </h4>
                      <p className="text-[14px] text-[var(--warm-gray)] font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          QUALITY & SOURCING
      ════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--earth)] to-[var(--forest)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 80px,
              rgba(184,151,106,0.3) 80px,
              rgba(184,151,106,0.3) 81px
            )`,
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-on-scroll">
              <SectionLabel light>Quality & Sourcing</SectionLabel>
            </div>
            <h2
              className="animate-on-scroll delay-1 text-4xl md:text-[3.2rem] leading-[1.1] text-[var(--ivory)] mt-5 mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Manufactured with Precision
            </h2>
            <div className="animate-on-scroll delay-2 flex justify-center mb-10">
              <div className="gold-line" />
            </div>
            <p className="animate-on-scroll delay-3 text-[17px] leading-[1.85] text-[var(--ivory)]/75 font-light mb-6">
              Through partnerships with established manufacturers, we deliver packaging that meets
              exacting quality standards. Our partners use advanced production methods and rigorous
              quality checks, ensuring dependable performance and consistent results.
            </p>
            <p className="animate-on-scroll delay-4 text-[17px] leading-[1.85] text-[var(--ivory)]/75 font-light">
              International Jute oversees every stage — from customization validation to delivery —
              ensuring European service standards at every step.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════════════ */}
      <section className="section-cream py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <div className="animate-on-scroll">
              <SectionLabel>Partnership</SectionLabel>
            </div>
            <h2
              className="animate-on-scroll delay-1 text-4xl md:text-[3.2rem] leading-[1.1] text-[var(--forest)] mt-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Your Strategic Packaging Partner
            </h2>
            <div className="animate-on-scroll delay-2 flex justify-center mt-6 mb-8">
              <div className="gold-line" />
            </div>
            <p className="animate-on-scroll delay-3 text-[16px] leading-[1.8] text-[var(--earth)] max-w-2xl mx-auto">
              We are more than suppliers — we are partners in elevating your brand through
              sustainable, effective packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {[
              { title: 'Strategic Volume Pricing', desc: 'Competitive rates that scale with your business needs' },
              { title: 'Extensive Customisation', desc: 'Limitless options for materials, design, and finishing' },
              { title: 'Global Sourcing, Local Service', desc: 'International reach with dedicated European support' },
              { title: 'Quote to Delivery', desc: 'Professional guidance at every stage of your project' },
            ].map((item, i) => (
              <div key={item.title} className={`animate-on-scroll delay-${i + 1} text-center group`}>
                <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-[var(--gold)]/30 flex items-center justify-center group-hover:bg-[var(--forest)] group-hover:border-[var(--forest)] transition-all duration-500">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--gold)] group-hover:text-[var(--ivory)] transition-colors duration-500" />
                  </svg>
                </div>
                <h4
                  className="text-[18px] text-[var(--forest)] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {item.title}
                </h4>
                <p className="text-[14px] leading-[1.7] text-[var(--warm-gray)] font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          OUR STORY / HISTORY
      ════════════════════════════════════════════════ */}
      <section id="story" className="section-ivory py-24 md:py-36 border-t border-[var(--gold)]/10">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-center">
            {/* Left — Decorative block */}
            <div className="animate-on-scroll relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[var(--forest)] to-[var(--earth)] relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23B8976A' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                  <div className="w-16 h-[1px] bg-[var(--gold)]/40 mb-8" />
                  <span
                    className="text-[var(--ivory)] text-[64px] md:text-[80px] leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    IJ
                  </span>
                  <span className="text-[10px] tracking-[0.5em] uppercase text-[var(--gold)] mt-4 font-medium">
                    International Jute
                  </span>
                  <div className="w-16 h-[1px] bg-[var(--gold)]/40 mt-8" />
                </div>
              </div>
              {/* Offset accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--gold)]/20 -z-10" />
            </div>

            {/* Right — Story */}
            <div>
              <div className="animate-on-scroll">
                <SectionLabel>Our Story</SectionLabel>
              </div>
              <h2
                className="animate-on-scroll delay-1 text-4xl md:text-[3.2rem] leading-[1.1] text-[var(--forest)] mt-5 mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Crafted for Purpose
              </h2>
              <div className="animate-on-scroll delay-2 gold-line-wide mb-10" />
              <p className="animate-on-scroll delay-3 text-[16px] leading-[1.85] text-[var(--earth)] mb-6">
                International Jute was founded with a clear and simple vision: sustainable
                packaging can be both elegant and commercially intelligent.
              </p>
              <p className="animate-on-scroll delay-4 text-[16px] leading-[1.85] text-[var(--earth)] mb-6">
                In response to growing demand for responsible alternatives, we developed a model
                that combines international manufacturing strength with refined European service.
              </p>
              <p className="animate-on-scroll delay-5 text-[16px] leading-[1.85] text-[var(--earth)]">
                We support brands with innovative packaging solutions that balance design,
                durability, and environmental responsibility — and we continue to evolve with
                client needs and sustainability standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CONTACT
      ════════════════════════════════════════════════ */}
      <section id="contact" className="section-dark py-24 md:py-36 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full border border-[var(--gold)]/5 opacity-40" />
        <div className="absolute bottom-10 right-10 w-[200px] h-[200px] rounded-full border border-[var(--gold)]/5 opacity-30" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-on-scroll">
              <SectionLabel light>Get in Touch</SectionLabel>
            </div>
            <h2
              className="animate-on-scroll delay-1 text-4xl md:text-[3.2rem] leading-[1.1] text-[var(--ivory)] mt-5 mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Let&apos;s Discuss Your
              <br />
              Packaging Solution
            </h2>
            <div className="animate-on-scroll delay-2 flex justify-center mb-10">
              <div className="gold-line" />
            </div>
            <p className="animate-on-scroll delay-3 text-[17px] leading-[1.8] text-[var(--ivory)]/65 font-light mb-14">
              We would be delighted to discuss your project and provide you with a tailored proposal.
            </p>

            {/* Contact Details */}
            <div className="animate-on-scroll delay-4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              <div className="group">
                <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold)]/60 mb-3 font-medium">
                  Email
                </div>
                <a
                  href="mailto:info@internationaljute.co.uk"
                  className="text-[16px] text-[var(--ivory)]/80 hover:text-[var(--gold)] transition-colors duration-300 font-light"
                >
                  info@internationaljute.co.uk
                </a>
              </div>
              <div className="group">
                <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold)]/60 mb-3 font-medium">
                  France
                </div>
                <a
                  href="tel:+33664639962"
                  className="text-[16px] text-[var(--ivory)]/80 hover:text-[var(--gold)] transition-colors duration-300 font-light"
                >
                  +33 6 64 63 99 62
                </a>
              </div>
              <div className="group">
                <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold)]/60 mb-3 font-medium">
                  United Kingdom
                </div>
                <a
                  href="tel:+447476889555"
                  className="text-[16px] text-[var(--ivory)]/80 hover:text-[var(--gold)] transition-colors duration-300 font-light"
                >
                  +44 7476 889 555
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="animate-on-scroll delay-5">
              <a
                href="mailto:info@internationaljute.co.uk?subject=Packaging%20Consultation%20Request"
                className="btn-primary !bg-[var(--gold)] !text-[var(--charcoal)] hover:!bg-[var(--gold-light)] inline-flex"
              >
                Request a Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════ */}
      <footer className="section-deep py-16 border-t border-[var(--ivory)]/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <span
                className="text-[20px] tracking-[0.02em] text-[var(--ivory)]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                International Jute
              </span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-[var(--gold-muted)] font-medium mt-1">
                Premium Sustainable Packaging
              </span>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-8">
              {['Philosophy', 'Products', 'Services', 'Our Story', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item === 'Our Story' ? 'story' : item.toLowerCase()}`}
                  className="text-[11px] tracking-[0.18em] uppercase text-[var(--ivory)]/40 hover:text-[var(--gold)] transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Domains */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="text-[11px] text-[var(--ivory)]/25 font-light">
                internationaljute.org
              </span>
              <span className="text-[11px] text-[var(--ivory)]/25 font-light">
                internationaljute.co.uk
              </span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--ivory)]/5 text-center">
            <p className="text-[11px] text-[var(--ivory)]/20 font-light tracking-wide">
              &copy; {new Date().getFullYear()} International Jute. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
