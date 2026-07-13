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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/SDM-LOGO-white.jpg" />
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

