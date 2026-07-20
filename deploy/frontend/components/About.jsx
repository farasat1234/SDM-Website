import { FaGear, FaCheck } from 'react-icons/fa6';

export default function About() {
  return (
    <section id="about">
      <div className="about-visual">
        {/* Main box — corporate facility photo */}
        <div className="about-box about-box-1">
          <img src="/cnc-machining.jpg" alt="SDM Manufacturing Facility" className="ab-corp-img" />
          <div className="ab-img-overlay" />
          <div className="ab-gear ab-gear-1"><FaGear /></div>
          <div className="ab-gear ab-gear-2"><FaGear /></div>
          <div className="ab-particles">
            {[...Array(8)].map((_, i) => <span key={i} className={`ab-particle ab-p${i+1}`} />)}
          </div>
          <div className="ab-year-tag">Est. 2000</div>
        </div>
        {/* ISO badge box */}
        <div className="about-box about-box-2">
          <img src="/iso.jpg" alt="ISO 9001:2015 Certificate" className="ab-iso-img" />
          <div className="ab-iso-img-overlay" />
          <div className="ab-iso-ring" />
          <div className="big">ISO</div>
          <div className="label">9001:2015</div>
          <div className="ab-iso-certified"><FaCheck /> Certified</div>
        </div>
        {/* Stats pill */}
        <div className="about-box about-box-3">
          <div className="ab-stat-item"><span className="ab-stat-num">25+</span><span className="ab-stat-lbl">Years</span></div>
          <div className="ab-stat-divider" />
          <div className="ab-stat-item"><span className="ab-stat-num">1000+</span><span className="ab-stat-lbl">Projects</span></div>
        </div>
      </div>
      <div className="about-text">
        <div className="section-tag">About Us</div>
        <h2 className="section-title">
          Engineering<br />Excellence Since<br />
          <em style={{ color: 'var(--navy)', fontStyle: 'normal' }}>2000</em>
        </h2>
        <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: '1.8' }}>
          System Dies and Mould (SDM) has grown from a small tool-room into a full-service mechanical
          engineering firm serving automotive OEMs, industrial equipment manufacturers, and
          infrastructure developers across Pakistan.
        </p>
        <ul className="about-list">
          <li>30,000 sq.ft. RCC construction, state-of-the-art manufacturing facility with climate-controlled tool room</li>
          <li>EDM, VMC, CNC turning centres, wire cut, surface grinders, and coordinate measuring machines</li>
          <li>In-house FRP / composite fabrication shop with AutoCAD capability</li>
          <li>Dedicated design team using SolidWorks, Creo, NX, and Mastercam</li>
          <li>Certified by ISO 9001:2015 with documented quality management system</li>
        </ul>
      </div>
    </section>
  );
}
