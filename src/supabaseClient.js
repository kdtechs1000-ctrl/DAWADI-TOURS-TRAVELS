import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rqfxmjvyszaxahbpqqkr.supabase.co';
const supabaseAnonKey = 'sb_publishable_aN9dJktmCOuQ9X4SOClwTw_8tTkzRaX';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);