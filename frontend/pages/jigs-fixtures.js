import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCheck } from 'react-icons/fa6';

const types = [
  {
    num: '01',
    title: 'Assembly Jigs',
    desc: 'Precision assembly jigs that locate and hold components in exact position during assembly operations, ensuring correct alignment and reducing operator dependence for consistent output.',
  },
  {
    num: '02',
    title: 'Welding Fixtures',
    desc: 'Robust welding fixtures designed to securely clamp and position parts during welding, preventing distortion and maintaining dimensional accuracy across repeated production cycles.',
  },
  {
    num: '03',
    title: 'Drilling Templates',
    desc: 'Hardened drilling templates and drill jigs that guide cutting tools to exact locations, reducing setup time and ensuring hole position accuracy across large production batches.',
  },
  {
    num: '04',
    title: 'Checking & Inspection Gauges',
    desc: 'Custom inspection gauges and checking fixtures for fast, reliable dimensional verification of machined and fabricated components directly on the production floor.',
  },
  {
    num: '05',
    title: 'Machining Fixtures',
    desc: 'Purpose-built machining fixtures that securely locate workpieces on CNC machines, reducing setup time and enabling repeatable, accurate machining across production runs.',
  },
];

const benefits = [
  'Minimized setup and changeover time',
  'Reduced operator error and rework',
  'Improved dimensional repeatability',
  'Higher throughput and production efficiency',
  'Consistent part interchangeability',
  'Long-term durability on the shop floor',
];

export default function JigsFixtures() {
  return (
    <>
      <Head>
        <title>Jigs &amp; Fixtures - System Dies &amp; Mould | Karachi</title>
        <meta name="description" content="Precision jigs, fixtures, checking gauges, and drilling templates engineered to reduce cycle times and guarantee assembly repeatability on the production floor." />
        <meta name="keywords" content="jigs and fixtures manufacturer Karachi, welding fixtures Pakistan, assembly jigs manufacturer, checking gauges, drilling templates, machining fixtures Karachi, production tooling manufacturer" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      {/* Hero */}
      <div className="jigs-hero">
        <div className="jigs-hero-overlay" />
        <div className="jigs-hero-content">
          <Link href="/#services" className="dies-back"> Back to Services</Link>
          <div className="section-tag" style={{ marginTop: '0' }}>Production Tooling</div>
          <h1>Jigs &amp; Fixtures</h1>
          <p>Precision tooling solutions engineered to improve production efficiency, ensure dimensional accuracy, and maintain repeatable quality across high-volume manufacturing operations.</p>
        </div>
      </div>

      <div className="dies-page">


        {/* Intro */}
        <section className="dies-intro">
          <div className="dies-intro-grid">
            <div>
              <h2>Precision Jigs, Fixtures &amp; Gauges</h2>
              <p>At System Dies &amp; Mould, we design and manufacture high-precision jigs, fixtures, and checking gauges that improve production efficiency, ensure dimensional accuracy, and maintain repeatable quality across high-volume manufacturing operations. Our engineered solutions are tailored for assembly lines, welding stations, machining setups, and inspection processes across automotive, engineering, and industrial sectors.</p>
              <p style={{ marginTop: '16px' }}>From assembly jigs and welding fixtures to drilling templates and inspection gauges, every system is developed to minimize setup time, reduce operator error, and enhance production consistency. Built using robust materials and precision machining techniques, our fixtures are designed for durability, reliability, and long-term performance in demanding shop-floor environments.</p>
              <p style={{ marginTop: '16px' }}>With a strong focus on productivity and repeatability, System Dies &amp; Mould delivers custom tooling solutions that help manufacturers reduce cycle times, improve interchangeability, and achieve higher operational efficiency.</p>
            </div>
            <div className="dies-intro-img">
              <img src="/jigs-fixture.jpeg" alt="Jigs and fixtures" />
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="dies-capabilities">
          <div className="section-tag" style={{ textAlign: 'center' }}>Tooling Range</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Types of Jigs &amp;<br />Fixtures We Build</h2>
          <div className="inj-features-grid" style={{ marginTop: '56px' }}>
            {types.map((t) => (
              <div key={t.num} className="inj-feature-card">
                <span className="inj-feature-num">{t.num}</span>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="dies-quality">
          <div className="dies-quality-inner">
            <div className="section-tag">Production Advantages</div>
            <h2>Benefits of Custom Jigs &amp; Fixtures</h2>
            <p>Investing in purpose-built jigs and fixtures delivers measurable improvements to production efficiency, part quality, and operator reliability across every manufacturing shift.</p>
            <div className="dies-quality-grid">
              {benefits.map((b) => (
                <div key={b} className="dies-quality-item">
                  <span className="dies-check"><FaCheck /></span>
                  <span>{b}</span>
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
                <li>Automotive assembly &amp; fabrication</li>
                <li>Sheet metal &amp; structural fabrication</li>
                <li>Engineering &amp; industrial manufacturing</li>
                <li>Electrical &amp; electronics assembly</li>
                <li>Consumer goods manufacturing</li>
                <li>Aerospace &amp; defence</li>
              </ul>
            </div>
            <div className="dies-why">
              <h3>Why Choose System Dies &amp; Mould</h3>
              <ul>
                <li>Custom design to exact specifications</li>
                <li>Precision CNC machined components</li>
                <li>Robust materials for long tool life</li>
                <li>Assembly, welding, drilling &amp; inspection types</li>
                <li>Fast design-to-delivery turnaround</li>
                <li>Competitive pricing for all batch sizes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dies-cta">
          <h2>Need Custom Jigs or Fixtures?</h2>
          <p>Share your production requirements or drawings — our engineering team will develop an efficient tooling solution and respond with a quotation within 24 hours.</p>
          <Link href="/#contact" style={{ display: 'inline-block', background: 'var(--navy)', color: '#fff', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Request a Quote &#8594;
          </Link>
        </section>

      </div>
      <Footer />
    </>
  );
}
