import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = [
  { src: '/OurProjects/Roofing/J&P Coats-1.png', caption: 'J&P Coats Roofing - View 1' },
  { src: '/OurProjects/Roofing/J&P Coats-2.png', caption: 'J&P Coats Roofing - View 2' },
  { src: '/OurProjects/Roofing/J&P Coats-3.png', caption: 'J&P Coats Roofing - View 3' },
];

export default function FrpRoofing() {
  const [lightbox, setLightbox] = useState(null);
  const router = useRouter();

  function goToProjects() {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }

  return (
    <>
      <Head>
        <title>FRP Roof Fabrications - SDM</title>
        <meta name="description" content="FRP roof fabrication for industrial and commercial applications, engineered for weather resistance and long-term durability." />
        <meta name="keywords" content="FRP roofing Karachi, fiberglass roof fabrication Pakistan, industrial FRP roofing, GRP roof panels, weatherproof composite roofing Karachi" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />
      <div className="bf-hero">
        <div className="bf-hero-overlay" />
        <div className="bf-hero-content">
          <button onClick={goToProjects} className="dies-back"> Back to Projects</button>
          <div className="section-tag" style={{ marginTop: '0' }}>Our Projects</div>
          <h1>FRP Roof<br />Fabrications</h1>
          <p>32,000 sq. ft. FRP insulated roofing systems with 5mm panels engineered for high sunlight resistance and superior thermal cooling performance.</p>
        </div>
      </div>
      <section style={{ background: 'var(--off-white)', padding: '64px 5%' }}>
        <div className="bf-gallery">{images.map((img, i) => (
          <div key={i} className="bf-gallery-card" onClick={() => setLightbox(i)}>
            <div className="bf-gallery-img-wrap"><img src={img.src} alt={img.caption} /></div>
            <div className="bf-gallery-info"><h5>{img.caption}</h5></div>
          </div>
        ))}</div>
      </section>
      {lightbox !== null && (
        <div className="bf-lightbox" onClick={() => setLightbox(null)}>
          <button className="bf-lb-close" onClick={() => setLightbox(null)}>&#x2715;</button>
          <button className="bf-lb-prev" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox-1+images.length)%images.length); }}>&#8249;</button>
          <img src={images[lightbox].src} alt={images[lightbox].caption} onClick={e => e.stopPropagation()} />
          <p className="bf-lb-caption">{images[lightbox].caption}</p>
          <button className="bf-lb-next" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox+1)%images.length); }}>&#8250;</button>
        </div>
      )}
      <section style={{ background: 'var(--white)', padding: '72px 5%', textAlign: 'center' }}>
        <h2 className="section-title">Start Your Project</h2>
        <p style={{ color: 'var(--text-mid)', margin: '0 auto 36px', maxWidth: '520px' }}>Get in touch with our engineering team for a technical review and competitive quote.</p>
        <a href="/#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Request a Quote &#8594;</a>
      </section>
      <Footer />
    </>
  );
}
