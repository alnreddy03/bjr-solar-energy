import React from 'react';
import agricultural from '../assets/images/agricultural.png';
import commercial from '../assets/images/commercial.png';
import residential from '../assets/images/residential.png';
function CustomerSegments() {
  return (
    <div className="segments-grid">
      <div className="segment" style={{ margin: '0px', padding:'5px'  }}>
        <img src={agricultural} alt="Agricultural " />
        <h3>Agricultural</h3>
      </div>
      <div className="segment" style={{ margin: '0px', padding:'5px'  }}>
        <img src={residential} alt="Residential" />
        <h3>Residential</h3>
      </div>
      <div className="segment" style={{ margin: '0px', padding:'5px'  }}>
        <img src={commercial} alt="Commercial" />
        <h3>Commercial</h3>
      </div>
    </div>
  );
}
export default CustomerSegments;