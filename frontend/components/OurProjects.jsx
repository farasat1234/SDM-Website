import { useState, useEffect } from 'react';

const allSlides = {
  'Dies & Moulds': [
    { src: '/OurProjects/Dies & Moulds/Mould-002.png', caption: 'Casting Mould Set — Round & Trapezoidal Impression Moulds' },
    { src: '/OurProjects/Dies & Moulds/Mould-004.png', caption: 'Precision Injection Mould Tooling Components' },
    { src: '/OurProjects/Dies & Moulds/Mould-006.png', caption: 'Two-Part Injection Mould Set — Cavity & Core Plates' },
    { src: '/OurProjects/Dies & Moulds/Mould-008.png', caption: 'Two-Part Industrial Mould Set — Cavity & Core Side' },
    { src: '/OurProjects/Dies & Moulds/Mould-010.png', caption: 'Industrial Taper Mould' },
    { src: '/OurProjects/Dies & Moulds/Mould-014.png', caption: 'Industrial Foundry Precision Mould Assembly' },
    { src: '/OurProjects/Dies & Moulds/Mould-016.png', caption: 'Precision Metal Tool & Die Assembly Components' },
    { src: '/OurProjects/Dies & Moulds/Mould-018.png', caption: 'Metal Compression Mould Assembly' },
    { src: '/OurProjects/Dies & Moulds/Mould-019.png', caption: 'Precision Mould Assembly' },
    { src: '/OurProjects/Dies & Moulds/Mould-021.png', caption: 'Injection Mould Assembly Components' },
    { src: '/OurProjects/Dies & Moulds/Mould-023.png', caption: 'Precision Injection Mould Assembly' },
    { src: '/OurProjects/Dies & Moulds/Mould-026.png', caption: 'Industrial Compression Mould Set' },
    { src: '/OurProjects/Dies & Moulds/Mould-028.png', caption: 'Oval Cavity Mould — Tool Steel A2' },
    { src: '/OurProjects/Dies & Moulds/Mould-038.png', caption: 'Industrial Mould Assembly' },
  ],
  'FRP': [
    { src: '/OurProjects/FRP/Air Spoiler.png',             caption: 'Air Spoiler' },
    { src: '/OurProjects/FRP/Air Spolier..png',            caption: 'Air Spoiler Variant' },
    { src: '/OurProjects/FRP/Bumper.jpg',                  caption: 'FRP Bumper' },
    { src: '/OurProjects/FRP/Canopy-with-Ac-grill.jpg',   caption: 'Canopy with AC Grill' },
    { src: '/OurProjects/FRP/Engine Guard.png',            caption: 'Engine Guard' },
    { src: '/OurProjects/FRP/Front Grill.jpg',             caption: 'Front Grill' },
    { src: '/OurProjects/FRP/Infill Panel.jpg',            caption: 'Infill Panel' },
    { src: '/OurProjects/FRP/Outer.jpg',                   caption: 'Outer Panel' },
    { src: '/OurProjects/FRP/Roof-Panel.jpg',              caption: 'Roof Panel' },
    { src: '/OurProjects/FRP/Splash Board.png',            caption: 'Splash Board' },
    { src: '/OurProjects/FRP/FRP-001.png',                 caption: 'FRP Component 001' },
    { src: '/OurProjects/FRP/FRP-002.png',                 caption: 'FRP Component 002' },
    { src: '/OurProjects/FRP/FRP-003.png',                 caption: 'FRP Component 003' },
    { src: '/OurProjects/FRP/FRP-007.png',                 caption: 'FRP Component 007' },
    { src: '/OurProjects/FRP/FRP-008.png',                 caption: 'FRP Component 008' },
  ],
  'Composite Plastic & Hose Pipe': [
    { src: '/OurProjects/CompsitPlastic&Hosepipe/Assembly.png',                   caption: 'Assembly' },
    { src: '/OurProjects/CompsitPlastic&Hosepipe/Automotive Coolent.png',         caption: 'Automotive Coolant' },
    { src: '/OurProjects/CompsitPlastic&Hosepipe/Complet Assembly Hose Pipe.png', caption: 'Complete Assembly Hose Pipe' },
    { src: '/OurProjects/CompsitPlastic&Hosepipe/Ejector Pump Assembly.png',      caption: 'Ejector Pump Assembly' },
    { src: '/OurProjects/CompsitPlastic&Hosepipe/Hose Ejector.png',               caption: 'Hose Ejector' },
    { src: '/OurProjects/CompsitPlastic&Hosepipe/Access Panel Set.png',           caption: 'Access Panel Set' },
    { src: '/OurProjects/CompsitPlastic&Hosepipe/Nylon Spocket.png',              caption: 'Nylon Spocket' },
    { src: '/OurProjects/CompsitPlastic&Hosepipe/Vent Grill Pair.png',            caption: 'Vent Grill Pair' },
    { src: '/OurProjects/CompsitPlastic&Hosepipe/Worn Gate Rollers.png',          caption: 'Worn Gate Rollers' },
  ],
  'Fibre Cabin': [
    { src: '/OurProjects/ibre cabin/IBRE Cabin-001.png', caption: 'Fibre Cabin 001' },
    { src: '/OurProjects/ibre cabin/IBRE Cabin-002.png', caption: 'Fibre Cabin 002' },
    { src: '/OurProjects/ibre cabin/IBRE Cabin-003.png', caption: 'Fibre Cabin 003' },
  ],
  'Jigs & Fixtures': [
    { src: '/OurProjects/JIG & Fixure/Logofixture.png',      caption: 'Logo Fixture' },
    { src: '/OurProjects/JIG & Fixure/Rear Tailgate.jpg',    caption: 'Rear Tailgate' },
    { src: '/OurProjects/JIG & Fixure/CNC Fixture.png',      caption: 'CNC Fixture' },
    { src: '/OurProjects/JIG & Fixure/Fixture Assembly.png', caption: 'Fixture Assembly' },
    { src: '/OurProjects/JIG & Fixure/Jigs and Fisture.png', caption: 'Jigs and Fixture' },
    { src: '/OurProjects/JIG & Fixure/Modular Fixture.png',  caption: 'Modular Fixture' },
  ],
  'Pharma': [
    { src: '/OurProjects/PHARMA/Bi Part Sliding Fire Door.png',  caption: 'Bi-Part Sliding Fire Door' },
    { src: '/OurProjects/PHARMA/Breakaway Door Assembly.png',    caption: 'Breakaway Door Assembly' },
    { src: '/OurProjects/PHARMA/Double Swing Door.png',          caption: 'Double Swing Door' },
    { src: '/OurProjects/PHARMA/EF Rool Up Door.png',            caption: 'EF Roll Up Door' },
    { src: '/OurProjects/PHARMA/Excel SS FG Assembly.png',       caption: 'Excel SS FG Assembly' },
    { src: '/OurProjects/PHARMA/FG Single Swing Door.jpg',       caption: 'FG Single Swing Door' },
    { src: '/OurProjects/PHARMA/HS-Roll up Door.png',            caption: 'HS Roll Up Door' },
    { src: '/OurProjects/PHARMA/Hydrarol Roll Up Door.png',      caption: 'Hydrarol Roll Up Door' },
    { src: '/OurProjects/PHARMA/Sliding Fire Door Assembly.png', caption: 'Sliding Fire Door Assembly' },
    { src: '/OurProjects/PHARMA/TS Door System.png',             caption: 'TS Door System' },
  ],
  'Plastic Parts': [
    { src: '/OurProjects/Plasticpart/Battery-Tray.png',              caption: 'Battery Tray' },
    { src: '/OurProjects/Plasticpart/Belt Clip.png',                 caption: 'Belt Clip' },
    { src: '/OurProjects/Plasticpart/Bottom Cool.png',               caption: 'Bottom Cool' },
    { src: '/OurProjects/Plasticpart/Bush.png',                      caption: 'Bush' },
    { src: '/OurProjects/Plasticpart/Catch.png',                     caption: 'Catch' },
    { src: '/OurProjects/Plasticpart/Cieling Lense.png',             caption: 'Ceiling Lens' },
    { src: '/OurProjects/Plasticpart/Cup Holder.png',                caption: 'Cup Holder' },
    { src: '/OurProjects/Plasticpart/Fandle Lamp.png',               caption: 'Fandle Lamp' },
    { src: '/OurProjects/Plasticpart/Fandle.png',                    caption: 'Fandle' },
    { src: '/OurProjects/Plasticpart/Hand Grip.png',                 caption: 'Hand Grip' },
    { src: '/OurProjects/Plasticpart/Handle Grip.png',               caption: 'Handle Grip' },
    { src: '/OurProjects/Plasticpart/H-Clip.png',                    caption: 'H-Clip' },
    { src: '/OurProjects/Plasticpart/Indicator.png',                 caption: 'Indicator' },
    { src: '/OurProjects/Plasticpart/Industrial Control Knob.png',   caption: 'Industrial Control Knob' },
    { src: '/OurProjects/Plasticpart/LED Marker Lamp.png',           caption: 'LED Marker Lamp' },
    { src: '/OurProjects/Plasticpart/MF Tail Lamp Assembly.png',     caption: 'MF Tail Lamp Assembly' },
    { src: '/OurProjects/Plasticpart/Moulded Plastic Arm.png',       caption: 'Moulded Plastic Arm' },
    { src: '/OurProjects/Plasticpart/P Panel.png',                   caption: 'P Panel' },
    { src: '/OurProjects/Plasticpart/Rubber Busing.png',             caption: 'Rubber Bushing' },
    { src: '/OurProjects/Plasticpart/Sandle.png',                    caption: 'Sandle' },
    { src: '/OurProjects/Plasticpart/SB Guide.png',                  caption: 'SB Guide' },
    { src: '/OurProjects/Plasticpart/Seat Pocket.jpg',               caption: 'Seat Pocket' },
    { src: '/OurProjects/Plasticpart/Split Tube Clamp Assembly.png', caption: 'Split Tube Clamp Assembly' },
    { src: '/OurProjects/Plasticpart/Step Light Unit.png',           caption: 'Step Light Unit' },
    { src: '/OurProjects/Plasticpart/T Clip.png',                    caption: 'T Clip' },
    { src: '/OurProjects/Plasticpart/T Pipe.png',                    caption: 'T Pipe' },
    { src: '/OurProjects/Plasticpart/T.png',                         caption: 'T Component' },
    { src: '/OurProjects/Plasticpart/Textile Lense Sensor.png',      caption: 'Textile Lens Sensor' },
  ],
  'Sheet Metal': [
    { src: '/OurProjects/Sheetmetal/Automotive Hub Cover.png',        caption: 'Automotive Hub Cover' },
    { src: '/OurProjects/Sheetmetal/Automotive Underbody Shield.png', caption: 'Automotive Underbody Shield' },
    { src: '/OurProjects/Sheetmetal/Disassembled Component Kit.png',  caption: 'Disassembled Component Kit' },
    { src: '/OurProjects/Sheetmetal/Exhaust Bowl.png',                caption: 'Exhaust Bowl' },
    { src: '/OurProjects/Sheetmetal/Metal Band.png',                  caption: 'Metal Band' },
    { src: '/OurProjects/Sheetmetal/Panel Lock.png',                  caption: 'Panel Lock' },
    { src: '/OurProjects/Sheetmetal/Steel Securing Band.png',         caption: 'Steel Securing Band' },
    { src: '/OurProjects/Sheetmetal/Wheel Clamp.png',                 caption: 'Wheel Clamp' },
  ],
  'Spring Parts': [
    { src: '/OurProjects/SPRING PARTS/Industrial Wireform Component.png', caption: 'Industrial Wireform Component' },
    { src: '/OurProjects/SPRING PARTS/Wire Frame.png',                    caption: 'Wire Frame' },
    { src: '/OurProjects/SPRING PARTS/Wire Rack Base Assembly.png',       caption: 'Wire Rack Base Assembly' },
    { src: '/OurProjects/SPRING PARTS/Wireform Types.png',                caption: 'Wireform Types' },
  ],
};

const categories = Object.keys(allSlides);

export default function OurProjects() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const slides = allSlides[activeCategory] || allSlides[categories[0]];

  useEffect(() => { setActive(0); }, [activeCategory]);

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeCategory, slides.length, hovered]);

  const prev = () => setActive((active - 1 + slides.length) % slides.length);
  const next = () => setActive((active + 1) % slides.length);

  return (
    <section id="our-projects" className="ourproj-section">
      <div className="section-tag">Our Projects</div>
      <h2 className="section-title">Innovative Engineering<br />Solutions</h2>

      {/* Category Tabs — single scrollable line */}
      <div className="ourproj-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`ourproj-tab${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="ourproj-layout">
        <div className="ourproj-text">
          <div className="ourproj-desc">
            <p>Our products portfolio reflects our commitment to precision engineering, innovation, and quality manufacturing across multiple sectors including plastics, composites, and precision machining.</p>
            <p>From concept development to final production, every product is crafted with advanced technology and expert workmanship to meet the highest standards of performance and durability.</p>
            <p>We serve industries such as automotive, pharmaceuticals, packaging, construction, and engineering with timely delivery and long-term partnerships at the core of our approach.</p>
            <p>Driven by quality and built on trust, we are committed to delivering solutions that create lasting value for our customers.</p>
            <p>Every project reflects our dedication to excellence, reliability, and long-term customer success.</p>
            <p>By embracing innovation and continuous improvement, we help our customers stay ahead in a competitive market.</p>
            <p>Together, we build partnerships that inspire confidence and support sustainable growth.</p>
          </div>
        </div>

        <div className="ourproj-slider">
          <div
            className={`ourproj-slide-wrap${hovered ? ' ourproj-hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {slides.map((s, i) => (
              <div key={i} className={`ourproj-slide${i === active ? ' active' : ''}`}>
                <img src={s.src} alt={s.caption} />
                <div className="ourproj-caption">
                  <span className="ourproj-cat">{activeCategory}</span>
                  {s.caption}
                </div>
              </div>
            ))}
            <button className="ourproj-arrow ourproj-prev" onClick={prev}>&#8249;</button>
            <button className="ourproj-arrow ourproj-next" onClick={next}>&#8250;</button>
            <div className="ourproj-counter">{active + 1} / {slides.length}</div>
          </div>

          <div className="ourproj-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`ourproj-dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
