import React from 'react';
import Sidebar from '../components/Sidebar';
import { Header } from '../components/Header';
import { DevOpsLoop } from '../components/DevOpsLoop';
import { SignupForm } from '../components/SignupForm';
import { Solutions } from '../components/Solutions';

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
  <Sidebar />
  
  <div style={{
    flex: 1,
    padding: '2rem',
    position: 'relative',
    backgroundColor: '#f7faff',
    maxWidth: '1000px',
    margin: '0 auto',
  }}>
    <DevOpsLoop />
    <Header />
    <SignupForm />
    <Solutions />
  </div>
</div>
  );
};

export default Home;
