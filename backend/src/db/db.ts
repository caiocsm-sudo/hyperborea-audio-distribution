const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const projectUrl = process.env.SUPABASE_PROJECT_URL as string;
const apiKey = process.env.SUPABASE_API_KEY as string;

const supabase = createClient(projectUrl, apiKey);

module.exports = supabase;
