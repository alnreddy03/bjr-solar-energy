import React, { useState } from "react";

function QuoteModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Connect With Us To Go Solar</h2>
        <form style={{display: 'flex', flexDirection: 'column', gap: '18px'}}>
          <input type="text" placeholder="Full Name *" required />
          <input type="email" placeholder="Email Address *" required />
          <input type="tel" placeholder="Phone *" required />
          <select required>
            <option value="">Select Your State</option>
            {/* ...add options */}
          </select>
          <select required>
            <option value="">Solar For Home/Commercial?</option>
            <option>Home</option>
            <option>Commercial</option>
          </select>
          <select required>
            <option value="">Select Monthly Average Electricity Bill *</option>
            <option>&lt;₹1,000</option>
            <option>₹1,000-₹5,000</option>
            <option>&gt;₹5,000</option>
          </select>
          <select required>
            <option value="">Interested in Finance?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <button type="submit" style={{
            background:'green',  

            color:"#222", 
            fontWeight:"bold",
            padding:'10px', 
            borderRadius:'7px', 
            border:'none'
          }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuoteModal;
