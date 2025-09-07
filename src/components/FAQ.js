import React, { useState } from 'react';
const faqs = [
  { q: "What are the benefits of solar?", a: "Lower bills, clean energy, reliable power." },
  { q: "Can I get a loan?", a: "Yes, EMI available up to 5 years." }
];
function FAQ() {
  const [openIdx, setOpenIdx] = useState(-1);
  return (
    <div className="faqs"  >
      <h2 style={{ margin: '0px', padding:'5px'  }}>Frequently Asked Questions</h2>
      {faqs.map((faq, i) => (
        <div key={i}>
          <h4 onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>{faq.q}</h4>
          {openIdx === i && <p>{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
export default FAQ;
