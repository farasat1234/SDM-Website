import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tabs = [
  {
    label: 'All',
    images: [
      { src: '/OurProjects/BODY FABRICATION/Full Body Side View.png',                                        caption: 'Full Body' },
      { src: '/OurProjects/BODY FABRICATION/Finallook/Different View.png',                         caption: 'Different View' },
      { src: '/OurProjects/BODY FABRICATION/Finallook/Front and Back View.png',                    caption: 'Front & Back View' },
      { src: '/OurProjects/BODY FABRICATION/Finallook/Right and Left View.png',                    caption: 'Right & Left View' },
      { src: '/OurProjects/BODY FABRICATION/Finallook/Side View.png',                              caption: 'Side View' },
      { src: '/OurProjects/BODY FABRICATION/Chassis & Cabin Skel. Assy/Front View.png',            caption: 'Chassis - Front View' },
      { src: '/OurProjects/BODY FABRICATION/Chassis & Cabin Skel. Assy/Top View.png',              caption: 'Chassis - Top View' },
      { src: '/OurProjects/BODY FABRICATION/TUBULARSTRUCTURE/Tublar Structure.png',                caption: 'Tubular Structure' },
      { src: '/OurProjects/BODY FABRICATION/TUBULARSTRUCTURE/Front View.png',                      caption: 'Tubular - Front View' },
      { src: '/OurProjects/BODY FABRICATION/TUBULARSTRUCTURE/Top View.png',                        caption: 'Tubular - Top View' },
      { src: '/OurProjects/BODY FABRICATION/Int Panel Assy/Conversion Body.png',                   caption: 'Conversion Body' },
      { src: '/OurProjects/BODY FABRICATION/Int Panel Assy/Internal Assembly Parts.png',           caption: 'Internal Assembly Parts' },
      { src: '/OurProjects/BODY FABRICATION/Int Panel Assy/Internal Chassis Assembly.png',         caption: 'Internal Chassis Assembly' },
      { src: '/OurProjects/BODY FABRICATION/Int Panel Assy/Internal Panel Assembly.png',           caption: 'Internal Panel Assembly' },
      { src: '/OurProjects/BODY FABRICATION/Int Paneling/Back Panel.png',                          caption: 'Back Panel' },
      { src: '/OurProjects/BODY FABRICATION/Int Paneling/Ceiling Panel.png',                       caption: 'Ceiling Panel' },
      { src: '/OurProjects/BODY FABRICATION/Int Paneling/In Front Panel.png',                      caption: 'Front Panel' },
      { src: '/OurProjects/BODY FABRICATION/Int Paneling/LH-RH Panel.png',                        caption: 'LH-RH Panel' },
      { src: '/OurProjects/BODY FABRICATION/Int Paneling/PVC Floor.png',                           caption: 'PVC Floor' },
      { src: '/OurProjects/BODY FABRICATION/LED Ltg Eff/LED Light Effect-1.png',                   caption: 'LED Lighting Effect 1' },
      { src: '/OurProjects/BODY FABRICATION/LED Ltg Eff/LED Light Effect-2.png',                   caption: 'LED Lighting Effect 2' },
      { src: '/OurProjects/BODY FABRICATION/Extensions/chasis ext/Extended.png',                   caption: 'Chassis Extended' },
      { src: '/OurProjects/BODY FABRICATION/Extensions/sparewheelandexuase/EX Pipe Exten.png',     caption: 'Exhaust Pipe Extension' },
      { src: '/OurProjects/BODY FABRICATION/Extensions/sparewheelandexuase/Spare Wheel Reloc.png', caption: 'Spare Wheel Relocation' },
      { src: '/OurProjects/BODY FABRICATION/LOADBEARING/leafspringchanged/Leaf Spring Rechange.png', caption: 'Leaf Spring Rechange' },
      { src: '/OurProjects/BODY FABRICATION/AC Comp Insul/AC Comp Insu.png',                       caption: 'AC Compressor Insulation' },
      { src: '/OurProjects/BODY FABRICATION/seatmount/Seat Mount.png',                             caption: 'Seat Mount' },
    ],
  },
  {
    label: 'Final Look',
    images: [
      { src: '/OurProjects/BODY FABRICATION/Full Body Side View.png',                     caption: 'Full Body' },
      { src: '/OurProjects/BODY FABRICATION/Finallook/Different View.png',      caption: 'Different View' },
      { src: '/OurProjects/BODY FABRICATION/Finallook/Front and Back View.png', caption: 'Front & Back View' },
      { src: '/OurProjects/BODY FABRICATION/Finallook/Right and Left View.png', caption: 'Right & Left View' },
      { src: '/OurProjects/BODY FABRICATION/Finallook/Side View.png',           caption: 'Side View' },
    ],
  },
  {
    label: 'Chassis & Cabin',
    images: [
      { src: '/OurProjects/BODY FABRICATION/Chassis & Cabin Skel. Assy/Front View.png', caption: 'Chassis - Front View' },
      { src: '/OurProjects/BODY FABRICATION/Chassis & Cabin Skel. Assy/Top View.png',   caption: 'Chassis - Top View' },
    ],
  },
  {
    label: 'Tubular Structure',
    images: [
      { src: '/OurProjects/BODY FABRICATION/TUBULARSTRUCTURE/Tublar Structure.png', caption: 'Tubular Structure' },
      { src: '/OurProjects/BODY FABRICATION/TUBULARSTRUCTURE/Front View.png',       caption: 'Front View' },
      { src: '/OurProjects/BODY FABRICATION/TUBULARSTRUCTURE/Top View.png',         caption: 'Top View' },
    ],
  },
  {
    label: 'Interior Panel',
    images: [
      { src: '/OurProjects/BODY FABRICATION/Int Panel Assy/Conversion Body.png',           caption: 'Conversion Body' },
      { src: '/OurProjects/BODY FABRICATION/Int Panel Assy/Internal Assembly Parts.png',   caption: 'Internal Assembly Parts' },
      { src: '/OurProjects/BODY FABRICATION/Int Panel Assy/Internal Chassis Assembly.png', caption: 'Internal Chassis Assembly' },
      { src: '/OurProjects/BODY FABRICATION/Int Panel Assy/Internal Panel Assembly.png',   caption: 'Internal Panel Assembly' },
      { src: '/OurProjects/BODY FABRICATION/Int Paneling/Back Panel.png',                  caption: 'Back Panel' },
      { src: '/OurProjects/BODY FABRICATION/Int Paneling/Ceiling Panel.png',               caption: 'Ceiling Panel' },
      { src: '/OurProjects/BODY FABRICATION/Int Paneling/In Front Panel.png',              caption: 'Front Panel' },
      { src: '/OurProjects/BODY FABRICATION/Int Paneling/LH-RH Panel.png',                caption: 'LH-RH Panel' },
      { src: '/OurProjects/BODY FABRICATION/Int Paneling/PVC Floor.png',                   caption: 'PVC Floor' },
    ],
  },
  {
    label: 'LED Lighting',
    images: [
      { src: '/OurProjects/BODY FABRICATION/LED Ltg Eff/LED Light Effect-1.png', caption: 'LED Lighting Effect 1' },
      { src: '/OurProjects/BODY FABRICATION/LED Ltg Eff/LED Light Effect-2.png', caption: 'LED Lighting Effect 2' },
    ],
  },
  {
    label: 'Extensions',
    images: [
      { src: '/OurProjects/BODY FABRICATION/Extensions/chasis ext/Extended.png',                   caption: 'Chassis Extended' },
      { src: '/OurProjects/BODY FABRICATION/Extensions/sparewheelandexuase/EX Pipe Exten.png',     caption: 'Exhaust Pipe Extension' },
      { src: '/OurProjects/BODY FABRICATION/Extensions/sparewheelandexuase/Spare Wheel Reloc.png', caption: 'Spare Wheel Relocation' },
    ],
  },
  {
    label: 'Load Bearing',
    images: [
      { src: '/OurProjects/BODY FABRICATION/LOADBEARING/leafspringchanged/Leaf Spring Rechange.png', caption: 'Leaf Spring Rechange' },
    ],
  },
  {
    label: 'AC & Seat',
    images: [
      { src: '/OurProjects/BODY FABRICATION/AC Comp Insul/AC Comp Insu.png', caption: 'AC Compressor Insulation' },
      { src: '/OurProjects/BODY FABRICATION/seatmount/Seat Mount.png',       caption: 'Seat Mount' },
    ],
  },
];

export default function BodyFabrication() {
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
        <title>Body Fabrication & Interior Customization - SDM</title>
        <meta name="description" content="Custom body fabrication and interior customization for automotive and specialty vehicles, engineered for durability and precision fit." />
        <meta name="keywords" content="body fabrication Karachi, vehicle body fabrication Pakistan, interior customization, custom vehicle fabrication, automotive body shop Karachi, specialty vehicle body building" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />
      <div className="bf-hero">
        <div className="bf-hero-overlay" />
        <div className="bf-hero-content">
          <button onClick={goToProjects} className="dies-back"> Back to Projects</button>
          <div className="section-tag" style={{ marginTop: '0' }}>Our Projects</div>
          <h1>Innovative Engineering<br />Solutions</h1>
          <p>Custom-built vehicle body fabrication and interior solutions - from structural chassis and tubular frames to premium interior fit-outs and LED lighting systems.</p>
        </div>
      </div>
      <section style={{ background: 'var(--off-white)', padding: '64px 5%' }}>
        <div className="bf-tabs">
          {tabs.map((t, i) => (
            <button key={i} className={`bf-tab${activeTab === i ? ' active' : ''}`} onClick={() => setActiveTab(i)}>{t.label}</button>
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
