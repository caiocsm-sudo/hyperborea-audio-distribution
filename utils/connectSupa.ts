import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID as string

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase