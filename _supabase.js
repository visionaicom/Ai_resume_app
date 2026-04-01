import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://bvphejopafojkortmzjc.supabase.co",
  "sb_publishable_DAy-jxY5mlwv_kZ2cQYzxA_lZ6aG5ZX"
);

export default supabase;
