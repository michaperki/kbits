// services/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ccrrivlvhdsrtwwddkzw.supabase.co";
const supabaseKey = "YOUR_SUPABASE_API_KEY"; // Replace with your actual API key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
