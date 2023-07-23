import { useState, useEffect } from 'react';
import { useAuth } from '@supabase/auth';

const Home = () => {
  const { user } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, {user.email}!</h1>
      ) : (
        <h1>Welcome to our Web-3 App!</h1>
      )}
      {!isLoggedIn && <p>Please sign in to access more features.</p>}
    </div>
  );
};

export default Home;
