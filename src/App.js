import React from 'react';
import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Partners from './components/Partners';
import Contact from './components/Contact';
import ImageSlider from './components/ImageSlider'; 
import bjr from './assets/images/img1.png';

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
                  src={bjr}
                  width="5%"
                  height="2%"
                  loading="lazy"
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
        <a
  href="https://wa.me/918886092333"
  className="whatsapp_float"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    width: "60px",
    height: "60px",
    bottom: "40px",
    right: "40px",
    backgroundColor: "#25d366",
    color: "#FFF",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "30px",
    boxShadow: "2px 2px 3px #999",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
>
  <i className="fa fa-whatsapp"></i>
</a>
<a
  href="https://wa.me/918886092333?text=Hello%2C%20I%20have%20a%20question%20about%20your%20portfolio."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    width: "60px",
    height: "60px",
    bottom: "110px",
    right: "40px",
    backgroundColor: "#444",
    color: "#FFF",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "30px",
    boxShadow: "2px 2px 3px #999",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
>
  <i className="fa fa-comment"></i>
</a>


      </div>
    </div>
  );
}

export default App;
