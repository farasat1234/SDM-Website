import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCheck } from 'react-icons/fa6';

const capabilities = [
  {
    num: '01',
    title: 'CMM Inspection & Dimensional Analysis',
    desc: 'Coordinate Measuring Machine (CMM) inspection for precise dimensional verification of critical features, ensuring the reconstructed model accurately replicates the original component specifications.',
  },
  {
    num: '02',
    title: 'CAD Reconstruction & Modelling',
    desc: 'Conversion of scanned point cloud data into fully parametric 3D CAD models — ready for manufacturing, tooling design, simulation, and product development workflows.',
  },
  {
    num: '03',
    title: 'Production Drawings & Documentation',
    desc: 'Generation of complete 2D engineering drawings, GD&T callouts, and manufacturing documentation from the reconstructed CAD model for seamless handover to production.',
  },
  {
    num: '04',
    title: 'DFM Analysis & Design Optimisation',
    desc: 'Design for Manufacturing (DFM) review during reconstruction — identifying opportunities to improve producibility, reduce cycle times, enhance durability, or update designs for modern manufacturing processes.',
  },
  {
    num: '05',
    title: 'Rapid Re-Tooling',
    desc: 'Fast-track tooling design and manufacture based on the reconstructed CAD data, minimising production downtime and restoring critical manufacturing capability quickly and cost-effectively.',
  },
];

const applications = [
  { title: 'Legacy & Obsolete Components', items: ['Discontinued machine parts', 'Legacy automotive components', 'Obsolete industrial equipment parts', 'Vintage tooling and fixtures'] },
  { title: 'Tooling & Mould Recovery', items: ['Worn press tool reconstruction', 'Damaged mould insert recovery', 'Fixture and gauge replication', 'Die and punch reproduction'] },
  { title: 'Engineering & Analysis', items: ['Competitor product benchmarking', 'Design improvement studies', 'Prototype digitisation', 'As-built vs. nominal comparison'] },
];

export default function ReverseEngineering() {
  return (
    <>
      <Head>
        <title>Reverse Engineering — System Dies & Mould | Karachi</title>
        <meta name="description" content="3D scanning, CMM measurement, and CAD reconstruction of legacy parts and obsolete tooling. Rapid re-tooling with full documentation and DFM analysis." />
        <meta name="keywords" content="reverse engineering Karachi, 3D scanning services Pakistan, CMM measurement, CAD reconstruction, legacy part re-tooling, obsolete tooling replacement, DFM analysis Karachi" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      {/* Hero */}
      <div className="rev-hero">
        <div className="rev-hero-overlay" />
        <div className="rev-hero-content">
          <Link href="/#services" className="dies-back"> Back to Services</Link>
          <div className="section-tag" style={{ marginTop: '0' }}>Digital Reconstruction</div>
          <h1>Reverse Engineering</h1>
          <p>3D scanning, CMM measurement, and CAD reconstruction of legacy parts and obsolete tooling — rapid re-tooling with full documentation and DFM analysis.</p>
        </div>
      </div>

      <div className="dies-page">

        {/* Intro */}
        <section className="dies-intro">
          <div className="dies-intro-grid">
            <div>
              <h2>Advanced Reverse Engineering Solutions</h2>
              <p>System Dies &amp; Mould provides advanced reverse engineering solutions for legacy components, worn-out parts, and obsolete tooling where original drawings or CAD data are unavailable. Using high-precision 3D scanning, CMM inspection, and CAD reconstruction technologies, we accurately capture complex geometries and recreate complete digital models for manufacturing and product redevelopment.</p>
              <p style={{ marginTop: '0' }}>Our engineering team converts scanned data into fully detailed CAD models, production drawings, and manufacturable tooling designs with complete dimensional validation. Whether it is an automotive component, industrial machine part, mould insert, or fabricated assembly, we ensure precise replication while identifying opportunities for design improvement and production optimization.</p>
              <p style={{ marginTop: '0' }}>With rapid re-tooling capabilities and comprehensive DFM (Design for Manufacturing) analysis, System Dies &amp; Mould helps manufacturers reduce downtime, extend equipment life, and restore critical production components quickly and cost-effectively.</p>
            </div>
            <div className="dies-intro-img">
              <img src="/reverse-eng.jpg" alt="Reverse engineering and 3D scanning" />
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="dies-capabilities">
          <div className="section-tag" style={{ textAlign: 'center' }}>What We Offer</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Reverse Engineering<br />Capabilities</h2>
          <div className="inj-features-grid" style={{ marginTop: '56px' }}>
            {capabilities.map((c) => (
              <div key={c.num} className="inj-feature-card">
                <span className="inj-feature-num">{c.num}</span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section style={{ padding: '80px 5%', background: 'var(--white)' }}>
          <div className="section-tag" style={{ textAlign: 'center' }}>Applications</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Where We Apply<br />Reverse Engineering</h2>
          <div className="inj-types-grid" style={{ marginTop: '56px' }}>
            {applications.map((a) => (
              <div key={a.title} className="inj-type-card">
                <h3>{a.title}</h3>
                <ul>
                  {a.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quality */}
        <section className="dies-quality">
          <div className="dies-quality-inner">
            <div className="section-tag">Accuracy Assurance</div>
            <h2>Precision Reconstruction &amp; Validation</h2>
            <p>Every reverse engineering project is executed with rigorous dimensional verification to ensure the reconstructed model and re-tooled components match the original part geometry with the accuracy required for production use.</p>
            <div className="dies-quality-grid">
              {[
                'CMM verification of critical dimensions',
                'Full parametric CAD model deliverable',
                'Complete 2D drawings and GD&T documentation',
                'DFM analysis on every reconstruction',
                'Dimensional report included with every project',
              ].map((item) => (
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
                <li>Automotive &amp; transport</li>
                <li>Industrial machinery &amp; equipment</li>
                <li>Aerospace &amp; defence</li>
                <li>Oil, gas &amp; energy</li>
                <li>Consumer goods manufacturing</li>
                <li>General engineering &amp; fabrication</li>
              </ul>
            </div>
            <div className="dies-why">
              <h3>Why Choose System Dies &amp; Mould</h3>
              <ul>
                <li>High-accuracy 3D scanning &amp; CMM measurement</li>
                <li>Full CAD reconstruction with parametric models</li>
                <li>DFM analysis to optimise for manufacturability</li>
                <li>Rapid re-tooling to minimise production downtime</li>
                <li>Complete documentation &amp; dimensional reports</li>
                <li>Competitive pricing &amp; fast project turnaround</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dies-cta">
          <h2>Need a Part Reverse Engineered?</h2>
          <p>Send us your component, sample, or description — our engineering team will assess the project and respond with a technical proposal and quotation within 24 hours.</p>
          <Link href="/#contact" style={{ display: 'inline-block', background: 'var(--navy)', color: '#fff', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Request a Quote →
          </Link>
        </section>

      </div>
      <Footer />
    </>
  );
}
