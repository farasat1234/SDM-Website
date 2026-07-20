import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCheck } from 'react-icons/fa6';

const capabilities = [
  { num: '01', title: '3-Axis & 4-Axis CNC Milling', desc: 'Multi-axis milling for complex geometries, contoured surfaces, and precision features — from simple prismatic parts to highly intricate 3D components.' },
  { num: '02', title: 'CNC Turning & Lathe Operations', desc: 'High-precision turning for cylindrical, tapered, and threaded components. Live tooling capability for combined milling and turning in a single setup.' },
  { num: '03', title: 'Precision Surface & Cylindrical Grinding', desc: 'Ultra-fine surface and cylindrical grinding delivering exceptional flatness, roundness, and surface finish for tooling, gauges, and precision components.' },
  { num: '04', title: 'Custom Component Manufacturing', desc: 'From engineering drawings or 3D models, we manufacture custom components to exact specifications — prototype or production quantities.' },
  { num: '05', title: 'Prototype & Production Machining', desc: 'Flexible setup supporting one-off prototype runs through to high-volume production batches with consistent quality and fast turnaround.' },
];

const materials = [
  { category: 'Ferrous Metals', items: ['Tool steel & die steel', 'Stainless steel (304, 316, 420)', 'Mild steel & structural steel', 'High-speed steel (HSS)'] },
  { category: 'Non-Ferrous Metals', items: ['Aluminum alloys (6061, 7075)', 'Brass & bronze', 'Copper & copper alloys', 'Titanium alloys'] },
  { category: 'Engineering Plastics', items: ['Nylon & PEEK', 'Acetal (POM / Delrin)', 'PTFE & UHMWPE', 'Industrial grade polymers'] },
];

export default function CncPrecisionMachining() {
  return (
    <>
      <Head>
        <title>CNC Precision Machining — System Dies &amp; Mould | Karachi</title>
        <meta name="description" content="High-precision CNC machining services — 3-axis & 4-axis milling, turning, grinding. ±0.005mm tolerances for automotive, industrial, and engineering applications." />
        <meta name="keywords" content="CNC precision machining Karachi, CNC milling Pakistan, CNC turning services, 3-axis 4-axis CNC machining, precision grinding, CNC machine shop Karachi, tight tolerance machining, automotive CNC parts, industrial CNC machining Pakistan" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      {/* Hero */}
      <div className="cnc-hero">
        <div className="cnc-hero-overlay" />
        <div className="cnc-hero-content">
          <Link href="/#services" className="dies-back"> Back to Services</Link>
          <div className="section-tag" style={{ marginTop: '0' }}>Precision Manufacturing</div>
          <h1>CNC Precision<br />Machining</h1>
          <p>3-axis &amp; 4-axis CNC milling, turning, and grinding delivering &#177;0.005mm tolerances for automotive, industrial, engineering, and high-performance applications.</p>
        </div>
      </div>

      <div className="dies-page">

        {/* Intro */}
        <section className="dies-intro">
          <div className="dies-intro-grid">
            <div>
              <h2>Advanced CNC Machining Services</h2>
              <p>We provide high-precision CNC machining services for complex and critical components requiring exceptional accuracy, repeatability, and surface quality. Our advanced machining capabilities support industries including automotive, aerospace, engineering, industrial equipment, medical, and manufacturing.</p>
              <p style={{ marginTop: '0' }}>Using modern 3-axis and 4-axis CNC machining centers, we manufacture precision parts with tight tolerances and consistent quality across prototype, low-volume, and mass production requirements.</p>
              <div className="cnc-tolerance-badge">
                <span className="cnc-tol-num">&#177;0.005mm</span>
                <span className="cnc-tol-label">Routine Tolerance Achieved</span>
              </div>
            </div>
            <div className="dies-intro-img">
              <img src="/cnc-machining.jpg" alt="CNC precision machining" />
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="dies-capabilities">
          <div className="section-tag" style={{ textAlign: 'center' }}>What We Offer</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Machining<br />Capabilities</h2>
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

        {/* Materials */}
        <section style={{ padding: '80px 5%', background: 'var(--white)' }}>
          <div className="section-tag" style={{ textAlign: 'center' }}>Material Expertise</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Wide Range of<br />Materials We Machine</h2>
          <div className="inj-types-grid" style={{ marginTop: '56px' }}>
            {materials.map((m) => (
              <div key={m.category} className="inj-type-card">
                <h3>{m.category}</h3>
                <ul>
                  {m.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quality */}
        <section className="dies-quality">
          <div className="dies-quality-inner">
            <div className="section-tag">Precision Assurance</div>
            <h2>Consistent Quality &amp; Surface Finish</h2>
            <p>Our machining processes are optimized to deliver superior dimensional accuracy, smooth surface finishes, and repeatable production quality while minimizing material waste and downtime. Every component is inspected before delivery.</p>
            <div className="dies-quality-grid">
              {[
                'Dimensional accuracy to ±0.005mm',
                'CMM inspection on critical components',
                'Superior surface finish quality',
                'Repeatable production consistency',
                'Full dimensional reporting available',
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
                <li>Aerospace &amp; defence</li>
                <li>Industrial equipment</li>
                <li>Medical &amp; healthcare devices</li>
                <li>Oil &amp; gas</li>
                <li>General engineering &amp; manufacturing</li>
              </ul>
            </div>
            <div className="dies-why">
              <h3>Why Choose System Dies &amp; Mould</h3>
              <ul>
                <li>3-axis &amp; 4-axis CNC machining centers</li>
                <li>&#177;0.005mm tolerances routinely achieved</li>
                <li>Broad material machining capability</li>
                <li>Prototype to production flexibility</li>
                <li>In-house CMM &amp; quality inspection</li>
                <li>Fast turnaround &amp; reliable delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dies-cta">
          <h2>Need Precision Machined Components?</h2>
          <p>Send us your drawings or specifications — our engineering team will respond with a technical review and competitive quotation within 24 hours.</p>
          <Link href="/#contact" style={{ display: 'inline-block', background: 'var(--navy)', color: '#fff', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Request a Quote &#8594;
          </Link>
        </section>

      </div>
      <Footer />
    </>
  );
}
