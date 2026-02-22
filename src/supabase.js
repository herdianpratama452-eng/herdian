import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// JANGAN gunakan 'throw new Error(supabaseAnonKey)'
// Gunakan pengecekan sederhana saja agar tidak crash
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Koneksi Supabase tertunda: Menunggu Environment Variables...");
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder",
);
