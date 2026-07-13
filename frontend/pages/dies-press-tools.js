import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DiesPressTools() {
  return (
    <>
      <Head>
        <title>Dies &amp; Press Tools  -  System Dies &amp; Mould | Karachi</title>
        <meta name="description" content="High-precision progressive dies, conventional dies, deep draw tools, and compound dies engineered for automotive, electrical, and sheet metal industries." />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      {/* Hero Banner */}
      <div className="dies-hero">
        <div className="dies-hero-overlay" />
        <div className="dies-hero-content">
          <Link href="/#services" className="dies-back">Back to Services</Link>
          <div className="section-tag" style={{ marginTop: '0' }}>Precision Tooling</div>
          <h1>Dies &amp; Press Tools</h1>
          <p>High-performance tooling solutions engineered for consistent precision, durability, and production efficiency across demanding industrial applications.</p>
        </div>
      </div>

      <div className="dies-page">

        {/* Intro */}
        <section className="dies-intro">
          <div className="dies-intro-grid">
            <div>
              <h2>Precision Dies &amp; Press Tooling Solutions</h2>
              <p>At System Dies &amp; Mould, we specialise in the design, development, and manufacturing of high-precision dies and press tools engineered for consistent performance, durability, and production efficiency. Our tooling solutions are built to meet the demanding requirements of automotive, engineering, electrical, appliance, and sheet metal industries where dimensional accuracy and repeatability are critical.</p>
              <p style={{ marginTop: '0' }}>With advanced machining capabilities, precision grinding, CNC manufacturing, and strict quality control processes, we deliver tools machined to tight tolerances for reliable high-volume production environments.</p>
            </div>
            <div className="dies-intro-img">
              <img src="/dies.webp" alt="Dies and press tools" />
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="dies-capabilities">
          <div className="section-tag">Tooling Types</div>
          <h2 className="section-title">Our Die &amp; Press Tooling<br />Capabilities</h2>

          <div className="dies-cards">

            {/* Progressive Dies */}
            <div className="dies-card">
              <div className="dies-card-header">
                <span className="dies-card-num">01</span>
                <h3>Progressive Dies</h3>
              </div>
              <p>We manufacture high-performance progressive dies designed for continuous, high-speed production operations. These tools perform multiple cutting, bending, and forming operations in a single press cycle, significantly improving productivity and reducing manufacturing costs.</p>
              <div className="dies-two-col">
                <div>
                  <h4>Applications</h4>
                  <ul>
                    <li>Automotive components</li>
                    <li>Electrical terminals</li>
                    <li>Brackets and sheet metal parts</li>
                    <li>Precision stamped components</li>
                  </ul>
                </div>
                <div>
                  <h4>Features</h4>
                  <ul>
                    <li>High production efficiency</li>
                    <li>Consistent repeatability</li>
                    <li>Reduced material wastage</li>
                    <li>Long tool life and low maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compound Dies */}
            <div className="dies-card">
              <div className="dies-card-header">
                <span className="dies-card-num">02</span>
                <h3>Compound Dies</h3>
              </div>
              <p>Our compound dies are engineered to perform multiple cutting operations in a single stroke, enabling precise and cost-effective manufacturing for high-volume production requirements.</p>
              <div className="dies-two-col">
                <div>
                  <h4>Benefits</h4>
                  <ul>
                    <li>Improved production speed</li>
                    <li>Enhanced part accuracy</li>
                    <li>Reduced secondary operations</li>
                    <li>Cost-efficient mass production</li>
                  </ul>
                </div>
                <div>
                  <h4>Suitable For</h4>
                  <ul>
                    <li>Washers</li>
                    <li>Flat precision components</li>
                    <li>Sheet metal stampings</li>
                    <li>Industrial hardware parts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Deep Draw Tools */}
            <div className="dies-card">
              <div className="dies-card-header">
                <span className="dies-card-num">03</span>
                <h3>Deep Draw Tools</h3>
              </div>
              <p>We design and manufacture deep draw tools for producing complex hollow and cylindrical components with excellent dimensional accuracy and material flow control. Our tooling solutions are optimized to reduce wrinkling, tearing, and thinning during forming processes.</p>
              <div className="dies-two-col">
                <div>
                  <h4>Applications</h4>
                  <ul>
                    <li>Automotive housings</li>
                    <li>Metal containers</li>
                    <li>Industrial enclosures</li>
                    <li>Precision formed components</li>
                  </ul>
                </div>
                <div>
                  <h4>Advantages</h4>
                  <ul>
                    <li>Smooth material flow</li>
                    <li>High structural consistency</li>
                    <li>Optimized forming performance</li>
                    <li>Durable tooling construction</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conventional Dies */}
            <div className="dies-card">
              <div className="dies-card-header">
                <span className="dies-card-num">04</span>
                <h3>Conventional Dies</h3>
              </div>
              <p>Our conventional dies are designed for reliable, cost-effective sheet metal forming, cutting, bending, and punching. Built for precision and durability, they deliver consistent performance, long service life, and high production efficiency across diverse manufacturing applications.</p>
              <div className="dies-two-col">
                <div>
                  <h4>Capabilities</h4>
                  <ul>
                    <li>Precision cutting</li>
                    <li>Bending &amp; punching</li>
                    <li>Tool steel construction</li>
                    <li>High repeatability</li>
                  </ul>
                </div>
                <div>
                  <h4>Industries Served</h4>
                  <ul>
                    <li>Automotive</li>
                    <li>Electrical and Electronics</li>
                    <li>Home Appliances</li>
                    <li>Industrial Manufacturing</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Quality */}
        <section className="dies-quality">
          <div className="dies-quality-inner">
            <div className="section-tag">Manufacturing Excellence</div>
            <h2>Advanced Manufacturing &amp; Quality Assurance</h2>
            <p>We combine modern CNC machining, wire cutting, EDM, precision grinding, and inspection technologies to manufacture tooling solutions that meet exact customer specifications. Every die and press tool undergoes rigorous quality checks to ensure:</p>
            <div className="dies-quality-grid">
              {['Dimensional accuracy','Tight tolerance compliance','Surface finish quality','Tool durability and reliability','Production-ready performance'].map((item) => (
                <div key={item} className="dies-quality-item">
                  <span className="dies-check">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries + Why Choose */}
        <section className="dies-bottom">
          <div className="dies-bottom-grid">
            <div className="dies-industries">
              <h3>Industries We Serve</h3>
              <ul>
                <li>Automotive manufacturing</li>
                <li>Sheet metal fabrication</li>
                <li>Electrical &amp; electronics</li>
                <li>Engineering industries</li>
                <li>Consumer appliances</li>
                <li>Industrial equipment manufacturing</li>
              </ul>
            </div>
            <div className="dies-why">
              <h3>Why Choose System Dies &amp; Mould</h3>
              <ul>
                <li>Precision-engineered tooling solutions</li>
                <li>Expertise in high-volume production tooling</li>
                <li>Custom design and development support</li>
                <li>Advanced CNC and tool room facilities</li>
                <li>Reliable quality and timely delivery</li>
                <li>Cost-effective manufacturing solutions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dies-cta">
          <h2>Ready to Discuss Your Tooling Requirements?</h2>
          <p>Contact our engineering team for a technical review and competitive quotation.</p>
          <Link href="/#contact" className="btn-primary" style={{ display: 'inline-block', background: '#fff', color: 'var(--navy)', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Request a Quote &#8594;
          </Link>
        </section>

      </div>
      <Footer />
    </>
  );
}

