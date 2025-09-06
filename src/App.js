import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerSegments from './components/CustomerSegments';
import StepsProcess from './components/StepsProcess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SocialFloat from './components/SocialFloat';
import './App.css';
import QuoteModal from './components/QuoteModal';

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
      <section id="segments" className="color-band blue">
        <CustomerSegments />
      </section>
      <section id="steps" className="color-band green">
        <StepsProcess />
      </section>
      <section id="testimonials" className="color-band blue">
        <Testimonials />
      </section>
      <section id="faq" className="color-band green">
        <FAQ />
      </section>
      <Footer />
      <SocialFloat />
    </div>
  );
}

export default App;
