import React from 'react';
import { partners } from '../data';

function Partners() {
  return (
    <section style={{padding: '20px'}}>
      <h2>Our Partners</h2>
      <ul style={{display: 'flex', gap: '20px', listStyle: 'none', padding: 0, flexWrap: 'wrap'}}>
        {partners.map(partner => (
          <li key={partner} style={{border: '1px solid #ccc', padding: '10px 15px', borderRadius: '5px'}}>
            {partner}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Partners;
