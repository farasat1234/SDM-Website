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
            <li><a href="#contact">Chemical &amp; Process</a></li>
            <li><a href="#contact">Oil &amp; Gas</a></li>
            <li><a href="#contact">Consumer Products</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&#169; 2026 System Dies and Mould (SDM). All rights reserved. | C-47, SITE, Super Highway, Karachi</p>
        <p>Made with <span>&#9632;</span> in Karachi, Pakistan</p>
      </div>
    </footer>
  );
}
