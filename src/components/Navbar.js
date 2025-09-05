import React from 'react';

function Navbar() {
  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      width: '100%',
      background: '#1a1a1a',
      color: '#fff',
      padding: '0 0 0 30px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      fontFamily:'Segoe UI, Arial, sans-serif'
    }}>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        height:'56px',
        alignItems:'center'
      }}>
        <li style={{ marginRight: '30px', cursor: 'pointer' }} onClick={() => scrollToSection('home')}>Home</li>
        <li style={{ marginRight: '30px', cursor: 'pointer' }} onClick={() => scrollToSection('services')}>Services</li>
        <li style={{ marginRight: '30px', cursor: 'pointer' }} onClick={() => scrollToSection('pricing')}>Pricing</li>
        <li style={{ marginRight: '30px', cursor: 'pointer' }} onClick={() => scrollToSection('partners')}>Partners</li>
        <li style={{ marginRight: '30px', cursor: 'pointer' }} onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
