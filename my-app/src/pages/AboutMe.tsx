import React from 'react';
import BackHomeButton from '../components/BackHomeButton';

const AboutMe: React.FC = () => {
return (
<div style={{ padding: '2rem' }}>
<BackHomeButton />
<h1>About Me</h1>
<p>This page will include your personal introduction and contact information.</p>
</div>
);
};


export default AboutMe;