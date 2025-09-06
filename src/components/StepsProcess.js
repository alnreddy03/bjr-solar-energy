import React from 'react';
const steps = ["Free Consultation", "Proposal & Confirmation", "Installation & Handover", "Support"];

function StepsProcess() {
  return (
    <div className="steps-process">
      {steps.map((s, i) => (
        <div className="step" key={i}>{i+1}. {s}</div>
      ))}
    </div>
  );
}
export default StepsProcess;
