export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/SDM-LOGO-white.jpg" alt="SDM System Dies and Mould" />
            <span className="footer-logo-text">System Dies and Moulds</span>
          </div>
          <p>Full-service mechanical engineering firm specialising in dies, moulds, FRP fabrication, and precision machining for industrial and automotive clients across Pakistan and the Gulf region.</p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#services">Dies &amp; Press Tools</a></li>
            <li><a href="#services">Injection Moulds</a></li>
            <li><a href="#services">FRP Fabrication</a></li>
            <li><a href="#services">CNC Machining</a></li>
            <li><a href="#services">Jigs &amp; Fixtures</a></li>
            <li><a href="#services">Reverse Engineering</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#capabilities">Capabilities</a></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Industries</h5>
          <ul>
            <li><a href="#contact">Automotive</a></li>
            <li><a href="#contact">Infrastructure</a></li>
            <li><a href="#contact">Pharma</a></li>
            <li><a href="#contact">Consumer Products</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &#169; 2026 System Dies and Mould (SDM). All rights reserved. |{' '}
          <a
            href="https://www.google.com/maps/search/?api=1&query=C-47%2C+SITE%2C+Super+Highway%2C+Karachi%2C+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
          >
            C-47, SITE, Super Highway, Karachi
          </a>
        </p>
        <p>Made by SDMDev in Karachi Pakistan</p>
      </div>
    </footer>
  );
}
