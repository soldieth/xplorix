'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setEmail('');
    } catch (error: any) {
      console.error('Error saving email:', error);
      setStatus('error');
      setErrorMessage(error.message || 'An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container">
      <Logo />
      
      <h1 className="title">
        Welcome to Xplorix
      </h1>
      
      <p className="subtitle">
        Get early access to beta testing
      </p>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input"
          required
          disabled={status === 'loading'}
        />
        
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="button"
        >
          {status === 'loading' ? 'SENDING...' : 'GET EARLY ACCESS'}
        </button>

        {status === 'success' && (
          <p className="success-message">
            Thank you! We will send you an invitation when the beta version is available.
          </p>
        )}

        {status === 'error' && (
          <p className="error-message">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
} 