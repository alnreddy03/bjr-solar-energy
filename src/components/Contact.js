import React from 'react';
import { contactInfo } from '../data';

function Contact() {
  return (
    <section style={{padding: '20px'}}>
      <h2>Contact Us</h2>
      <p><strong>Manager:</strong> {contactInfo.manager}</p>
      <p><strong>Address:</strong> {contactInfo.address}</p>
      <p><strong>Phone:</strong> {contactInfo.phone.join(" / ")}</p>
      <p><strong>Email:</strong> {contactInfo.email}</p>
    </section>
  );
}

export default Contact;
