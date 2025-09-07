import React from 'react';

import vikramLogo from '../assets/images/brands/vikram.png';
import waareeLogo from '../assets/images/brands/waaree.png';
import poweroneLogo from '../assets/images/brands/powerone.png';
import tatapowerLogo from '../assets/images/brands/tatapower.png';
import growattLogo from '../assets/images/brands/growatt.png';
import adaniLogo from '../assets/images/brands/adani.png';
import renewLogo from '../assets/images/brands/renew.png';
import ksolarLogo from '../assets/images/brands/ksolar.png';
import pvblinkLogo from '../assets/images/brands/pvblink.png';
import deyeLogo from '../assets/images/brands/deye.png';


const brands = [
  { name: "Vikram Solar", src: vikramLogo, link: "https://www.vikramsolar.com/" },
  { name: "Waaree", src: waareeLogo, link: "https://www.waaree.com/" },
  { name: "Power-One", src: poweroneLogo, link: "https://www.powerone-renewable-solutions.com/" },
  { name: "Tata Power", src: tatapowerLogo, link: "https://www.tatapower.com/" },
  { name: "Growatt", src: growattLogo, link: "https://www.growatt.com/" },
  { name: "Adani", src: adaniLogo, link: "https://www.adanisolar.com/" },
  { name: "ReNew", src: renewLogo, link: "https://renewpower.in/" },
  { name: "KSolar", src: ksolarLogo, link: "https://ksolare.com/" },
  { name: "PVBlink", src: pvblinkLogo, link: "https://pvblink.com/" },
  { name: "Deye", src: deyeLogo, link: "https://www.deyeinverter.com/" }
];

const Brands = () => (
  <section className="brands-section color-band white">
    <h2 style={{ textAlign: 'center', margin: '18px 0 28px 0', color: '#1a2540' }}>
      Brands We Trust
    </h2>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '42px 54px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px 0 40px 0'
    }}>
      {brands.map((b, i) => (
        <div key={i} style={{ minWidth: 110, textAlign: 'center' }}>
          <a href={b.link} target="_blank" rel="noopener noreferrer">
            <img
              src={b.src}
              alt={b.name}
              style={{
                maxWidth: '110px',
                maxHeight: '52px',
                objectFit: 'contain',
                marginBottom: '9px',
                cursor: 'pointer'
              }}
            />
          </a>
          <br />
          <span style={{ fontSize: '13px', color: '#212' }}>{b.name}</span>
        </div>
      ))}

    </div>
  </section>
);

export default Brands;
