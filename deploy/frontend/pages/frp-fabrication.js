import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCheck } from 'react-icons/fa6';

export default function FrpFabrication() {
  const router = useRouter();
  function goToFacilities() {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById('facilities');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }
  return (
    <>
      <Head>
        <title>FRP Fabrication — System Dies & Mould | Karachi</title>
        <meta name="description" content="Advanced FRP fabrication using cold moulding, wood & metal encapsulation, and hydraulic press finishing for durable composite components." />
        <meta name="keywords" content="FRP fabrication Karachi, fiberglass reinforced plastic manufacturer, cold moulding Pakistan, composite fabrication, FRP components manufacturer, hydraulic press finishing, fiberglass fabrication Karachi" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '420px', display: 'flex', alignItems: 'flex-end', padding: '120px 5% 64px', backgroundImage: 'url(/frp.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,42,94,0.88) 0%, rgba(30,144,255,0.55) 60%, rgba(15,42,94,0.75) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <button onClick={goToFacilities} className="dies-back"> Back to Facilities</button>
          <div className="section-tag" style={{ marginTop: '0' }}>FRP Fabrication</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '2px', color: '#fff', margin: '12px 0 20px' }}>Advanced Composite Manufacturing</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '560px' }}>Specializing in FRP fabrication using cold moulding, encapsulation, and hydraulic press finishing for durable, lightweight, high-strength composite components.</p>
        </div>
      </div>

      <div className="dies-page">

        {/* Intro */}
        <section className="dies-intro">
          <div className="dies-intro-grid">
            <div>
              <h2>Advanced Composite Manufacturing</h2>
              <p>Our facility specializes in FRP fabrication using advanced cold moulding processes, wood and metal sheet encapsulation, and hydraulic press finishing techniques.</p>
              <p style={{ marginTop: '0' }}>We manufacture durable, lightweight, and high-strength composite components for a wide range of industrial and commercial applications.</p>
              <p style={{ marginTop: '0' }}>From structural panels to custom enclosures, our composite shop delivers precision-crafted FRP parts with consistent quality and finish on every run.</p>
            </div>
            <div className="dies-intro-img">
              <img src="/frp.jpeg" alt="FRP Composite Fabrication" />
            </div>
          </div>
        </section>

        {/* Processes */}
        <section className="dies-capabilities">
          <div className="section-tag" style={{ textAlign: 'center' }}>Manufacturing Methods</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Fabrication<br />Processes</h2>
          <div className="inj-features-grid" style={{ marginTop: '56px' }}>
            {[
              { num: '01', title: 'Cold Moulding Process', desc: 'Room-temperature curing of fiberglass reinforced resin in precision moulds for consistent wall thickness, structural strength, and accurate dimensional output.' },
              { num: '02', title: 'Wood & Metal Sheet Encapsulation', desc: 'Integration of wood and metal reinforcements within FRP laminates to produce hybrid composite panels with enhanced rigidity and load-bearing capability.' },
              { num: '03', title: 'Hydraulic Press Finishing', desc: 'High-pressure hydraulic pressing ensures tight tolerances, smooth surface finishes, and uniform density across composite components for premium quality output.' },
            ].map((p) => (
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
            {[
              { title: 'Structural Panels', items: ['Roofing & cladding panels', 'Partition & wall panels', 'Floor & deck panels', 'Load-bearing composite structures'] },
              { title: 'Industrial Components', items: ['Chemical-resistant tanks & vessels', 'Ducting & ventilation systems', 'Machine guards & enclosures', 'Custom industrial profiles'] },
              { title: 'Automotive & Transport', items: ['Body panels & fairings', 'Engine hoods & canopies', 'Interior trim components', 'Structural brackets & supports'] },
              { title: 'Custom Fabrications', items: ['Ultra-thin fiber parts (1mm)', 'Pigmented FRP components', 'Fiber checking templates', 'Bespoke composite shapes'] },
            ].map((prod) => (
              <div key={prod.title} className="dies-card">
                <div className="dies-card-header"><h3 style={{ fontSize: '1.1rem' }}>{prod.title}</h3></div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {prod.items.map((item) => (
                    <li key={item} style={{ fontSize: '0.9rem', color: 'var(--text-mid)', padding: '7px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>—</span>{item}
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
            <h2>Durable, Lightweight, Precision-Built</h2>
            <p>Every composite component undergoes thorough inspection ensuring dimensional accuracy, structural integrity, and consistent surface quality before delivery.</p>
            <div className="dies-quality-grid">
              {['Dimensional inspection on every part', 'Wall thickness uniformity checks', 'Surface finish & visual audit', 'Structural strength verification', 'Full documentation & traceability'].map((item) => (
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
                <li>Automotive & transport</li>
                <li>Construction & infrastructure</li>
                <li>Chemical & industrial</li>
                <li>Agriculture & irrigation</li>
                <li>Marine & offshore</li>
                <li>Consumer & commercial products</li>
              </ul>
            </div>
            <div className="dies-why">
              <h3>Why Choose System Dies & Mould</h3>
              <ul>
                <li>Advanced cold moulding capability</li>
                <li>Metal & wood encapsulation expertise</li>
                <li>Ultra-thin fiber parts down to 1mm</li>
                <li>Hydraulic press precision finishing</li>
                <li>Pigmented & custom-finish components</li>
                <li>Reliable quality & competitive pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dies-cta">
          <h2>Have an FRP Fabrication Requirement?</h2>
          <p>Share your drawings or specifications — our team will review and respond with a competitive quotation within 24 hours.</p>
          <Link href="/#contact" style={{ display: 'inline-block', background: 'var(--navy)', color: '#fff', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Request a Quote →
          </Link>
        </section>

      </div>
      <Footer />
    </>
  );
}
