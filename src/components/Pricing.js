import React from 'react';
import { pricingTable } from '../data';

function Pricing() {
  return (
    <section style={{padding: '20px'}}>
      <h2>Pricing & Packages</h2>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={{border: '1px solid #ccc', padding: '8px'}}>System Size</th>
            <th style={{border: '1px solid #ccc', padding: '8px'}}>Market Price</th>
            <th style={{border: '1px solid #ccc', padding: '8px'}}>Govt. Subsidy</th>
            <th style={{border: '1px solid #ccc', padding: '8px'}}>Net Price</th>
            <th style={{border: '1px solid #ccc', padding: '8px'}}>Monthly Generation</th>
          </tr>
        </thead>
        <tbody>
          {pricingTable.map(row => (
            <tr key={row.size}>
              <td style={{border: '1px solid #ccc', padding: '8px'}}>{row.size}</td>
              <td style={{border: '1px solid #ccc', padding: '8px'}}>{row.marketPrice}</td>
              <td style={{border: '1px solid #ccc', padding: '8px'}}>{row.subsidy}</td>
              <td style={{border: '1px solid #ccc', padding: '8px'}}>{row.netPrice}</td>
              <td style={{border: '1px solid #ccc', padding: '8px'}}>{row.monthlyUnits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Pricing;
