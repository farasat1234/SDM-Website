const logos = [
  { src: '/clientlogo/Toyota.JPG', alt: 'Toyota' },
  { src: '/clientlogo/hino.jpg', alt: 'Hino' },
  { src: '/clientlogo/Procon.JPG', alt: 'Procon' },
  { src: '/clientlogo/Aone.JPG', alt: 'A-One' },
  { src: '/clientlogo/AgreAuto.JPG', alt: 'Agre Auto' },
  { src: '/clientlogo/Coats.JPG', alt: 'Coats' },
  { src: '/clientlogo/Nadra.jpg', alt: 'NADRA' },
  { src: '/clientlogo/SSGC.png', alt: 'SSGC' },
  { src: '/clientlogo/6.JPG', alt: 'Client' },
  { src: '/clientlogo/7.JPG', alt: 'Client' },
  { src: '/clientlogo/8.JPG', alt: 'Client' },
  { src: '/clientlogo/9.JPG', alt: 'Client' },
  { src: '/clientlogo/10.JPG', alt: 'Client' },
  { src: '/clientlogo/11.JPG', alt: 'Client' },
  { src: '/clientlogo/12.JPG', alt: 'Client' },
  { src: '/clientlogo/13.JPG', alt: 'Client' },
  { src: '/clientlogo/14.JPG', alt: 'Client' },
  { src: '/clientlogo/15.JPG', alt: 'Client' },
  { src: '/clientlogo/16.JPG', alt: 'Client' },
  { src: '/clientlogo/17.JPG', alt: 'Client' },
];

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-overlay" />
      <div className="clients-inner">
        <div className="section-tag clients-tag">Trusted By</div>
        <h2 className="clients-title">Our Clients</h2>
        <div className="clients-track-wrap">
          <div className="clients-track">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="client-logo-frame">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
