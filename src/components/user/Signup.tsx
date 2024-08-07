"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paramsCode, setParamsCode] = useState('');
  const [referCode, setReferCode] = useState('');


  // Function to extract and validate refer code from URL
  const extractReferCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('ref') || '';
  };

  useEffect(() => {
    const referCodeFromUrl = extractReferCode();
    // Set refer code from URL to state
    setParamsCode(referCodeFromUrl);
  }, []);

  

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      // const userData = await signup(name, email, password, referCode);
      // console.log('Signup Successful', userData);
      
    } catch (error) {
      console.error('Signup Error', error);
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Determine if refer code input should be disabled
  const isReferCodeDisabled = !!referCode;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">SignUp</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          {/* Conditional rendering of Refer Code input */}
          {paramsCode ? (
            <input
              type="text"
              value={paramsCode}
              readOnly
              className="w-full p-2 mb-4 border rounded bg-gray-200"
              disabled
            />
          ) : (
            <input
              type="text"
              placeholder="Refer Code"
              value={referCode}
              onChange={(e) => setReferCode(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
          )}
          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-white rounded hover:bg-black transition"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Signup'}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link href="/user/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}