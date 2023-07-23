// services/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ccrrivlvhdsrtwwddkzw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjcnJpdmx2aGRzcnR3d2Rka3p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMzg0NjEsImV4cCI6MjAwNTcxNDQ2MX0.it6d4Cq3YMNYYzguA4MLPtvjCDLs0v_eCBfk1bGlMGE" // Replace with your actual API key


const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
