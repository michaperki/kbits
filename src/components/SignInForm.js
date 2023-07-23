// components/SignInForm.js
import { useState } from 'react';
import authService from '../services/authService';

const SignInForm = ({ supabase }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await authService.signIn(supabase, email, password);
      // Handle successful sign-in, if needed
    } catch (error) {
      // Handle sign-in error
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignInForm;
