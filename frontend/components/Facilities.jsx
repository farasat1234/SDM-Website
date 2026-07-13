import Link from 'next/link';

const linkStyle = { position: 'relative', zIndex: 1, display: 'inline-block', marginTop: 'auto', paddingTop: '16px', color: 'var(--navy)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.5px', textDecoration: 'none', borderBottom: '1px solid var(--navy)', paddingBottom: '2px' };
const pStyle = { overflow: 'auto', maxHeight: '4.8em', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflowY: 'auto' };

export default function Facilities() {
  return (
    <section id="facilities" className="facilities-section">
      <div className="section-tag">Manufacturing Facilities</div>
      <h2 className="section-title">Installed Facilities &amp;<br />Production Lines</h2>
      <p className="section-sub">
        Five dedicated production facilities under one roof from high-tonnage vertical injection to
        sterile-grade processing lines for pharma and food sectors.
      </p>

      <div className="projects-grid fac-projects-grid">

        {/* Card 1 — Featured */}
        <div className="project-card featured fac-wm" style={{ '--fac-wm': 'url(/injection.jpg)', isolation: 'isolate' }}>
          <span className="bg-icon">🏭</span>
          <div className="project-tag">High Volume</div>
          <h3>Injection Moulding Facility</h3>
          <p>
            Our clean and organized production facility is equipped with advanced vertical and horizontal injection moulding machines.
            These modern machines enable accurate, efficient, and consistent manufacturing for various customized components.
            Our facility is designed to deliver reliable production capacity with quality-focused manufacturing processes.
          </p>
          <ul className="fac-inline-list">
            <li>JSW Vertical Inject. 150 Ton</li>
            <li>TKC Vertical Inject. 145 Ton</li>
            <li>JMW Vertical Inject. 05 Ton</li>
            <li>AM701 Vertical Inject. 1.5 Ton</li>
            <li>Welltech Horizontal (10 Onz)</li>
            <li>Goldstar Horizontal (4 Onz)</li>
            <li>Doctorboy Horizontal (2 Onz)</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="project-card fac-wm" style={{ display: 'flex', flexDirection: 'column', '--fac-wm': 'url(/injection-mould.jpg)' }}>
          <span className="bg-icon">🍼</span>
          <div className="project-tag">Bottle Production</div>
          <h3>Advanced Blowing Facility</h3>
          <p style={pStyle}>
            Our facility is equipped with modern ASB Automatic Stretch Blow and IBM Injection Blow Moulding technology for precision bottle manufacturing. We produce high-quality containers, including pharma-grade bottles, with consistent dimensional accuracy, superior finish, and reliable high-volume production capabilities.
          </p>
          <Link href="/bottle-production" style={linkStyle}>Learn More →</Link>
        </div>

        {/* Card 3 */}
        <div className="project-card fac-wm" style={{ display: 'flex', flexDirection: 'column', '--fac-wm': 'url(/frp.jpeg)' }}>
          <span className="bg-icon">🧱</span>
          <div className="project-tag">FRP Fabrication</div>
          <h3>Advanced Composite Manufacturing</h3>
          <p style={pStyle}>
            Our facility specializes in FRP fabrication using advanced cold moulding processes, wood and metal sheet encapsulation, and hydraulic press finishing techniques. We manufacture durable, lightweight, and high-strength composite components for a wide range of industrial and commercial applications.
          </p>
          <Link href="/frp-fabrication" style={linkStyle}>Learn More →</Link>
        </div>

        {/* Card 4 */}
        <div className="project-card fac-wm" style={{ borderTop: 'none', display: 'flex', flexDirection: 'column', '--fac-wm': 'url(/automotive-tooling.jpg)' }}>
          <span className="bg-icon">🔧</span>
          <div className="project-tag">Advanced Pressing</div>
          <h3>Precision Forming &amp; High-Output Production</h3>
          <p style={pStyle}>
            Our production line features advanced pneumatic and hydraulic presses ranging from 2 to 40 tons for precision forming and component manufacturing. The facility ensures consistent quality, smooth finishing, accurate shaping, and efficient high-volume production across various industrial automotive and commercial applications.
          </p>
          <Link href="/advanced-pressing" style={linkStyle}>Learn More →</Link>
        </div>

        {/* Card 5 */}
        <div className="project-card fac-wm" style={{ borderTop: 'none', display: 'flex', flexDirection: 'column', '--fac-wm': 'url(/injection-3.jpeg)' }}>
          <span className="bg-icon">🧬</span>
          <div className="project-tag">Pharma &amp; Food Processing</div>
          <h3>Cleanroom Manufacturing Environment</h3>
          <p style={pStyle}>
            Our dedicated hygienic processing area is designed to meet pharmaceutical and food industry standards. Equipped with contamination-controlled environments, stainless-compatible tooling, and strict quality protocols, the facility ensures safe, compliant, and high-quality production for sensitive applications.
          </p>
          <Link href="/pharma-food-processing" style={linkStyle}>Learn More →</Link>
        </div>

      </div>
    </section>
  );
}
