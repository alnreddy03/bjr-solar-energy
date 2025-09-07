import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerSegments from './components/CustomerSegments';
import StepsProcess from './components/StepsProcess';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SocialFloat from './components/SocialFloat';
import QuoteModal from './components/QuoteModal';
import './App.css';
import Brands from './components/Brands';

function App() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div>
      <Navbar onQuoteClick={() => setShowQuote(true)} />
      <QuoteModal show={showQuote} onClose={() => setShowQuote(false)} />

      <section id="home" style={{ paddingTop: '0px' }}>
        <ImageSlider />
      </section>
      <section id="whyus" className="color-band white" style={{ paddingTop: '0px' }}>
        <WhyChooseUs />
      </section>     
      <section id="segments" className="color-band blue" style={{ paddingTop: '0px' }}>
        <CustomerSegments />
      </section>
      <section id="steps" className="color-band green" style={{ padding: '5px' }}>
        <StepsProcess />
      </section>
       <section id="brands" className="color-band blue" style={{ paddingTop: '0px' }}>
        <Brands />
      </section>
      <section id="contact" className="color-band blue" style={{ paddingTop: '0px' }}>
        <Contact />
      </section>
      <section id="faq" className="color-band lightgreen" style={{ paddingTop: '0px' }}>
        <FAQ />
      </section>
      <Footer />
      <SocialFloat onQuoteClick={() => setShowQuote(true)} />
    </div>
  );
}

export default App;
