'use client';

import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    setLoading(true); // Start loading state

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setLoading(false); // Stop loading state

    if (result?.error) {
      setError('Invalid email or password'); // Display error
    } else {
      router.push('http://localhost:3001/book');

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-medium py-2 rounded-lg transition ${loading
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{' '}
          <a href="/auth/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;