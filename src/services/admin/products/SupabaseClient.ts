import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ohwdqklamwslzrhgkvup.supabase.co";
const supabaseApi = "sb_publishable_oYJBmQoJ8OvVZyieB_B_ZQ_Dblx7GSy";

export const supabase = createClient(supabaseUrl, supabaseApi);
