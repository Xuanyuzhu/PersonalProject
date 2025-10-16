import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackHomeButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      style={{
        backgroundColor: '#3478f6',
        color: 'white',
        border: 'none',
        padding: '0.4rem 0.8rem',
        borderRadius: '5px',
        marginBottom: '1.5rem',
        cursor: 'pointer'
      }}
    >
      ⬅ Back to Home
    </button>
  );
};

export default BackHomeButton;
