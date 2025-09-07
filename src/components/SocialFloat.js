import React from 'react';

function SocialFloat({ onQuoteClick }) {
  return (
    <>
      <a
        href="https://wa.me/918886092333"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          width: "55px",
          height: "55px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#25d366",
          color: "#fff",
          borderRadius: "50px",
          textAlign: "center",
          fontSize: "28px",
          boxShadow: "2px 2px 5px #999",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span style={{ fontSize: "28px" }}>
          <i className="fa fa-whatsapp"></i>
        </span>
      </a>
      <a
        href="https://instagram.com/YOUR_INSTAGRAM"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          width: "55px",
          height: "55px",
          bottom: "110px",
          right: "40px",
          backgroundColor: "#C13584",
          color: "#fff",
          borderRadius: "50px",
          textAlign: "center",
          fontSize: "28px",
          boxShadow: "2px 2px 5px #999",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span style={{ fontSize: "28px" }}>
          <i className="fa fa-instagram"></i>
        </span>
      </a>
      <button
        className="quote-btn"
        onClick={onQuoteClick}
        style={{
          position: "fixed",
          bottom: "180px",
          right: "40px",
          padding: "12px 18px",
          borderRadius: "24px",
          border: "2px solid #b6d94b",
          backgroundColor: "#b6d94b",
          color: "#222",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 10,
          fontSize: "16px"
        }}
      >
        FOR A QUOTE
      </button>
    </>
  );
}

export default SocialFloat;
