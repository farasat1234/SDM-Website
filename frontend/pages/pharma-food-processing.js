import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCheck } from 'react-icons/fa6';

export default function PharmaFoodProcessing() {
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
        <title>Pharma & Food Processing — System Dies & Mould | Karachi</title>
        <meta name="description" content="Cleanroom-grade manufacturing environment for pharmaceutical and food industry production with contamination-controlled processes and strict quality protocols." />
        <meta name="keywords" content="pharma manufacturing Karachi, food processing equipment Pakistan, cleanroom manufacturing, pharma-grade fabrication, contamination-controlled production, pharmaceutical doors and panels Karachi" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '420px', display: 'flex', alignItems: 'flex-end', padding: '120px 5% 64px', backgroundImage: 'url(/injection-mould.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,42,94,0.88) 0%, rgba(30,144,255,0.55) 60%, rgba(15,42,94,0.75) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <button onClick={goToFacilities} className="dies-back"> Back to Facilities</button>
          <div className="section-tag" style={{ marginTop: '0' }}>Pharma &amp; Food Processing</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '2px', color: '#fff', margin: '12px 0 20px' }}>Cleanroom-Grade Manufacturing Environment</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '560px' }}>Dedicated hygienic processing facility meeting pharmaceutical and food industry standards — contamination-controlled, compliant, and precision-focused.</p>
        </div>
      </div>

      <div className="dies-page">

        {/* Intro */}
        <section className="dies-intro">
          <div className="dies-intro-grid">
            <div>
              <h2>Cleanroom-Grade Manufacturing Environment</h2>
              <p>Our dedicated hygienic processing area is designed to meet pharmaceutical and food industry standards with contamination-controlled environments and strict quality protocols.</p>
              <p style={{ marginTop: '0' }}>Equipped with stainless-compatible tooling and rigorous contamination-prevention procedures, the facility ensures safe, compliant, and high-quality production for sensitive applications.</p>
              <p style={{ marginTop: '0' }}>From pharma-grade plastic components to food-safe containers and packaging, our cleanroom facility delivers the precision and hygiene that regulated industries demand.</p>
            </div>
            <div className="dies-intro-img">
              <img src="/injection-mould.jpg" alt="Pharma Food Processing Facility" />
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="dies-capabilities">
          <div className="section-tag" style={{ textAlign: 'center' }}>Facility Standards</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Compliance &amp;<br />Hygiene Controls</h2>
          <div className="inj-features-grid" style={{ marginTop: '56px' }}>
            {[
              { num: '01', title: 'Contamination-Controlled Environment', desc: 'Dedicated production zone with controlled air quality, restricted access, and regular sanitization protocols to prevent contamination during manufacturing.' },
              { num: '02', title: 'Stainless-Compatible Tooling', desc: 'All tooling, moulds, and fixtures used in the pharma and food processing area are compatible with stainless-grade requirements and food-safe material standards.' },
              { num: '03', title: 'Strict Quality & Compliance Protocols', desc: 'Rigorous in-process quality checks, documentation, and traceability systems ensuring every component meets regulatory and industry compliance requirements.' },
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
          <h2 className="section-title" style={{ textAlign: 'center' }}>Components<br />We Produce</h2>
          <div className="dies-cards" style={{ marginTop: '56px' }}>
            {[
              { title: 'Pharmaceutical Components', items: ['Medicine bottles & containers', 'Tablet & capsule packaging', 'Surgical & medical device parts', 'Sterile plastic enclosures'] },
              { title: 'Food-Grade Products', items: ['Food storage containers', 'Packaging & dispensing components', 'Food-safe bottles & closures', 'Processing equipment parts'] },
              { title: 'Hygiene & Safety Products', items: ['Sanitization equipment parts', 'PPE components & housings', 'Laboratory containers & trays', 'Clean-room consumables'] },
              { title: 'Custom Regulated Components', items: ['ISO-compliant plastic parts', 'Traceability-documented batches', 'Custom cleanroom moulds', 'Validated production runs'] },
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
            <h2>Safe, Compliant, Precision-Built</h2>
            <p>Our pharma and food processing facility operates under strict quality management to ensure every component is safe, compliant, and consistently produced to specification.</p>
            <div className="dies-quality-grid">
              {['Contamination-controlled production', 'Stainless-compatible tooling verified', 'In-process quality checks', 'Full batch documentation & traceability', 'Regulatory compliance assurance'].map((item) => (
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
                <li>Pharmaceutical & medical</li>
                <li>Food & beverage processing</li>
                <li>Cosmetics & personal care</li>
                <li>Laboratory & diagnostics</li>
                <li>Hygiene & sanitation</li>
                <li>Regulated consumer products</li>
              </ul>
            </div>
            <div className="dies-why">
              <h3>Why Choose System Dies & Mould</h3>
              <ul>
                <li>Dedicated cleanroom-grade facility</li>
                <li>Contamination-controlled processes</li>
                <li>Stainless-compatible tooling</li>
                <li>Strict quality & compliance protocols</li>
                <li>Full documentation & traceability</li>
                <li>ISO 9001:2015 certified quality system</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dies-cta">
          <h2>Have a Pharma or Food Processing Requirement?</h2>
          <p>Share your specifications — our team will review and respond with a competitive quotation within 24 hours.</p>
          <Link href="/#contact" style={{ display: 'inline-block', background: 'var(--navy)', color: '#fff', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Request a Quote →
          </Link>
        </section>

      </div>
      <Footer />
    </>
  );
}
