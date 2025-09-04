import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Partners from './components/Partners';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: 'auto'}}>
      <Home />
      <Services />
      <Pricing />
      <Partners />
      <Contact />
    </div>
  );
}

export default App;
