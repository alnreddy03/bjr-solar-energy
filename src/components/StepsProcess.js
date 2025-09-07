import React from 'react';

const steps = ["Free Consultation", "Proposal & Confirmation", "Installation & Handover", "Support"];

function StepsProcess() {
  return (
    <>
      <style>{`
       
.steps-process {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 20px 0;
  flex-wrap: nowrap;
  padding: 0 16px;
  /* added horizontal padding */
  box-sizing: border-box;
}

.step {
  background: #fff;
  padding: 18px 32px;
  border-radius: 18px;
  box-shadow: 0 2px 8px #0002;
  flex: 1 1 auto;
  min-width: 150px;
  text-align: center;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .steps-process {
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 12px;
    /* smaller padding on mobile */
  }

  .step {
    min-width: 100%;
    max-width: 100%;
  }
}
      `}</style>
      <div className="steps-process" style={{   marginLeft: '15%', marginRight: '15%'  }}>
        {steps.map((step, idx) => (
          <div className="step" key={idx}>
            {idx + 1}. {step}
          </div>
        ))}
      </div>
    </>
  );
}

export default StepsProcess;
