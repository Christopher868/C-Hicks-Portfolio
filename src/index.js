const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#menu-close-btn')
const collapsingMenu = document.querySelector('#collapsing-menu')
const projectContent = document.querySelector('#project-content')


// Click event for toggle dropdown menu
document.addEventListener('click', (e) => {
    if(e.target.closest('svg') === menuBtn) {
        const closed = collapsingMenu.classList.contains('w-0')
        closed ? collapsingMenu.classList.replace('w-0', 'w-50') : collapsingMenu.classList.replace('w-50', 'w-0');
       
    } else if(e.target.closest('svg') !== menuBtn && e.target.closest('div') !== collapsingMenu || e.target.closest('svg') === closeBtn){
            collapsingMenu.classList.replace('w-50', 'w-0');
    }
});

// Makes Scroll bar start in middle on refresh and resize
const scrollPosiition = (projectContent.scrollWidth - projectContent.clientWidth) / 2

projectContent.scrollLeft = scrollPosiition;

window.addEventListener('resize', () => {
    projectContent.scrollLeft = scrollPosiition;
})