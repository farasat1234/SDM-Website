import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaIndustry, FaWind, FaArrowUp, FaArrowRight, FaCapsules } from 'react-icons/fa6';

const features = [
  {
    num: '01',
    title: 'Precision Engineering for Reliable Output',
    desc: 'Each mould is carefully designed using advanced CAD/CAM systems to ensure accurate cavity geometry, smooth part release, and dimensional stability across large production runs.',
  },
  {
    num: '02',
    title: 'Optimized Gate & Runner Systems',
    desc: 'We implement efficient hot runner and cold runner systems tailored to material flow requirements, minimizing waste while improving filling balance and reducing cycle time.',
  },
  {
    num: '03',
    title: 'Advanced Cooling Channel Design',
    desc: 'Our moulds feature strategically designed cooling channels that ensure uniform temperature distribution, faster cooling cycles, and improved part consistency — enhancing overall productivity.',
  },
  {
    num: '04',
    title: 'Superior Surface Finishing',
    desc: 'High-grade polishing and texture finishing options are available to achieve the required aesthetic and functional surface quality, from high-gloss finishes to matte and textured surfaces.',
  },
  {
    num: '05',
    title: 'Built for Performance & Longevity',
    desc: 'Manufactured using premium tool steels and heat-treated components, our moulds are built to withstand demanding production environments while maintaining accuracy over time.',
  },
];

const mouldTypes = [
  {
    title: 'Plastic Injection Moulds',
    points: ['Single & multi-cavity moulds', 'Hot runner & cold runner systems', 'Two-shot and insert moulding', 'Complex undercut & side-action designs'],
  },
  {
    title: 'Blow Moulds',
    points: ['Extrusion blow moulds', 'Injection blow moulds', 'Stretch blow mould tooling', 'Packaging & container moulds'],
  },
  {
    title: 'Rubber Moulds',
    points: ['Compression moulds', 'Transfer moulds', 'Injection rubber moulds', 'Seals, gaskets & custom profiles'],
  },
];

export default function InjectionBlowMoulds() {
  return (
    <>
      <Head>
        <title>Injection &amp; Blow Moulds — System Dies &amp; Mould | Karachi</title>
        <meta name="description" content="High-precision plastic injection moulds, blow moulds, and rubber mould tools engineered for automotive, packaging, consumer goods, and industrial applications." />
        <meta name="keywords" content="injection mould manufacturer Karachi, blow mould manufacturer Pakistan, plastic injection moulding tools, rubber mould manufacturer, mould design and fabrication, plastic mould maker Karachi, blow moulding tools Pakistan, packaging mould manufacturer" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      {/* Hero Banner */}
      <div className="inj-hero">
        <div className="inj-hero-overlay" />
        <div className="inj-hero-content">
          <Link href="/#services" className="dies-back"> Back to Services</Link>
          <div className="section-tag" style={{ marginTop: '0' }}>Mould Solutions</div>
          <h1>Injection &amp; Blow Moulds</h1>
          <p>High-precision mould tools engineered for consistent performance, durability, and high-volume production efficiency across automotive, packaging, and consumer applications.</p>
        </div>
      </div>

      <div className="dies-page">

        {/* Intro */}
        <section className="dies-intro">
          <div className="dies-intro-grid">
            <div>
              <h2>Precision Mould Manufacturing</h2>
              <p>We design and manufacture high-precision plastic injection moulds, blow moulds, and rubber mould tools engineered for consistent performance, durability, and high-volume production efficiency.</p>
              <p style={{ marginTop: '0' }}>Our mould solutions are developed with a strong focus on product quality, cycle time reduction, and long tool life, making them ideal for automotive, packaging, consumer goods, and industrial applications.</p>
              <p style={{ marginTop: '0' }}>Whether you need custom injection moulds, blow moulds for packaging, or durable rubber mould tooling, we deliver solutions that combine precision engineering with production efficiency.</p>
            </div>
            <div className="dies-intro-img">
              <img src="/injection.jpg" alt="Injection and blow mould tooling" />
            </div>
          </div>
        </section>

        {/* Production Facilities */}
        <section className="inj-types">
          <div className="section-tag">Our Facilities</div>
          <h2 className="section-title">Moulding Production<br />Capabilities</h2>
          <p className="section-sub">A complete range of precision moulding facilities — from high-volume automotive and industrial components to pharma, food, and process industry parts.</p>

          <div className="projects-grid">

            {/* Card 1 — Injection Moulding (featured, spans 2 rows) */}
            <div className="project-card featured" style={{ backgroundImage: 'url(/injection.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="project-card-overlay"></div>
              <span className="bg-icon" style={{ opacity: 0 }}><FaIndustry /></span>
              <div className="project-tag" style={{ position: 'relative', zIndex: 2 }}>Injection Moulding</div>
              <h3 style={{ position: 'relative', zIndex: 2 }}>Plastic Injection Moulding</h3>
              <p style={{ position: 'relative', zIndex: 2 }}>Our core capability — high-precision single &amp; multi-cavity moulds for consistent part quality, tight tolerances, and high-volume production. Serving automotive, electrical, industrial, and consumer product manufacturers.</p>
            </div>

            {/* Card 2 — Blow Moulding */}
            <div className="project-card">
              <span className="bg-icon"><FaWind /></span>
              <div className="project-tag">Blow Moulding</div>
              <h3>Blow Moulding</h3>
              <p>Extrusion, injection &amp; stretch blow mould tooling for bottles, containers, and packaging applications.</p>
            </div>

            {/* Card 3 — Vertical Moulding */}
            <div className="project-card">
              <span className="bg-icon"><FaArrowUp /></span>
              <div className="project-tag">Vertical Moulding</div>
              <h3>Vertical Injection Moulding</h3>
              <p>JSW 150T, TKC 145T, JMW 5T &amp; AM701 1.5T — ideal for insert moulding and over-moulding of metal &amp; wire components.</p>
            </div>

            {/* Card 4 — Horizontal Moulding */}
            <div className="project-card">
              <span className="bg-icon"><FaArrowRight /></span>
              <div className="project-tag">Horizontal Moulding</div>
              <h3>Horizontal Injection Moulding</h3>
              <p>WELL.TECH 10oz, GOLDSTAR 4oz &amp; DOCTORBOY 2oz — high-speed machines for efficient, high-volume plastic component production.</p>
            </div>

            {/* Card 5 — Pharma / Food & Process */}
            <div className="project-card">
              <span className="bg-icon"><FaCapsules /></span>
              <div className="project-tag">Pharma / Food &amp; Process</div>
              <h3>Pharma / Food &amp; Process Industry</h3>
              <p>Precision moulded components under strict hygiene standards — FDA-compliant materials, pharmaceutical dispensers, hygienic fittings, and cleanroom-compatible finishes.</p>
            </div>

          </div>
        </section>

        {/* Features */}
        <section className="dies-capabilities" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="section-tag" style={{ textAlign: 'center' }}>Engineering Excellence</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>What Sets Our<br />Moulds Apart</h2>
          <div className="inj-features-grid">
            {features.map((f) => (
              <div key={f.num} className="inj-feature-card">
                <span className="inj-feature-num">{f.num}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries + Why */}
        <section className="dies-bottom">
          <div className="dies-bottom-grid">
            <div className="dies-industries">
              <h3>Industries We Serve</h3>
              <ul>
                <li>Automotive components</li>
                <li>Packaging &amp; containers</li>
                <li>Consumer goods &amp; appliances</li>
                <li>Medical &amp; healthcare devices</li>
                <li>Electrical &amp; electronics</li>
                <li>Industrial &amp; infrastructure</li>
              </ul>
            </div>
            <div className="dies-why">
              <h3>Why Choose System Dies &amp; Mould</h3>
              <ul>
                <li>Advanced CAD/CAM mould design</li>
                <li>Premium tool steel &amp; heat treatment</li>
                <li>In-house CNC, EDM &amp; grinding</li>
                <li>Rigorous dimensional inspection</li>
                <li>Fast lead times &amp; reliable delivery</li>
                <li>Full after-sales technical support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dies-cta">
          <h2>Need a Custom Mould Solution?</h2>
          <p>Send us your part drawings or product requirements — our team will respond with a technical review and quotation within 24 hours.</p>
          <Link href="/#contact" style={{ display: 'inline-block', background: 'var(--navy)', color: '#fff', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Request a Quote &#8594;
          </Link>
        </section>

      </div>
      <Footer />
    </>
  );
}
