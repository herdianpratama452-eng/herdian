import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2dnVib25lZ2lzeWl3c2Fja2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NTAzMTksImV4cCI6MjA4NzIyNjMxOX0.F5IIPajSyrxcnkhcUsQcjxaOS-QKSKrEmBr1R0wqVIs",
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
