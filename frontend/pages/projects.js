import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  {
    tag: 'Automotive Tooling',
    icon: '🔩',
    title: 'Progressive Die for Chassis Bracket — 80-Tonne Press',
    desc: '12-station progressive die in D2 steel for structural chassis bracket. Achieved 0.03mm strip flatness, 1.2M+ cycle life validated in production.',
    featured: true,
  },
  {
    tag: 'FRP Fabrication',
    icon: '🧱',
    title: 'Industrial Fume Duct System',
    desc: '200m acid-resistant GRP ducting for a chemical plant — 6mm laminate, vinyl ester resin.',
  },
  {
    tag: 'Injection Moulding',
    icon: '🏭',
    title: '4-Cavity Bumper Mould',
    desc: 'H13 hot-work steel, 2400-tonne press, Class A surface finish for OEM bumper fascia.',
  },
  {
    tag: 'Precision Machining',
    icon: '⚙️',
    title: 'Turbine Housing — Inconel 718',
    desc: '4-axis mill-turn, tight bore tolerances for aerospace-grade turbine assembly.',
  },
  {
    tag: 'Jigs & Fixtures',
    icon: '📐',
    title: 'Welding Fixture — Frame Assembly',
    desc: 'Modular MIG welding fixture reducing cycle time by 38% on truck frame line.',
  },
  {
    tag: 'Dies & Press Tools',
    icon: '🔩',
    title: 'Blanking Die — Stainless Disc',
    desc: 'High-speed blanking die in powder-metallurgy steel for 0.8mm SS disc, 500K cycle guarantee.',
  },
  {
    tag: 'CNC Machining',
    icon: '⚙️',
    title: 'Hydraulic Manifold Block',
    desc: 'Complex multi-port hydraulic manifold in EN24T, 4-axis CNC with cross-drilled galleries to ±0.008mm.',
  },
  {
    tag: 'FRP Fabrication',
    icon: '🧱',
    title: 'Water Treatment Tank — 15,000 Litre',
    desc: 'Hand lay-up FRP tank with vinyl ester liner for industrial water treatment facility, corrosion-rated for chlorinated water.',
  },
  {
    tag: 'Reverse Engineering',
    icon: '🔄',
    title: 'Legacy Gearbox Housing Reconstruction',
    desc: '3D scanned worn gearbox housing, full CAD reconstruction in SolidWorks, re-tooled in cast iron with updated draft angles for improved demoulding.',
  },
  {
    tag: 'Injection Moulding',
    icon: '🏭',
    title: 'Dual-Shot Trim Panel Mould',
    desc: '2-component injection mould for automotive interior trim panel — soft-touch TPE over-mould on PP substrate, 8-cavity.',
  },
  {
    tag: 'Automotive Tooling',
    icon: '🔩',
    title: 'Deep Draw Die — Fuel Tank Shell',
    desc: 'Multi-stage deep draw tooling for 1.2mm cold-rolled steel fuel tank shell — draw ratio 2.4:1, ±0.15mm profile tolerance.',
  },
  {
    tag: 'Jigs & Fixtures',
    icon: '📐',
    title: 'CMM Inspection Fixture — Suspension Arm',
    desc: 'Dedicated CMM checking fixture for cast aluminium suspension arm, 14 critical datum features, full traceability documentation.',
  },
];

export default function AllProjects() {
  return (
    <>
      <Head>
        <title>Projects — System Dies & Mould | Karachi</title>
        <meta name="description" content="Browse our portfolio of tooling, fabrication, and precision machining projects delivered across automotive, industrial, and infrastructure sectors." />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />

      <div className="proj-page-hero">
        <div className="proj-page-hero-overlay" />
        <div className="proj-page-hero-content">
          <Link href="/" className="dies-back"> Back to Home</Link>
          <div className="section-tag" style={{ marginTop: '0' }}>Our Work</div>
          <h1>Project Portfolio</h1>
          <p>A cross-section of tooling, fabrication, and precision machining projects delivered for automotive OEMs, industrial manufacturers, and infrastructure developers across Pakistan.</p>
        </div>
      </div>

      <section style={{ padding: '80px 5%', background: 'var(--off-white)' }}>
        <div className="all-projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card${p.featured ? ' featured' : ''}`}>
              <span className="bg-icon">{p.icon}</span>
              <div className="project-tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <Link href="/#contact" className="projects-view-btn">Request a Quote →</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
