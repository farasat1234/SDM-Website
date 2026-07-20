import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCheck } from 'react-icons/fa6';

const processes = [
  { num: '01', title: 'Hand Lay-Up', desc: 'Manual application of fiberglass layers with resin for producing large, complex shapes such as tanks, vessels, hoods, and canopies with excellent structural integrity.' },
  { num: '02', title: 'Spray-Up', desc: 'Chopped fiberglass and resin sprayed onto mould surfaces for efficient production of medium-complexity components with consistent wall thickness.' },
  { num: '03', title: 'Resin Transfer Moulding (RTM)', desc: 'Closed-mould process injecting resin into dry fibre preforms under pressure delivering superior surface finish on both sides and tighter dimensional control.' },
];

const products = [
  { title: 'Storage & Process Vessels', items: ['Chemical storage tanks', 'Water and effluent tanks', 'Industrial process vessels', 'Pressure vessels & liners'] },
  { title: 'Automotive & Transport', items: ['Engine hoods & bonnets', 'Body panels & canopies', 'Bus & truck body components', 'Structural brackets & fairings'] },
  { title: 'Ducting & Infrastructure', items: ['Ventilation ducts & plenums', 'Cable trays & trunkings', 'Cooling tower components', 'Architectural cladding panels'] },
  { title: 'Custom Profiles & Enclosures', items: ['Electrical enclosures & housings', 'Custom-shaped profiles', 'Marine & offshore components', 'Specialty industrial parts'] },
];

export default function FrpGrpFabrication() {
  return (
    <>
      <Head>
        <title>FRP / GRP Fabrication - System Dies &amp; Mould | Karachi</title>
        <meta name="description" content="Fiberglass reinforced plastic components — tanks, vessels, hoods, canopies, ducts, and custom profiles using hand lay-up, spray-up and could moulding." />
        <meta name="keywords" content="FRP GRP fabrication Karachi, fiberglass tanks and vessels, GRP ducts manufacturer, hand lay-up fabrication, spray-up composite manufacturing, FRP canopy manufacturer Pakistan, composite tank manufacturer" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      {/* Hero */}
      <div className="frp-hero">
        <div className="frp-hero-overlay" />
        <div className="frp-hero-content">
          <Link href="/#services" className="dies-back"> Back to Services</Link>
          <div className="section-tag" style={{ marginTop: '0' }}>Composite Solutions</div>
          <h1>FRP / GRP Fabrication</h1>
          <p>Fiberglass reinforced plastic components — tanks, vessels, hoods, canopies, ducts, and custom profiles using hand lay-up, spray-up and could moulding.</p>
        </div>
      </div>

      <div className="dies-page">

        {/* Intro */}
        <section className="dies-intro">
          <div className="dies-intro-grid">
            <div>
              <h2>Advanced Composite Fabrication</h2>
              <p>System Dies &amp; Mould operates a dedicated FRP / GRP fabrication shop delivering high-quality fiberglass reinforced plastic components for industrial, automotive, infrastructure, and marine applications.</p>
              <p style={{ marginTop: '0' }}>Our in-house composite team combines skilled craftsmanship with proven manufacturing processes hand lay-up, spray-up, and resin transfer moulding to produce components that are lightweight, corrosion-resistant, and structurally strong.</p>
              <p style={{ marginTop: '0' }}>From one-off custom prototypes to high-volume production runs, we deliver consistent quality with full dimensional inspection on every component.</p>
            </div>
            <div className="dies-intro-img">
              <img src="/frp.jpeg" alt="FRP GRP fiberglass fabrication" />
            </div>
          </div>
        </section>

        {/* Manufacturing Processes */}
        <section className="dies-capabilities">
          <div className="section-tag" style={{ textAlign: 'center' }}>How We Work</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Manufacturing<br />Processes</h2>
          <div className="inj-features-grid" style={{ marginTop: '56px' }}>
            {processes.map((p) => (
              <div key={p.num} className="inj-feature-card">
                <span className="inj-feature-num">{p.num}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section style={{ padding: '80px 5%', background: 'var(--white)' }}>
          <div className="section-tag" style={{ textAlign: 'center' }}>Product Range</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Components<br />We Fabricate</h2>
          <div className="dies-cards" style={{ marginTop: '56px' }}>
            {products.map((prod) => (
              <div key={prod.title} className="dies-card">
                <div className="dies-card-header">
                  <h3 style={{ fontSize: '1.1rem' }}>{prod.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {prod.items.map((item) => (
                    <li key={item} style={{ fontSize: '0.9rem', color: 'var(--text-mid)', padding: '7px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>-</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quality */}
        <section className="dies-quality">
          <div className="dies-quality-inner">
            <div className="section-tag">Quality Assurance</div>
            <h2>Built to Last, Tested to Perform</h2>
            <p>Every FRP / GRP component we produce goes through a structured quality process to ensure it meets dimensional, structural, and finish specifications before leaving our facility.</p>
            <div className="dies-quality-grid">
              {['Dimensional inspection on every part', 'Wall thickness uniformity checks', 'Visual & surface finish audit', 'Structural integrity verification', 'Full documentation & traceability'].map((item) => (
                <div key={item} className="dies-quality-item">
                  <span className="dies-check"><FaCheck /></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries + Why */}
        <section className="dies-bottom">
          <div className="dies-bottom-grid">
            <div className="dies-industries">
              <h3>Industries We Serve</h3>
              <ul>
                <li>Chemical &amp; process industries</li>
                <li>Automotive &amp; transport</li>
                <li>Water &amp; wastewater treatment</li>
                <li>Construction &amp; infrastructure</li>
                <li>Marine &amp; offshore</li>
                <li>Electrical &amp; telecommunications</li>
              </ul>
            </div>
            <div className="dies-why">
              <h3>Why Choose System Dies &amp; Mould</h3>
              <ul>
                <li>Dedicated in-house FRP fabrication shop</li>
                <li>Multiple process capabilities under one roof</li>
                <li>Corrosion-resistant, lightweight solutions</li>
                <li>Custom mould design &amp; tooling support</li>
                <li>Consistent quality with full inspection</li>
                <li>Competitive pricing &amp; reliable delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dies-cta">
          <h2>Have a Composite Fabrication Requirement?</h2>
          <p>Share your drawings or specifications - our team will review and respond with a competitive quotation within 24 hours.</p>
          <Link href="/#contact" style={{ display: 'inline-block', background: 'var(--navy)', color: '#fff', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Request a Quote &rarr;
          </Link>
        </section>

      </div>
      <Footer />
    </>
  );
}
