import React, { useState } from 'react';
import bjr from '../assets/images/bjr-solar-logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <span className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={bjr} alt="BJR Solar Logo" width="36" height="36" style={{objectFit:'contain'}} loading="lazy" />
        BJR Solar Energy Systems
      </span>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
      </button>
      <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#whyus" onClick={() => setMenuOpen(false)}>Why Us</a></li>
        <li><a href="#segments" onClick={() => setMenuOpen(false)}>Segments</a></li>
        <li><a href="#steps" onClick={() => setMenuOpen(false)}>Process</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
