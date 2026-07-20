import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tabs = [
  { label: 'All', images: [
    { src: '/OurProjects/Ev GOLF CART/Final Product/EV Buggy.png',                        caption: 'EV Buggy' },
    { src: '/OurProjects/Ev GOLF CART/Final Product/Electric Shuttle.png',                 caption: 'Electric Shuttle' },
    { src: '/OurProjects/Ev GOLF CART/Seatmaking/Golf Cart Seats.png',                    caption: 'Golf Cart Seats' },
    { src: '/OurProjects/Ev GOLF CART/Seatmaking/Golf Cart Rear Seat.png',                caption: 'Golf Cart Rear Seat' },
    { src: '/OurProjects/Ev GOLF CART/Seatmaking/Desk Component.png',                     caption: 'Desk Component' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Shell.png',                   caption: 'EV Shell' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV SS Pipe Frame.png',           caption: 'SS Pipe Frame' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Hull Section Assembly.png',   caption: 'Hull Section Assembly' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Main Roof.png',               caption: 'Main Roof' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Roof.png',                    caption: 'Roof' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Cabin.png',                   caption: 'EV Cabin' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Interior Long Panel.png',     caption: 'Interior Long Panel' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Inner View.png',              caption: 'Inner View' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Embossed Panel.png',          caption: 'Embossed Panel' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Rear Pillar.png',             caption: 'Rear Pillar' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Rear Side Piller.png',        caption: 'Rear Side Pillar' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Side Rail Alumunium.png',     caption: 'Side Rail Aluminium' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Steel Frame Seat.png',        caption: 'Steel Frame Seat' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Steel Frame Seat Detail.png', caption: 'Steel Frame Seat Detail' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/Box Seat Base Rear.jpg',         caption: 'Box Seat Base Rear' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/Box Seat Middle.png',            caption: 'Box Seat Middle' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/Box Seat Rear Base.png',         caption: 'Box Seat Rear Base' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/Bumper Rear View.png',           caption: 'Bumper Rear View' },
  ]},
  { label: 'Final Product', images: [
    { src: '/OurProjects/Ev GOLF CART/Final Product/EV Buggy.png',        caption: 'EV Buggy' },
    { src: '/OurProjects/Ev GOLF CART/Final Product/Electric Shuttle.png', caption: 'Electric Shuttle' },
  ]},
  { label: 'Seat Making', images: [
    { src: '/OurProjects/Ev GOLF CART/Seatmaking/Golf Cart Seats.png',     caption: 'Golf Cart Seats' },
    { src: '/OurProjects/Ev GOLF CART/Seatmaking/Golf Cart Rear Seat.png', caption: 'Golf Cart Rear Seat' },
    { src: '/OurProjects/Ev GOLF CART/Seatmaking/Desk Component.png',      caption: 'Desk Component' },
  ]},
  { label: 'Parts Fabrication', images: [
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Shell.png',                   caption: 'EV Shell' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV SS Pipe Frame.png',           caption: 'SS Pipe Frame' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Hull Section Assembly.png',   caption: 'Hull Section Assembly' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Main Roof.png',               caption: 'Main Roof' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Roof.png',                    caption: 'Roof' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Cabin.png',                   caption: 'EV Cabin' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Interior Long Panel.png',     caption: 'Interior Long Panel' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Inner View.png',              caption: 'Inner View' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Embossed Panel.png',          caption: 'Embossed Panel' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Rear Pillar.png',             caption: 'Rear Pillar' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Rear Side Piller.png',        caption: 'Rear Side Pillar' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Side Rail Alumunium.png',     caption: 'Side Rail Aluminium' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Steel Frame Seat.png',        caption: 'Steel Frame Seat' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/EV Steel Frame Seat Detail.png', caption: 'Steel Frame Seat Detail' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/Box Seat Base Rear.jpg',         caption: 'Box Seat Base Rear' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/Box Seat Middle.png',            caption: 'Box Seat Middle' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/Box Seat Rear Base.png',         caption: 'Box Seat Rear Base' },
    { src: '/OurProjects/Ev GOLF CART/parts fabrications/Bumper Rear View.png',           caption: 'Bumper Rear View' },
  ]},
];

export default function EvGolfCart() {
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
        <title>EV Golf Cart - Design & Prototype | SDM</title>
        <meta name="description" content="Design, fabrication, and prototyping of electric golf carts and shuttle buggies, including seating, roofing, and structural components." />
        <meta name="keywords" content="EV golf cart manufacturer Pakistan, electric golf cart design Karachi, EV buggy fabrication, electric shuttle manufacturer, golf cart body fabrication Karachi" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
      </Head>
      <Navbar />
      <div className="bf-hero">
        <div className="bf-hero-overlay" />
        <div className="bf-hero-content">
          <button onClick={goToProjects} className="dies-back"> Back to Projects</button>
          <div className="section-tag" style={{ marginTop: '0' }}>Our Projects</div>
          <h1>EV Golf Cart<br />Innovative Engineering<br />Solutions</h1>
          <p>Complete design, R&D, and prototype development - from structural SS pipe frames and FRP body panels to custom seat fabrication and final assembly for mass production.</p>
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
