import Link from 'next/link';
import { FaScrewdriverWrench, FaIndustry, FaBuilding, FaGear, FaRulerCombined, FaArrowsRotate } from 'react-icons/fa6';

const services = [
  { num: '01', icon: <FaScrewdriverWrench />, title: 'Dies & Press Tools', desc: 'Progressive dies, blanking dies, deep draw tools, and compound dies machined to tight tolerances. Suitable for high-volume automotive and sheet metal stampings.' },
  { num: '02', icon: <FaIndustry />, title: 'Injection & Blow Moulds', desc: 'Plastic injection moulds, blow moulds, and rubber moulds designed with optimal gate/runner systems, cooling channels, and surface finishes for quality production.' },
  { num: '03', icon: <FaBuilding />, title: 'FRP / GRP Fabrication', desc: 'Fiberglass reinforced plastic components — tanks, vessels, hoods, canopies, ducts, and custom profiles using hand lay-up, spray-up and could moulding.' },
  { num: '04', icon: <FaGear />, title: 'CNC Precision Machining', desc: '3-axis & 4-axis CNC milling, turning, and grinding for steel, aluminum, brass, and engineering plastics. ±0.005mm tolerances routinely achieved.' },
  { num: '05', icon: <FaRulerCombined />, title: 'Jigs & Fixtures', desc: 'Assembly jigs, welding fixtures, checking gauges, and drilling templates engineered to reduce cycle times and guarantee assembly repeatability on the production floor.' },
  { num: '06', icon: <FaArrowsRotate />, title: 'Reverse Engineering', desc: '3D scanning, CMM measurement, and CAD reconstruction of legacy parts and obsolete tooling. Rapid re-tooling with full documentation and DFM analysis.', img: '/reverse-eng.jpg', href: '/reverse-engineering' },
];

export default function Services() {
  return (
    <section id="services">
      <div className="section-tag">What We Do</div>
      <h2 className="section-title">Core Engineering<br />Services</h2>
      <p className="section-sub">From concept to finished component we engineer, fabricate, and deliver precision tooling and composite solutions for demanding industrial applications.</p>
      <div className="services-grid">
        {services.map((s) => (
          <div
            key={s.num}
            className="service-card"
            style={(['01','02','03','04','05','06'].includes(s.num)) ? {
              backgroundImage: s.num === '01' ? 'url(/dies.webp)' : s.num === '02' ? 'url(/injection.jpg)' : s.num === '03' ? 'url(/frp.jpeg)' : s.num === '04' ? 'url(/cnc-machining.jpg)' : s.num === '05' ? 'url(/jigs-fixture.jpeg)' : 'url(/reverse-eng.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden',
            } : {}}
          >
            {(['01','02','03','04','05','06'].includes(s.num)) && (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(15,42,94,0.88) 0%, rgba(30,144,255,0.55) 60%, rgba(15,42,94,0.75) 100%)',
                zIndex: 0,
              }} />
            )}
            <span className="service-num" style={(['01','02','03','04','05','06'].includes(s.num)) ? { position: 'relative', zIndex: 1, color: 'rgba(255,255,255,0.5)' } : {}}>{s.num}</span>
            <span className="service-icon" style={(['01','02','03','04','05','06'].includes(s.num)) ? { position: 'relative', zIndex: 1 } : {}}>{s.icon}</span>
            <h3 style={(['01','02','03','04','05','06'].includes(s.num)) ? { position: 'relative', zIndex: 1, color: '#fff' } : {}}>{s.title}</h3>
            <p style={(['01','02','03','04','05','06'].includes(s.num)) ? { position: 'relative', zIndex: 1, color: 'rgba(255,255,255,0.85)' } : {}}>{s.desc}</p>
            {(['01','02','03','04','05','06'].includes(s.num)) && (
              <Link
                href={s.num === '01' ? '/dies-press-tools' : s.num === '02' ? '/injection-blow-moulds' : s.num === '03' ? '/frp-grp-fabrication' : s.num === '04' ? '/cnc-precision-machining' : s.num === '05' ? '/jigs-fixtures' : '/reverse-engineering'}
                style={{ position: 'relative', zIndex: 1, display: 'inline-block', marginTop: '16px', color: '#fff', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.5px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.45)', paddingBottom: '2px' }}
              >
                Learn More →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
