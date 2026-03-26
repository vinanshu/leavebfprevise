import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wqjzbyblmcrxafcbljij.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxanpieWJsbWNyeGFmY2JsamlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxODg0ODAsImV4cCI6MjA4MDc2NDQ4MH0.h_gkapGKui90NWPVIpDNpMaMFGZcaxkaTTpkGjloyWI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data, error } = await supabase.from('admin_users').select('*').eq('username', 'inspector');
  console.log('admin_users:', data, error);

  const { data: data2, error: error2 } = await supabase.from('personnel').select('*').eq('username', 'inspector');
  console.log('personnel:', data2, error2);
}

check();
