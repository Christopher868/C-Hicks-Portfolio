import { createClient } from "@supabase/supabase-js";


// Creating connection to supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


// Function that gets projects from supabase
async function getProjects() {
    const { data: projects, error } = await supabase.from('Projects').select('*');

    if(error){
        console.error('Failed to get projects: ', error.message);
    } else {
        return projects;
    }
}



// Function that gets images from bucket
async function getImage(imagePath) {
    const { data, error } = await supabase.storage.from('Images').getPublicUrl(imagePath);
    
    if(error){
        console.error('Failed to get image: ', error.message)
    } else {
        const imageUrl = data.publicUrl
        return imageUrl
    }
}



// function for adding projects to website
const projectContent = document.querySelector('#project-content')

export async function addProjects(){
    const projects = await getProjects();

    if(projects && projects.length > 0){
        for (const project of projects){
            var imgUrl = await getImage(project.image_name)
            projectContent.innerHTML += 
                   `<div class="bg-white shrink-0 h-145 w-90 snap-center px-3 py-5 font-bold shadow-2xl shadow-black/80 rounded-2xl border border-slate-800 flex flex-col gap-4 items-center">
                        <h4 class="text-shadow-sm hover:text-shadow-lg text-xl hover:cursor-default">${project.name}</h4>
                        
                        <img class="w-[300px] sm:w-[350px] h-[200px] sm:h-[230px] rounded-2xl border shadow-sm hover:shadow-xl border-black/15" 
                            src="${imgUrl}" 
                            alt="picture of ${project.name} website">

                        <div class="flex flex-col items-center px-5">
                            <h5 class="hover:cursor-default">Project Info</h5>
                            <p class="text-black text-center font-normal text-sm line-clamp-4 hover:cursor-default">
                            ${project.description}
                            </p>
                        </div>

                        <div class="text-center">
                            <span class="text-lg font-bold hover:cursor-default">Built With</span>
                            <p class="text-black font-normal hover:cursor-default">${project.tools}</p>
                        </div>
                        
                        <div class="flex gap-5 text-white mt-auto">
                            <a href="${project.github_url}"><button type="button" class="bg-slate-800 px-8 py-2 rounded-2xl shadow-sm shadow-blue-400 border border-black hover:shadow-md hover:text-blue-400 active:shadow-inner hover:cursor-pointer">Github</button></a>
                            <a href="${project.website_url}"><button type="button" class="bg-slate-800 px-8 py-2 rounded-2xl shadow-sm shadow-blue-400 border border-black hover:shadow-md hover:text-blue-400 active:shadow-inner hover:cursor-pointer">Website</button></a>
                        </div>
                    </div>
                    `;
            
        }
    }
};

