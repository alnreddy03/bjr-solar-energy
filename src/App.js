import React from 'react';
import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Partners from './components/Partners';
import Contact from './components/Contact';
import ImageSlider from './components/ImageSlider'; // We'll use the slider as suggested

function App() {
  return (
    <div style={{background:'#f6f8fa'}}>
      {/* Logo Banner */}
      <div className="logo-bar" style={{
        textAlign: 'center', 
        background:'#fff7e6',
        padding: '28px 0 8px 0',
        boxShadow:'0 2px 12px #0001'
      }}>
        <img 
          src="/images/img1.jpg"  // Corrected image path here
          alt="BJRI Solar Energy Logo"
          style={{
            height: '80px',
            marginBottom: '12px'
          }}
        />
        <h1 style={{color:'#c47a29', margin:'0', fontSize:'2.3rem', letterSpacing:'2px'}}>
          BJRI Solar Energy Systems
        </h1>
      </div>
      
      {/* Image Slider */}
      <ImageSlider />

      {/* Main Section Bands */}
      <div id="home" className="section-band" style={{ background:'#e9ded3', padding:'40px 0'}}>
        <div className="content-block" style={{maxWidth:'1000px', margin:'0 auto'}}>
          <Home />
        </div>
      </div>

      <div id="services" className="section-band" style={{background:'#fffbe7', padding:'36px 0'}}>
        <div className="content-block" style={{maxWidth:'1000px', margin:'0 auto'}}>
          <Services />
        </div>
      </div>

      <div id="pricing" className="section-band" style={{background:'#f5e4c3',padding:'36px 0'}}>
        <div className="content-block" style={{maxWidth:'1000px', margin:'0 auto'}}>
          <Pricing />
        </div>
      </div>

      <div id="partners" className="section-band" style={{background:'#e0f7fa',padding:'36px 0'}}>
        <div className="content-block" style={{maxWidth:'1000px', margin:'0 auto'}}>
          <Partners />
        </div>
      </div>

      <div id="contact" className="contact-section" style={{
        background:'#d7c4a3', 
        color:'#2c160b',
        padding: '28px 32px',
        borderRadius: '10px',
        margin: '40px auto',
        maxWidth: '750px',
        boxShadow: '0 1px 10px #a67c5299',
        fontSize: '1.17rem'
      }}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
