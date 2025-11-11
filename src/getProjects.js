import { createClient } from "@supabase/supabase-js";


// Creating connection to supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


// Function that gets projects from supabase
async function getProjects() {
    const { data: projects, error } = await supabase.from('Projects').select('*');

    if(error){
        console.error('Failed to fetch data: ', error.message);
    } else {
        console.log(projects)
    }
}

getProjects();