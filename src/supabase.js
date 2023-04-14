import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bkjbahzjcfnhohnftqdu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJramJhaHpqY2ZuaG9obmZ0cWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAyNzc2NjAsImV4cCI6MTk5NTg1MzY2MH0.9FoNTYLm9CllWsi-kNHeo9MADDcAzyz9Bu8mdG9wpmw";
export default createClient(supabaseUrl, supabaseKey);
