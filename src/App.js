import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
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

      <section id="home">
        <ImageSlider />
      </section>
      <section id="whyus" className="color-band white">
        <WhyChooseUs />
      </section>  
      <section id="pricing" className="color-band lightgreen">
        <Pricing />
      </section>   
      <section id="segments" className="color-band blue">
        <CustomerSegments />
      </section>
      <section id="steps" className="color-band green"  >
        <StepsProcess />
      </section>
       <section id="brands" className="color-band blue">
        <Brands />
      </section>
      <section id="contact" className="color-band blue">
        <Contact />
      </section>
      <section id="faq" className="color-band lightgreen">
        <FAQ />
      </section>
      <Footer />
      <SocialFloat onQuoteClick={() => setShowQuote(true)} />
    </div>
  );
}

export default App;
