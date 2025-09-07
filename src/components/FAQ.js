import React, { useState } from 'react';

const faqGroups = [
  {
    category: "Residential",
    faqs: [
      { q: "Do home solar panels work at night?", a: "No, solar panels only generate power during daylight. You can use stored battery power or draw from the grid at night." },
      { q: "How long do residential solar panels last?", a: "Residential solar panels typically last 25–30 years with only minor efficiency loss." },
      { q: "How much subsidy am I eligible for home solar panels?", a: "Government subsidies range from 20–40% depending on your location and scheme." },
      { q: "Should I buy solar panels for my home?", a: "If you want lower bills and clean energy, solar panels are a long-term investment for homes." },
      { q: "How do I install or set up solar panels at home?", a: "Contact certified solar installers who will assess, design, and install your system." },
      { q: "What is the cost of solar panels for a home?", a: "A typical home system costs ₹40,000–₹60,000 per kW installed." },
      { q: "Which type of solar panel system is best for home use?", a: "Grid-connected panels with net metering are popular for homes." }
    ]
  },
  {
    category: "Commercial",
    faqs: [
      { q: "How much do solar panels cost for a business?", a: "Commercial solar systems cost ₹35,000–₹50,000 per kW, based on size and requirements." },
      { q: "How do solar panels benefit my business financially?", a: "They reduce electricity bills and may be eligible for depreciation and other tax benefits." },
      { q: "Where to buy commercial solar panels?", a: "Reach out to trusted solar vendors and certified installers with business solutions." },
      { q: "Is there any subsidy on solar panels for business?", a: "Some states and industries offer subsidies; check with your installer for details." },
      { q: "How does net metering work for businesses?", a: "Excess solar power can be sent to the grid for credits against future usage." }
    ]
  },
  {
    category: "Industrial",
    faqs: [
      { q: "What financing options are available for industrial solar?", a: "Banks and NBFCs offer loans, and third-party financing or lease models are available." },
      { q: "How does Freyr Energy ensure quality and reliability?", a: "They use high-grade panels and certified installers for robust industrial setup." },
      { q: "What is the lifespan of industrial solar panels?", a: "Industrial panels last 25+ years with regular maintenance." },
      { q: "How to maximize the efficiency of industrial solar panels?", a: "Routine cleaning and monitoring optimizes generation and life span." }
    ]
  },
  {
    category: "Agricultural",
    faqs: [
      { q: "How can solar energy help farmers?", a: "Solar panels can power irrigation pumps, cold storage, lights, and farm equipment reliably and at low cost." },
      { q: "What types of solar solutions are available for agriculture?", a: "Solar water pumps, greenhouse lighting, remote monitoring systems, and livestock shed power are common solutions." },
      { q: "Is subsidy available for agricultural solar?", a: "Yes, the government offers subsidies for solar pumps and equipment under various state and central schemes." },
      { q: "What is the benefit of solar-powered irrigation?", a: "Reduces electricity costs, enables irrigation in remote areas, and provides consistent power for crops." }
    ]
  }
];

function FAQ() {
  // Track open/closed for each group
  const [openGroups, setOpenGroups] = useState([true, true, true, true]);
  // Track which question in each group is open
  const [openQuestions, setOpenQuestions] = useState(Array(faqGroups.length).fill(-1));

  const toggleGroup = (idx) => {
    setOpenGroups(groups => groups.map((g, i) => i === idx ? !g : g));
    // Collapse questions when closing group
    if (openGroups[idx]) {
      setOpenQuestions(questions => questions.map((q, i) => i === idx ? -1 : q));
    }
  };

  const toggleQuestion = (gIdx, qIdx) => {
    setOpenQuestions(qs =>
      qs.map((val, i) => i === gIdx ? (val === qIdx ? -1 : qIdx) : val)
    );
  };

  return (
    <div className="faqs" style={{ padding: '40px 0' }}>
      <h2 style={{ margin: '0 0 24px 0', padding:'8px 0', fontSize:'2rem', textAlign:'center' }}>Frequently Asked Questions</h2>
      {faqGroups.map((group, gIdx) => (
        <div key={gIdx} style={{ marginBottom: '30px', background: 'transparent' }}>
          <h3
            onClick={() => toggleGroup(gIdx)}
            style={{
              margin: '0 0 18px 12px',
              fontSize:'1.25rem',
              color:'#1a2540',
              cursor:'pointer',
              fontWeight:'bold',
              background:'#e3efd6',
              borderRadius:'7px',
              padding:'10px 18px'
            }}
          >
            {group.category}
            <span style={{
              float:'right',
              fontSize:'1.7rem'
            }}>{openGroups[gIdx] ? '–' : '+'}</span>
          </h3>
          {openGroups[gIdx] && group.faqs.map((faq, idx) => (
            <div key={idx} style={{margin:'0'}}>
              <h4
                onClick={() => toggleQuestion(gIdx, idx)}
                style={{
                  cursor:'pointer',
                  margin:'0',
                  padding:'13px 18px',
                  borderBottom:'1px solid #d2d2d2',
                  background:'transparent',
                  fontWeight:'normal'
                }}
              >
                {faq.q}
                <span style={{ float: 'right' }}>{openQuestions[gIdx] === idx ? '-' : '+'}</span>
              </h4>
              {openQuestions[gIdx] === idx && (
                <p style={{
                  margin: '0 0 15px 0',
                  padding: '0 20px',
                  background: '#f7ffe1',
                  borderRadius: '3px',
                  color: '#222',
                }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
