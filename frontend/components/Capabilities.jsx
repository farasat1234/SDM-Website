import { FaChartLine, FaMicroscope, FaBolt, FaBuilding, FaDesktop, FaScrewdriverWrench, FaShield } from 'react-icons/fa6';

const caps = [
  { icon: <FaChartLine />, title: 'CONCEPTUAL DESIGNING', desc: 'Uni-G, Pro-E, SolidWorks' },
  { icon: <FaMicroscope />, title: 'CMM Inspection', desc: '±0.001mm measurement accuracy' },
  { icon: <FaBolt />, title: 'Wire / Sink EDM', desc: 'Hard tool steel electroerosion' },
  { icon: <FaBuilding />, title: 'FRP Lay-up Shop', desc: 'Hand lay, cold moulding, vacuum infusion' },
  { icon: <FaDesktop />, title: '4-Axis CNC Milling', desc: 'Complex contours & undercuts' },
  { icon: <FaScrewdriverWrench />, title: 'Heat Treatment', desc: 'In-house hardening up to 62 HRC' },
  { icon: <FaMicroscope />, title: 'Research & Development', desc: 'Design innovation & optimization' },
  { icon: <FaShield />, title: 'Surface Coatings', desc: 'Hard chrome, TiN, nitriding' },
];

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="section-tag">Technical Capabilities</div>
      <h2 className="section-title">Equipment &<br />Technology</h2>
      <div className="cap-grid">
        {caps.map((c) => (
          <div key={c.title} className="cap-item">
            <span className="icon">{c.icon}</span>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
