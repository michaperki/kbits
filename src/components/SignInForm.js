import { useState } from 'react';

const SignInForm = ({ supabase }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = async () => {
        try {
        const { error } = await supabase.auth.signIn({ email, password });
        if (error) throw error;
        } catch (error) {
        // Handle sign in error
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
        <button onClick={signIn}>Sign In</button>
        </div>
    );
}

export default SignInForm;

