const steps = [
  {
    num: '01', title: 'Enquiry & Review',
    desc: 'Technical review of drawings, tolerances, materials, and production volumes.',
    icon: '📋',
    anim: 'proc-anim-doc',
    particles: ['📐', '📏'],
  },
  {
    num: '02', title: 'DFM & Quotation',
    desc: 'Design-for-manufacture analysis, risk identification, and competitive quote.',
    icon: '💡',
    anim: 'proc-anim-pulse',
    particles: ['⚙️', '🔧'],
  },
  {
    num: '03', title: 'Design & CAD',
    desc: '3D modelling, FEA simulation, and toolpath generation before cutting steel.',
    icon: '🖥️',
    anim: 'proc-anim-spin',
    particles: ['📐', '✏️'],
  },
  {
    num: '04', title: 'Manufacture & QC',
    desc: 'Machining, fabrication, heat treatment, coating, and in-process CMM inspection.',
    icon: '⚙️',
    anim: 'proc-anim-gear',
    particles: ['🔩', '🔨'],
  },
  {
    num: '05', title: 'Trial & Handover',
    desc: 'First-article inspection, trial run, PPAP documentation, and delivery.',
    icon: '✅',
    anim: 'proc-anim-check',
    particles: ['📦', '🚚'],
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="section-tag">How We Work</div>
      <h2 className="section-title">Our Engineering<br />Process</h2>
      <p className="section-sub" style={{ marginBottom: '70px', color: 'var(--text-muted)' }}>A structured, five-stage workflow that ensures quality, on-time delivery, and zero surprises from enquiry to handover.</p>
      <div className="process-steps">
        {steps.map((s) => (
          <div key={s.num} className="step">
            <div className="step-circle-wrap">
              <div className="step-ring step-ring-outer" />
              <div className="step-ring step-ring-inner" />
              <div className={`step-num ${s.anim}`}>
                <span className="step-icon">{s.icon}</span>
                <span className="step-label">{s.num}</span>
              </div>
              <span className="step-particle step-pa">{s.particles[0]}</span>
              <span className="step-particle step-pb">{s.particles[1]}</span>
            </div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
