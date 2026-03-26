import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wqjzbyblmcrxafcbljij.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxanpieWJsbWNyeGFmY2JsamlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxODg0ODAsImV4cCI6MjA4MDc2NDQ4MH0.h_gkapGKui90NWPVIpDNpMaMFGZcaxkaTTpkGjloyWI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function updatePassword() {
  const { data, error } = await supabase
    .from('admin_users')
    .update({ password: 'inspect123' })
    .eq('username', 'inspector')
    .select();

  console.log('Update result:', data, error);
}

updatePassword();
