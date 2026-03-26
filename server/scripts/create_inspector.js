// server/scripts/create_inspector.js
const { supabase } = require("../lib/supabaseClient");
const { v4: uuidv4 } = require("uuid");

async function createInspector() {
  const username = "inspector";
  const password = "inspect123";
  const role = "inspector";

  console.log(`🚀 Creating/Updating user: ${username}...`);

  try {
    // Check if user already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from("admin_users")
      .select("id")
      .eq("username", username)
      .maybeSingle();

    if (fetchError) {
      console.error("❌ Error fetching existing user:", fetchError.message);
      return;
    }

    let result;
    if (existingUser) {
      console.log(`ℹ️ User '${username}' already exists. Updating password...`);
      result = await supabase
        .from("admin_users")
        .update({
          password: password,
          role: role,
          is_active: true,
          updated_at: new Date().toISOString()
        })
        .eq("id", existingUser.id);
    } else {
      console.log(`✨ Creating new user '${username}'...`);
      result = await supabase
        .from("admin_users")
        .insert({
          id: uuidv4(),
          username: username,
          password: password,
          role: role,
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
    }

    if (result.error) {
      console.error("❌ operation failed:", result.error.message);
    } else {
      console.log(`✅ User '${username}' successfully ${existingUser ? 'updated' : 'created'}!`);
      console.log(`🔑 Username: ${username}`);
      console.log(`🔑 Password: ${password}`);
    }
  } catch (error) {
    console.error("💥 Unexpected error:", error.message);
  }
}

createInspector();
