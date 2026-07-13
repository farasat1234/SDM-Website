import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tabs = [
  {
    label: 'All',
    images: [
      { src: '/ourprojects/EV Rikshaw/EV Rikshaw.png',                                           caption: 'EV Rickshaw' },
      { src: '/ourprojects/EV Rikshaw/EV-Rickshaw.png',                                          caption: 'EV Rickshaw - Side View' },
      { src: '/ourprojects/EV Rikshaw/EV Tuk Tuk Front.png',                                     caption: 'EV Tuk Tuk - Front' },
      { src: '/ourprojects/EV Rikshaw/EV Tuk Tuk Rear.png',                                      caption: 'EV Tuk Tuk - Rear' },
      { src: '/ourprojects/EV Rikshaw/EV Tuk Tuk Side.png',                                      caption: 'EV Tuk Tuk - Side' },
      { src: '/ourprojects/EV Rikshaw/Gloss White.png',                                          caption: 'Gloss White Finish' },
      { src: '/ourprojects/EV Rikshaw/EV Pessenger.png',                                         caption: 'EV Passenger View' },
      { src: '/ourprojects/EV Rikshaw/Fiber Glass Vehicle.png',                                  caption: 'Fiber Glass Vehicle' },
      { src: '/ourprojects/EV Rikshaw/Chassis Assembly.png',                                     caption: 'Chassis Assembly' },
      { src: '/ourprojects/EV Rikshaw/Chassis and Body Work.png',                                caption: 'Chassis & Body Work' },
      { src: '/ourprojects/EV Rikshaw/Mobile Workstation Chassis.png',                           caption: 'Mobile Workstation Chassis' },
      { src: '/ourprojects/EV Rikshaw/Front wheel View.png',                                     caption: 'Front Wheel View' },
      { src: '/ourprojects/EV Rikshaw/Assembly Stage.png',                                       caption: 'Assembly Stage' },
      { src: '/ourprojects/EV Rikshaw/Assembly View.png',                                        caption: 'Assembly View' },
      { src: '/ourprojects/EV Rikshaw/Vehicle Assembly Status.png',                              caption: 'Vehicle Assembly Status' },
      { src: '/ourprojects/EV Rikshaw/Interior Cabin Panel Assembly.png',                        caption: 'Interior Cabin Panel Assembly' },
      { src: '/ourprojects/EV Rikshaw/Interior of EV.png',                                      caption: 'Interior of EV' },
      { src: '/ourprojects/EV Rikshaw/EV Interior.png',                                         caption: 'EV Interior' },
      { src: '/ourprojects/EV Rikshaw/Fiber Glass Interior.png',                                 caption: 'Fiber Glass Interior' },
      { src: '/ourprojects/EV Rikshaw/Dash Board & Cockpit.png',                                caption: 'Dashboard & Cockpit' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/ASSEMBLY FRONT VIEW W FRAME.png',             caption: '3D - Assembly Front View w Frame' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/ASSEMBLY ISO VIEW.png',                       caption: '3D - Assembly ISO View' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/ASSEMBLY ISO.png',                            caption: '3D - Assembly ISO' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/BACK ORIGNAL VIEW.png',                       caption: '3D - Back Original View' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/CHASSIS FRAME.png',                           caption: '3D - Chassis Frame' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/FLOOR SKELETON 3 SEATER.png',                 caption: '3D - Floor Skeleton 3 Seater' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/FLOOR SKELETON.png',                          caption: '3D - Floor Skeleton' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/ISOMETRIC.jpg',                               caption: '3D - Isometric View' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/PASSENGER SEAT SKELETON.png',                 caption: '3D - Passenger Seat Skeleton' },
    ],
  },
  {
    label: 'Final Look',
    images: [
      { src: '/ourprojects/EV Rikshaw/EV Rikshaw.png',        caption: 'EV Rickshaw' },
      { src: '/ourprojects/EV Rikshaw/EV-Rickshaw.png',       caption: 'EV Rickshaw - Side View' },
      { src: '/ourprojects/EV Rikshaw/EV Tuk Tuk Front.png',  caption: 'EV Tuk Tuk - Front' },
      { src: '/ourprojects/EV Rikshaw/EV Tuk Tuk Rear.png',   caption: 'EV Tuk Tuk - Rear' },
      { src: '/ourprojects/EV Rikshaw/EV Tuk Tuk Side.png',   caption: 'EV Tuk Tuk - Side' },
      { src: '/ourprojects/EV Rikshaw/Gloss White.png',       caption: 'Gloss White Finish' },
      { src: '/ourprojects/EV Rikshaw/EV Pessenger.png',      caption: 'EV Passenger View' },
      { src: '/ourprojects/EV Rikshaw/Fiber Glass Vehicle.png', caption: 'Fiber Glass Vehicle' },
    ],
  },
  {
    label: 'Chassis & Body',
    images: [
      { src: '/ourprojects/EV Rikshaw/Chassis Assembly.png',          caption: 'Chassis Assembly' },
      { src: '/ourprojects/EV Rikshaw/Chassis and Body Work.png',     caption: 'Chassis & Body Work' },
      { src: '/ourprojects/EV Rikshaw/Mobile Workstation Chassis.png', caption: 'Mobile Workstation Chassis' },
      { src: '/ourprojects/EV Rikshaw/Front wheel View.png',          caption: 'Front Wheel View' },
      { src: '/ourprojects/EV Rikshaw/Assembly Stage.png',            caption: 'Assembly Stage' },
      { src: '/ourprojects/EV Rikshaw/Assembly View.png',             caption: 'Assembly View' },
      { src: '/ourprojects/EV Rikshaw/Vehicle Assembly Status.png',   caption: 'Vehicle Assembly Status' },
    ],
  },
  {
    label: 'Interior',
    images: [
      { src: '/ourprojects/EV Rikshaw/Interior Cabin Panel Assembly.png', caption: 'Interior Cabin Panel Assembly' },
      { src: '/ourprojects/EV Rikshaw/Interior of EV.png',               caption: 'Interior of EV' },
      { src: '/ourprojects/EV Rikshaw/EV Interior.png',                  caption: 'EV Interior' },
      { src: '/ourprojects/EV Rikshaw/Fiber Glass Interior.png',          caption: 'Fiber Glass Interior' },
      { src: '/ourprojects/EV Rikshaw/Dash Board & Cockpit.png',         caption: 'Dashboard & Cockpit' },
    ],
  },
  {
    label: '3D Drawings',
    images: [
      { src: '/ourprojects/EV Rikshaw/3D Drawings/ASSEMBLY FRONT VIEW W FRAME.png', caption: 'Assembly Front View w Frame' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/ASSEMBLY ISO VIEW.png',            caption: 'Assembly ISO View' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/ASSEMBLY ISO.png',                caption: 'Assembly ISO' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/BACK ORIGNAL VIEW.png',           caption: 'Back Original View' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/CHASSIS FRAME.png',               caption: 'Chassis Frame' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/FLOOR SKELETON 3 SEATER.png',     caption: 'Floor Skeleton 3 Seater' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/FLOOR SKELETON.png',              caption: 'Floor Skeleton' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/ISOMETRIC.jpg',                   caption: 'Isometric View' },
      { src: '/ourprojects/EV Rikshaw/3D Drawings/PASSENGER SEAT SKELETON.png',     caption: 'Passenger Seat Skeleton' },
    ],
  },
];

export default function EvRickshaw() {
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
      <Head>
        <title>EV Rickshaw - Complete Design, R&amp;D &amp; Prototype | SDM</title>
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />
      <div className="bf-hero">
        <div className="bf-hero-overlay" />
        <div className="bf-hero-content">
          <button onClick={goToProjects} className="dies-back"> Back to Projects</button>
          <div className="section-tag" style={{ marginTop: '0' }}>Our Projects</div>
          <h1>EV Rickshaw<br />Complete Design,<br />R&amp;D &amp; Prototype</h1>
          <p>Designed and manufactured a complete EV rickshaw prototype from concept to final product — covering structural engineering, body fabrication, and electric drivetrain integration.</p>
        </div>
      </div>
      <section style={{ background: 'var(--off-white)', padding: '64px 5%' }}>
        <div className="bf-tabs">
          {tabs.map((t, i) => (
            <button key={i} className={`bf-tab${activeTab === i ? ' active' : ''}`} onClick={() => { setActiveTab(i); setLightbox(null); }}>{t.label}</button>
          ))}
        </div>
        <div className="bf-gallery">
          {images.map((img, i) => (
            <div key={i} className="bf-gallery-card" onClick={() => setLightbox(i)}>
              <div className="bf-gallery-img-wrap"><img src={img.src} alt={img.caption} /></div>
              <div className="bf-gallery-info"><h5>{img.caption}</h5></div>
            </div>
          ))}
        </div>
      </section>
      {lightbox !== null && (
        <div className="bf-lightbox" onClick={() => setLightbox(null)}>
          <button className="bf-lb-close" onClick={() => setLightbox(null)}>&#x2715;</button>
          <button className="bf-lb-prev" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}>&#8249;</button>
          <img src={images[lightbox].src} alt={images[lightbox].caption} onClick={e => e.stopPropagation()} />
          <p className="bf-lb-caption">{images[lightbox].caption}</p>
          <button className="bf-lb-next" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}>&#8250;</button>
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
