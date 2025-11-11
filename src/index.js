const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#menu-close-btn')
const collapsingMenu = document.querySelector('#collapsing-menu')
const projectContent = document.querySelector('#project-content')
const navBar = document.querySelector('#navbar')


// Click event for toggle dropdown menu
document.addEventListener('click', (e) => {
    if(e.target.closest('svg') === menuBtn) {
        const closed = collapsingMenu.classList.contains('w-0')
        closed ? collapsingMenu.classList.replace('w-0', 'w-50') : collapsingMenu.classList.replace('w-50', 'w-0');
       
    } else if(e.target.closest('svg') !== menuBtn && e.target.closest('div') !== collapsingMenu || e.target.closest('svg') === closeBtn){
            collapsingMenu.classList.replace('w-50', 'w-0');
    }
});

// Closes side menu after reaching sm breakpoint
window.addEventListener('resize', () => {
    if(window.innerWidth >= 640){
        collapsingMenu.classList.replace('w-50', 'w-0');
    }
})

// Makes Scroll bar start in middle on refresh
document.addEventListener('DOMContentLoaded', () => {
    const scrollPosiition = (projectContent.scrollWidth - projectContent.clientWidth) / 2

    projectContent.scrollLeft = scrollPosiition;

})


// Makes navbar invisible when user starts scrolling
window.addEventListener('scroll', () =>{
    if(window.scrollY > 64){
        navBar.classList.replace('bg-slate-800', 'bg-transparent')
        navBar.classList.replace('shadow-lg', 'shadow-sm')
    } else {
        navBar.classList.replace('bg-transparent', 'bg-slate-800')
        navBar.classList.replace('shadow-sm', 'shadow-lg')
    }
})

