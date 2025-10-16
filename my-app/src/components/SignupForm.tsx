// SignupForm.tsx
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('https://backend-747060403741.us-central1.run.app/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Signup failed');
      setMessage('Signup successful!');
    } catch (err: any) {
      setMessage(err.message || 'Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', maxWidth: '500px' }}>
      <h3 style={{ marginBottom: '1rem' }}>Join our DevOps community</h3>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />
      <button type="submit" style={{ padding: '0.6rem 1.5rem', background: '#3478f6', color: 'white', border: 'none', borderRadius: '4px' }}>
        Sign Up
      </button>
      <p style={{ marginTop: '1rem', color: '#555' }}>{message}</p>
    </form>
  );
};
