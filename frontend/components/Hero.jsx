export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-content">

        <h1>Dies. Moulds.<br /><em>FRP.</em> Built<br />Precise.</h1>
        <p>
          Delivering high-performance tooling, composite structures, and precision-engineered
          components for automotive, industrial, and infrastructure sectors since 2000.
          Based at SITE, Karachi — serving all around the Pakistan.
        </p>
        <div className="hero-btns">
          <a href="#services" className="btn-primary">Explore Services</a>
          <a href="#contact" className="btn-outline">Request a Quote</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">25+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat">
          <div className="stat-num">1000+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="stat">
          <div className="stat-num">80%</div>
          <div className="stat-label">Client Retention</div>
        </div>
      </div>
    </section>
  );
}
