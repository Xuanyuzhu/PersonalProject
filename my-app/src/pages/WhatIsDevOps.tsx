// WhatIsDevOps.tsx
import React from 'react';
import  Sidebar from '../components/Sidebar';
import devOpsLoop from '../assets/DevOpsIcon.png';
import BackHomeButton from '../components/BackHomeButton';

const WhatIsDevOps: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <BackHomeButton /> 
        <h1 style={{ fontSize: '28px', marginBottom: '1rem' }}>What is DevOps?</h1>
        <p style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          DevOps is a combination of <strong>Development</strong> and <strong>Operations</strong>. It emphasizes
          collaboration between software developers and IT operations to enable faster, more reliable software delivery.
        </p>

        <p style={{ fontSize: '15px', lineHeight: 1.6 }}>
          Think of it like building a house. Developers draw the blueprints, and operations teams do the construction.
          If they don’t communicate, mistakes happen. DevOps ensures that both sides work together smoothly — with automation,
          shared goals, and continuous improvement.
        </p>

        <img
          src={devOpsLoop}
          alt="DevOps Loop"
          style={{ marginTop: '2rem', marginBottom: '2rem', width: '180px' }}
        />

        <p style={{ fontSize: '15px', lineHeight: 1.6 }}>
          The DevOps lifecycle is a continuous loop: Plan → Develop → Build → Test → Release → Deploy → Operate → Monitor.
        </p>

        <ul style={{ fontSize: '14px', marginTop: '1rem', paddingLeft: '1.2rem' }}>
          <li><strong>Plan:</strong> Define features and goals</li>
          <li><strong>Develop:</strong> Write and commit code</li>
          <li><strong>Build:</strong> Compile code, create packages</li>
          <li><strong>Test:</strong> Automated and manual testing</li>
          <li><strong>Release:</strong> Approve and stage for deployment</li>
          <li><strong>Deploy:</strong> Push to production</li>
          <li><strong>Operate:</strong> Keep systems running</li>
          <li><strong>Monitor:</strong> Analyze and improve performance</li>
        </ul>

        <p style={{ fontSize: '14px', marginTop: '2rem', color: '#555' }}>
          Want to see the tools behind DevOps? → Click "Recommended Toolchain" in the sidebar.
        </p>
      </div>
    </div>
  );
};

export default WhatIsDevOps;
