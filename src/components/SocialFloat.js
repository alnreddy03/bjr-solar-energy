import React from 'react';

function SocialFloat({ onQuoteClick }) {
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

  const baseStyle = {
    position: 'fixed',
    right: isMobile ? '20px' : '40px',
    color: '#fff',
    borderRadius: '50%',
    textAlign: 'center',
    boxShadow: '2px 2px 5px #999',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iconSize = isMobile ? 45 : 55;
  const fontSize = isMobile ? 22 : 28;

  return (
    <>
      <a
        href="https://wa.me/918886092333"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          ...baseStyle,
          bottom: isMobile ? 10 : 40,
          width: iconSize,
          height: iconSize,
          backgroundColor: '#25d366',
          fontSize: fontSize,
        }}
      >
        <i className="fa fa-whatsapp" />
      </a>
      <a
        href="https://instagram.com/YOUR_INSTAGRAM"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        style={{
          ...baseStyle,
          bottom: isMobile ? 70 : 110,
          width: iconSize,
          height: iconSize,
          backgroundColor: '#C13584',
          fontSize: fontSize,
        }}
      >
        <i className="fa fa-instagram" />
      </a>
      <button
        className="quote-btn"
        onClick={onQuoteClick}
        aria-label="Request a Quote"
        style={{
          position: 'fixed',
          bottom: isMobile ? 130 : 180,
          right: isMobile ? 20 : 40,
          padding: isMobile ? '8px 14px' : '12px 18px',
          borderRadius: '24px',
          border: '2px solid #b6d94b',
          backgroundColor: '#b6d94b',
          color: '#222',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: isMobile ? 14 : 16,
          width: isMobile ? 120 : 'auto',
          height: isMobile ? 40 : 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        FOR A QUOTE
      </button>
    </>
  );
}

export default SocialFloat;
