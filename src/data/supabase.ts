import { Database } from '@/types/database.types';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qsupzttynwvspvgxygbc.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseKey || supabaseKey.trim() === '') {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_KEY or it is empty');
}

export const supabasePublic = createClient<Database>(supabaseUrl, supabaseKey);
// export const supabaseSecret = createClient<Database>(supabaseUrl, supabaseSecretKey || "");