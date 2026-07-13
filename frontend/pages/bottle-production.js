import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BottleProduction() {
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
        <title>Bottle Production — System Dies & Mould | Karachi</title>
        <meta name="description" content="Advanced ASB Automatic Stretch Blow and IBM Injection Blow Moulding facility for high-quality bottle manufacturing including pharma-grade containers." />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '420px', display: 'flex', alignItems: 'flex-end', padding: '120px 5% 64px', backgroundImage: 'url(/injection3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,42,94,0.88) 0%, rgba(30,144,255,0.55) 60%, rgba(15,42,94,0.75) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <button onClick={goToFacilities} className="dies-back"> Back to Facilities</button>
          <div className="section-tag" style={{ marginTop: '0' }}>Bottle Production</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '2px', color: '#fff', margin: '12px 0 20px' }}>Advanced Blowing Facility</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '560px' }}>Precision bottle manufacturing using ASB Automatic Stretch Blow and IBM Injection Blow Moulding technology — high-quality containers for pharma, food, and industrial sectors.</p>
        </div>
      </div>

      <div className="dies-page">

        {/* Intro */}
        <section className="dies-intro">
          <div className="dies-intro-grid">
            <div>
              <h2>Precision Bottle Manufacturing</h2>
              <p>Our Advanced Blowing Facility is equipped with modern ASB Automatic Stretch Blow and IBM Injection Blow Moulding technology for precision bottle manufacturing.</p>
              <p style={{ marginTop: '0' }}>We produce high-quality containers, including pharma-grade bottles, with consistent dimensional accuracy, superior finish, and reliable high-volume production capabilities.</p>
              <p style={{ marginTop: '0' }}>From small-batch specialty containers to large-scale production runs, our facility is designed to meet the strictest quality and compliance requirements across industries.</p>
            </div>
            <div className="dies-intro-img">
              <img src="/injection3.jpg" alt="Bottle Production Facility" />
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="dies-capabilities">
          <div className="section-tag" style={{ textAlign: 'center' }}>Our Technology</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Moulding<br />Processes</h2>
          <div className="inj-features-grid" style={{ marginTop: '56px' }}>
            {[
              { num: '01', title: 'ASB Automatic Stretch Blow Moulding', desc: 'Produces biaxially oriented bottles with superior clarity, strength, and lightweight properties. Ideal for PET bottles used in beverages, pharma, and personal care applications.' },
              { num: '02', title: 'IBM Injection Blow Moulding', desc: 'Combines injection moulding and blow moulding in a single process for accurate neck finishes, consistent wall thickness, and high-quality containers for precision applications.' },
              { num: '03', title: 'Pharma-Grade Production', desc: 'Dedicated production runs with contamination-controlled processes ensuring compliance with pharmaceutical packaging standards — dimensional accuracy and superior finish guaranteed.' },
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
          <h2 className="section-title" style={{ textAlign: 'center' }}>Containers<br />We Produce</h2>
          <div className="dies-cards" style={{ marginTop: '56px' }}>
            {[
              { title: 'Pharma & Medical', items: ['Tablet & capsule bottles', 'Syrup & liquid medicine bottles', 'Eye drop & nasal spray containers', 'Sterile packaging containers'] },
              { title: 'Food & Beverage', items: ['Water & juice bottles', 'Sauce & condiment containers', 'Edible oil bottles', 'Food-grade storage containers'] },
              { title: 'Industrial & Chemical', items: ['Chemical storage bottles', 'Lubricant & oil containers', 'Cleaning product bottles', 'Custom industrial containers'] },
              { title: 'Personal Care', items: ['Shampoo & conditioner bottles', 'Lotion & cream containers', 'Cosmetic packaging', 'Spray & pump bottles'] },
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
            <h2>Consistent Quality, Every Bottle</h2>
            <p>Each container produced in our facility undergoes strict quality checks to ensure dimensional accuracy, structural integrity, and finish quality before dispatch.</p>
            <div className="dies-quality-grid">
              {['Dimensional accuracy on every batch', 'Wall thickness uniformity checks', 'Visual & surface finish inspection', 'Pharma-grade compliance checks', 'High-volume repeatability verified'].map((item) => (
                <div key={item} className="dies-quality-item">
                  <span className="dies-check">✓</span>
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
                <li>Food & beverage</li>
                <li>Personal care & cosmetics</li>
                <li>Chemical & industrial</li>
                <li>Agrochemical packaging</li>
                <li>Consumer products</li>
              </ul>
            </div>
            <div className="dies-why">
              <h3>Why Choose System Dies & Mould</h3>
              <ul>
                <li>ASB & IBM technology under one roof</li>
                <li>Pharma-grade production capability</li>
                <li>Consistent dimensional accuracy</li>
                <li>High-volume production capacity</li>
                <li>Superior surface finish & clarity</li>
                <li>Competitive pricing & reliable delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dies-cta">
          <h2>Have a Bottle Production Requirement?</h2>
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
