import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/Hero/Hero';
import Features from '../sections/Features/Features';
import Stats from '../sections/Stats/Stats';
import Modules from '../sections/Modules/Modules';
import HowItWorks from '../sections/HowItWorks/HowItWorks';
import Norms from '../sections/Norms/Norms';
import Testimonials from '../sections/Testimonials/Testimonials';
import CTA from '../sections/CTA/CTA';
import './App.css';

/**
 * App — composición de la landing page.
 * Cada sección es autónoma (JSX + CSS + datos propios), lo que permite
 * añadir, quitar o reordenar apartados sin tocar el resto.
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Modules />
        <HowItWorks />
        <Norms />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
