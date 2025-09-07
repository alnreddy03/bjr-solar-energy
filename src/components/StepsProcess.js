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
        }
        .step {
          background: #fff;
          padding: 18px 32px;
          border-radius: 18px;
          box-shadow: 0 2px 8px #0002;
          flex: 1 1 auto;
          min-width: 150px;
          text-align: center;
        }
        @media (max-width: 600px) {
          .steps-process {
            flex-wrap: wrap;
            gap: 20px;
          }
          .step {
            min-width: 100%;
          }
        }
      `}</style>
      <div className="steps-process">
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
