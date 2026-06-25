import {createClient} from '@supabase/supabase-js'

const supabaseUrl = "https://azgxujswjcumgdborhes.supabase.co"
const supabaseKey = "sb_publishable_tvCose1OhRrcTapxfqkPYA_9zNlr6U-"
export const supabase = createClient(supabaseUrl, supabaseKey)