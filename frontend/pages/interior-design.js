import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tabs = [
  { label: 'All', images: [
    { src: '/ourprojects/Interior Design/AC Condencor Cover.png',          caption: 'AC Condenser Cover' },
    { src: '/ourprojects/Interior Design/Bracket for Oxy.png',             caption: 'Bracket for Oxygen' },
    { src: '/ourprojects/Interior Design/Canopy with condensor.png',       caption: 'Canopy with Condenser' },
    { src: '/ourprojects/Interior Design/Cooler Bkt.png',                  caption: 'Cooler Bracket' },
    { src: '/ourprojects/Interior Design/First Aid Box.jpg',               caption: 'First Aid Box' },
    { src: '/ourprojects/Interior Design/Fuel Neck Inner.png',             caption: 'Fuel Neck Inner' },
    { src: '/ourprojects/Interior Design/Fuel Neck Outer.png',             caption: 'Fuel Neck Outer' },
    { src: '/ourprojects/Interior Design/Infill Panel.png',                caption: 'Infill Panel' },
    { src: '/ourprojects/Interior Design/Interior Roof Panel.png',         caption: 'Interior Roof Panel' },
    { src: '/ourprojects/Interior Design/Interiri Corner.png',             caption: 'Interior Corner' },
    { src: '/ourprojects/Interior Design/Over Cap Canopy.png',             caption: 'Over Cap Canopy' },
    { src: '/ourprojects/Interior Design/Rear Step Lock.png',              caption: 'Rear Step Lock' },
    { src: '/ourprojects/Interior Design/Roof Locker.png',                 caption: 'Roof Locker' },
    { src: '/ourprojects/Interior Design/Spare Wheel Carrier.png',         caption: 'Spare Wheel Carrier' },
    { src: '/ourprojects/Interior Design/Stowage Bkt with cup Handle.png', caption: 'Stowage Bracket with Cup Handle' },
    { src: '/ourprojects/Interior Design/Wheel Box Pair.png',              caption: 'Wheel Box Pair' },
    { src: '/ourprojects/Interior Design/wheel Box.png',                   caption: 'Wheel Box' },
  ]},
  { label: 'Panels & Trim', images: [
    { src: '/ourprojects/Interior Design/Infill Panel.png',        caption: 'Infill Panel' },
    { src: '/ourprojects/Interior Design/Interior Roof Panel.png', caption: 'Interior Roof Panel' },
    { src: '/ourprojects/Interior Design/Interiri Corner.png',     caption: 'Interior Corner' },
    { src: '/ourprojects/Interior Design/Roof Locker.png',         caption: 'Roof Locker' },
  ]},
  { label: 'Canopy & AC', images: [
    { src: '/ourprojects/Interior Design/AC Condencor Cover.png',    caption: 'AC Condenser Cover' },
    { src: '/ourprojects/Interior Design/Canopy with condensor.png', caption: 'Canopy with Condenser' },
    { src: '/ourprojects/Interior Design/Cooler Bkt.png',            caption: 'Cooler Bracket' },
    { src: '/ourprojects/Interior Design/Over Cap Canopy.png',       caption: 'Over Cap Canopy' },
  ]},
  { label: 'Brackets & Fittings', images: [
    { src: '/ourprojects/Interior Design/Bracket for Oxy.png',             caption: 'Bracket for Oxygen' },
    { src: '/ourprojects/Interior Design/Fuel Neck Inner.png',             caption: 'Fuel Neck Inner' },
    { src: '/ourprojects/Interior Design/Fuel Neck Outer.png',             caption: 'Fuel Neck Outer' },
    { src: '/ourprojects/Interior Design/Rear Step Lock.png',              caption: 'Rear Step Lock' },
    { src: '/ourprojects/Interior Design/Spare Wheel Carrier.png',         caption: 'Spare Wheel Carrier' },
    { src: '/ourprojects/Interior Design/Stowage Bkt with cup Handle.png', caption: 'Stowage Bracket with Cup Handle' },
    { src: '/ourprojects/Interior Design/Wheel Box Pair.png',              caption: 'Wheel Box Pair' },
    { src: '/ourprojects/Interior Design/wheel Box.png',                   caption: 'Wheel Box' },
    { src: '/ourprojects/Interior Design/First Aid Box.jpg',               caption: 'First Aid Box' },
  ]},
];

export default function InteriorDesign() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const images = tabs[activeTab].images;
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
      <Head><title>Interior Trim & Accessories - SDM</title><link rel="icon" href="/SDM-LOGO-white.jpg" /></Head>
      <Navbar />
      <div className="bf-hero">
        <div className="bf-hero-overlay" />
        <div className="bf-hero-content">
          <button onClick={goToProjects} className="dies-back"> Back to Projects</button>
          <div className="section-tag" style={{ marginTop: '0' }}>Our Projects</div>
          <h1>Interior Trim &<br />Accessories</h1>
          <p>High-quality FRP, plastic, and sheet metal interior components - from trim panels, canopies and AC brackets to fuel fittings, wheel boxes, and precision-moulded accessories.</p>
        </div>
      </div>
      <section style={{ background: 'var(--off-white)', padding: '64px 5%' }}>
        <div className="bf-tabs">{tabs.map((t, i) => <button key={i} className={`bf-tab${activeTab===i?' active':''}`} onClick={() => setActiveTab(i)}>{t.label}</button>)}</div>
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
