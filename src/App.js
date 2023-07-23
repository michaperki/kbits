import "./index.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import WalletConnection from "./components/WalletConnection";
import supabase from "./services/supabase";
import authService from "./services/authService";
import Home from "./pages/Home";

export default function App() {
  const [session, setSession] = useState(null);

  const handleSignOut = async () => {
    try {
      await authService.signOut();
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  useEffect(() => {
    authService.getSession().then((session) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    return <Home />;
  }
}
