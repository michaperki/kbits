// services/authService.js
import supabase from "./supabase";

const signIn = async (supabase, email, password) => {
  try {
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
  } catch (error) {
    // Handle sign-in error
    console.error(error);
    throw error;
  }
};

const getSession = async () => {
  try {
    const { data: session, error } = await supabase.auth.getSession();
    if (error) throw error;
    return session;
  } catch (error) {
    // Handle error
    console.error(error);
    return null;
  }
};

const signOut = async () => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

export default { signIn, getSession, signOut };
