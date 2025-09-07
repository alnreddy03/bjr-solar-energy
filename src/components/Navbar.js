import React from 'react';
import bjr from '../assets/images/bjr-solar-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={bjr}
          alt="BJRI Solar Logo"
          width="36"
          height="36"
          style={{ objectFit: 'contain' }}
          loading="lazy"
        />
        BJRI Solar Energy Systems
      </span>
      <ul className="nav-links" style={{ marginRight:"100px" } }>
        <li><a href="#home">Home</a></li>
        <li><a href="#whyus">Why Us</a></li>
        <li><a href="#segments">Segments</a></li>
        <li><a href="#steps">Process</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#faq">FAQ</a></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
