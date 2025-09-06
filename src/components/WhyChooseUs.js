import React from 'react';

const features = [
  { icon: "⚡", title: "Fast Install", desc: "3-day installation" },
  { icon: "💰", title: "Zero Cost EMI", desc: "No upfront payment" },
  { icon: "🔒", title: "Warranty", desc: "25-year panel warranty" },
  { icon: "☎️", title: "Support", desc: "24/7 customer care" }
];

function WhyChooseUs() {
  return (
    <div className="cards-grid">
      {features.map((f, i) => (
        <div key={i} className="feature-card">
          <div className="icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default WhyChooseUs;
