import React from 'react';
import { services } from '../data';

function Services() {
  return (
    <section style={{padding: '20px'}}>
      <h2>Our Services</h2>
      <ul>
        {services.map(service => (
          <li key={service} style={{margin: '10px 0'}}>{service}</li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
