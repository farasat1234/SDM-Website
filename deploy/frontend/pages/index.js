import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Services from '../components/Services';
import About from '../components/About';
import Capabilities from '../components/Capabilities';
import Projects from '../components/Projects';
import Facilities from '../components/Facilities';
import OurProjects from '../components/OurProjects';
import Process from '../components/Process';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.service-card, .cap-item, .project-card, .step, .fac-projects-grid .project-card').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>SDM - System Dies &amp; Mould | Karachi, Pakistan</title>
        <meta name="description" content="System Dies and Mould (SDM) - ISO 9001:2015 certified manufacturer of dies, press tools, injection moulds, FRP fabrication, and CNC precision machining. Based in Karachi, Pakistan." />
        <meta name="keywords" content="System Dies and Mould, SDM Karachi, dies and moulds Pakistan, press tools manufacturer, injection mould manufacturer Karachi, blow mould manufacturer, FRP fabrication Pakistan, GRP fabrication, CNC precision machining Karachi, jigs and fixtures manufacturer, reverse engineering Pakistan, sheet metal stamping dies, progressive dies manufacturer, tool and die maker Karachi, ISO 9001 manufacturer Pakistan, precision engineering Karachi, ev vehicle fabrication Pakistan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://systemdiesandmoulds.com/#organization',
              name: 'System Dies and Mould (SDM)',
              alternateName: 'SDM',
              url: 'https://systemdiesandmoulds.com',
              logo: 'https://systemdiesandmoulds.com/SDM-LOGO-white.jpg',
              image: 'https://systemdiesandmoulds.com/SDM-LOGO-white.jpg',
              description: 'ISO 9001:2015 certified manufacturer of dies, press tools, injection moulds, FRP fabrication, and CNC precision machining based in Karachi, Pakistan.',
              telephone: '+92-333-5499004',
              email: 'c47.sdm@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C-47, SITE, Super Highway',
                addressLocality: 'Karachi',
                addressCountry: 'PK',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '08:00',
                closes: '18:00',
              },
              sameAs: ['https://wa.me/923335499004'],
              areaServed: ['Pakistan', 'Gulf region'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Manufacturing Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dies & Press Tools' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Injection & Blow Moulds' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FRP / GRP Fabrication' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CNC Precision Machining' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jigs & Fixtures' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reverse Engineering' } },
                ],
              },
            }),
          }}
        />
      </Head>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Capabilities />
      <Facilities />
      <OurProjects />
      <Projects />
      <Process />
      <Clients />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
}

