import React from 'react';
function Footer() {
  return (
    <footer className="footer" style={{ padding: '10px',  }}>
      Copyright © {new Date().getFullYear()} BJRI Solar Energy Systems | All rights reserved.
    </footer>
  );
}
export default Footer;
