import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-tag">Recent Work</div>
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-sub">A selection of recent tooling and fabrication projects delivered across automotive, infrastructure, and industrial sectors.</p>
      <div className="projects-grid">
        <div className="project-card featured" style={{backgroundImage:"url('/ourprojects/BODY FABRICATION/Full Body Side View.png')",backgroundSize:'cover',backgroundPosition:'center'}}>
          <div className="project-card-overlay"></div>
          <span className="bg-icon" style={{opacity:0}}>🔩</span>
          <div className="project-tag" style={{position:'relative',zIndex:2}}>Body Fabrication</div>
          <h3 style={{position:'relative',zIndex:2}}>Body Fabrication &amp; Interior Customization</h3>
          <p style={{position:'relative',zIndex:2}}>Custom-built vehicle body fabrication and interior solutions designed for durability, functionality, and superior craftsmanship. From structural fabrication to premium interior fit-outs, we deliver turnkey solutions tailored to your requirements.</p>
          <Link href="/body-fabrication" className="proj-learn-btn" title="View All Photos">Learn More &#8594;</Link>
        </div>
        <div className="project-card fac-wm proj-card-flex" style={{'--fac-wm':"url('/OurProjects/EV Rikshaw/Assembly Stage.png')"}}>
          <span className="bg-icon">⚡</span>
          <div className="project-tag">EV Rickshaw</div>
          <h3>Complete Design, R&amp;D &amp; Prototype Development</h3>
          <p>Designed and manufactured a complete EV rickshaw prototype from concept to final product.</p>
          <Link href="/ev-rickshaw" className="proj-learn-inline proj-learn-dark" title="View Details">Learn More &#8594;</Link>
        </div>
        <div className="project-card fac-wm proj-card-flex" style={{'--fac-wm':"url('/OurProjects/Ev GOLF CART/Final Product/EV Buggy.png')"}}>
          <span className="bg-icon">🚗</span>
          <div className="project-tag">EV Golf Cart</div>
          <h3>Reverse Engineering for Mass Production</h3>
          <p>We specialize in reverse engineering and indigenization of EV golf cart systems for scalable manufacturing.</p>
          <Link href="/ev-golf-cart" className="proj-learn-inline proj-learn-dark" title="View Details">Learn More &#8594;</Link>
        </div>
        <div className="project-card fac-wm proj-card-flex" style={{'--fac-wm':"url('/OurProjects/Interior Design/AC Condencor Cover.png')"}}>
          <span className="bg-icon">🪑</span>
          <div className="project-tag">Interior Design</div>
          <h3>Customize Interior Trim &amp; Accessories</h3>
          <p>We develop and produce high-quality FRP, plastic, and sheet metal interior components with precision engineering.</p>
          <Link href="/interior-design" className="proj-learn-inline proj-learn-dark" title="View Details">Learn More &#8594;</Link>
        </div>
        <div className="project-card fac-wm proj-card-flex" style={{'--fac-wm':"url('/OurProjects/Roofing/J&P Coats-1.png')"}}>
          <span className="bg-icon">🏗️</span>
          <div className="project-tag">Roofing</div>
          <h3>FRP Roof Fabrications</h3>
          <p>32,000 sq. ft. FRP insulated roofing system with 5mm panels, engineered for high sunlight resistance and superior thermal cooling performance.</p>
          <Link href="/frp-roofing" className="proj-learn-inline proj-learn-dark" title="View Details">Learn More &#8594;</Link>
        </div>
      </div>
    </section>
  );
}
