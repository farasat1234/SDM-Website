import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCheck } from 'react-icons/fa6';

export default function AdvancedPressing() {
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
        <title>Advanced Pressing — System Dies & Mould | Karachi</title>
        <meta name="description" content="Precision forming with pneumatic and hydraulic presses ranging from 2 to 40 tons for high-output component manufacturing." />
        <meta name="keywords" content="advanced pressing Karachi, hydraulic press services Pakistan, pneumatic press forming, metal stamping press shop, high-output press manufacturing, sheet metal pressing Karachi" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '420px', display: 'flex', alignItems: 'flex-end', padding: '120px 5% 64px', backgroundImage: 'url(/dies.webp)', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,42,94,0.88) 0%, rgba(30,144,255,0.55) 60%, rgba(15,42,94,0.75) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <button onClick={goToFacilities} className="dies-back"> Back to Facilities</button>
          <div className="section-tag" style={{ marginTop: '0' }}>Advanced Pressing</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '2px', color: '#fff', margin: '12px 0 20px' }}>Precision Forming &amp; High-Output Production</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '560px' }}>Advanced pneumatic and hydraulic presses from 2 to 40 tons delivering precise forming, smooth finishing, and reliable high-volume component manufacturing.</p>
        </div>
      </div>

      <div className="dies-page">

        {/* Intro */}
        <section className="dies-intro">
          <div className="dies-intro-grid">
            <div>
              <h2>Precision Forming with High-Output Production</h2>
              <p>Our production line features advanced pneumatic and hydraulic presses ranging from 2 to 40 tons for precision forming and component manufacturing.</p>
              <p style={{ marginTop: '0' }}>The facility ensures consistent quality, smooth finishing, accurate shaping, and efficient high-volume production across various industrial applications.</p>
              <p style={{ marginTop: '0' }}>From light-duty pneumatic operations to heavy hydraulic forming, our pressing capabilities cover a complete range of material thicknesses and component complexities.</p>
            </div>
            <div className="dies-intro-img">
              <img src="/dies.webp" alt="Advanced Pressing Facility" />
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="dies-capabilities">
          <div className="section-tag" style={{ textAlign: 'center' }}>Press Types</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Pressing<br />Capabilities</h2>
          <div className="inj-features-grid" style={{ marginTop: '56px' }}>
            {[
              { num: '01', title: 'Pneumatic Pressing (2–10 Ton)', desc: 'High-speed pneumatic presses for light to medium forming operations. Ideal for blanking, piercing, bending, and assembly pressing with rapid cycle times.' },
              { num: '02', title: 'Hydraulic Pressing (10–40 Ton)', desc: 'Heavy-duty hydraulic presses providing controlled, consistent force for deep drawing, embossing, coining, and precision forming of metal and composite components.' },
              { num: '03', title: 'High-Production Finishing', desc: 'Dedicated finishing press lines ensure smooth surfaces, accurate dimensions, and uniform material distribution for premium-quality components at high production volumes.' },
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
          <div className="section-tag" style={{ textAlign: 'center' }}>Applications</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Components<br />We Produce</h2>
          <div className="dies-cards" style={{ marginTop: '56px' }}>
            {[
              { title: 'Sheet Metal Components', items: ['Blanked & pierced parts', 'Deep drawn components', 'Bent & formed brackets', 'Embossed metal panels'] },
              { title: 'Automotive Parts', items: ['Body & structural brackets', 'Mounting plates & flanges', 'Reinforcement components', 'Trim & finishing parts'] },
              { title: 'Industrial Hardware', items: ['Machine components & housings', 'Electrical enclosure panels', 'Custom formed profiles', 'Assembly & fixture parts'] },
              { title: 'FRP & Composite Pressing', items: ['Compression moulded panels', 'Hydraulic-pressed FRP parts', 'Composite structural elements', 'Custom-formed composite shapes'] },
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
            <h2>Accurate, Consistent, High-Output</h2>
            <p>Every component pressed in our facility is inspected for dimensional accuracy, surface finish, and structural integrity to ensure reliable performance in final assemblies.</p>
            <div className="dies-quality-grid">
              {['Dimensional accuracy on every part', 'Surface finish & smoothness checks', 'Force calibration & press monitoring', 'Visual inspection on every batch', 'Full production documentation'].map((item) => (
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
                <li>Automotive & transportation</li>
                <li>Sheet metal fabrication</li>
                <li>Electrical & electronics</li>
                <li>Construction & infrastructure</li>
                <li>Industrial machinery</li>
                <li>Consumer products</li>
              </ul>
            </div>
            <div className="dies-why">
              <h3>Why Choose System Dies & Mould</h3>
              <ul>
                <li>2–40 ton press range under one roof</li>
                <li>Pneumatic & hydraulic capabilities</li>
                <li>High-volume production capacity</li>
                <li>Consistent dimensional accuracy</li>
                <li>Smooth surface finish guarantee</li>
                <li>Competitive pricing & reliable delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dies-cta">
          <h2>Have a Pressing Requirement?</h2>
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
