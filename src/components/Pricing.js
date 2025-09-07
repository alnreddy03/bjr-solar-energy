import React from 'react';
import { pricingTable } from '../data';

function Pricing() {
  return (
    <section style={{ padding: '20px' }}>
      <h2>Pricing & Packages</h2>
      <div
        style={{
          overflowX: 'auto',  
          WebkitOverflowScrolling: 'touch',  
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '600px',  
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>System Size</th>
              <th style={thStyle}>Market Price</th>
              <th style={thStyle}>Govt. Subsidy</th>
              <th style={thStyle}>Net Price</th>
              <th style={thStyle}>Monthly Generation</th>
            </tr>
          </thead>
          <tbody>
            {pricingTable.map((row) => (
              <tr key={row.size}>
                <td style={tdStyle}>{row.size}</td>
                <td style={tdStyle}>{row.marketPrice}</td>
                <td style={tdStyle}>{row.subsidy}</td>
                <td style={tdStyle}>{row.netPrice}</td>
                <td style={tdStyle}>{row.monthlyUnits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const thStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  backgroundColor: '#f0f0f0',
  textAlign: 'left',
  fontWeight: 'bold',
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '8px',
};

export default Pricing;
