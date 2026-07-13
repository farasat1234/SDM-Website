import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav>
      <div className="nav-logo">
        <img src="/SDM-LOGO-white.jpg" alt="SDM System Dies and Mould" />
        <span className="nav-logo-text">System Dies and Moulds</span>
      </div>

      {/* Desktop menu */}
      <ul className="nav-links">
        <li><a href="/#services">Services</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#capabilities">Capabilities</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#facilities">Facilities</a></li>
        <li><a href="/#contact" className="nav-cta">Get Quote</a></li>
      </ul>

      {/* Hamburger button */}
      <button
        className={`nav-burger${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-mobile-overlay" onClick={close}>
          <ul className="nav-mobile" onClick={e => e.stopPropagation()}>
            <li><a href="/#services" onClick={close}>Services</a></li>
            <li><a href="/#about" onClick={close}>About</a></li>
            <li><a href="/#capabilities" onClick={close}>Capabilities</a></li>
            <li><a href="/#projects" onClick={close}>Projects</a></li>
            <li><a href="/#facilities" onClick={close}>Facilities</a></li>
            <li><a href="/#contact" onClick={close} className="nav-mobile-cta">Get Quote</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
