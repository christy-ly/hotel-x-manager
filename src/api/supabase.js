import { createClient } from "@supabase/supabase-js";
import { supabaseUrl, supabaseKey } from "../configs/env";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

