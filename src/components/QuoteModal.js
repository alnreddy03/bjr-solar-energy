import React, { useState } from "react";

function QuoteModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    solarFor: "",
    electricityBill: "",
    finance: ""
  });

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
State: ${formData.state}
Solar For: ${formData.solarFor}
Monthly Electricity Bill: ${formData.electricityBill}
Interested in Finance: ${formData.finance}
    `;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "918886092333";  
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    onClose();
  };
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
    "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Start Your Solar Journey With Us</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required />
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select Your State</option>
            {indianStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <select name="solarFor" value={formData.solarFor} onChange={handleChange} required>
            <option value="">Solar For Home/Commercial?</option>
            <option value="Home">Home</option>
            <option value="Commercial">Commercial</option>
          </select>
          <select name="electricityBill" value={formData.electricityBill} onChange={handleChange} required>
            <option value="">Select Monthly Average Electricity Bill *</option>
            <option value="<1000">₹1,000</option>
            <option value="1000-5000">₹1,000-₹5,000</option>
            <option value=">5000">₹5,000+</option>
          </select>
          <select name="finance" value={formData.finance} onChange={handleChange} required>
            <option value="">Interested in Finance?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <button type="submit"
            style={{
              background: '#b6d94b',
              color: "#222",
              fontWeight: "bold",
              padding: '10px',
              borderRadius: '7px',
              border: 'none'
            }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuoteModal;
