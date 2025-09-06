import React from 'react';
import bjr from '../assets/images/bjr-solar-logo.png';

const Navbar = ({ onQuoteClick }) => (
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
    <ul className="nav-links" >
      <li><a href="#home">Home</a></li>
      <li><a href="#whyus">Why Us</a></li>
      <li><a href="#segments">Segments</a></li>
      <li><a href="#steps">Process</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li>
        <button
          className="quote-btn"
          onClick={onQuoteClick} style={{  marginRight: '50px' }}
        >
          GET A QUOTE
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;